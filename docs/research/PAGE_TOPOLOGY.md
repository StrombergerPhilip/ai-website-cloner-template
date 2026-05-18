# Page Topology — amazon.com (above-the-fold clone)

## Important caveat

**This clone was produced WITHOUT browser automation.** No Chrome MCP / Playwright / Puppeteer was attached when the skill ran. Per the `clone-website` skill's own pre-flight rules, this means none of the values below come from `getComputedStyle()` against the live page — they are reasonable approximations from general knowledge of amazon.com's design language, intentionally combined with neutral placeholder branding to sidestep IP risk.

If you want a real pixel-perfect clone, relaunch with `claude --chrome` and re-invoke the skill. The work in this branch is a scaffold, not a faithful capture.

## Scope

Above-the-fold only at desktop widths:

1. **Top utility bar** — dark navy, contains brand mark, deliver-to selector, large search bar with department dropdown and CTA button, language picker, account dropdown, returns link, cart with count badge
2. **Sub-nav** — slightly lighter navy, hamburger ("All") + horizontal links (Today's Deals, Customer Service, Registry, Gift Cards, Sell, Releases, Browsing History)
3. **Hero banner** — wide gradient banner with overlay text card (eyebrow + headline + body copy + CTA), bottom fade into page background

Everything below the fold (product carousels, category grids, recommendations, footer, etc.) is intentionally out of scope.

## Layout

- **Body:** white background, sans-serif type stack (Inter via `next/font`, neutral fallback).
- **Header:** `position: sticky; top: 0; z-index: 50`, two stacked rows.
  - Row 1: 60px tall, centered container max-width 1500px, flex layout with brand → location → search (flex-1) → language → account → returns → cart.
  - Row 2: 38px tall, centered container max-width 1500px, horizontal scrollable nav links.
- **Hero:** full-width gradient block, 380px (mobile) → 480px (md) → 560px (lg) tall, overlay text card pinned left within the same 1500px container, bottom fade gradient to body background.

## Interaction model

- Header: static layout. Hover-driven border outline on each interactive cluster (Amazon's signature "hover reveals white border" behavior is implemented).
- Search button: orange/yellow background, darkens on hover.
- Sub-nav links: same hover-border treatment.
- Hero CTA button: background color shifts on hover.

No scroll-triggered changes, no dropdowns, no mega-menu, no carousel rotation — those would require browser-captured trigger thresholds and state captures.

## Branding constraint

Per user request, all amazon-trademarked content is replaced:
- amazon wordmark / smile logo → `<BrandMark>` rendering "Shop"
- Search placeholder → "Search Shop"
- Department names → generic "Lorem Category", "Ipsum Goods", etc.
- Deliver-to placeholder → "Lorem 10001"
- Sub-nav labels are generic enough to keep verbatim (Today's Deals, Customer Service, etc.)

A grep for `amazon|prime` (case-insensitive) over `src/` and `public/` should return zero matches.
