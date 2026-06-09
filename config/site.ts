export const siteConfig = {
  brand: "Inter|Face",
  tagline: "Maîtrise d'œuvre — Côte d'Azur",
  legalName: "InterFace",
  city: "Nice",
  serviceArea: ["Alpes-Maritimes", "Monaco"],
  assets: {
    favicon: "/brand/favicon.png",
    horizontal: "/brand/logo-horizontal.png",
    vertical: "/brand/logo-vertical.png",
    symbolNegative: "/brand/logo-symbole-negatif.png",
    symbolPositive: "/brand/logo-symbole-positif.png",
    symbolMonochrome: "/brand/logo-symbole-monochrome.png",
  },
  placeholders: {
    phone: "[téléphone à compléter]",
    email: "[email professionnel à compléter]",
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
