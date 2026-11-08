import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Pocket Creatives — video production and photography in London";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [font, logo] = await Promise.all([
    readFile(
      join(process.cwd(), "src/assets/fonts/inter/InterDisplay-Bold-latin.ttf"),
    ),
    readFile(join(process.cwd(), "src/assets/brand/pocket-creatives-logo-og.png")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 64,
        background: "#09090b",
        color: "#f0f0f0",
        fontFamily: "Inter Display",
        justifyContent: "space-between",
      }}
    >
      {/* ImageResponse renders its own image elements, outside the web page. */}
      <img
        src={`data:image/png;base64,${logo.toString("base64")}`}
        width={192}
        height={96}
        style={{ flexShrink: 0 }}
        alt="Pocket Creatives"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        <span>Big ideas.</span>
        <span>Beautifully captured.</span>
      </div>
      <div style={{ fontSize: 30, color: "#fb4930" }}>
        Video production &amp; photography · London
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter Display", data: font, weight: 700, style: "normal" },
      ],
    },
  );
}
