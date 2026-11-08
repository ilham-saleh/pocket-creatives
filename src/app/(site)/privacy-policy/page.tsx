import Link from "next/link";
import { PageFrame } from "@/components/pages/page-parts";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Privacy Policy",
  "How this Pocket Creatives website handles project enquiries and website information.",
  "/privacy-policy",
);
export default function PrivacyPage() {
  return (
    <PageFrame>
      <header className="policy-header site-container">
        <h1>Privacy Policy</h1>
      </header>
      <article className="policy-copy site-container">
        <p>Draft for review before launch · 6 November 2026</p>
        <h2>Who to contact</h2>
        <p>
          Pocket Creatives Limited is the business behind this website. For
          privacy questions or requests concerning your information, email{" "}
          <a href="mailto:team@pocketcreatives.co.uk">
            team@pocketcreatives.co.uk
          </a>
          . Company number: 11041856.
        </p>
        <h2>Project enquiries</h2>
        <p>
          The enquiry form asks for your name, email address, service and
          project description. You may also choose to provide your company,
          phone number, budget, timeframe and website. Please avoid including
          sensitive information that is not needed for the enquiry.
        </p>
        <p>
          These details are used to respond to your request and discuss a
          potential project. Submitting an enquiry does not subscribe you to
          marketing. If online delivery is unavailable, the form tells you and
          provides direct contact details.
        </p>
        <h2>Delivery and service providers</h2>
        <p>
          When online enquiries are enabled, form details are sent through
          Resend to the agency’s business inbox. Website hosting and email
          providers may process technical information needed to operate their
          services. The website does not publish your enquiry or save it in a
          public gallery.
        </p>
        <h2>Videos and external links</h2>
        <p>
          Project videos are hosted by Vimeo. An embedded player loads only
          after you choose to play it; Vimeo then receives connection
          information such as your IP address. You can also open the film
          directly on Vimeo. External websites have their own privacy policies.
        </p>
        <h2>Your choices</h2>
        <p>
          You may contact the agency about access to, correction of or deletion
          of your personal information. Other data protection rights may apply
          depending on the processing involved. You can also raise a concern
          with the{" "}
          <a href="https://ico.org.uk/make-a-complaint/">
            Information Commissioner’s Office
          </a>
          .
        </p>
        <h2>Before this policy is published</h2>
        <p>
          This preview policy needs the agency’s approval of its current contact
          address, lawful bases, retention periods, hosting arrangements,
          provider agreements and any international transfers. It is not a final
          description of all agency processing.
        </p>
        <p>
          For information about video embeds and browser storage, see our{" "}
          <Link href="/cookie-policy">cookie policy</Link>.
        </p>
      </article>
    </PageFrame>
  );
}
