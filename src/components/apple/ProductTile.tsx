type CTA = { label: string; variant?: "primary" | "secondary" };

type Props = {
  eyebrow?: string;
  eyebrowLogo?: React.ReactNode;
  headline: React.ReactNode;
  sub?: React.ReactNode;
  ctas?: CTA[];
  /** Tailwind classes for the visual background of the tile (gradient, color). */
  bgClassName?: string;
  /** Force light text on dark backgrounds. */
  invert?: boolean;
  /** Visual placeholder content (will be replaced by real product photo when running locally). */
  visual?: React.ReactNode;
  /** Aspect-ratio of the tile (default: tall hero). */
  aspect?: "tall" | "wide";
};

export function ProductTile({
  eyebrow,
  eyebrowLogo,
  headline,
  sub,
  ctas = [],
  bgClassName = "bg-[oklch(0.97_0_0)]",
  invert = false,
  visual,
  aspect = "tall",
}: Props) {
  const text = invert ? "text-white" : "text-[oklch(0.21_0_0)]";
  const subText = invert ? "text-white/85" : "text-[oklch(0.34_0_0)]";
  const minH = aspect === "wide" ? "min-h-[420px]" : "min-h-[580px]";

  return (
    <article
      className={`relative isolate flex ${minH} flex-col items-center overflow-hidden rounded-[18px] px-6 pb-12 pt-12 sm:pb-14 sm:pt-14 ${bgClassName}`}
    >
      <div className={`relative z-10 flex flex-col items-center text-center ${text}`}>
        {eyebrowLogo ? (
          <div className="mb-2">{eyebrowLogo}</div>
        ) : eyebrow ? (
          <p className="mb-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {headline}
        </h2>
        {sub ? (
          <p className={`mt-3 max-w-xl text-base sm:text-lg ${subText}`}>
            {sub}
          </p>
        ) : null}
        {ctas.length > 0 ? (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {ctas.map((cta, i) => {
              const isPrimary = cta.variant !== "secondary";
              const linkClass = isPrimary
                ? "rounded-full bg-[oklch(0.55_0.15_252)] px-5 py-1.5 text-sm font-medium text-white transition hover:bg-[oklch(0.49_0.15_252)]"
                : `rounded-full border px-5 py-1.5 text-sm font-medium transition ${
                    invert
                      ? "border-white/40 text-white hover:bg-white/10"
                      : "border-[oklch(0.55_0.15_252)] text-[oklch(0.55_0.15_252)] hover:bg-[oklch(0.55_0.15_252)]/10"
                  }`;
              return (
                <a key={i} href="#" className={linkClass}>
                  {cta.label}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
      {visual ? (
        <div className="relative z-0 mt-6 flex flex-1 w-full items-end justify-center">
          {visual}
        </div>
      ) : null}
    </article>
  );
}

/** Reusable Apple wordmark eyebrow (small  icon + product name). */
export function AppleEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-1.5 text-2xl font-semibold tracking-tight sm:text-3xl">
      <svg viewBox="0 0 14 17" className="h-6 w-6" fill="currentColor">
        <path d="M11.6 9c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.7 0-1.7-.7-2.7-.7C2.8 4.4 1 6 1 9.3c0 1 .2 2 .5 2.9.5 1.4 2.1 4.7 3.7 4.6.8 0 1.4-.6 2.5-.6 1 0 1.6.6 2.5.6 1.7 0 3.1-3 3.6-4.4-2.7-1-2.7-3.4-2.2-3.4ZM8.6 3.4c.7-.9 1.2-2 1-3-1 0-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.8 1.1 0 2.2-.5 2.7-1.2Z" />
      </svg>
      {children}
    </p>
  );
}
