"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  topic: z.enum(["general", "partner", "press", "investor"]),
  message: z.string().min(8).max(4000),
});

export interface ContactState {
  ok: boolean;
  error?: string;
}

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
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  // Stub: log server-side. Replace with Resend / DB call when ready.
  console.log("[foxora-contact]", parsed.data);

  return { ok: true };
}
