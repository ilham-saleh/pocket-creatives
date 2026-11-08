import {
  PageFrame,
  PageHero,
  PageSection,
  ContactCTA,
  PageFAQ,
} from "@/components/pages/page-parts";
import { photos } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { ProjectGrid } from "@/components/portfolio/project-grid";
export const metadata = pageMetadata(
  "Our Work — Film & Photography",
  "Explore films and photography from the Pocket Creatives portfolio, including commercial campaigns, beauty, food and products.",
  "/work",
);
export default function WorkPage() {
  return (
    <PageFrame>
      <PageHero title="Our Work" photo={photos.watch} />
      <PageSection label="Selected work" title="The work speaks for itself.">
        <p className="page-intro">
          Films and photographs. Different briefs, the same attention to detail.
        </p>
        <ProjectGrid />
      </PageSection>
      <PageFAQ />
      <ContactCTA />
    </PageFrame>
  );
}
