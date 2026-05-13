import { SectionHead } from "./shared";

const cells = [
  { when: "Jahr 1 · Pilot", val: "5K", sub: "Aktive Kunden · €0,8M ARR" },
  { when: "Jahr 2 · Ramp", val: "50K", sub: "€8M ARR · Break-Even-Phase" },
  { when: "Jahr 4 · Scale", val: "500K", sub: "€80M ARR · DACH Marktführer" },
  { when: "Jahr 6 · Mainstream", val: "2M", sub: "€320M ARR · €1–3 Mrd Bewertung" },
];

export function Trajectory() {
  return (
    <>
      <SectionHead
        num="09"
        title={<>Realistische <em>Trajektorie.</em></>}
        sub="Konservative Schätzung, ohne Hockey-Stick. Phase 2 nach echter Mainstream-Penetration."
      />
      <div
        className="rounded-[14px] border p-8"
        style={{
          background: "var(--foxora-card)",
          borderColor: "var(--foxora-border)",
        }}
      >
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cells.map((c) => (
            <div key={c.when} className="py-4">
              <div className="mb-2 font-[family-name:var(--foxora-mono)] text-[9.5px] uppercase tracking-[2px] text-[var(--foxora-muted)]">
                {c.when}
              </div>
              <div className="mb-1 font-[family-name:var(--foxora-display)] text-[28px] font-extrabold leading-none tracking-[-1px] text-[var(--foxora-fox)]">
                {c.val}
              </div>
              <div className="text-[12px] text-[var(--foxora-text2)]">
                {c.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
