"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { ChatDrawer } from "@/components/chat/chat-drawer";
import { useT } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/modell", label: t("nav.modell") },
    { href: "/struktur", label: t("nav.struktur") },
    { href: "/roadmap", label: t("nav.roadmap") },
    { href: "/kontakt", label: t("nav.kontakt") },
  ];

  return (
    <header className="glass sticky top-0 z-40 w-full border-b border-border/60">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Foxora"
        >
          <span
            aria-hidden
            className="inline-block size-3 rounded-full bg-accent"
          />
          <span className="text-base">Foxora</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <LangToggle />
          <ThemeToggle />
          <div className="hidden md:block">
            <ChatDrawer
              trigger={
                <Button variant="default" size="default" className="gap-2">
                  <Sparkles className="size-4" />
                  {t("nav.talkToFoxora")}
                </Button>
              }
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t(mobileOpen ? "nav.closeMenu" : "nav.openMenu")}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/60 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <ChatDrawer
                trigger={
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full justify-center gap-2"
                  >
                    <Sparkles className="size-4" />
                    {t("nav.talkToFoxora")}
                  </Button>
                }
              />
            </div>
          </nav>
        </div>
      ) : null}
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
