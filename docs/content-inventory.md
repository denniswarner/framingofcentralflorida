# Content inventory (Astro site)

**Generated from:** `src/pages/**`, `src/components/**`, `src/data/**`  
**Last updated:** 2026-11-26 — source paths remapped for the Astro migration.  
**Companion view:** open [`content-inventory.html`](./content-inventory.html) in a browser for the stacked zone map.

**Section names:** display names and slugs are defined in [`content-sections.md`](./content-sections.md) (comps, style guide, section comments). Zone IDs always use the **section slug**, not invented aliases.

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

The file where the string lives today (for hand edits or future extraction scripts). Line numbers were dropped in the Astro migration rather than left pointing at the wrong lines.

---

## Site map (production routes)

| Route | Zone prefix | Page file |
|-------|-------------|-----------|
| `/` | `home` | `src/pages/index.astro` |
| `/about` | `about` | `src/pages/about.astro` |
| `/framing-styles` | `framing-styles` | `src/pages/framing-styles.astro` |
| `/services` | `services` | `src/pages/services.astro` |
| `/gallery` | `gallery` | `src/pages/gallery/index.astro` + `GalleryPage.astro` |
| `/contact` | `contact` | `src/pages/contact.astro` |

Every built route is listed. The design sandbox that was out of scope here was removed in the Astro migration.

---

## Global shell (`global`)

Wraps every page via `src/layouts/Base.astro` → `Header` + `Footer`.

### `global.header`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `global.header.wordmark` | Site title link | FRAMING OF CENTRAL FLORIDA | live | `Header.astro` |
| `global.header.tagline` | Subtitle | From Memories to Masterpieces | live | `Header.astro` |
| `global.header.est` | Eyebrow | Established 1993 · Orlando | live | `Header.astro` |
| `global.header.nav.*` | Nav labels | Home, About, Styles, Services, Gallery, Contact Us | live | `Header.astro` |
| `global.header.menu-title` | Mobile menu | MENU | ui | `Header.astro` |

### `global.footer`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `global.footer.wordmark` | Brand | FRAMING OF CENTRAL FLORIDA | live | `Footer.astro` |
| `global.footer.visit.h3` | Column heading | Visit | live | `Footer.astro` |
| `global.footer.visit.address` | NAP | 1820 N. Orange Ave, Orlando, FL 32804 | live | `Footer.astro` |
| `global.footer.visit.phone` | Phone | (407) 894-8644 | live | `Footer.astro` |
| `global.footer.quick-links.h3` | Column heading | Quick Links | live | `Footer.astro` |
| `global.footer.quick-links.*` | Nav (duplicate) | Same 6 routes as header | live | `Footer.astro` |
| `global.footer.hours.h3` | Column heading | Hours | live | `Footer.astro` |
| `global.footer.hours.body` | Hours | Mon–Fri 10–5, Sat 10–3, Sun closed | live | `Footer.astro` |
| `global.footer.copyright` | Legal | © {year} Framing of Central Florida | live | `Footer.astro` |

### `global.meta` (root layout)

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `global.meta.title-default` | `<title>` default | Framing of Central Florida | meta | `Base.astro` |
| `global.meta.title-template` | `<title>` suffix | `%s \| Framing of Central Florida` | meta | `Base.astro` |
| `global.meta.description` | Meta description | Custom picture framing in Orlando, FL… | meta | `Base.astro` |

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
| `home.hero.eyebrow` | Eyebrow | Custom Framing · Museum Quality | live | `index.astro` |
| `home.hero.h1` | Display heading | CRAFTED / WITH / CARE | live | `index.astro` |
| `home.hero.body` | Lead | Boutique custom framing for art… | live | `index.astro` |
| `home.hero.cta-primary` | CTA (Oceanic) | Visit Our Shop → Google Maps | live | `index.astro` |
| `home.hero.cta-secondary` | Text link | View our work → /gallery | live | `index.astro` |

### Why us — `home.why-us`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.why-us.eyebrow` | Eyebrow | Why us | live | `index.astro` |
| `home.why-us.h2` | Section title | PERSONALIZATION · CRAFTSMANSHIP · PRESERVATION | live | `index.astro` |
| `home.why-us.body` | Body | No two pieces are alike… | live | `index.astro` |
| `home.why-us.callout` | Pull quote box | We only use archival-quality materials… | live | `index.astro` |
| `home.why-us.link` | Text link | Learn more about our story → /about | live | `index.astro` |

### At a glance — `home.at-a-glance`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.at-a-glance.h2` | Tagline | From Memories to Masterpieces | live | `index.astro` |
| `home.at-a-glance.stat-1` | Stat + label | 33+ / Years serving Central Florida | live | `index.astro` |
| `home.at-a-glance.stat-2` | Stat + label | 37+ / Years of framing experience | live | `index.astro` |
| `home.at-a-glance.stat-3` | Stat + label | Top 3 / Frame shops in Orlando | live | `index.astro` |
| `home.at-a-glance.tags` | Tag row (6) | Boutique Custom Framing Studio, Museum-Quality… | live | `index.astro` |

### Closing CTA — `home.closing-cta`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `home.closing-cta.h2` | Display | COME IN FOR A / FREE CONSULTATION | live | `index.astro` |
| `home.closing-cta.address-hours` | NAP + hours | 1820 N. Orange Ave… Mon–Fri… Sat… | live | `index.astro` |
| `home.closing-cta.button` | CTA | Visit Our Shop | live | `index.astro` |

---

## About `/about` — `about`

### Page intro — `about.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `about.meta.title` | Page title | About | meta | `about.astro` |
| `about.meta.description` | Meta description | Learn about Framing of Central Florida… | meta | `about.astro` |
| `about.page-intro.eyebrow` | Eyebrow | Our Story | live | `about.astro` |
| `about.page-intro.h1` | H1 | ABOUT | live | `about.astro` |

### Story body — `about.story-body`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `about.story-body.p1` | Paragraph | With decades of experience… | live | `about.astro` |
| `about.story-body.p2` | Paragraph | Custom framing is hands-on… no online ordering… | live | `about.astro` |

### Story media — `about.story-media`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `about.story-media.placeholder` | Future content | [Team photo and detailed story content to be added] | placeholder | `about.astro` |

---

## Styles `/framing-styles` — `framing-styles`

Public name is **Styles**. Route stays `/framing-styles`.

### Page intro — `framing-styles.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `framing-styles.meta.title` | Page title | Styles | meta | `framing-styles.astro` |
| `framing-styles.page-intro.eyebrow` | Eyebrow | Our Craft | live | `framing-styles.astro` |
| `framing-styles.page-intro.h1` | H1 | STYLES | live | `framing-styles.astro` |
| `framing-styles.page-intro.body` | Intro | Whatever your vision, we have a framing style… | live | `framing-styles.astro` |

### Style cards — `framing-styles.style-cards`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `framing-styles.style-cards.items` | Card grid (×4) | See list below | live | `framing-styles.astro` array |
| `framing-styles.style-cards.image-placeholder` | All cards | [Sample images to be added] | placeholder | `framing-styles.astro` |

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
| `services.meta.title` | Page title | Services | meta | `services.astro` |
| `services.page-intro.eyebrow` | Eyebrow | What We Do | live | `services.astro` |
| `services.page-intro.h1` | H1 | SERVICES | live | `services.astro` |
| `services.page-intro.body` | Intro | Bring in a piece to frame, or a frame that needs work… | live | `services.astro` |

### Service cards — `services.service-cards`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `services.service-cards.items` | Card grid (×8) | See list below | live | `services.astro` array |
| `services.service-cards.image-placeholder` | All cards | [Sample images to be added] | placeholder | `services.astro` |

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
| `gallery.meta.title` | Page title | Gallery | meta | `GalleryPage.astro` |
| `gallery.page-intro.eyebrow` | Eyebrow | Our Work | live | `GalleryPage.astro` |
| `gallery.page-intro.h1` | H1 | GALLERY | live | `GalleryPage.astro` |
| `gallery.page-intro.body` | Intro | See examples of our custom framing work… | live | `GalleryPage.astro` |

### Category filters — `gallery.category-filters`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `gallery.category-filters.labels` | Filter pills | All + Fine Art, Stretched Canvas, Memorabilia, Jersey, Diplomas | live | `gallery.ts` + client |

### Gallery grid — `gallery.gallery-grid`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `gallery.gallery-grid.items` | 14 placeholders | Titles only (no images yet) — see `src/data/gallery.ts` | live / partial | `gallery.ts` |
| `gallery.gallery-grid.empty` | Empty state | No items in this category yet. | ui | `GalleryPage.astro` |
| `gallery.gallery-grid.count` | Dynamic | Showing N example(s) [in {category}] | ui | `GalleryPage.astro` |

---

## Contact `/contact` — `contact`

### Page intro — `contact.page-intro`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.meta.title` | Page title | Contact Us | meta | `contact.astro` |
| `contact.page-intro.eyebrow` | Eyebrow | Get In Touch | live | `contact.astro` |
| `contact.page-intro.h1` | H1 | CONTACT US | live | `contact.astro` |
| `contact.page-intro.body` | Intro | Have a question or ready to start… | live | `contact.astro` |

### Send a message — `contact.send-a-message`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.send-a-message.h2` | Column title | SEND US A MESSAGE | live | `contact.astro` |
| `contact.send-a-message.intro` | Helper | Fill out the form below… | live | `contact.astro` |
| `contact.send-a-message.policy` | Policy note | Because every frame… in-person consultation… | live | `contact.astro` |
| `contact.send-a-message.fields` | Labels / placeholders | First Name, Last Name, Email, Phone, Message… | ui | `contact.astro` |
| `contact.send-a-message.submit` | Button | Send Message | ui | `contact.astro` |

### Visit our shop — `contact.visit-our-shop`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.visit-our-shop.h2` | Column title | VISIT OUR SHOP | live | `contact.astro` |
| `contact.visit-our-shop.nap` | Address, phone, email, hours | Full NAP block | live | `contact.astro` |
| `contact.visit-our-shop.follow` | Social list | Follow: (icons from `social-links`) | live | `contact.astro` |
| `contact.visit-our-shop.directions` | CTA | Get Directions | live | `contact.astro` |

### Map embed — `contact.map-embed`

| Zone | Role | Content | Status | Source |
|------|------|---------|--------|--------|
| `contact.map-embed.placeholder` | Embed | [Google Maps embed to be added] | placeholder | `contact.astro` |

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
| **Scope** | Production routes only — `/`, `/about`, `/framing-styles`, `/services`, `/gallery`, `/contact` + global shell. |
| **Legacy migration column** | Optional — see below. Skip until you’re actively mining the old site. |
| **Automation** | **Content modules (C), phased** — not markup scrape (B). Details below. |

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

**Prefer (C) over (B).** Scraping markup/`data-zone` breaks easily on arrays, components, and `{variable}` text. This repo already centralizes some copy in arrays (`framingStyles`, `galleryItems`).

**Phased plan:**

1. Add `src/content/pages/*.ts` (and move shared strings from the pages and `src/data` there), keyed by zone ID.
2. Pages import and render; no behavior change, just where strings live.
3. Add `pnpm content:inventory` to regenerate `docs/content-inventory.md` + `.html` from those modules so the inventory cannot drift.
4. Optionally add `data-section="{slug}"` on each `<section>` for devtools only — not the source of truth.

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