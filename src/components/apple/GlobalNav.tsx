const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

export function GlobalNav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.21_0_0)]/85 text-[oklch(0.92_0_0)]">
      <div className="mx-auto flex h-11 max-w-5xl items-center justify-between px-4 text-[12px]">
        <a href="/apple" aria-label="Apple" className="opacity-90 hover:opacity-100">
          <svg viewBox="0 0 14 17" className="h-4 w-4" fill="currentColor">
            <path d="M11.6 9c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.7 0-1.7-.7-2.7-.7C2.8 4.4 1 6 1 9.3c0 1 .2 2 .5 2.9.5 1.4 2.1 4.7 3.7 4.6.8 0 1.4-.6 2.5-.6 1 0 1.6.6 2.5.6 1.7 0 3.1-3 3.6-4.4-2.7-1-2.7-3.4-2.2-3.4ZM8.6 3.4c.7-.9 1.2-2 1-3-1 0-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.8 1.1 0 2.2-.5 2.7-1.2Z" />
          </svg>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="opacity-80 transition hover:opacity-100">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="opacity-80 hover:opacity-100">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button aria-label="Bag" className="opacity-80 hover:opacity-100">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 7h12l-1.5 11a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8Z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
