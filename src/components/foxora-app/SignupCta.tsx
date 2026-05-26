"use client";

import { useState } from "react";

export function SignupCta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      id="signup"
      className="px-5 py-[80px] text-center sm:px-10 sm:py-[120px]"
      style={{
        background: "linear-gradient(135deg, var(--fxa-orange), #E65500)",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-4 text-[34px] font-black leading-[1] tracking-[-1px] text-white sm:text-[56px]">
          Sichere dir deinen Beta-Platz.
        </h2>
        <p className="mb-8 text-[17px] opacity-95 sm:text-[20px]">
          Kostenlos. Keine Kreditkarte nötig. Sammle ab dem ersten Einkauf.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              setDone(true);
              setEmail("");
            }
          }}
          className="mx-auto flex max-w-[480px] flex-col gap-2 rounded-[20px] p-2 sm:flex-row sm:rounded-full"
          style={{ background: "var(--fxa-dark)" }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            className="flex-1 border-none bg-transparent px-5 py-3.5 text-center text-[15px] text-[var(--fxa-text)] outline-none placeholder:text-[var(--fxa-text-muted)] sm:text-left"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-full border-none bg-[var(--fxa-orange)] px-6 py-3.5 font-bold text-white transition hover:bg-[var(--fxa-orange-bright)]"
          >
            Beta-Zugang holen →
          </button>
        </form>
        {done ? (
          <div className="mt-4 font-semibold text-white">
            ✓ Geschafft! Du bist auf der Liste. Wir melden uns bald.
          </div>
        ) : null}
        <div className="mt-4 text-[13px] opacity-85">
          14 Tage Widerrufsrecht · Jederzeit kündbar · DSGVO-konform
        </div>
      </div>
    </section>
  );
}
