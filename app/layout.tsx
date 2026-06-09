import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { NAV_DRAWER_CSS } from "@/lib/site-ux";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    "Maîtrise d'œuvre, construction et rénovation sur la Côte d'Azur et le Var. Un interlocuteur unique de l'étude de faisabilité à la livraison.",
  icons: {
    icon: [{ url: siteConfig.assets.favicon, type: "image/png" }],
    apple: [{ url: siteConfig.assets.favicon, type: "image/png" }],
    shortcut: [siteConfig.assets.favicon],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.brand,
    areaServed: siteConfig.serviceArea,
    addressLocality: siteConfig.city,
    telephone: siteConfig.contact.phoneTel,
    email: siteConfig.contact.email,
    address: siteConfig.placeholders.address,
  };

  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${instrumentSans.variable}`}>
        <style dangerouslySetInnerHTML={{ __html: NAV_DRAWER_CSS }} />
        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
