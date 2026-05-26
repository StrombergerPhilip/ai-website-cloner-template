export function Header() {
  return (
    <header className="border-b border-[oklch(0.88_0.04_350)] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button
          aria-label="Menu"
          className="flex flex-col gap-[5px] p-1 text-[oklch(0.16_0.04_280)]"
        >
          <span className="block h-[1.5px] w-5 bg-current" />
          <span className="block h-[1.5px] w-5 bg-current" />
          <span className="block h-[1.5px] w-5 bg-current" />
        </button>
        <a
          href="/parivie"
          className="font-serif text-2xl tracking-[0.15em] text-[oklch(0.16_0.04_280)]"
        >
          PARÍVIE
        </a>
        <div className="flex items-center gap-4 text-[oklch(0.16_0.04_280)]">
          <button aria-label="Search" className="p-1">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button aria-label="Account" className="p-1">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </button>
          <button aria-label="Cart" className="p-1">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 7h12l-1.5 11a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8Z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
