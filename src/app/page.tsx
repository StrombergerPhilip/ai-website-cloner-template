import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Website Clones
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Choose a clone
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Visual reconstructions built from a single screenshot. Pixel-perfect
          versions require local browser-MCP extraction.
        </p>
      </div>
      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        <Link
          href="/parivie"
          className="group rounded-2xl border border-border bg-[oklch(0.94_0.04_350)] p-8 text-left transition hover:border-[oklch(0.61_0.235_350)] hover:shadow-md"
        >
          <p className="font-serif text-2xl tracking-tight text-[oklch(0.16_0.04_280)]">
            PARÍVIE
          </p>
          <p className="mt-2 text-sm text-[oklch(0.45_0.04_280)]">
            Paris Hilton skincare — pink, serif, soft.
          </p>
        </Link>
        <Link
          href="/apple"
          className="group rounded-2xl border border-border bg-[oklch(0.97_0_0)] p-8 text-left transition hover:border-[oklch(0.55_0.15_252)] hover:shadow-md"
        >
          <p className="text-2xl font-semibold tracking-tight text-[oklch(0.21_0_0)]">
            Apple
          </p>
          <p className="mt-2 text-sm text-[oklch(0.55_0_0)]">
            apple.com/at — product tile grid.
          </p>
        </Link>
      </div>
    </main>
  );
}
