const testimonials = [
  {
    name: "Marco R.",
    location: "Deutschland",
    text: "Ich hatte null Erfahrung. TGI hat mir das System gegeben — heute führe ich mein eigenes Team.",
    rank: "Gold",
  },
  {
    name: "Adria Team",
    location: "Adria Region",
    text: "Wir sind Nummer 1 in der Region. Was TGI versprochen hat, hat TGI gehalten.",
    rank: "Nummer 1",
  },
  {
    name: "Sales Agent",
    location: "Österreich",
    text: "No network? No Problem — genau so war es. TGI hat alles aufgebaut. Ich verdiene von der Produktivität.",
    rank: "Active",
  },
];

export function JoinTeamSection() {
  return (
    <section id="team" className="py-28 relative overflow-hidden">
      {/* Gold glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-15 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.78 0.17 85)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-4 block">
            Werde Teil davon
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Komm ins
            <br />
            <span className="gold-shimmer">Nummer 1 Team.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Das TGI Team ist offen für alle, die bereit sind zu handeln.
            Kein Netzwerk nötig. Keine Vorkenntnisse. Nur dein Ja.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-white/8 bg-[oklch(0.13_0.007_270)] p-7 flex flex-col hover:border-[oklch(0.78_0.17_85/0.3)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.78_0.17_85)] to-[oklch(0.62_0.14_82)] flex items-center justify-center">
                  <span className="font-heading font-black text-sm text-[oklch(0.1_0.01_270)]">
                    {t.name[0]}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[oklch(0.78_0.17_85/0.1)] text-[oklch(0.85_0.18_88)] border border-[oklch(0.78_0.17_85/0.3)]">
                  {t.rank}
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-4 italic">
                „{t.text}"
              </p>
              <div>
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-white/30 text-xs">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA card */}
        <div className="relative rounded-3xl overflow-hidden border border-[oklch(0.78_0.17_85/0.4)] bg-[oklch(0.13_0.007_270)]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.78 0.17 85 / 0.5) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Bereit zu starten?
            </div>
            <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
              Nicht überlegen. TUN. Schreib uns jetzt — und wir zeigen dir, wie TGI dein Leben verändert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@tgi.li"
                className="px-10 py-5 rounded-full font-heading font-black text-lg bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] hover:bg-[oklch(0.85_0.18_88)] transition-all duration-200 shadow-[0_0_50px_oklch(0.78_0.17_85/0.5)]"
              >
                Jetzt Kontakt aufnehmen
              </a>
              <a
                href="#sales-agent"
                className="px-10 py-5 rounded-full font-heading font-bold text-lg border border-white/20 text-white hover:border-[oklch(0.78_0.17_85/0.6)] hover:text-[oklch(0.85_0.18_88)] transition-all duration-200"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
