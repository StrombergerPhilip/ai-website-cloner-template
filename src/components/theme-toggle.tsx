"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useI18n } from "@/lib/i18n/provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={t("nav.toggleTheme")}
      title={t("nav.toggleTheme")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
