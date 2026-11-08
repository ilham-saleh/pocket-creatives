# Phase 6 — Remaining pages

Started 6 November 2026 after the user approved Gate B by saying “begin phase 6”. Page implementation and local verification are delivered. Live enquiry activation remains pending provider configuration; see [progress](progress.md).

## Scope and content decisions

The new implementation includes `/work`, five project/collection detail routes, `/services`, video production and photography details, `/about`, `/process`, `/pricing`, `/creative-training`, `/contact`, `/journal`, one real adapted article, `/privacy-policy` and `/cookie-policy`. Unknown slugs return the framework 404.

The user selected **quote-based pricing and verified general details**, and authorised enquiries to the published business address, **team@pocketcreatives.co.uk**. No disputed price, studio address or current staff roster is presented as confirmed. The About page uses the verified agency proposition; training preserves the one-day, in-person, one-to-one format and enquiry-led booking. Policies are explicitly marked drafts awaiting the agency’s operational/legal details.

The original homepage photo choices, media files, manifest and inventory remain unchanged. Existing homepage service and project actions now lead to the local routes. The current private asset set is reused on new pages; final image selection/placement and publication clearance remain pending the user's instructions. The two original film posters remain unchanged, including the Samsung portrait; new project media frames contain that image without stretching it.

The portfolio has five entries: California Walnuts, Samsung SparkBox, beauty photography, food photography and product photography. Photography sets are labelled collections, not invented single-client campaigns. Only populated categories become filters. No invented briefs, results, budgets, dates or production credits are supplied. Film players load only on interaction and offer direct Vimeo links; image galleries support keyboard focus, close, next and previous controls.

The journal includes an edited reading version of the real 7 September 2026 article, preserving its title, author and source link. It omits disputed prices and unverified statistics. The full existing article archive remains linked; this is not a completed archive migration.

## Reference evidence and design

Fresh [rendered measurements](../output/playwright/phase-6/reference-measurements.json) and 36 screenshots cover nine live reference page families at 1440×1000 and 390×844: About, services index/detail, projects index/detail, contact, pricing, blogs and article. Original code uses the existing licensed fonts, tokens, buttons, navigation and footer. No Webflow source files or template artwork were imported.

- Broad page banners: 650px desktop / 300px phone; 155/162.75px and 42/44.1px title typography. About statement: 32/41.6px desktop, 24/31.2px phone.
- Service index: large numbers, outlined dark wide panels, media left and ruled capabilities right. Actual copy length and the added service action affect height.
- Service detail: 80/84px desktop and 39/40.95px phone heading, split supporting copy, broad rounded media.
- Project detail: title left, ruled factual metadata right, broad media beneath. Portrait video gets a contained frame; no fabricated duration row.
- Contact: 155px desktop / 42px phone title, inset dark form, vertically stacked labelled inputs and split action. Required project fields, optional disclosure and honest delivery status are Pocket-specific additions.
- Article: photographic heading, date/author/category, readable editorial column. Actual copy length differs from the demo.
- Shared motion: masked heading entrances, reversible opposing CTA image scales and pin, interruptible FAQ disclosure, existing drawer/button interactions. Reduced motion removes animation/pins; short viewports use normal flow. Per-route GSAP contexts, React-owned spacers and cleanup prevent accumulation. Timing is tuned from observation, not claimed to be the source's exact easing/duration.

The filterable editorial portfolio is an explicit brief adaptation to the reference's stacked projects. Process/training/quote-based pricing do not have exact equivalent source content; they use the measured typography, rules and media language. Unsupported demo metrics, team roles, subscription prices and ratings remain omitted. Blanket media parallax was not retained because it was not verified for these internal media frames.

## Contact delivery

The implementation uses the [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email) with server-only credentials, a verified sender, fixed recipient and the visitor's validated email in `reply_to`. Plain-text messages avoid HTML interpolation. A receipt from the provider is required before the endpoint reports success; that receipt confirms acceptance, not arrival in an inbox. No actual email has been sent during development.

Client and server validate required fields, lengths, service enum and HTTP(S) website URLs. The server checks origin, content type and a 16KB streamed body limit. A signed expiring timing token, honeypot and bounded per-email burst limit provide spam backstops. Idempotency keys preserve identical retries and change when the message is edited. Failure retains form values and announces the next action. Optional budget is free text, with no invented bands or marketing opt-in.

The burst limiter is process-local. A shared/edge rate limit and appropriate monitoring are required before a multi-instance public deployment. The token is a bot obstacle, not proof of a human. API keys and submission bodies are neither logged nor put in client code.

Configure `.env.local` from [.env.example](../.env.example):

1. Create/configure a Resend account and verify a sender domain you control.
2. Set `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO=team@pocketcreatives.co.uk`, a strong random `CONTACT_FORM_SECRET`, and exact `CONTACT_ALLOWED_ORIGIN`.
3. Set `CONTACT_ENABLED=true` only after the provider/recipient and policy settings are ready. Restart the server.
4. With an approved test recipient, verify actual acceptance, inbox receipt, reply routing and provider failures before release. Do not send test enquiries to the agency without authorisation.

Without configuration, the page offers email/phone contact and the endpoint returns failure, never fake success. Offline handler tests inject a mock provider; browser success/failure tests intercept the local API. No test-only delivery mode exists in the production endpoint.

## SEO and release boundaries

Each inner page has a distinct title, description, canonical and social metadata. Every route remains noindex; robots disallows crawling and the preview sitemap is intentionally empty. `ENABLE_SITE_PREVIEW=true` is required for the new pages in production mode; this is not authentication or media clearance. Keep preview assets local/protected.

Six content-equivalent core redirects are prepared in [legacy-redirects.ts](../src/content/legacy-redirects.ts), disabled by default behind `ENABLE_LEGACY_REDIRECTS`. The eight sector landing pages, journal archive and other discovered legacy URLs are not collapsed into a generic filter. The [123-path route map](seo-route-map.csv), source export/traffic analysis and archive/sector migration still need resolution before replacing the production site. Enabling those six redirects alone is not a complete SEO migration.

Privacy information is drafted against the actual preview integrations. Direct retrieval of the [ICO privacy information guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/) was blocked (403), so no claim of a verified legal review is made. Current address, lawful bases, retention, processors and transfers must be confirmed; this draft is not legal sign-off.

## Verification

- [Side-by-side review board](phase-6-comparison.html): nine reference page families, desktop/phone, top/body frames. All source images are Phase 6 captures.
- `npm run lint`, `npm run typecheck`, `npm run build -- --webpack` passed; all 14 original media candidates pass hash verification.
- [Enquiry contract checks](../output/playwright/phase-6/enquiry-checks.json): **19/19**, offline only.
- [Browser interactions](../output/playwright/phase-6/interaction-checks.json): **24/24** — filters, keyboard, gallery, video loading/removal, validation, retained values on failure, mock acceptance, drawer routes, FAQ and unknown slugs.
- [Motion checks](../output/playwright/phase-6/motion-checks.json): **31/31** — CTA forward/reverse, full-width pin, preference changes, landscape fallback, interrupted FAQ, repeated SPA navigation, homepage return, representative intermediate widths and no-JavaScript fallbacks.
- [Accessibility scans](../output/playwright/phase-6/accessibility-checks.json): zero axe WCAG A/AA violations in **25 settled states**, including gallery, validation errors and drawer. These do not replace assistive-technology/physical-device testing.
- [Route/render checks](../output/playwright/phase-6/page-checks.json): 18 new routes at desktop and phone widths. [Internal link/metadata checks](../output/playwright/phase-6/link-metadata-checks.json): 18 new routes plus homepage. [Preview-off checks](../output/playwright/phase-6/preview-guard-checks.json): nine representative routes.
- [Board checks](../output/playwright/phase-6/board-checks.json): all 36 page/viewport/position combinations decode, with no board overflow. [Final artifact check](../output/playwright/phase-6/final-artifact-checks.json): 114 PNGs, JSON and local document links validated. [Control captures](../output/playwright/phase-6/control-checks.json) include both CTA pin widths and optional-field error focus.
- [Artifact checks](../output/playwright/phase-6/artifact-checks.json): requirements, content/media hashes, unchanged homepage assignments, redirect fixtures and preview indexing controls.

The first check round exposed real gallery focus and local-origin defects and SplitText accessibility mistakes; these were fixed and the affected suites rerun. Initial JSON artifacts are retained as historical evidence. The shared drawer requires settled-state scanning; sampling mid-transition is not a final contrast assessment. The homepage desktop pin assertion was corrected from seven to its existing eight (the phone layout has seven). Phase 7 remains the systematic responsive/device refinement phase, and Phase 8 remains final performance, accessibility, form delivery and SEO release testing.
