import type { Metadata } from "next";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";
import { buildPageMetadata } from "@/lib/seo";
import { loadStaticHtmlDocument } from "@/lib/static-html";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await loadStaticHtmlDocument("offre-interface.html");
  return buildPageMetadata({ title: doc.title, description: doc.description, pathname: "/offre" });
}

export default function OffrePage() {
  return <StaticHtmlPage fileName="offre-interface.html" />;
}
