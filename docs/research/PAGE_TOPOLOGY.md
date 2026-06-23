# Page Topology — Apple-style above-the-fold scaffold

## Scope

Above-the-fold only: a single-row fixed navbar and a centered marketing hero. No commerce clusters, no two-row commerce nav, no carousel.

Built to the explicit "Apple-like, quiet, premium" brief — not as a clone of any real site. Branding is placeholder ("Shop") to keep it IP-safe.

## Layout

### Navbar (`src/components/site-header.tsx`)
- **Position:** `fixed` at top, content flows under it via backdrop blur.
- **Height:** 44px default, **40px** when `window.scrollY > 10`.
- **Background:** `rgba(22, 22, 23, 0.72)` default, `rgba(22, 22, 23, 0.82)` scrolled.
- **Filter:** `saturate(180%) blur(20px)` default, `blur(24px)` scrolled.
- **Border-bottom:** `1px solid rgba(255, 255, 255, 0.08)` (subtle separator).
- **Container:** centered, `max-width: 1024px`, `padding-inline: 22px`.
- **Layout:** brand mark on the left, 6 nav links flushed right with `gap: 24px`.
- **Typography:** brand `14px / 500 / -0.01em`. Nav links `12px / 400 / -0.01em`.

### Hero (`src/components/hero-section.tsx`)
- **Background:** `#f5f5f7` (warm off-white, not pure white).
- **Text color:** `#1d1d1f`.
- **Text block:** centered, `max-width: 700px`, `padding-inline: 22px`.
- **Vertical rhythm:** `paddingTop: calc(44px + 96px)` (96px below the fixed nav), then 16px above headline, 12px above subhead, 24px above CTAs, 32px above visual, 56px below visual.
- **Headline:** `clamp(48px, 7vw, 80px) / line-height 0.95 / letter-spacing -0.045em / weight 600`.
- **Subhead:** `clamp(21px, 3vw, 28px) / line-height 1.15 / letter-spacing -0.02em / weight 400`.
- **Eyebrow:** `17px / weight 400 / -0.01em`, muted `#6e6e73`.
- **Primary CTA:** filled blue pill (`background #0071e3`, hover `#0077ed`), height 44px, padding-inline 22px, border-radius 999px, text 17px / 400.
- **Secondary CTA:** text-only blue (`#0071e3`) with a trailing chevron, hover dims to 0.8 opacity.
- **Visual:** centered rounded rectangle (radius 24px, aspect 16:10), soft radial gradient base + two ambient color glows (cool blue + warm rose), boxed shadow `0 30px 80px -20px rgba(0,0,0,0.15)`.

## Brand swap

- Wordmark: `<BrandMark>` renders "Shop" (no real-brand reference)
- Hero copy: Lorem-ipsum-flavored placeholder
- Nav link labels: generic ("Store", "Discover", "Studio", "Vision", "Sound", "Support")
