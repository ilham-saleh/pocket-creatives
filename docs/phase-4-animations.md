# Phase 4 — Homepage animations

5 November 2026. Scope: original implementation of the relevant homepage motion from [the reference inventory](animation-inventory.md). Phase 5's matched-state comparison and approval checkpoint remain separate. No remaining pages or deployment were started.

## Motion delivered

| Audit | Implementation |
| --- | --- |
| A01 / A04 | Retained the verified Phase 2 drawer/link stagger and split-button wipe, with Escape, focus and scroll locking. |
| A02 | Stable accessible H1 with a reserved visual line cycling captured / filmed / photographed through masked glyphs. Approximately 2.6s dwell, 450ms exit, 600ms entrance and 25ms character stagger; these are tuning estimates, not recovered template constants. |
| A03 | Vertical service-row loop (15s per group) and horizontal work thumbnails (18s per group); duplicate media excluded from keyboard navigation. Pause/resume control, focus pause, thumbnail hover pause, hidden-tab and offscreen pausing. Keyboard thumbnail focus restores the original visible links. |
| A05 | SplitText line masks and staggered upward glyph reveals for the main section headings, 750ms / 18ms stagger. Font/width-aware splitting; already revealed headings do not replay on re-entry. |
| A06 / A14 | Held About statement/background with three real images travelling through it; pointer-follow circle on fine pointers, fixed normal action for keyboard/touch. Copy has a dark backing where imagery passes behind it. |
| A07 | Two real services share a pinned stage; image starts at +80px X, copy at −80px X, with staged opacity and independent looping service lettering. Compact service-selection links make each stage accessible without wheel gestures. Inactive layers are inert and hidden from assistive technology. |
| A08 | Four overlapping work panels. Previous panel scales 1 → .01, rotates 0 → 16° and dims 1 → .2 while the next arrives. Stable outer anchor wrappers and functional numeric selection; keyboard focus restores the relevant card. |
| A10 | Reel grows .5 → 1; Play/Reel converge from ±60px and play icon rises from +166px. Desktop pin; compact mobile travel. Vimeo remains click-loaded. |
| A13 | Closing segmented strip scales 2 → 1 while its images scale .5 → 1, retaining the Phase 3 perspective slices. |
| A14 | Testimonial/service media follows a fine pointer by a small bounded amount (±4px) and scales to 1.05; resets on leave. No touch pointer-follow. |
| A15 | Desktop hover selects/expands a process card; keyboard/native disclosure remains available. Approximately 600ms grid interpolation and 450ms media fade. Mobile keeps readable full-width tap controls. |
| A16 | Native FAQ answer height/opacity transition, 260ms, measured per answer and reversible during rapid toggles. |
| A17 | Retained lazy Vimeo dialog with Escape, focus return and close-time iframe removal. No unverified lightbox entrance was invented. |

A09/A11/A12 remain intentionally absent: the homepage has no approved AI stack, factual counters or confirmed current team cards to animate. No page-transition overlay, sticky navigation, generic background-colour morph, testimonial autoplay or arbitrary image-mask effects were introduced.

## Reference follow-up and tuning

The live reference was inspected again in a browser. [Rendered evidence](../output/playwright/phase-4/reference-dom.json), [motion samples](../output/playwright/phase-4/reference-motion.json) and [About path measurements](../output/playwright/phase-4/reference-about-path.json) preserve that inspection. No paid template source was accessed.

The About follow-up clarified the initial audit: the three images travel naturally past a held background. At a 1,000px viewport their sampled Y positions begin around 1,100, 1,000 and 2,278px and reduce by the section's scroll travel. The implementation now follows those measured desktop offsets instead of the first proposed fade/path. Mobile travel is shortened to 2.2 viewports while preserving the sequence.

Desktop travel uses approximately 3 viewports for About, 3.4 for the two services, 2 for reel growth and 2 for the closing strip. Work cards have 1.8-viewport steps (1.5 on mobile). Mobile services use 2.2 viewports; the closing strip uses .8. These are content adaptations and tuning estimates; compare corresponding stage progress in Phase 5. Scrub settling is approximately .45–.5s. Exact proprietary timing/easing is not claimed.

## Lifecycle, accessibility and cost

`src/components/home/home-motion.tsx` is the small client boundary around server-rendered sections. `src/lib/homepage-motion.ts` owns the scoped GSAP/ScrollTrigger/SplitText setup and teardown. It uses media-query conditions for reduced motion, width, viewport height and pointer capability. React owns explicit pin wrappers; animation teardown restores their classes/styles and removes inserted groups, listeners, splits and late-created tweens.

- No-JavaScript and reduced-motion modes retain the full Phase 3 composition, all services/projects and native disclosures. Reduced motion removes loops, pointer follow and long pin spacing, not just animation duration.
- Short viewports below 700px use normal flow instead of pins that could trap controls outside the viewport. This includes phone landscape and browser zoom that reduces the CSS viewport height.
- Continuous loops stop offscreen, while their interactive area has keyboard focus, and while the tab is hidden. User pause persists through responsive rebuilds for the mounted page.
- Per-frame work uses transforms/opacity without React state updates or animated inherited CSS variables. Bounded process-column interpolation and FAQ answer height are intentional layout exceptions. Text splitting/geometry reads occur at setup or refresh, not every scroll frame. No blanket `will-change`, animated blur or global scroll smoothing was added.
- Cloned thumbnails have no extra keyboard stops; pointer activation preserves the corresponding original destination. Meaningful heading text remains available to assistive technology.

Official API behaviour was checked against [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/). The installed local Next.js server/client guide was read before creating the client boundary.

## Validation

- `npm run lint`, `npm run typecheck`, `npm run build`: passed. [Build log](../output/playwright/phase-4/build.log).
- [Motion checks](../output/playwright/phase-4/motion-checks.json): 33/33 passed. Initial hero readability; moving/paused loops; visible keyboard thumbnails; forward/reverse stage transforms; work scaling/dimming and numeric selection; accessible service selection; process hover; interrupted FAQ; pointer follow/reset; six widths (360–1920px); reduced-motion teardown/restoration; route reload/re-entry; no-JavaScript content; no runtime errors.
- [Touch checks](../output/playwright/phase-4/touch-checks.json): 390×844 touch context, forward/reverse samples across five sections with no horizontal overflow, 366px-wide open process panel, FAQ tap, landscape static fallback, restoration to seven mobile pins and zero runtime errors. This is browser emulation, not physical-device certification.
- [Accessibility scans](../output/playwright/phase-4/accessibility-checks.json): zero axe WCAG A/AA violations in desktop, mobile, open reel and open mobile menu states. Automated scans are not a WCAG certification and do not establish contrast at every intermediate image/opacity state.
- [Heading checks](../output/playwright/phase-4/heading-checks.json) and [complete phrase-cycle samples](../output/playwright/phase-4/phrase-cycle.json): all three phrases cycle, repeat returns to a fully visible first phrase, heading glyphs remain at identity on re-entry and rewrap without overflow.
- [Frame sample](../output/playwright/phase-4/frame-sample.json): desktop Chromium with 4× CPU throttling, two 2.5-second work/CTA scroll samples; 151 frames each, p95 frame intervals 17.5ms and 17.4ms, no intervals above 50ms. This is a bounded local diagnostic, not a mobile-device or whole-site performance claim.
- [Reduced-motion evidence](../output/playwright/phase-4/reduced-check.json) records complete restoration of the stable hero phrase, visible service content and removal of pins/clones/split markup.

Defects fixed during implementation: future phrase tweens initially hid the first phrase; automatically inserted pin wrappers conflicted with development refresh; custom spacer classes survived preference changes; thumbnail focus could land outside its clip; moving About imagery could impair copy contrast. Explicit wrappers, reversible cleanup, controlled initial rendering and dedicated focus handling address these.

## Remaining work

Phase 5 must capture and compare the live reference and implementation at matched widths and corresponding start/middle/end/reverse states, align continuous-loop positions, correct discrepancies and **pause for user approval**. This phase does not claim pixel-perfect or frame-perfect fidelity. Physical iOS/Android, assistive technology, physical-device performance recordings and sustained video/audio playback remain final-QA work. Pending media publication rights and business facts from earlier phases remain pending.

The original generated hero remains unchanged; all portfolio photographs and Vimeo sources retain their recorded provenance. No new template asset was imported.
