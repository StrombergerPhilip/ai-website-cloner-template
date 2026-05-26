import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: 1,
    title: "Registrieren",
    desc: "E-Mail, Apple oder Google Login. In unter einer Minute hast du dein Foxora-Konto.",
  },
  {
    n: 2,
    title: "Karte verbinden",
    desc: "Verknüpfe deine Visa oder Mastercard. Wir erkennen deine Einkäufe automatisch.",
  },
  {
    n: 3,
    title: "Bitcoin sammeln",
    desc: "Kaufe ganz normal ein. Sats landen automatisch in deinem Foxora-Account.",
  },
];

export function HowItWorks() {
  return (
    <FadeIn as="section" className="px-5 py-[70px] sm:px-10 sm:py-[100px]">
      <div id="how" className="mx-auto max-w-[1280px]">
        <h2 className="mb-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
          In 30 Sekunden startklar.
        </h2>
        <p className="mb-10 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:mb-16 sm:text-[20px]">
          Keine Wallets einrichten, keine Krypto-Erfahrung nötig. Drei
          Schritte — fertig.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border p-8 transition hover:-translate-y-1 hover:border-[var(--fxa-orange)]"
              style={{
                background: "var(--fxa-card)",
                borderColor: "var(--fxa-border)",
              }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full text-[20px] font-black text-white"
                style={{ background: "var(--fxa-orange)" }}
              >
                {s.n}
              </div>
              <h3 className="mb-3 text-[22px] font-extrabold">{s.title}</h3>
              <p className="text-[15px] text-[var(--fxa-text-muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
