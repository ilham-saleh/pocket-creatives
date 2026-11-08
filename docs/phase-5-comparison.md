# Phase 5 — Homepage visual comparison

5 November 2026. **Comparison complete; Gate B approval pending.**

Open the [interactive comparison](phase-5-comparison.html) to choose a viewport and section state, view the reference beside Pocket Creatives, and open each full-resolution capture. Selected desktop states also offer a Phase 4 before/after toggle. The local production preview is http://127.0.0.1:3005/.

## Method and evidence

The live [Lumifya homepage](https://lumifya.webflow.io/) was inspected again in one reusable, headless Playwright browser, using separate tabs for the reference and implementation. The previously restored Phase 4 code and original media were the baseline. No paid template source or new template asset was imported.

- Matched viewports: **360×844, 390×844, 768×1000, 1024×1000, 1440×1000 and 1920×1000**, browser device scale factor 1.
- The [comparison metadata](../output/playwright/phase-5/comparison-data.json) records **89 paired states**, viewport size, actual scrollY, selected section progress and screenshot paths. The board uses this merged record. The main capture passes are in `captures-a.json` / `captures-b.json`; `cta-refresh.json` and then `responsive-refresh.json` supersede affected local captures after corrections.
- Two drawer reference frames are carried forward from the verified Phase 1 audit at the same 390×844 / 1440×1000 viewports. Fresh replay intermittently omitted letters in screenshots, so the board uses those clearer earlier frames and labels them next to the image. This is a capture limitation, not a claim that the live menu itself is broken. The other 87 reference pairs and all implementation pairs use Phase 5 captures.
- Hero and key service/work/reel/closing states were captured at all six widths. At 390 and 1440, the set additionally covers client trust, benefits, process, testimonials, FAQ, journal, footer, and start/middle/end/reverse states for the held compositions. Work includes first, transition, second, last and reverse states. Additional pairs show the open drawer and expanded FAQ at phone/desktop sizes, plus desktop button hover and second-process-card selection.
- Section-relative progress is used because two Pocket services, omitted demo sections and different copy lengths change the total page height. The first settled service compares reference timeline progress .2 with Pocket .2; the next service compares reference .4 with Pocket .8. These are corresponding service stages rather than equal global distances.
- Repeating GSAP timelines are paused at phase zero for the reference. Pocket's pause control stops its loops; thumbnail/list/service lettering transforms are reset for the screenshots only. Live loop movement and pause/resume are tested separately. Native scrolling, section transitions and scroll-triggered lettering remain active during captures.
- Font loading and image decoding are awaited. The screenshot records show no horizontal page overflow or undecoded images in captured viewports. Reference mobile/tablet reel triggers are absent; those captures use the observed compact section geometry, explicitly marked `fallback` in the source metadata, rather than asserting an unavailable animation timeline.
- [Reference structure](../output/playwright/phase-5/reference-structure.json), [component measurements](../output/playwright/phase-5/component-measurements.json), [settled service measurements](../output/playwright/phase-5/reference-detail.json) and [reel/closing motion samples](../output/playwright/phase-5/reference-motion-states.json) preserve the rendered evidence. Static layout values and observed motion endpoints are distinguished from estimated easing and timings.

This is a visual and behavioral comparison, not a pixel-difference percentage: the photographs, text and supported content differ intentionally. The screenshot review focuses on composition, hierarchy, edges, spacing, image proportions, mobile legibility, collisions and corresponding motion states. The explicit Lumifya brief takes precedence over unrelated randomized art direction or generic design-house rules.

## Corrections

| Area | Phase 4 discrepancy | Phase 5 correction |
| --- | --- | --- |
| Hero intro | Eyebrow line box was 41.6px instead of 33.6px; phone heading gap differed | Matched 32/33.6px eyebrow, 20px following gap and measured desktop/tablet intro offsets; retained Pocket copy and original hero |
| About statement | 48px desktop / 36px tablet / approximately 28px phone; fixed muted closing text | Matched **64/67.2px**, **48/50.4px**, **32/33.6px**, 1,022px maximum measure; characters brighten across the statement and reverse on back-scroll |
| Section markers | 14px text, different punctuation, 48px heading margins | 16px marker text, parenthesized label, slash number, copyright year; **40px desktop heading spacing** |
| Benefits | 14px body copy, narrower measure and wider text gap | 16/24px body copy, up to 398px measure, 12px gap beneath the title |
| Service scene | 448×520px desktop frame and roughly 312×439px phone frame; panel sat too high | **446×418px desktop/tablet**, **270×200px at 390px / 240×200px at 360px**; centered the content group within the held stage and aligned the background lettering |
| FAQ | Right column began at x760 instead of x722 at 1440px | Capped the answer column at 678px, retaining x722 at 1440px and matching x1192 at 1920px; stacked at tablet/phone sizes |
| Featured testimonial | Image began at x680 instead of about x602 at 1440px | Matched the reference's approximately 41/59 column split and 8px gap; stacked at tablet sizes with 400px media, and 200px media on narrow phones |
| Desktop reel | Final image was 660px tall in a 1,000px viewport | Scales from a half-size frame to the full viewport height; sampled midpoint is approximately 75% height near y75, matching the observed reference path |
| Closing strip | The heading stayed pinned with the imagery | Heading now scrolls away while the strip is held; scale begins as the strip enters the viewport, with the observed two-viewport scale/hold span |
| Responsive containers | Tablet and small-tablet containers expanded beyond the reference | Matched 767px / 540px outer caps; checked 480/600/768/991px boundaries. Intermediate service frames use a 350px height |
| Closing wrapper defect caught during review | Flex pin wrapper could collapse to 32px | Explicit full width and non-shrinking stage; verified at all six widths, with refreshed screenshots |

The closing scene uses the reference banner’s measured aspect ratio (approximately 2.578:1) and 80px desktop sticky inset to position the original segmented-photo treatment. Lumifya’s segmentation is baked into its artwork; Pocket retains its existing native five-slice treatment and photograph pending content direction.

The reel uses transforms rather than reproducing the reference's changing layout dimensions. The endpoint sizes and intermediate position are measured; the fitted easing and reading span remain original implementation choices, not recovered template constants.

## Visual review

The first desktop review found the smaller About statement, taller service frame and wide FAQ/testimonial column gaps. The second review confirmed the corrected statement and service composition and identified that the closing heading was held incorrectly. The final phone/desktop review caught and corrected the flex-wrapper collapse. Final evidence is the `final-*` screenshots selected by the interactive board, not intermediate `after-local-*` captures.

The live imagery, service composition, work-panel transition, process selection, reel growth and segmented close retain Lumifya's recognizable visual language. Material content/media differences remain visible and are listed below; no pixel-perfect or frame-perfect claim is made.

## Intentional differences and pending content

- **Original Phase 4 imagery and placements are retained at the user's request.** The generated decorative hero, California Walnuts poster, Samsung SparkBox portrait poster, repeated photographs and other selections remain as restored. Replacements and final art direction await the user's content-to-section instructions. No fresh image selection or inventory promotion occurred in Phase 5.
- Pocket's logo, longer brand treatment, verified client names, original copy and real projects replace template branding, demo logos, fictional projects and article content. Current shorter testimonial excerpts use a larger quote treatment; unverified star ratings are not added.
- Two actual services replace five template offerings; four production stages replace three. Template AI stack, counters, ecommerce/cart and unconfirmed team content remain omitted. Different text lengths alter wrapping and section heights.
- Pause/resume, visible service selection, keyboard/focus handling, contrast adjustments and readable full-width mobile process cards remain deliberate accessibility adaptations. Work panels leave space for complete controls rather than filling the viewport edge to edge. The compact mobile reel remains distinct from desktop.
- Reel and About reading spans adapt to Pocket content. Exact proprietary easing, continuous-loop timing and every intermediate opacity/crop are not claimed to match frame for frame.
- Media publication permissions, confirmed business facts, remaining page routes, enquiry delivery and final release QA remain the previously documented later work. Physical iOS/Android, assistive-technology and sustained video/audio validation have not been certified by these browser captures.

## Validation

- `npm run lint`, `npm run typecheck` and `npm run build -- --webpack`: passed. [Build log](../output/playwright/phase-5/build.log). No dependencies changed.
- [Live component comparisons](../output/playwright/phase-5/matched-component-checks.json): **30/30 passed** across the six viewports. Type/leading tolerance is 0.1px, frame dimensions 0.5px, desktop column edges 1px, and hero eyebrow Y 5px. The 768px reference eyebrow sample differs by approximately 3.8px; other sampled eyebrow positions match.
- [Refinement checks](../output/playwright/phase-5/refinement-checks.json): **14/14 passed**. Reversible About brightness, measured reel midpoint/full-height endpoint, closing heading exit and non-collapsed strip, and ten widths including 600/991/992/1280px.
- [Motion regression checks](../output/playwright/phase-5/regression/motion-checks.json): **33/33 passed**, including live loops, pause/resume, forward/reverse transitions, work/service controls, keyboard, responsive rebuilding, reduced motion, route re-entry, no-JavaScript content and no runtime errors.
- [Accessibility scans](../output/playwright/phase-5/regression/accessibility-checks.json): **zero axe WCAG A/AA violations** in four settled desktop/mobile/menu/reel states. The menu scan awaits completion of its CSS entrance rather than sampling an arbitrary one-second point. This does not certify contrast at every transient animation frame or replace assistive-technology review.
- [Touch checks](../output/playwright/phase-5/regression/touch-checks.json): 390px touch emulation, forward/reverse samples, readable 366px process selection, working FAQ tap, no overflow, landscape fallback, restoration to seven mobile pins and no runtime errors.
- [Review board checks](../output/playwright/phase-5/board-checks.json): all six viewport options, loaded desktop/phone image pairs, before/after switching, no overflow and no runtime errors.
- [Artifact checks](../output/playwright/phase-5/artifact-checks.json): all 89 pairs / 178 linked screenshots have matching dimensions and existing files. JSON/document links are checked. The original content, photo assignments, media manifest, 1,338-row inventory and both requirement files match the Phase 4 baseline. All 14 original media hashes passed `media:setup`.

The automated checks support the specific results above; the interactive side-by-side review is the visual evidence. Physical devices, whole-site performance and final publication clearance remain later work.

## Approval checkpoint

The phase sequence requires: **“Pause for my approval after Phase 1 and Phase 5.”** See [phases.md](../phases.md). Review the comparison board and corrected homepage before approving Gate B. Phase 6 remaining-page implementation has not started.
