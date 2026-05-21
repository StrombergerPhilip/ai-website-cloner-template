import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="foxora-gradient relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-8 px-6 py-24">
        <Badge variant="coral" className="px-4 py-1.5">
          404
        </Badge>
        <h1 className="hero-display text-5xl text-balance text-foreground sm:text-7xl">
          Diese Seite ist
          <br />
          im Cap verschwunden.
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Sieht so aus, als wäre der Link am 100 %-Cashback-Cap angekommen.
          Zurück zur Startseite, dort geht es weiter.
        </p>
        <Button size="lg" className="gap-2" render={<Link href="/" />}>
          <ArrowLeft className="size-4" />
          Zurück zu Foxora
        </Button>
      </div>
    </section>
  );
}
