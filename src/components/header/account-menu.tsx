"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";
import { useHoverFlyout } from "@/hooks/use-hover-flyout";

const YOUR_LISTS = [
  "Create a List",
  "Find a List or Registry",
  "Lorem Wishlist",
  "Ipsum Saved Items",
] as const;

const YOUR_ACCOUNT = [
  "Account",
  "Orders",
  "Recommendations",
  "Browsing History",
  "Watchlist",
  "Video Purchases & Rentals",
  "Memberships & Subscriptions",
  "Lorem Wallet",
] as const;

export function AccountMenu() {
  const { open, triggerProps, panelProps, rootRef } = useHoverFlyout();

  return (
    <div ref={rootRef} className="relative hidden md:block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex h-[50px] shrink-0 flex-col items-start justify-center rounded border px-2 leading-tight ${
          open ? "border-white" : "border-transparent hover:border-white"
        }`}
        {...triggerProps}
      >
        <span className="text-[12px]">Hello, sign in</span>
        <span className="text-[14px] font-bold">
          Account &amp; Lists <ChevronDownIcon className="ml-0.5 inline size-3" />
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-px w-[480px] rounded-sm border border-[oklch(0.85_0_0)] bg-white text-[oklch(0.18_0_0)] shadow-[0_4px_16px_oklch(0_0_0_/_15%)]"
          {...panelProps}
        >
          <div
            aria-hidden="true"
            className="absolute -top-2 right-12 size-3 rotate-45 border-l border-t border-[oklch(0.85_0_0)] bg-white"
          />
          <div className="flex flex-col items-center gap-2 border-b border-[oklch(0.92_0_0)] px-4 py-4">
            <button
              type="button"
              className="h-[31px] rounded-full bg-[var(--cta)] px-6 text-[13px] font-medium text-[var(--cta-foreground)] shadow-sm hover:bg-[var(--cta-hover)]"
            >
              Sign in
            </button>
            <p className="text-[13px]">
              New customer?{" "}
              <Link href="#" className="text-[var(--link)] hover:underline">
                Start here.
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 p-4">
            <section>
              <h3 className="mb-2 text-[14px] font-bold">Your Lists</h3>
              <ul className="space-y-1.5">
                {YOUR_LISTS.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[13px] text-[oklch(0.28_0_0)] hover:text-[var(--cta-hover)] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="mb-2 text-[14px] font-bold">Your Account</h3>
              <ul className="space-y-1.5">
                {YOUR_ACCOUNT.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-[13px] text-[oklch(0.28_0_0)] hover:text-[var(--cta-hover)] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
