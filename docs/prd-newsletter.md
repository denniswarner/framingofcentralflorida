# PRD — AI-Assisted Newsletter (Future Feature / Business Process)

**Status**: Sketch. Not in scope for the Labor Day 2026 launch. Capture so the idea is concrete when we revisit.

## Summary
A monthly (or bi-monthly) newsletter for Framing of Central Florida, drafted by AI from a mix of internal shop activity and curated external sources, then reviewed and lightly edited by Ray before send. The goal is to keep the audience warm between visits and reinforce the boutique-studio brand without becoming a content-creation burden on the owner.

## Goals
- Stay top-of-mind with past customers and local prospects.
- Reinforce the "memories to masterpieces" positioning with stories, not pitches.
- Cap Ray's time at ~10 minutes per issue (review and edit only).
- Drive secondary conversions: shop visits, repeat orders, referrals.

## Non-goals
- Full automation with no human review. A boutique craft brand sounds generic when AI sends without a person in the loop.
- Promotional / coupon-driven blasts. The brand doesn't compete on price.
- High frequency (no weekly cadence). Monthly or bi-monthly keeps quality up and unsubscribes down.

## Audience
Same segments as the website: homeowners, collectors, commercial clients, government / institutional buyers. Subject lines and lead images may vary by segment over time, but v1 sends one issue to everyone.

## Workflow (human-in-the-loop)

```
[Sources] → [Ingestion] → [AI drafter] → [Draft review UI] → [Ray edits/approves] → [Send]
```

1. **Ingestion** (scheduled, runs ~weekly): pulls fresh content from the configured sources into a staging database.
2. **AI drafter** (scheduled, runs ~3 days before send): selects ~5-7 ingested items, writes the issue using Ray's voice (samples + style guide), drafts subject lines, suggests a hero image.
3. **Draft review UI**: an admin-only screen on the site (or a hosted notebook). Ray sees the full draft, can edit inline, swap items, regenerate sections, approve.
4. **Send**: approved draft is posted to the newsletter platform (Beehiiv / MailerLite / ConvertKit) and scheduled for delivery.

## Content sources

**Internal**
- New gallery additions on the site.
- "Piece of the month" — Ray flags one as a feature.
- Shop hours / seasonal notes (closures, events, classes).
- Any blog/journal posts on the site.

**External (web sources)**
- Local Orlando arts/culture RSS feeds — gallery openings, museum exhibits, art walks.
- National framing/art preservation industry RSS — techniques, materials news, conservation tips.
- Seasonal hooks calendar — graduation season (May), Father's Day, holidays, sports seasons (jersey gifts).
- Curated newsletter inspiration set — a private list of framing-shop and gallery newsletters Ray finds well-done.

**Approach to "pulling from the web"**
- Prefer **RSS** wherever it exists (legal, stable, no scraping).
- Use a managed news API (e.g. **NewsAPI**, **Feedly API**, or **NewsCatcher**) for broader coverage without writing scrapers.
- Avoid raw web scraping unless a high-value source has no feed; even then, respect robots.txt and ToS.
- Optionally: Instagram Graph API for the shop's own posts (so the newsletter can echo what's already on social).

## Tech sketch

| Layer | Option |
| --- | --- |
| Newsletter platform | Beehiiv (free tier, good API), MailerLite, or ConvertKit |
| Subscribe form on site | Embed via the platform; capture in a single form in the footer + dedicated `/newsletter` page |
| Scheduler | Vercel Cron (free; runs weekly/monthly jobs as Next.js route handlers) |
| Database | Neon Postgres or Supabase (drafts, sources config, ingested items, audit trail) |
| AI | Anthropic API (Claude Sonnet for drafting; prompt-cache style guide + Ray's voice samples) |
| Admin UI | Authenticated route on the site (Clerk or Auth.js); list of draft issues with edit + approve actions |
| Send | Platform's API — push approved draft as a campaign |

## Phasing

**Phase 0 — Subscribe capture (do during launch window, low cost)**
- Add subscribe form to footer + `/newsletter` page using the platform's embed.
- Send issues manually via the platform UI.
- Goal: start collecting addresses before automation exists.

**Phase 1 — AI-drafted from internal sources only**
- Wire ingestion of recent gallery items + a small "shop notes" content type.
- AI drafts; Ray reviews via a simple admin screen.
- No external sources yet.

**Phase 2 — External sources added**
- Add RSS / news API ingestion.
- AI selects the mix; Ray still reviews.
- Add a "regenerate this section" button in the review UI.

**Phase 3 — Refinement**
- A/B subject lines via the platform.
- Light segmentation (homeowners vs. commercial buyers) if the list size warrants.
- Voice fine-tuning from Ray's edits over time.

## Open questions
- Cadence: monthly or bi-monthly? (Default: monthly.)
- Platform pick: Beehiiv vs. MailerLite vs. ConvertKit — depends on Ray's preference for editor UX and pricing as the list grows.
- Authoring voice: how does Ray want to sound? Need ~3-5 sample emails or interview notes to seed the voice prompt.
- Legal: confirm scraping/news API ToS for any external sources before they go to production.
- Where does the admin review UI live — same Next.js app on a `/admin` route, or a separate tool?

## Success criteria (when revisited post-launch)
- Subscribe form gets traction (a few sign-ups per week without ad spend).
- AI drafts require ≤ 10 minutes of Ray's editing time per issue.
- Open rates ≥ industry average for retail/services (~25-35%).
- At least 1-2 visits per issue trace back to newsletter referral.

## Decision log
- **2026-05-03**: Concept captured. Human-in-the-loop confirmed. AI ingesting from web sources confirmed. Deferred until after Labor Day 2026 launch; Phase 0 (subscribe form) may slot in earlier.
