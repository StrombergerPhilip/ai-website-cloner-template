"use client";

import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initial: T,
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValue(JSON.parse(raw) as T);
      }
    } catch {
      // ignore
    }
  }, [key]);

  const setAndPersist = useCallback(
    (next: T) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // ignore
      }
    },
    [key],
  );

  return [value, setAndPersist];
}
