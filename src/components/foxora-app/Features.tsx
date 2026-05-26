import { FadeIn } from "./FadeIn";

const features = [
  { icon: "⚡", title: "Automatisch", desc: "Einmal Karte verbinden — Sats sammeln sich von alleine." },
  { icon: "🛍️", title: "Überall einlösbar", desc: "Tausende Partner: Tankstelle, Supermarkt, Online-Shops, Reisen." },
  { icon: "💸", title: "Sofort auszahlen", desc: "Foxora Wallet, BTC-Wallet oder Visa-Balance. Du entscheidest." },
  { icon: "🔒", title: "Sicher & seriös", desc: "Lizenzierte Custodians. Deutsche Datenschutzstandards." },
];

export function Features() {
  return (
    <FadeIn
      as="section"
      className="px-5 py-[70px] sm:px-10 sm:py-[100px]"
    >
      <div
        className="mx-auto max-w-[1280px]"
        style={{ background: "#1A1410" }}
      >
        <h2 className="mb-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
          Was Foxora besonders macht.
        </h2>
        <p className="mb-10 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:mb-16 sm:text-[20px]">
          Wie Payback oder Amex Rewards — nur eben in Bitcoin.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-[20px] border p-7 transition hover:border-[var(--fxa-orange)]"
              style={{
                background: "var(--fxa-card)",
                borderColor: "var(--fxa-border)",
              }}
            >
              <div className="mb-4 text-[28px]">{f.icon}</div>
              <h4 className="mb-2 text-[17px] font-extrabold">{f.title}</h4>
              <p className="text-[14px] text-[var(--fxa-text-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
