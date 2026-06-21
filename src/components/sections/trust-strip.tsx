"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CashbackCalculator } from "@/components/cashback/cashback-calculator";
import { useI18n } from "@/lib/i18n/provider";

export function TrustStripAndMiniCalc() {
  const { dict } = useI18n();
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {dict.home.miniCalcKicker}
          </span>
          <h2 className="hero-display text-balance text-3xl text-foreground sm:text-5xl">
            {dict.home.miniCalcTitle}
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground">
            {dict.home.miniCalcLead}
          </p>
          <Button
            size="lg"
            className="w-fit gap-2"
            render={<Link href="/modell" />}
          >
            {dict.home.miniCalcCta}
            <ArrowRight className="size-4" />
          </Button>

          <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-border bg-muted/40 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="size-4 text-accent" />
              {dict.home.trustTitle}
            </div>
            <div className="flex flex-wrap gap-2">
              {dict.home.trustItems.map((item) => (
                <Badge key={item} variant="outline" className="font-mono">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <CashbackCalculator compact />
      </div>
    </section>
  );
}
