import { describe, expect, it } from "vitest";
import {
  computeCashbackSchedule,
  formatEuro,
  formatEuroPrecise,
  monthsUntilCap,
} from "./cashback";
import type { CashbackInput } from "@/types/foxora";

const baseInput: CashbackInput = {
  activationFee: 250,
  monthlySpend: 800,
  cashbackRatePct: 2,
  capPct: 100,
};

describe("computeCashbackSchedule", () => {
  it("reaches the 100% cap exactly when total cashback equals activation", () => {
    const rows = computeCashbackSchedule(baseInput);
    expect(rows.length).toBeGreaterThan(0);

    const last = rows[rows.length - 1];
    expect(last.reached).toBe(true);
    expect(last.totalEarned).toBeCloseTo(250, 2);
    expect(last.pctOfCap).toBeCloseTo(100, 2);

    // Every earlier row must NOT have reached the cap.
    for (const r of rows.slice(0, -1)) {
      expect(r.reached).toBe(false);
      expect(r.totalEarned).toBeLessThan(250);
    }
  });

  it("stops the schedule the moment the cap is hit (no overshoot)", () => {
    const rows = computeCashbackSchedule(baseInput);
    expect(rows.length).toBe(monthsUntilCap(rows));

    // The earned in the last month is what was needed to land on cap,
    // never more than the per-month rate.
    const ratePerMonth =
      (baseInput.cashbackRatePct / 100) * baseInput.monthlySpend;
    expect(rows[rows.length - 1].earned).toBeLessThanOrEqual(ratePerMonth);
  });

  it("computes the right month count for round numbers", () => {
    // €250 / (2% of €800 = €16) = 15.625, so cap hits in month 16.
    const rows = computeCashbackSchedule(baseInput);
    expect(monthsUntilCap(rows)).toBe(16);
  });

  it("returns an empty schedule when the cashback rate is zero", () => {
    const rows = computeCashbackSchedule({ ...baseInput, cashbackRatePct: 0 });
    expect(rows).toEqual([]);
    expect(monthsUntilCap(rows)).toBeNull();
  });

  it("returns an empty schedule when the monthly spend is zero", () => {
    const rows = computeCashbackSchedule({ ...baseInput, monthlySpend: 0 });
    expect(rows).toEqual([]);
  });

  it("returns an empty schedule when the cap is zero", () => {
    const rows = computeCashbackSchedule({ ...baseInput, capPct: 0 });
    expect(rows).toEqual([]);
  });

  it("scales linearly with the cap percentage", () => {
    const baseRows = computeCashbackSchedule(baseInput);
    const doubleCapRows = computeCashbackSchedule({
      ...baseInput,
      capPct: 200,
    });
    // Double cap → roughly double the months (allowing for the
    // partial last-month landing).
    expect(doubleCapRows.length).toBeGreaterThan(baseRows.length);
    expect(doubleCapRows.length).toBeLessThanOrEqual(baseRows.length * 2);
    expect(doubleCapRows[doubleCapRows.length - 1].totalEarned).toBeCloseTo(
      500,
      2,
    );
  });

  it("hits the cap in one month when the per-month rate exceeds it", () => {
    // €40/month cashback (1% of €4000) on a €250 cap = single-shot.
    const rows = computeCashbackSchedule({
      activationFee: 250,
      monthlySpend: 4000,
      cashbackRatePct: 10,
      capPct: 100,
    });
    expect(rows).toHaveLength(1);
    expect(rows[0].month).toBe(1);
    expect(rows[0].reached).toBe(true);
    // Earned is clamped to the cap, not the full rate.
    expect(rows[0].earned).toBeCloseTo(250, 2);
    expect(rows[0].totalEarned).toBeCloseTo(250, 2);
  });

  it("rounds earned and totalEarned to 2 decimals", () => {
    const rows = computeCashbackSchedule({
      activationFee: 100,
      monthlySpend: 333,
      cashbackRatePct: 1,
      capPct: 100,
    });
    for (const r of rows) {
      expect(Number.isFinite(r.earned)).toBe(true);
      expect(Math.round(r.earned * 100) / 100).toBe(r.earned);
      expect(Math.round(r.totalEarned * 100) / 100).toBe(r.totalEarned);
    }
  });

  it("monotonically increases the cumulative total", () => {
    const rows = computeCashbackSchedule(baseInput);
    for (let i = 1; i < rows.length; i += 1) {
      expect(rows[i].totalEarned).toBeGreaterThanOrEqual(
        rows[i - 1].totalEarned,
      );
      expect(rows[i].pctOfCap).toBeGreaterThanOrEqual(rows[i - 1].pctOfCap);
    }
  });

  it("never overshoots the cap (final pctOfCap clamps to 100)", () => {
    const rows = computeCashbackSchedule(baseInput);
    for (const r of rows) {
      expect(r.pctOfCap).toBeLessThanOrEqual(100);
    }
  });
});

describe("monthsUntilCap", () => {
  it("returns null for an empty schedule", () => {
    expect(monthsUntilCap([])).toBeNull();
  });

  it("returns the first month where reached is true", () => {
    const rows = computeCashbackSchedule(baseInput);
    const m = monthsUntilCap(rows);
    expect(m).not.toBeNull();
    expect(rows[m! - 1].reached).toBe(true);
    if (m! > 1) {
      expect(rows[m! - 2].reached).toBe(false);
    }
  });
});

describe("formatEuro / formatEuroPrecise", () => {
  it("formats whole euros without decimals (de)", () => {
    const out = formatEuro(250, "de");
    // de-DE locale uses a non-breaking space + euro sign suffix
    expect(out).toMatch(/250/);
    expect(out).toMatch(/€/);
    expect(out).not.toMatch(/,\d/);
  });

  it("formats whole euros without decimals (en)", () => {
    const out = formatEuro(250, "en");
    expect(out).toMatch(/250/);
    expect(out).toMatch(/€/);
    expect(out).not.toMatch(/\.\d/);
  });

  it("always shows two decimals in formatEuroPrecise", () => {
    expect(formatEuroPrecise(16, "de")).toMatch(/16,00/);
    expect(formatEuroPrecise(16, "en")).toMatch(/16\.00/);
    expect(formatEuroPrecise(0, "de")).toMatch(/0,00/);
  });
});
