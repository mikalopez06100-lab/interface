import type { Metadata } from "next";
import { brandAlt, siteConfig } from "@/config/site";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://interface-preprod.vercel.app";

type SeoInput = {
  title: string;
  description: string;
  pathname: string;
};

export const buildPageMetadata = ({ title, description, pathname }: SeoInput): Metadata => {
  const url = `${BASE_URL}${pathname}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${BASE_URL}${siteConfig.assets.horizontal}`,
          width: 1200,
          height: 280,
          alt: brandAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};
