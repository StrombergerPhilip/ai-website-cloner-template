"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Geschichte", href: "#history" },
  { label: "Worldwide", href: "#worldwide" },
  { label: "Team", href: "#team" },
  { label: "Sales Agent", href: "#sales-agent" },
  { label: "Erfahrung", href: "#experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[oklch(0.08_0.005_270/0.95)] backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading font-black text-2xl gold-text tracking-wider">TGI</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-[oklch(0.85_0.18_88)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#team"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] hover:bg-[oklch(0.85_0.18_88)] transition-all duration-200"
          >
            Jetzt starten
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={cn("block h-0.5 w-6 bg-white transition-all duration-300", open && "rotate-45 translate-y-2")} />
          <span className={cn("block h-0.5 w-6 bg-white transition-all duration-300", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-6 bg-white transition-all duration-300", open && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[oklch(0.08_0.005_270/0.98)] backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/80 hover:text-[oklch(0.85_0.18_88)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#team"
            className="mt-2 px-5 py-3 rounded-full text-base font-semibold bg-[oklch(0.78_0.17_85)] text-[oklch(0.1_0.01_270)] text-center"
            onClick={() => setOpen(false)}
          >
            Jetzt starten
          </a>
        </div>
      )}
    </header>
  );
}
