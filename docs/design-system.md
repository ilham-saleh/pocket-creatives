# Lumifya design system — measured reference specification

Measured 4 November 2026. The Phase 2 implementation now maps these values into shared tokens/components; see [foundation report](phase-2-foundation.md) for validation and deliberate differences. Sources: [live reference](https://lumifya.webflow.io/), [style guide](https://lumifya.webflow.io/utility/style-guide), [1440px computed styles](../output/playwright/phase-1/lumifya-home-1440-styles.json), [responsive measurements](../output/playwright/phase-1/lumifya-responsive.json), [fresh mobile pages](../output/playwright/phase-1/lumifya-mobile-pages.json).

## Evidence rules

**Measured** means computed browser style/geometry at the stated viewport. **Observed** means visible in a captured state. **Proposed** means our original implementation decision. The public style-guide labels are not automatically the production CSS values. In particular, it lists a 105% H2 line height and a Lato small-text example; the homepage's actual H2 uses 115%, with Switzer in section labels.

## Colour

| Role / proposed token name | Value | Evidence |
| --- | --- | --- |
| `canvas` | `#09090B` | Measured body background |
| `accent` | `#FB4930` | Measured orange control fills; also public guide |
| `heading` | `#F0F0F0` | Measured H2 and other display text |
| `white` | `#FFFFFF` | Measured wordmark/body defaults and hover reveal fill |
| `paragraph-muted` | `#CECECE` | Measured selected Geist paragraphs |
| `menu-muted` | `#6E6E6E` | Measured small menu numbering |
| `menu-surface` | `#000000` | Measured drawer |
| `card-surface` | `#18181B` | Measured benefits/process cards and service tags |
| `section-rule` | `#222227` | Measured 1px section-label rule |
| `card-rule` | `rgba(255,255,255,0.1)` | Measured 1px benefits/process/testimonial borders |
| Guide-only dark | `#121212` | Listed guide swatch; do not apply universally |
| Guide-only gray | `#5F5F5F` | Listed guide swatch |
| Guide-only warm whites | `#FEFFF8`, `#F6F8E9` | Listed guide swatches; not the homepage canvas |

Reference section canvases largely stay dark. The spectacular colour changes come from the photography and overlays, not evidence of a site-wide light/dark background switch. Do not invent alternating cream sections or purple gradients. Component-specific surfaces are recorded below, rather than inferred from the guide-only swatches.

## Typography

### Families and acquisition

- **Inter Display**, browser alias `Interdisplay`: headline/wordmark family; 700 dominates; 600 on buttons. Obtain independently from [the Inter project](https://rsms.me/inter/), which identifies the [SIL OFL](https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt). Preserve licence files and use the display optical design. Do not copy the reference's CDN font files.
- **Switzer**: body, interface and labels; loaded 400, 500 and 600. Obtain independently from [Fontshare](https://www.fontshare.com/fonts/switzer). The official [ITF Free Font License](https://www.fontshare.com/licenses/itf-ffl) permits commercial use and self-hosting, but is not the OFL and restricts modification/redistribution. Use official webfont files, preserve applicable terms, and do not assume arbitrary subsetting or public font redistribution is permitted. The template's generic “Google Fonts/open source” description is not sufficient evidence for Switzer.
- **Geist** appears in selected `.text-learge` paragraphs (16/24px); use a separately licensed official distribution if retaining that exact tertiary text treatment. It is not the default body family. Final font-file version/metric equivalence remains a Phase 2 verification item.

### Rendered scale

| Element | Desktop, ≥992px in sampled widths | Tablet, 768–991px | 480–767px | ≤479px |
| --- | --- | --- | --- | --- |
| H2 | 64px / 73.6px, 700, −1.28px tracking | 42 / 48.3px | 36 / 41.4px | 32 / 36.8px |
| H3 / hero statement | 48px / 55.2px, 700 | 36 / 41.4px | 32 / 36.8px | 28 / 32.2px |
| Hero wordmark | 187.2 / 196.56px at 1440; 249.6 / 262.08px at 1920 | 99.84px at 768 | 78px at 600 | Computed 72px floor |
| Body default | Switzer 16px / 20px, 400 | Same sampled default | Same | Same |
| Selected paragraphs | Geist 16px / 24px, 400, −0.16px | Verify component | Verify component | Verify component |
| Button label | Inter Display 14px / 14px, 600, −0.14px | Same visual treatment | Same | Same |
| Desktop drawer link | Inter Display 32px / 41.6px, 700, −0.64px | Drawer adapts | Narrow-screen labels reduce | See fresh menu capture |
| Desktop FAQ question | Inter Display 24px / 32.4px, 700, −0.48px | Verify component | Verify component | Smaller stacked presentation |

The wordmark measurements fit a 13vw scale with a 72px floor in this range; that formula is an **inference**, not recovered source. On the phone the thumbnail area dominates the lower hero, and the desktop-sized wordmark presentation does not simply shrink into the first viewport. Preserve actual placement from the fresh mobile capture. Pocket's much longer name requires a separate content-fit decision, not blindly applying 13vw.

Internal generic page banners use a 155px-class title treatment on desktop (public guide and rendered page samples); the project detail title is smaller than that banner. Avoid one H1 size for every page type. Keep semantic H1 content meaningful to Pocket rather than making the brand name the only useful search heading.

## Layout and spacing

| Property | Measured / observed reference |
| --- | --- |
| Main container | Maximum outer width 1900px; centered; horizontal padding 40px at desktop |
| Responsive gutters | 32px at 768–991; 24px at 480–767; 12px at ≤479 |
| Header | Absolute at page top; 24px vertical padding on desktop; total sampled height 96px. It scrolls away; sticky header is not the default reference |
| Desktop hero | 1440×1000 capture: hero height 1000px, left content x40, image covers entire area, wordmark/thumbnails near lower edge |
| Mobile hero | Long vertical composition, not a compact first screen; fresh-load geometry is in the mobile page JSON. Do not assume resized desktop height establishes `100dvh` |
| Ordinary section rhythm | Many sections separated by roughly 120–140px on desktop; section metadata has a fine top rule, orange star, left label, center number and right year |
| Pinned sections | About ~4000px; services ~12069px; work ~8941px; stack ~4085px; reel ~4029px; team ~4069px; CTA ~3327px in the initial 1440×1000 capture. These are observed scroll spans, not universal CSS heights |
| Process | 1360px available at 1440; three panels with 8px gaps; hovered panel ~672px, others ~336px; height ~598px |
| FAQ | Two balanced columns at desktop; questions on right, introductory title/action on left; stacked mobile |
| Journal | Lead story approximately half row width, two smaller stories beside it; stacked phone |
| Testimonials | Featured quote/image pair, then four smaller entries; stacked phone; no evidence of a carousel requirement |

Proposed reusable spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 60, 80, 120, 140px. This is an implementation abstraction over observed measurements, not a claim that the original source declares those tokens. Keep component-specific values where fidelity requires them.

## Components

### Split action

The primary action consists of a separate 42×42px arrow tile and a text tile, separated by a small gap. The text has 12px vertical / 20px horizontal padding. Both have 4px corners. Base fill is `#FB4930`; a white layer travels horizontally across the text tile on hover. The sampled label-width travel is about 112px for “Contact Us”; the eventual component must use its own label width, not that fixed distance. Arrow movement is a separate effect. Use an original SVG arrow and CSS/GSAP implementation, not the template's Lottie payload. Expand the accessible hit target to at least 44px where needed without distorting the visible 42px control.

### Header / drawer

Keep original Pocket logo proportions. The reference's right drawer is black, fixed, 500px maximum width, 32px desktop padding, and viewport height. Numbered links have fine separators. A clear close icon is at the top. Sliding panel and staggered links are separate animation stages. Add semantic button labels, focus containment/return, Escape and background scroll locking; these are deliberate improvements to the observed reference.

### Media, cards and labels

Rounded media corners are used selectively, particularly broad project frames and process panels. The site is not a uniform rounded-card grid: large full-bleed imagery, ruled metadata and borderless text carry much of the composition. Preserve each sampled component's radius in Phase 2/3; do not give all components the same radius. Use `object-fit: cover` with deliberately chosen focal points. Template image subject matter is not a Pocket art direction requirement.

[Desktop surface measurements](../output/playwright/phase-1/lumifya-component-surfaces.json) at 1440px:

| Component | Radius | Padding / surface |
| --- | --- | --- |
| Benefits card | 24px | 32px top, 24px other sides; `#18181B`, 1px white at 10% |
| Central service image | 24px | No padding; transparent wrapper |
| Service tag | 28px | 4px vertical / 8px horizontal; `#18181B` |
| Project stage | 24px | 48px; transparent wrapper over media |
| Process panel | 24px | 24px; `#18181B`, 1px white at 10% |
| Small testimonial | 24px | 20px; transparent, 1px white at 10% |
| Section-label rule | 0 | 12px top padding; 1px `#222227` |

These are desktop samples; do not assume their padding stays fixed on mobile. The fresh 390×844 hero remains 1,000px tall, while the reel and team sections reduce to approximately 620px and 1,269px respectively.

Homepage project stages use large images, a category/number control near the left, and a translucent metadata/description overlay. The internal project detail hero uses a different layout: title left, metadata right, hero below. Filtering on `/work` and photography galleries are additions from the brief and should use the same typography/control language.

### Forms

The contact reference uses a dark full-width form surface, stacked labels and dark rectangular controls beneath the huge title. Preserve that appearance while adding the brief's required fields, validation, error/success states and real server delivery. Never infer the reference's delivery behaviour from its appearance; no live form was submitted in this audit.

## Responsive and accessibility adaptations

Measured breakpoints change at 479/480, 767/768 and 991/992px. Some interactive component layout also changes between 1024 and 1280; do not infer that all behaviour uses only those three breaks. The evidence includes 360, 390, 600, 768, 1024, 1280, 1440 and 1920, plus boundary probes.

- Preserve small-screen ordering, image crops and display scale, but prevent clipped important text and horizontal page overflow.
- Convert the reference's cramped mobile process cards into full-width readable/tappable stages. Keep their visual vocabulary; do not make information hover-only.
- Normal motion follows the [inventory](animation-inventory.md). Reduced motion must stop perpetual marquees and remove large scroll-linked zooms/rotations, while showing all content in a readable order. The reference's thumbnail strip continued moving during the reduced-motion sample.
- Long pinned sequences must remain navigable using keyboard and touch. Consider a “View all work” escape link; do not use scroll hijacking. Changes to the prominent pinned storytelling should be approved, not silently replaced by generic fades.
- Ensure minimum contrast and focus visibility; do not assume muted reference text meets WCAG. No contrast pass or WCAG conformance is claimed at this research stage.

## Phase 2 handoff

### Phase 5 measurement clarification

Fresh matched-viewport inspection distinguishes the About statement from ordinary H2s: `.about-text` renders at **64/67.2px** on desktop, **48/50.4px** at 768px and **32/33.6px** at 390px, with a 1,022px maximum measure. The statement's characters brighten progressively as it enters the viewport and reverse on back-scroll. Ordinary section H2s retain the 1.15 line height above.

The central service image measures **446 × 418px** at 768/1440px and **270 × 200px** at 390px. At 360px the service frame is 240 × 200px; at 480/600px its width follows viewport minus 120px and height is 350px. Intermediate outer containers cap at 767px for tablet and 540px below 768px. Section marker text is 16px with a 16px line height; heading groups use 40px desktop spacing. The desktop FAQ right column begins at x722px and the featured testimonial image at approximately x602px in a 1440px viewport. [Phase 5 measurements](../output/playwright/phase-5/component-measurements.json) and [settled service details](../output/playwright/phase-5/reference-detail.json) record the source observations. These refinements supersede the earlier implementation estimates, while media selection awaits the user's placement instructions.

After approval, establish CSS variables, licensed fonts and reusable layout/button/navigation primitives in original Next.js code. Validate actual font rendering at 390 and 1440 before adding the homepage. Save screenshots of the shared components and compare them to the captures linked here. Keep motion disabled/content visible by default until each original animation is wired and tested.
