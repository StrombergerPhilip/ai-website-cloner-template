const milestones = [
  { year: "Gießen", label: "Ursprung", desc: "TGI wurde in Gießen gegründet — mit einer einfachen Vision: jedem die Chance geben, erfolgreich zu sein." },
  { year: "Wachstum", label: "Expansion", desc: "Von einer Stadt zu einer nationalen Bewegung. Das Team wuchs exponentiell durch echte Ergebnisse." },
  { year: "Gold", label: "Auszeichnung", desc: "TGI erreichte Gold-Status — eine der höchsten Anerkennungen in der Branche. Nicht geträumt. Erreicht." },
  { year: "Worldwide", label: "International", desc: "Was in Gießen begann, ist heute weltweit aktiv. TGI ist kein Team — es ist eine globale Bewegung." },
];

const stats = [
  { value: "#1", label: "Team Ranking" },
  { value: "Gold", label: "Status" },
  { value: "100%", label: "Commitment" },
  { value: "∞", label: "Potential" },
];

export function HistorySection() {
  return (
    <section id="history" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.78 0.17 85)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-3 block">
            Geschichte
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Von Gießen
            <br />
            <span className="gold-text">zur Welt</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            Eine Geschichte über Entschlossenheit, Wachstum und den unbedingten Willen, Nummer 1 zu werden.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[oklch(0.78_0.17_85/0.2)] bg-[oklch(0.13_0.007_270)] p-6 text-center"
            >
              <div className="font-heading font-black text-4xl md:text-5xl gold-text mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.78_0.17_85/0.5)] via-[oklch(0.78_0.17_85/0.2)] to-transparent" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-[oklch(0.78_0.17_85)] -translate-x-1/2 shadow-[0_0_12px_oklch(0.78_0.17_85/0.8)]" />

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="rounded-2xl border border-white/8 bg-[oklch(0.13_0.007_270)] p-6 hover:border-[oklch(0.78_0.17_85/0.3)] transition-colors duration-300">
                    <div className="font-heading font-black text-xl gold-text mb-1">{m.year}</div>
                    <div className="font-semibold text-white text-lg mb-2">{m.label}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
