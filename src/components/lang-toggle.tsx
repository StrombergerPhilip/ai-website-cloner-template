"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";

export function LangToggle() {
  const { locale, setLocale, t } = useI18n();
  const next = locale === "de" ? "en" : "de";
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(next)}
      aria-label={t("nav.toggleLang")}
      title={t("nav.toggleLang")}
      className="gap-2"
    >
      <Languages className="size-4" />
      <span className="font-mono text-xs uppercase tracking-wider">
        {locale}
      </span>
    </Button>
  );
}
