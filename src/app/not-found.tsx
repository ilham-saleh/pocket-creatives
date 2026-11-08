import { PrimaryButton } from "@/components/ui/primary-button";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="site-container not-found">
      <p>404</p>
      <h1 className="heading-section">This page isn’t here.</h1>
      <p className="paragraph-large">
        Explore our work or return to the homepage.
      </p>
      <PrimaryButton href="/work">
        Explore Our Work
      </PrimaryButton>
    </main>
  );
}
