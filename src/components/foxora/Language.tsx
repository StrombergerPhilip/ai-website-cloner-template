import { SectionHead } from "./shared";

const bad = [
  "×6 Hebel / Multiplikator",
  "600 % / „bis 100 %“",
  "Aktivierungs-Fee",
  "Funding Split / Pool / Treasury",
  "Yield / Rebalancing / DeFi",
  "Token Burn / Recycling",
  "„Cashback-Investment“",
  "Garantiert / Sicher / Versprechen",
];

const good = [
  "Bitcoin Rewards / Cashback",
  "Premium / Membership / Plus",
  "Sammeln / Verdienen",
  "Auszahlung / Wallet",
  "Partner Deals / Exclusive",
  "Sicher · Reguliert · Transparent",
  "„Wie Payback, nur mit Bitcoin“",
  "Einfach / Automatisch / Sofort",
];

function Col({
  variant,
  head,
  items,
}: {
  variant: "bad" | "good";
  head: string;
  items: string[];
}) {
  const isBad = variant === "bad";
  return (
    <div
      className="rounded-[14px] border p-7"
      style={
        isBad
          ? {
              background: "rgba(226,75,74,0.03)",
              borderColor: "rgba(226,75,74,0.25)",
            }
          : {
              background: "rgba(29,158,117,0.03)",
              borderColor: "rgba(29,158,117,0.25)",
            }
      }
    >
      <div
        className="mb-4 font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[2.5px]"
        style={{
          color: isBad ? "var(--foxora-red)" : "var(--foxora-green)",
        }}
      >
        {head}
      </div>
      <ul className="list-none p-0">
        {items.map((it) => (
          <li
            key={it}
            className="py-2 font-[family-name:var(--foxora-mono)] text-[13.5px] text-[var(--foxora-text2)]"
          >
            <span
              className="mr-2.5 font-[family-name:var(--foxora-mono)] font-semibold"
              style={{
                color: isBad ? "var(--foxora-red)" : "var(--foxora-green)",
              }}
            >
              {isBad ? "✕" : "✓"}
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Language() {
  return (
    <>
      <SectionHead
        num="05"
        title={<>Die <em>Sprache</em> macht den Unterschied.</>}
        sub="Marketing-Sprachregister. Diese Liste hängt an jedem Schreibtisch. Verstoß = sofortige Korrektur."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Col
          variant="bad"
          head="Nie verwenden — Vertrauens-Killer"
          items={bad}
        />
        <Col
          variant="good"
          head="Immer verwenden — Mainstream-Sprache"
          items={good}
        />
      </div>
    </>
  );
}
