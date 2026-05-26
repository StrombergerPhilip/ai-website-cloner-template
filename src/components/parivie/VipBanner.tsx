export function VipBanner() {
  return (
    <section className="bg-[oklch(0.94_0.04_350)] py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="font-serif text-xs italic text-[oklch(0.16_0.04_280)]/70">
          New around here?
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-[oklch(0.16_0.04_280)] sm:text-4xl">
          Join the VIP list
          <br />
          for exclusive updates,
          <br />
          perks, and more.
        </h2>
        <form className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-0">
          <input
            type="email"
            placeholder="Email address"
            className="h-11 flex-1 rounded-l-md border border-r-0 border-[oklch(0.88_0.04_350)] bg-white px-4 text-sm placeholder:text-[oklch(0.45_0.04_280)]/60 focus:outline-none focus:ring-2 focus:ring-[oklch(0.61_0.235_350)] sm:rounded-l-md sm:rounded-r-none"
          />
          <button
            type="submit"
            className="h-11 rounded-r-md bg-[oklch(0.61_0.235_350)] px-6 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[oklch(0.55_0.235_350)]"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
