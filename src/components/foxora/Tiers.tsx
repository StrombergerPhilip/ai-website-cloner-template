import { SectionHead } from "./shared";

const freeFeatures = [
  "Bitcoin Rewards bei Foxora-Partnern",
  "Ø 1 % Cashback in BTC",
  "Wöchentliche Auszahlung (Fr 14:00)",
  "Eigene BTC-Wallet (non-custodial Option)",
  "App mit allen Standard-Features",
];

const plusFeatures = [
  <>
    <strong className="font-semibold text-[var(--foxora-text)]">3× höhere</strong>{" "}
    Cashback-Raten (bis 5 %)
  </>,
  "Tägliche Sats-Auszahlung statt wöchentlich",
  "Exklusive Premium-Deals (15 % bei IKEA, MediaMarkt…)",
  "Visa Cashback Boost (eigene Foxora-Card)",
  "Willkommensbonus €10 in BTC am Tag 1",
  "Priority-Support · Founders-Badge",
];

function TierList({
  items,
  dimMarks,
}: {
  items: React.ReactNode[];
  dimMarks?: boolean;
}) {
  return (
    <ul className="list-none p-0">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 py-2.5 text-[14px] text-[var(--foxora-text2)] [&:not(:first-child)]:border-t"
          style={{
            borderColor: "var(--foxora-border)",
          }}
        >
          <span
            className="flex-shrink-0 font-[family-name:var(--foxora-mono)] text-[13px] font-bold"
            style={{
              color: dimMarks ? "var(--foxora-muted)" : "var(--foxora-fox)",
            }}
          >
            ✓
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Tiers() {
  return (
    <>
      <SectionHead
        num="02"
        title={<>Free oder <em>Foxora+.</em> Kein Pool, keine Mathe-Tricks.</>}
        sub="Zwei klare Stufen. Jeder versteht den Unterschied. Wie Amazon Prime oder Spotify Premium."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Free */}
        <div
          className="relative overflow-hidden rounded-2xl border p-8"
          style={{
            background: "var(--foxora-card)",
            borderColor: "var(--foxora-border)",
          }}
        >
          <div className="mb-3 font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[2.5px] text-[var(--foxora-muted)]">
            Standard · Kostenlos
          </div>
          <div className="mb-1.5 font-[family-name:var(--foxora-display)] text-[32px] font-extrabold leading-none tracking-[-1.5px] text-[var(--foxora-text)]">
            Foxora
          </div>
          <div className="mb-6 font-[family-name:var(--foxora-mono)] text-[13px] tracking-[0.5px] text-[var(--foxora-text2)]">
            €0 / Monat — ohne Verpflichtung
          </div>
          <TierList items={freeFeatures} dimMarks />
        </div>

        {/* Plus */}
        <div
          className="relative overflow-hidden rounded-2xl border p-8 before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:bg-[var(--foxora-fox)] before:content-['']"
          style={{
            background:
              "linear-gradient(135deg, var(--foxora-card), rgba(247,147,26,0.05))",
            borderColor: "var(--foxora-fox-edge)",
          }}
        >
          <div className="mb-3 font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[2.5px] text-[var(--foxora-fox)]">
            Premium · Membership
          </div>
          <div className="mb-1.5 font-[family-name:var(--foxora-display)] text-[32px] font-extrabold leading-none tracking-[-1.5px] text-[var(--foxora-fox)]">
            Foxora<sup className="ml-0.5 align-super text-[18px] font-bold">+</sup>
          </div>
          <div className="mb-6 font-[family-name:var(--foxora-mono)] text-[13px] tracking-[0.5px] text-[var(--foxora-text2)]">
            €9,90 / Monat · oder €99 / Jahr
          </div>
          <TierList items={plusFeatures} />
        </div>
      </div>
    </>
  );
}
