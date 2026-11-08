import {
  PageFrame,
  PageHero,
  PageSection,
  PhotoFrame,
  ContactCTA,
  PageFAQ,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { productionStages } from "@/content/services";
import { processSteps } from "@/content/home";
export const metadata = pageMetadata(
  "How We Work",
  "From the first conversation to the final frame: discover, plan, produce and deliver with Pocket Creatives.",
  "/process",
);
export default function ProcessPage() {
  return (
    <PageFrame>
      <PageHero title="Our Process" photo={photos.planning} />
      <PageSection label="How we work" title="From first idea to final frame.">
        <p className="page-intro">
          A collaborative production process, with the creative and practical
          details considered together.
        </p>
        <nav className="process-jumps" aria-label="Production stages">
          {productionStages.map((s, i) => (
            <a href={`#stage-${i + 1}`} key={s.title}>
              0{i + 1} {s.title} ↘
            </a>
          ))}
        </nav>
        <div className="process-timeline">
          {productionStages.map((s, i) => (
            <article
              id={`stage-${i + 1}`}
              key={s.title}
              className="process-stage"
            >
              <div className="process-stage-copy">
                <span className="service-number">
                  <b>/</b>0{i + 1}
                </span>
                <h2 data-page-reveal>{s.title}</h2>
                <h3>{s.subtitle}</h3>
                <p>{s.text}</p>
              </div>
              <PhotoFrame photo={processSteps[i].photo} />
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection label="Before the final files" number="05">
        <div className="page-columns">
          <h2 data-page-reveal>Ready to be seen.</h2>
          <div className="page-prose">
            <p>
              Some productions involve music, contributors, locations, archive
              material or other rights. We discuss the relevant permissions as
              part of the production, before release.
            </p>
            <p>
              Final versions, aspect ratios and delivery formats are agreed
              around the channels you need. We plan these early so they inform
              the shoot and edit.
            </p>
            <PrimaryButton href="/contact">
              Tell Us About Your Project
            </PrimaryButton>
          </div>
        </div>
      </PageSection>
      <PageFAQ />
      <ContactCTA />
    </PageFrame>
  );
}
