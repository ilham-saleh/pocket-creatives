# Phase 8 — final testing and release preparation

8 November 2026. Local QA of the completed redesign; no deployment or live email. The Phase 4 media assignments, verified content, design tokens and animation timings are preserved. Requirements and the previous progress ledger were read before changes. A single named, headless Chromium browser was reused for browser checks and Lighthouse.

## Corrections

- Numeric project links now include the visible number in their accessible name, alongside the project title.
- Contact availability is rendered on the server, removing the client-only unavailable-message layout shift. Only an availability boolean reaches the browser. The endpoint now requires the configured allowed origin; the server website-field limit matches the input's 1,000-character limit.
- Inter Display Latin font subsets reduce the two preloaded display files from 227,328 to 58,544 bytes. The original fonts remain available for other characters. Glyph outlines and advances match; Switzer is untouched. See [font provenance](font-and-brand-provenance.md).
- Below-fold heading splitting is deferred until near the viewport, with the existing reveals and route/preference cleanup retained. Above-fold project thumbnails load eagerly; logo sizing is explicit. No imagery was replaced.
- Release configuration adds a 19-route sitemap, canonical/social metadata, a generated social card and factual Organization schema. The shared metadata helper explicitly supplies social images for every page; the real logo has a pixel-identical PNG derivative for the card renderer. Private previews remain excluded from search by default. Foundation/API/404 pages stay excluded in release mode.
- Six mapped legacy URLs now redirect directly with or without a trailing slash, preserving query parameters. The full legacy archive/sector migration is still unresolved.

## Verification

Browser scripts and results are saved under [Phase 8 artifacts](../output/playwright/phase-8/). Mocks exercise delivery outcomes without contacting the agency or provider.

| Check | Result / evidence |
| --- | --- |
| Production build, lint, TypeScript | Passed; Webpack used because the sandbox blocks Turbopack workers |
| Enquiry validation/provider mocks | [21/21](../output/playwright/phase-8/enquiry-checks.json); no actual email |
| Navigation, portfolio, gallery, form states, 404s | [24/24](../output/playwright/phase-8/interactions-checks.json) |
| Accessibility | [41 axe scans](../output/playwright/phase-8/accessibility-checks.json), zero WCAG A/AA and best-practice violations; 19 routes at desktop/phone plus error/dialog/drawer states |
| Keyboard, deferred headings and cleanup | [15/15](../output/playwright/phase-8/keyboard-checks.json) |
| Motion, route lifecycle, no-JS fallbacks | [31/31](../output/playwright/phase-8/motion-checks.json) |
| Full homepage forward/reverse/resize motion | [33/33](../output/playwright/phase-8/home-motion-checks.json) |
| Touch/responsive interactions | [37/37](../output/playwright/phase-8/responsive-checks.json), including two further mobile axe scans |
| Responsive reflow | [162/162 route/viewport cases](../output/playwright/phase-8/layout-checks.json) at six primary widths plus breakpoint boundaries |
| Redirects and normalization | [25/25](../output/playwright/phase-8/routing-checks.json), direct 308, query retention, no canonical loop |
| Final private-preview metadata, links and images | [139/139](../output/playwright/phase-8/site-checks.json); noindex header/meta, blocked robots and empty sitemap restored |
| Local release metadata, links and images | [139/139](../output/playwright/phase-8/release-site-checks.json); all 19 page image collections decode |
| Client/server boundary | [Passed](../output/playwright/phase-8/client-boundary-checks.json); no server email settings or provider endpoint bundled into client scripts |
| Local release indexing controls | [21/21](../output/playwright/phase-8/release-checks.json), 19 sitemap entries; foundation/API/404 excluded |
| Configuration guards | [9/9](../output/playwright/phase-8/config-checks.json), explicit indexing flags and canonical-origin validation |
| Fonts | [618 glyph outline/metric checks](../output/playwright/phase-8/font-glyph-checks.json) and [8 exact browser width comparisons](../output/playwright/phase-8/font-metric-checks.json) |
| Preservation | [Requirements, content, media manifest/inventory and package files unchanged](../output/playwright/phase-8/preservation-checks.json); all 14 original media candidates verified |
| Production dependency audit | [Zero reported advisories](../output/playwright/phase-8/dependency-audit.json) at audit time |
| External destinations | [20 HTTP 200 responses, one LinkedIn 403](../output/playwright/phase-8/external-link-checks.json); LinkedIn remains unverified, not diagnosed as broken |

Image auditing scrolls through each page and explicitly loads any remaining hidden lazy images before bounded decode checks. This tests asset availability separately from normal loading performance. The public legacy links still work today; they must be preserved when replacing the existing domain.

## Loading performance

Lighthouse 13.6.0, Chrome 156, production Next.js build on localhost; mobile default simulated throttling and desktop preset. All six final audits score **100 accessibility, 100 best practices and 100 SEO** in the explicitly configured local release mode. That mode is tested only on localhost and is then restored to private preview settings.

| Page/report | Profile | Performance | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- |
| [Home](../output/playwright/phase-8/lighthouse-home-mobile-final.json) | mobile | 85 | 3.5s | 296ms | 0.000 |
| [Home](../output/playwright/phase-8/lighthouse-home-desktop-final.json) | desktop | 100 | 0.2s | 28ms | 0.000 |
| [Work](../output/playwright/phase-8/lighthouse-work-mobile-final.json) | mobile | 93 | 3.2s | 15ms | 0.000 |
| [Work](../output/playwright/phase-8/lighthouse-work-desktop-final.json) | desktop | 100 | 0.7s | 0ms | 0.000 |
| [Contact](../output/playwright/phase-8/lighthouse-contact-mobile-final.json) | mobile | 100 | 0.9s | 9ms | 0.000 |
| [Contact](../output/playwright/phase-8/lighthouse-contact-desktop-final.json) | desktop | 100 | 0.4s | 0ms | 0.000 |

Baseline mobile Home was 75 (LCP 4.8s, TBT 330ms); Work was 86 (LCP 4.2s). The final Home score is 85 and Work is 93. Contact's initial release-mode layout shift was 0.111 mobile / 0.036 desktop; both are now zero. These are individual runs, not statistical medians. Interim Home runs varied from 85–88 after the retained optimizations; an unsuccessful placeholder experiment was reverted and its separate reports retained.

**Targets not yet met:** mobile Home performance is below 90, and mobile Home/Work LCP remains above 2.5s. All sampled CLS values meet the 0.1 target. TBT is 300ms for mobile Home in the final run; no field INP claim is made. Keep mobile loading/startup work open, preserving the approved visual/motion fidelity. Reassess the deployed host with cold caches, realistic network conditions and physical devices; investigate early image/font contention and animation/hydration work. Do not treat the good desktop scores as evidence that the mobile targets passed.

## Final captures and interaction sample

[Capture checks](../output/playwright/phase-8/captures-checks.json) cover nine responsive states. All captures use reduced motion to make the static comparison reproducible; motion is verified separately by the forward/reverse regression suites. Font widths remain exactly equal to the original fonts and all 162 layout cases pass. Visual review retained the established Phase 7 composition.

- Homepage: [360px](../output/playwright/phase-8/final-home-360.png), [390px](../output/playwright/phase-8/final-home-390.png), [768px](../output/playwright/phase-8/final-home-768.png), [1024px](../output/playwright/phase-8/final-home-1024.png), [1440px](../output/playwright/phase-8/final-home-1440.png), [1920px](../output/playwright/phase-8/final-home-1920.png).
- Phone: [Work](../output/playwright/phase-8/final-work-390.png), [Services](../output/playwright/phase-8/final-services-390.png), [Contact](../output/playwright/phase-8/final-contact-390.png).
- Desktop: [Work](../output/playwright/phase-8/final-work-1440.png), [Services](../output/playwright/phase-8/final-services-1440.png), [Contact](../output/playwright/phase-8/final-contact-1440.png).
- [Generated social card](../output/playwright/phase-8/social-card.png): 1200×630, original Pocket logo, no changed project imagery.

A [bounded Event Timing sample](../output/playwright/phase-8/interaction-timing.json) exercised filters, drawer open/Escape and FAQ at 4× CPU slowdown: maximum observed duration **40ms** across seven interactions. Events below 16ms are not recorded. This small lab sample is **not** field INP or a guarantee for every interaction/device.

## Measurement limitations and release follow-ups

Lighthouse uses simulated mobile/desktop throttling against a local production build. Scores vary with machine load and are laboratory evidence, not real-user Core Web Vitals. TBT is not a field INP result. The field targets use the 75th percentile; no field data exists for this unreleased build. [Core Web Vitals guidance](https://web.dev/articles/vitals), [Lighthouse scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring).

Physical iOS Safari/Android, actual software keyboard/browser chrome and screen-reader review remain pending. Automated Chromium/emulated-touch/axe checks do not certify those environments. Contact credentials, sender verification, shared abuse protection and an authorised receiving-inbox test remain pending. Approved media/content placement, policy review and the full legacy migration are required before production replacement. See [release follow-ups](release-readiness.md) and [deployment/configuration](deployment.md).

Final handoff: the localhost preview is running with indexing and legacy redirects disabled ([state verification](../output/playwright/phase-8/final-preview-state.json)). The task-owned `pocket` automation browser is closed. [Artifact verification](../output/playwright/phase-8/artifact-checks.json) checks saved results, PNG headers, documentation links and preserved hashes.
