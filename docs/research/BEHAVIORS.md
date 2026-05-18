# Behaviors — amazon.com (above-the-fold clone)

## Caveat

**No browser automation was used.** Behaviors below are what the clone implements, not what was extracted from the live site. The skill's mandatory interaction sweep (scroll, click, hover, responsive) was skipped because Chrome MCP was not attached.

## Implemented behaviors

### Header (top bar + sub-nav)
- **Hover on clusters:** every clickable cluster (logo, location, language, account, returns, cart, sub-nav links) gains a 1px white border on hover. Amazon's signature visual cue. No transition timing — instant border swap.
- **Sticky:** `position: sticky; top: 0` keeps both rows pinned as the page scrolls.
- **Search button hover:** background steps from `--cta` (warm yellow) to `--cta-hover` (darker amber).
- **Responsive collapse:** at narrow widths the deliver-to selector, language picker, account dropdown, and returns link drop out progressively via `hidden md:flex` / `hidden lg:flex` so the search bar always stays visible.
- **Sub-nav overflow:** horizontal scroll (`overflow-x-auto`) on narrow viewports — links remain reachable.

### Interactive header clusters (client components in `src/components/header/`)
- **Language menu** (`language-menu.tsx`): hover/focus on the globe button opens a 280px flyout with 7 language radio options and a country/region switch link. Pointer-triangle ornament at top-right. ~80ms open delay, ~160ms close delay so the cursor can travel from trigger to panel. Escape and click-outside both close it.
- **Account menu** (`account-menu.tsx`): hover/focus on the Account & Lists button opens a 480px flyout with a top "Sign in" CTA + "New customer? Start here." link, then a two-column grid (Your Lists, Your Account) with ~12 nested links. Same hover/focus/escape/click-outside lifecycle as the language menu.
- **Category drawer** (`category-drawer.tsx`): clicking the "All" hamburger in the sub-nav opens a left-anchored fixed dialog (340px wide, full height) with a dark header band ("Hello, sign in"), a "Shop by Department" section (10 placeholder departments), and a "Help & Settings" section. Backdrop click and Escape both close it. Body scroll is locked while open.
- **Search bar** (`search-bar.tsx`): the search input shows an autocomplete dropdown on focus. Mock suggestion list filters live as the user types. Arrow Up / Arrow Down navigate suggestions, Enter selects, Escape and click-outside close. The department selector to the left of the input opens its own dropdown listbox with 9 placeholder departments; the chosen department is reflected in autocomplete suggestions ("in Lorem Electronics"). Active option uses `aria-activedescendant`, ARIA combobox roles applied.

### Hero banner
- **Static layout** — no carousel rotation, no scroll triggers.
- **CTA hover:** background `--cta` → `--cta-hover`.
- **Bottom fade:** linear gradient from transparent to `--background` over the bottom 96px — softens the transition into below-the-fold content.

## Behaviors NOT implemented (would require live extraction)

- Amazon's real hero is a **rotating carousel** with 5–7 slides and auto-advance. The placeholder is a single static gradient — no carousel mechanics, no slide indicators, no auto-advance timer.
- **Cart** hover shows a mini-preview on the live site (when there are items). Not built.
- **Location selector** click opens a zip-code entry modal. Not built.
- Real **search autocomplete** server (current implementation is a static client-side filter against ~7 hard-coded suggestions, not a live suggest service).
- Real **department list** (current dropdown has 9 placeholders vs amazon's 30+ categories with two-level nesting).
- Real **breakpoints**. Amazon has multiple distinct widths (~1000px, ~750px, mobile). The scaffold uses Tailwind's default `md`/`lg` only.
