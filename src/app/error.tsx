"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[foxora-error]", error);
  }, [error]);

  return (
    <section className="foxora-gradient relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-8 px-6 py-24">
        <Badge variant="coral" className="px-4 py-1.5">
          Unerwarteter Fehler
        </Badge>
        <h1 className="hero-display text-5xl text-balance text-foreground sm:text-7xl">
          Da ist uns
          <br />
          etwas durchgerutscht.
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Foxora konnte die Seite nicht laden. Wir loggen den Vorfall und du
          kannst es direkt erneut versuchen.
        </p>
        {error.digest ? (
          <code className="rounded-lg bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
            ref: {error.digest}
          </code>
        ) : null}
        <Button size="lg" className="gap-2" onClick={() => reset()}>
          <RefreshCw className="size-4" />
          Erneut versuchen
        </Button>
      </div>
    </section>
  );
}
