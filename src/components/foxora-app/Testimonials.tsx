import { FadeIn } from "./FadeIn";

const items = [
  {
    initial: "M",
    name: "Marc K.",
    role: "Software Engineer · München",
    text: "“Ich hab in 6 Monaten ohne Aufwand fast 200€ in Bitcoin gesammelt — einfach beim normalen Einkaufen. Foxora ist endlich ein Cashback-Programm, das wirklich was bringt.”",
  },
  {
    initial: "L",
    name: "Lena S.",
    role: "Designerin · Berlin",
    text: "“Endlich verstehe ich Bitcoin — ohne Kurs-Stress, ohne Wallet-Chaos. Foxora macht das alles für mich. Mit Foxora+ rechnet sich das super.”",
  },
  {
    initial: "T",
    name: "Thomas B.",
    role: "Steuerberater · Hamburg",
    text: "“Habe Payback gegen Foxora getauscht. Statt Punkte sammeln, die ich nie einlöse, hab ich jetzt echte Bitcoin Rewards. Genial.”",
  },
];

export function Testimonials() {
  return (
    <FadeIn
      as="section"
      className="px-5 py-[70px] sm:px-10 sm:py-[100px]"
    >
      <div
        className="mx-auto max-w-[1280px]"
        style={{ background: "var(--fxa-card)" }}
      >
        <h2 className="mb-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
          Was unsere Beta-Sammler sagen.
        </h2>
        <p className="mb-12 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:text-[20px]">
          Echte Stimmen aus unserer Community.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[20px] border p-8"
              style={{
                background: "var(--fxa-dark)",
                borderColor: "var(--fxa-border)",
              }}
            >
              <div className="mb-4 text-[14px] tracking-[2px] text-[var(--fxa-orange)]">
                ★★★★★
              </div>
              <p className="mb-5 text-[15px] leading-[1.7]">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--fxa-orange), #E65500)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-[14px] font-bold">{t.name}</div>
                  <div className="text-[12px] text-[var(--fxa-text-muted)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
