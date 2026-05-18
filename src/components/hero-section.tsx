import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-label="Featured promotion"
      className="relative w-full overflow-hidden"
    >
      <div
        className="relative h-[380px] w-full md:h-[480px] lg:h-[560px]"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.75 0.05 230) 0%, oklch(0.55 0.07 250) 60%, oklch(0.42 0.06 260) 100%)",
        }}
      >
        {/* Decorative content placeholder */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 40%, oklch(0.95 0.04 80 / 35%) 0%, transparent 50%)",
          }}
        />

        {/* Overlay text card */}
        <div className="absolute inset-0 mx-auto flex max-w-[1500px] items-center px-6 md:px-10">
          <div className="max-w-[460px] rounded-md bg-white/95 p-6 shadow-md md:p-8">
            <p className="text-[13px] font-bold uppercase tracking-wider text-muted-foreground">
              Lorem deals
            </p>
            <h1 className="mt-1 text-[28px] font-bold leading-[1.15] text-foreground md:text-[34px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="mt-3 text-[15px] leading-snug text-foreground/80">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex h-[33px] items-center justify-center rounded-full bg-[var(--cta)] px-5 text-[14px] font-medium text-[var(--cta-foreground)] shadow-sm transition-colors hover:bg-[var(--cta-hover)]"
            >
              Shop deals
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background"
        />
      </div>
    </section>
  );
}
