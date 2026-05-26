import { FoxWordmark } from "./FoxLogo";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Produkt",
    links: [
      { href: "#how", label: "So funktioniert's" },
      { href: "#calc", label: "Cashback-Rechner" },
      { href: "#membership", label: "Membership" },
      { href: "#partners", label: "Partner" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "#", label: "Über uns" },
      { href: "#", label: "Karriere" },
      { href: "#", label: "Presse" },
      { href: "#", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "#", label: "AGB" },
      { href: "#", label: "Datenschutz" },
      { href: "#", label: "Impressum" },
      { href: "#", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t px-5 pb-10 pt-[60px] sm:px-10"
      style={{
        background: "var(--fxa-darker)",
        borderColor: "var(--fxa-border)",
      }}
    >
      <div className="mx-auto mb-10 grid max-w-[1280px] gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4">
            <FoxWordmark />
          </div>
          <p className="max-w-[320px] text-[14px] text-[var(--fxa-text-muted)]">
            Sammle Bitcoin Rewards bei jedem Einkauf. Foxora ist ein
            Premium-Rewards-Programm, kein Finanzinstitut.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="mb-4 text-[13px] uppercase tracking-[1px] text-[var(--fxa-orange)]">
              {col.title}
            </h5>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-1.5 text-[14px] text-[var(--fxa-text-muted)] no-underline hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div
        className="mx-auto max-w-[1280px] border-t py-5 text-[12px] leading-[1.6] text-[var(--fxa-text-muted)]"
        style={{ borderColor: "var(--fxa-border)" }}
      >
        <strong className="text-[var(--fxa-text)]">Wichtiger Hinweis:</strong>{" "}
        Foxora ist kein Finanzinstitut und bietet keine Finanzberatung oder
        Anlageprodukte an. Bitcoin-Rewards stellen kein Investment dar, sondern
        eine Form von Cashback. Der Wert von Bitcoin kann schwanken. Verwahrung
        von Bitcoin-Beständen erfolgt durch lizenzierte Drittpartei-Custodians
        nach BaFin- und MiCAR-Standards. Bitcoin-Cashback kann je nach
        individueller steuerlicher Situation steuerpflichtig sein.
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 pt-5 text-[13px] text-[var(--fxa-text-muted)]">
        <div>© 2026 Foxora (in Gründung). Alle Rechte vorbehalten.</div>
        <div>Made with ⚡ in Germany</div>
      </div>
    </footer>
  );
}
