import { writeFile } from "node:fs/promises";
const base = (process.argv[2] || "http://127.0.0.1:3006").replace(/\/$/, "");
const checks = [];
const routes = [
  "/",
  "/work",
  "/work/california-walnuts",
  "/work/beauty-photography",
  "/work/samsung-sparkbox",
  "/work/food-photography",
  "/work/product-photography",
  "/services",
  "/services/video-production",
  "/services/photography",
  "/about",
  "/process",
  "/pricing",
  "/creative-training",
  "/contact",
  "/journal",
  "/journal/photography-and-video-agency-london",
  "/privacy-policy",
  "/cookie-policy",
];
for (const path of routes) {
  const response = await fetch(base + path);
  const html = await response.text();
  checks.push({
    path,
    status: response.status,
    pass:
      response.status === 200 &&
      html.includes("<h1") &&
      response.headers.get("x-robots-tag")?.includes("noindex"),
  });
}
for (const path of ["/missing-page", "/foundation"]) {
  const response = await fetch(base + path);
  checks.push({ path, status: response.status, pass: response.status === 404 });
}
const enquiry = await fetch(base + "/api/enquiry");
checks.push({
  path: "/api/enquiry",
  pass: enquiry.status === 200 && (await enquiry.json()).available === false,
});
const image = await fetch(base + "/opengraph-image");
checks.push({
  path: "/opengraph-image",
  pass:
    image.status === 200 &&
    image.headers.get("content-type")?.includes("image/png"),
});
const robots = await fetch(base + "/robots.txt").then((r) => r.text());
checks.push({ path: "/robots.txt", pass: robots.includes("Disallow: /") });
const sitemap = await fetch(base + "/sitemap.xml").then((r) => r.text());
checks.push({ path: "/sitemap.xml", pass: !sitemap.includes("<loc>") });
const result = { base, pass: checks.every((c) => c.pass), checks };
if (process.argv[3])
  await writeFile(process.argv[3], JSON.stringify(result, null, 2) + "\n");
console.log(
  `${checks.filter((c) => c.pass).length}/${checks.length} deployment checks passed: ${base}`,
);
if (!result.pass) {
  console.log(checks.filter((c) => !c.pass));
  process.exitCode = 1;
}
