"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StructureDiagram } from "@/components/sections/structure-diagram";
import { useI18n } from "@/lib/i18n/provider";

export function Struktur() {
  const { dict } = useI18n();
  const s = dict.struktur;
  return (
    <>
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-24 sm:pt-32">
          <Badge variant="coral" className="w-fit px-4 py-1.5">
            {s.kicker}
          </Badge>
          <h1 className="hero-display text-balance text-5xl text-foreground sm:text-7xl md:text-8xl">
            {s.title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {s.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <StructureDiagram />
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-apple sm:p-12">
          <h2 className="hero-display mb-3 text-3xl text-foreground sm:text-4xl">
            {s.flowTitle}
          </h2>
          <p className="max-w-3xl text-pretty leading-relaxed text-foreground/85">
            {s.flowBody}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="hero-display mb-12 text-3xl text-foreground sm:text-5xl">
          {s.complianceTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {s.complianceItems.map((item) => (
            <Card key={item.title} className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
