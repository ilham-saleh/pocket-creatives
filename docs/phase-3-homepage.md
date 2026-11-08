# Phase 3 — Homepage visual implementation

Completed 5 November 2026. Scope follows `phases.md`: homepage composition and functional controls; homepage scroll timelines remain Phase 4. No deployment or remaining-page implementation occurred.

## Delivered

The root route now renders the complete homepage: hero, client names, about, three benefits, two service compositions, four selected-work panels, four production stages, showreel, testimonials, FAQ, journal and closing image-strip CTA, with the shared header/drawer/footer.

The visual structure follows the Phase 1 rendered reference: dark canvas, orange split buttons and accents, Inter Display/Switzer/Geist roles, measured heading scales, oversized wordmark, tall rounded imagery, repeated service lettering, large numbered work panels, expanding process cards, two-column testimonial/FAQ compositions and perspective CTA slices. The image strip is one continuous Pocket photograph across five slices. Relevant static sections were visually reviewed against the Phase 1 contact sheets; screenshots are linked below. This is not a claim of pixel equivalence or completion of Phase 5.

The hero uses an **original generated portrait**, following the user's preference for a similar image rather than the uncertain template asset. [Media provenance](homepage-media.md) records its file, generation method and [complete prompt](hero-image-prompt.txt). No Lumifya raster or paid source was copied into the app. Genuine Pocket photographs, behind-the-scenes work and official Vimeo posters populate the remaining media slots.

Homepage data is separated in `src/content/home.ts`; presentation is in `src/components/home/` and `src/styles/home.css`. `HomePhoto` provides responsive Next Image rendering, blur placeholders and lazy loading; the hero loads eagerly. Closed process images use intrinsic dimensions to avoid zero-height fill warnings. A reproducible download/hash-verification command and source manifest support private candidate setup.

## Functionality and content decisions

- Work/Services navigation now targets real homepage sections. Project numbers and hero thumbnails have existing anchor targets. Other destinations lead to current Pocket pages or actual Vimeo films until Phase 6.
- Four process disclosures and FAQs work with keyboard and without JavaScript. Mobile process cards stack at readable widths. Phase 4 will add observed motion while preserving this fallback.
- The Radix showreel dialog mounts its iframe only after activation, locks background scrolling, supports Escape and focus return, removes the player on close, and exposes a direct Vimeo fallback. Actual sustained playback/audio quality was not certified.
- California Walnuts and Samsung use verified film titles. Beauty and food are honestly labelled photography collections. No invented client briefs, results, budgets, dates or review scores were introduced.
- Exact short testimonial excerpts retain named attribution. Related journal links are real; the chosen Pocket illustrations are not asserted to be the original article covers.
- Unsupported stack/counters, disputed pricing and unconfirmed team members are omitted. Client names replace uncleared logo artwork. Four production steps adapt the reference's three.
- Existing Phase 2 button/menu transitions remain. New homepage scroll reveals, pins, service staging, work-panel transforms, reel growth, moving thumbnails and CTA motion are intentionally Phase 4, not substituted with generic effects.

## Checks and evidence

- `npm run media:setup`: 14 candidate hashes verified.
- `npm run lint`, `npm run typecheck`, `npm run build`: passed. [Build log](../output/playwright/phase-3/build.log). The restricted build environment stalled; rerunning the same build with permitted local workers completed successfully.
- [Homepage browser checks](../output/playwright/phase-3/home-checks.json): **42/42 passed**. Widths 360, 390, 600, 767, 768, 991, 992, 1024, 1280, 1440 and 1920px; zero document overflow and heading overflow; mobile process widths and About image/copy separation; one H1; all fragment targets; process/FAQ keyboard controls; deferred iframe/dialog/focus/scroll lock; menu-to-section focus; all 27 currently visible images decoded; reduced-motion content; no-JavaScript fallbacks; no application runtime errors.
- [Skip-link check](../output/playwright/phase-3/skip-link-check.json): visible on keyboard focus and transfers focus to main content.
- [Accessibility scans](../output/playwright/phase-3/accessibility-checks.json): zero axe WCAG A/AA violations in desktop, mobile, open reel and mobile drawer states. Manual image-background contrast review and real assistive-technology testing still belong to final QA; automated scans are not WCAG certification.
- [Production checks](../output/playwright/phase-3/production-checks.json): enabled homepage/foundation return 200; disabled previews and unknown route return 404; noindex headers/metadata present; all **13** unique existing Pocket homepage destinations returned 200.
- [Desktop screenshot](../output/playwright/phase-3/production-desktop.png), [mobile screenshot](../output/playwright/phase-3/production-mobile.png), [desktop full page](../output/playwright/phase-3/production-desktop-full.png), [mobile full page](../output/playwright/phase-3/production-mobile-full.png), [section review board](../output/playwright/phase-3/review-board.html). Additional section screenshots are in that directory.

The visual review found two defects missed by the initial generic overflow check: desktop `:has()` specificity prevented process stacking on mobile, and floating About photography overlapped the summary. Both were corrected and dedicated checks added. Decorative service lettering was raised to a readable contrast after the first axe scan. A closed-disclosure image warning and misleading third-thumbnail destination were fixed. The skip link now remains visually hidden until keyboard focus, including in oversized element captures.

## Limits and handoff

This is a private design preview. Rights for selected real photographs, Vimeo posters/embeds and current business details remain pending as documented in [media provenance](homepage-media.md). The generated portrait is decorative artwork, not a Pocket campaign. `ENABLE_HOMEPAGE_PREVIEW=true` enables production review; the default is 404. Flags and noindex are not access control; do not publish candidate build assets.

No physical iOS/Android, assistive-technology, performance budget/Lighthouse or complete playback certification has been completed. Static compositions use normal page flow; scroll lengths and state-dependent layouts will change with Phase 4. Phase 5 must compare corresponding animation states and matched viewports, then pause for user approval. No new approval gate is imposed at Phase 3.

Next: **Phase 4 — Homepage animations**, when requested. Use `docs/animation-inventory.md`; preserve accessible fallbacks, reduced motion, reversible timelines and responsive cleanup. Do not start remaining pages before the Phase 5 approval checkpoint.
