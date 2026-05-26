"use client";

import { useEffect, useState } from "react";
import { PhoneFrame } from "./PhoneFrame";

function HeroCounter() {
  const [n, setN] = useState(42550);
  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => v + Math.floor(Math.random() * 8));
    }, 2500);
    return () => clearInterval(id);
  }, []);
  return <>{n.toLocaleString("de-DE").replace(/\./g, " ")}</>;
}

const txs = [
  { icon: "⛽", name: "Tankstelle", amount: "+420" },
  { icon: "👟", name: "Nike", amount: "+820" },
  { icon: "🛒", name: "Supermarkt", amount: "+185" },
];

export function Hero() {
  return (
    <section
      className="flex min-h-screen items-center px-5 pb-20 pt-[110px] sm:px-10 sm:pt-[140px]"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(255,107,26,0.15), transparent 60%), radial-gradient(ellipse at bottom left, rgba(255,107,26,0.08), transparent 60%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold text-[var(--fxa-orange)]"
            style={{
              background: "rgba(255,107,26,0.15)",
              borderColor: "rgba(255,107,26,0.3)",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: "var(--fxa-green)",
                animation: "fxa-blink 1.5s infinite",
              }}
            />
            12.847 Beta-Sammler · Live seit Q1 2026
          </div>
          <h1 className="mb-6 text-[42px] font-black leading-[1.05] tracking-[-1px] sm:text-[56px] lg:text-[72px] lg:tracking-[-2px]">
            Kaufe normal ein.
            <br />
            Sammle <span className="text-[var(--fxa-orange)]">Bitcoin Rewards</span>.
          </h1>
          <p className="mb-8 max-w-[500px] text-[17px] text-[var(--fxa-text-muted)] sm:text-[20px]">
            Foxora verwandelt jeden Einkauf in Sats. Verbinde deine Karte,
            kaufe wie immer — und sieh zu, wie deine Bitcoin-Rewards wachsen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#signup"
              className="rounded-full bg-[var(--fxa-orange)] px-8 py-[18px] text-[16px] font-semibold text-white no-underline transition hover:bg-[var(--fxa-orange-bright)] hover:-translate-y-px"
            >
              Beta kostenlos sichern
            </a>
            <a
              href="#calc"
              className="rounded-full border bg-transparent px-8 py-[18px] text-[16px] font-semibold text-white no-underline transition hover:border-[var(--fxa-orange)] hover:bg-[rgba(255,107,26,0.1)] hover:-translate-y-px"
              style={{ borderColor: "var(--fxa-border)" }}
            >
              Cashback berechnen
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex">
              {["A", "M", "S", "+"].map((c, i) => (
                <div
                  key={c}
                  className="-ml-2.5 flex h-9 w-9 items-center justify-center rounded-full border-[3px] text-[13px] font-bold text-white first:ml-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--fxa-orange), #E65500)",
                    borderColor: "var(--fxa-dark)",
                    marginLeft: i === 0 ? 0 : undefined,
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
            <div className="text-[14px] text-[var(--fxa-text-muted)]">
              <strong className="text-[var(--fxa-text)]">4,8/5</strong> aus 312
              Bewertungen ·{" "}
              <strong className="text-[var(--fxa-text)]">2,4 BTC</strong>{" "}
              bereits ausgezahlt
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-[var(--fxa-text-muted)]">
            {[
              "Keine versteckten Gebühren",
              "14 Tage Widerruf",
              "BaFin-konforme Verwahrung",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 before:font-bold before:text-[var(--fxa-orange)] before:content-['✓']"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <PhoneFrame>
          <div className="mb-8 mt-6 flex items-center justify-between">
            <div>
              <div className="text-[14px] text-[var(--fxa-text-muted)]">
                Hi Alex 👋
              </div>
              <div className="text-[18px] font-extrabold">Deine Rewards</div>
            </div>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-bold text-white"
              style={{ background: "var(--fxa-orange)" }}
            >
              A
            </div>
          </div>
          <div
            className="mb-5 rounded-3xl p-6"
            style={{
              background: "linear-gradient(135deg, var(--fxa-orange), #E65500)",
              boxShadow: "0 20px 40px rgba(255,107,26,0.3)",
            }}
          >
            <div className="mb-2 text-[12px] uppercase tracking-[1px] opacity-90">
              Bitcoin Balance
            </div>
            <div className="text-[32px] font-black tracking-[-1px]">
              ₿ <HeroCounter />
            </div>
            <div className="mt-2 text-[13px] opacity-90">
              Sats · ≈ 38,20 €
            </div>
          </div>
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div
              className="rounded-2xl border p-3.5"
              style={{
                background: "var(--fxa-card)",
                borderColor: "var(--fxa-border)",
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.5px] text-[var(--fxa-text-muted)]">
                Heute
              </div>
              <div className="mt-1 text-[16px] font-bold text-[var(--fxa-orange)]">
                +1 240
              </div>
            </div>
            <div
              className="rounded-2xl border p-3.5"
              style={{
                background: "var(--fxa-card)",
                borderColor: "var(--fxa-border)",
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.5px] text-[var(--fxa-text-muted)]">
                Auszahlung
              </div>
              <div className="mt-1 text-[16px] font-bold text-[var(--fxa-orange)]">
                Freitag
              </div>
            </div>
          </div>
          <div className="mb-3 text-[12px] uppercase tracking-[1px] text-[var(--fxa-text-muted)]">
            Letzte Einkäufe
          </div>
          {txs.map((t, i) => (
            <div
              key={t.name}
              className="flex items-center gap-3 py-3"
              style={{
                borderBottom:
                  i === txs.length - 1
                    ? "none"
                    : "1px solid var(--fxa-border)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[18px]"
                style={{ background: "rgba(255,107,26,0.15)" }}
              >
                {t.icon}
              </div>
              <div className="flex-1 text-[14px] font-semibold">{t.name}</div>
              <div className="text-[14px] font-bold text-[var(--fxa-orange)]">
                {t.amount}
              </div>
            </div>
          ))}
        </PhoneFrame>
      </div>
    </section>
  );
}
