# Phase 1 — Reference audit

Audit date: 4 November 2026 (Europe/London). Status: **Phase 1 approved on 5 November 2026; Phase 2 delivered. See [progress](progress.md).**

Read [plan.md](../plan.md) and [phases.md](../phases.md) in full before collecting evidence. The eight phases in `phases.md` supersede the older seven-phase breakdown. This Phase 1 audit created documentation, browser measurements and screenshots only. At its completion no application existed. The later Phase 2 foundation is documented separately; no full homepage visual comparison exists yet.

## Sources and method

- [Exact Lumifya listing](https://webflow.com/templates/html/lumifya-website-template), by Flowdevz. Its **Preview in browser** link identifies [lumifya.webflow.io](https://lumifya.webflow.io/). This is not a similarly named Lumify template.
- [Pocket Creatives](https://www.pocketcreatives.co.uk/) supplies identity, services and business content.
- Inspected the live Chrome rendering with Playwright: desktop and mobile screenshots, computed styles and geometry, rendered text/media URLs, hover/click interactions, forward/backward scroll states, and a reduced-motion sample. No paid Designer files or template application source were acquired.
- The `reverse-engineer-anything` skill was read when requested. Its evidence discipline is used here: **measured**, **observed**, **inferred**, and **unknown** are distinct. REA MCP tools and a `rea` executable were unavailable; these artifacts are **Playwright evidence**, not REA Evidence records. No REA configuration repair was required to complete the browser audit.
- Screenshots are reference-review artifacts, not licensed production assets. Original implementation code and independently obtained, appropriately licensed fonts/media are required in later phases.

## Start here

- [Visual reference board](reference-board.html): reference screenshots beside the proposed Pocket Creatives treatment. It is an annotated research comparison, not an implemented mockup.
- [Design system](design-system.md): actual measured values, responsive behaviour and licensing sources.
- [Animation inventory](animation-inventory.md): triggers, state changes, timing confidence, reverse behaviour and mobile differences.
- [Content inventory](content-inventory.md), [media manifest](media-manifest.md), [implementation plan](implementation-plan.md), [progress](progress.md).
- [Desktop section contact sheet](../output/playwright/phase-1/desktop-contact-sheet.png) and [mobile section contact sheet](../output/playwright/phase-1/mobile-contact-sheet.png). Some frames intentionally show incomplete entrance animations; use the state notes and individual screenshots rather than treating every frame as a final static layout.

## What the actual reference looks like

Lumifya is a dark, image-led site with a near-black canvas, warm orange-red controls, soft white display text, extremely large typography, thin section rules and numbered editorial labels. Inter Display supplies the bold headings; body text mainly uses Switzer, with Geist in selected paragraphs. The public style guide differs from some computed values: the rendered page takes precedence.

The homepage hero is a **still background image**, not a video. Its animated content includes a cycling service phrase, a vertical list and a horizontal thumbnail strip. The earlier working description of a video hero was corrected after inspecting the media elements. A Pocket Creatives showreel in that position is a proposed content adaptation, not a claim about Lumifya.

The desktop header is an absolute-positioned logo/cart/hamburger arrangement. It does **not** display a conventional Work/Services/About/Process link row. The hamburger opens a black drawer from the right; on desktop it is 500px wide, and on a narrow screen it fills the width. The homepage has multiple very long sticky/pinned sequences, rather than a simple grid of projects with small reveal effects.

## Homepage, section by section

The table follows Lumifya's actual order. Pocket Creatives' exact order and deviations below are proposed for this approval gate; no substitutions have been silently implemented.

| Reference section | Observed composition | Proposed Pocket Creatives treatment | Decision |
| --- | --- | --- | --- |
| Header | Logo left; cart and two-line menu trigger right; black sliding drawer | Original Pocket logo; remove cart; retain drawer and expose Work, Services, About, Process and Start a Project, with service children | Recreate structure; adapt content. Decide drawer versus brief's desktop link row |
| Hero | Full-bleed image; left statement and orange split CTA; right moving service list; giant lower wordmark and moving thumbnails | Real production still as fidelity-first default. Proposed headline “Big ideas. Beautifully captured.” with Video Production / Photography. Approved reel optional. Pocket wordmark needs a fit/crop test because its name is longer | Recreate composition and motion; approve brand/wordmark treatment |
| Client strip | Repeated dark logo tiles in a moving strip | Verified client marks only; names are acceptable until separate logos are approved | Recreate layout, adapt media |
| About | Centered large statement over dark landscape; long held viewport; imagery moves through the composition; pointer-follow circular CTA | Concise agency proposition over genuine studio/BTS imagery; static accessible CTA alternative | Recreate observable staging; no landscape asset reuse |
| Benefits | Three tall illustrated panels | Dedicated team, communication, flexible production using real images and supported copy | Recreate proportions; no demo claims |
| Services | Repeated large service-name marquee behind central image; sequential held service stages and keyword chips | Two main stages for Video Production and Photography, with training as a smaller related offering | Recreate treatment; shorten count to genuine services |
| Work | Four large image-led project panels; each overlaps, shrinks and rotates as the next advances; numbered navigation and information overlays | Four initial verified campaigns or mixed photo/video projects; plan allows 4–6. Keep original titles and real media; add a clear work index link | Recreate stage behaviour; media approval pending |
| Process | Right-aligned heading; three numbered panels, active panel about twice the width of either inactive panel | Four requested Discover / Plan / Produce / Deliver stages based on the real process page | Adapt stage count while preserving active-panel visual language; fix mobile readability |
| “Our Stack” | Sequential words grow through the viewport over dark imagery | Omit unverified AI/tool stack. Its observed scale-through-text technique could be assigned to verified production capabilities only if approved | Omit demo content; no invented software endorsements |
| Reel | Image panel grows from scale 0.5 to 1; split Play / Reel wording and lightbox trigger | Existing Pocket showreel, with approved poster and user-initiated playback | Recreate; embed lazily |
| Counters | Three numeric proof panels | No statistics without evidence. Reuse visual rhythm for qualitative facts only if it adds value | Omit invented counts/retention percentages |
| Team | Three portrait cards enter at different vertical positions on desktop; mobile stacks them | Verified team portraits and current roles; missing team facts stay pending | Recreate only when identities/assets are confirmed |
| Testimonials | Large featured quote and image, followed by smaller quote panels; no observed autoplay slider | Genuine client quotes/attributions. Preserve meaning; avoid unsupported rating stars or metrics | Recreate editorial layout |
| FAQ | Split heading/introduction and expandable question list | Verified service/process FAQs; consistent approved pricing only | Recreate interaction with accessible controls |
| Journal | One larger lead article plus two smaller entries | Real articles exist; curated migration possible, no fabricated posts | Recreate arrangement if publishing approved articles |
| Closing CTA | Centered heading/CTA and five image panels forming a curved perspective strip, changing scale on scroll | Requested closing copy and one approved photographic composition or set of related frames | Recreate geometry with original CSS/GSAP; media choice pending |
| Footer | Contact/brand block, link groups, newsletter area, very large lower brand treatment, credits | Verified contacts/socials/legal links; original brand; omit template credits, shop and inactive newsletter | Adapt content and nonrequired features |

### Recommended content order

For strongest fidelity, retain the reference's hero → clients → about → benefits → services → work → process → reel → team → testimonials → FAQ/journal → CTA → footer rhythm. This consolidates Pocket's requested “why us” content into the benefits section and removes unverified stack/counters. If the section order in `plan.md` must be literal, move featured work before services and about; that is a visible structural departure. Approval should select the intended interpretation before Phase 2.

## Internal page audit

Desktop pages were opened, scrolled through their sections and captured at the top/end. Core internal pages were also opened fresh at 390×844. Complete rendered text/section inventory is in [desktop page evidence](../output/playwright/phase-1/lumifya-pages.json) and [mobile evidence](../output/playwright/phase-1/lumifya-mobile-pages.json).

| Actual reference URL | Verified layout | Pocket routes |
| --- | --- | --- |
| [/about](https://lumifya.webflow.io/about) | Large photographic page-title banner; proof, mission, process, team and CTA | `/about`, with authentic history/people |
| [/service](https://lumifya.webflow.io/service) | Photographic title banner; numbered wide service panels with image and capability details; FAQ/testimonials | `/services` |
| [/service/visual-identity](https://lumifya.webflow.io/service/visual-identity) | Dedicated service hero, information/detail sections, FAQ and shared CTA | `/services/video-production`, `/services/photography` |
| [/projects](https://lumifya.webflow.io/projects) | Image title banner and large project presentations; process/FAQ/CTA below | `/work`; requested category filtering is an added business requirement, not an observed reference filter |
| [/projects/aura-watches](https://lumifya.webflow.io/projects/aura-watches) | Dark header; project name left and ruled metadata right; broad rounded hero; details/gallery; FAQ/CTA | `/work/[slug]`; only documented metadata, no invented durations or results |
| [/contact](https://lumifya.webflow.io/contact) | Oversized “Let's Talk” title; dark form surface; stacked labels/fields; orange split submit | `/contact`; required Pocket fields and real delivery added later |
| [/pricing](https://lumifya.webflow.io/pricing) | Banner, price panels and comparison section, shared lower sections | `/pricing`; adapt to bespoke production guidance, not template subscriptions |
| [/blogs](https://lumifya.webflow.io/blogs), [article](https://lumifya.webflow.io/blog/the-power-of-minimalism-in-ui) | Editorial listing and long-form article structure | `/journal`, `/journal/[slug]`, only real migrated material |
| [Style guide](https://lumifya.webflow.io/utility/style-guide), [licenses](https://lumifya.webflow.io/utility/licenses), [interactions](https://lumifya.webflow.io/utility/interactions) | Public supporting information inspected | Evidence only; do not ship template utility pages or claims |

## Decisions needed at this checkpoint

1. **Navigation:** recommended reference-style drawer on desktop and mobile, with all required Pocket links. The horizontal desktop navigation in the original brief is a deliberate alternative.
2. **Composition:** recommended reference section order with unsupported stack/counters omitted; four production stages replace three reference stages.
3. **Hero and branding:** keep Pocket's real logo; use an approved production still by default, with a showreel only as an explicit adaptation. A new giant text rendering is not a replacement logo and requires review.
4. **Accessibility exceptions:** fix Escape/focus/scroll-lock, reduced-motion, cramped mobile process cards, and any overflow. Do not reproduce reference defects for fidelity.

These are design approvals for the next phase. Asset licences, a current address, price ranges, current team information and contact delivery configuration are separate pending content/release inputs, listed in the other inventories.

## Evidence limitations and unresolved checks

- Original timeline durations and easing equations were not inspected. Motion timing is sampled/estimated; exact recreation will be tuned by repeated visual comparison in Phase 4/5.
- Desktop scroll state samples use fixed positions and short settling delays. Scrub smoothing means some forward/backward intermediate values differ slightly. Capture settled states again for the final comparison; do not infer different end behaviour solely from that lag.
- Narrow desktop resize sampling found 16px overflow at 1280px; this is a sampled reference issue, not an intended token. Fresh-load/device checks must distinguish transient animation overflow from steady layout.
- Mobile measurements use desktop Chrome at a narrow viewport, with explicit pointer clicks where noted. They do not establish behaviour on physical iOS/Safari or Android hardware.
- Publicly visible content proves that Pocket publishes the material, not that every client logo, model release, music track or original file is cleared for this redesign.
- Public sitemap endpoints advertised by Pocket's robots file returned 404 during this audit. Link discovery is therefore bounded; analytics/Search Console and a full migration crawl remain necessary before release.
- `/case-studies-hub/` renders homepage-like material under a page-not-found title. It does not establish separate case-study narratives. Preserve simple project galleries where only a title/video is documented.
- An actual Pocket implementation screenshot does not exist in Phase 1. The reference board compares observed design to proposed content placement. **Rendered side-by-side comparison is reserved for Phase 5**, followed by the second approval gate.

## Phase 1 checks

See [progress](progress.md) for validation results and exact next steps. No application build, lint, type check, Lighthouse score or form submission is claimed: this workspace has no application, and implementation is explicitly gated on approval.
