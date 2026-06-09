import Script from "next/script";
import { loadStaticHtmlDocument } from "@/lib/static-html";
import { SITE_UX_CSS } from "@/lib/site-ux";

type Props = {
  fileName: string;
};

export async function StaticHtmlPage({ fileName }: Props) {
  const doc = await loadStaticHtmlDocument(fileName);

  return (
    <>
      {doc.styles.map((style, index) => (
        <style key={`style-${index}`} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      <style dangerouslySetInnerHTML={{ __html: SITE_UX_CSS }} />
      {doc.jsonLd.map((schema, index) => (
        <Script
          key={`jsonld-${index}`}
          id={`${fileName}-jsonld-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: doc.bodyHtml }} />
      {doc.scripts.map((script, index) => (
        <Script
          key={`script-${index}`}
          id={`${fileName}-script-${index}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: script }}
        />
      ))}
    </>
  );
}
