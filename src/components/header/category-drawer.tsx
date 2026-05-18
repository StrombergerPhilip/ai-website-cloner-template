"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRightIcon, MenuIcon } from "@/components/icons";

const SHOP_BY_DEPARTMENT = [
  "Lorem Electronics",
  "Ipsum Computers",
  "Dolor Home & Kitchen",
  "Sit Books",
  "Amet Fashion",
  "Consectetur Toys",
  "Adipiscing Sports",
  "Elit Beauty",
  "Sed Health",
  "Eiusmod Pet Supplies",
] as const;

const HELP_AND_SETTINGS = [
  "Your Account",
  "Customer Service",
  "Sign in",
] as const;

export function CategoryDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex shrink-0 items-center gap-1 rounded border border-transparent px-2 py-1 font-bold hover:border-white"
      >
        <MenuIcon className="size-4" />
        <span>All</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Browse categories"
            className="relative flex h-full w-[340px] flex-col bg-white text-[oklch(0.18_0_0)] shadow-xl"
          >
            <header className="flex items-center bg-[var(--subnav)] px-4 py-4 text-white">
              <div className="flex size-10 items-center justify-center rounded-full bg-[oklch(0.65_0_0)] text-[oklch(0.18_0_0)]">
                <svg
                  viewBox="0 0 16 16"
                  className="size-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="6" r="3" />
                  <path d="M2 14c1-3 3.5-4.5 6-4.5S13 11 14 14H2Z" />
                </svg>
              </div>
              <p className="ml-3 text-[18px] font-bold">Hello, sign in</p>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="ml-auto flex size-8 items-center justify-center rounded text-[24px] leading-none hover:bg-white/10"
              >
                ×
              </button>
            </header>

            <div className="flex-1 overflow-y-auto">
              <section className="border-b border-[oklch(0.92_0_0)] py-3">
                <h2 className="px-5 pb-2 text-[18px] font-bold">
                  Shop by Department
                </h2>
                <ul>
                  {SHOP_BY_DEPARTMENT.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="flex items-center justify-between px-5 py-2.5 text-[16px] hover:bg-[oklch(0.97_0_0)]"
                      >
                        <span>{label}</span>
                        <ChevronRightIcon className="size-3 text-[oklch(0.5_0_0)]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="py-3">
                <h2 className="px-5 pb-2 text-[18px] font-bold">
                  Help &amp; Settings
                </h2>
                <ul>
                  {HELP_AND_SETTINGS.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="flex items-center px-5 py-2.5 text-[16px] hover:bg-[oklch(0.97_0_0)]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
