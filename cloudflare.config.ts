import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "963e4ac33ac96bff809dad903fd43c25",
  worker: defineWorker({
    name: "pocket-creatives",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-08",
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
      ENABLE_HOMEPAGE_PREVIEW: bindings.text("true"),
      ENABLE_SITE_PREVIEW: bindings.text("true"),
      ENABLE_FOUNDATION_PREVIEW: bindings.text("false"),
      SITE_INDEXABLE: bindings.text("false"),
      SITE_URL: bindings.text("https://www.pocketcreatives.co.uk"),
      ENABLE_LEGACY_REDIRECTS: bindings.text("false"),
      CONTACT_ENABLED: bindings.text("false"),
      CONTACT_TO: bindings.text("team@pocketcreatives.co.uk"),
    },
  }),
});
