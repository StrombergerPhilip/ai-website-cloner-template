export function Hero() {
  return (
    <div>
      <div className="mb-5 inline-flex items-center gap-2.5 font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[3px] text-[var(--foxora-fox)] before:block before:h-px before:w-[30px] before:bg-[var(--foxora-fox)] before:content-['']">
        Das fertige Modell · Nach 30+ Iterationen
      </div>
      <h1 className="mb-6 max-w-[900px] font-[family-name:var(--foxora-display)] text-[clamp(40px,5.6vw,76px)] font-extrabold leading-[0.96] tracking-[-2.2px] text-[var(--foxora-text)] [&_em]:not-italic [&_em]:text-[var(--foxora-fox)]">
        Foxora.
        <br />
        Wie <em>Payback</em> —<br />
        nur mit <em>Bitcoin.</em>
      </h1>
      <p className="max-w-[740px] text-[18px] leading-[1.65] text-[var(--foxora-text2)]">
        Kein Pool. Kein Versprechen. Kein Yield-Trick.{" "}
        <strong className="font-semibold text-[var(--foxora-text)]">
          Eine Reward-App, die jeder versteht in 10 Sekunden.
        </strong>{" "}
        Das ist das Modell, das in DACH funktionieren kann — und in 5–7 Jahren
        ein echtes Unternehmen wird.
      </p>
    </div>
  );
}
