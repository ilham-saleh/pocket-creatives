# Implementation plan and approval gates

This document follows the **eight phases in [phases.md](../phases.md)**. [plan.md](../plan.md) supplies the full content, technical and acceptance requirements. Phase 1 was approved on 5 November 2026 and Phase 2 is now complete; see `docs/progress.md` for current state. The reference artifacts remain research evidence, distinct from the new application.

## Phase 1 — Reference analysis

Deliver reference audit, measured design system, animation inventory, content/media inventories, provisional SEO mapping, screenshots, annotated reference board and persistent progress ledger. Inspect all major reference page families, desktop/mobile, and forward/reverse interaction states. Validate evidence files and document gaps.

**Gate A: stop for explicit user approval of the audit and proposed visual/content adaptations.** Do not create the Next.js app, install project dependencies, or implement components before approval. Missing publishing rights/prices/addresses can remain recorded inputs, but no proposed design deviation should be mistaken for an approved one.

## Phase 2 — Foundation

After Gate A, initialise Next.js App Router + React + TypeScript, Tailwind and CSS variables, unless an application has appeared in the workspace since this audit. Reinspect the repository first. Use original code; no Webflow runtime or template source export.

Obtain official licensed font files, keep licence records and verify glyph metrics. Build global layout, split buttons, section labels, chosen navigation/drawer, footer and basic accessible primitives. Establish content schemas and minimal animation lifecycle/reduced-motion utilities. Keep the content available without JavaScript animations.

Checks: run the app; build, type checking and lint; verify keyboard/focus/Escape/scroll locking and footer links; capture 390/1440 shared component views. Record results and remaining issues in `docs/progress.md`.

## Phase 3 — Homepage visual implementation

Build the approved homepage order and all required content using genuine cleared assets. Match static composition first: hero, logo strip, about/benefits, services, work, process, reel, team where confirmed, testimonials, optional real journal, final CTA/footer. No unsupported demo counters, AI tools, team members or stock case studies.

Freeze actual published copy in typed data. Prioritise image focal points, type wrapping, component proportions and desktop/mobile composition. Keep unavailable media explicitly marked in development and out of release-ready claims.

Checks: build/type/lint; run all links; responsive screenshots; media loading and legibility; compare representative sections to the reference. Update progress. Phase 3 is a complete visual homepage, not a first-screen sketch.

## Phase 4 — Homepage animations

Implement relevant approved effects from `docs/animation-inventory.md` using GSAP/ScrollTrigger and CSS where suitable. Recreate sequencing, masked text entrances, marquees, work overlap/scale/rotation, reel scaling, chosen team staging, CTA geometry and hover states. Use no unrelated effects to conceal missing reference behaviours.

Use scoped GSAP contexts, cleanup on route/unmount, `matchMedia` for responsive changes and reduced motion. Let the browser scroll normally; ensure content remains accessible. Do not add Motion unless it solves a distinct need.

Checks: forward/backward scrolling, reload at scroll positions, resize/orientation, hover/tap/focus, reduced motion, navigation cleanup, performance traces for expensive effects. Build/type/lint and progress update.

## Phase 5 — Visual comparison

Capture the reference and implementation at matching viewports and equivalent **section progress**, not just the same absolute scrollY: real content and omitted demo sections change page length. Use 360×844, 390×844, 768×1000, 1024×1000, 1440×1000 and 1920×1000, with intermediate widths and actual mobile device checks when available.

Compare hero, section headings, media crops, buttons, drawer open/closed, work stages, service stage, process active panel, reel scale, testimonial/FAQ, CTA and footer. Capture static settled states and intermediate animation states. For repeating motion, fix a documented phase for screenshots while separately testing the live motion. Save side-by-side artifacts and an intentional-differences list. Tune discrepancies, rerun appropriate checks and update progress.

**Gate B: stop for explicit user approval of the visual comparison before remaining-page implementation.** Passing build checks does not satisfy this gate or demonstrate a visual match.

## Phase 6 — Remaining pages

Build `/work` and `/work/[slug]`, service overview/detail pages, `/about`, `/process`, `/pricing`, `/creative-training`, `/contact`, real journal content if approved, `/privacy-policy`, `/cookie-policy` and framework not-found handling. Use the inspected reference page families.

Portfolio filters are accessible controls using actual populated categories. Project pages show only documented briefs/deliverables/results, falling back to a simple gallery. Preserve important existing sector pages or justify consolidation with migration evidence.

Implement contact validation on client/server, spam controls, real server email delivery and honest delivery failure handling. Agree budget options, recipient and provider; keep secrets server-only. Do not claim success before actual provider acceptance. Preserve enquiry values on recoverable failures. Configure staging to avoid indexing.

Resolve conflicting prices and addresses before publication. Training is bespoke 1:1 in-person; no fabricated course dates/qualifications. Review policy content against actual integrations rather than copying legacy WordPress clauses unchanged.

Checks: build/type/lint; portfolio filter and route tests; navigation; real configured form success/failure tests without sending unapproved live enquiries; metadata, sitemap and redirect fixtures; content/rights validation. Update progress.

## Phase 7 — Responsive refinement

Systematically test all requested widths and intermediate widths across page families. Preserve the reference's actual stacking/crops and the approved accessible exceptions. Check touch controls, long copy, media orientation, focus, form keyboard behaviour, and no horizontal overflow. Add device/Safari checks where available; viewport emulation alone is not a physical-device test.

Checks: responsive visual comparison, mobile menu, all gallery/filter controls, forward/reverse motion and reduced motion. Build/type/lint after fixes; update progress.

## Phase 8 — Final testing and release preparation

Run appropriate Playwright flow tests, keyboard/accessibility review, metadata/link/redirect checks, media checks and representative Lighthouse runs. Target Performance 90+, Accessibility/SEO 95+, LCP ≤2.5s, CLS ≤0.1, INP ≤200ms; distinguish lab estimates from field metrics. Resolve defects rather than promise scores in advance.

Deliver source, deployment guide, environment example, configuration instructions, QA report, final responsive captures, redirect map and unresolved approval list. Verify production domain/canonical and staging indexing settings. Deployment or publication must remain within explicit user authorisation; this Phase 1 task does not authorise it.

## Proposed architecture

- Server-rendered/static page shells and content by default; client islands for menu, filters, gallery/lightbox, enquiry form and GSAP sections.
- Reusable layout, navigation, UI, home, portfolio, services, forms and animation directories as outlined in the main plan.
- Typed `projects`, `services`, `team`, `testimonials`, `clients`, `faqs`, `journal` collections. Store `sourceUrl`, verification date, rights status and approval state with editorial data; keep unapproved entries out of public output.
- `lib/media` handles approved responsive variants, posters and embeds; never pass unbounded external URLs into rendering components. Asset pipeline only after ownership/licensing is recorded.
- Content provenance and route mapping are separate from display components so a later CMS can replace local data.
- Each form route validates inputs and enforces limits server-side; secrets live in deployment environment. Choose provider and spam mechanism when deployment context is known, not during this audit.

## Session handoff rule

Read `plan.md`, `phases.md` and `docs/progress.md` at the start of each later session. Check gate state before work. Record changed files, actual commands/check outcomes, screenshots, intentional deviations, blockers and the exact next action. Never mark a phase complete merely because a summary exists or because the code builds.
