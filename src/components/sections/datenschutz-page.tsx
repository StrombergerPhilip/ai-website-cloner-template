"use client";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n/provider";

export function DatenschutzPage() {
  const { dict } = useI18n();
  const d = dict.datenschutz;
  return (
    <article className="relative">
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 pb-16 pt-24 sm:pt-32">
          <Reveal>
            <Badge variant="muted" className="w-fit px-4 py-1.5 text-xs">
              {d.kicker}
            </Badge>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="hero-display text-balance text-4xl text-foreground sm:text-6xl">
              {d.title}
            </h1>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {d.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-10">
          {d.sections.map((sec, idx) => (
            <Reveal key={sec.title} delayMs={idx * 30}>
              <div className="flex flex-col gap-3 border-t border-border/60 pt-6 sm:pt-8">
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {sec.title}
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {sec.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  );
}
