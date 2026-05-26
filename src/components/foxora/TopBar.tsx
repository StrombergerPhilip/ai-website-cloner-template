export function TopBar() {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2.5 font-[family-name:var(--foxora-display)] text-2xl font-bold tracking-[-0.6px]">
        🦊 Fox<span className="text-[var(--foxora-fox)]">ora</span>
      </div>
      <div className="flex flex-wrap items-center gap-3.5">
        <span className="font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[2px] text-[var(--foxora-muted)]">
          Strategy Brief · v2.0 Final
        </span>
        <span className="font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[2px] text-[var(--foxora-muted)]">
          13.05.2026
        </span>
        <span
          className="rounded-full border px-2.5 py-[5px] font-[family-name:var(--foxora-mono)] text-[9px] uppercase tracking-[1.8px] text-[var(--foxora-fox)]"
          style={{
            background: "var(--foxora-fox-dim)",
            borderColor: "var(--foxora-fox-edge)",
          }}
        >
          ● Mainstream-Ready
        </span>
      </div>
    </div>
  );
}
