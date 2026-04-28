# Tech Features Backlog

Running list of optional/future technical features for the site. Each entry is a candidate, not a commitment. Promote to its own PRD when scope grows.

---

## 1. Google Maps embed on Contact page
**Status**: Planned for v1 (Labor Day 2026 launch).

Embed a Google Maps view of the shop on the Contact page, matching the look of the "Let Us Frame It" reference site — Google's official place card (name, address, rating, share/directions buttons) plus a pinned interactive map.

**Approach options:**
- **A. Google Maps Embed API** *(recommended)* — `https://www.google.com/maps/embed/v1/place?key=...&q=...`. Free for the Embed API specifically (no quota/billing). Needs a Google Cloud project + API key restricted to the production domain. Key stored in `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
- **B. Plain Share → Embed iframe** — copy the `https://www.google.com/maps/embed?pb=...` URL from Google Maps' share dialog. Zero setup, opaque URL.

**Where:** Contact page `/contact` (placeholder slot already exists in `src/app/contact/page.tsx`). Possible later expansion: small map preview in the footer, or as part of a fullPage.js "Visit us" section.

**Open items:**
- Decide A vs. B.
- If A: stand up the GCP project + key.
- Confirm the place renders correctly with the shop's Google Business listing.

---

## 2. fullPage.js homepage treatment
**Status**: Parked. See `prd-fullpage-redesign.md` for the full PRD.

Snap-scrolling homepage with right-side nav dots, full-bleed sections for hero / value props / signature work / who we serve / social proof / visit us. Deferred until after Labor Day 2026 launch; commercial license required.

---

## How to add to this list
- One feature per section, with: status, summary, approach options, where it goes, open items.
- If a feature grows past ~one screen of detail, promote it to its own `prd-<name>.md` and leave a one-line pointer here.
