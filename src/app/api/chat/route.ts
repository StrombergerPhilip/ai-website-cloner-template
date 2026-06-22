import { z } from "zod";
import { FOXORA_MODEL, getAnthropic } from "@/lib/anthropic";
import { getChatSystemPrompt } from "@/lib/prompts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(8000),
      }),
    )
    .min(1)
    .max(40),
  locale: z.enum(["de", "en"]).default("de"),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return new Response("Bad request", { status: 400 });
  }

  const { messages, locale } = parsed.data;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropic = getAnthropic();
        const messageStream = anthropic.messages.stream({
          model: FOXORA_MODEL,
          max_tokens: 1024,
          system: [
            {
              type: "text",
              text: getChatSystemPrompt(locale),
              cache_control: { type: "ephemeral" },
            },
          ],
          messages,
        });

        messageStream.on("text", (delta) => {
          controller.enqueue(encoder.encode(delta));
        });

        await messageStream.finalMessage();
        controller.close();
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Internal error";
        controller.enqueue(
          encoder.encode(
            locale === "en"
              ? `\n\n[Foxora error: ${msg}]`
              : `\n\n[Foxora Fehler: ${msg}]`,
          ),
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
