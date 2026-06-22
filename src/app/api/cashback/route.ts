import { z } from "zod";
import { FOXORA_MODEL, getAnthropic } from "@/lib/anthropic";
import { getCashbackExplainerPrompt } from "@/lib/prompts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const InputSchema = z.object({
  activationFee: z.number().positive().max(100000),
  monthlySpend: z.number().min(0).max(1000000),
  cashbackRatePct: z.number().min(0).max(50),
  capPct: z.number().min(0).max(500),
});

const RowSchema = z.object({
  month: z.number().int().nonnegative(),
  earned: z.number(),
  totalEarned: z.number(),
  pctOfCap: z.number(),
  reached: z.boolean(),
});

const BodySchema = z.object({
  input: InputSchema,
  schedule: z.array(RowSchema).max(240),
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

  const { input, schedule, locale } = parsed.data;

  const cap = (input.activationFee * input.capPct) / 100;
  const last = schedule.length > 0 ? schedule[schedule.length - 1] : null;
  const monthsToCap = schedule.find((r) => r.reached)?.month ?? null;

  const userPrompt = [
    locale === "en"
      ? `Here is the simulated cashback scenario the user just configured:`
      : `Hier ist das Cashback-Szenario, das der Nutzer gerade simuliert hat:`,
    ``,
    `- ${locale === "en" ? "Activation fee" : "Aktivierung"}: €${input.activationFee.toFixed(2)}`,
    `- ${locale === "en" ? "Monthly partner spend" : "Monatlicher Partner-Spend"}: €${input.monthlySpend.toFixed(2)}`,
    `- ${locale === "en" ? "Cashback rate" : "Cashback-Rate"}: ${input.cashbackRatePct}%`,
    `- ${locale === "en" ? "Cap" : "Cap"}: ${input.capPct}% (= €${cap.toFixed(2)})`,
    `- ${locale === "en" ? "Months to cap" : "Monate bis Cap"}: ${monthsToCap ?? "∞"}`,
    `- ${locale === "en" ? "Final cumulative cashback" : "Finales kumuliertes Cashback"}: €${(last?.totalEarned ?? 0).toFixed(2)}`,
  ].join("\n");

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropic = getAnthropic();
        const ms = anthropic.messages.stream({
          model: FOXORA_MODEL,
          max_tokens: 800,
          system: [
            {
              type: "text",
              text: getCashbackExplainerPrompt(locale),
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: [{ role: "user", content: userPrompt }],
        });
        ms.on("text", (delta) => {
          controller.enqueue(encoder.encode(delta));
        });
        await ms.finalMessage();
        controller.close();
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Internal error";
        controller.enqueue(encoder.encode(`\n[${msg}]`));
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
