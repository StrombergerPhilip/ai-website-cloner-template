import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foxora",
    short_name: "Foxora",
    description:
      "Premium-Loyalty mit hartem 100 %-Cap. AT GmbH × Dubai FZ-LLC.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf7",
    theme_color: "#1a1916",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
