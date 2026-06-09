import { brandAlt, siteConfig } from "@/config/site";

export const navBrandHtml = (href: string) =>
  `<a href="${href}" class="brand" aria-label="${siteConfig.brand} — Accueil">` +
  `<img class="brand-wordmark" src="${siteConfig.assets.horizontalLight}" alt="${brandAlt}" width="240" height="56" decoding="async" loading="eager" />` +
  `</a>`;

export const footerBrandHtml = () =>
  `<div class="foot-brand">` +
  `<img src="${siteConfig.assets.horizontalLight}" alt="${brandAlt}" width="260" height="60" decoding="async" loading="lazy" />` +
  `</div>`;

export const simulateurBrandHtml = () =>
  `<div class="brand">` +
  `<img src="${siteConfig.assets.verticalLight}" alt="${brandAlt}" width="200" height="130" decoding="async" loading="eager" />` +
  `</div>`;

export const injectBrandAssets = (bodyHtml: string) =>
  bodyHtml
    .replace(
      /<a href="([^"]*)" class="brand">InterFace<small>[^<]*<\/small><\/a>/g,
      (_, href: string) => navBrandHtml(href)
    )
    .replace(
      /<div class="foot-brand">InterFace<small>[^<]*<\/small><\/div>/g,
      footerBrandHtml()
    )
    .replace(
      /<div class="brand">InterFace<small>[^<]*<\/small><\/div>/g,
      simulateurBrandHtml()
    );
