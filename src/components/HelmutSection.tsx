const qualities = [
  "Höchstes Ranking erreicht",
  "Adria Nummer 1",
  "Best Experte",
  "100% Commitment",
  "Team-First Mentalität",
  "Nachweisbare Ergebnisse",
];

export function HelmutSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 30% 50%, oklch(0.78 0.17 85 / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar & badge */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              {/* Avatar circle */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[oklch(0.78_0.17_85)] to-[oklch(0.62_0.14_82)] flex items-center justify-center shadow-[0_0_60px_oklch(0.78_0.17_85/0.4)]">
                <span className="font-heading font-black text-6xl sm:text-8xl text-[oklch(0.1_0.01_270)]">
                  H
                </span>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] font-heading font-black text-sm shadow-[0_0_20px_oklch(0.78_0.17_85/0.5)]">
                100%
              </div>
            </div>

            <div className="mt-10 text-center lg:text-left">
              <h3 className="font-heading font-black text-4xl sm:text-5xl text-white mb-2">
                Helmut
              </h3>
              <p className="gold-text font-semibold text-lg">
                Gründer & Nummer 1
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-4 block">
              Führung
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight mb-6">
              Helmut — <span className="gold-text">100%.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Helmut hat TGI von Gießen aus aufgebaut und zum internationalen Erfolg geführt.
              Seine Philosophie ist simpel: Kein Halbherziges. Keine Ausreden. Nur Ergebnisse.
              Als Best Experte und Träger des höchsten Rankings beweist er jeden Tag,
              dass TGI das Nummer 1 Team ist.
            </p>

            {/* Qualities list */}
            <ul className="space-y-3">
              {qualities.map((q) => (
                <li key={q} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[oklch(0.78_0.17_85/0.15)] border border-[oklch(0.78_0.17_85/0.5)] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.17_85)]" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{q}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 pl-5 border-l-2 border-[oklch(0.78_0.17_85)]">
              <p className="text-white/80 text-lg italic leading-relaxed">
                „Nicht überlegen. TUN. Das ist die einzige Formel, die zählt."
              </p>
              <footer className="mt-2 text-[oklch(0.78_0.17_85)] text-sm font-semibold">
                — Helmut, TGI
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
