"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const plans = [
  { label: "Free · 1%", rate: 0.01 },
  { label: "Foxora+ · 2,5%", rate: 0.025 },
  { label: "Pro · 5%", rate: 0.05 },
];

const SATS_PER_EUR = 1110;

export function Calculator() {
  const [planIdx, setPlanIdx] = useState(0);
  const [spend, setSpend] = useState(1200);
  const rate = plans[planIdx].rate;
  const monthly = spend * rate;
  const yearly = monthly * 12;

  const fmtEUR = (n: number, digits = 0) =>
    n.toFixed(digits).replace(".", ",");
  const fmtNum = (n: number) => Math.round(n).toLocaleString("de-DE");

  return (
    <FadeIn
      as="section"
      className="px-5 py-[70px] sm:px-10 sm:py-[100px]"
    >
      <div
        id="calc"
        className="mx-auto max-w-[1280px]"
        style={{ background: "linear-gradient(180deg, var(--fxa-dark), #1A1410)" }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold text-[var(--fxa-orange)]"
              style={{
                background: "rgba(255,107,26,0.15)",
                borderColor: "rgba(255,107,26,0.3)",
              }}
            >
              🧮 Live-Rechner
            </div>
            <h2 className="mt-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
              Wie viel Bitcoin sammelst du?
            </h2>
            <p className="mt-4 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:text-[20px]">
              Verschiebe den Slider zu deinen monatlichen Ausgaben und sieh
              deine Bitcoin-Rewards in Echtzeit.
            </p>
          </div>

          <div
            className="rounded-[32px] border p-7 sm:p-10"
            style={{
              background: "var(--fxa-card)",
              borderColor: "var(--fxa-border)",
            }}
          >
            <div
              className="mb-6 flex gap-2 rounded-xl p-1.5"
              style={{ background: "var(--fxa-dark)" }}
            >
              {plans.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setPlanIdx(i)}
                  className={`flex-1 cursor-pointer rounded-lg border-none px-2 py-2.5 text-[13px] font-semibold transition ${
                    planIdx === i
                      ? "bg-[var(--fxa-orange)] text-white"
                      : "bg-transparent text-[var(--fxa-text-muted)]"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className="mb-4 text-[14px] uppercase tracking-[1px] text-[var(--fxa-text-muted)]">
              Deine monatlichen Ausgaben
            </div>
            <div className="mb-6 text-[36px] font-black tracking-[-1px] text-white sm:text-[48px]">
              <span>{spend.toLocaleString("de-DE")}</span>€{" "}
              <span className="text-[18px] font-medium text-[var(--fxa-text-muted)]">
                / Monat
              </span>
            </div>
            <div className="relative py-4">
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={spend}
                onChange={(e) => setSpend(parseInt(e.target.value, 10))}
                className="fxa-slider w-full"
              />
              <div className="mt-2 flex justify-between text-[11px] text-[var(--fxa-text-muted)]">
                <span>100€</span>
                <span>1.000€</span>
                <span>2.500€</span>
                <span>5.000€</span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl border p-5 text-center"
                style={{
                  background: "var(--fxa-dark)",
                  borderColor: "var(--fxa-border)",
                }}
              >
                <div className="mb-2 text-[12px] uppercase tracking-[0.5px] text-[var(--fxa-text-muted)]">
                  Pro Monat
                </div>
                <div className="text-[28px] font-black text-[var(--fxa-orange)]">
                  {fmtEUR(monthly, 2)}€
                </div>
                <div className="mt-1 text-[12px] text-[var(--fxa-text-muted)]">
                  ≈ {fmtNum(monthly * SATS_PER_EUR)} Sats
                </div>
              </div>
              <div
                className="rounded-2xl border p-5 text-center"
                style={{
                  background: "var(--fxa-dark)",
                  borderColor: "var(--fxa-border)",
                }}
              >
                <div className="mb-2 text-[12px] uppercase tracking-[0.5px] text-[var(--fxa-text-muted)]">
                  Pro Jahr
                </div>
                <div className="text-[28px] font-black text-[var(--fxa-orange)]">
                  {fmtEUR(yearly, 0)}€
                </div>
                <div className="mt-1 text-[12px] text-[var(--fxa-text-muted)]">
                  ≈ {fmtNum(yearly * SATS_PER_EUR)} Sats
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-[11px] text-[var(--fxa-text-muted)]">
              Beispielrechnung. Bitcoin-Wert kann schwanken. Cashback-Höhe
              abhängig von Partnern und Plan.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fxa-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          background: var(--fxa-border);
          border-radius: 100px;
          outline: none;
        }
        .fxa-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 28px;
          height: 28px;
          background: var(--fxa-orange);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255,107,26,0.5);
          border: 4px solid var(--fxa-dark);
        }
        .fxa-slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          background: var(--fxa-orange);
          border-radius: 50%;
          cursor: pointer;
          border: 4px solid var(--fxa-dark);
        }
      `}</style>
    </FadeIn>
  );
}
