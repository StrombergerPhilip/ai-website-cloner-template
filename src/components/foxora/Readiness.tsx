import { SectionHead } from "./shared";

type Status = "ok" | "warn" | "no";
const items: { status: Status; mark: string; title: string; desc: string; tag: string }[] = [
  {
    status: "ok",
    mark: "✓",
    title: "Konzept-Klarheit",
    desc: "10-Sekunden-Pitch funktioniert. „Wie Payback, mit Bitcoin.“ Erklärt sich selbst.",
    tag: "Ready",
  },
  {
    status: "ok",
    mark: "✓",
    title: "Marketing-Sprache",
    desc: "Saubere Vokabular-Liste steht. Kein Yield, kein Hebel, kein Pool — nur Rewards.",
    tag: "Ready",
  },
  {
    status: "ok",
    mark: "✓",
    title: "Preismodell",
    desc: "€9,90 Foxora+ trifft Amazon-Prime-Preisanker. Mainstream-akzeptiert.",
    tag: "Ready",
  },
  {
    status: "warn",
    mark: "!",
    title: "BTC-Vokabular vs Mainstream",
    desc: "„Sats“ zu Krypto-nah. Euro-Wert primär, BTC sekundär anzeigen.",
    tag: "Fix nötig",
  },
  {
    status: "warn",
    mark: "!",
    title: "Foxora+ Tag-1-Wert",
    desc: "Membership braucht sofort spürbaren Nutzen: Willkommensbonus, Premium-Deal.",
    tag: "Fix nötig",
  },
  {
    status: "no",
    mark: "✕",
    title: "Eigene Visa-Karte",
    desc: "Ohne eigene Karte kein präzises Transaktions-Tracking, kein Interchange-Cashflow.",
    tag: "Pflicht",
  },
  {
    status: "no",
    mark: "✕",
    title: "Trust-Signale (Lizenz, Audits, PR)",
    desc: "Bank/E-Money-Partner, Sygnum-Custody, Founder-Profile, Presse — alles noch fehlend.",
    tag: "Aufbau",
  },
];

const colorMap: Record<Status, { mark: string; tagBg: string; tagText: string }> = {
  ok: {
    mark: "var(--foxora-green)",
    tagBg: "rgba(29,158,117,0.12)",
    tagText: "var(--foxora-green)",
  },
  warn: {
    mark: "var(--foxora-amber)",
    tagBg: "rgba(240,176,51,0.12)",
    tagText: "var(--foxora-amber)",
  },
  no: {
    mark: "var(--foxora-red)",
    tagBg: "rgba(226,75,74,0.12)",
    tagText: "var(--foxora-red)",
  },
};

export function Readiness() {
  return (
    <>
      <SectionHead
        num="06"
        title={<>Mainstream-<em>Readiness</em> heute.</>}
        sub="Ehrliche Selbsteinschätzung. Drei grüne Punkte reichen nicht — alle sieben müssen stehen."
      />
      <div
        className="overflow-hidden rounded-[14px] border"
        style={{
          background: "var(--foxora-card)",
          borderColor: "var(--foxora-border)",
        }}
      >
        {items.map((it, idx) => {
          const c = colorMap[it.status];
          return (
            <div
              key={it.title}
              className="grid items-center gap-4 px-6 py-4"
              style={{
                gridTemplateColumns: "24px 1fr 110px",
                borderTopWidth: idx === 0 ? 0 : 1,
                borderColor: "var(--foxora-border)",
              }}
            >
              <span
                className="text-center font-[family-name:var(--foxora-mono)] text-[14px] font-bold"
                style={{ color: c.mark }}
              >
                {it.mark}
              </span>
              <div className="text-[14px] text-[var(--foxora-text2)]">
                <strong className="mb-0.5 block font-semibold text-[var(--foxora-text)]">
                  {it.title}
                </strong>
                {it.desc}
              </div>
              <span
                className="rounded-full px-2.5 py-1 text-center font-[family-name:var(--foxora-mono)] text-[9.5px] uppercase tracking-[1.5px]"
                style={{ background: c.tagBg, color: c.tagText }}
              >
                {it.tag}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
