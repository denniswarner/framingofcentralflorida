# Deco catalog — ornaments & line icons

Visual review lives in **`/design-lab/deco-lab.html`** (hub: `/design-lab/`). This doc names what ships in production, how to use it, and what to avoid.

## Taxonomy (production)

| ID | Component (`ornaments.tsx`) | Role | Shipped | Typical use |
| --- | --- | --- | --- | --- |
| `deco-mark` | `DecoMark` | Mark | Yes | Homepage hero, closing CTA |
| `deco-chevron-band` | `DecoChevronBand` | Band | Yes | Header (halves), page titles, footer, hero |
| `deco-ornament` | `DecoOrnament` | Divider | Yes | Homepage section breaks |
| `established-lockup` | (composed in `header.tsx`) | Band | Yes | Header top row |

Candidates in the design lab are **not** in the React bundle until promoted.

## Visual rules

- **Stroke:** round caps; ~0.75–1px in a 32×32 or 240×16 viewBox.
- **Color:** decorative gold via `text-accent` / `text-accent-deep`, or Onyx on Wheat. Do **not** use Oceanic (`primary`) on ornaments — reserve for CTAs (`docs/style-guide.md`).
- **Accessibility:** ornaments are `aria-hidden`; never the only way to convey meaning.
- **UI icons:** production standard is [Iconoir](https://iconoir.com/) (`iconoir-react`). Lab “UI · …” cards are stroke references for contact/hours blocks.

## Composition — do / don’t

**Do**

- Use at most **one** large hero-scale mark per viewport.
- Use at most **one** full section divider (`DecoOrnament` or equivalent) between major homepage bands.
- Alternate rhythm: mark in hero → chevron under interior H1s → composed divider between sections.
- Keep the header established lockup as the only chevron flanking text in the sticky header.

**Don’t**

- Don’t place `DecoMark` immediately above or below a full `DecoOrnament` (same motif twice in a row).
- Don’t add chevron bands under the tagline **and** the page title **and** the footer in one scroll without breathing room.
- Don’t promote Nectarine or Oceanic onto decorative SVG chrome.

## Adding a new element

1. Sketch in `public/design-lab/deco-lab.html` as **candidate**.
2. Client shortlists via lab favorites / copy summary.
3. Implement in `src/components/deco/ornaments.tsx` (or a composed pattern in layout).
4. Update this table and `docs/content-sections.md` if it maps to a page section.

## Out of scope

`/sandbox/*` pages are full-theme explorations. The deco catalog is the **chosen** Art Deco vocabulary for the live site.