# TASK

## Completed
- [x] 2026-11-25 - Replaced the Next.js app with a static Astro site for the public pages (home, about, styles, services, gallery, contact). Sandbox and design lab were not ported.
- [x] 2026-11-25 - SEO strategy documented in `docs/seo-strategy.md` (phased plan, keyword approach, glossary). Pre-launch technical items added to Phase 6 and post-launch items to Phase 7 below.
- [x] 2026-11-23 - Design lab hub (`public/design-lab/index.html`), deco elements catalog (`deco-lab.html`, 24 options + favorites), and `docs/deco-catalog.md`.
- [x] 2026-11-22 - Services page now lists glass replacement, mat replacement, frame repair, canvas stretching, memorabilia, diplomas, commercial framing, and installation.
- [x] 2026-11-22 - Added a Services page, moved Canvas Stretching off Styles onto it, and renamed Framing Styles to Styles in the header, footer, and page title. Route stays `/framing-styles`.
- [x] 2026-11-22 - Header: moved "Established 1993 · Orlando" to the top and split the chevron band so a half sits on each side of that line.
- [x] 2026-11-22 - Hero design lab shows each option inside a homepage preview (header, hero, start of Why us), including the live frame hero as Current. File: `public/design-lab/hero-lab.html`.
- [x] 2026-11-22 - Added hero option D: the current frame design with the photograph on the left and the copy on the right.
- [x] 2026-11-22 - Hero lab options are a single dropdown: Current (default), then A, B, C, and D.
- [x] 2026-11-22 - Hero option D uses local web JPG of Daumier’s *The Print Collector* (`public/design-lab/images/hero-d-print-collector.jpg`).
- [x] 2026-04-10 - Create a content index of the current website (`competitive-analysis.html`) and save it to `CONTENT_INDEX.md`.
- [x] 2026-04-10 - Replace `CONTENT_INDEX.md` with a content index for the live website at `https://framingofcentralflorida.com` (home, who we are, framing styles, gallery, contact).
- [x] 2026-11-13 - Client feedback: add Facebook and Instagram links to the header and the Contact page "Visit Our Shop" card. Links now live in `src/data/social-links.ts`, shared with the footer.
- [x] 2026-11-13 - Client feedback: add the italic "From Memories to Masterpieces" slogan under the business name in the header (kept "Established 1993 · Orlando" below it), and restyle the homepage "At a glance" slogan to the same italic treatment. Loaded Cormorant Garamond's true italic in `layout.tsx`.
- [x] 2026-11-13 - Client feedback: change "Form · Structure · Preservation" to "Personalization · Craftsmanship · Preservation" on the homepage and rewrite the supporting paragraph to cover all three words.
- [x] 2026-11-13 - Client feedback: add softened "no online ordering, every project starts with an in-person consultation" copy to the Contact page (under the form intro) and the About page (full explanation).
- [x] 2026-11-15 - Client feedback: make "Established 1993 · Orlando" in the header bigger so it stands out (`0.65rem` → `text-xs`, `sm:text-sm`, medium weight).
- [x] 2026-11-14 - Reconnect the local folder (`/Volumes/Schmitty/dev-repos/framing-of-central-florida-app`) to GitHub and push the Nov 13 feedback on branch `client-feedback-2026-11-13` (preview: https://framingofcentralflorida-k81hya7r7-dennis-warners-projects.vercel.app).
- [x] 2026-11-22 - Ran axe-core WCAG A/AA scan on public pages (home, about, framing-styles, gallery, contact) at desktop, mobile, and open mobile menu.
- [x] 2026-11-23 - Fixed axe WCAG AA findings: darkened `--accent-deep`, moved light-background gold text onto that token, labeled header/footer navs, and changed footer headings from `h3` to `h2`. Re-scan: 0 violations.

## Open (blocked on client)
- [ ] 2026-11-25 - Shop hours: still TBD in `docs/project-brief.md`. Blocks the LocalBusiness structured data and the Google Business Profile. Need open/close per day plus holiday closures. Ask on the same call as the Phase 1 GoDaddy work.
- [ ] 2026-11-13 - Corporate accounts section: need the list of accounts and permission to name them publicly.
- [ ] 2026-11-13 - Photo of the business on the homepage: need storefront/team photography (site currently has no photos).
- [ ] 2026-11-13 - Expanded About page: need the client's story, or an interview to draft it.

## Time-sensitive steps for Ray (added 2026-11-14)
- [ ] Before 2026-12-22: add a payment method to GoDaddy, or `framingofcentralflorida.com` may expire. (Details: Phase 1)
- [ ] Change the GoDaddy login email to an address that doesn't depend on the old host, then change the password. Once DNS moves, `admin@framingofcentralflorida.com` stops getting mail, including GoDaddy's renewal notices. (Details: Phase 1)
- [ ] Set up new business email (Google Workspace or Microsoft 365) before the domain is pointed at Vercel, so email doesn't go down. (Details: Phase 3)
- [ ] Decline the vendor’s $295/year certificate bill. Vercel Pro includes the certificate ($20/month). Ask the vendor to keep the current site and email up through 2026-12-18. The free Let’s Encrypt cert already on the server runs through 2027-01-29. (Details: Phase 2)
- [ ] At launch, point the domain to Vercel Pro (commercial site; the free Hobby plan is for non-commercial use). Vercel issues and renews the SSL certificate. (Details: Phase 6)
- [ ] 2026-11-23 - Before cutover, get the mailbox list from Cadresoft. Live DNS caches the address and nameservers for 24 hours, and DMARC is `p=quarantine` with strict alignment. Launch sheet must use Google SPF/DKIM and a temporary `p=none` DMARC, not a copy of the old zone. (Details: Phase 6)

## Launch playbook (added 2026-11-14)

Dennis's checklist for guiding Ray from the old site to the new one. Hard deadline: `framingofcentralflorida.com` expires 2026-12-22. Who does each step is in brackets.

### Phase 1: Secure the domain (this week)
- [ ] [Ray, with Dennis on a call] Log into GoDaddy and change the login email from `admin@framingofcentralflorida.com` to Ray's personal email (the admin@ address stops working when DNS moves).
- [ ] [Ray] Change the GoDaddy password (the current one was sent in plain text by email).
- [ ] [Ray] Add a payment method; confirm auto-renew is on for `.com` (expires 2026-12-22) and `.net` (expires 2027-03-27).
- [ ] [Ray] Give Dennis GoDaddy Delegate Access so Dennis can manage DNS without Ray's password.
- [ ] [Dennis] Check: domain list shows auto-renew with a payment method, and delegate login works.

### Phase 2: Collect from the previous web company (this week)
- [ ] [Dennis] Email them for: every mailbox on the domain and who uses it; the full DNS zone (all records); a commitment to keep hosting and email running until ~2 weeks after launch; where the old contact form sends email.
- [ ] [Dennis] Download the site backup ZIP (https://framingofcentralflorida.com/zip/framingofcentralflorida.com.zip) to the client's pCloud folder.

### Phase 3: New business email (before launch)
- [ ] [Ray + Dennis] Choose a provider (Google Workspace recommended, ~$7/user/month; Microsoft 365 alternative). Ray signs up and pays; Dennis is admin.
- [ ] [Dennis] Create mailboxes matching the Phase 2 list; prepare MX, SPF and DKIM records (added at launch, not before).
- [ ] [Dennis] Plan mail migration from the old server (Google Workspace data migration tool) to run right after launch.
- [ ] [Dennis] Walk Ray through the new webmail login and phone setup.

### Phase 4: Introduce the Client Hub (once built)
- [ ] [Dennis] Send Ray the hub link by email and the passcode by text.
- [ ] [Dennis + Ray] 15-minute walkthrough: status bar, old vs. current site, Nov 13 changes, design choice (Art Deco), "Find us online".
- [ ] [Ray] Check: logs in alone on phone and computer.

### Phase 5: Review and approve (1–2 weeks)
- [ ] [Ray] Review the Nov 13 preview (see "Discovered During Work" for the approval item).
- [ ] [Ray] Provide the items under "Open (blocked on client)"; offer to take the photo and to interview Ray for the About page.
- [ ] [Ray] Confirm whether a Google Business Profile exists and who controls it.
- [ ] [Dennis] Wire up the contact form (see "Discovered During Work") to Ray's new email and test it.
- [ ] [Dennis] Merge approved changes into `main`.
- [ ] [Ray] Written "yes, launch it".

### Phase 6: Launch day (a weekday morning, well before 2026-12-22)

SEO items below must be **merged and deployed before the DNS cutover**, not after. Full rationale in `docs/seo-strategy.md`.

- [ ] [Dennis] **301 redirects in `next.config.ts`** (launch-blocking). Old site URLs differ from new ones, so without these a decade of accumulated ranking credit is discarded: `/index.html`→`/`, `/whoarwe.html`→`/about`, `/FramingStyles.html`→`/framing-styles`, `/gallery.html`→`/gallery`, `/ContactUs.aspx`→`/contact`. Mind the mixed casing on `FramingStyles.html`.
- [ ] [Dennis] Check the Phase 2 site backup ZIP for other indexed old URLs not listed in `CONTENT_INDEX.md` (stray pages, PDFs) and redirect those too.
- [ ] [Dennis] Set `site` in `astro.config.mjs` so canonical and Open Graph URLs resolve.
- [ ] [Dennis] Add the `@astrojs/sitemap` integration and a `public/robots.txt` pointing at it.
- [ ] [Dennis] Add `LocalBusiness` JSON-LD (name, 1820 N. Orange Ave, 407-894-8644, founded 1993, `sameAs` the socials in `src/data/social-links.ts`). Blocked on hours — see "Open (blocked on client)".
- [ ] [Dennis] Rewrite page titles and `<h1>`s to include the service and the city; current ones are single generic words with no location. Suggested wording table in `docs/seo-strategy.md`.
- [ ] [Dennis] Two days before: confirm new email is ready and the full old DNS zone is in hand.
- [ ] [Dennis] Add `framingofcentralflorida.com` and `www` to the Vercel project; note the DNS records Vercel shows.
- [ ] [Dennis] Ask Cadresoft to lower the A and NS TTL from 86400 to 300 a couple of days ahead. If they will not, expect up to a day of mixed traffic. Checked 2026-11-23: apex and `mail` are `195.250.26.22`; `www` is a CNAME to the apex; MX is `mail.framingofcentralflorida.com`; SPF is `v=spf1 a mx include:spf.mysecurecloudhost.com -all`; DMARC is `v=DMARC1; p=quarantine; adkim=s; aspf=s`.
- [ ] [Dennis] In GoDaddy, switch `.com` nameservers from `ns1–ns4.mysecurecloudhost.com` to GoDaddy's defaults, then immediately add the launch sheet: Vercel's A and www CNAME, Google MX, Google SPF, Google DKIM, and `v=DMARC1; p=none`. Do not copy the old SPF, the strict DMARC policy, or the `mail` / `webmail` / `ftp` records.
- [ ] [Dennis] Check: site loads at both addresses with SSL (issued by Vercel automatically for the bare domain and www), email in and out works, contact form delivers, `.net` still forwards. The old Let's Encrypt cert (expires 2027-01-29, apex only) stays on the old server for rollback.
- [ ] [Dennis] Run the mail migration from the old server.
- [ ] Rollback if needed: switch nameservers back to `mysecurecloudhost.com`.
- [ ] [Dennis] Same day: set up Google Search Console and verify the domain, submit the sitemap, and request indexing for all six pages. It only collects data going forward, so late setup loses history.
- [ ] [Dennis] Spot-check every old URL in a browser and confirm it 301s to the right new page.
- [ ] [Dennis] Confirm `/robots.txt` and `/sitemap.xml` resolve on the live domain.
- [ ] [Dennis] Set up Bing Webmaster Tools (feeds Bing, DuckDuckGo, and several AI assistants; may hold old URLs Google doesn't).

### Phase 7: After launch (2–4 weeks)

This phase matters more for search traffic than everything in Phase 6 combined — roughly 60% of SEO value for a single-location shop sits in the Business Profile and reviews. See `docs/seo-strategy.md`.

- [ ] [Ray + Dennis] Claim or verify the Google Business Profile; Ray adds Dennis as a manager; update website link, hours and photos. **Start immediately — verification can take up to a week** (postcard or video).
- [ ] [Dennis] Complete every Business Profile field: primary category "Picture frame shop", secondary service categories, service list, description, year founded (1993), photos of the shop and finished work.
- [ ] [Ray] **Review habit** — ask every satisfied customer in person at pickup for a Google review. This is the highest-leverage SEO action available: Let Us Frame It has 287 reviews, we have ~12. Steer reviewers toward turnaround time, craftsmanship, and personal attention, which are exactly the three things competitors get complaints about (`negative-review-themes.md`). Never buy or incentivize reviews.
- [ ] [Dennis] Generate the short review link from the Business Profile; make a pickup card or counter QR code.
- [ ] [Ray] Reply to every review, positive and negative.
- [ ] [Dennis] Search for other listings (Yelp, Bing Places, Apple Business Connect, Nextdoor, BBB) and update the website link and details on each. Name, address and phone must be byte-identical across all of them ("Ave" vs "Avenue" counts).
- [ ] [Dennis] Confirm one canonical Facebook profile — the URL in `CONTENT_INDEX.md` differs in form from the one in `src/data/social-links.ts`.
- [ ] [Dennis] Tell the previous web company they can shut down hosting and email once mail migration is confirmed.
- [ ] [Dennis] Fill in the remaining "needs input" rows in the Client Hub.

## Discovered During Work
- [ ] 2026-11-25 - SEO, post-launch content: split the eight cards in `src/pages/services.astro` into individual routes, one search intent each. Start with memorabilia/shadow box and glass replacement (highest intent, clearest differentiation vs. chains). Each is unrankable while sharing one page.
- [ ] 2026-11-25 - SEO, post-launch content: gallery photos need descriptive filenames and alt text. Old site had 104 images; new site has none. Blocked on the photography item above.
- [ ] 2026-11-25 - SEO: consider neighborhood copy (Ivanhoe Village, College Park, Winter Park, Baldwin Park, Audubon Park, Maitland) to pick up "picture framing <neighborhood>" searches.
- [ ] 2026-11-23 - Accessibility follow-up: axe still flags incomplete `aria-hidden-focus` when the mobile menu is open (Base UI sheet). Needs a keyboard pass, not a confirmed fail.
- [ ] Add a `PLANNING.md` file to document architecture, standards, and workflow expectations for future tasks.
- [ ] 2026-11-13 - Client to approve the new homepage "Why us" paragraph and the no-online-ordering wording on Contact and About.
- [ ] 2026-11-13 - Contact page says every project starts with a consultation, but the form has no submit handler yet; wire it up before launch.
- [ ] 2026-11-14 - Local folder is missing `pnpm-lock.yaml` and `pnpm-workspace.yaml` (shown as deleted in git). Don't commit the deletion; Vercel needs the lock file.
- [ ] 2026-11-14 - Build the Client Hub (spec: `/Volumes/Schmitty/dev-repos/client-hub/docs/superpowers/specs/2026-11-14-client-hub-design.md`).
