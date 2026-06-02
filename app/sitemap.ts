import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://interface-preprod.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/offre",
    "/professionnels",
    "/estimation",
    "/actualites",
    "/actualites/surelevation-maison-cote-azur",
    "/mentions-legales",
    "/politique-confidentialite",
  ].map((pathname) => ({
    url: `${BASE_URL}${pathname}`,
    changeFrequency: "weekly",
    priority: pathname === "" ? 1 : 0.8,
  }));
}
