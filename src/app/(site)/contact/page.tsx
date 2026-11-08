import { PageFrame } from "@/components/pages/page-parts";
import { ProjectEnquiryForm } from "@/components/forms/project-enquiry-form";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { getEnquiryConfig } from "@/lib/enquiry-config";
import { enquiryIsAvailable } from "@/lib/enquiry-server";
export const metadata = pageMetadata(
  "Contact — Start a Project",
  "Tell Pocket Creatives about your photography, video production or creative training project. Contact our London team.",
  "/contact",
);
export default function ContactPage() {
  return (
    <PageFrame>
      <section className="contact-page site-container">
        <div className="contact-wrap">
          <h1 className="contact-title" data-page-reveal>
            Let’s Talk
          </h1>
          <ProjectEnquiryForm
            initiallyAvailable={enquiryIsAvailable(getEnquiryConfig())}
          />
          <address className="contact-details">
            <div>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <span>Call</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div>
              <span>Find us</span>
              <p>
                {site.location}
                <br />
                Contact us to arrange a visit.
              </p>
            </div>
          </address>
        </div>
      </section>
    </PageFrame>
  );
}
