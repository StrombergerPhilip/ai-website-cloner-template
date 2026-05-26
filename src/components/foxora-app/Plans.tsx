import { FadeIn } from "./FadeIn";

const plans = [
  {
    name: "Free",
    price: "0€",
    tagline: "Perfekt zum Starten",
    features: ["1% Bitcoin Cashback", "Monatliche Auszahlung", "Standard-Partner", "Foxora AI Basic"],
    cta: "Kostenlos starten",
    popular: false,
  },
  {
    name: "Foxora+",
    price: "9€",
    tagline: "Für regelmäßige Käufer",
    features: ["2–3% Bitcoin Cashback", "Wöchentliche Auszahlung", "Premium-Partner Deals", "Foxora AI Pro", "Priority Support"],
    cta: "Foxora+ wählen",
    popular: true,
  },
  {
    name: "Foxora Pro",
    price: "29€",
    tagline: "Maximale Rewards",
    features: ["Bis zu 5% Bitcoin Cashback", "Tägliche Auszahlung", "Foxora Visa Card", "Foxora AI Premium", "VIP Support 24/7"],
    cta: "Pro wählen",
    popular: false,
  },
];

export function Plans() {
  return (
    <FadeIn
      as="section"
      className="px-5 py-[70px] sm:px-10 sm:py-[100px]"
    >
      <div
        id="membership"
        className="mx-auto max-w-[1280px]"
        style={{ background: "linear-gradient(180deg, #1A1410, var(--fxa-dark))" }}
      >
        <h2 className="mb-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
          Wähle deinen Plan.
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:text-[20px]">
          Mehr Cashback, schnellere Auszahlungen, exklusive Deals. Jederzeit kündbar.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="relative rounded-[28px] border p-10"
              style={{
                background: "var(--fxa-card)",
                borderColor: p.popular
                  ? "var(--fxa-orange)"
                  : "var(--fxa-border)",
                transform: p.popular ? "scale(1.03)" : undefined,
                boxShadow: p.popular
                  ? "0 20px 60px rgba(255,107,26,0.2)"
                  : undefined,
              }}
            >
              {p.popular ? (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.5px] text-white"
                  style={{ background: "var(--fxa-orange)" }}
                >
                  BELIEBT
                </div>
              ) : null}
              <div className="mb-3 text-[14px] uppercase tracking-[1px] text-[var(--fxa-text-muted)]">
                {p.name}
              </div>
              <div className="mb-1 text-[48px] font-black leading-none tracking-[-1px]">
                {p.price}
                <span className="ml-1 text-[18px] font-medium text-[var(--fxa-text-muted)]">
                  /Monat
                </span>
              </div>
              <div className="mb-8 text-[14px] text-[var(--fxa-text-muted)]">
                {p.tagline}
              </div>
              <ul className="mb-8 list-none">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2.5 py-2.5 text-[15px] before:font-bold before:text-[var(--fxa-orange)] before:content-['✓']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`block w-full rounded-full px-6 py-3 text-center text-[14px] font-semibold no-underline transition hover:-translate-y-px ${
                  p.popular
                    ? "bg-[var(--fxa-orange)] text-white hover:bg-[var(--fxa-orange-bright)]"
                    : "border bg-transparent text-white hover:border-[var(--fxa-orange)] hover:bg-[rgba(255,107,26,0.1)]"
                }`}
                style={p.popular ? undefined : { borderColor: "var(--fxa-border)" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
