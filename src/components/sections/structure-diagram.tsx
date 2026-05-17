"use client";

import { ArrowLeftRight, Building2, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StructureDiagram() {
  const { dict } = useI18n();
  const s = dict.struktur;
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
      <Card className="flex flex-col gap-4 p-8">
        <Badge variant="outline" className="w-fit">
          AT
        </Badge>
        <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Building2 className="size-6" />
        </div>
        <CardHeader className="p-0">
          <CardTitle className="text-2xl">{s.atTitle}</CardTitle>
          <p className="text-sm text-muted-foreground">{s.atLocation}</p>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="flex flex-col gap-2 text-sm text-foreground/85">
            {s.atBullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div
        className="flex flex-row items-center justify-center gap-2 text-muted-foreground md:flex-col"
        aria-hidden
      >
        <div className="hidden h-full min-h-24 w-px bg-border md:block" />
        <div className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-accent shadow-apple">
          <ArrowLeftRight className="size-5 md:rotate-90" />
        </div>
        <div className="hidden h-full min-h-24 w-px bg-border md:block" />
      </div>

      <Card className="flex flex-col gap-4 p-8">
        <Badge variant="outline" className="w-fit">
          UAE
        </Badge>
        <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Globe className="size-6" />
        </div>
        <CardHeader className="p-0">
          <CardTitle className="text-2xl">{s.dubaiTitle}</CardTitle>
          <p className="text-sm text-muted-foreground">{s.dubaiLocation}</p>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="flex flex-col gap-2 text-sm text-foreground/85">
            {s.dubaiBullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
