import Link from "next/link";
import { BagIcon, BrandMark, SearchIcon } from "@/components/icons";

const NAV_ITEMS = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
  "Product 6",
  "Product 7",
  "Product 8",
  "Support",
] as const;

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 w-full bg-[var(--nav)] text-[var(--nav-foreground)] backdrop-blur-xl backdrop-saturate-180"
    >
      <div className="mx-auto flex h-11 max-w-[1024px] items-center justify-between px-5 text-[12px] font-normal">
        <Link
          href="/"
          aria-label="Brand home"
          className="flex shrink-0 items-center opacity-90 transition-opacity hover:opacity-100"
        >
          <BrandMark className="text-[14px] tracking-[-0.01em]" />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-x-[1.85rem] md:flex">
          {NAV_ITEMS.map((label) => (
            <li key={label}>
              <Link
                href="#"
                className="opacity-80 transition-opacity duration-200 hover:opacity-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-x-5">
          <button
            type="button"
            aria-label="Search"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <SearchIcon className="size-[15px]" />
          </button>
          <button
            type="button"
            aria-label="Bag"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <BagIcon className="size-[15px]" />
          </button>
        </div>
      </div>
    </nav>
  );
}
