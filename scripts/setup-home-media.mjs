import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

// Local design candidates only. Public availability does not confer release rights.
const root = resolve(import.meta.dirname, "..");
const sources = JSON.parse(
  await readFile(new URL("./home-media-sources.json", import.meta.url), "utf8"),
);
for (const source of sources) {
  const destination = resolve(root, source.path);
  let bytes;
  try {
    bytes = await readFile(destination);
  } catch {
    /* Fetch missing candidate. */
  }
  if (
    !bytes ||
    createHash("sha256").update(bytes).digest("hex") !== source.sha256
  ) {
    const response = await fetch(source.url);
    if (!response.ok)
      throw new Error(
        `Media download failed: ${source.id}, HTTP ${response.status}`,
      );
    bytes = Buffer.from(await response.arrayBuffer());
    if (createHash("sha256").update(bytes).digest("hex") !== source.sha256)
      throw new Error(
        `Source changed: review ${source.id} before updating the manifest`,
      );
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
  }
  console.log(`Verified preview candidate ${source.id}`);
}
