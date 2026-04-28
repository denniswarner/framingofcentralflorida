# Style Guide — Framing of Central Florida

A small, intentional palette designed around the conversion goal: **drive in-person shop visits.** Color is one of the strongest tools for steering attention. The system below uses the 60-30-10 rule and reserves the brightest color for actions.

---

## Brand palette

| Name | Hex | RGB | Role |
| --- | --- | --- | --- |
| **Wheat** | `#FFF6E9` | 255 246 233 | Dominant background — warm, gallery-like, low fatigue |
| **Onyx** | `#0A171D` | 10 23 29 | Structural / brand color — header, footer, body text, dark sections |
| **Oceanic** | `#003F47` | 0 63 71 | **Reserved for conversion CTAs only** |
| **Nectarine** | `#FFBD76` | 255 189 118 | Decorative warm accent — banner stripes, dividers, hover halos, photography highlights |

---

## Conversion strategy: 60 / 25 / 10 / 5

```
Wheat (60%)    ████████████████████████████████  background, breathing room
Onyx (25%)     █████████████                     structure, body text, header/footer
Oceanic (10%)  █████                             conversion CTAs (sparingly)
Nectarine (5%) ███                               decorative warm accents
```

**Why this distribution converts:**
- A warm, neutral dominant background (Wheat) keeps focus on framed work — the actual product.
- A near-black structural color (Onyx) reads as serious, archival, and gallery-grade — used for header, footer, headlines, and body text so the brand reads premium without competing with framed pieces.
- A distinctive teal accent (Oceanic) is reserved for the action you want users to take. Because it's the **only saturated cool color** on the page and appears nowhere else, the eye is drawn to it. Also reads as more sophisticated than the typical orange/red CTA.
- Nectarine is the warm "delight" pop — used sparingly on decorative elements (banner stripes, section dividers, hover glows) to keep the palette feeling generous, never as a CTA. This protects Oceanic's exclusivity as the action color.

---

## Semantic role assignments

| Token (shadcn / Tailwind) | Brand color | Used on |
| --- | --- | --- |
| `background` | Wheat | Page body, default surfaces |
| `foreground` | Onyx | Body copy, default text |
| `primary` | **Oceanic** | Primary CTAs only — "Visit Our Shop", "Get Directions", "Call Now" |
| `primary-foreground` | Wheat | Text on Oceanic buttons |
| `secondary` | Onyx | Structural surfaces — header, footer, dark hero panels |
| `secondary-foreground` | Wheat | Text on Onyx |
| `accent` | Nectarine | Decorative accents — banner stripe, section dividers, hover halos |
| `accent-foreground` | Onyx | Text on Nectarine |
| `muted` | Wheat (darkened ~6%) | Subtle alternate sections, card backs |
| `muted-foreground` | Warm gray-brown | Secondary text, captions, helper copy |
| `border` / `input` | Wheat (warm tinted) | Hairlines, form fields |
| `ring` | Oceanic | Focus rings (matches primary CTA) |
| `card` | White | Elevated cards over Wheat |

---

## Buttons — the core conversion surface

There should be **three** button styles, no more:

1. **Primary (Oceanic with Wheat text)** — only for the single most important CTA on a page or section. Rule of thumb: ≤ 1 per viewport.
2. **Secondary (Onyx outline or filled, with Wheat text if filled)** — important but non-conversion actions ("View Our Work", "About Us").
3. **Outline / link (Onyx text, transparent bg, hairline border)** — tertiary actions, in-line links.

If everything is "primary," nothing is. Resist the urge to make "View Our Work" the same color as "Visit Our Shop."

---

## Page-by-page application

### Homepage
- **Hero**: Wheat background, Onyx headline, Onyx subheadline, **Oceanic "Visit Our Shop" CTA**, Onyx outline "View Our Work" CTA.
- **Scrolling banner**: Onyx stripe, Wheat text, with a thin Nectarine accent line above or below for warmth. (This is a brand moment, not a CTA.)
- **Stats / "At a glance"**: Wheat background with Onyx numerals; consider a Nectarine underline beneath each stat label as decorative pop.
- **Closing CTA**: full-bleed Onyx section, Wheat heading, **Oceanic "Visit Us" button**.

### Contact page
- Form on Wheat. Submit button uses primary (**Oceanic**).
- "Visit Our Shop" address card uses Onyx header, Wheat content area, Oceanic phone/directions buttons.
- Map embed sits below — let Google's colors live within the iframe; don't recolor.

### Header
- Onyx background, Wheat logotype and links, **Oceanic "Visit Us" button** pinned right.

### Footer
- Onyx background, Wheat text. Phone/email links use a Nectarine underline on hover. No primary buttons in the footer — keep Oceanic reserved for high-intent moments.

---

## Accessibility (WCAG AA targets)

| Combination | Contrast | Passes |
| --- | --- | --- |
| Onyx (`#0A171D`) on Wheat (`#FFF6E9`) | ~17:1 | AAA body |
| Wheat on Onyx | ~17:1 | AAA body |
| Wheat on Oceanic (`#003F47`) | ~10:1 | AAA body |
| Oceanic on Wheat (large/display) | ~10:1 | AAA body — fine for headings; prefer Onyx for body copy |
| Onyx on Nectarine (`#FFBD76`) | ~9:1 | AAA body |
| **Oceanic on Onyx** | ~2.1:1 | **FAILS — do not place Oceanic CTAs on Onyx surfaces without a Wheat backplate or border** |
| **Wheat on Nectarine** | ~1.7:1 | **FAILS — never use** |
| **Nectarine on Wheat (text)** | ~1.5:1 | **FAILS — never use Nectarine for text on Wheat** |

**Implications:**
- Pair Oceanic CTA buttons with Wheat label text — never Onyx text on Oceanic (≈3:1, fails AA for body).
- For an Oceanic button on an Onyx header/footer, give it a 1px Wheat outline or a Wheat halo to compensate for the low Oceanic-on-Onyx contrast.
- Always pair Nectarine with Onyx text (and only at large sizes if used for text at all).
- Use Onyx (not Oceanic) for body copy at small sizes for maximum readability.

---

## Do / Don't

**Do**
- Reserve Oceanic for the exact action you want a visitor to take next ("Visit Our Shop", "Get Directions", "Call Now"). Treat every Oceanic button as a vote for in-person conversion.
- Use Onyx generously for structure — header, footer, full-bleed dark sections, body text, headlines.
- Use Nectarine sparingly as warmth — banner accent lines, hover halos on links, small decorative flourishes — never for primary actions.
- Let Wheat carry most of the surface area. White space is the framing studio's friend.
- Use real shop photography as the strongest visual element; the palette should support it, not compete.

**Don't**
- Don't use Oceanic on decorative chrome (dividers, icons, headlines, scroll banners). Every Oceanic pixel that isn't a CTA dilutes its conversion power. Use Onyx for chrome, Oceanic only for action.
- Don't put Oceanic CTAs on Onyx-heavy surfaces without a Wheat outline or backplate — contrast is too low.
- Don't promote Nectarine to a CTA color. It exists to add warmth, not to compete with Oceanic for the click.
- Don't put Onyx and Oceanic in equal visual weight as buttons on the same screen — the user shouldn't have to guess which is the action.
- Don't add a fifth color. If a UI state needs differentiation, vary tone/opacity within the existing four.
- Don't put text on Nectarine smaller than 16px without confirming contrast.

---

## Tokens (CSS)

The semantic mapping above is wired into `src/app/globals.css` as both brand-named tokens (`--color-onyx`, `--color-wheat`, `--color-oceanic`, `--color-nectarine`) and shadcn semantic tokens (`--background`, `--primary`, etc.). Components should consume the **semantic** tokens via Tailwind utilities (e.g. `bg-primary`, `text-foreground`) — never hard-code brand hex values inside components.
