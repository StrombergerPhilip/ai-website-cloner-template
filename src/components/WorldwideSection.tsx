const regions = [
  { name: "Deutschland", flag: "🇩🇪", status: "Ursprung" },
  { name: "Österreich", flag: "🇦🇹", status: "Aktiv" },
  { name: "Schweiz", flag: "🇨🇭", status: "Aktiv" },
  { name: "Adria", flag: "🌊", status: "Nummer 1" },
  { name: "Europa", flag: "🇪🇺", status: "Expandierend" },
  { name: "Worldwide", flag: "🌍", status: "Jetzt" },
];

export function WorldwideSection() {
  return (
    <section id="worldwide" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.78 0.17 85) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-1/3 w-[600px] h-[600px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.78 0.17 85 / 0.15)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-4 block">
              Global
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Jetzt
              <br />
              <span className="gold-shimmer">Worldwide.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Was als lokale Vision in Deutschland begann, ist heute eine internationale Kraft.
              TGI ist in mehreren Ländern aktiv — und die Expansion geht weiter.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-5 py-2.5 rounded-full bg-[oklch(0.78_0.17_85/0.1)] border border-[oklch(0.78_0.17_85/0.3)] text-[oklch(0.85_0.18_88)] text-sm font-semibold">
                Adria Nummer 1
              </div>
              <div className="px-5 py-2.5 rounded-full bg-[oklch(0.78_0.17_85/0.1)] border border-[oklch(0.78_0.17_85/0.3)] text-[oklch(0.85_0.18_88)] text-sm font-semibold">
                Höchstes Ranking
              </div>
              <div className="px-5 py-2.5 rounded-full bg-[oklch(0.78_0.17_85/0.1)] border border-[oklch(0.78_0.17_85/0.3)] text-[oklch(0.85_0.18_88)] text-sm font-semibold">
                Bester Experte
              </div>
            </div>
          </div>

          {/* Right: Region grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-2xl border border-white/8 bg-[oklch(0.13_0.007_270)] p-5 flex flex-col items-center text-center hover:border-[oklch(0.78_0.17_85/0.4)] hover:bg-[oklch(0.16_0.009_270)] transition-all duration-300 group"
              >
                <span className="text-3xl mb-3">{region.flag}</span>
                <div className="font-heading font-bold text-white text-sm mb-1">{region.name}</div>
                <div className="text-[oklch(0.78_0.17_85)] text-xs font-semibold">{region.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement banner */}
        <div className="mt-20 rounded-3xl border border-[oklch(0.78_0.17_85/0.3)] bg-gradient-to-r from-[oklch(0.13_0.007_270)] via-[oklch(0.78_0.17_85/0.05)] to-[oklch(0.13_0.007_270)] p-8 md:p-12 text-center">
          <div className="text-[oklch(0.78_0.17_85)] text-sm font-semibold tracking-widest uppercase mb-4">
            Höchste Auszeichnung
          </div>
          <div className="font-heading font-black text-3xl sm:text-4xl md:text-5xl gold-shimmer mb-4">
            Wurde Nummer 1
          </div>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            TGI hat das Highest Rank erreicht. Nicht durch Glück — durch System, Einsatz und ein unschlagbares Team.
          </p>
        </div>
      </div>
    </section>
  );
}
