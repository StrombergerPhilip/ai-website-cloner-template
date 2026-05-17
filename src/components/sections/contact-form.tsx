"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact, type ContactState } from "@/app/kontakt/actions";
import { useI18n } from "@/lib/i18n/provider";

const INITIAL: ContactState = { ok: false };

export function ContactForm() {
  const { dict } = useI18n();
  const f = dict.kontakt.form;
  const [state, action] = useActionState(submitContact, INITIAL);

  return (
    <form
      action={action}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-apple sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">{f.name}</Label>
          <Input id="name" name="name" required minLength={2} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">{f.email}</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="topic">{f.topic}</Label>
        <select
          id="topic"
          name="topic"
          defaultValue="general"
          className="flex h-11 w-full rounded-xl border border-border bg-background px-4 text-base shadow-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          <option value="general">{f.topics.general}</option>
          <option value="partner">{f.topics.partner}</option>
          <option value="press">{f.topics.press}</option>
          <option value="investor">{f.topics.investor}</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">{f.message}</Label>
        <Textarea id="message" name="message" required minLength={8} rows={6} />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton labels={{ submit: f.submit, sending: f.sending }} />
        {state.ok ? (
          <p className="text-sm text-accent" role="status">
            {f.success}
          </p>
        ) : state.error ? (
          <p className="text-sm text-destructive" role="alert">
            {f.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function SubmitButton({
  labels,
}: {
  labels: { submit: string; sending: string };
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? labels.sending : labels.submit}
    </Button>
  );
}
