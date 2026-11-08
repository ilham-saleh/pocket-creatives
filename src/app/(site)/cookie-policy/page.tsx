import Link from "next/link";
import { PageFrame } from "@/components/pages/page-parts";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Cookie Policy",
  "Information about cookies, external video players and browser storage on this website.",
  "/cookie-policy",
);
export default function CookiePage() {
  return (
    <PageFrame>
      <header className="policy-header site-container">
        <h1>Cookie Policy</h1>
      </header>
      <article className="policy-copy site-container">
        <p>Draft for review before launch · 6 November 2026</p>
        <h2>This website</h2>
        <p>
          This preview does not install analytics, advertising or marketing
          trackers. Its enquiry form does not use cookies or local storage to
          save your contact details. Form values remain in the current page
          while you complete the enquiry or retry a failed submission.
        </p>
        <h2>Vimeo videos</h2>
        <p>
          No Vimeo player is requested until you choose to play a video. The
          player is requested with Vimeo’s Do Not Track option. This does not
          make the connection anonymous: Vimeo still receives the information
          needed to serve the video and may use storage necessary for its
          player.
        </p>
        <p>
          You can leave the player closed or follow the direct Vimeo link
          instead. See{" "}
          <a href="https://vimeo.com/privacy">Vimeo’s privacy information</a>{" "}
          for details of its service.
        </p>
        <h2>Your browser settings</h2>
        <p>
          Your browser can restrict or clear cookies and other site data. Some
          third-party video features may not work when storage is restricted.
        </p>
        <h2>Changes before launch</h2>
        <p>
          The final hosting environment and any additional services must be
          checked before publication. If analytics or other optional storage is
          introduced, this policy and the relevant consent controls will need to
          be updated before that service is enabled.
        </p>
        <p>
          See the <Link href="/privacy-policy">privacy policy</Link> or email{" "}
          <a href="mailto:team@pocketcreatives.co.uk">
            team@pocketcreatives.co.uk
          </a>{" "}
          with questions.
        </p>
      </article>
    </PageFrame>
  );
}
