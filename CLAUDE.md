@AGENTS.md

# Project conventions

## Brand & design
- Brand palette and conversion strategy live in `docs/style-guide.md`. Use the semantic tokens (`bg-primary`, `text-foreground`, etc.) — never hard-code brand hex values inside components.
- Brand-named utilities are also exposed: `bg-onyx`, `text-wheat`, `bg-oceanic`, `bg-nectarine`. Prefer semantic tokens; reach for brand utilities only when the semantic mapping doesn't fit (e.g. a Nectarine accent line).
- Reserve Oceanic (`bg-primary`) for conversion CTAs only. Do not use it on decorative chrome — see the do/don't list in `docs/style-guide.md`.

## Icons
- Inline SVG, using [Iconoir](https://iconoir.com/) paths. Icons live in `src/components/icons.astro`.
- Default size is 24px; pass `width` and `height` to scale.
- Don't mix in icons from other libraries — keep the visual language consistent.

## Stack
- Astro (static) + TypeScript
- Tailwind CSS v4
- pnpm

## Docs
- `docs/product-brief.md` — vision, audience, value prop
- `docs/project-brief.md` — scope, timeline, business details
- `docs/style-guide.md` — color system, conversion strategy, do/don'ts
- `docs/seo-strategy.md` — search strategy, launch-blocking redirects, local SEO plan
- `docs/tech-features.md` — backlog of optional/future technical features
- `docs/prd-fullpage-redesign.md` — parked PRD for fullPage.js homepage
- `docs/research/` — competitive analysis and review research
