# SEO Strategy — Framing of Central Florida

How this site earns search traffic, written to be readable by someone who hasn't done SEO before. Phases map onto the launch playbook in `docs/research/TASK.md`.

**Context**: this is a replacement for a live site that has been online since the early 2000s. That changes the priorities — the first job is not losing ground, not gaining it. See Phase 1.

A glossary of the jargon is at the bottom.

---

## The mental model

For a single-location frame shop, the website is **not** the main SEO asset. The Google Business Profile is.

When someone in Orlando searches "frame shop near me," Google shows a map with three businesses above the normal blue links. That block is the *map pack*, and it takes the large majority of clicks on local searches. Placement in it is driven mostly by:

1. A complete, verified Google Business Profile
2. The number, recency, and content of Google reviews
3. How close the searcher is to the shop

None of those three live in this repo. The website's job is to support them: prove legitimacy, answer "do they do the specific thing I need," and make visiting frictionless (which matches the primary CTA in `docs/product-brief.md` — visit the shop).

A realistic effort split is **roughly 60% Google Business Profile and reviews, 40% website**.

### The competitive gap that matters most

From `docs/research/negative-review-themes.md`:

| Shop | Reviews |
|---|---|
| Let Us Frame It | 287 |
| Sam Flax | 122 |
| Frame Masters Gallery | 17 |
| **Framing of Central Florida** | **~12** |

No amount of on-site optimization closes a 275-review gap. A deliberate review-collection habit is the highest-leverage SEO action available to this business, and it costs nothing. It is the single thing to get right.

---

## Phase 1: Don't lose what the old site earned (pre-launch, blocking)

The old site's URLs do not match the new ones. Old URLs are documented in `docs/research/CONTENT_INDEX.md`:

| Old URL | New URL |
|---|---|
| `/index.html` | `/` |
| `/whoarwe.html` | `/about` |
| `/FramingStyles.html` | `/framing-styles` |
| `/gallery.html` | `/gallery` |
| `/ContactUs.aspx` | `/contact` |

When Google next crawls `/whoarwe.html` and receives a 404, the trust that URL accumulated over a decade is discarded. The fix is a **301 redirect** — a permanent "this moved here" instruction that forwards both visitors and accumulated ranking credit.

`next.config.ts` is currently empty, so none of these exist.

**This ships with the cutover, not after it.** A redirect added a week late is a week of 404s in Google's index.

**Tasks**
- [ ] Add `redirects()` to `next.config.ts` covering the five URLs above, `permanent: true`.
- [ ] Case matters — `/FramingStyles.html` is mixed-case. Redirect the exact casing the old site used.
- [ ] Check the Phase 2 site backup ZIP for other indexed URLs not in the content index (stray pages, old PDFs).
- [ ] Keep the `.net` domain forwarding to `.com` rather than serving duplicate content.

---

## Phase 2: Technical foundations (pre-launch)

Current state is decent: every page sets a title and description, the title template in `src/layouts/Base.astro` is correct, and the site passed an axe WCAG AA scan (accessibility correlates with SEO health). What's missing:

### 2a. Canonical URLs

`astro.config.mjs` has no `site`, so Astro can't resolve absolute URLs for canonical tags or social share images. One line, once the domain is confirmed. It is also required by the sitemap integration below.

### 2b. Sitemap

No sitemap is generated. A sitemap is a machine-readable list of pages so crawlers don't have to guess. In Astro this is the `@astrojs/sitemap` integration, which writes `sitemap-index.xml` at build time and needs `site` set first.

### 2c. robots.txt

No `public/robots.txt` exists. Add one pointing at the sitemap.

The sandbox routes and the design lab that previously needed blocking here are gone — they were not carried over in the Astro migration, so there is nothing left to hide. Every built route is a page we want indexed.

### 2d. Structured data (LocalBusiness)

Nothing in `src/` references `schema.org`. For a local business this is the highest-value technical addition after redirects.

**Structured data** is a hidden JSON block stating the business facts — name, street address, phone, hours, price range, geo coordinates, social profiles — in a format Google reads with certainty instead of inferring from page text. It goes in `src/layouts/Base.astro` as a `<script type="application/ld+json">` tag, with `<` escaped to `\u003c`.

Facts to encode, all already known except hours:

- Name: Framing of Central Florida, Inc.
- Address: 1820 N. Orange Ave, Orlando, FL 32804
- Phone: 407-894-8644
- Founded: 1993
- `sameAs`: the Facebook and Instagram URLs in `src/data/social-links.ts`
- Hours: **TBD** — blocking, see Phase 5

Build it from one shared source so the footer, Contact page, and schema can't drift apart.

### 2e. Titles and headings

Google weights the `<h1>` heavily as a statement of what a page is about. Current headings are single generic words with no location and no service:

| Page | Current `<h1>` | Current title | Suggested title |
|---|---|---|---|
| `/` | `CRAFTED WITH …` | *(default)* | Custom Picture Framing in Orlando, FL |
| `/services` | `SERVICES` | Services | Custom Framing Services in Orlando, FL |
| `/framing-styles` | `STYLES` | Styles | Picture Frame Styles — Wood, Gold, Modern, Shadow Box |
| `/gallery` | `GALLERY` | Gallery | Custom Framing Gallery — Orlando, FL |
| `/about` | `ABOUT` | About | About Us — Framing Orlando Since 1993 |
| `/contact` | `CONTACT US` | Contact Us | Visit Our Orlando Frame Shop — Hours & Directions |

The homepage `<h1>` in `src/pages/index.astro` contains neither the business name nor the city.

The Art Deco typography can survive this. Add the location as a styled secondary line *inside* the same `<h1>` element rather than replacing the display type. Keep the visual, add the words.

**Do not keyword-stuff.** Repeating "custom framing Orlando" fifteen times does not work and reads badly to the humans who actually place the calls. Use the phrase in the title, the `<h1>`, and once or twice in the body, then write like a person.

### 2f. Contact form

`docs/research/TASK.md` notes the Contact form has no submit handler. A contact page whose form silently fails converts worse than having no form. Already tracked; flagging it here because it's a conversion leak, which is the point of the traffic.

---

## Phase 3: Launch week

- [ ] **Google Search Console** — verify the domain. This is Google's free dashboard showing which searches surface the site. It's how you confirm the redirects worked and the new pages got indexed. Set it up on launch day; it only collects data going forward, so late setup means lost history.
- [ ] Submit the sitemap in Search Console.
- [ ] Use the URL Inspection tool on all six pages to request indexing rather than waiting.
- [ ] Spot-check each old URL in a browser and confirm it lands on the right new page.
- [ ] **Bing Webmaster Tools** — five minutes, and it feeds Bing, DuckDuckGo, and several AI assistants. Bing may have old URLs indexed that Google doesn't.
- [ ] Confirm `robots.txt` and `/sitemap.xml` resolve on the live domain.

---

## Phase 4: First month — the high-return work

This is Phase 7 in the launch playbook and it matters more than everything in Phase 2 combined.

### Google Business Profile
- [ ] Claim or verify the listing. **Verification can take up to a week** (postcard or video), so start immediately.
- [ ] Primary category: "Picture frame shop". Add secondary categories for framing services offered.
- [ ] Fill in every field: hours, website URL, phone, service list, "from the business" description, year founded (1993).
- [ ] Upload photos — shop exterior, interior, finished work. Listings with photos get materially more direction requests.
- [ ] Add Dennis as a manager so this doesn't depend on one person's login.

### Reviews — the main event
- [ ] Ask every satisfied customer, in person at pickup, for a Google review. In person at pickup converts far better than email.
- [ ] Per `docs/research/negative-review-themes.md`, nudge reviewers toward **turnaround time, craftsmanship, and personal attention** — precisely the three things competitors get complaints about. A review saying "ready when promised" directly counters the chains' weakness.
- [ ] Generate the short review link from the Business Profile and put it on a card handed over at pickup, or a QR code at the counter.
- [ ] Reply to every review, positive and negative. Responses are public and visible.
- [ ] Never buy reviews or incentivize them. It violates Google's policy and risks the listing.

### Citations
- [ ] Make name, address, and phone **byte-identical** across Yelp, Bing Places, Apple Business Connect, BBB, and Nextdoor. Inconsistency ("Ave" vs "Avenue", old phone numbers) undermines local ranking.
- [ ] Update the website URL on every listing — they'll point at the old site.
- [ ] Note the old site's Facebook URL in `CONTENT_INDEX.md` differs in form from the one in `src/data/social-links.ts`; confirm one canonical profile.

---

## Phase 5: Blocked on client

- [ ] **Shop hours.** Still TBD in `docs/project-brief.md`. Blocks the LocalBusiness schema (2d) and the Business Profile (Phase 4). Include open/close per day and holiday closures.
- [ ] **Does a Google Business Profile already exist, and who controls it?** Open question in the launch playbook. Changes Phase 4 from "claim and verify" to "create from scratch." An unclaimed listing with a wrong address or dead phone number is actively harmful.
- [ ] **Photography.** No images on the site today; the old site had 104 gallery photos. Biggest conversion gap and a real search channel — framed-work photos with descriptive filenames and alt text surface in Google Images, where people genuinely browse for framing ideas.

Both the hours and the Business Profile question can be answered on the same call as the Phase 1 GoDaddy work.

---

## Phase 6: Months two and beyond

### Keywords, practically

Local search queries take a predictable shape: **[service] + [city]**, or **[service] + "near me."** You aren't competing nationally, so paid tools aren't needed to start — type candidates into Google and read the autocomplete suggestions and the "People also search for" box. That's free, real search data.

The opportunity is **not** the generic head term. "Custom framing Orlando" is contested. The specific services are winnable because chains execute them badly and almost nobody publishes a dedicated page:

- Jersey / memorabilia / shadow box framing
- Diploma and certificate framing
- Picture frame glass replacement
- Canvas stretching
- Frame repair
- Commercial and office art framing
- Government, military, and award framing

Someone searching "replace broken glass in picture frame Orlando" has urgent, specific, high-intent need and currently finds nobody local.

Also useful: neighborhood modifiers. The shop sits in the Ivanhoe Village / College Park area, with Winter Park, Baldwin Park, Audubon Park, and Maitland nearby — affluent, art-buying neighborhoods. Name them naturally in copy.

### Split the services page

`src/pages/services.astro` currently lists eight services as cards on one page. Each is a distinct search intent that can't rank on a shared page. Give each its own route targeting one phrase, with real copy, photos of that work, and a visit CTA. Start with memorabilia and glass replacement — highest intent, clearest differentiation.

### Later
- [ ] Gallery photos with descriptive filenames and alt text.
- [ ] Lightweight framing guides ("how much does custom framing cost in Orlando," "how to frame a signed jersey") to reach people earlier in the decision. A blog is correctly out of scope for v1 per `docs/project-brief.md`; revisit once the service pages exist.
- [ ] `FAQPage` structured data on service pages once there's real Q&A content.

---

## How to measure

Ignore rankings. They vary by searcher, location, and history, and chasing them produces bad decisions. Watch instead:

| Signal | Where | Why |
|---|---|---|
| Impressions and clicks | Search Console | Whether Google shows the site at all, and for what |
| Calls, direction requests, profile views | Google Business Profile | The actual local-intent demand |
| Review count and average | Business Profile | The lever with the most headroom |
| 404s and crawl errors | Search Console | Catches redirect mistakes after cutover |

Give it **three to six months**. Local SEO is slow, and a brand-new site on an old domain takes time to settle. Don't judge Phase 2 work by week-two numbers.

The truest signal is already in `docs/product-brief.md`: new customers saying they found the shop online.

---

## Glossary

- **Map pack** — the three-business map block above the blue links on local searches. The main prize.
- **Google Business Profile (GBP)** — the free listing powering the map pack and the panel on the right of branded searches. Formerly "Google My Business."
- **301 redirect** — permanent "this moved" instruction. Forwards visitors *and* accumulated ranking credit.
- **Canonical URL** — the one official address for a page, when several could serve the same content.
- **Structured data / JSON-LD / schema** — hidden machine-readable facts about the page. `LocalBusiness` is the relevant type here.
- **Crawl / index** — crawling is Google fetching a page; indexing is storing it as a candidate result. A page can be crawled and not indexed.
- **`noindex`** — an instruction to keep a page out of results. Different from `robots.txt`, which asks crawlers not to visit.
- **Citation** — a mention of the business name, address, and phone on a third-party directory.
- **NAP** — name, address, phone. Must be identical everywhere.
- **Search Console** — Google's free dashboard for how a site performs in search. Not analytics; a different tool.
- **Alt text** — the text description of an image, used by screen readers and image search.
- **SERP** — search engine results page.
