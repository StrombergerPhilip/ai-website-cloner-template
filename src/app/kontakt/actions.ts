"use server";

import { z } from "zod";
import { getResend, RESEND_FROM, RESEND_TO } from "@/lib/resend";

const FormSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  topic: z.enum(["general", "partner", "press", "investor"]),
  message: z.string().min(8).max(4000),
});

type ContactInput = z.infer<typeof FormSchema>;

export interface ContactState {
  ok: boolean;
  error?: string;
}

const TOPIC_LABEL: Record<ContactInput["topic"], string> = {
  general: "Allgemein",
  partner: "Partner werden",
  press: "Presse",
  investor: "Investor",
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Invalid input",
    };
  }

  const data = parsed.data;
  const resend = getResend();

  // Dev fallback: no Resend key → log and succeed so the form is testable.
  if (!resend) {
    console.log("[foxora-contact] (no RESEND_API_KEY — logging only)", data);
    return { ok: true };
  }

  try {
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: [RESEND_TO],
      replyTo: data.email,
      subject: `[Foxora · ${TOPIC_LABEL[data.topic]}] ${data.name}`,
      text: renderEmail(data),
    });
    if (result.error) {
      console.error("[foxora-contact] resend error", result.error);
      return { ok: false, error: result.error.message };
    }
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Send failed";
    console.error("[foxora-contact] send threw", err);
    return { ok: false, error: msg };
  }
}

function renderEmail(data: ContactInput): string {
  return [
    `Neue Foxora-Anfrage`,
    ``,
    `Name:    ${data.name}`,
    `E-Mail:  ${data.email}`,
    `Thema:   ${TOPIC_LABEL[data.topic]}`,
    ``,
    `Nachricht:`,
    data.message,
  ].join("\n");
}
