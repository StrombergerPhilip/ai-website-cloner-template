"use client";

import { useMemo } from "react";
import type { CashbackRow } from "@/types/foxora";

export function CashbackChart({
  rows,
  cap,
}: {
  rows: CashbackRow[];
  cap: number;
}) {
  const points = useMemo(() => {
    if (rows.length === 0 || cap <= 0) return "";
    const w = 600;
    const h = 200;
    const padX = 16;
    const padY = 14;
    const innerW = w - padX * 2;
    const innerH = h - padY * 2;
    const maxX = rows.length;
    return rows
      .map((r, i) => {
        const x = padX + (i / Math.max(1, maxX - 1)) * innerW;
        const yRatio = Math.min(1, r.totalEarned / cap);
        const y = padY + innerH - yRatio * innerH;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  }, [rows, cap]);

  if (rows.length === 0 || cap <= 0) {
    return (
      <div className="flex h-[200px] items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
        —
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-muted/30 p-3">
      <svg
        viewBox="0 0 600 200"
        className="h-[200px] w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Cashback over time"
      >
        <defs>
          <linearGradient id="foxoraFill" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="0%"
              stopColor="oklch(0.72 0.18 38)"
              stopOpacity="0.35"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.72 0.18 38)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <line
          x1="16"
          x2="584"
          y1="14"
          y2="14"
          stroke="oklch(0.72 0.18 38)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.4"
        />
        <polygon
          fill="url(#foxoraFill)"
          points={`16,186 ${points} 584,186`}
        />
        <polyline
          fill="none"
          stroke="oklch(0.72 0.18 38)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    </div>
  );
}
