function BeforeAfter({ label }: { label: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.78_0.05_30)] via-[oklch(0.7_0.06_30)] to-[oklch(0.55_0.07_30)]">
      <span className="absolute left-4 top-4 rounded-md bg-[oklch(0.61_0.235_350)] px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
        {label}
      </span>
      <div className="absolute inset-0 flex items-center justify-center text-xs italic text-white/60">
        Eye-area photo placeholder
      </div>
    </div>
  );
}

export function ProvenResults() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-serif text-3xl tracking-tight text-[oklch(0.16_0.04_280)] sm:text-4xl">
          Proven Power,{" "}
          <em className="italic text-[oklch(0.61_0.235_350)]">
            Visible Results
          </em>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-[oklch(0.45_0.04_280)]">
          Clinically tested. Visibly transformative.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <BeforeAfter label="Before" />
          <BeforeAfter label="After" />
        </div>

        <div className="mt-12 grid gap-10 rounded-2xl bg-[oklch(0.94_0.04_350)] p-10 sm:grid-cols-2">
          <div>
            <p className="font-serif text-5xl font-light text-[oklch(0.61_0.235_350)]">
              94%
            </p>
            <p className="mt-3 text-sm text-[oklch(0.16_0.04_280)]/75">
              agreed their skin looked more youthful*
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl font-light text-[oklch(0.61_0.235_350)]">
              97%
            </p>
            <p className="mt-3 text-sm text-[oklch(0.16_0.04_280)]/75">
              agreed their skin felt firmer and smoother*
            </p>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[oklch(0.45_0.04_280)]">
          *Independent consumer study, 8 weeks of use.
        </p>
      </div>
    </section>
  );
}
