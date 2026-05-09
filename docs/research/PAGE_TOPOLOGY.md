# Page Topology — apple.com (above-the-fold clone)

## Important caveat

**This clone was produced WITHOUT browser automation.** No Chrome MCP / Playwright / Puppeteer was attached when the skill ran. Per the `clone-website` skill's own pre-flight rules, this means none of the values below come from `getComputedStyle()` against the live page — they are reasonable approximations from general knowledge of Apple's design language, intentionally combined with neutral placeholder branding to sidestep IP risk.

If you want a real pixel-perfect clone, relaunch with `claude --chrome` and re-invoke the skill. The work in this branch is a scaffold, not a faithful capture.

## Scope

Above-the-fold only at 1440x900 first paint:

1. **Top nav** — sticky dark frosted bar, full viewport width
2. **Hero** — centered marketing block (eyebrow → headline → subhead → CTAs → product visual placeholder)

Everything below the fold (feature tiles, product grids, footer, etc.) is intentionally out of scope.

## Layout

- **Body:** white background, sans-serif type stack (Inter via `next/font`, falls back to SF Pro / system).
- **Nav:** `position: sticky; top: 0; z-index: 50`, height 44px, `backdrop-filter: blur` on dark translucent fill.
- **Nav inner:** centered container max-width 1024px, flex with three regions (brand, link list, icon row).
- **Hero:** flow content, centered, max-width 980px, vertical rhythm via top/bottom padding.

## Interaction model

- Nav: static layout. Hover-driven opacity changes on individual items. (No scroll-driven shrink/blur change implemented because that would require browser-captured trigger thresholds.)
- Hero: static. CTAs are link-styled.

## Branding constraint

Per user request, all Apple-trademarked content is replaced:
- Apple wordmark → `<BrandMark>` rendering "Brand"
- Product names → "Product 1" through "Product 8" + "Support"
- Hero product image → flat gradient placeholder at 5:3 aspect ratio
- Marketing copy → lorem ipsum

A grep for `apple|iphone|macbook|ipad|mac` (case-insensitive) over `src/` and `public/` should return zero matches.
