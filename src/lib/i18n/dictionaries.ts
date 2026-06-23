import de from "./de.json";
import en from "./en.json";
import type { Locale } from "@/types/foxora";

export const dictionaries = { de, en } as const;

export type Dictionary = typeof de;

export const DEFAULT_LOCALE: Locale = "de";

export const SUPPORTED_LOCALES: readonly Locale[] = ["de", "en"] as const;

export const FOXORA_LOCALE_COOKIE = "foxora-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "de" || value === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
