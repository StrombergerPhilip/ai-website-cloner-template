"use client";

import { Coins, Layers, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const ICONS = [Coins, Lock, Layers];

export function ValuePillars() {
  const { dict } = useI18n();
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <header className="mb-12 flex flex-col gap-3 sm:items-center sm:text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {dict.home.pillarsKicker}
          </span>
          <h2 className="hero-display max-w-2xl text-balance text-3xl text-foreground sm:text-5xl">
            {dict.home.pillarsTitle}
          </h2>
        </header>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {dict.home.pillars.map((p, i) => {
          const Icon = ICONS[i] ?? Coins;
          return (
            <Reveal key={p.title} delayMs={i * 100}>
              <Card className="flex h-full flex-col gap-4 p-6 transition-all hover:shadow-glass">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="size-6" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-pretty text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
