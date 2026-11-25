# Content section names

Canonical **display names** come from design comps, `docs/style-guide.md`, and `{/* … */}` section comments in `src/app`. Zone IDs use the **slug** (kebab-case).

```text
{page-scope}.{section-slug}.{element}
```

| Rule | Example |
|------|---------|
| Slug = display name, lowercased, hyphenated | At a glance → `at-a-glance` |
| Don’t invent aliases (`stats` for At a glance) | ✗ `home.stats` → ✓ `home.at-a-glance` |
| Inner-page top band is **Page intro** (not “hero”) | `about.page-intro.h1` |
| `global.*` for header, footer, root meta only | |

---

## Global shell

| Slug | Display name | Source |
|------|----------------|--------|
| `header` | Header | layout |
| `footer` | Footer | layout |
| `meta` | Meta (SEO) | `layout.tsx` |

---

## Home `/`

| Order | Slug | Display name | TSX comment |
|-------|------|----------------|-------------|
| 1 | `hero` | Hero | `{/* Hero — frame within frame */}` |
| — | *(ornament)* | Section divider | `<DecoOrnament />` |
| 2 | `why-us` | Why us | `{/* Why us */}` |
| — | *(ornament)* | Section divider | |
| 3 | `at-a-glance` | At a glance | `{/* At a glance — … */}` |
| — | *(ornament)* | Section divider | |
| 4 | `closing-cta` | Closing CTA | `{/* Closing CTA — … */}` |

Style guide references: **Hero**, **Why us**, **Stats / "At a glance"**, **Closing CTA**.

---

## About `/about`

| Order | Slug | Display name | Notes |
|-------|------|----------------|--------|
| 1 | `page-intro` | Page intro | Eyebrow “Our Story” + H1 ABOUT |
| 2 | `story-body` | Story body | Prose paragraphs |
| 3 | `story-media` | Story media | Team photo / long story (placeholder) |

---

## Styles `/framing-styles`

The public name is **Styles**. The route stays `/framing-styles`.

| Order | Slug | Display name | Notes |
|-------|------|----------------|--------|
| 1 | `page-intro` | Page intro | Eyebrow “Our Craft” + H1 STYLES |
| 2 | `style-cards` | Style cards | Grid of framing types (4 cards) |

**Inventory granularity:** Style cards are one grouped zone in the markdown/HTML inventory. Edit individual cards in `framingStyles` array in `framing-styles/page.tsx`. Optional drill-down slugs if needed later: `traditional-wood`, `ornate-gold`, `modern`, `shadow-box`.

---

## Services `/services`

| Order | Slug | Display name | Notes |
|-------|------|----------------|--------|
| 1 | `page-intro` | Page intro | Eyebrow “What We Do” + H1 SERVICES |
| 2 | `service-cards` | Service cards | 8 cards: glass, mats, repair, canvas, memorabilia, diplomas, commercial, installation |

---

## Gallery `/gallery`

| Order | Slug | Display name | Notes |
|-------|------|----------------|--------|
| 1 | `page-intro` | Page intro | Eyebrow “Our Work” + H1 |
| 2 | `category-filters` | Category filters | Filter pills |
| 3 | `gallery-grid` | Gallery grid | Image tiles + empty state |
| 4 | `gallery-grid` *(footer)* | Gallery grid | “Showing N examples” (same section) |

---

## Contact `/contact`

| Order | Slug | Display name | Notes |
|-------|------|----------------|--------|
| 1 | `page-intro` | Page intro | Eyebrow “Get In Touch” + H1 |
| 2 | `send-a-message` | Send a message | Left column (matches H2) |
| 3 | `visit-our-shop` | Visit our shop | Right column NAP / hours |
| 4 | `map-embed` | Map embed | Placeholder |

---

## Page scope prefixes

| Route | Scope in zone ID |
|-------|------------------|
| `/` | `home` |
| `/about` | `about` |
| `/framing-styles` | `framing-styles` |
| `/services` | `services` |
| `/gallery` | `gallery` |
| `/contact` | `contact` |

*The Styles page keeps the `framing-styles` scope. The public label is Styles.*