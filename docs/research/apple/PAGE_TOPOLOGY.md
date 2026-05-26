# apple.com/at — Page Topology

## Source
User-provided full-page screenshot (mobile/condensed, low-res). Direct site access blocked from sandbox; no `getComputedStyle` extraction. Values estimated from screenshot — re-run `/clone-website` locally with browser-MCP for pixel-perfect.

## Locale
Apple Austria (German). Top notice strip: "Wähle ein anderes Land oder eine andere Region… Österreich" (country picker).

## Sections (top → bottom)
1. **LocaleStrip** — slim grey/white bar with country picker dropdown ("Österreich") + close X
2. **GlobalNav** — Apple logo, primary nav: Store · Mac · iPad · iPhone · Watch · AirPods · TV & Home · Entertainment · Accessories · Support · search · bag
3. **MothersDayPromo** — short banner "Mother's Day · It's not too late to find the perfect gift" + "Shop" CTA
4. **HeroIPhone** — "iPhone · Meet the latest iPhone lineup" with "Learn more" + "Shop iPhone" CTAs over photo of iPhone Pro lineup (multiple colors)
5. **WatchSeries11** — "Apple Watch Series 11 · The ultimate way to watch your health" + "Learn more" + "Buy" over watch with Pride Edition Sport Loop
6. **WatchPride** — "Apple Watch · Radiate Pride with the vibrant new Pride Edition Sport Loop" + "Learn more" + "Buy" over multi-color rainbow watch face
7. **MacBookNeo** — "MacBook Neo · Amazing Mac. Surprising price." + "Learn more" + "Buy" over MacBook on hands
8. **AppleBusiness** — "Apple Business · The tools you need to run and grow your business. All in one place." + "Learn more" with grid of business app icons
9. **IPadAir** — "iPad air · Now supercharged by M4." + "Learn more" + "Buy"
10. **TradeIn** — "Apple Trade In · Get up to $195–$685 in credit when you trade in iPhone 12 or higher" + "Get your estimate"
11. **AppleCard** — "Apple Card · Get up to 3% Daily Cash back with every purchase." + "Apply now"
12. **EndlessEntertainment** — "Endless entertainment" heading, tile grid: Friday Night Baseball (MLB) · Apple TV+ · Fitness+ · etc.
13. **Footer** — long footnote text block + footer-links columns: Shop and Learn · Apple Wallet · Account · Apple Store · For Business · For Education · For Healthcare · Apple Values · About Apple — copyright bar

## Color Palette (estimated)
- Page background: white (`#FFFFFF`)
- Card panel surfaces: light gray (`#F5F5F7`) and dark gray (`#1D1D1F`)
- Primary text on light: `#1D1D1F`
- Accent blue (CTAs / "Learn more" links): `#0066CC`
- Magenta accent (Pride watch): rainbow gradient
- Footer text: `#6E6E73` muted

## Typography (estimated)
- "SF Pro Display" / "SF Pro Text" — Apple's system fonts. Closest web fallback: Inter, with negative letter-spacing on headlines.
- Weights: regular 400, semibold 600, bold 700

## Layout
- Tile-card grid: each promo is its own rounded card (`border-radius` ~18px) with photo background, headline + sub + CTA pair stacked center-top
- Card sizes: ½-width pairs on desktop, full-width stack on mobile (the screenshot shows the mobile stacked layout)

## Known Gaps
- Real product images: not extracted. Components use named placeholder boxes with subject labels.
- "Endless entertainment" sub-tile imagery: not extracted.
- Country picker dropdown options: only "Österreich" visible.
- Footer link list partial — last few link sections cut off at bottom.
