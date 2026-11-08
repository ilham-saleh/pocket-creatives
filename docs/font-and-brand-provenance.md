# Phase 2 — font and brand provenance

Acquired 5 November 2026 from official sources, independently of Lumifya's font CDN. No template source or Webflow runtime is included.

| Asset | Source | Licence / handling |
| --- | --- | --- |
| Inter Display Bold 700 and SemiBold 600, v4.1 | [Inter official CSS](https://rsms.me/inter/inter.css), `https://rsms.me/inter/font-files/InterDisplay-Bold.woff2?v=4.1` and corresponding `InterDisplay-SemiBold.woff2` | Original WOFF2 files; [SIL OFL copy](licenses/Inter-OFL.txt) retained. Stored in `src/assets/fonts/inter`. |
| Switzer 400, 500, 600 | [Official Fontshare API stylesheet](https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap) and its Fontshare CDN URLs | Original WOFF2 files; [ITF FFL v2.0 terms](licenses/Switzer-ITF-FFL.txt), sourced from the official page in Phase 1. Self-hosted only for this website; no subsetting, conversion or editing. Binary files excluded from version control. Each collaborator runs `npm run fonts:setup` to obtain its own copies directly. Exact URLs and integrity hashes are in [font-sources.json](../scripts/font-sources.json). |
| Geist Regular 400 | Official Vercel `geist` npm package, pinned 1.9.1 | Original WOFF2 from the installed package; [OFL copy](licenses/Geist-OFL.txt). Only used for the measured large-paragraph treatment. |
| Pocket logo | [Pocket Creatives' published 2026 logo](https://www.pocketcreatives.co.uk/wp-content/uploads/2017/11/pocket-creatives-logo-2026.png) | Unmodified 300×150 source file (served with a `.png` filename; bytes verified as WebP in Phase 8), including navy background and cyan wordmark. Used locally under the user's instruction to preserve real branding. Master/vector file and production asset approval remain in the media handoff. No invented mark, recolouring, crop or oversized substitute wordmark. |

All three families use `next/font/local`, so the app builds and renders without font-provider requests after local setup. Switzer must not be put into a public font library or repository; self-hosting this website's unchanged font files is the permitted use described in the official terms. Fontshare's API is optional. Do not replace the current licence with an older third-party summary.

## Verification

Browser font loading and responsive type sizes were checked in the local application. The same canvas string, “Big ideas. Beautifully captured.”, was measured in the live reference and local app:

| Sample | Live reference | Local foundation |
| --- | --- | --- |
| Inter Display 700 at 64px | 913.53125px | 913.53125px |
| Switzer 400 at 16px | 219.4718017578125px | 219.4718017578125px |

This verifies sampled glyph advances, not complete font-file identity or every glyph. CSS size, line height and tracking are separately checked in the responsive report. Later homepage comparisons must still check wrapping with actual approved copy.

[Reference measurements](../output/playwright/phase-2/reference-font-metrics.json), [local measurements](../output/playwright/phase-2/foundation-font-metrics.json), [font/logo hashes](../output/playwright/phase-2/font-brand-hashes.json).

No project photography, client logo, music or video has been migrated into production assets in this phase. The existing [media manifest](media-manifest.md) retains those approval requirements.

## Phase 8 — Inter loading optimization

The two original Inter Display v4.1 files are retained unchanged as unpreloaded fallback fonts. The website now preloads Latin subsets (29,344 bytes for 600 and 29,200 bytes for 700, versus 113,772 and 113,556 bytes for the originals). The derivatives retain the same glyph outlines, advances, font names and OFL licence. Switzer remains completely unmodified.

[Reproduction script](../scripts/subset-display-fonts.py) uses FontTools 4.60.2 with WOFF support. It includes Latin/Latin-1, punctuation, currency symbols, arrows and the existing play symbol. Characters outside the subset fall through to the original font. A Bold TTF derivative supplies the generated social card; it is not a browser font download. The subset is a delivery optimization, not a typography redesign.

[Glyph verification](../output/playwright/phase-8/font-glyph-checks.json) compares outlines and horizontal metrics for all 618 retained glyphs across both weights. Browser width samples and responsive checks are recorded in the [Phase 8 report](phase-8-qa.md).

The social-card renderer needs a true PNG: `src/assets/brand/pocket-creatives-logo-og.png` is a format-only derivative of the existing logo. Dimensions, colours and all decoded pixels are identical ([pixel check](../output/playwright/phase-8/social-logo-checks.json)); the original website logo remains untouched. Regenerate with the installed Next.js Sharp dependency: `sharp("public/brand/pocket-creatives-logo.png").png().toFile("src/assets/brand/pocket-creatives-logo-og.png")`. No new brand artwork was created.
