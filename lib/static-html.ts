import fs from "node:fs/promises";
import path from "node:path";
import {
  COUT_BASE,
  ESTIMATION_DISCLAIMER,
  FOURCHETTE,
  HONORAIRES,
  MULT_COMPLEX,
  MULT_STANDING,
  MULT_ZONE,
} from "@/config/estimation";
import { injectBrandAssets } from "@/lib/brand";
import { appendSiteUxScript } from "@/lib/site-ux";
import { siteConfig } from "@/config/site";

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "source-html-processed");

export type StaticHtmlDocument = {
  title: string;
  description: string;
  styles: string[];
  scripts: string[];
  jsonLd: string[];
  bodyHtml: string;
};

const asJsObject = (value: unknown) => JSON.stringify(value).replace(/"([^"]+)":/g, "$1:");

const routeLinkRewrites: Array<[RegExp, string]> = [
  [/landing-interface\.html#realisations/g, "/#realisations"],
  [/landing-interface\.html#actualites/g, "/actualites"],
  [/landing-interface\.html#contact/g, "/#contact"],
  [/landing-interface\.html/g, "/"],
  [/offre-interface\.html/g, "/offre"],
  [/pro-interface\.html/g, "/professionnels"],
  [/article-interface\.html/g, "/actualites/surelevation-maison-cote-azur"],
  [/simulateur-interface\.html/g, "/estimation"],
];

const rewriteLinks = (value: string) =>
  routeLinkRewrites.reduce(
    (acc, [pattern, replacement]) => acc.replace(pattern, replacement),
    value
  );

const injectContactFormEnhancements = (bodyHtml: string) =>
  bodyHtml
    .replace(
      '<input type="text" placeholder="Votre nom">',
      '<input type="text" id="contact_name" name="name" placeholder="Votre nom">'
    )
    .replace(
      '<input type="email" placeholder="vous@email.com">',
      '<input type="email" id="contact_email" name="email" placeholder="vous@email.com" required>'
    )
    .replace(
      '<input type="tel" placeholder="06 ..">',
      '<input type="tel" id="contact_phone" name="phone" placeholder="06 ..">'
    )
    .replace("<select>", '<select id="contact_project" name="project">')
    .replace(
      '<select>',
      '<select id="contact_budget" name="budget">'
    )
    .replace(
      '<textarea rows="3" placeholder="Localisation, type de bien, ce que vous souhaitez réaliser…"></textarea>',
      '<textarea id="contact_message" name="message" rows="3" placeholder="Localisation, type de bien, ce que vous souhaitez réaliser…"></textarea>'
    )
    .replace(
      '<a href="#" class="btn btn-dark">Envoyer ma demande</a>',
      '<button type="button" id="contact_submit" class="btn btn-dark">Envoyer ma demande</button><label style="display:flex;gap:8px;align-items:flex-start;margin-top:12px;"><input type="checkbox" id="contact_consent"><span style="font-size:.82rem;color:var(--muted);">J\\u2019accepte que mes données soient utilisées pour me recontacter au sujet de ce projet (RGPD).</span></label>'
    );

const simulateurScriptConfigBlock = `
const COUT_BASE = ${asJsObject(COUT_BASE)};
const MULT_STANDING = ${asJsObject(MULT_STANDING)};
const MULT_COMPLEX  = ${asJsObject(MULT_COMPLEX)};
const MULT_ZONE     = ${asJsObject(MULT_ZONE)};
const FOURCHETTE = ${FOURCHETTE};
const HONORAIRES = ${asJsObject(HONORAIRES)};
`;

const rewriteScripts = (fileName: string, scripts: string[]) => {
  let nextScripts = scripts;

  if (fileName === "simulateur-interface.html") {
    nextScripts = nextScripts.map((script) =>
      script
        .replace(
          /const COUT_BASE[\s\S]*?const HONORAIRES = .*?;/m,
          simulateurScriptConfigBlock.trim()
        )
        .replace(
          /console\.log\('LEAD CAPTURÉ →',lead\);\s*\/\* TODO Olivier\/Cursor : POST ce payload vers webhook Make\/Brevo \*\//m,
          `fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source:'simulateur',lead})})
  .then(()=>console.log('Lead simulateur envoyé'))
  .catch(()=>console.warn('Échec envoi lead simulateur'));`
        )
        .replace(
          "Cette fourchette est générée à partir de ratios moyens et ne constitue ni un devis, ni un engagement contractuel. Seule une étude sur pièces et sur site permet un chiffrage fiable. Les coûts réels dépendent de l'état du bien, des choix techniques et des contraintes propres à votre projet.",
          ESTIMATION_DISCLAIMER
        )
    );
  }

  if (fileName === "landing-interface.html") {
    nextScripts = [
      ...nextScripts,
      `
const contactBtn=document.getElementById('contact_submit');
if(contactBtn){
  contactBtn.addEventListener('click',async()=>{
    const name=document.getElementById('contact_name')?.value?.trim();
    const email=document.getElementById('contact_email')?.value?.trim();
    const phone=document.getElementById('contact_phone')?.value?.trim();
    const project=document.getElementById('contact_project')?.value;
    const budget=document.getElementById('contact_budget')?.value;
    const message=document.getElementById('contact_message')?.value?.trim();
    const consent=!!document.getElementById('contact_consent')?.checked;
    if(!name||!email||!consent){alert('Merci de renseigner nom, email et consentement RGPD.');return;}
    const payload={source:'contact',lead:{name,email,phone,project,budget,message,consent}};
    try{
      await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      alert('Demande envoyée. Merci, nous revenons vers vous sous 48h.');
    }catch{
      alert('Erreur d\\'envoi. Merci de réessayer.');
    }
  });
}
      `.trim(),
    ];
  }

  return appendSiteUxScript(nextScripts);
};

const faqNavTargets: Record<string, string> = {
  "offre-interface.html": "offre-interface.html#faq",
  "article-interface.html": "article-interface.html#faq",
};

const injectContactInfo = (bodyHtml: string) => {
  const { email, phone, phoneTel } = siteConfig.contact;
  return bodyHtml
    .replace(
      /<div class="cinfo"><div class="l">Téléphone<\/div><div class="v"><span class="todo">\[À compléter\]<\/span><\/div><\/div>/,
      `<div class="cinfo"><div class="l">Téléphone</div><div class="v"><a href="tel:${phoneTel}">${phone}</a></div></div>`
    )
    .replace(
      /<div class="cinfo"><div class="l">Email<\/div><div class="v"><span class="todo">\[À compléter — adresse pro dédiée\]<\/span><\/div><\/div>/,
      `<div class="cinfo"><div class="l">Email</div><div class="v"><a href="mailto:${email}">${email}</a></div></div>`
    )
    .replace(
      /<p>Nice \(06100\)<\/p>\s*(<p class="todo" style="display:inline-block;">\[Assurances)/,
      `<p>Nice (06100)</p><p><a href="tel:${phoneTel}">${phone}</a></p><p><a href="mailto:${email}">${email}</a></p>$1`
    );
};

const injectFaqNavLink = (bodyHtml: string, fileName: string) => {
  if (bodyHtml.includes(">FAQ</a>")) return bodyHtml;
  const faqHref = faqNavTargets[fileName] ?? "landing-interface.html#faq";
  return bodyHtml.replace(
    /(<nav class="nav"[^>]*>[\s\S]*?)(<a href="[^"]*#actualites"[^>]*>Actualités<\/a>)/,
    `$1<a href="${faqHref}">FAQ</a>$2`
  );
};

const dedupeOffreFaq = (bodyHtml: string) => {
  const seen = new Set<string>();
  return bodyHtml.replace(
    /<div class="faq-item rv"[^>]*><button class="faq-q">([\s\S]*?)<\/button><div class="faq-a">([\s\S]*?)<\/div><\/div>/g,
    (match, question: string) => {
      const key = question.trim();
      if (seen.has(key)) return "";
      seen.add(key);
      return match;
    }
  );
};

const extractMatches = (source: string, pattern: RegExp, group = 1) => {
  const flags = pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`;
  const globalPattern = new RegExp(pattern.source, flags);
  const matches: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = globalPattern.exec(source)) !== null) {
    matches.push(match[group] ?? "");
  }

  return matches;
};

const extractOne = (source: string, pattern: RegExp, fallback = "") =>
  source.match(pattern)?.[1] ?? fallback;

export const loadStaticHtmlDocument = async (
  fileName: string
): Promise<StaticHtmlDocument> => {
  const raw = await fs.readFile(path.join(SOURCE_DIR, fileName), "utf8");
  const title = extractOne(raw, /<title>([\s\S]*?)<\/title>/i);
  const description = extractOne(
    raw,
    /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/i
  );
  const styles = extractMatches(raw, /<style>([\s\S]*?)<\/style>/gi);
  let scripts = extractMatches(
    raw,
    /<script(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi
  );
  const jsonLd = extractMatches(
    raw,
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );
  let bodyHtml = rewriteLinks(extractOne(raw, /<body[^>]*>([\s\S]*?)<\/body>/i));
  bodyHtml = injectBrandAssets(bodyHtml);
  bodyHtml = injectContactInfo(bodyHtml);
  bodyHtml = injectFaqNavLink(bodyHtml, fileName);
  if (fileName === "landing-interface.html") {
    bodyHtml = injectContactFormEnhancements(bodyHtml);
  }
  if (fileName === "offre-interface.html") {
    bodyHtml = dedupeOffreFaq(bodyHtml);
    bodyHtml = bodyHtml.replace(
      "Construction, rénovation, niveaux d'engagement, systèmes constructifs : les réponses aux questions les plus fréquentes.",
      "Construction, rénovation, systèmes constructifs et accompagnement : les réponses aux questions les plus fréquentes."
    );
  }
  scripts = rewriteScripts(fileName, scripts);

  return {
    title,
    description,
    styles,
    scripts,
    jsonLd,
    bodyHtml,
  };
};
