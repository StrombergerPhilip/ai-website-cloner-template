"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CashbackChart } from "@/components/cashback/cashback-chart";
import { useI18n } from "@/lib/i18n/provider";
import {
  computeCashbackSchedule,
  formatEuro,
  formatEuroPrecise,
  monthsUntilCap,
} from "@/lib/cashback";
import type { CashbackInput } from "@/types/foxora";

const DEFAULT_INPUT: CashbackInput = {
  activationFee: 250,
  monthlySpend: 800,
  cashbackRatePct: 2,
  capPct: 100,
};

export function CashbackCalculator({ compact = false }: { compact?: boolean }) {
  const { locale, dict } = useI18n();
  const labels = dict.modell.calcInputs;
  const result = dict.modell.calcResult;
  const [input, setInput] = useState<CashbackInput>(DEFAULT_INPUT);
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const rows = useMemo(() => computeCashbackSchedule(input), [input]);
  const months = useMemo(() => monthsUntilCap(rows), [rows]);
  const total = rows.length > 0 ? rows[rows.length - 1].totalEarned : 0;
  const cap = (input.activationFee * input.capPct) / 100;
  const ratePerMonth = (input.cashbackRatePct / 100) * input.monthlySpend;

  useEffect(() => {
    setExplanation("");
  }, [input]);

  const update = useCallback(
    (key: keyof CashbackInput) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setInput((prev) => ({
          ...prev,
          [key]: Number.isFinite(value) ? value : prev[key],
        }));
      },
    [],
  );

  const explain = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    setExplanation("");
    try {
      const resp = await fetch("/api/cashback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, schedule: rows, locale }),
      });
      if (!resp.ok || !resp.body) throw new Error(String(resp.status));
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setExplanation(acc);
      }
    } catch {
      setExplanation(
        locale === "en"
          ? "Could not load explanation. Please try again."
          : "Erklärung konnte nicht geladen werden. Bitte erneut versuchen.",
      );
    } finally {
      setLoading(false);
    }
  }, [input, locale, loading, rows]);

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-apple sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field
          id="activation"
          label={labels.activation}
          value={input.activationFee}
          onChange={update("activationFee")}
          min={50}
          step={10}
        />
        <Field
          id="monthlySpend"
          label={labels.monthlySpend}
          value={input.monthlySpend}
          onChange={update("monthlySpend")}
          min={0}
          step={10}
        />
        <Field
          id="rate"
          label={labels.rate}
          value={input.cashbackRatePct}
          onChange={update("cashbackRatePct")}
          min={0.1}
          max={10}
          step={0.1}
        />
        <Field
          id="cap"
          label={labels.cap}
          value={input.capPct}
          onChange={update("capPct")}
          min={10}
          max={200}
          step={5}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat
          label={result.monthsLabel}
          value={months !== null ? String(months) : "∞"}
          accent={months !== null}
        />
        <Stat
          label={result.totalLabel}
          value={formatEuroPrecise(total, locale)}
        />
        <Stat
          label={result.ratePerMonth}
          value={formatEuroPrecise(ratePerMonth, locale)}
        />
        <Stat label={result.capValue} value={formatEuro(cap, locale)} />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {Math.min(100, Math.round((total / Math.max(1, cap)) * 100))}%
          </span>
          {months !== null ? (
            <Badge variant="coral">{result.capReached}</Badge>
          ) : null}
        </div>
        <Progress value={Math.min(100, (total / Math.max(1, cap)) * 100)} />
      </div>

      <CashbackChart rows={rows} cap={cap} />

      {!compact ? (
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5">{result.tableMonth}</th>
                <th className="px-4 py-2.5">{result.tableEarned}</th>
                <th className="px-4 py-2.5">{result.tableTotal}</th>
                <th className="px-4 py-2.5">{result.tablePct}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.month}
                  className="border-t border-border last:bg-muted/30"
                >
                  <td className="px-4 py-2.5 font-mono text-xs">{r.month}</td>
                  <td className="px-4 py-2.5">
                    {formatEuroPrecise(r.earned, locale)}
                  </td>
                  <td className="px-4 py-2.5">
                    {formatEuroPrecise(r.totalEarned, locale)}
                  </td>
                  <td className="px-4 py-2.5">
                    {r.pctOfCap.toFixed(0)}%
                    {r.reached ? (
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-accent">
                        cap
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {!compact ? (
        <div className="flex flex-col gap-3">
          <Button
            type="button"
            onClick={explain}
            disabled={loading || rows.length === 0}
            variant="default"
            size="lg"
            className="w-full justify-center gap-2 sm:w-auto"
          >
            <Sparkles className="size-4" />
            {loading ? labels.loading : labels.explain}
          </Button>
          {explanation ? (
            <div className="rounded-2xl border border-border bg-muted/40 p-5">
              <h3 className="mb-2 text-sm font-semibold tracking-tight">
                {result.explanationTitle}
              </h3>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                {explanation}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-border bg-background p-4">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span
        className={`text-2xl font-semibold tracking-tight ${
          accent ? "text-accent" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
