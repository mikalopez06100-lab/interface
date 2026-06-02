import type { Metadata } from "next";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";
import { buildPageMetadata } from "@/lib/seo";
import { loadStaticHtmlDocument } from "@/lib/static-html";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await loadStaticHtmlDocument("pro-interface.html");
  return buildPageMetadata({ title: doc.title, description: doc.description, pathname: "/professionnels" });
}

export default function ProfessionnelsPage() {
  return <StaticHtmlPage fileName="pro-interface.html" />;
}
