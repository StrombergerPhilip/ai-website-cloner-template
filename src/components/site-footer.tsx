"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/provider";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span
              aria-hidden
              className="inline-block size-3 rounded-full bg-accent"
            />
            Foxora
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <div className="flex gap-4">
            <Link
              href="/modell"
              className="transition-colors hover:text-foreground"
            >
              {t("nav.modell")}
            </Link>
            <Link
              href="/struktur"
              className="transition-colors hover:text-foreground"
            >
              {t("nav.struktur")}
            </Link>
            <Link
              href="/roadmap"
              className="transition-colors hover:text-foreground"
            >
              {t("nav.roadmap")}
            </Link>
            <Link
              href="/manifesto"
              className="transition-colors hover:text-foreground"
            >
              {t("nav.manifesto")}
            </Link>
            <Link
              href="/kontakt"
              className="transition-colors hover:text-foreground"
            >
              {t("nav.kontakt")}
            </Link>
          </div>
          <div className="flex gap-4 text-xs">
            <Link
              href="/impressum"
              className="transition-colors hover:text-foreground"
            >
              {t("footer.impressum")}
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-foreground"
            >
              {t("footer.datenschutz")}
            </Link>
          </div>
          <p className="text-xs">{t("footer.legal")}</p>
        </div>
      </div>
    </footer>
  );
}
