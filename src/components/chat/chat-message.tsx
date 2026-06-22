"use client";

import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageT } from "@/types/foxora";

export function ChatMessageBubble({
  message,
  labelUser,
  labelAssistant,
}: {
  message: ChatMessageT;
  labelUser: string;
  labelAssistant: string;
}) {
  const isUser = message.role === "user";
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1",
        isUser ? "items-end" : "items-start",
      )}
    >
      <span className="px-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {isUser ? labelUser : labelAssistant}
      </span>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground",
        )}
      >
        <p className="whitespace-pre-wrap text-pretty">{message.content}</p>
      </div>
    </div>
  );
}
