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
export const metadata = pageMetadata(
  "Creative Training in London",
  "Bespoke one-to-one, in-person training in photography, filming and editing. Plan your training day with Pocket Creatives.",
  "/creative-training",
);
export default function TrainingPage() {
  return (
    <PageFrame>
      <PageHero title="Creative Training" photo={photos.studio} />
      <PageSection label="Learn by doing" title="A day built around you.">
        <div className="page-columns">
          <PhotoFrame photo={photos.filming} />
          <div className="page-prose">
            <p>
              Bespoke, one-to-one training in London. Spend an in-person day
              developing your photography, filming or editing skills with Pocket
              Creatives.
            </p>
            <p>
              We start with an exploratory conversation about your experience,
              what you want to learn and how you will use it. From there, we
              create a tailored plan and agree a suitable date.
            </p>
            <PrimaryButton href="/contact">
              Discuss Your Training Day
            </PrimaryButton>
          </div>
        </div>
      </PageSection>
      <PageSection label="Your focus" number="02">
        {[
          [
            "Photography",
            "Build confidence with the camera, lighting and the kinds of images you want to create.",
          ],
          [
            "Filming",
            "Explore the practical production skills you need to capture your own video content.",
          ],
          [
            "Editing",
            "Work on bringing your material together, with the session shaped around your learning goals.",
          ],
        ].map(([title, text], i) => (
          <div className="editorial-row" key={title}>
            <span className="editorial-index">/0{i + 1}</span>
            <h2 data-page-reveal>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </PageSection>
      <PageSection label="Make a plan" number="03">
        <div className="page-columns">
          <h2 data-page-reveal>
            Start with
            <br />a conversation.
          </h2>
          <div className="page-prose">
            <p>
              Choose a single focus or discuss a combination of photography,
              filming and editing. Tell us what you already know, the equipment
              or software you use and the work you want to make.
            </p>
            <p>
              We’ll confirm the scope, current fee, location and date with you
              before booking.
            </p>
            <PrimaryButton href="/contact">
              Enquire About Training
            </PrimaryButton>
          </div>
        </div>
      </PageSection>
      <ContactCTA />
    </PageFrame>
  );
}
