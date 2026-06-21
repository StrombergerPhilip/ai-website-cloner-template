"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/provider";

export function RoadmapPhases() {
  const { dict } = useI18n();
  const phases = dict.roadmap.phases;
  return (
    <Accordion
      defaultValue={[0]}
      className="divide-y divide-border rounded-3xl border border-border bg-card shadow-apple"
    >
      {phases.map((p, i) => (
        <AccordionItem key={p.label} value={i} className="px-6 sm:px-8">
          <AccordionTrigger>
            <div className="flex flex-col gap-1.5 text-left sm:flex-row sm:items-center sm:gap-4">
              <Badge variant="muted" className="w-fit text-[10px]">
                {p.label}
              </Badge>
              <span className="text-xl font-semibold tracking-tight">
                {p.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {p.goals.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-2 text-foreground/85"
                >
                  <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
