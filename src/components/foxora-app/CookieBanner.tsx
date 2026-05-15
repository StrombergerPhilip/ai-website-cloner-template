"use client";

import { useEffect, useState } from "react";

const KEY = "foxora_cookies";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (typeof window !== "undefined" && !localStorage.getItem(KEY)) {
        setShow(true);
      }
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  const dismiss = () => {
    localStorage.setItem(KEY, "1");
    setShow(false);
  };

  return (
    <div
      className="fixed inset-x-5 bottom-5 z-[998] mx-auto max-w-[520px] rounded-[20px] border p-6"
      style={{
        background: "var(--fxa-card)",
        borderColor: "var(--fxa-orange)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
        animation: "fxa-slide-up 0.4s",
      }}
    >
      <h4 className="mb-2 text-[16px] font-extrabold">🍪 Cookies & Datenschutz</h4>
      <p className="mb-4 text-[13px] text-[var(--fxa-text-muted)]">
        Wir nutzen notwendige Cookies, damit die Seite funktioniert, und
        optionale Cookies, um sie zu verbessern. Du kannst jederzeit anpassen.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={dismiss}
          className="cursor-pointer rounded-full border-none bg-[var(--fxa-orange)] px-4 py-2.5 text-[13px] font-semibold text-white"
        >
          Alle akzeptieren
        </button>
        <button
          type="button"
          onClick={dismiss}
          className="cursor-pointer rounded-full border-none px-4 py-2.5 text-[13px] font-semibold text-[var(--fxa-text)]"
          style={{ background: "var(--fxa-border)" }}
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
