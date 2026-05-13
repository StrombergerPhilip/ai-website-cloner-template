export function PitchBox() {
  return (
    <div
      className="relative my-12 rounded-[18px] border px-11 py-10 text-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(247,147,26,0.06), var(--foxora-card))",
        borderColor: "var(--foxora-fox-edge)",
      }}
    >
      <span
        aria-hidden
        className="absolute left-6 top-[18px] font-[family-name:var(--foxora-display)] text-[60px] font-extrabold leading-none text-[var(--foxora-fox)] opacity-[0.18]"
      >
        &ldquo;
      </span>
      <span
        aria-hidden
        className="absolute -bottom-2.5 right-6 font-[family-name:var(--foxora-display)] text-[60px] font-extrabold leading-none text-[var(--foxora-fox)] opacity-[0.18]"
      >
        &rdquo;
      </span>
      <p className="font-[family-name:var(--foxora-display)] text-[clamp(22px,3vw,34px)] font-bold leading-[1.2] tracking-[-0.8px] text-[var(--foxora-text)]">
        Kaufe normal ein.
        <br />
        Sammle automatisch{" "}
        <em className="not-italic text-[var(--foxora-fox)]">Bitcoin Rewards.</em>
      </p>
      <p className="mt-4 font-[family-name:var(--foxora-mono)] text-[10.5px] uppercase tracking-[2px] text-[var(--foxora-muted)]">
        Der ganze Pitch · in einem Satz
      </p>
    </div>
  );
}
