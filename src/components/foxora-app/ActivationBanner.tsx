"use client";

import { useState } from "react";

export function ActivationBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div
      className="fxa-banner fixed inset-x-0 top-0 z-[101] flex items-center justify-center gap-3 px-4 py-2.5 text-center text-[13px] font-semibold text-white sm:text-[14px]"
      style={{
        background: "linear-gradient(90deg, var(--fxa-orange), #E65500)",
      }}
    >
      <span className="hidden sm:inline">🎁</span>
      <span>
        <strong className="font-extrabold">+25 % Aktivierungs-Bonus</strong>{" "}
        auf deine ersten 100 € Cashback in BTC
        <span className="ml-2 hidden opacity-90 sm:inline">
          · Nur im Beta-Zeitraum
        </span>
      </span>
      <a
        href="#signup"
        className="hidden rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-white no-underline sm:inline-block"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        Aktivieren →
      </a>
      <button
        type="button"
        onClick={() => setShow(false)}
        className="ml-auto cursor-pointer border-none bg-transparent text-[18px] leading-none text-white opacity-80 hover:opacity-100"
        aria-label="Banner schließen"
      >
        ×
      </button>
    </div>
  );
}
