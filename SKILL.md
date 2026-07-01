---
name: silvia-rojano-design
description: Use this skill to generate well-branded interfaces and assets for Silvia Rojano Beauty & Nails (a nail salon & aesthetics studio in Marratxí), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Entry CSS:** link `styles.css` (tokens + Google Fonts). Runtime components:
  `window.SilviaRojanoBeautyNailsDesignSystem_99492d` after loading `_ds_bundle.js`.
- **Brand rose** `--rose-500 #C96A8A`; **gold accent** `--gold-400 #E3AD00`;
  **ink text** `--ink-900 #3A2430`; **blush backgrounds** `--blush-50/100/200`.
- **Type:** Cormorant Garamond (serif display/headings), Jost (sans body + tracked caps).
- **Voice:** Spanish, warm/boutique, address as *tú*, tracked UPPERCASE labels, no emoji in UI.
- **Booking** always routes to Booksy; **social** is Instagram @nailsbysilviarojano.
- **Components:** Button, Badge, Card, Divider, SectionHeading, Input, Select,
  ServiceCard, Rating, Avatar. Full site recreation in `ui_kits/website/`.
