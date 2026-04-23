import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Best UK Land Casinos — licensed venues in Great Britain",
    short_name: "UK Land Casinos",
    description:
      "Editorial guide to licensed land-based casino and betting premises in Great Britain. Not an online casino. 18+.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#012169",
    lang: "en-GB",
    dir: "ltr",
    categories: ["entertainment", "lifestyle"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  }
}
