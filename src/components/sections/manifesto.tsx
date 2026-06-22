"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChatDrawer } from "@/components/chat/chat-drawer";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n/provider";

export function Manifesto() {
  const { dict } = useI18n();
  const m = dict.manifesto;

  return (
    <article className="relative">
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-8 px-6 pb-20 pt-24 sm:pt-32 md:pt-40">
          <Reveal>
            <Badge variant="coral" className="px-4 py-1.5 text-xs">
              {m.kicker}
            </Badge>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="hero-display text-balance text-5xl text-foreground sm:text-6xl md:text-7xl">
              {m.title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {m.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-28">
        <ol className="flex flex-col gap-16 sm:gap-20">
          {m.tenets.map((tenet, i) => (
            <Reveal key={tenet.number} as="li" delayMs={i * 40}>
              <div className="flex flex-col gap-4 border-t border-border/60 pt-10 sm:flex-row sm:gap-12 sm:pt-12">
                <div className="shrink-0 sm:w-32">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {tenet.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h2 className="hero-display text-balance text-3xl text-foreground sm:text-4xl md:text-5xl">
                    {tenet.title}
                  </h2>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {tenet.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-6 py-20 sm:py-28">
          <Reveal>
            <h3 className="hero-display max-w-3xl text-balance text-3xl text-foreground sm:text-5xl">
              {m.closingTitle}
            </h3>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {m.closingLead}
            </p>
          </Reveal>
          <Reveal delayMs={160}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="gap-2"
                render={<Link href="/modell" />}
              >
                {m.ctaPrimary}
                <ArrowRight className="size-4" />
              </Button>
              <ChatDrawer
                trigger={
                  <Button variant="outline" size="lg" className="gap-2">
                    <Sparkles className="size-4" />
                    {m.ctaSecondary}
                  </Button>
                }
              />
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
