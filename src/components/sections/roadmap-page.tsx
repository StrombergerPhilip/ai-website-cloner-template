"use client";

import { Badge } from "@/components/ui/badge";
import { RoadmapPhases } from "@/components/sections/roadmap-phases";
import { useI18n } from "@/lib/i18n/provider";

export function RoadmapPage() {
  const { dict } = useI18n();
  const r = dict.roadmap;
  return (
    <>
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-24 sm:pt-32">
          <Badge variant="coral" className="w-fit px-4 py-1.5">
            {r.kicker}
          </Badge>
          <h1 className="hero-display text-balance text-5xl text-foreground sm:text-7xl md:text-8xl">
            {r.title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {r.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-32">
        <RoadmapPhases />
      </section>
    </>
  );
}
