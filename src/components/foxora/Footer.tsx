export function Footer() {
  return (
    <div
      className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t pt-8"
      style={{ borderColor: "var(--foxora-border)" }}
    >
      <div className="font-[family-name:var(--foxora-mono)] text-[10px] uppercase tracking-[1.5px] text-[var(--foxora-muted)]">
        🦊 Foxora · Strategy Brief v2.0 · Final Concept · Klagenfurt, AT · Zug, CH
      </div>
      <div
        className="rounded-full border px-3 py-1.5 font-[family-name:var(--foxora-mono)] text-[9px] uppercase tracking-[2px] text-[var(--foxora-fox)]"
        style={{
          background: "var(--foxora-fox-dim)",
          borderColor: "var(--foxora-fox-edge)",
        }}
      >
        ● Mainstream-Ready
      </div>
    </div>
  );
}
