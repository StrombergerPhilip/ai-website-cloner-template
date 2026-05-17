import "server-only";
import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  FOXORA_LOCALE_COOKIE,
  getDictionary,
  isLocale,
  type Dictionary,
} from "./dictionaries";
import type { Locale } from "@/types/foxora";

export async function getServerLocale(): Promise<Locale> {
  const store = await cookies();
  const raw = store.get(FOXORA_LOCALE_COOKIE)?.value;
  return isLocale(raw) ? raw : DEFAULT_LOCALE;
}

export async function getServerDict(): Promise<{
  locale: Locale;
  dict: Dictionary;
}> {
  const locale = await getServerLocale();
  return { locale, dict: getDictionary(locale) };
}
