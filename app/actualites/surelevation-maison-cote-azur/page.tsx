import type { Metadata } from "next";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";
import { buildPageMetadata } from "@/lib/seo";
import { loadStaticHtmlDocument } from "@/lib/static-html";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await loadStaticHtmlDocument("article-interface.html");
  return buildPageMetadata({
    title: doc.title,
    description: doc.description,
    pathname: "/actualites/surelevation-maison-cote-azur",
  });
}

export default function ArticleSurelevationPage() {
  return <StaticHtmlPage fileName="article-interface.html" />;
}
