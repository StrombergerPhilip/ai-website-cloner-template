import type { CashbackInput, CashbackRow } from "@/types/foxora";

const MAX_MONTHS = 120;

export function computeCashbackSchedule(input: CashbackInput): CashbackRow[] {
  const { activationFee, monthlySpend, cashbackRatePct, capPct } = input;
  const cap = activationFee * (capPct / 100);
  const ratePerMonth = (cashbackRatePct / 100) * monthlySpend;

  if (cap <= 0 || ratePerMonth <= 0) {
    return [];
  }

  const rows: CashbackRow[] = [];
  let total = 0;
  for (let month = 1; month <= MAX_MONTHS; month += 1) {
    const remaining = cap - total;
    const earned = Math.min(ratePerMonth, Math.max(0, remaining));
    total += earned;
    const pct = (total / cap) * 100;
    const reached = total >= cap - 0.005;
    rows.push({
      month,
      earned: round2(earned),
      totalEarned: round2(total),
      pctOfCap: round2(Math.min(100, pct)),
      reached,
    });
    if (reached) break;
  }
  return rows;
}

export function monthsUntilCap(rows: CashbackRow[]): number | null {
  const hit = rows.find((r) => r.reached);
  return hit ? hit.month : null;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function formatEuro(value: number, locale: "de" | "en" = "de"): string {
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatEuroPrecise(
  value: number,
  locale: "de" | "en" = "de",
): string {
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
