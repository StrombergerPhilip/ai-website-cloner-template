"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { ChatMessageBubble } from "@/components/chat/chat-message";
import { useI18n } from "@/lib/i18n/provider";
import type { ChatMessage } from "@/types/foxora";

function randomId(): string {
  return Math.random().toString(36).slice(2);
}

export function ChatDrawer({
  trigger,
}: {
  trigger?: React.ReactElement;
}) {
  const { locale, t, dict } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, streaming]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming) return;

      const userMsg: ChatMessage = {
        id: randomId(),
        role: "user",
        content: trimmed,
      };
      const assistantMsg: ChatMessage = {
        id: randomId(),
        role: "assistant",
        content: "",
      };
      const nextHistory = [...messages, userMsg];
      setMessages([...nextHistory, assistantMsg]);
      setInput("");
      setStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const resp = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: nextHistory.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            locale,
          }),
          signal: controller.signal,
        });

        if (!resp.ok || !resp.body) {
          throw new Error(`HTTP ${resp.status}`);
        }

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = [...prev];
            const last = copy[copy.length - 1];
            if (last && last.role === "assistant") {
              copy[copy.length - 1] = { ...last, content: acc };
            }
            return copy;
          });
        }
      } catch (err) {
        const isAbort = err instanceof DOMException && err.name === "AbortError";
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last && last.role === "assistant" && last.content === "") {
            copy[copy.length - 1] = {
              ...last,
              content: isAbort
                ? "—"
                : locale === "en"
                  ? "Sorry, something went wrong. Please try again."
                  : "Entschuldige, da ist etwas schiefgelaufen. Bitte versuche es erneut.",
            };
          }
          return copy;
        });
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [locale, messages, streaming],
  );

  const starters = dict.chat.starters;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          trigger ?? (
            <Button variant="default" size="default" className="gap-2">
              <Sparkles className="size-4" />
              {t("nav.talkToFoxora")}
            </Button>
          )
        }
      />
      <SheetContent side="right" className="flex h-full flex-col">
        <SheetHeader>
          <SheetTitle>{t("chat.title")}</SheetTitle>
          <SheetDescription>{t("chat.subtitle")}</SheetDescription>
        </SheetHeader>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-6 py-4"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                {locale === "en" ? "Starter questions" : "Start-Fragen"}
              </p>
              <div className="flex flex-col gap-2">
                {starters.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-left text-sm transition-colors hover:border-accent hover:bg-accent/5"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((m) => (
                <ChatMessageBubble
                  key={m.id}
                  message={m}
                  labelUser={t("common.you")}
                  labelAssistant={t("common.foxora")}
                />
              ))}
              {streaming &&
              messages[messages.length - 1]?.content === "" ? (
                <p className="text-xs italic text-muted-foreground">
                  {t("common.thinking")}
                </p>
              ) : null}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
          className="flex flex-col gap-2 border-t border-border px-6 py-4"
        >
          <div className="flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send(input);
                }
              }}
              rows={1}
              placeholder={t("common.askPlaceholder")}
              className="min-h-11 resize-none"
              disabled={streaming}
            />
            <Button
              type="submit"
              size="icon-lg"
              disabled={streaming || !input.trim()}
              aria-label={t("common.send")}
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
          <p className="text-[11px] text-muted-foreground">
            {t("chat.disclaimer")}
          </p>
        </form>
      </SheetContent>
    </Sheet>
  );
}
