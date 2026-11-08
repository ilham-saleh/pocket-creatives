import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

// Each collaborator obtains Switzer directly from Fontshare under its own FFL.
// Do not subset/convert these fonts or redistribute them through a public repo.
const root = resolve(import.meta.dirname, "..");
const sources = JSON.parse(
  await readFile(new URL("./font-sources.json", import.meta.url), "utf8"),
);
for (const source of sources) {
  const destination = resolve(root, source.path);
  let bytes;
  try {
    bytes = await readFile(destination);
  } catch {
    /* Download missing local font. */
  }
  if (
    !bytes ||
    createHash("sha256").update(bytes).digest("hex") !== source.sha256
  ) {
    const response = await fetch(source.url);
    if (!response.ok)
      throw new Error(`Font download failed: HTTP ${response.status}`);
    bytes = Buffer.from(await response.arrayBuffer());
    if (createHash("sha256").update(bytes).digest("hex") !== source.sha256) {
      throw new Error(
        `Official font changed: review licence and metrics before updating ${source.path}`,
      );
    }
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
  }
  console.log(`Verified ${source.path}`);
}
