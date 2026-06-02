import type { Metadata } from "next";

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
      siteName: "InterFace",
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
};
