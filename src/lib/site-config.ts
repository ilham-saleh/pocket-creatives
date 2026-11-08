// Set at build time and runtime; keep previews excluded from search by default.
const configuredUrl = new URL(
  process.env.SITE_URL || "https://www.pocketcreatives.co.uk",
);
if (
  configuredUrl.protocol !== "https:" ||
  configuredUrl.username ||
  configuredUrl.password ||
  configuredUrl.pathname !== "/" ||
  configuredUrl.search ||
  configuredUrl.hash
) {
  throw new Error(
    "SITE_URL must be an HTTPS origin without a path or credentials.",
  );
}
export const siteUrl = configuredUrl.origin;
export const indexingEnabled =
  process.env.SITE_INDEXABLE === "true" &&
  process.env.ENABLE_HOMEPAGE_PREVIEW === "true" &&
  process.env.ENABLE_SITE_PREVIEW === "true";
