import type { Metadata } from "next";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";
import { buildPageMetadata } from "@/lib/seo";
import { loadStaticHtmlDocument } from "@/lib/static-html";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await loadStaticHtmlDocument("simulateur-interface.html");
  return buildPageMetadata({ title: doc.title, description: doc.description, pathname: "/estimation" });
}

export default function EstimationPage() {
  return <StaticHtmlPage fileName="simulateur-interface.html" />;
}
