"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "bot" | "user"; html: string };

const responses: Record<string, string> = {
  "wie funktioniert foxora":
    "Ganz einfach: 1) Registrieren mit E-Mail oder Apple/Google · 2) Karte verbinden (Visa/Mastercard) · 3) Normal einkaufen — Sats sammeln sich automatisch! ⚡ Auszahlung jederzeit auf Wallet deiner Wahl.",
  "welcher plan":
    'Das hängt von dir ab! 🎯<br><br><strong class="text-[var(--fxa-orange)]">Free</strong> — Wenn du testen möchtest (1% Cashback)<br><strong class="text-[var(--fxa-orange)]">Foxora+ (9€)</strong> — Für regelmäßige Käufer (2-3% + wöchentliche Auszahlung)<br><strong class="text-[var(--fxa-orange)]">Foxora Pro (29€)</strong> — Max Rewards (bis 5% + Visa Card)<br><br>Probier mal unseren Cashback-Rechner aus! 🧮',
  investment:
    'Nein! 🚫 Foxora ist <strong class="text-[var(--fxa-orange)]">kein Investment</strong>. Es ist ein Rewards-Programm — wie Payback oder Amex Rewards, nur eben in Bitcoin. Du investierst nichts, du sammelst Cashback.',
  sicher:
    'Sehr sicher! 🔐 Deine Bitcoin werden bei <strong class="text-[var(--fxa-orange)]">lizenzierten Krypto-Verwahrern</strong> (BaFin/MiCAR-konform) gelagert. Foxora selbst hält keine Kundengelder. DSGVO-konform.',
  bitcoin:
    "Foxora konvertiert deinen Cashback automatisch in Sats. 1 Bitcoin = 100.000.000 Sats. Du brauchst keine Krypto-Kenntnisse — wir kümmern uns um alles. 🦊",
  kosten:
    '<strong class="text-[var(--fxa-orange)]">Free:</strong> 0€ · <strong class="text-[var(--fxa-orange)]">Foxora+:</strong> 9€/Monat · <strong class="text-[var(--fxa-orange)]">Foxora Pro:</strong> 29€/Monat<br><br>Mit Jahresabo bis zu 20% sparen. Jederzeit kündbar. 14 Tage Widerrufsrecht. 👌',
  auszahlung:
    "Je nach Plan: Free = monatlich · Foxora+ = wöchentlich · Foxora Pro = täglich. Auszahlung auf Foxora-Wallet, externe BTC-Wallet oder Visa-Balance. 💸",
  partner:
    "Tausende Partner: Nike, Zalando, Shell, REWE, Amazon, Booking, MediaMarkt, IKEA, Lufthansa, Apple, H&M und 1000+ mehr! 🛍️",
  steuer:
    "Bitcoin-Cashback kann steuerpflichtig sein. Foxora stellt jährliche Übersichten bereit. Für Beratung empfehlen wir einen Steuerberater. 📊",
  karte:
    "Du kannst Visa und Mastercard verbinden. 💳 Mit Foxora Pro bekommst du zusätzlich deine eigene Foxora Visa Card!",
  kündigen:
    "Jederzeit kündbar — keine Mindestlaufzeit. In der App unter Einstellungen → Abo verwalten. 14 Tage Widerrufsrecht. ✓",
};

const defaultResp =
  'Gute Frage! Ich kann helfen bei: <strong class="text-[var(--fxa-orange)]">Funktionsweise, Pläne, Sicherheit, Auszahlungen, Partner</strong> oder <strong class="text-[var(--fxa-orange)]">Karten</strong>. Was interessiert dich?';

function getResponse(input: string): string {
  const l = input.toLowerCase();
  for (const k of Object.keys(responses)) {
    if (l.includes(k)) return responses[k];
  }
  if (l.includes("hi") || l.includes("hallo") || l.includes("hey"))
    return "Hallo! 👋 Was möchtest du über Foxora wissen?";
  if (l.includes("danke")) return "Gern geschehen! 🦊";
  if (l.includes("preis") || l.includes("teuer")) return responses.kosten;
  if (l.includes("plan") || l.includes("abo") || l.includes("membership"))
    return responses["welcher plan"];
  if (l.includes("btc") || l.includes("sats")) return responses.bitcoin;
  if (l.includes("rechner") || l.includes("calc"))
    return 'Klar! Scroll zum <strong class="text-[var(--fxa-orange)]">Cashback-Rechner</strong> oben auf der Seite — dort kannst du live deine Rewards berechnen. 🧮';
  return defaultResp;
}

const suggestions = [
  "Wie funktioniert Foxora?",
  "Welcher Plan passt zu mir?",
  "Ist das ein Investment?",
  "Wie sicher sind meine Bitcoin?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      html: 'Hi! 👋 Ich bin <strong class="text-[var(--fxa-orange)]">Foxora AI</strong>, dein persönlicher Rewards-Assistent. Wie kann ich dir heute helfen?',
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hideSuggestions, setHideSuggestions] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("foxora:open-chat", handler);
    return () => window.removeEventListener("foxora:open-chat", handler);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", html: t }]);
    setInput("");
    setHideSuggestions(true);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", html: getResponse(t) }]);
    }, 1200);
  };

  return (
    <>
      {/* Bubble */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[999] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-none text-white transition hover:scale-105 sm:bottom-7 sm:right-7"
        style={{
          background: "linear-gradient(135deg, var(--fxa-orange), #E65500)",
          boxShadow: "0 12px 32px rgba(255,107,26,0.5)",
          animation: "fxa-pulse 2.5s infinite",
        }}
        aria-label="Chat öffnen"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 1 4.3L2 22l5.7-1c1.3.64 2.76 1 4.3 1 5.52 0 10-4.48 10-10S17.52 2 12 2zm-3 9h2v2H9v-2zm4 0h2v2h-2v-2z" />
        </svg>
        <span
          className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-[3px]"
          style={{ background: "var(--fxa-green)", borderColor: "var(--fxa-dark)" }}
        />
      </button>

      {/* Window */}
      {open ? (
        <div
          className="fixed bottom-[100px] right-4 z-[999] flex w-[calc(100vw-32px)] max-w-[380px] flex-col overflow-hidden rounded-3xl border sm:bottom-[110px] sm:right-7"
          style={{
            height: "min(580px, calc(100vh - 140px))",
            background: "var(--fxa-card)",
            borderColor: "var(--fxa-border)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
            animation: "fxa-slide-up 0.3s ease-out",
          }}
        >
          <div
            className="flex items-center gap-3 px-5 py-[18px]"
            style={{ background: "linear-gradient(135deg, var(--fxa-orange), #E65500)" }}
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
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-auto cursor-pointer border-none bg-transparent text-[24px] text-white opacity-80 hover:opacity-100"
              aria-label="Schließen"
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-3 overflow-y-auto p-5"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-[1.5] ${
                  m.from === "bot"
                    ? "self-start rounded-bl-[4px] text-[var(--fxa-text)]"
                    : "self-end rounded-br-[4px] bg-[var(--fxa-orange)] text-white"
                }`}
                style={
                  m.from === "bot" ? { background: "#2A2620" } : undefined
                }
                dangerouslySetInnerHTML={{ __html: m.html }}
              />
            ))}
            {typing ? (
              <div
                className="flex max-w-[85%] gap-1 self-start rounded-2xl rounded-bl-[4px] px-4 py-3.5"
                style={{ background: "#2A2620" }}
              >
                {[0, 0.2, 0.4].map((d) => (
                  <span
                    key={d}
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "var(--fxa-text-muted)",
                      animation: `fxa-typing 1.4s infinite ${d}s`,
                    }}
                  />
                ))}
              </div>
            ) : null}
          </div>

          {!hideSuggestions ? (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="cursor-pointer rounded-full border px-3.5 py-2 text-[12px] font-semibold text-[var(--fxa-orange)]"
                  style={{
                    background: "rgba(255,107,26,0.1)",
                    borderColor: "rgba(255,107,26,0.3)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : null}

          <div
            className="flex gap-2.5 border-t p-3.5"
            style={{ borderColor: "var(--fxa-border)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send(input);
              }}
              placeholder="Frag mich etwas..."
              className="flex-1 rounded-full border bg-[var(--fxa-dark)] px-4 py-3 text-[14px] text-[var(--fxa-text)] outline-none placeholder:text-[var(--fxa-text-muted)] focus:border-[var(--fxa-orange)]"
              style={{ borderColor: "var(--fxa-border)" }}
            />
            <button
              type="button"
              onClick={() => send(input)}
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full border-none bg-[var(--fxa-orange)] text-white hover:bg-[var(--fxa-orange-bright)]"
              aria-label="Senden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          <div className="border-t px-5 py-2 text-center text-[11px] text-[var(--fxa-text-muted)]" style={{ borderColor: "var(--fxa-border)" }}>
            Demo-Modus · Beispieldaten · Keine echten Account-Infos
          </div>
        </div>
      ) : null}
    </>
  );
}
