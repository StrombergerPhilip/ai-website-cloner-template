import Link from "next/link";
import { AccountMenu } from "@/components/header/account-menu";
import { CategoryDrawer } from "@/components/header/category-drawer";
import { LanguageMenu } from "@/components/header/language-menu";
import { SearchBar } from "@/components/header/search-bar";
import {
  BrandMark,
  CartIcon,
  MapPinIcon,
} from "@/components/icons";

const SUBNAV_ITEMS = [
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
  "Releases",
  "Browsing History",
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[var(--nav)] text-[var(--nav-foreground)]">
        <div className="mx-auto flex h-[60px] max-w-[1500px] items-center gap-2 px-2 text-[14px]">
          <Link
            href="/"
            aria-label="Shop home"
            className="flex h-[50px] shrink-0 items-center rounded border border-transparent px-2 hover:border-white"
          >
            <BrandMark className="text-[22px]" />
          </Link>

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

          <SearchBar />

          <LanguageMenu />
          <AccountMenu />

          <Link
            href="#"
            className="hidden h-[50px] shrink-0 flex-col items-start justify-center rounded border border-transparent px-2 leading-tight hover:border-white lg:flex"
          >
            <span className="text-[12px]">Returns</span>
            <span className="text-[14px] font-bold">&amp; Orders</span>
          </Link>

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
          <CategoryDrawer />
          {SUBNAV_ITEMS.map((label) => (
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
