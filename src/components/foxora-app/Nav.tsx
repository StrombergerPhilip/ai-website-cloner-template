"use client";

import Link from "next/link";
import { useState } from "react";
import { FoxWordmark } from "./FoxLogo";

const links = [
  { href: "#how", label: "So funktioniert's" },
  { href: "#calc", label: "Rechner" },
  { href: "#membership", label: "Membership" },
  { href: "#partners", label: "Partner" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  return (
    <nav
      className="fxa-nav fixed inset-x-0 z-[100] flex items-center justify-between border-b px-4 py-[14px] backdrop-blur-xl sm:px-10 sm:py-[18px]"
      style={{
        background: "rgba(15,14,12,0.85)",
        borderColor: "var(--fxa-border)",
      }}
    >
      <Link href="#" className="no-underline">
        <FoxWordmark />
      </Link>
      <div className="hidden items-center gap-7 lg:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[14px] font-medium text-[var(--fxa-text-muted)] transition hover:text-[var(--fxa-text)]"
          >
            {l.label}
          </a>
        ))}
        <div
          className="flex gap-1 rounded-full border p-1"
          style={{
            background: "var(--fxa-card)",
            borderColor: "var(--fxa-border)",
          }}
        >
          {(["DE", "EN"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`cursor-pointer rounded-full border-none px-3 py-1.5 text-[12px] font-semibold transition ${
                lang === l
                  ? "bg-[var(--fxa-orange)] text-white"
                  : "bg-transparent text-[var(--fxa-text-muted)]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <a
        href="#signup"
        className="rounded-full bg-[var(--fxa-orange)] px-6 py-3 text-[14px] font-semibold text-white no-underline transition hover:bg-[var(--fxa-orange-bright)] hover:-translate-y-px"
      >
        Beta starten
      </a>
    </nav>
  );
}
