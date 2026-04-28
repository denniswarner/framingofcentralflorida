# PRD — fullPage.js Homepage Treatment (Future Enhancement)

**Status**: Parked. Not in scope for the Labor Day 2026 launch. Capture now so the idea isn't lost.

## Summary
Layer a fullPage.js-style snap-scrolling experience onto the homepage as a future enhancement. Each viewport-height section becomes a "slide" with right-side navigation dots, transitioning between hero, value props, signature work, social proof, and the visit-us CTA.

## Why
- The shop's value prop is visual — finished framed pieces deserve full-bleed, undistracted presentation.
- Snap navigation with dots gives the site a premium, gallery-like feel that matches "boutique studio" positioning.
- It's a memorable differentiator vs. typical small-business framer sites.

## Why not now
- v1 (Labor Day launch) needs to ship a complete, conventional, SEO-friendly site first.
- fullPage.js is GPLv3 / commercial-licensed; commercial use requires a paid license (~$99 single site) and explicit sign-off.
- Snap-scroll UX has accessibility and SEO trade-offs that deserve real testing, not a launch-week scramble.

## Goals
- A homepage that feels like flipping through a curated portfolio.
- Clear nav dots that hint at "there's more below" without forcing scroll.
- Visit-the-shop CTA reachable from any section (persistent header or pinned dot).

## Non-goals
- Applying snap-scroll to interior pages (About, Services, Gallery, Contact stay conventional).
- Replacing the standard homepage entirely on day one — this is an enhancement / variant, not a destruction of the v1 home.

## Proposed sections (homepage slides)
1. **Hero** — brand mark, tagline ("From Memories to Masterpieces"), primary CTA to visit the shop.
2. **Why us** — 37+ years, owner-operated, top 3 in Orlando.
3. **Signature work** — full-bleed photo carousel of finished pieces.
4. **Who we serve** — homeowners, collectors, commercial, government.
5. **Social proof** — testimonials / press mentions.
6. **Visit us** — address, hours, map, phone, directions.

## Technical approach
- Library: `@fullpage/react-fullpage` (official React wrapper).
- Next.js integration: client component (`"use client"`), loaded via `next/dynamic` with `ssr: false` to avoid hydration mismatch with `window`/DOM access.
- Keep server-rendered SEO content (metadata, JSON-LD, headings) intact — either via the route's server component shell wrapping the dynamic client component, or a parallel SSR-friendly fallback.
- License: purchase the appropriate fullPage.js commercial license before shipping.

## Open questions
- Does the snap experience replace `/` or live at a variant route (e.g. `/experience`)?
- How does this behave on mobile? fullPage.js supports it, but tall-content slides need design adjustments.
- Accessibility: keyboard nav, screen-reader landmark behavior, reduced-motion users — all need a pass.
- Are nav dots labeled (text on hover) or unlabeled?

## Alternatives considered
- **CSS `scroll-snap-type: y mandatory`** — free, no dependency, performant. Lacks built-in nav dots, keyboard nav, and section transitions out of the box. Cheapest path to ~70% of the feel.
- **Framer Motion + IntersectionObserver** — most flexible animations, but every dot/transition is custom code. Higher build cost.
- **Build vs. buy**: if licensing or accessibility blocks fullPage.js, fall back to CSS snap + a small custom dots component.

## Success criteria (when revisited)
- Homepage time-on-page increases vs. the v1 conventional layout.
- "Visit us" CTA conversion holds or improves.
- No regression in Lighthouse SEO/accessibility scores.

## Decision log
- **2026-04-26**: Idea captured. Deferred until after Labor Day 2026 launch.
