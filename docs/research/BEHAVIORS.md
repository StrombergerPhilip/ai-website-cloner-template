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

### Hero banner
- **Static layout** — no carousel rotation, no scroll triggers.
- **CTA hover:** background `--cta` → `--cta-hover`.
- **Bottom fade:** linear gradient from transparent to `--background` over the bottom 96px — softens the transition into below-the-fold content.

## Behaviors NOT implemented (would require live extraction)

- Amazon's real hero is a **rotating carousel** with 5–7 slides and auto-advance. The placeholder is a single static gradient — no carousel mechanics, no slide indicators, no auto-advance timer.
- The **department dropdown** on the search bar opens a full overlay menu with 30+ categories. Not built — would need real list extraction and dropdown behavior.
- **Account & Lists** hover opens a flyout with sign-in CTA + nested links. Not built.
- **Cart** hover shows a mini-preview on the live site (when there are items). Not built.
- **Sub-nav "All"** hamburger opens a full-page side drawer with category tree. Not built.
- **Location selector** click opens a zip-code entry modal. Not built.
- Real **search autocomplete** (suggestions appear as you type). Not built.
- Real **breakpoints**. Amazon has multiple distinct widths (~1000px, ~750px, mobile). The scaffold uses Tailwind's default `md`/`lg` only.
