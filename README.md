# InterFace - Site statique Next.js

Migration technique des maquettes HTML vers un site Next.js 14 (App Router), avec routes propres, SEO technique, extraction des images base64 et câblage des leads.

## Stack

- Next.js 14 (App Router) + TypeScript
- CSS des maquettes conservé
- `next/font` : Fraunces + Instrument Sans

## Routes

- `/` (Accueil)
- `/offre`
- `/professionnels`
- `/estimation`
- `/actualites`
- `/actualites/surelevation-maison-cote-azur`
- `/mentions-legales`
- `/politique-confidentialite`

## Configuration

Copier `.env.example` vers `.env.local` puis renseigner :

```bash
LEAD_WEBHOOK_URL=...
NEXT_PUBLIC_SITE_URL=https://votre-domaine-preprod.vercel.app
```

## Commandes

```bash
npm install
npm run extract:images
npm run dev
npm run lint
npm run build
```

## Leads (contact + simulateur)

- Endpoint interne : `POST /api/lead`
- Le serveur relaie le payload vers `LEAD_WEBHOOK_URL` (Make/Brevo/Supabase)
- Aucune clé API n'est exposée côté client

## SEO technique

- JSON-LD FAQ + Article conservés depuis les maquettes
- JSON-LD `LocalBusiness` global injecté dans `app/layout.tsx`
- Metadata par page : title, description, canonical, Open Graph, Twitter
- `sitemap.xml` et `robots.txt` générés via `app/sitemap.ts` et `app/robots.ts`

## Sources maquettes

- Fichiers bruts : `source-html/`
- Fichiers traités (liens internes + images externalisées) : `source-html-processed/`
- Images extraites : `public/images/extracted/`

## Notes

- Les placeholders `[ ... ]` demandés par le brief sont conservés.
- Les ratios simulateur sont centralisés dans `config/estimation.ts`.
- Les placeholders légaux/commerciaux sont centralisés dans `config/site.ts`.
