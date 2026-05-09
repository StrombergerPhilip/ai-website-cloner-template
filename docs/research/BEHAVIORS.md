# Behaviors — apple.com (above-the-fold clone)

## Caveat

**No browser automation was used.** Behaviors below are what the clone implements, not what was extracted from the live site. The skill's mandatory interaction sweep (scroll, click, hover, responsive) was skipped because Chrome MCP was not attached.

## Implemented behaviors

### Nav
- **Hover on link/icon:** opacity 0.8 → 1.0, transition 200ms.
- **Sticky:** `position: sticky; top: 0` — nav stays pinned as the page scrolls.
- **Backdrop blur:** `backdrop-filter: blur(20px) saturate(180%)` on translucent black fill — produces frosted-glass effect over content scrolled underneath.
- **Responsive:** at viewport widths < `md` (~768px), the centered link list collapses (`hidden md:flex`). No replacement hamburger menu is implemented in this scaffold.

### Hero
- **Static layout** — no scroll-triggered or time-driven changes.
- **Primary CTA hover:** background color steps darker on hover.
- **Secondary CTA hover:** underline on hover.

## Behaviors NOT implemented (would require live extraction)

- Apple's real nav has a hover-triggered mega-menu / flyout on each product link. Not built.
- Apple's nav has scroll-triggered floating mode on certain product pages (changes width, gains shadow, becomes pill-shaped). Not built — needs captured trigger threshold and before/after CSS.
- Apple's hero typically uses `<video autoplay loop muted>` or a high-resolution still + parallax layer. The placeholder is a flat gradient.
- Search button on the live site opens a full-width search overlay. Not built.
- Bag button on the live site opens a flyout panel. Not built.
- Real responsive breakpoints (Apple uses several distinct widths). The scaffold has one breakpoint at `md` for the nav link list and a few for typography.
