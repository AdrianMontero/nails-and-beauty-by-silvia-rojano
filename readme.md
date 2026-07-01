# Silvia Rojano · Beauty & Nails — Design System

Brand & UI design system for **Nails and Beauty by Silvia Rojano**, a nail
salon and aesthetics studio in Marratxí (Portol), Mallorca. The voice is
**minimalist, feminine and elegant**: soft blush pinks, a high-contrast serif,
warm gold accents, and generous whitespace.

> Consumers link a single file: **`styles.css`** (tokens + fonts).
> Components are reachable at runtime via
> `window.SilviaRojanoBeautyNailsDesignSystem_99492d`.

---

## 1. Business context

- **What it is:** A one-woman salon run by Silvia Rojano offering nails
  (semipermanente, uñas de gel/acrigel, pedicura, manicura tradicional) plus
  aesthetics (facials, dermapen, radiofrecuencia, lifting/tinte de pestañas,
  laminado de cejas) and body treatments (masaje relajante, maderoterapia).
- **Location:** Carrer Gladiol, 07141, Marratxí.
- **Reputation:** 5.0 ★ across 56 verified Booksy reviews — clients highlight
  impeccable hygiene, premium materials, and a warm, "between friends" feel.
- **Booking:** handled entirely on **Booksy**. Every CTA on the site should
  route to the salon's Booksy page (real-time availability).
- **Social:** Instagram [@nailsbysilviarojano](https://www.instagram.com/nailsbysilviarojano).

### Sources used to build this system
- **Logo & palette (uploaded):** the SR butterfly monogram, and the AdobeColor
  "Mi tema de color" swatch set. Both drive the color + type direction.
- **Booksy business page** (services, prices, durations, reviews, gallery):
  https://booksy.com/es-es/113413_nails-and-beauty-by-silvia-rojano_salon-de-unas_68787_portol
- **GitHub repo (attached):**
  https://github.com/AdrianMontero/nails-and-beauty-by-silvia-rojano — this repo
  was **empty at build time** (no commits), so nothing was imported from it.
  Explore it later for any code the owner may add.

> Gallery/hero imagery is currently **hotlinked from the salon's public Booksy
> gallery**. Replace with owned high-resolution photos for production; every
> `<img>` in the UI kit falls back to a blush gradient if a photo fails to load.

---

## 2. Content fundamentals

- **Language:** Spanish (español de España). Occasional English is fine only
  where it already appears in the brand (e.g. "Beauty & Nails").
- **Voice:** warm, personal, boutique — "como estar entre amigas." Confident but
  never salesy. Emphasise care, hygiene, and quality of materials.
- **Person:** address the client as **tú** ("Reserva tu cita", "Te esperamos").
  The salon speaks in first person singular when it's Silvia herself.
- **Casing:** Sentence case for body and headings. **Tracked UPPERCASE** for
  eyebrows, nav, buttons, and labels (this is the signature typographic move).
- **Numbers & prices:** European format — comma decimals, space before €:
  `40,00 €`. Durations written `1h 30min`.
- **Emoji:** avoid in the interface. (Clients use ❤️ in reviews; that's their
  voice, not the brand's UI voice.)
- **Sample copy:**
  - Hero: *"Belleza que cuida cada detalle."*
  - Sub: *"Manicura, pedicura y estética con producto premium e higiene certificada."*
  - CTA: *"Reservar en Booksy"* / *"Continuar en Booksy →"*
  - Trust: *"Higiene 100% · Material esterilizado"*

---

## 3. Visual foundations

**Color.** Rose is the hero (`--rose-500 #C96A8A`, sampled from the SR
monogram), supported by a warm blush neutral ramp (near-white pinks →
`#FDDEE4`), a warm **gold** accent (`--gold-400 #E3AD00`, for prices, awards,
and special moments), and **plum-brown ink** for text (never pure black —
`--ink-900 #3A2430`). Backgrounds are blush gradients and off-whites; dark
sections use the ink tone. From the AdobeColor palette: `#F7BCF2`, `#D694BD`,
`#E3AD00`, `#855500`, `#FFE8FF`.

**Type.** Two families:
- **Cormorant Garamond** (serif) — display, headings, prices, italic accents.
  High contrast, echoes the monogram's Didone letterforms. Weights 400–700.
- **Jost** (geometric sans) — body, UI, and the wide-tracked uppercase labels.
  Weights 300–600; light weights carry the elegant, airy feel.

**Spacing & layout.** 8px base rhythm, `--container` 1200px, fluid `--gutter`.
Whitespace is intentionally generous — a minimal, breathing layout.

**Corners.** Generous, soft rounding: cards `--radius-lg` (24px), pills
`999px`, images up to `--radius-xl` (36px). Nothing sharp.

**Shadows.** Low, diffuse, **rose-plum tinted** — never hard black. `--shadow-sm`
for resting cards, `--shadow-md/lg` on hover/hero, `--shadow-gold` for accented
elements.

**Borders.** Hairline, warm (`--border-line #EAD9E1`, `--border-soft`). Used
sparingly on white cards and dividers.

**Backgrounds.** Soft vertical blush gradients between sections; a full-bleed
dark ink section for the gallery; no busy textures or patterns. Imagery is
warm-toned, soft, feminine.

**Motion.** Gentle and short. `--ease-soft` (cubic-bezier(.22,1,.36,1)),
durations 160–460ms. Cards lift `-3/-4px` on hover; buttons lift `-2px` and
darken; images scale `1.06` on hover. Fades + soft pop for modals. No bounces,
no infinite loops on content.

**Hover / press.** Primary buttons → `--brand-hover` (darker rose) + lift.
Outline buttons → fill rose, text white. Cards → deeper shadow + lift. Links →
shift to brand rose. Presses feel soft (no aggressive shrink).

**Cards.** White or blush surface, hairline border, `--radius-lg`, soft shadow,
optional hover lift. The **ServiceCard** is the signature domain unit (Booksy
row: name, description, duration, gold price, "Reservar").

**Transparency & blur.** Sticky header uses translucent blush + `backdrop-filter:
blur(14px)`. Modal scrim is a translucent ink with light blur. Otherwise solid.

**Signature motifs.** The **line–dot–line divider** lifted from the wordmark;
the **butterfly / SR monogram** logo; wide `0.28em` letter-spacing on the
wordmark.

---

## 4. Iconography

- **Style:** thin line icons, 24×24 grid, **1.5px stroke, round caps/joins** —
  Lucide's visual language. Rendered as inline SVG in the UI kit's
  `helpers.jsx` `<Icon>` component (pin, clock, instagram, phone, calendar,
  sparkle, scissors, heart, check, arrow, star, shield, leaf).
- **Substitution flag:** no brand icon font was provided, so these are
  hand-drawn to match **Lucide** (https://lucide.dev). For a larger icon needs,
  pull Lucide directly and keep the 1.5px round-stroke style.
- **Emoji:** not used in the UI.
- **Stars:** the `Rating` component draws gold stars (supports halves) for the
  5.0 review score.

---

## 5. Index / manifest

**Root**
- `styles.css` — entry point (only `@import`s).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `assets/` — `logo-sr-full.jpeg` (SR butterfly monogram on blush).
- `readme.md`, `SKILL.md`.

**Components** (`window.SilviaRojanoBeautyNailsDesignSystem_99492d`)
- `components/core/` — **Button, Badge, Card, Divider, SectionHeading**
- `components/forms/` — **Input, Select**
- `components/beauty/` — **ServiceCard, Rating, Avatar**

**Foundation cards** (`guidelines/`) — Design System tab specimens:
Colors (rose, blush, gold, ink), Type (serif, sans, labels, scale),
Spacing (scale, radii, shadows), Brand (logo, motifs & voice).

**UI kit** (`ui_kits/website/`) — full salon marketing site: sticky header,
hero, about/Silvia, tabbed services (real Booksy data), 5.0 reviews, Instagram
gallery, booking form + Booksy-redirect modal, footer. Split into
`data.js`, `helpers.jsx`, `sections1–3.jsx`, `App.jsx`, `index.html`.

---

## 6. Caveats
- Fonts are loaded from **Google Fonts** (Cormorant Garamond + Jost) — no
  licensed brand fonts were provided. Swap in `tokens/fonts.css` if you have them.
- Icons are Lucide-style **substitutions** (see §4).
- Photography is hotlinked from Booksy — replace with owned assets.
