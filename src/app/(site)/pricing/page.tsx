import {
  PageFrame,
  PageHero,
  PageSection,
  ContactCTA,
  PageFAQ,
} from "@/components/pages/page-parts";
import { PrimaryButton } from "@/components/ui/primary-button";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Project Pricing",
  "Understand what shapes the cost of photography and video production. Get a clear quote built around your brief.",
  "/pricing",
);
export default function PricingPage() {
  return (
    <PageFrame>
      <PageHero title="Pricing" photo={photos.studio} />
      <PageSection
        label="An honest conversation"
        title="Your brief. Your quote."
      >
        <div className="page-columns">
          <p className="page-intro">
            Every production is different. We’ll talk through what you want to
            achieve and explain what your quote includes.
          </p>
          <div className="page-prose">
            <p>
              The creative approach, shoot requirements and final deliverables
              all shape the cost. Tell us your priorities and any budget you
              have in mind; we can discuss a practical approach together.
            </p>
            <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
          </div>
        </div>
      </PageSection>
      <PageSection label="What shapes the cost" number="02">
        <div className="pricing-options">
          {[
            [
              "Video Production",
              "Planning, filming and the final edit.",
              [
                "Concept, script and pre-production",
                "Shoot days, crew and equipment",
                "Locations, talent and production support",
                "Editing, sound, graphics and versions",
              ],
              "/services/video-production",
            ],
            [
              "Photography",
              "From the shot list to the finished images.",
              [
                "Shoot length and number of images",
                "Studio or location requirements",
                "Styling, props, models and sets",
                "Retouching and final image treatments",
              ],
              "/services/photography",
            ],
          ].map(([title, description, items, href]) => (
            <article key={title as string}>
              <span className="eyebrow">Quoted around your brief</span>
              <h2 data-page-reveal>{title}</h2>
              <p>{description}</p>
              <ul>
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <PrimaryButton href={href as string}>
                Explore the Service
              </PrimaryButton>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection label="Before we begin" number="03">
        <div className="page-columns">
          <h2 data-page-reveal>
            Clear scope.
            <br />
            Fewer surprises.
          </h2>
          <div className="page-prose">
            <p>
              We agree the production requirements, deliverables and review
              process before the work begins. If the brief changes, we talk
              through the effect on the scope, schedule and cost.
            </p>
            <p>
              You don’t need a finished brief to get in touch. Start with what
              you want to make, who it is for and when you need it.
            </p>
          </div>
        </div>
      </PageSection>
      <PageFAQ />
      <ContactCTA />
    </PageFrame>
  );
}
