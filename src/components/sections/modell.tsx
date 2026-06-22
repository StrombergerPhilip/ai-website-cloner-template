"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CashbackCalculator } from "@/components/cashback/cashback-calculator";
import { useI18n } from "@/lib/i18n/provider";

export function Modell() {
  const { dict } = useI18n();
  const m = dict.modell;
  return (
    <>
      <section className="foxora-gradient relative overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-24 sm:pt-32">
          <Badge variant="coral" className="w-fit px-4 py-1.5">
            {m.kicker}
          </Badge>
          <h1 className="hero-display text-balance text-5xl text-foreground sm:text-7xl md:text-8xl">
            {m.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {m.lead}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="hero-display mb-12 text-3xl text-foreground sm:text-5xl">
          {m.stepsTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {m.steps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-8 shadow-apple"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {s.step}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="hero-display mb-8 text-3xl text-foreground sm:text-5xl">
          {m.tabsTitle}
        </h2>
        <Tabs defaultValue="premium">
          <TabsList>
            <TabsTrigger value="premium">{m.tabs.premium.label}</TabsTrigger>
            <TabsTrigger value="saas">{m.tabs.saas.label}</TabsTrigger>
            <TabsTrigger value="btc">{m.tabs.btc.label}</TabsTrigger>
          </TabsList>
          {(["premium", "saas", "btc"] as const).map((k) => (
            <TabsContent key={k} value={k}>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                {m.tabs[k].title}
              </h3>
              <p className="max-w-3xl text-pretty leading-relaxed text-foreground/85">
                {m.tabs[k].body}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-col gap-3">
          <h2 className="hero-display text-3xl text-foreground sm:text-5xl">
            {m.calcTitle}
          </h2>
          <p className="max-w-2xl text-muted-foreground">{m.calcLead}</p>
        </div>
        <CashbackCalculator />
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
        <h2 className="hero-display mb-8 text-3xl text-foreground sm:text-5xl">
          {m.faqTitle}
        </h2>
        <Accordion
          defaultValue={[0]}
          className="rounded-3xl border border-border bg-card px-6 shadow-apple sm:px-8"
        >
          {m.faq.map((item, i) => (
            <AccordionItem key={item.q} value={i}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
