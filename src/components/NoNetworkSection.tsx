const objections = [
  {
    problem: "Kein Netzwerk",
    solution: "Wir bauen es mit dir auf. Du brauchst keinen einzigen Kontakt zum Start.",
  },
  {
    problem: "Keine Erfahrung",
    solution: "Unsere jahrelange Erfahrung ist dein Vorteil. Du profitierst von unserem System.",
  },
  {
    problem: "Keine Zeit",
    solution: "Dein Team arbeitet — auch wenn du gerade nicht arbeitest.",
  },
];

export function NoNetworkSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Full-width gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.78_0.17_85/0.05)] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Big headline card */}
        <div className="rounded-3xl border border-[oklch(0.78_0.17_85/0.25)] bg-[oklch(0.13_0.007_270)] overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2">
            {/* Left: headline */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-4 block">
                Keine Ausreden
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                <span className="text-white">Kein Bock</span>
                <br />
                <span className="text-white">auf Network?</span>
                <br />
                <span className="gold-shimmer">No Problem.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Du musst keine Partys schmeißen, keine Freunde anschreiben, keinen awkwarden Pitch machen.
                TGI funktioniert anders.
              </p>
              <a
                href="#team"
                className="self-start px-7 py-3.5 rounded-full font-heading font-bold text-sm bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] hover:bg-[oklch(0.85_0.18_88)] transition-all duration-200"
              >
                Trotzdem starten
              </a>
            </div>

            {/* Right: objections */}
            <div className="border-t lg:border-t-0 lg:border-l border-white/8 p-10 md:p-14 flex flex-col gap-8">
              {objections.map((o) => (
                <div key={o.problem} className="flex gap-5">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-[oklch(0.78_0.17_85/0.1)] border border-[oklch(0.78_0.17_85/0.3)] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="oklch(0.85 0.18 88)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-base mb-1 line-through text-white/30">
                      {o.problem}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{o.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="text-center">
          <p className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white">
            We build your team.{" "}
            <span className="gold-text">You earn from productivity.</span>
          </p>
          <p className="mt-4 text-white/40 text-base">
            Unser System. Unsere Erfahrung. Dein Erfolg.
          </p>
        </div>
      </div>
    </section>
  );
}
