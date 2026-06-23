# Foxora — Brand Reference (Vulpine Civic)

Quelle: `docs/design-references/foxora/foxora_decal.png`, `foxora_decal.pdf`, `foxora_decal_philosophy.md`

> "wie payback, nur mit bitcoin"

Foxora ist ein Bitcoin-Payback-Konzept. Die visuelle Sprache ist heraldisch, monumental, civic-crest-artig — gedacht als ein Zeichen, das schon dreihundert Jahre alt sein könnte. Diese Datei ist die ausführbare Zusammenfassung des Philosophie-Dokuments für UI-Builder.

## Design-Tokens

### Farben (exakt drei — keine Variationen, keine Tints)

| Token | Hex | Rolle | Verwendung |
|---|---|---|---|
| `--field` | `#1A1612` | Warmes Schwarz | Background, primäre Flächen |
| `--inscription` | `#FAFAF7` | Cream Off-White | Typografie, Marken, Linien |
| `--accent` | `#F7931A` | Saturated Orange (Bitcoin-Orange) | Nur an Punkten höchster Bedeutungskonzentration — wie Goldblatt in byzantinischer Ikonografie |

**Regel:** Diese drei Werte und keine anderen. Kein Hover-Tint, kein Disabled-Grau, kein Border-Subtle. Wenn ein Element Abstufung braucht, nimm Opacity oder Spacing — keine zusätzliche Farbe.

### Typografie

**Wordmark / Headlines:** Hochkontrastige humanistische Serif (Anschwellen/Verjüngen wie bei Garamond, Caslon, oder Tiempos). Im PNG-Original sehr dünne Strichstärken am Strichende, kräftige Stämme. Buchstaben werden als Objekte behandelt — nicht als Text gesetzt, sondern komponiert.

Implementierungs-Vorschlag (frei): `EB Garamond` (Google Fonts), Weight 500-600. Alternative: `Cormorant Garamond` für noch höheren Kontrast.

**Subtitle / Italic display:** Same family in italic. Beispiel: "wie payback, nur mit bitcoin" — italic, mittelgrau auf #FAFAF7.

**Functional labels / Production marks:** Monospace, klein (10-12px), all-caps mit Letter-Spacing 0.15em+, vorzugsweise mit Bullet-Separatoren (`·`). Beispiel: `— PATTERN MODULE · 28 × 36 mm · CONTINUOUS RAPPORT —`

Implementierungs-Vorschlag: `JetBrains Mono` oder `IBM Plex Mono`, Weight 400. Niemals fett.

### Geometrische Markierung — der Fuchs

Konstruktion:
- 2 gleichseitige Dreiecke nach oben → Ohren
- 1 Wedge / Trapez nach unten → Gesicht
- 1 Disc (#F7931A) → Schnauze/Nase, exakt zentriert
- Augen sind Aussparungen im Gesichts-Wedge, nicht separate Formen

Verwendung als:
1. **Civic Crest** — groß zentriert, monumental, einzige Form auf der Fläche
2. **Tessellation Pattern** — derselbe Mark stark verkleinert (28 × 36 mm Modul laut PNG), in Reihen mit gleichmäßigem Abstand, sehr dunkel (etwa 8-15% Opacity gegen #1A1612 Field) — kaum sichtbar, "gefühlt vor gesehen"
3. **Favicon / Microform** — als minimalste Identifikation

### Kompositions-Regeln

- **Vertikale Achse ist heilig** — alles stapelt sich symmetrisch entlang der Mitte
- **Frontal, keine Diagonal-Energie** — kein "dynamic", kein Asymmetric Play
- **Architektonisch** — Komposition wie eine Fassade, nicht wie ein Poster
- **Generöser Whitespace** — Elemente atmen, jedes Margin ist mehrfach geprüft
- **Functional Labels am Rand** — wie Museums-Captions, ganz unten oder ganz oben in Monospace

### Bewegung & Interaktion

Aus der Philosophie folgt: **so wenig Motion wie möglich**. Eine heraldische Wappenscheibe bewegt sich nicht. Erlaubt:

- Sehr langsame Fades bei Section-Wechsel (700-900ms)
- Cursor-Reactions nur als Opacity-Shift (1.0 → 0.85)
- KEIN Scale, KEIN Glow, KEIN Bounce, KEINE Parallax
- Hover auf interaktiven Elementen: Orange-Underline oder Orange-Disc neben dem Element — niemals Background-Change
- Single Easing: `cubic-bezier(0.4, 0.0, 0.2, 1)` — neutraler "material" Curve. Apple-Curve wäre zu weich.

## Brand-Beispiele aus dem Decal (verbatim)

**Wordmark:** `Foxora.` — mit Punkt-Disc in Orange als Teil des Wordmarks
**Tagline:** `wie payback,   nur mit bitcoin` — italic, mit unregelmäßigem Spacing (lange Lücke zwischen Komma und "nur")
**Label-Style:** `— MARK · M I · CIVIC CREST —`, `— PATTERN MODULE · 28 × 36 mm · CONTINUOUS RAPPORT —`, `— pressed for three terminals · Wien · MMXXVI —`
**Production-Footer-Style:** `VOX-ATM-WRAP-01 · FRONT · 500 × 1500 mm · 1:1 SCALE` (monospace, ganz unten, fast unsichtbar)
**Hardware-Spec-Style:** Material-Finish-Pantone-Spalten — `Vinyl 3M` / `Luster 8519` / `Black 6 C` mit Mikro-Captions darunter

## Token-Implementation in der App

In `src/app/globals.css` einzufügen (überschreibt den jetzigen Apple-Style):

```css
:root {
  --field: #1A1612;
  --inscription: #FAFAF7;
  --accent: #F7931A;

  --background: var(--field);
  --foreground: var(--inscription);

  --ease-civic: cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

Fonts via `next/font/google`:
- `EB_Garamond` (display, weights 400-700, italic)
- `JetBrains_Mono` (functional labels, weight 400)

## Brand-Sauberkeits-Regeln für den Builder

- Wenn `text-color` gesetzt wird → nur `var(--inscription)` oder `var(--accent)`, nie Hex direkt
- Wenn ein Element Aufmerksamkeit braucht → eher mit **Größe / Spacing / Vertikal-Achse** als mit Farbe
- Wenn ein Section-Header eine Marke / einen Mark braucht → ein Orange-Disc nebendran, niemals ein Orange-Wash
- Buttons sind keine Buttons — sie sind **inscribed labels**. Border-Radius 0 (Wedge) oder 999px (Disc). Niemals 8-16px Standard.
- Footer-Texte und Production-Captions immer Monospace, klein, getrackt
