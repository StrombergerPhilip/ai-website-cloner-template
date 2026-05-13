import { SectionHead } from "./shared";

const steps = [
  {
    n: "01",
    icon: "✉️",
    title: "Registrieren",
    desc: "Apple / Google Login. 30 Sekunden, kein KYC für Standard-Tier.",
  },
  {
    n: "02",
    icon: "💳",
    title: "Karte verbinden",
    desc: "Visa, Mastercard. Bald: eigene Foxora-Card.",
  },
  {
    n: "03",
    icon: "🛒",
    title: "Normal einkaufen",
    desc: "Tanken, Supermarkt, Nike, Reisen, Online — alles wie gewohnt.",
  },
  {
    n: "04",
    icon: "⚡",
    title: "Auto-Erkennung",
    desc: "Foxora erkennt den Einkauf via Karte oder Beleg-Scan.",
  },
  {
    n: "05",
    icon: "₿",
    title: "Reward sichtbar",
    desc: "„+420 Sats pending“ erscheint sofort in der App.",
  },
  {
    n: "06",
    icon: "🎯",
    title: "Auszahlung",
    desc: "Täglich oder Freitag gesammelt. Wallet, BTC oder Visa-Balance.",
  },
];

export function Journey() {
  return (
    <>
      <SectionHead
        num="01"
        title={<>In 6 Schritten <em>zum Kunden.</em></>}
        sub="Vom Download bis zum ersten BTC-Eingang — keine versteckten Schritte, kein Krypto-Wissen nötig."
      />
      <div
        className="grid grid-cols-1 overflow-hidden rounded-[14px] border sm:grid-cols-2 lg:grid-cols-6"
        style={{
          background: "var(--foxora-border)",
          borderColor: "var(--foxora-border)",
          gap: "1px",
        }}
      >
        {steps.map((s) => (
          <div
            key={s.n}
            className="px-5 py-6"
            style={{ background: "var(--foxora-card)" }}
          >
            <div className="mb-3.5 font-[family-name:var(--foxora-mono)] text-[10px] tracking-[2px] text-[var(--foxora-fox)]">
              SCHRITT {s.n}
            </div>
            <span className="mb-3.5 block text-[28px]">{s.icon}</span>
            <div className="mb-2 font-[family-name:var(--foxora-display)] text-[14.5px] font-semibold leading-[1.25] tracking-[-0.2px] text-[var(--foxora-text)]">
              {s.title}
            </div>
            <div className="text-[12px] leading-[1.55] text-[var(--foxora-muted)]">
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
