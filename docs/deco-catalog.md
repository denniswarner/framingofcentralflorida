# Deco catalog — ornaments & line icons

This doc names what ships in production, how to use it, and what to avoid. The design lab that hosted the visual review (`public/design-lab/`) was removed in the Astro migration; its shortlisted elements are the table below.

## Taxonomy (production)

| ID | `ornaments.astro` name | Role | Shipped | Typical use |
| --- | --- | --- | --- | --- |
| `deco-mark` | `mark` | Mark | Yes | Homepage hero, closing CTA |
| `deco-chevron-band` | `chevron` | Band | Yes | Header (halves), page titles, footer, hero |
| `deco-ornament` | `ornament` | Divider | Yes | Homepage section breaks |
| `established-lockup` | (composed in `Header.astro`) | Band | Yes | Header top row |

## Visual rules

- **Stroke:** round caps; ~0.75–1px in a 32×32 or 240×16 viewBox.
- **Color:** decorative gold via `text-accent` / `text-accent-deep`, or Onyx on Wheat. Do **not** use Oceanic (`primary`) on ornaments — reserve for CTAs (`docs/style-guide.md`).
- **Accessibility:** ornaments are `aria-hidden`; never the only way to convey meaning.
- **UI icons:** production standard is [Iconoir](https://iconoir.com/), inlined as SVG in `src/components/icons.astro`.

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

1. Sketch it somewhere disposable and get the client to shortlist.
2. Implement it as a new `name` in `src/components/ornaments.astro` (or a composed pattern in the layout).
3. Update this table and `docs/content-sections.md` if it maps to a page section.