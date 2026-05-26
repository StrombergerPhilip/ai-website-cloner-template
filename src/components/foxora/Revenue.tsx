import { SectionHead } from "./shared";

const revenue = [
  {
    n: "01",
    icon: "⭐",
    name: "Memberships",
    desc: "Foxora+ Abos. Hauptertrag pro Kunde. Skaliert linear mit Userbase.",
    meter: "€9,90 / Monat",
  },
  {
    n: "02",
    icon: "🤝",
    name: "Händler-Provisionen",
    desc: "3–6 % Affiliate vom Händler. Davon Anteil als BTC an Kunde, Rest als Marge.",
    meter: "Ø 2 % vom Umsatz",
  },
  {
    n: "03",
    icon: "💎",
    name: "Partner Deals",
    desc: "Exklusive Premium-Deals mit Brands. Featured Placements, Aktionen, Co-Marketing.",
    meter: "Variable Margen",
  },
  {
    n: "04",
    icon: "💳",
    name: "Visa Interchange",
    desc: "Foxora-Card mit eigenem Interchange-Anteil. ~0,3–0,8 % pro Transaktion.",
    meter: "Ab Phase 2",
  },
];

export function Revenue() {
  return (
    <>
      <SectionHead
        num="03"
        title={<>Vier <em>saubere</em> Einnahmequellen.</>}
        sub="Nachvollziehbar wie bei Amex, Payback, Visa. Keine versteckten Pools, keine Mechaniken."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {revenue.map((r) => (
          <div
            key={r.n}
            className="relative overflow-hidden rounded-xl border p-5 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[var(--foxora-fox)] before:content-['']"
            style={{
              background: "var(--foxora-card)",
              borderColor: "var(--foxora-border)",
            }}
          >
            <div className="mb-3 font-[family-name:var(--foxora-mono)] text-[9px] tracking-[2px] text-[var(--foxora-fox)]">
              QUELLE · {r.n}
            </div>
            <span className="mb-3 block text-[24px]">{r.icon}</span>
            <div className="mb-2 font-[family-name:var(--foxora-display)] text-[16px] font-bold leading-[1.2] tracking-[-0.3px] text-[var(--foxora-text)]">
              {r.name}
            </div>
            <p className="mb-3.5 text-[12.5px] leading-[1.55] text-[var(--foxora-text2)]">
              {r.desc}
            </p>
            <span
              className="inline-block rounded-full px-2.5 py-1 font-[family-name:var(--foxora-mono)] text-[11px] font-medium text-[var(--foxora-fox)]"
              style={{ background: "var(--foxora-fox-dim)" }}
            >
              {r.meter}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
