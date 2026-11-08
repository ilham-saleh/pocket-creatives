import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import ts from "typescript";
const checks = [];
const add = (name, pass) => checks.push({ name, pass });
const baseline = JSON.parse(
  await readFile("output/playwright/phase-6/baseline-hashes.json", "utf8"),
);
for (const [path, hash] of Object.entries(baseline))
  add(
    `${path} unchanged`,
    createHash("sha256")
      .update(await readFile(path))
      .digest("hex") === hash,
  );
const before = await readFile(
  "output/playwright/phase-6/before/src/components/home/homepage.tsx",
  "utf8",
);
const after = await readFile("src/components/home/homepage.tsx", "utf8");
const photos = (s) => s.match(/(?:photo|src)=\{[^}]+\}/g);
add(
  "Homepage media assignments unchanged",
  JSON.stringify(photos(before)) === JSON.stringify(photos(after)),
);
const source = await readFile("src/content/legacy-redirects.ts", "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022 },
}).outputText;
const { legacyRedirects } = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);
const destinations = new Set([
  "/about",
  "/services/video-production",
  "/services/photography",
  "/process",
  "/creative-training",
  "/contact",
]);
add(
  "Six redirects map to implemented routes without loops",
  legacyRedirects.length === 6 &&
    legacyRedirects.every(
      (r) =>
        destinations.has(r.destination) &&
        r.source !== r.destination &&
        r.permanent,
    ),
);
add(
  "No broad sector or archive redirects",
  legacyRedirects.every(
    (r) => !r.source.startsWith("/portfolio") && !r.source.includes("blog"),
  ),
);
const response = await fetch("http://127.0.0.1:3005/robots.txt");
add(
  "Preview robots blocks crawling",
  (await response.text()).includes("Disallow: /"),
);
const sitemap = await fetch("http://127.0.0.1:3005/sitemap.xml");
add(
  "Preview sitemap does not publish uncleared pages",
  !(await sitemap.text()).includes("<loc>"),
);
const endpoint = await fetch("http://127.0.0.1:3005/api/enquiry");
add("Unconfigured endpoint unavailable", !(await endpoint.json()).available);
add(
  "Source declarations contain no live API key",
  !(await readFile("src/lib/enquiry-server.ts", "utf8")).match(
    /re_[a-zA-Z0-9]{16,}/,
  ),
);
await writeFile(
  "output/playwright/phase-6/artifact-checks.json",
  JSON.stringify({ pass: checks.every((c) => c.pass), checks }, null, 2),
);
console.log(checks);
if (checks.some((c) => !c.pass)) process.exitCode = 1;
