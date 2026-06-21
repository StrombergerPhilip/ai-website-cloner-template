const expertiseAreas = [
  {
    title: "Team Building",
    desc: "Wir haben hunderte erfolgreiche Teams aufgebaut. Wir wissen, was funktioniert — und was nicht.",
    metric: "100+",
    metricLabel: "Teams aufgebaut",
  },
  {
    title: "Sales Systeme",
    desc: "Bewährte Prozesse, die duplizierbar sind. Was bei uns funktioniert, funktioniert auch in deinem Team.",
    metric: "Gold",
    metricLabel: "Status erreicht",
  },
  {
    title: "Leadership",
    desc: "Helmut hat selbst das höchste Ranking erreicht. Du lernst von jemandem, der es wirklich gemacht hat.",
    metric: "#1",
    metricLabel: "Adria Ranking",
  },
  {
    title: "Internationale Expansion",
    desc: "Von Gießen in die Welt. Wir kennen die Wege und öffnen sie für dich.",
    metric: "Worldwide",
    metricLabel: "Präsenz",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.17 85) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.78_0.17_85)] mb-4 block">
            Expertise
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Unsere{" "}
            <span className="gold-text">Erfahrung.</span>
            <br />
            Dein Vorsprung.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Wir machen keine Experimente — wir bringen das, was über Jahre hinweg bewiesen wurde.
            Best Experte. Highest Rank. Adria Nummer 1.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-3xl border border-white/8 bg-[oklch(0.13_0.007_270)] p-7 hover:border-[oklch(0.78_0.17_85/0.4)] hover:bg-[oklch(0.15_0.009_270)] transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <div className="font-heading font-black text-3xl gold-text mb-0.5">{area.metric}</div>
                <div className="text-white/30 text-xs font-medium">{area.metricLabel}</div>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">{area.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{area.desc}</p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[oklch(0.78_0.17_85)] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Quote / statement */}
        <div className="mt-20 rounded-3xl border border-[oklch(0.78_0.17_85/0.2)] bg-gradient-to-br from-[oklch(0.13_0.007_270)] to-[oklch(0.10_0.005_270)] p-10 md:p-14 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="font-heading font-black text-2xl sm:text-3xl text-white leading-tight">
              „Wir machen keine Experimente.{" "}
              <span className="gold-text">
                Wir bringen Ergebnisse, die für sich sprechen.
              </span>
              "
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-4 md:flex-col">
              <div className="text-center">
                <div className="font-heading font-black text-4xl gold-text">Best</div>
                <div className="text-white/40 text-xs">Experte</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-4xl gold-text">#1</div>
                <div className="text-white/40 text-xs">Highest Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
