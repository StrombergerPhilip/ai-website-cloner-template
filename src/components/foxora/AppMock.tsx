import { SectionHead } from "./shared";

const purchases = [
  { icon: "⛽", name: "Tankstelle", time: "heute · 09:12", val: "+€0,38" },
  { icon: "👟", name: "Nike", time: "heute · 14:28", val: "+€0,74" },
  { icon: "🛒", name: "Spar", time: "gestern", val: "+€0,28" },
];

export function AppMock() {
  return (
    <>
      <SectionHead
        num="04"
        title={<>Was der Kunde <em>sieht.</em></>}
        sub="Eine Zahl groß. Drei Einkäufe darunter. Eine nächste Auszahlung. Das war's. Mehr ist Lärm."
      />
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div className="space-y-3.5 text-[15px] leading-[1.75] text-[var(--foxora-text2)] [&_strong]:font-semibold [&_strong]:text-[var(--foxora-fox)]">
          <p>
            Der Kunde öffnet die App und sieht{" "}
            <strong>eine einzige Zahl</strong>: was er gesammelt hat. Daneben in
            klein der BTC-Wert für die, die&apos;s wissen wollen.
          </p>
          <p>
            Darunter: die letzten 3 Einkäufe mit den Rewards, die er dafür
            bekommen hat. Konkret, fühlbar, sofort verständlich.
          </p>
          <p>
            Ganz unten: die nächste Auszahlung mit Datum und Uhrzeit.{" "}
            <strong>Erwartung kalibriert, kein Wartespiel.</strong>
          </p>
          <p>
            Was er <strong>nicht sieht</strong>: Treasury, Pool-Stand,
            Yield-Mechaniken, Funding-Splits, Token-Burns. Das ist alles
            Backend. Genauso wie Visa nie zeigt, wie die Interchange-Fees
            fließen.
          </p>
        </div>

        {/* Mock phone */}
        <div
          className="mx-auto max-w-[340px] rounded-[32px] border px-5 py-6"
          style={{
            background: "linear-gradient(180deg, #0f1320, #0a0d16)",
            borderColor: "var(--foxora-borderW)",
            boxShadow: "0 24px 64px rgba(0,0,0,.5), 0 0 0 6px #1a1f30",
          }}
        >
          <div className="mb-4 flex justify-between font-[family-name:var(--foxora-mono)] text-[10px] tracking-[0.5px] text-[var(--foxora-muted)]">
            <span>9:41</span>
            <span>🦊 Foxora</span>
          </div>
          <div className="mb-1.5 font-[family-name:var(--foxora-display)] text-[13px] font-bold uppercase tracking-[2px] text-[var(--foxora-muted)]">
            Deine Rewards
          </div>
          <div className="mb-1 font-[family-name:var(--foxora-display)] text-[42px] font-extrabold leading-none tracking-[-1.5px] text-[var(--foxora-text)]">
            €38,45
          </div>
          <div className="mb-6 font-[family-name:var(--foxora-mono)] text-[12px] tracking-[0.5px] text-[var(--foxora-fox)]">
            ≈ 42.550 Sats
          </div>

          {purchases.map((p) => (
            <div
              key={p.name}
              className="mb-2 flex items-center justify-between rounded-xl px-4 py-3.5"
              style={{ background: "var(--foxora-card2)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[18px]">{p.icon}</span>
                <div>
                  <div className="text-[13px] font-medium text-[var(--foxora-text)]">
                    {p.name}
                  </div>
                  <div className="text-[10.5px] text-[var(--foxora-muted)]">
                    {p.time}
                  </div>
                </div>
              </div>
              <div className="font-[family-name:var(--foxora-mono)] text-[13px] font-semibold text-[var(--foxora-fox)]">
                {p.val}
              </div>
            </div>
          ))}

          <div
            className="mt-4 rounded-xl border-dashed px-4 py-3.5 text-center"
            style={{
              background: "rgba(247,147,26,.08)",
              borderWidth: "1px",
              borderColor: "var(--foxora-fox-edge)",
            }}
          >
            <div className="mb-1.5 font-[family-name:var(--foxora-mono)] text-[9px] uppercase tracking-[2px] text-[var(--foxora-muted)]">
              Nächste Auszahlung
            </div>
            <div className="font-[family-name:var(--foxora-display)] text-[14px] font-semibold text-[var(--foxora-fox)]">
              Freitag · 14:00
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
