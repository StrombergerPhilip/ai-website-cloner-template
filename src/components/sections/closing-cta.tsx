"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/provider";

export function ClosingCta() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-[var(--brand-night)] text-white">
      <div className="foxora-gradient absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
        <h2 className="hero-display max-w-3xl text-balance text-4xl sm:text-6xl md:text-7xl">
          {t("home.closingTitle")}
        </h2>
        <p className="max-w-xl text-pretty text-lg text-white/70">
          {t("home.closingLead")}
        </p>
        <Button
          size="lg"
          variant="default"
          className="bg-white text-[var(--brand-night)] hover:bg-white/90"
          render={<Link href="/modell" />}
        >
          {t("home.closingCta")}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
