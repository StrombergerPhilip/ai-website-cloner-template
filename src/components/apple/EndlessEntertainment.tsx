type Tile = {
  eyebrow: string;
  title: string;
  bgClass: string;
};

const tiles: Tile[] = [
  {
    eyebrow: "Apple TV+",
    title: "Friday Night Baseball",
    bgClass:
      "bg-gradient-to-br from-[oklch(0.18_0.05_250)] via-[oklch(0.22_0.07_250)] to-[oklch(0.12_0.04_250)]",
  },
  {
    eyebrow: "Apple TV+",
    title: "Live MLB games, free.",
    bgClass:
      "bg-gradient-to-br from-[oklch(0.16_0.04_240)] via-[oklch(0.22_0.06_240)] to-[oklch(0.1_0.03_240)]",
  },
  {
    eyebrow: "Fitness+",
    title: "Meditation with Christian",
    bgClass:
      "bg-gradient-to-br from-[oklch(0.5_0.18_30)] via-[oklch(0.45_0.2_15)] to-[oklch(0.35_0.15_350)]",
  },
  {
    eyebrow: "Arcade",
    title: "Endless games. One subscription.",
    bgClass:
      "bg-gradient-to-br from-[oklch(0.5_0.2_300)] via-[oklch(0.55_0.22_320)] to-[oklch(0.4_0.18_280)]",
  },
];

export function EndlessEntertainment() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[oklch(0.21_0_0)] sm:text-4xl">
          Endless entertainment.
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <article
              key={tile.title}
              className={`flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[14px] p-5 text-white ${tile.bgClass}`}
            >
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/80">
                {tile.eyebrow}
              </p>
              <p className="mt-1 text-base font-semibold leading-snug sm:text-lg">
                {tile.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
