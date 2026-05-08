export function ExclusiveKit() {
  return (
    <section className="bg-[oklch(0.94_0.04_350)] px-6 pb-20 sm:pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white px-6 py-14 text-center shadow-sm sm:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.61_0.235_350)]">
          Limited release
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-[oklch(0.16_0.04_280)] sm:text-4xl">
          Parívie Exclusive Kit
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[oklch(0.45_0.04_280)]">
          The Ultimate 4-Piece Kit. Full-size cleanser, essence, serum, and
          night crème — together for the first time.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row sm:gap-0">
          <input
            type="email"
            placeholder="Email address"
            className="h-11 flex-1 rounded-l-md border border-r-0 border-[oklch(0.88_0.04_350)] bg-white px-4 text-sm placeholder:text-[oklch(0.45_0.04_280)]/60 focus:outline-none focus:ring-2 focus:ring-[oklch(0.61_0.235_350)] sm:rounded-l-md sm:rounded-r-none"
          />
          <button
            type="submit"
            className="h-11 rounded-r-md bg-[oklch(0.61_0.235_350)] px-6 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[oklch(0.55_0.235_350)]"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}
