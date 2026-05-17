"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChatDrawer } from "@/components/chat/chat-drawer";
import { useT } from "@/lib/i18n/provider";

export function Hero() {
  const t = useT();
  const title = t("home.title");

  return (
    <section className="foxora-gradient relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 pb-24 pt-24 sm:pt-32 md:pt-40">
        <Badge variant="coral" className="px-4 py-1.5 text-xs">
          {t("home.kicker")}
        </Badge>
        <h1 className="hero-display text-5xl text-balance text-foreground sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          {title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {t("home.lead")}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            size="lg"
            className="gap-2"
            render={<Link href="/modell" />}
          >
            {t("home.ctaPrimary")}
            <ArrowRight className="size-4" />
          </Button>
          <ChatDrawer
            trigger={
              <Button variant="outline" size="lg" className="gap-2">
                <Sparkles className="size-4" />
                {t("home.ctaSecondary")}
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
