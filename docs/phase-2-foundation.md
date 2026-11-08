# Phase 2 — shared foundation

5 November 2026. Scope: the project structure and shared design foundation. The homepage and remaining business pages are reserved for their later phases.

## Delivered

- Next.js 16.4.5 App Router, React, strict TypeScript, Tailwind 4 and measured CSS variables; exact dependencies locked in npm.
- Independently sourced Inter Display, Switzer and Geist, locally served with font licences/provenance. Sampled heading and body glyph widths match the live reference exactly. [Font record](font-and-brand-provenance.md).
- Absolute 96px header with the original Pocket logo, right-side drawer, service disclosure, numbered/staggered links, verified contact details and social destinations.
- Accessible modal behaviour using Radix: focus containment/return, Escape, backdrop close, scroll locking and reduced motion. CSS handles panel/link entrance and exit; this avoids competing GSAP and Radix presence timelines. The 600ms drawer and 650ms staggered-link transitions are tuned approximations of observed timing, not recovered source values.
- Split orange controls, section labels, heading components, native FAQ disclosure and the shared responsive footer.
- Opt-in GSAP/ScrollTrigger `MotionScope` with media-query and unmount cleanup, ready for Phase 4. No homepage scroll sequences run in this phase. The wrapper is type-checked; full scrolling lifecycle verification belongs to Phase 4 when it is used.
- Zod schemas for projects, media, services, people, client quotes, clients, FAQs and articles; source/approval/rights fields stay separate from presentation. Unapproved media is not silently published.
- `/foundation`, an internal component review; `/` temporarily redirects there. A not-found screen and no-JavaScript navigation/disclosure fallback are included. Production hides the review unless `ENABLE_FOUNDATION_PREVIEW=true`; this is not authentication. Indexing remains disabled in response headers and metadata.

## Reference comparison and deliberate differences

[Visual comparison board](phase-2-comparison.html) pairs shared-component captures with the reference. This is the foundation review, not the required Phase 5 full homepage comparison.

- Palette, desktop/mobile H2 sizes, H3 scale, gutters, 42px arrow tile, 4px button corners, 24px surfaces, section rules and display/body font roles follow measurements.
- Desktop drawer width is 500px; at 390px it fills the viewport. Fresh reference inspection confirmed 20px mobile navigation and 18px mobile footer links; these were corrected before final capture.
- The real Pocket logo remains an unmodified navy/cyan 300×150 image, shown at its natural aspect ratio. It differs visibly from Lumifya's transparent orange logo. A cleared master/vector is still preferable for later polish.
- Small button text uses `#09090B` on `#FB4930` (approximately 5.78:1) instead of white (approximately 3.44:1). This preserves the measured orange and control geometry while meeting normal-text contrast. Menu numbering is also lighter for readability. The white hover sweep remains; unverified arrow-path motion is deferred rather than invented.
- The footer retains the contact/link composition and typography while omitting the inactive newsletter, template utility links and unlicensed portrait. It contains no disputed street address; London is the verified location. Background media and exact final vertical composition need approved imagery and Phase 5 comparison.
- Native FAQ content is keyboard-operable without JavaScript. Its measured height animation is deferred to Phase 4.
- Work and Services link to labelled review sections. Other business links use the existing Pocket site until their new routes are built. The destination registry stores future local paths separately; there are no fake completed pages or contact submissions.

## Validation

| Check | Result / evidence |
| --- | --- |
| Official local Switzer hashes | `npm run fonts:setup` passed |
| ESLint | Passed; [log](../output/playwright/phase-2/lint.log) |
| Next route types / TypeScript | Passed; [log](../output/playwright/phase-2/typecheck.log) |
| Production build | Passed; [log](../output/playwright/phase-2/build.log) |
| Responsive and interaction checks | 63/63 passed; [results](../output/playwright/phase-2/foundation-checks.json) |
| Requested viewports | 360, 390, 768, 1024, 1440, 1920 plus 479/480, 767, 991/992; no horizontal overflow, expected H2 sizes |
| Drawer | Desktop/mobile width, Tab/Shift+Tab containment, background wheel lock, Escape/focus return, backdrop close, interrupted open/close, service disclosure and selection close passed |
| In-page navigation | Fixed a discovered focus-return jump; selected target now remains in view after the drawer closes |
| Controls | Hover sweep/reversal, keyboard disclosure and reduced-motion open/close passed |
| Accessibility scan | Axe WCAG A/AA rules: no violations in desktop, mobile and both open-menu states; [results](../output/playwright/phase-2/accessibility-checks.json). Automated results include manual-review items and do not establish full WCAG conformance |
| JavaScript disabled | Navigation, headings and native disclosure available; no mobile overflow |
| Production and destinations | [Production routing/runtime/link results](../output/playwright/phase-2/production-checks.json) |
| Dependencies | Production audit reports zero advisories. Eight moderate advisories remain in development-only TypeScript/ESLint glob tooling; [audit](../output/playwright/phase-2/dependency-audit.json). ESLint 9 is retained for compatibility with Next's current plugins; ESLint 10 produced invalid peers. Upgrade that tooling together when the plugin versions support it, rather than forcing a framework downgrade or incompatible glob major |

Screenshots and original inspection scripts are in `output/playwright/phase-2/`. Browser testing uses Chrome on macOS with emulated viewports; physical mobile devices and Safari remain later checks. No live enquiry was submitted, no deployment occurred, and no full-site Lighthouse score is claimed.

## Handoff

See [progress](progress.md). Phase 3 is the next implementation stage: the complete static homepage composition with genuine media. The existing requirements for approved project imagery, current business facts and the Phase 5 approval gate remain in force. Remove the review-route redirect and temporary navigation destinations as the corresponding real pages become available.
