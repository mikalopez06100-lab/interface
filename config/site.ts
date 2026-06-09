export const siteConfig = {
  brand: "Inter|Face",
  tagline: "Maîtrise d'œuvre — Côte d'Azur",
  legalName: "InterFace",
  city: "Nice",
  serviceArea: ["Alpes-Maritimes", "Monaco"],
  contact: {
    email: "contact@interface-moe.com",
    phone: "06 11 27 19 19",
    phoneTel: "+33611271919",
  },
  assets: {
    favicon: "/brand/favicon.png",
    horizontal: "/brand/logo-horizontal.png",
    horizontalLight: "/brand/logo-horizontal-light.png",
    vertical: "/brand/logo-vertical.png",
    verticalLight: "/brand/logo-vertical-light.png",
    symbolNegative: "/brand/logo-symbole-negatif.png",
    symbolPositive: "/brand/logo-symbole-positif.png",
    symbolMonochrome: "/brand/logo-symbole-monochrome.png",
  },
  placeholders: {
    phone: "06 11 27 19 19",
    email: "contact@interface-moe.com",
    address: "[adresse exacte à compléter]",
    siret: "[SIRET à compléter]",
    legalNotice: "[mentions légales à compléter]",
    privacyPolicy: "[politique de confidentialité à compléter]",
    insuranceCertificates: "[attestations d'assurance à compléter]",
    clientTestimonial: "[témoignage client réel à compléter]",
    galleryCaption: "[légende chantier à compléter]",
    articleDate: "[date de publication à compléter]",
  },
} as const;

export const brandAlt = `${siteConfig.brand} — ${siteConfig.tagline}`;
