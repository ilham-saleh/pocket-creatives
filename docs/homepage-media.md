# Homepage media — Phase 3

Updated 5 November 2026. This is a local design preview, not a cleared publication asset pack.

## Original hero

The user first permitted the Lumifya hero, then preferred a similar original because its licence was uncertain. The homepage now uses **original AI-generated decorative artwork**, created with the built-in image-generation tool. It is not a Pocket Creatives client photograph, employee, endorsement or campaign. No Lumifya image or paid template source was imported into the app.

- File: [`src/assets/generated/hero-portrait.png`](../src/assets/generated/hero-portrait.png), 1536 × 1024 PNG.
- Reproducible art direction: [complete generation prompt](hero-image-prompt.txt).
- Composition: close-up adult portrait, warm directional light, face on the right, cool blue-grey negative space on the left.
- The source is preserved unchanged; CSS controls crop and overlays. Responsive derivatives are served through Next Image.
- It is decorative (`alt=""`), never labelled as portfolio work. Generated provenance is recorded here; no claim of exclusivity or third-party rights clearance is made.

## Genuine Pocket candidates

Fourteen source files are retained under ignored `src/assets/home-preview/` for the private review. [The machine-readable source manifest](../scripts/home-media-sources.json) records original URL, source page, exact SHA-256 and pending rights status. Run `npm run media:setup` to obtain missing candidates and verify hashes. Changed source bytes fail verification and require review.

| Candidate | Visual content / placement |
| --- | --- |
| beauty.jpg | Skincare portrait; beauty photography collection |
| beauty2.jpg | Cosmetic product held against turquoise; hero thumbnail and continuous CTA slices |
| food.jpg | Glazed food on patterned plate; food collection and thumbnail |
| food2.jpg | Curry and rice; retained content candidate, not currently rendered |
| portrait.jpg | Orange face-mask portrait; photography service |
| studio.jpg | Camera/laptop during portrait shoot; about, benefits and process |
| filming.jpg | Kitchen filming crew; video service and about background |
| planning.jpg | Photography set; benefits, process, testimonial illustration and journal |
| about.png | Beauty photography production; about, process and journal |
| watch.jpg | Watch detail; thumbnail and product photography journal illustration |
| boulder.png | Climbing preparation; flexible production illustration |
| vimeo-1101645222.jpg | Official poster: Pocket Creatives in 73 Seconds — This Is Us |
| vimeo-648958635.jpg | Official poster: California Walnuts Christmas TV Ad |
| vimeo-1051508574.jpg | Official portrait poster: Samsung SparkBox |

These were visually inspected before writing descriptive alt text in `src/content/home.ts`. Original source alt labels are preserved separately in the manifest and are not blindly reused. Review-file dimensions and bytes are recorded in [media-metadata.json](../output/playwright/phase-3/media-metadata.json).

The video titles/posters were checked against Vimeo's public oEmbed responses, saved under `output/playwright/phase-3/`. No video was downloaded. The showreel iframe mounts only after user activation, includes Vimeo's `dnt=1` option, and is removed on close. It has an external playback fallback. Production consent/cookie policy review remains a release task.

Beauty and food cards are explicitly **portfolio collections**, not invented named-client case studies. Journal illustrations are related Pocket images, not asserted to be the original article covers. The production photo beside the testimonial is illustrative and is not identified as that client's shoot. Client names use typography; no uncleared logo pack was imported. Team cards are omitted pending a current confirmed roster.

## Release checklist

- Obtain agency-approved originals and written reuse/publication confirmation for portfolio, behind-the-scenes photos, Vimeo posters and embeds.
- Replace candidates where a client or model permission does not extend to this redesign.
- Approve the original generated hero as decorative brand artwork.
- Confirm current team, address and pricing separately; none was invented here.
- Keep preview access local or protected. `ENABLE_HOMEPAGE_PREVIEW` and noindex are review safeguards, not authentication or clearance. Candidate files may exist in build output even when the route is disabled; do not publish the build before clearance.
