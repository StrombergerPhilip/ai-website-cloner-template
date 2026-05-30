"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/icons";

const NAV_LINKS = [
  "Store",
  "Discover",
  "Studio",
  "Vision",
  "Sound",
  "Support",
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        height: scrolled ? 40 : 44,
        backgroundColor: scrolled
          ? "rgba(22, 22, 23, 0.82)"
          : "rgba(22, 22, 23, 0.72)",
        backdropFilter: `saturate(180%) blur(${scrolled ? 24 : 20}px)`,
        WebkitBackdropFilter: `saturate(180%) blur(${scrolled ? 24 : 20}px)`,
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        transition:
          "height 300ms var(--ease-apple), background-color 300ms var(--ease-apple), backdrop-filter 300ms var(--ease-apple)",
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full items-center"
        style={{ maxWidth: 1024, paddingInline: 22 }}
      >
        <Link
          href="/"
          aria-label="Shop home"
          className="text-white transition-opacity hover:opacity-80"
          style={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            transitionDuration: "200ms",
            transitionTimingFunction: "var(--ease-apple)",
          }}
        >
          <BrandMark />
        </Link>

        <ul
          className="ml-auto flex items-center"
          style={{ gap: 24 }}
        >
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <Link
                href="#"
                className="text-white transition-opacity hover:opacity-80"
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  transitionDuration: "200ms",
                  transitionTimingFunction: "var(--ease-apple)",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
