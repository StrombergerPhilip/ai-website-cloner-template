import "server-only";
import { Resend } from "resend";

let cached: Resend | null = null;

export function getResend(): Resend | null {
  if (cached) return cached;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  cached = new Resend(apiKey);
  return cached;
}

export const RESEND_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Foxora <onboarding@resend.dev>";

export const RESEND_TO = process.env.RESEND_TO_EMAIL ?? "hello@foxora.io";
