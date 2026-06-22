"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  FOXORA_LOCALE_COOKIE,
  dictionaries,
  type Dictionary,
} from "./dictionaries";
import type { Locale } from "@/types/foxora";

interface I18nContextValue {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      try {
        document.cookie = `${FOXORA_LOCALE_COOKIE}=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
        window.localStorage.setItem(FOXORA_LOCALE_COOKIE, next);
      } catch {
        // ignore storage errors (private mode)
      }
      router.refresh();
    },
    [router],
  );

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[locale];
    return {
      locale,
      dict,
      setLocale,
      t: (path: string) => resolvePath(dict, path),
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}

export function useT(): (path: string) => string {
  return useI18n().t;
}

function resolvePath(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur !== null && typeof cur === "object" && part in (cur as object)) {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}

export { DEFAULT_LOCALE };
