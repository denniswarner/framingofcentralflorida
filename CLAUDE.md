@AGENTS.md

# Project conventions

## Brand & design
- Brand palette and conversion strategy live in `docs/style-guide.md`. Use the semantic shadcn tokens (`bg-primary`, `text-foreground`, etc.) — never hard-code brand hex values inside components.
- Brand-named utilities are also exposed: `bg-onyx`, `text-wheat`, `bg-oceanic`, `bg-nectarine`. Prefer semantic tokens; reach for brand utilities only when the semantic mapping doesn't fit (e.g. a Nectarine accent line).
- Reserve Oceanic (`bg-primary`) for conversion CTAs only. Do not use it on decorative chrome — see the do/don't list in `docs/style-guide.md`.

## Icons
- **Library: [Iconoir](https://iconoir.com/)** via the React package `iconoir-react`.
- Install: `pnpm add iconoir-react`
- Import named icons directly: `import { Heart, MapPin, Phone } from "iconoir-react";`
- Default size is 24px; pass `width`/`height` or wrap in a sized container to scale.
- Don't mix in icons from other libraries (lucide, heroicons, etc.) — keep the visual language consistent.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui — components live in `src/components/ui/`
- pnpm

## Docs
- `docs/product-brief.md` — vision, audience, value prop
- `docs/project-brief.md` — scope, timeline, business details
- `docs/style-guide.md` — color system, conversion strategy, do/don'ts
- `docs/tech-features.md` — backlog of optional/future technical features
- `docs/prd-fullpage-redesign.md` — parked PRD for fullPage.js homepage
- `docs/research/` — competitive analysis and review research
