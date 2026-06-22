"use client";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n/provider";

export function ImpressumPage() {
  const { dict } = useI18n();
  const i = dict.impressum;
  return (
    <article className="relative">
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 pb-16 pt-24 sm:pt-32">
          <Reveal>
            <Badge variant="muted" className="w-fit px-4 py-1.5 text-xs">
              {i.kicker}
            </Badge>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="hero-display text-balance text-4xl text-foreground sm:text-6xl">
              {i.title}
            </h1>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {i.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
        <dl className="flex flex-col gap-10">
          {i.sections.map((sec, idx) => (
            <Reveal key={sec.title} as="div" delayMs={idx * 30}>
              <div className="grid gap-2 border-t border-border/60 pt-6 sm:grid-cols-[12rem_1fr] sm:gap-8 sm:pt-8">
                <dt className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {sec.title}
                </dt>
                <dd className="flex flex-col gap-1 text-foreground/90">
                  {sec.lines.map((line, k) => (
                    <span key={k} className="text-pretty leading-relaxed">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal>
          <p className="mt-12 rounded-2xl border border-dashed border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
            {i.placeholderNote}
          </p>
        </Reveal>
      </section>
    </article>
  );
}
