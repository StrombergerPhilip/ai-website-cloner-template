"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    q: "Ist Foxora ein Investment?",
    a: "Nein. Foxora ist ein Rewards-Programm — vergleichbar mit Payback oder Amex Rewards, nur dass du Bitcoin statt Punkte sammelst. Du investierst nichts, du sammelst Cashback bei deinen normalen Einkäufen.",
  },
  {
    q: "Was kann der Foxora AI Assistant?",
    a: "Der Assistent beantwortet Fragen, gibt Empfehlungen, hilft bei Auszahlungen und Plan-Verwaltung. 24/7 in deiner App und auf der Website verfügbar.",
  },
  {
    q: "Muss ich Krypto verstehen?",
    a: "Nein. Foxora kümmert sich um alles. Keine Wallet, kein Seed-Phrase-Management, keine Vorkenntnisse nötig.",
  },
  {
    q: "Wie sicher sind meine Bitcoin?",
    a: "Deine Bitcoin werden bei lizenzierten Krypto-Verwahrern (Bitpanda Custody) nach BaFin- und MiCAR-Standards gelagert. Foxora selbst hält keine Kundengelder.",
  },
  {
    q: "Was kostet Foxora?",
    a: "Die Basis-Version ist kostenlos. Foxora+ (9€/Monat) und Foxora Pro (29€/Monat) für höhere Cashback-Raten. Jederzeit kündbar.",
  },
  {
    q: "Muss ich Cashback versteuern?",
    a: "Bitcoin-Cashback kann je nach individueller Situation steuerpflichtig sein. Wir empfehlen Rücksprache mit einem Steuerberater. Foxora stellt jährliche Übersichten zur Verfügung.",
  },
  {
    q: "Was passiert mit dem Bitcoin-Wert?",
    a: "Der Bitcoin-Wert kann schwanken. Du erhältst eine feste Cashback-Quote in Sats, der Euro-Gegenwert kann steigen oder fallen. Du kannst deine Sats jederzeit auszahlen.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <FadeIn as="section" className="px-5 py-[70px] sm:px-10 sm:py-[100px]">
      <div id="faq" className="mx-auto max-w-[1280px]">
        <h2 className="mb-4 text-center text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
          Häufige Fragen.
        </h2>
        <p className="mx-auto mb-12 max-w-[600px] text-center text-[17px] text-[var(--fxa-text-muted)] sm:mb-16 sm:text-[20px]">
          Alles, was du über Foxora wissen musst.
        </p>
        <div className="mx-auto max-w-[800px]">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <button
                key={it.q}
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                className="mb-3 block w-full cursor-pointer rounded-2xl border p-7 text-left"
                style={{
                  background: "var(--fxa-card)",
                  borderColor: "var(--fxa-border)",
                }}
              >
                <div className="flex items-center justify-between text-[17px] font-bold">
                  <span>{it.q}</span>
                  <span
                    className="text-[24px] text-[var(--fxa-orange)] transition-transform"
                    style={{
                      transform: open ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>
                {open ? (
                  <div className="mt-3 text-[15px] text-[var(--fxa-text-muted)]">
                    {it.a}
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
