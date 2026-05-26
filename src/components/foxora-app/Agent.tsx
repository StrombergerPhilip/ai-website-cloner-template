"use client";

import { FadeIn } from "./FadeIn";
import { PhoneFrame } from "./PhoneFrame";

const features = [
  {
    icon: "💬",
    title: "Sofort-Antworten",
    desc: "Keine Wartezeit. Der Foxora-Agent beantwortet deine Fragen in Sekunden.",
  },
  {
    icon: "🎯",
    title: "Smarte Empfehlungen",
    desc: "Wo bekommst du gerade die meisten Sats? Der Agent weiß es.",
  },
  {
    icon: "⚙️",
    title: "Automatisierte Aktionen",
    desc: "Auszahlungen, Plan-Wechsel, Karten-Verwaltung — alles per Chat.",
  },
  {
    icon: "🔐",
    title: "Sicher & vertraulich",
    desc: "Verschlüsselt. DSGVO-konform. Deine Daten bleiben bei dir.",
  },
];

const chatMsgs: { from: "bot" | "user"; html: string; maxW: string }[] = [
  {
    from: "bot",
    html: "Hi Alex! 👋 Ich bin Foxora AI. Wie kann ich dir helfen?",
    maxW: "90%",
  },
  {
    from: "user",
    html: "Wie viele Sats habe ich diese Woche gesammelt?",
    maxW: "80%",
  },
  {
    from: "bot",
    html: 'Diese Woche hast du <strong class="text-[var(--fxa-orange)]">8.420 Sats</strong> gesammelt — dein bester Wert seit 3 Wochen! 🚀 Größter Posten: <strong class="text-[var(--fxa-orange)]">Nike</strong> mit 820 Sats.',
    maxW: "90%",
  },
  { from: "user", html: "Wann ist die nächste Auszahlung?", maxW: "75%" },
  {
    from: "bot",
    html: "Freitag um 14:00 Uhr auf deine Foxora-Wallet. Soll ich umstellen auf täglich (mit Foxora Pro)?",
    maxW: "85%",
  },
];

export function Agent() {
  const openChat = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("foxora:open-chat"));
    }
  };
  return (
    <FadeIn
      as="section"
      className="px-5 py-[70px] sm:px-10 sm:py-[100px]"
    >
      <div
        id="agent"
        className="mx-auto max-w-[1280px]"
        style={{
          background:
            "linear-gradient(180deg, #1A1410, var(--fxa-dark))",
        }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold text-[var(--fxa-orange)]"
              style={{
                background: "rgba(255,107,26,0.15)",
                borderColor: "rgba(255,107,26,0.3)",
              }}
            >
              🤖 KI-gestützt · 24/7 verfügbar
            </div>
            <h2 className="mt-4 text-[34px] font-black leading-[1.1] tracking-[-1.5px] sm:text-[56px]">
              Dein persönlicher Rewards-Assistent.
            </h2>
            <p className="mt-4 max-w-[600px] text-[17px] text-[var(--fxa-text-muted)] sm:text-[20px]">
              Foxora AI hilft dir, das Maximum aus jedem Einkauf zu holen.
              Frag alles — rund um die Uhr, direkt in der App.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-[22px]"
                    style={{ background: "rgba(255,107,26,0.15)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-[17px] font-extrabold">
                      {f.title}
                    </h4>
                    <p className="text-[14px] text-[var(--fxa-text-muted)]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={openChat}
                className="cursor-pointer rounded-full border-none bg-[var(--fxa-orange)] px-8 py-[18px] text-[16px] font-semibold text-white transition hover:bg-[var(--fxa-orange-bright)] hover:-translate-y-px"
              >
                💬 Assistent ausprobieren
              </button>
            </div>
          </div>

          <PhoneFrame>
            <div
              className="-mx-5 -mt-6 mb-4 flex items-center gap-3 px-5 py-[18px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--fxa-orange), #E65500)",
              }}
            >
              <div
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full text-[22px]"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                🦊
              </div>
              <div>
                <h4 className="flex items-center gap-1.5 text-[15px] font-extrabold">
                  Foxora AI{" "}
                  <span
                    className="rounded px-1.5 py-0.5 text-[9px] tracking-[0.5px]"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    DEMO
                  </span>
                </h4>
                <p className="flex items-center gap-1.5 text-[12px] opacity-90 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-[#34D399] before:content-['']">
                  Online · antwortet sofort
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {chatMsgs.map((m, i) => (
                <div
                  key={i}
                  className={`rounded-2xl px-4 py-3 text-[14px] leading-[1.5] ${
                    m.from === "bot"
                      ? "self-start rounded-bl-[4px]"
                      : "self-end rounded-br-[4px] bg-[var(--fxa-orange)] text-white"
                  }`}
                  style={
                    m.from === "bot"
                      ? { background: "#2A2620", color: "var(--fxa-text)" }
                      : undefined
                  }
                  dangerouslySetInnerHTML={{ __html: m.html }}
                />
              ))}
            </div>
          </PhoneFrame>
        </div>
      </div>
    </FadeIn>
  );
}
