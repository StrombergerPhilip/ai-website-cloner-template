"use client";

import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact-form";
import { useI18n } from "@/lib/i18n/provider";

export function KontaktPage() {
  const { dict } = useI18n();
  const k = dict.kontakt;
  return (
    <>
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-24 sm:pt-32">
          <Badge variant="coral" className="w-fit px-4 py-1.5">
            {k.kicker}
          </Badge>
          <h1 className="hero-display text-balance text-5xl text-foreground sm:text-7xl md:text-8xl">
            {k.title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {k.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <ContactForm />
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              {k.addressesTitle}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {k.addresses.map((a) => (
                <Card key={a.label} className="p-5">
                  <p className="text-sm font-semibold tracking-tight text-foreground">
                    {a.label}
                  </p>
                  {a.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </Card>
              ))}
            </div>
            <Card className="flex items-center gap-3 p-5">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Mail className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {k.emailLabel}
                </span>
                <a
                  href={`mailto:${k.email}`}
                  className="font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                >
                  {k.email}
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
