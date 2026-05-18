"use client";

import { useState } from "react";
import { ChevronDownIcon, GlobeIcon } from "@/components/icons";
import { useHoverFlyout } from "@/hooks/use-hover-flyout";

const LANGUAGES = [
  { code: "EN", label: "English - EN" },
  { code: "DE", label: "Deutsch - DE" },
  { code: "ES", label: "Español - ES" },
  { code: "FR", label: "Français - FR" },
  { code: "IT", label: "Italiano - IT" },
  { code: "PT", label: "Português - PT" },
  { code: "ZH", label: "中文 (简体) - ZH" },
] as const;

export function LanguageMenu() {
  const { open, triggerProps, panelProps, rootRef } = useHoverFlyout();
  const [selected, setSelected] = useState<string>("EN");

  return (
    <div ref={rootRef} className="relative hidden md:block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex h-[50px] shrink-0 items-center gap-1 rounded border px-2 text-[14px] font-bold ${
          open ? "border-white" : "border-transparent hover:border-white"
        }`}
        {...triggerProps}
      >
        <GlobeIcon className="size-[18px]" />
        <span>{selected}</span>
        <ChevronDownIcon className="size-3 opacity-70" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-px w-[280px] rounded-sm border border-[oklch(0.85_0_0)] bg-white text-[oklch(0.18_0_0)] shadow-[0_4px_16px_oklch(0_0_0_/_15%)]"
          {...panelProps}
        >
          <div
            aria-hidden="true"
            className="absolute -top-2 right-6 size-3 rotate-45 border-l border-t border-[oklch(0.85_0_0)] bg-white"
          />
          <div className="p-3">
            <p className="mb-2 text-[12px] font-bold">Choose your language</p>
            <ul className="space-y-1">
              {LANGUAGES.map((lang) => {
                const active = lang.code === selected;
                return (
                  <li key={lang.code}>
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={active}
                      onClick={() => setSelected(lang.code)}
                      className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-[13px] hover:bg-[oklch(0.97_0_0)]"
                    >
                      <span
                        className={`inline-flex size-4 shrink-0 items-center justify-center rounded-full border ${
                          active
                            ? "border-[var(--cta-hover)] bg-[var(--cta-hover)]"
                            : "border-[oklch(0.7_0_0)]"
                        }`}
                      >
                        {active && (
                          <span className="size-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <span>{lang.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-t border-[oklch(0.92_0_0)] p-3">
            <p className="mb-1 text-[12px] font-bold">Change country/region.</p>
            <button
              type="button"
              className="text-[13px] text-[var(--link)] hover:underline"
            >
              Lorem region: Ipsum Country ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
