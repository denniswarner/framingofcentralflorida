# TASK

## Completed
- [x] 2026-04-10 - Create a content index of the current website (`competitive-analysis.html`) and save it to `CONTENT_INDEX.md`.
- [x] 2026-04-10 - Replace `CONTENT_INDEX.md` with a content index for the live website at `https://framingofcentralflorida.com` (home, who we are, framing styles, gallery, contact).
- [x] 2026-11-13 - Client feedback: add Facebook and Instagram links to the header and the Contact page "Visit Our Shop" card. Links now live in `src/data/social-links.ts`, shared with the footer.
- [x] 2026-11-13 - Client feedback: add the italic "From Memories to Masterpieces" slogan under the business name in the header (kept "Established 1993 · Orlando" below it), and restyle the homepage "At a glance" slogan to the same italic treatment. Loaded Cormorant Garamond's true italic in `layout.tsx`.
- [x] 2026-11-13 - Client feedback: change "Form · Structure · Preservation" to "Personalization · Craftsmanship · Preservation" on the homepage and rewrite the supporting paragraph to cover all three words.
- [x] 2026-11-13 - Client feedback: add softened "no online ordering, every project starts with an in-person consultation" copy to the Contact page (under the form intro) and the About page (full explanation).
- [x] 2026-11-14 - Reconnect the local folder (`/Volumes/Schmitty/dev-repos/framing-of-central-florida-app`) to GitHub and push the Nov 13 feedback on branch `client-feedback-2026-11-13` (preview: https://framingofcentralflorida-k81hya7r7-dennis-warners-projects.vercel.app).

## Open (blocked on client)
- [ ] 2026-11-13 - Corporate accounts section: need the list of accounts and permission to name them publicly.
- [ ] 2026-11-13 - Photo of the business on the homepage: need storefront/team photography (site currently has no photos).
- [ ] 2026-11-13 - Expanded About page: need the client's story, or an interview to draft it.

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
- [ ] [Dennis] Two days before: confirm new email is ready and the full old DNS zone is in hand.
- [ ] [Dennis] Add `framingofcentralflorida.com` and `www` to the Vercel project; note the DNS records Vercel shows.
- [ ] [Dennis] In GoDaddy, switch `.com` nameservers from `ns1–ns4.mysecurecloudhost.com` to GoDaddy's defaults, then add Vercel's records, the new email records, and any other needed records from the old zone.
- [ ] [Dennis] Check: site loads at both addresses with SSL (issued by Vercel automatically), email in and out works, contact form delivers, `.net` still forwards.
- [ ] [Dennis] Run the mail migration from the old server.
- [ ] Rollback if needed: switch nameservers back to `mysecurecloudhost.com`.

### Phase 7: After launch (2–4 weeks)
- [ ] [Ray + Dennis] Claim or verify the Google Business Profile; Ray adds Dennis as a manager; update website link, hours and photos.
- [ ] [Dennis] Search for other listings (Yelp, Bing Places, Apple Business Connect, Nextdoor, BBB) and update the website link and details on each.
- [ ] [Dennis] Tell the previous web company they can shut down hosting and email once mail migration is confirmed.
- [ ] [Dennis] Fill in the remaining "needs input" rows in the Client Hub.

## Discovered During Work
- [ ] Add a `PLANNING.md` file to document architecture, standards, and workflow expectations for future tasks.
- [ ] 2026-11-13 - Client to approve the new homepage "Why us" paragraph and the no-online-ordering wording on Contact and About.
- [ ] 2026-11-13 - Contact page says every project starts with a consultation, but the form has no submit handler yet; wire it up before launch.
- [ ] 2026-11-14 - Local folder is missing `pnpm-lock.yaml` and `pnpm-workspace.yaml` (shown as deleted in git). Don't commit the deletion; Vercel needs the lock file.
- [ ] 2026-11-14 - Build the Client Hub (spec: `/Volumes/Schmitty/dev-repos/client-hub/docs/superpowers/specs/2026-11-14-client-hub-design.md`).
