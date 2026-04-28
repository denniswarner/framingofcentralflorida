# Project Brief — Framing of Central Florida Website

## Project type
Brand-new website. Not a migration or redesign of an existing site.

## Target launch
**Labor Day 2026 (2026-09-07).** Roughly 4.5 months of runway from 2026-04-26.

## Business details
- **Address**: 1820 N. Orange Ave, Orlando, FL 32804
- **Phone**: 407-894-8644
- **Email**: framingofcentralflorida@gmail.com
  - *Future*: migrate to a domain email (e.g. `info@<domain>`) once a domain is set up. Code that surfaces the email should reference a single config/env var so the swap is one change, not a sitewide find-and-replace.
- **Hours**: TBD — collect from owner.
- **Domain**: TBD.

## Stack (in place)
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (`components.json` present)
- pnpm
- Deployment target: TBD (Vercel is the path of least resistance given Next.js).

See `AGENTS.md` for Next.js version notes — this project is on a newer Next.js with breaking changes from older docs.

## In scope for v1 (Labor Day launch)
- Home page with hero, value props, social proof, and clear shop-visit CTA.
- About / Our Story page (37+ years, owner-operated narrative).
- Services page covering: custom framing, memorabilia, commercial, government / institutional.
- Gallery of finished pieces.
- Contact / Visit Us page with address, hours, phone, map embed, and directions.
- Mobile-first responsive design.
- Basic SEO: per-page metadata, sitemap, robots.txt, local business schema.
- Analytics (e.g. Vercel Analytics or GA4) so we can see what's working post-launch.

## Out of scope for v1 (parking lot)
- E-commerce / online ordering.
- Online quote calculator.
- Customer accounts / project tracking.
- Blog or CMS-driven content (can ship static for v1).
- **fullPage.js homepage treatment** — see `prd-fullpage-redesign.md`. Not required for launch; revisit post-launch as a v1.x or v2 enhancement.

## Constraints & considerations
- Owner-operated business — content collection (photos, copy, hours) depends on the owner's availability. Build that into the timeline early.
- Imagery is the product. Budget time for a real photo session of the shop and finished work.
- Licensing for any third-party libraries (e.g. fullPage.js is GPL/commercial) needs explicit sign-off before adoption.

## Risks
- **Content drag**: bespoke photography and copy are the most likely path to a slipped Labor Day date. Lock a content-freeze date ~3 weeks before launch.
- **Scope creep from "cool features"**: park ideas like fullPage.js in their own PRDs instead of bolting them on.
- **Stale Next.js training data**: agents and contributors may pattern-match to older Next.js APIs. Enforce reading `node_modules/next/dist/docs/` per `AGENTS.md`.

## Rough milestones (to be refined)
- **May 2026**: information architecture locked, design direction approved, content outline drafted.
- **June 2026**: page templates built, photography session complete.
- **July 2026**: all pages populated with real content, internal review.
- **August 2026**: polish, SEO, analytics, accessibility pass, staging review.
- **2026-09-07**: launch.
