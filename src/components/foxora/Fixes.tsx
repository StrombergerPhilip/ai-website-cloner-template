import { SectionHead } from "./shared";

const fixes = [
  {
    n: "01",
    title: "Eigene Visa-Karte priorisieren",
    desc: "Via Marqeta oder Solaris. Setup €50–200K, 3–6 Monate. Ohne Karte kein Mainstream — du erkennst nicht jeden Kauf und hast keinen Interchange-Cashflow.",
  },
  {
    n: "02",
    title: "Euro primär, BTC sekundär anzeigen",
    desc: "App-Default „€38,45“ mit „≈ 42.550 Sats“ als Subline. Wie Revolut. Mainstream will Euro-Wert sehen, nicht Krypto-Insider-Vokabular.",
  },
  {
    n: "03",
    title: "Sofort-Mehrwert für Foxora+",
    desc: "Willkommensbonus €10 BTC am Tag 1. Exklusiver Premium-Deal in der ersten Woche. Member fühlt: „War schon im ersten Monat gut investiert.“",
  },
];

export function Fixes() {
  return (
    <>
      <SectionHead
        num="07"
        title={<>Drei <em>Fixes,</em> die alles ändern.</>}
        sub="Mit diesen drei Maßnahmen wird aus dem Konzept ein echtes Mainstream-Produkt. Reihenfolge zählt."
      />
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
        {fixes.map((f) => (
          <div
            key={f.n}
            className="rounded-xl border p-6"
            style={{
              background: "var(--foxora-card)",
              borderColor: "var(--foxora-border)",
              borderTopWidth: 3,
              borderTopColor: "var(--foxora-fox)",
            }}
          >
            <div className="mb-3.5 font-[family-name:var(--foxora-display)] text-[36px] font-extrabold leading-none tracking-[-1.5px] text-[var(--foxora-fox)]">
              {f.n}
            </div>
            <div className="mb-2.5 font-[family-name:var(--foxora-display)] text-[17px] font-bold leading-[1.25] tracking-[-0.3px] text-[var(--foxora-text)]">
              {f.title}
            </div>
            <p className="text-[13px] leading-[1.6] text-[var(--foxora-text2)]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
