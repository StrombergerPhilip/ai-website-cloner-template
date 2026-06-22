const steps = [
  {
    number: "01",
    title: "Bewirb dich",
    desc: "Kein Lebenslauf. Kein Anzug. Nur dein Wille, etwas zu verändern.",
  },
  {
    number: "02",
    title: "Wir bauen dein Team",
    desc: "TGI gibt dir das System, das Training und die Struktur. Du musst nichts alleine aufbauen.",
  },
  {
    number: "03",
    title: "Du verdienst",
    desc: "Von der Produktivität deines Teams. Passiv. Skalierbar. Nachhaltig.",
  },
];

const benefits = [
  { icon: "🏆", title: "Kein Netzwerk nötig", desc: "Wir starten mit dir von null." },
  { icon: "💰", title: "Verdienen von Produktivität", desc: "Dein Team arbeitet — du verdienst mit." },
  { icon: "🌍", title: "Worldwide Opportunity", desc: "Aktiv in mehreren Ländern weltweit." },
  { icon: "🎯", title: "Bewährtes System", desc: "Jahrelange Erfahrung. Keine Experimente." },
];

export function SalesAgentSection() {
  return (
    <section id="sales-agent" className="py-28 relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.78 0.17 85)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-4 block">
            Deine Chance
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Sales Agent
            <br />
            <span className="gold-text">bei TGI</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Keine Vorkenntnisse. Kein Problem. Wir bauen dein Team — und du verdienst von der Produktivität.
          </p>
        </div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.17_85/0.4)] to-transparent hidden md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/8 bg-[oklch(0.13_0.007_270)] p-8 text-center hover:border-[oklch(0.78_0.17_85/0.3)] transition-all duration-300 relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-[oklch(0.78_0.17_85/0.1)] border border-[oklch(0.78_0.17_85/0.3)] flex items-center justify-center mx-auto mb-5">
                <span className="font-heading font-black text-xl gold-text">{step.number}</span>
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/8 bg-[oklch(0.13_0.007_270)] p-6 hover:border-[oklch(0.78_0.17_85/0.3)] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{b.icon}</div>
              <h4 className="font-heading font-bold text-white text-sm mb-2">{b.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#team"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-black text-lg bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] hover:bg-[oklch(0.85_0.18_88)] transition-all duration-200 shadow-[0_0_40px_oklch(0.78_0.17_85/0.5)]"
          >
            Sales Agent werden
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
