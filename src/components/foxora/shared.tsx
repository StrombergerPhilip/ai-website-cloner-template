export function SectionHead({
  num,
  title,
  sub,
}: {
  num: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <>
      <div className="mb-[26px] flex items-baseline gap-4">
        <span className="min-w-[34px] font-[family-name:var(--foxora-mono)] text-[11px] tracking-[2.5px] text-[var(--foxora-muted)]">
          {num}
        </span>
        <h2 className="font-[family-name:var(--foxora-display)] text-[clamp(26px,3.2vw,38px)] font-bold leading-[1.1] tracking-[-1px] text-[var(--foxora-text)] [&_em]:not-italic [&_em]:text-[var(--foxora-fox)]">
          {title}
        </h2>
      </div>
      {sub ? (
        <p className="mb-[28px] ml-[50px] mt-[6px] max-w-[640px] text-[14.5px] leading-[1.6] text-[var(--foxora-muted)]">
          {sub}
        </p>
      ) : null}
    </>
  );
}

export function Rule() {
  return (
    <div
      className="my-[60px] h-px"
      style={{
        background: "linear-gradient(90deg, var(--foxora-border), transparent)",
      }}
    />
  );
}
