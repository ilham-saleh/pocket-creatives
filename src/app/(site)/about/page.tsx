import {
  PageFrame,
  PageHero,
  PageSection,
  PhotoFrame,
  ContactCTA,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { testimonials } from "@/content/home";
export const metadata = pageMetadata(
  "About Our London Creative Studio",
  "Get to know Pocket Creatives: a London photography and video production team focused on personal service and considered creative work.",
  "/about",
);
export default function AboutPage() {
  return (
    <PageFrame>
      <PageHero title="About" photo={photos.about} />
      <PageSection label="About Pocket Creatives">
        <div className="about-introduction">
          <div className="page-prose">
            <h2 data-page-reveal>
              Small team. Big production thinking. We bring photography and film
              together, with care for the details and the people behind every
              project.
            </h2>
            <PrimaryButton href="/contact">
              Meet Your Next Creative Team
            </PrimaryButton>
          </div>
          <PhotoFrame photo={photos.studio} />
        </div>
      </PageSection>
      <PageSection label="Our story" number="02">
        <div className="page-columns">
          <h2 data-page-reveal>
            Creative work.
            <br />
            Personal service.
          </h2>
          <div className="page-prose">
            <p>
              Pocket Creatives is a London-based video production and
              photography agency. The team brings together creative planning,
              production and post-production for brands, businesses and people.
            </p>
            <p>
              Our approach combines the care and flexibility of a smaller team
              with the planning a production needs. We listen to your brief,
              explain the practical choices and stay involved from the first
              idea to the final assets.
            </p>
            <p>
              Projects range from commercial and corporate films to product,
              food, beauty, lifestyle and people photography. The brief shapes
              the team and the approach.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection label="What matters" number="03">
        {[
          [
            "A shared direction",
            "Your audience, vision and intended use guide the work. We take time to understand the brief before planning the production.",
          ],
          [
            "Clear conversations",
            "We discuss the scope, timings and budget together, and explain what is included before the work begins.",
          ],
          [
            "Care from start to finish",
            "Creative planning, the shoot and the final edit belong to one process. We keep the details in view throughout.",
          ],
        ].map(([title, text], i) => (
          <div className="editorial-row" key={title}>
            <span className="editorial-index">/0{i + 1}</span>
            <h2 data-page-reveal>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </PageSection>
      <PageSection
        label="In good company"
        number="04"
        title="Real collaborations."
      >
        <div className="quote-pair">
          {testimonials.slice(0, 2).map((t) => (
            <figure key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                {t.name}
                <span>{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <PrimaryButton href="/process">How We Work</PrimaryButton>
      </PageSection>
      <ContactCTA />
    </PageFrame>
  );
}
