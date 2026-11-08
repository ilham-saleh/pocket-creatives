# Lumifya animation inventory — Phase 1

Audited 4 November 2026. Reference: [Lumifya live preview](https://lumifya.webflow.io/), reached from its Webflow listing. This is a specification for a later original implementation, not copied template animation code. Phase 4 implements the approved effects; Phase 5 compares them visually and requires approval.

## Evidence and confidence

- [Desktop interaction measurements](../output/playwright/phase-1/lumifya-interactions.json): actual rendered transforms, opacity, dimensions and FAQ states. The probe scrolled forward through `0, .25, .5, .75, 1`, then back through `.5, 0` for each long section.
- [Desktop screenshot contact sheet](../output/playwright/phase-1/desktop-contact-sheet.png) and [mobile contact sheet](../output/playwright/phase-1/mobile-contact-sheet.png): reference pixels at section start, middle and late positions where relevant.
- [Focused follow-up measurements](../output/playwright/phase-1/lumifya-additional-interactions.json): button background wipe, CTA scale reversal, mobile card selection, mobile FAQ and reduced-motion samples.
- [Final interaction checks](../output/playwright/phase-1/lumifya-final-interactions.json): numeric work control click, reel lightbox focus/Escape, testimonial image pointer response and one heading replay check.
- [Fresh mobile page loads](../output/playwright/phase-1/lumifya-mobile-pages.json) at 390×844 confirm mobile geometry independently of desktop resizing.
- [Responsive measurements](../output/playwright/phase-1/lumifya-responsive.json), [390px styles](../output/playwright/phase-1/lumifya-home-390-styles.json), [1440px styles](../output/playwright/phase-1/lumifya-home-1440-styles.json).
- [Public interaction guide, captured with internal pages](../output/playwright/phase-1/lumifya-pages.json): corroborates pointer-follow imagery, expanding cards and counters, but its claims are not substitutes for observed behaviour.

**Measured** below means sampled in the rendered browser. **Observed** means visible in the captured states. **Estimate** means a starting value to tune later, not the template's verified configuration. Exact easing functions, internal timeline positions and frame-perfect durations have not been recovered. Scroll-driven effects have a travel interval, not a fixed playback duration.

The desktop interaction probe waited 100, 200, 300 and 600ms consecutively for menu/button samples: nominal cumulative times are 100, 300, 600 and 1,200ms, plus browser/tool overhead. These are broad timing bounds. Scroll samples waited 600ms; delayed scrub interpolation can still be settling. Compare corresponding **section progress**, not one global pixel offset, after Pocket Creatives content changes page height.

## Header, hero and common controls

### A01 — Menu drawer and staggered navigation

**Trigger/type:** click menu icon; time-based entrance. Desktop panel slides left from beyond the right edge, measured `translateX(500px) → 0` at a 500px panel width. Links begin at `translateY(20px), opacity:0` and rise to `0, opacity:1` sequentially after the panel starts arriving. The panel is nearly settled by the nominal 600ms sample; links are still sequencing around 1,200ms. Overall estimate: about 0.6s panel motion and 1–2s including links, with decelerating motion; exact ease/stagger unverified. Closing reverses the drawer direction; scrolling backward is irrelevant.

**Mobile:** full-width 390px drawer, reduced text sizes and the same numbered links. [Settled mobile menu](../output/playwright/phase-1/lumifya-menu-390-settled.png); [desktop active state](../output/playwright/phase-1/lumifya-menu-1440-active.png). Escape did not close the reference menu in the inspection and body overflow remained `visible`; reproduce the visual transition while adding proper Escape handling, focus containment/return and background scroll locking. These are deliberate accessibility corrections.

**Implementation:** one GSAP open/close timeline with interrupted/reversed transitions handled safely. A real button controls an accessible navigation/dialog structure; never use the reference's generic clickable container semantics.

### A02 — Hero rotating service phrase

**Trigger/type:** time-based loop after load. The final line changes among service phrases through character/word motion in a bounded text window. Captures show different active phrases while the introductory text stays in place. Movement is vertical within the line; character splitting is observable in the DOM. Exact travel, dwell, duration and easing remain unverified; do not assign an allegedly exact carousel interval from screenshots. The sequence is independent of backward scrolling.

**Mobile:** the same changing line is retained at a smaller type size. Use genuine Pocket Creatives service phrases only. Ensure accessible text is not repeatedly announced; reserve line height so phrase changes do not shift the layout. The hero background is a **still image**: no video/iframe nodes were found in the homepage media inventory. A showreel background would be a separately approved content adaptation.

### A03 — Hero service list and thumbnail strip

**Trigger/type:** continuous time-based movement. The right-side list moves vertically through repeated service rows with fade masks near the edges; the lower image strip moves horizontally through repeated thumbnails. Their visible positions change between captures while page position is held. Repetition is a loop rather than a one-shot entrance. Exact pixels/second and whether list/phrase cycles share one timeline are unverified; no backward-scroll reversal should be inferred.

**Mobile:** list becomes a block below hero copy and above the horizontal thumbnail strip. The fresh 390×844 load confirms a 1,000px hero: it extends below the first viewport rather than fitting exactly to its height. The large wordmark starts near the bottom edge of that viewport. [Fresh mobile hero](../output/playwright/phase-1/lumifya-home-390-fresh.png). Keep masks inside a clipped wrapper, not page overflow. Use approved work stills, not template portraits.

### A04 — Split CTA button hover

**Trigger/type:** pointer hover on a two-part button (42px square arrow plus adjacent text block at desktop). A white background layer wipes left-to-right over the orange text block: measured X `−111.969px → 0`, exactly its approximately 112px width. The arrow square stays orange. The sampled text wrapper colour transitions toward black; no positional text swap was established. Leaving restores the white layer to `−111.969px`. It is settled by the nominal cumulative 600ms sample; approximately 0.5–0.7s is an evidence-based duration estimate with tool overhead, while the exact easing remains unverified. Arrow-layer geometry exists but its detailed path animation is not reconstructed.

**Mobile:** keep the link action immediately usable without hover. No scroll reversal applies. Proposed implementation is a small CSS or GSAP transition with equivalent focus styling; static final appearance under reduced motion. Recreate arrow geometry in original SVG/CSS, not a copied Lottie asset.

### A05 — Scroll-triggered heading reveals

**Trigger/type:** headings entering the viewport. Captures show portions of letters clipped by their line masks before the whole heading is visible; DOM exposes separate letter and mask nodes. This is a staggered upward reveal, approximately one glyph/line height of travel, rather than a whole-section fade. Exact reveal threshold, duration and easing are unverified; use 0.6–1.0s only as an **implementation tuning estimate**. Some captures intentionally caught partial reveals, not permanently missing text.

**Mobile:** same reveal language at smaller sizes; line wrapping must be remeasured after fonts load and viewport changes. For the sampled Advantage heading, letters remained at identity transform/opacity1 after leaving the section and at both the 100ms return sample and settled return; no replay was observed for that heading. This does not establish the policy for every heading. Implement only the observed relevant headings, keep semantic text intact and show all text without JS/reduced motion.

## Homepage scroll sequences

| ID / section | Trigger, start → finish and movement | Timing, sequence and reversal | Mobile and proposed adaptation |
| --- | --- | --- | --- |
| A06 About statement | Scroll through a long pinned composition. Large centered statement stays over a dark background; a smaller rounded image enters through the composition and is absent at the late capture. Circular CTA appears separately. | Captured desktop section height 4,000px with a 1,000px viewport. Image path/distance and exact easing remain unmeasured; do not mistake pointer position for scroll movement. Statement/image states are observed, full path still requires tuning. | Pin/image composition also appears at 390px; the fresh section measures 3,376px and text is much smaller. Replace background and images with approved production media. Keep a conventional visible About link on touch. |
| A07 Services presentation | Pinned sequence of central portrait media, description and small service tags over a full-width repeating service-name marquee. Five template services transition in order. Samples show media `translateX(80px) → 0` and information starting at `-80px`; current service layers fade in/out. | Desktop section was about 12,069px high. Main selection follows scroll and restores the first service when reversed. Horizontal marquee continues advancing even on the reverse pass: its loop is time-based, not reversed by scroll. Exact transition boundaries/dwell are unverified. | The portrait/description stays centered on mobile and tags wrap into fewer columns; the fresh mobile section measures 10,181px. Adapt to the two confirmed core services; shorten travel in proportion to content, subject to approval, rather than inventing five services. |
| A08 Featured work stack | Large overlapping project panels. As the next rises into view, the previous scales down, rotates clockwise and dims. First panel: scale≈1/rotation0/opacity1 → scale≈0.01/rotation≈16°/opacity0.2 at late sampled progress. | Scroll-linked, sequential. Measured return near scale1/opacity1 on reverse confirms reversibility. Large desktop section around 8,941px. The near-zero end scale is an offstage state, not a target thumbnail size. Exact scrub ease is unverified. | 390px states show vertically arranged panels with compact overlaid project metadata and numeric controls. Keep information readable and add keyboard/touch equivalents for any project selectors. A desktop click on numeric control 2 left scrollY at 18,549.5px and the URL unchanged; a functional carousel/scroll selector was not established. [Post-click state](../output/playwright/phase-1/lumifya-work-control2-1440.png). |
| A09 Stack typography | Several words rise into a central stage, scale up and fade as the next arrives. Measured text scales from `.7` through about `1` to `4`; opacity goes `0 → 1 → 0`. Starting Y offsets differ by item (e.g. ~163px, 260px, 358px, 570px). | Scroll-linked staggered sequence. Reverse samples change back toward earlier states but show substantial settling lag; exact scrub duration not verified. Captured desktop section about 4,085px. | Effect remains in mobile captures but the result is visually sparse. Template AI tool names are unsuitable agency content; omit this section unless genuine production capabilities provide an approved use for the treatment. |
| A10 Reel reveal | A rounded media rectangle scales `.5 → 1`; “Play” and “Reel” words converge from approximately +59px and −60px X. Central play link rises from about +166px Y toward zero. | Scroll-linked sequence with scale preceding converging words/play control. Reverse samples restore `.5` and separated words. Desktop section about 4,029px; fixed duration/ease unverified. | The fresh mobile load measures a compact approximately 620px section, with a visible reel panel. Use a real showreel poster plus explicit play action; do not preload multiple third-party videos. |
| A11 Counters | Digits roll vertically into final statistics, visible as odometer columns. | Entrance-driven numeric sequence; screenshots include mid-roll and settled states. Exact digit travel, stagger and reverse policy were not isolated. No factual statistics may be inferred from this animation. | Cards stack vertically. Omit template counts/retention claims unless Pocket Creatives approves real figures. A static factual credibility block is preferable to invented numbers. |
| A12 Team cards | Portrait cards enter upward at different offsets in a pinned desktop composition. First sampled card Y≈173px→0; second Y≈1,185px→0. | Scroll-linked stagger; reverse samples recover ~172px and ~1,181px, confirming reversibility within sampling tolerance. Desktop section about 4,069px. Exact scrub ease unverified. | Mobile shows a simple vertical list; the fresh mobile section measures 1,269px, with no comparable 4,000px stage. Use confirmed people/portraits only; retain natural reading order and reduce/remove pinning on narrow screens. |
| A13 Final CTA image strip | Wide segmented image presentation with rounded panels in perspective. Measured outer banner scale `2 → 1`; image-cover scale `.5 → 1`. Screenshots show the strip's perceived curvature/spacing changing during the stage. | Scroll-linked; samples restore `2/.5` on reverse. An initial pass gives halfway forward `1.8344/.5828` and reverse `1.8326/.5837`; a focused later pass gives outer scale `1.239` in both directions. This confirms reversal but also shows why sampling delay/refresh geometry must be controlled before assigning exact midpoint targets. Exact perspective, rotation angles and easing are not established. Desktop section about 3,327px. | The same strip persists at 390px, with a large amount of blank pinned travel. Preserve the composition using approved imagery; make any travel reduction an explicit mobile/accessibility adjustment. |

The recorded section heights are **reference observations at the captured viewport**, not proposed hard-coded production heights. Some pin geometries shift during refresh; `y` in the interaction evidence records the actual sampled scroll position. Tune stable section-relative start/end anchors after real media, fonts and Pocket Creatives copy are present.

## Pointer and disclosure interactions

### A14 — Circular image/About actions and pointer-responsive media

The About circle follows the pointer and scales/fades into view: measured scale0/opacity0 outside its active state to scale1/opacity1. Its sampled X≈1,348px is a location near the last pointer position, **not** a scroll travel requirement. The public interaction guide also describes cursor-follow imagery; service images and testimonial media expose the corresponding rendered classes. A targeted testimonial-media probe confirms that its inner image scales to about 1.05 and follows the pointer slightly: left sample X/Y≈−2.38/−1.58px, right≈+2.34/+0.77px, center≈+0.03/+0.01px. The wrapper remains untransformed. These samples establish direction and approximate observed displacement, not maximum travel or global settings for other images; no rotation was observed in this probe.

**Timing:** smoothed follow, exact lag/ease unverified; sequence/reverse-scroll not applicable. **Mobile:** replace cursor following with a visible fixed action. **Implementation:** pointer movement updates transforms only for fine pointers; the ordinary link remains available to keyboard and touch users.

### A15 — Expanding process cards

**Trigger/type:** pointer enters a different process card; time-based horizontal expansion plus active media/content swap. At 1440px, initial widths were approximately `672 / 336 / 336px`; hovering card two yielded `336 / 672 / 336px`. Height remained 598px. The active image and lower description/number treatment move with selection. Hovering a different card selects it; this is not a scroll-scrub animation. The 800ms post-hover sample was settled, so duration is bounded by that sample plus overhead; approximately 0.4–0.8s is a **tuning estimate**, and the exact easing is unknown.

**Mobile issue observed:** the three items stack but preserve narrow width proportions: the first is about 183px wide inside a 366px content area at 390px, with very cramped wrapping. Selecting the second card was tested at 390px and exchanged widths `183/91.5/91.5 → 91.5/183/91.5px`; the width defect persists after selection. [Mobile evidence](../output/playwright/phase-1/lumifya-390-process-section-0.png). This defect must not be reproduced. Use full-width, tap/keyboard-operable cards or disclosures, retain imagery/numbering, and preserve the required four Pocket Creatives stages. [Desktop hover state](../output/playwright/phase-1/lumifya-process-hover-1440.png).

### A16 — FAQ accordion

**Trigger/type:** click question; time-based disclosure. First answer height measured `0 → 72px` on desktop, with an open state applied; other answers remained collapsed. Plus/open indicator accompanies disclosure. Exact duration/ease not isolated; 0.2–0.35s is a **tuning estimate**, not a recovered value. Closing reverses disclosure; backward scrolling should not change the selected question. [Open state](../output/playwright/phase-1/lumifya-faq-open-1440.png).

**Mobile:** same stacked questions under the introduction; the first opened answer measured 177.5px tall at 390px versus 72px on desktop. Implement semantic buttons, `aria-expanded`, controlled answer regions and normal document flow; no fixed 72px answer height.

### A17 — Reel lightbox

Clicking the reel trigger opened an Embedly iframe carrying a YouTube embed; focus moved to the lightbox close control. Pressing Escape returned focus to the reel trigger. A subsequent [computed visibility check](../output/playwright/phase-1/browser-environment.json) confirms the retained backdrop is hidden (`display:none`, `opacity:0`). Exact opening/closing timing and actual video playback remain unverified. Use a lazy-loaded approved Pocket Creatives Vimeo embed with real controls, accessible close/Escape/focus return, and no unmuted autoplay. Do not recreate the demo's YouTube URL.

## Effects not established by this audit

- No route-wide animated page transition was established by navigation captures. Do not add an elaborate transition overlay on that assumption.
- No sticky navigation was established: header measurements show `position:absolute`. Do not invent a hide-on-scroll header.
- Testimonials are a static editorial grid in the captured homepage, not an observed autoplay slider. Retain that composition unless an accessible manual slider is approved separately.
- Background artwork and dark panels change by section; no general animated page-background colour morph was established. Do not add one.
- Specific image clip-path morphing was not established. Text masks, rounded media clipping and transforms are confirmed; they do not prove arbitrary image mask animation.
- Numeric work control 2 produced no detected scroll or URL change in the tested state; clarify intended control behaviour before reproducing it. Actual lightbox playback still needs confirmation; post-Escape hiding is confirmed.
- Pointer-response bounds beyond the sampled testimonial image and replay behaviour beyond the sampled Advantage heading remain unverified. Precise phrase dwell, easing and scrub timing need visual tuning in Phase 4; these bounded gaps do not justify unrelated effects.

## Reduced motion and implementation checks

The template's public interaction guide claims reduced-motion support, but the focused browser probe shows **partial support**: the rotating heading/list transforms were absent and their sampled states remained stable, while the thumbnail marquee continued moving from X≈−79.8px to X≈−186.7px between samples. All rotating phrase nodes became visible in the DOM layout, which may create overlapping content. This is a bounded homepage observation, not a complete reduced-motion audit. The Pocket Creatives implementation must correct these behaviours and:

1. Display complete headings, service copy, projects and CTAs without motion or JS-dependent visibility.
2. Stop looping word/list/image marquees; show a stable phrase and representative images.
3. Remove scrubbed scale/rotation, pointer following and long pin spacers. Render the same meaningful content in natural flow.
4. Make menu, FAQ, card selection and lightbox changes immediate or use a very short opacity change; preserve all functionality.
5. Use GSAP contexts with cleanup, responsive match-media conditions and font/media-aware refresh. Scope transforms to relevant elements and reserve media dimensions to prevent layout shift.

For Phase 4, verify normal and reduced motion at 360/390/768/1024/1440/1920px, test forward and backward travel, interrupted menu toggles, keyboard focus, touch selection and returning from project routes. For Phase 5, capture each relevant section at start, middle, end and reverse-middle with matching viewport and motion settings. Continuous marquees must be compared at equivalent loop positions. No pixel-perfect or behaviour-perfect claim is justified by the present research alone.


## Phase 4 implementation status — 5 November 2026

The relevant homepage effects are now implemented. See [the Phase 4 report](phase-4-animations.md) for the A01–A17 mapping, measured endpoints versus tuning estimates, responsive adaptations and validation. A09/A11/A12 remain omitted because their corresponding factual content is unapproved/absent. The live About follow-up established three image paths through a held background; its measured offsets supersede the earlier unresolved path estimate. Phase 5 matched-state comparison and user approval remain outstanding.
