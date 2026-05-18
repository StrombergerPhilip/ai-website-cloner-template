import Link from "next/link";
import {
  BrandMark,
  CartIcon,
  ChevronDownIcon,
  GlobeIcon,
  MapPinIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";

const SUBNAV_ITEMS = [
  "All",
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
  "Releases",
  "Browsing History",
] as const;

const DEPARTMENTS = [
  "All Departments",
  "Lorem Category",
  "Ipsum Goods",
  "Dolor Sit",
  "Consectetur",
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[var(--nav)] text-[var(--nav-foreground)]">
        <div className="mx-auto flex h-[60px] max-w-[1500px] items-center gap-2 px-2 text-[14px]">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Shop home"
            className="flex h-[50px] shrink-0 items-center rounded border border-transparent px-2 hover:border-white"
          >
            <BrandMark className="text-[22px]" />
          </Link>

          {/* Deliver-to selector */}
          <Link
            href="#"
            className="hidden h-[50px] shrink-0 items-end rounded border border-transparent px-2 pb-1.5 hover:border-white lg:flex"
          >
            <MapPinIcon className="mr-1 size-[15px]" />
            <span className="flex flex-col leading-tight">
              <span className="text-[12px] text-[oklch(0.82_0_0)]">
                Deliver to
              </span>
              <span className="text-[14px] font-bold">Lorem 10001</span>
            </span>
          </Link>

          {/* Search */}
          <form
            role="search"
            className="flex h-10 flex-1 overflow-hidden rounded-md"
          >
            <button
              type="button"
              className="flex shrink-0 items-center gap-1 bg-[oklch(0.92_0_0)] px-2 text-[12px] text-[oklch(0.28_0_0)] hover:bg-[oklch(0.88_0_0)]"
            >
              <span>{DEPARTMENTS[0]}</span>
              <ChevronDownIcon className="size-3" />
            </button>
            <input
              type="text"
              placeholder="Search Shop"
              aria-label="Search"
              className="min-w-0 flex-1 bg-white px-2 text-[14px] text-[oklch(0.18_0_0)] outline-none"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="flex h-10 w-12 shrink-0 items-center justify-center bg-[var(--cta)] hover:bg-[var(--cta-hover)]"
            >
              <SearchIcon className="size-5 text-[var(--cta-foreground)]" />
            </button>
          </form>

          {/* Language */}
          <Link
            href="#"
            className="hidden h-[50px] shrink-0 items-center gap-1 rounded border border-transparent px-2 text-[14px] font-bold hover:border-white md:flex"
          >
            <GlobeIcon className="size-[18px]" />
            <span>EN</span>
            <ChevronDownIcon className="size-3 opacity-70" />
          </Link>

          {/* Account */}
          <Link
            href="#"
            className="hidden h-[50px] shrink-0 flex-col items-start justify-center rounded border border-transparent px-2 leading-tight hover:border-white md:flex"
          >
            <span className="text-[12px]">Hello, sign in</span>
            <span className="text-[14px] font-bold">
              Account &amp; Lists <ChevronDownIcon className="ml-0.5 inline size-3" />
            </span>
          </Link>

          {/* Returns */}
          <Link
            href="#"
            className="hidden h-[50px] shrink-0 flex-col items-start justify-center rounded border border-transparent px-2 leading-tight hover:border-white lg:flex"
          >
            <span className="text-[12px]">Returns</span>
            <span className="text-[14px] font-bold">&amp; Orders</span>
          </Link>

          {/* Cart */}
          <Link
            href="#"
            aria-label="Cart with 0 items"
            className="flex h-[50px] shrink-0 items-end gap-1 rounded border border-transparent px-2 pb-1 hover:border-white"
          >
            <div className="relative">
              <CartIcon className="size-9" />
              <span className="absolute -top-1 left-5 min-w-[18px] rounded-full bg-[var(--cta)] px-1 text-center text-[13px] font-bold text-[var(--cta-foreground)]">
                0
              </span>
            </div>
            <span className="hidden text-[14px] font-bold sm:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Sub-nav */}
      <div className="bg-[var(--subnav)] text-[var(--nav-foreground)]">
        <div className="mx-auto flex h-[38px] max-w-[1500px] items-center gap-1 overflow-x-auto px-2 text-[14px]">
          <Link
            href="#"
            className="flex shrink-0 items-center gap-1 rounded border border-transparent px-2 py-1 font-bold hover:border-white"
          >
            <MenuIcon className="size-4" />
            <span>{SUBNAV_ITEMS[0]}</span>
          </Link>
          {SUBNAV_ITEMS.slice(1).map((label) => (
            <Link
              key={label}
              href="#"
              className="shrink-0 rounded border border-transparent px-2 py-1 hover:border-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
