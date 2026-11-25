# Content inventory (Next.js site)

**Generated from:** `src/app/**`, `src/components/layout/**`, `src/data/**`  
**Last updated:** 2026-11-22  
**Companion view:** open [`content-inventory.html`](./content-inventory.html) in a browser for the stacked zone map.

**Section names:** display names and slugs are defined in [`content-sections.md`](./content-sections.md) (comps, style guide, TSX comments). Zone IDs always use the **section slug**, not invented aliases.

---

## How to read this document

### Zone IDs

Every text block, CTA, and placeholder is tagged with a **zone ID**:

```text
{scope}.{section-slug}.{element}
```

| Part | Meaning | Examples |
|------|---------|----------|
| `scope` | Page or site-wide shell | `home`, `about`, `global` |
| `section-slug` | Comp section name → kebab-case | `hero`, `why-us`, `at-a-glance`, `page-intro` |
| `element` | Role inside the section | `eyebrow`, `h1`, `body`, `cta-primary` |

**Reading order on the page = section order in this file.** Within a section, elements follow the order they appear in the UI.

### Status

| Status | Meaning |
|--------|---------|
| **live** | Copy ships on the site today |
| **placeholder** | Explicit bracket/TBD copy in code |
| **meta** | SEO / invisible to most visitors |
| **ui** | Labels, buttons, form fields (microcopy) |

### Source

`file:line` points to where the string lives today (for hand edits or future extraction scripts).

---

## Site map (production routes)

| Route | Zone prefix | Page file |
|-------|-------------|-----------|
| `/` | `home` | `src/app/page.tsx` |
| `/about` | `about` | `src/app/about/page.tsx` |
| `/framing-styles` | `framing-styles` | `src/app/framing-styles/page.tsx` |
| `/services` | `services` | `src/app/services/page.tsx` |
| `/gallery` | `gallery` | `src/app/gallery/page.tsx` + `gallery-client.tsx` |
| `/contact` | `contact` | `src/app/contact/page.tsx` |

**Out of scope for v1 inventory:** `src/app/sandbox/**` (design experiments).

---

## Global shell (`global`)

Wraps every page via `src/app/layout.tsx` → `Header` + `Footer`.

### `global.header`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `global.header.wordmark` | Site title link | FRAMING OF CENTRAL FLORIDA | live | `header.tsx` |
| `global.header.tagline` | Subtitle | From Memories to Masterpieces | live | `header.tsx` |
| `global.header.est` | Eyebrow | Established 1993 · Orlando | live | `header.tsx` |
| `global.header.nav.*` | Nav labels | Home, About, Styles, Services, Gallery, Contact Us | live | `header.tsx` |
| `global.header.sheet-title` | Mobile menu | MENU | ui | `header.tsx` |

### `global.footer`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `global.footer.wordmark` | Brand | FRAMING OF CENTRAL FLORIDA | live | `footer.tsx` |
| `global.footer.visit.h3` | Column heading | Visit | live | `footer.tsx` |
| `global.footer.visit.address` | NAP | 1820 N. Orange Ave, Orlando, FL 32804 | live | `footer.tsx` |
| `global.footer.visit.phone` | Phone | (407) 894-8644 | live | `footer.tsx` |
| `global.footer.quick-links.h3` | Column heading | Quick Links | live | `footer.tsx` |
| `global.footer.quick-links.*` | Nav (duplicate) | Same 6 routes as header | live | `footer.tsx` |
| `global.footer.hours.h3` | Column heading | Hours | live | `footer.tsx` |
| `global.footer.hours.body` | Hours | Mon–Fri 10–5, Sat 10–3, Sun closed | live | `footer.tsx` |
| `global.footer.copyright` | Legal | © {year} Framing of Central Florida | live | `footer.tsx` |

### `global.meta` (root layout)

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `global.meta.title-default` | `<title>` default | Framing of Central Florida | meta | `layout.tsx` |
| `global.meta.title-template` | `<title>` suffix | `%s \| Framing of Central Florida` | meta | `layout.tsx` |
| `global.meta.description` | Meta description | Custom picture framing in Orlando, FL… | meta | `layout.tsx` |

---

## Home `/` — `home`

**Wireframe (top → bottom):**

```text
┌─────────────────────────────────────┐
│ [hero] frame-within-frame           │
├─────────────────────────────────────┤
│ ◆ ornament                          │
├─────────────────────────────────────┤
│ [why-us] centered story             │
├─────────────────────────────────────┤
│ ◆ ornament                          │
├─────────────────────────────────────┤
│ [at-a-glance] tagline + stats       │
├─────────────────────────────────────┤
│ ◆ ornament                          │
├─────────────────────────────────────┤
│ [closing-cta] dark band + visit     │
└─────────────────────────────────────┘
```

### Hero — `home.hero`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.hero.eyebrow` | Eyebrow | Custom Framing · Museum Quality | live | `page.tsx:19-20` |
| `home.hero.h1` | Display heading | CRAFTED / WITH / CARE | live | `page.tsx:22-27` |
| `home.hero.body` | Lead | Boutique custom framing for art… | live | `page.tsx:32-35` |
| `home.hero.cta-primary` | CTA (Oceanic) | Visit Our Shop → Google Maps | live | `page.tsx:44` |
| `home.hero.cta-secondary` | Text link | View our work → /gallery | live | `page.tsx:50` |

### Why us — `home.why-us`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.why-us.eyebrow` | Eyebrow | Why us | live | `page.tsx:62-63` |
| `home.why-us.h2` | Section title | PERSONALIZATION · CRAFTSMANSHIP · PRESERVATION | live | `page.tsx:65-66` |
| `home.why-us.body` | Body | No two pieces are alike… | live | `page.tsx:68-74` |
| `home.why-us.callout` | Pull quote box | We only use archival-quality materials… | live | `page.tsx:77-80` |
| `home.why-us.link` | Text link | Learn more about our story → /about | live | `page.tsx:88` |

### At a glance — `home.at-a-glance`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.at-a-glance.h2` | Tagline | From Memories to Masterpieces | live | `page.tsx:100-101` |
| `home.at-a-glance.stat-1` | Stat + label | 33+ / Years serving Central Florida | live | `page.tsx:105` |
| `home.at-a-glance.stat-2` | Stat + label | 37+ / Years of framing experience | live | `page.tsx:106` |
| `home.at-a-glance.stat-3` | Stat + label | Top 3 / Frame shops in Orlando | live | `page.tsx:107` |
| `home.at-a-glance.tags` | Tag row (6) | Boutique Custom Framing Studio, Museum-Quality… | live | `page.tsx:125-131` |

### Closing CTA — `home.closing-cta`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.closing-cta.h2` | Display | COME IN FOR A / FREE CONSULTATION | live | `page.tsx:153-156` |
| `home.closing-cta.address-hours` | NAP + hours | 1820 N. Orange Ave… Mon–Fri… Sat… | live | `page.tsx:158-161` |
| `home.closing-cta.button` | CTA | Visit Our Shop | live | `page.tsx:170` |

---

## About `/about` — `about`

### Page intro — `about.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `about.meta.title` | Page title | About | meta | `about/page.tsx:5` |
| `about.meta.description` | Meta description | Learn about Framing of Central Florida… | meta | `about/page.tsx:6-7` |
| `about.page-intro.eyebrow` | Eyebrow | Our Story | live | `about/page.tsx:15-16` |
| `about.page-intro.h1` | H1 | ABOUT | live | `about/page.tsx:18-19` |

### Story body — `about.story-body`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `about.story-body.p1` | Paragraph | With decades of experience… | live | `about/page.tsx:25-29` |
| `about.story-body.p2` | Paragraph | Custom framing is hands-on… no online ordering… | live | `about/page.tsx:31-38` |

### Story media — `about.story-media`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `about.story-media.placeholder` | Future content | [Team photo and detailed story content to be added] | placeholder | `about/page.tsx:42` |

---

## Styles `/framing-styles` — `framing-styles`

Public name is **Styles**. Route stays `/framing-styles`.

### Page intro — `framing-styles.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `framing-styles.meta.title` | Page title | Styles | meta | `framing-styles/page.tsx:5` |
| `framing-styles.page-intro.eyebrow` | Eyebrow | Our Craft | live | `framing-styles/page.tsx` |
| `framing-styles.page-intro.h1` | H1 | STYLES | live | `framing-styles/page.tsx` |
| `framing-styles.page-intro.body` | Intro | Whatever your vision, we have a framing style… | live | `framing-styles/page.tsx` |

### Style cards — `framing-styles.style-cards`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `framing-styles.style-cards.items` | Card grid (×4) | See list below | live | `framing-styles/page.tsx` array |
| `framing-styles.style-cards.image-placeholder` | All cards | [Sample images to be added] | placeholder | `framing-styles/page.tsx` |

**Style cards (grouped):**

1. **Traditional Wood** — Classic hardwood frames in a variety of stains and profiles, perfect for fine art and portraits.
2. **Ornate & Gold** — Elegant gilded and decorative frames that add a timeless, museum-quality look.
3. **Modern & Minimalist** — Clean lines and slim profiles for contemporary art and photography.
4. **Shadow Box** — Deep frames for dimensional objects like jerseys, memorabilia, and keepsakes.

---

## Services `/services` — `services`

### Page intro — `services.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `services.meta.title` | Page title | Services | meta | `services/page.tsx` |
| `services.page-intro.eyebrow` | Eyebrow | What We Do | live | `services/page.tsx` |
| `services.page-intro.h1` | H1 | SERVICES | live | `services/page.tsx` |
| `services.page-intro.body` | Intro | Bring in a piece to frame, or a frame that needs work… | live | `services/page.tsx` |

### Service cards — `services.service-cards`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `services.service-cards.items` | Card grid (×8) | See list below | live | `services/page.tsx` array |
| `services.service-cards.image-placeholder` | All cards | [Sample images to be added] | placeholder | `services/page.tsx` |

**Service cards (grouped):**

1. **Glass Replacement** — Broken or scratched glass replaced, or upgraded to non-glare, UV-protective glass, or acrylic.
2. **Mat Replacement** — A faded, stained, or ill-fitting mat swapped so the piece looks right and stays protected.
3. **Frame Repair** — Loose corners tightened, broken joints mended, and a worn frame put back in shape.
4. **Canvas Stretching** — Professional stretching and framing for canvas prints and original paintings.
5. **Memorabilia** — Jerseys, medals, flags, and keepsakes mounted in a shadow box.
6. **Diplomas & Documents** — Diplomas, certificates, and documents framed to last.
7. **Commercial Framing** — Matching frames for offices, restaurants, hotels, and clinics.
8. **Installation** — Hanging and hardware for finished pieces at home or on site.

---

## Gallery `/gallery` — `gallery`

### Page intro — `gallery.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `gallery.meta.title` | Page title | Gallery | meta | `gallery/page.tsx:7` |
| `gallery.page-intro.eyebrow` | Eyebrow | Our Work | live | `gallery/page.tsx:17-18` |
| `gallery.page-intro.h1` | H1 | GALLERY | live | `gallery/page.tsx:20-21` |
| `gallery.page-intro.body` | Intro | See examples of our custom framing work… | live | `gallery/page.tsx:26-28` |

### Category filters — `gallery.category-filters`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `gallery.category-filters.labels` | Filter pills | All + Fine Art, Stretched Canvas, Memorabilia, Jersey, Diplomas | live | `gallery.ts` + client |

### Gallery grid — `gallery.gallery-grid`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `gallery.gallery-grid.items` | 14 placeholders | Titles only (no images yet) — see `src/data/gallery.ts` | live / partial | `gallery.ts` |
| `gallery.gallery-grid.empty` | Empty state | No items in this category yet. | ui | `gallery-client.tsx:53-54` |
| `gallery.gallery-grid.count` | Dynamic | Showing N example(s) [in {category}] | ui | `gallery-client.tsx:71-74` |

---

## Contact `/contact` — `contact`

### Page intro — `contact.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.meta.title` | Page title | Contact Us | meta | `contact/page.tsx:9` |
| `contact.page-intro.eyebrow` | Eyebrow | Get In Touch | live | `contact/page.tsx:22-23` |
| `contact.page-intro.h1` | H1 | CONTACT US | live | `contact/page.tsx:25-26` |
| `contact.page-intro.body` | Intro | Have a question or ready to start… | live | `contact/page.tsx:31-33` |

### Send a message — `contact.send-a-message`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.send-a-message.h2` | Column title | SEND US A MESSAGE | live | `contact/page.tsx:41-42` |
| `contact.send-a-message.intro` | Helper | Fill out the form below… | live | `contact/page.tsx:44-46` |
| `contact.send-a-message.policy` | Policy note | Because every frame… in-person consultation… | live | `contact/page.tsx:48-52` |
| `contact.send-a-message.fields` | Labels / placeholders | First Name, Last Name, Email, Phone, Message… | ui | `contact/page.tsx:56-78` |
| `contact.send-a-message.submit` | Button | Send Message | ui | `contact/page.tsx:85` |

### Visit our shop — `contact.visit-our-shop`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.visit-our-shop.h2` | Column title | VISIT OUR SHOP | live | `contact/page.tsx:95-96` |
| `contact.visit-our-shop.nap` | Address, phone, email, hours | Full NAP block | live | `contact/page.tsx:99-142` |
| `contact.visit-our-shop.follow` | Social list | Follow: (icons from `social-links`) | live | `contact/page.tsx:144-162` |
| `contact.visit-our-shop.directions` | CTA | Get Directions | live | `contact/page.tsx:170` |

### Map embed — `contact.map-embed`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.map-embed.placeholder` | Embed | [Google Maps embed to be added] | placeholder | `contact/page.tsx:178-179` |

---

## Placeholder & gap summary

| Zone(s) | Owner action |
|---------|----------------|
| `about.story-media.placeholder` | Team photo + long-form story |
| `framing-styles.style-cards.image-placeholder` | Sample moulding photos (×4) |
| `services.service-cards.image-placeholder` | Service photos (×8) |
| `gallery.gallery-grid.items[].image` | Real project photography (14+ items) |
| `contact.map-embed.placeholder` | Maps embed URL |

---

## Inventory decisions (locked)

| Topic | Choice |
|-------|--------|
| **Granularity** | Grouped sections in HTML; markdown may list full copy under one zone (e.g. style cards). No per-card inventory rows unless we add them later. |
| **Scope** | Production routes only — `/`, `/about`, `/framing-styles`, `/services`, `/gallery`, `/contact` + global shell. No `sandbox/`. |
| **Legacy migration column** | Optional — see below. Skip until you’re actively mining the old site. |
| **Automation** | **Content modules (C), phased** — not TSX scrape (B). Details below. |

### What “legacy → new zone” would mean (optional)

The live site at [framingofcentralflorida.com](https://framingofcentralflorida.com) is mostly image-based; see [`docs/research/CONTENT_INDEX.md`](./research/CONTENT_INDEX.md). A **legacy column** would map old URLs or assets to new zones, for example:

| Legacy | New zone |
|--------|----------|
| `gallery.html` + `FramingExample (01).jpg` | `gallery.gallery-grid.items` |
| `whoarwe.html` (little text) | `about.story-body` / `about.story-media` |
| `index.html` background hero image | `home.hero` (visual, not copy) |

Useful when Ray or you are pulling photos/copy off the old site and want a checklist. Not required for day-to-day copy edits on the new build.

---

## Strategy: keeping placement obvious

### v1 (now)

- **`content-inventory.md`** — audit-friendly copy; grouped where you asked (style cards).
- **`content-inventory.html`** — placement stack; same zone IDs.
- **`content-sections.md`** — comp-aligned section names.

### v2 (recommended automation): content modules, not scrape

**Prefer (C) over (B).** Scraping TSX/`data-zone` breaks easily on arrays, components, and `{variable}` text. This repo already centralizes some copy in arrays (`framingStyles`, `galleryItems`).

**Phased plan:**

1. Add `src/content/pages/*.ts` (and move shared strings from TSX/data there), keyed by zone ID.
2. Pages import and render; no behavior change, just where strings live.
3. Add `pnpm content:inventory` to regenerate `docs/content-inventory.md` + `.html` from those modules so the inventory cannot drift.
4. Optionally add `data-section="{slug}"` on `<section>` in TSX for devtools only — not the source of truth.

Skip full CMS for v1; modules are enough for owner review and content freeze.

### v3 (later)

- Regenerate inventory in CI on changes to `src/content/**`.
- Legacy column in inventory output if you start a formal migration pass.

---

## Extraction log

| Page | Sections indexed | Placeholders flagged |
|------|------------------|----------------------|
| Home | Hero, Why us, At a glance, Closing CTA | 0 |
| About | Page intro, Story body, Story media | 1 |
| Styles | Page intro, Style cards | 1 (card images) |
| Services | Page intro, Service cards | 1 (card images) |
| Gallery | Page intro, Category filters, Gallery grid | 0 titles / images TBD |
| Contact | Page intro, Send a message, Visit our shop, Map embed | 1 (map) |
| Global | header + footer + meta | 0 |