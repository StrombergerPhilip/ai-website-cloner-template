import { SectionHead } from "./shared";

const phases = [
  {
    when: "TAG 1–30 · MAI",
    name: "Foundation",
    items: [
      "Schweizer AG gründen · Foxora GmbH AT klären",
      "Altlasten-Cleanup (Pool/Revise/vBTC offline)",
      "Anwaltsmandat MME Zug + UWG-Check AT",
      "Visa-Card-Provider-Termin: Marqeta + Solaris",
      "Branding-Refresh: Sprachregister umsetzen",
    ],
  },
  {
    when: "TAG 31–60 · JUNI",
    name: "Build",
    items: [
      "MVP-App: Onboarding + Wallet + Cashback-Tracking",
      "10 Pilot-Händler onboarden in Klagenfurt + Wien",
      "BTC-Custody-Partner: Bitpanda Custody oder Sygnum",
      "Foxora+ Willkommensbonus-Mechanik bauen",
      "Trust-Page: Founder-Profile, Lizenzen, Audits",
    ],
  },
  {
    when: "TAG 61–90 · JULI",
    name: "Launch",
    items: [
      "Beta mit 500 Early Users (Telegram + Email-Liste)",
      "Foxora-Visa-Card-Launch (auch wenn nur Co-Branded)",
      "Public Launch mit PR-Push: „erstes BTC-Cashback DACH“",
      "App Store + Play Store Listings, ASO-Optimierung",
      "Erstes Investoren-Update: KPI, Retention, NPS",
    ],
  },
];

export function Roadmap() {
  return (
    <>
      <SectionHead
        num="08"
        title={<>90 Tage <em>zum Launch.</em></>}
        sub="Konkrete Phasen mit Owner und Deliverables. Mai bis August. Dann Public Launch."
      />
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
        {phases.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border p-6"
            style={{
              background: "var(--foxora-card)",
              borderColor: "var(--foxora-border)",
              borderLeftWidth: 3,
              borderLeftColor: "var(--foxora-fox)",
            }}
          >
            <div className="mb-3 font-[family-name:var(--foxora-mono)] text-[10px] tracking-[2px] text-[var(--foxora-fox)]">
              {p.when}
            </div>
            <div className="mb-3.5 font-[family-name:var(--foxora-display)] text-[18px] font-bold tracking-[-0.3px] text-[var(--foxora-text)]">
              {p.name}
            </div>
            <ul className="list-none">
              {p.items.map((it) => (
                <li
                  key={it}
                  className="relative py-1 pl-4 text-[13px] leading-[1.6] text-[var(--foxora-text2)] before:absolute before:left-0 before:top-1.5 before:font-[family-name:var(--foxora-mono)] before:text-[11px] before:text-[var(--foxora-fox)] before:content-['→']"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
