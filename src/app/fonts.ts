import localFont from "next/font/local";

export const displayFont = localFont({
  src: [
    {
      path: "../assets/fonts/inter/InterDisplay-SemiBold-latin.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/inter/InterDisplay-Bold-latin.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display-latin",
  display: "swap",
  adjustFontFallback: false,
});

// Unchanged originals supply characters outside the lightweight Latin subset.
// They are downloaded only when a rendered character needs this fallback.
export const displayFallbackFont = localFont({
  src: [
    {
      path: "../assets/fonts/inter/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/inter/InterDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display-fallback",
  display: "swap",
  preload: false,
});

export const bodyFont = localFont({
  src: [
    {
      path: "../assets/fonts/switzer/Switzer-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/switzer/Switzer-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/switzer/Switzer-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const paragraphFont = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2",
  weight: "400",
  variable: "--font-paragraph",
  display: "swap",
  preload: false,
});
