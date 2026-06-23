# Behaviors — Apple-style above-the-fold scaffold

## Motion system

A single shared easing curve is used throughout, exposed as a CSS variable:

```css
--ease-apple: cubic-bezier(0.28, 0.11, 0.32, 1);
```

Durations follow a tight bracket:
- **Micro** (hover state, color shifts): 150–200ms
- **Normal** (navbar scroll-state morph): 250–350ms
- **Hero entrance**: 700ms (with stagger)

## Implemented behaviors

### Navbar
- **Scroll-state morph:** at `window.scrollY > 10` the navbar drops from 44px → 40px, background alpha 0.72 → 0.82, blur 20 → 24px. All three properties transition together over 300ms `var(--ease-apple)`.
- **Translucency:** content scrolls under the navbar — the saturated blur is the visual cue, not an opaque background.
- **Link hover:** opacity 1.0 → 0.8 over 200ms. No scale, no underline, no glow.

### Hero entrance
- On mount the hero applies a staggered fade + slide-up to four element groups:
  - Eyebrow + headline: delay 0ms
  - Subheadline: delay 80ms
  - CTA row: delay 140ms
  - Visual: delay 220ms
- Each transition is 700ms `var(--ease-apple)`, starting at `opacity: 0; transform: translateY(12px);` and resolving to `opacity: 1; transform: translateY(0);`.
- Implementation uses a single `mounted` state set on the first `requestAnimationFrame` after hydration, so the initial render paints the pre-state and the second paint triggers the transition.

### Floating visual
- The hero visual wrapper carries a `.hero-float` class that runs an 8s infinite `ease-in-out` keyframe oscillating Y by 4px. Subtle enough to read as ambient breathing, not as a bouncing element.
- The float is on an inner wrapper so it does not collide with the entrance translate on the outer wrapper.

### Reduced motion
- `@media (prefers-reduced-motion: reduce)` disables the floating keyframe and forces the staggered entrance to its resolved state with no transition. Accessibility-respecting by default.

## Behaviors NOT implemented (out of brief scope)

- Full-page search overlay (Apple uses one — would need a separate component + portal).
- Section reveals on scroll (would need IntersectionObserver wiring).
- Mobile slide-down hamburger menu (narrow viewports currently keep all 6 links inline — they may wrap or overflow horizontally below ~640px).
- Dark mode toggle (page is light-mode only).
- Real product imagery (visual is an ambient gradient placeholder).
