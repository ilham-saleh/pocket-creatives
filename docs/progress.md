# Pocket Creatives redesign — progress and session handoff

Last updated: 8 November 2026. **Current state: Phase 8 local QA and release preparation delivered; mobile performance targets and release follow-ups remain open.**

The subsequent homepage image refresh was cancelled and reverted at the user's request on 5 November 2026. The original Phase 4 image assignments, featured projects, media manifest and inventory are restored. Await the user's explicit content-to-section instructions before replacing further media.

Rollback verification: both changed application files match the saved Phase 4 sources exactly; all 14 original media hashes match; the inventory contains its original 1,338 entries. Lint, type checking, media setup and the [production build](../output/playwright/phase-4/rollback-build.log) passed (Webpack was used because the sandbox blocked Turbopack's local worker). [Browser checks](../output/playwright/phase-4/rollback-checks.json): **7/7 passed**, with original work cards, all 31 rendered image elements decoded, working motion initialization, no horizontal overflow at 390/1440px and no runtime errors. The restored preview is running at **http://127.0.0.1:3005/**.

The user authorised Phase 2 and then “Start phase 3” on 5 November 2026. During Phase 3 they preferred an original image similar to the Lumifya hero because its licence was uncertain. The app uses an original generated decorative portrait; content licensing and any disputed business facts remain pending. Gate B was subsequently approved through the Phase 6 authorisation on 6 November.

## Governing requirements

Browser preference: reuse one named Playwright browser session with tabs for reference/preview links. Close automation sessions after checks; use headless mode for checks that do not need a visible browser. The user reported nine leftover browser icons in the Dock and asked to avoid separate browser instances.

Read [plan.md](../plan.md), [phases.md](../phases.md) and this file before further work. Both requirement files were read completely before changes. The eight-phase sequence in `phases.md` supersedes the older seven-phase outline in `plan.md`. Highest priority is the actual Lumifya rendering and observable motion, using Pocket Creatives branding/content and original code with licensed assets. Explicit user approval is required after Phase 1 and Phase 5.

## Publication request — 8 November 2026

The user authorised a public GitHub repository and deployment, selected Workers rather than Pages, and approved Cloudflare image optimization with no shared cache. Source is published at https://github.com/ilham-saleh/pocket-creatives. See [deployment handoff](cloudflare-deployment.md) for the validated adapter, browser-only animation imports, bundled social assets, Node requirement and publication status. Existing media choices are preserved. No production-domain/DNS cutover or live email delivery is authorised by this review deployment.

## Phase status

| Phase | Status | Result / next action |
| --- | --- | --- |
| 1 — Reference analysis | Complete; Gate A approved 5 November | Proceed using the audit recommendations |
| 2 — Foundation | Complete, 5 November | Shared components, fonts, tokens, navigation and footer verified |
| 3 — Homepage visuals | Complete, 5 November | Complete static homepage and genuine media preview; publication clearance stays pending |
| 4 — Homepage animations | Complete, 5 November | Relevant effects implemented; forward/reverse, reduced-motion, keyboard and touch checks passed |
| 5 — Visual comparison | Complete; Gate B approved 6 November | User authorised Phase 6 |
| 6 — Remaining pages | Implemented, 6 November; email activation pending | 18 routes, portfolio/galleries, enquiry endpoint and review board; configure verified sender before live delivery |
| 7 — Responsive refinement | Implemented and browser-verified, 8 November | Six-width comparison; 162 layouts, touch/landscape and motion checks; physical-device verification pending |
| 8 — Final testing | Local QA delivered, 8 November; follow-ups open | Verified flows, accessibility, media, SEO and release modes; mobile Home performance/LCP, physical devices, live email and release clearance pending |

## Phase 8 delivery and checks

- User requested the next phase after Phase 7. [QA report](phase-8-qa.md), [deployment/configuration guide](deployment.md), [release follow-ups](release-readiness.md), README and environment example now preserve the implementation and handoff.
- Corrected accessible numeric project labels, server-rendered contact availability/CLS, the server website-field limit, missing-origin availability, page social images, and trailing-slash redirect chains. Added a generated social card, factual Organization metadata and opt-in production sitemap/indexing settings. The original logo is unchanged; its social-card PNG copy has identical decoded pixels.
- Reduced Inter Display preloads from 227,328 to 58,544 bytes using OFL subsets with unchanged glyphs/advances and full-font fallback. Switzer remains untouched. Deferred offscreen heading splitting while preserving timing, pins, reveals and cleanup. Original Phase 4 media assignments, all 14 media hashes, content, requirements and package dependencies remain unchanged.
- Build (Webpack), lint and type checks passed. Offline enquiries **21/21**; functional interactions **24/24**; keyboard/deferred headings **15/15**; page motion/no-JS **31/31**; full homepage motion **33/33**; responsive interactions **37/37**; layout **162/162**. All **41 axe scans** plus the two mobile responsive scans have zero tested violations. Fonts: **618 glyph checks and 8 exact browser width comparisons**.
- Local release sitemap/meta/link/image audit **139/139**, release guard audit **21/21**, redirects **25/25**, configuration guards **9/9**. The restored private preview also passes **139/139** metadata/link/image checks; nine responsive captures are saved. All content images decode. External checks: 20 HTTP 200 responses, LinkedIn returns 403 and remains unverified. No server email configuration/provider code was found in browser bundles; production dependency audit reported zero advisories.
- Final Lighthouse performance: mobile **Home 85 / Work 93 / Contact 100**, desktop **100** on all three. Accessibility, best practices and SEO **100** on all six release-mode audits. CLS **0** throughout. Mobile Home LCP **3.5s**, Work **3.2s**; these miss 2.5s, and Home misses Performance 90. Mobile Home TBT is **300ms** in the final run. These are lab results; field INP and physical devices remain unverified. Keep these performance targets open, not marked passed.
- Review URL: **http://127.0.0.1:3005/**. Release settings were tested on localhost only, then restored to `SITE_INDEXABLE=false ENABLE_LEGACY_REDIRECTS=false`. No deployment, DNS/mailbox change or actual email occurred. The single task-owned headless browser is closed. Continue using one named browser and close automation after checks; stop the preview before rebuilding.

## Phase 7 delivery and checks

- User authorised Phase 7 on **8 November 2026**. [Responsive report](phase-7-responsive.md) and [comparison board](phase-7-comparison.html) preserve findings and 36 paired states at 360/390/768/1024/1440/1920px.
- Re-inspected live Lumifya and corrected tablet banner height/type, small-desktop type, fluid phone detail titles, intermediate service-header spacing, service-panel number placement, stacking, spacing and image dimensions. Original media/content assignments remain unchanged.
- Improved coarse-pointer drawer controls, gated animated hover effects by pointer capability, retained keyboard focus/zoom, and refined dynamic-height gallery/dialog behaviour. No homepage timeline or media replacement occurred.
- Build (Webpack), lint, type checks and all 14 media hashes passed. [Layout checks](../output/playwright/phase-7/layout-checks.json): **162/162**; [responsive interactions](../output/playwright/phase-7/responsive-checks.json): **37/37**; [motion/no-JS regression](../output/playwright/phase-7/motion-checks.json): **31/31**; [reference metrics](../output/playwright/phase-7/comparison-checks.json): **30/30**. Two settled mobile axe scans had zero WCAG A/AA violations. [Preservation checks](../output/playwright/phase-7/content-checks.json) and [artifact checks](../output/playwright/phase-7/artifact-checks.json) retain evidence.
- Preview: **http://127.0.0.1:3005/**. Comparison board: **http://127.0.0.1:8765/docs/phase-7-comparison.html**. One named headless browser was reused; task-owned automation is closed after review. Stop the preview before rebuilding and restart afterward.
- Physical iOS/Android, Safari/WebKit, real software keyboard/browser chrome, safe-area behaviour and assistive-technology checks remain pending. No connected simulator was available and Playwright WebKit is not installed. Emulation does not certify these behaviours. At the Phase 7 handoff, Phase 8 had not begun. See its delivery above; deployment, email activation and release approvals remain pending.

## Phase 6 delivery and checks

- User authorised Phase 6 on **6 November 2026**, approving Gate B. They selected quote-based pricing and verified general details, and requested enquiries to Pocket Creatives’ published business email. Recipient is **team@pocketcreatives.co.uk**; no sender account or API key was supplied.
- [Phase 6 report](phase-6-pages.md) and [comparison board](phase-6-comparison.html). Eighteen routes cover portfolio, five project/collection pages, services and two details, About, Process, Pricing, Training, Contact, Journal and one real adapted article, and draft privacy/cookie policies. Unknown slugs return 404. Local navigation and homepage project/service links are connected.
- Portfolio filters use populated categories only. Galleries return focus to their opening thumbnail; video embeds are deferred until play. No invented campaign briefs/results, staff roster, prices or dates. Original homepage media choices, assignments, manifest and inventory remain unchanged. New pages reuse the existing private asset set pending content direction/clearance.
- Recreated measured internal banner, service-panel, project-header and contact-form layouts, shared heading/FAQ interactions and reversible closing-strip pin/scales. Source desktop/phone screenshots cover nine page families. Filter grid, project metadata, quote-based pricing and missing team/demo content are documented adaptations.
- Build (Webpack), lint and type checks passed. [Enquiry handler](../output/playwright/phase-6/enquiry-checks.json): **19/19 offline checks**, no actual emails. [Browser interactions](../output/playwright/phase-6/interaction-checks.json): **24/24**. [Motion/responsive/no-JS checks](../output/playwright/phase-6/motion-checks.json): **31/31**. [Axe scans](../output/playwright/phase-6/accessibility-checks.json): **zero violations in 25 settled states**. [Preview guards](../output/playwright/phase-6/preview-guard-checks.json): nine representative routes return 404 when disabled. [Link/metadata checks](../output/playwright/phase-6/link-metadata-checks.json) cover the 18 new routes plus homepage.
- Fixed gallery focus restoration, the local origin check, heading-split semantics and optional-field error focus. Drawer scans await its CSS transitions. The desktop homepage has eight pin spacers (phone has seven); the route-return check now uses the correct desktop count. [Final page checks](../output/playwright/phase-6/page-checks.json): **36/36** viewport/route combinations. [Board checks](../output/playwright/phase-6/board-checks.json): **36/36** states. [Final artifact check](../output/playwright/phase-6/final-artifact-checks.json) validates the 114 screenshots, JSON and document links.
- Enquiry validation runs client/server; failures retain values. The server uses Resend with fixed recipient, verified sender configuration, plain-text body, signed timing token, honeypot, request size/origin checks, per-email burst backstop and idempotency. Only provider acceptance produces success. API credentials remain absent and online delivery is deliberately unavailable; direct email/phone works. See [.env.example](../.env.example) and [setup](phase-6-pages.md#contact-delivery). Public multi-instance deployment still needs shared/edge abuse protection and an authorised inbox delivery test.
- Distinct metadata/canonicals, noindex guards, disallow-all robots and empty preview sitemap are active. Six core redirect candidates are implemented behind `ENABLE_LEGACY_REDIRECTS=false`. The full archive/sector/123-path migration and release sitemap are **not complete**; replacing production remains blocked until that work and rights/policies are cleared.
- Preview: **http://127.0.0.1:3005/** with `ENABLE_HOMEPAGE_PREVIEW=true ENABLE_FOUNDATION_PREVIEW=true ENABLE_SITE_PREVIEW=true`. Comparison: **http://127.0.0.1:8765/docs/phase-6-comparison.html**. Stop preview before rebuilding. One named headless browser was used; task tabs are closed after checks. No deployment or live enquiry was sent.

## Phase 5 delivery and checks

- [Interactive comparison board](phase-5-comparison.html) and [comparison report](phase-5-comparison.md): **89 paired states** across 360/390/768/1024/1440/1920px. Includes held-section start/middle/end/reverse states, work transitions, open drawer, button hover, selected process card and expanded FAQ. Two reference drawer frames are carried forward from the verified Phase 1 audit because fresh replay intermittently omitted letters; this is labeled in the board and report. All implementation frames are fresh.
- Corrected About type scale/leading and reversible text brightness; section markers and heading spacing; benefits copy; service dimensions/alignment; capped FAQ columns; testimonial columns and tablet stacking; responsive container caps; full-height desktop reel; and the closing strip's independent pin, width and placement. Current image sources, project selections and assignments remain unchanged pending the user's instructions.
- Lint, type checking, media verification and the production build passed. [Matched live measurements](../output/playwright/phase-5/matched-component-checks.json): **30/30**; [refinement checks](../output/playwright/phase-5/refinement-checks.json): **14/14**; [motion regression](../output/playwright/phase-5/regression/motion-checks.json): **33/33**. [Axe scans](../output/playwright/phase-5/regression/accessibility-checks.json): zero WCAG A/AA violations in four settled states. [Touch checks](../output/playwright/phase-5/regression/touch-checks.json) pass, including landscape fallback, restoration and no runtime errors.
- [Board checks](../output/playwright/phase-5/board-checks.json) verify selectors, before/after controls and decoded screenshots. [Artifact checks](../output/playwright/phase-5/artifact-checks.json) verify the 178 paired images, JSON, links and unchanged content/media/requirements hashes. All 14 original media files pass hash verification. Build uses Webpack because the sandbox blocks Turbopack's local worker.
- Production preview: **http://127.0.0.1:3005/**. Live comparison board: **http://127.0.0.1:8765/docs/phase-5-comparison.html** (existing local research server). Stop the preview before rebuilding and restart after a successful build; otherwise an older server may reference replaced `.next` files. The browser review used one headless session with tabs; this task's tabs are closed after checks while unrelated work is preserved.
- No Phase 6 implementation or deployment occurred. Remaining asset choices, publication permissions, disputed facts, physical-device/assistive-technology validation and final performance work remain pending. Source artwork, reading spans and estimated timings remain documented adaptations.

## Phase 4 delivery and checks

- [Animation implementation report](phase-4-animations.md) maps all 17 inventory groups to implemented or deliberately omitted content. Phase 4 was authorised on 5 November 2026.
- Added hero phrase/list/thumbnail loops; masked heading reveals; pinned About media; staged services with independent lettering; reversible scaled/rotated work panels; reel growth; closing-strip scale; fine-pointer media/circle response; expanding process cards and interruptible FAQ disclosure. Retained verified drawer/button/lightbox controls.
- Added an explicit loop-pause control and keyboard service selection. Reduced motion and JavaScript-disabled views preserve static content. Short viewports use normal flow. React-owned pin wrappers, scoped cleanup, offscreen/hidden-tab pausing and responsive rebuilds avoid stale pins and duplicate loops.
- `npm run lint`, `npm run typecheck` and `npm run build` passed. [Motion browser checks](../output/playwright/phase-4/motion-checks.json): **33/33 passed**, including forward/reverse states, 360–1920px, keyboard controls, preference changes and route re-entry. [Touch checks](../output/playwright/phase-4/touch-checks.json): readable full-width process selection, working FAQ, no overflow and landscape fallback; zero runtime errors. [Accessibility scans](../output/playwright/phase-4/accessibility-checks.json): zero axe WCAG A/AA violations in four checked states.
- Live reference follow-up resolved the About path: imagery travels through a held statement/background. Desktop positions follow observed offsets. Service count/travel and mobile pin lengths adapt to actual Pocket content; estimated timing and remaining fidelity questions are explicit in the report.
- Local final production preview: **http://127.0.0.1:3005/**, started with both preview flags. Previous port 3003 belongs to the earlier visual build and is not the Phase 4 review target.
- [Heading/phrase checks](../output/playwright/phase-4/heading-checks.json) passed. [A bounded 4× CPU frame sample](../output/playwright/phase-4/frame-sample.json) recorded p95 intervals of 17.5/17.4ms and no intervals above 50ms; real-device performance remains unverified.
- No remaining-page work, deployment, media-rights clearance or Phase 5 approval occurred. Physical-device/performance/assistive-technology and sustained playback certification remain pending.

## Phase 3 delivery and checks (historical)

- [Homepage report](phase-3-homepage.md), [media provenance](homepage-media.md), [generation prompt](hero-image-prompt.txt) and updated [README](../README.md) document implementation, asset selection and operation.
- `/` now renders the complete homepage: hero, client names, about, benefits, services, selected work, four process stages, showreel, testimonials, FAQ, journal, CTA and shared footer. It no longer redirects to `/foundation`.
- Original generated decorative hero replaces the uncertain Lumifya asset. Fourteen genuine Pocket/Vimeo source candidates remain private and release-pending; `npm run media:setup` verifies exact hashes. No paid template files were used.
- `npm run lint`, `npm run typecheck`, `npm run build` and media verification passed. [Browser checks](../output/playwright/phase-3/home-checks.json): **42/42 passed**, 360–1920px plus breakpoint boundaries. Checked no overflow, mobile process/copy geometry, keyboard disclosures, navigation anchors, deferred video, focus/scroll lock, no-JavaScript fallbacks, decoded images and runtime errors.
- [Accessibility scans](../output/playwright/phase-3/accessibility-checks.json): zero axe WCAG A/AA violations in four desktop/mobile/dialog states. [Keyboard skip link](../output/playwright/phase-3/skip-link-check.json) verified. [Production checks](../output/playwright/phase-3/production-checks.json): enabled routes 200, disabled/unknown routes 404, noindex active, 13 existing Pocket destinations returned 200.
- Corrected mobile process selector specificity, About photo/copy overlap, decorative text contrast, closed-panel image sizing and third-thumbnail destination after visual review. Dedicated geometry checks cover the mobile defects.
- [Desktop preview](../output/playwright/phase-3/production-desktop.png), [mobile preview](../output/playwright/phase-3/production-mobile.png) and [section board](../output/playwright/phase-3/review-board.html). Static section review is complete; corresponding animated-state comparison remains Phase 5. No pixel-perfect claim is made.
- Local production preview: `ENABLE_HOMEPAGE_PREVIEW=true ENABLE_FOUNDATION_PREVIEW=true npm run start -- --port 3003`. Both routes default to 404 in production. These flags/noindex do not authenticate or clear the build assets; keep the preview local/protected.
- Homepage animation timelines, other pages, current team/address/prices, media release clearance, sustained video playback validation, performance/real-device/assistive-technology QA and enquiry delivery remain pending. At this historical checkpoint, Phase 4 had not begun; see the Phase 4 delivery above.

## Phase 2 delivery and checks (historical)

- [Foundation report](phase-2-foundation.md), [shared-component comparison](phase-2-comparison.html), [font/brand provenance](font-and-brand-provenance.md) and [README](../README.md) document the implementation and operation.
- Next.js App Router/React/TypeScript/Tailwind foundation; licensed local Inter Display, Switzer and Geist; measured tokens; header/drawer/footer; split buttons; section headings; native disclosures; content schemas; scoped GSAP lifecycle utility.
- At the Phase 2 checkpoint, the real homepage was not implemented and `/` redirected to the internal `/foundation` review. Phase 3 supersedes this behaviour. Production requires `ENABLE_FOUNDATION_PREVIEW=true` to show it; otherwise it returns 404. Noindex headers/metadata remain enabled. This is a preview guard, not authentication.
- `npm run fonts:setup`, `npm run lint`, `npm run typecheck` and `npm run build` passed. [Build log](../output/playwright/phase-2/build.log).
- [Browser checks](../output/playwright/phase-2/foundation-checks.json): **63/63 passed** across 360–1920px and breakpoint boundaries, with no horizontal overflow. Tested drawer focus cycling, Escape/return, wheel lock, backdrop close, interrupted transitions, service disclosure, anchor navigation, reduced motion, FAQ keyboard controls, button hover/reversal and local routes/anchors.
- [Accessibility checks](../output/playwright/phase-2/accessibility-checks.json): no axe WCAG A/AA violations in desktop/mobile and open-menu states. Navigation/headings/disclosure work with JavaScript disabled. Automated scans do not replace manual accessibility review.
- [Production checks](../output/playwright/phase-2/production-checks.json): disabled preview 404, enabled preview 200, root redirect 307, unknown route 404, noindex header present, no runtime errors; all eight checked existing Pocket footer destinations returned 200. No form submission occurred.
- Live reference/local font samples match exactly: Inter Display 700/64px = 913.53125px; Switzer 400/16px = 219.4718017578125px for the documented string. Full homepage wrapping still requires Phase 5 review.
- Fixed during checks: in-page menu links initially jumped back to the trigger on close; focus now goes to the selected section. Matched freshly measured 20px mobile menu / 18px footer link type. Small orange-button text is dark for contrast (5.78:1); no invented arrow animation.
- Production dependency audit: zero advisories. Eight moderate development-only ESLint/TypeScript glob-tooling advisories remain; retain the compatible ESLint 9 configuration until the current Next plugins support an upgrade. No forced downgrade or incompatible override was introduced.
- No application dependency/source existed before this phase. New app files are in `src/`, `public/brand/`, `scripts/` and root configuration/lock files; screenshots and checks are in `output/playwright/phase-2/`. Requirements remain unchanged.

## Phase 1 deliverables

- [Reference audit](reference-audit.md): homepage and internal page families, factual observations, proposed content mapping and approval decisions.
- [Visual reference board](reference-board.html): captured reference beside proposed Pocket treatment. This is a research document; an implemented side-by-side comparison belongs to Phase 5.
- [Design system](design-system.md): measured colours, font roles, responsive sizes, gutters, surfaces, radii and component proportions.
- [Animation inventory](animation-inventory.md): 17 observed effect groups, triggers, states, timing confidence, mobile/reverse behaviour and limitations.
- [Content inventory](content-inventory.md), [media manifest](media-manifest.md), [media CSV](media-inventory.csv): real content and 1,338 discovered media references. These are candidates, not 1,338 cleared production assets.
- [SEO route map](seo-route-map.csv): 123 discovered paths with provisional migration decisions. It is not a complete production crawl or approved redirect configuration.
- [Implementation plan](implementation-plan.md): eight phases, architecture and checks.
- [Evidence index](../output/playwright/phase-1/README.md): 145 screenshots/contact sheets/report previews, browser measurements and original inspection helpers.

## Verified research and checks

- Exact Lumifya preview resolved through the Webflow listing. Homepage scrolled section by section on desktop and mobile; major internal page families and public style/licence/interaction guides inspected.
- Sampled 360, 390, 768, 1024, 1440 and 1920px plus intermediate/breakpoint widths. Fresh 390px navigations distinguish actual mobile layout from resize state. Browser: desktop Chrome 156, device pixel ratio 1; physical iOS/Android not tested.
- Tested drawer open/close, button hover, process hover/tap, FAQ, scroll sequences forward/backward, reduced-motion sample, pointer image response, numeric work control and reel lightbox. Escape closes the reel lightbox and returns focus; final backdrop is hidden. Actual video playback and exact source easing/durations remain unverified.
- Live Pocket content inspected across primary business pages, sector portfolios and a real article. Conflicting prices/addresses, broken sitemap endpoints and ambiguous case-study hub are recorded.
- Research board rendered in Chrome and visually checked; all 11 images decoded and no horizontal overflow was detected. Artifact checks passed: 25 JSON files parsed, 92 local document links resolved, 145 PNG headers validated, and both CSV schemas checked. Final artifact validation results are saved in [phase-1-checks.json](../output/playwright/phase-1/phase-1-checks.json).
- **Application build/lint/type checks: not applicable.** No app existed at the start, and no application scaffold/components/dependencies were created. Do not mark these checks as passed. Required application checks start in Phase 2 after approval.

## Findings that must survive handoff

- Hero is a still image with animated text/list/thumbnails, not a background video. Desktop navigation is a drawer, not a conventional horizontal link row.
- Main palette is `#09090B` / `#FB4930` / `#F0F0F0`; Inter Display headings, Switzer interface/body and selected Geist paragraphs. Rendered styles take precedence over inconsistent public style-guide labels.
- Characteristic motion includes long held sections, staged services, overlapping scaled/rotated work panels, reel growth and a perspective CTA image strip. Do not replace these with generic reveal animations.
- Fix observed accessibility/mobile defects: drawer Escape/focus/scroll lock, continued thumbnail motion under reduced motion, cramped process cards and overflow. These are documented exceptions to literal fidelity.
- Use genuine production services, projects and testimonials. Omit unsupported AI stack, counters, subscription packages and demo content. Four production stages adapt the reference's three panels.
- Public availability is not asset clearance. Obtain approved originals and licences before shipping; keep reference screenshots out of production assets.

## Gate A decisions and pending inputs

Design recommendations carried forward under the Phase 2 authorisation: retain the reference-style drawer and section rhythm; use a genuine production still for the hero (superseded by the user’s Phase 3 preference for similar original artwork); preserve the real Pocket logo with a separately reviewed large wordmark treatment; adapt the process to four stages and fix the documented accessibility defects. Details and alternatives are in the audit's checkpoint section.

Later content/release inputs: quote-based pricing is approved; current postal/studio address; current team roster/roles/portraits; approved project selections, photography originals, client marks and reel/poster rights; budget options, email provider/recipient configuration and policy review. These do not authorise invented replacement facts.

## Tools and scope

The requested `reverse-engineer-anything` skill is installed at `~/.codex/skills/reverse-engineer-anything` and was read/applied for evidence discipline. REA MCP/CLI was unavailable; inspection used Playwright. No fabricated REA Evidence IDs or paid template source access are claimed. Independent content and motion reviews contributed to the corresponding inventories.

All project changes in Phase 1 are documentation/research artifacts under `docs/` and `output/playwright/phase-1/`, plus Playwright-generated session logs under `.playwright-cli/`. `plan.md` and `phases.md` remain unchanged. No app code, production media migration, live form submission, deployment or external message was performed.

## Exact next action

All eight implementation phases have local handoffs. Continue from [Phase 8 QA](phase-8-qa.md) and [release follow-ups](release-readiness.md), not a new redesign phase. Open technical work: mobile Home Performance 90+, Home/Work LCP ≤2.5s, deployed-host/field validation and physical Safari/Android/screen-reader checks. The preview is at port 3005 with indexing and legacy redirects disabled. Preserve all original media choices until the user provides content-to-section instructions.

Live enquiry activation remains pending a Resend account/API key, verified sender, form secret and exact origin; the approved receiving address is `team@pocketcreatives.co.uk`. Offline/browser mocks do not verify inbox delivery. Resolve asset rights, draft policies, disputed facts and full legacy route migration before production replacement. Phase progression does not authorise deployment.
