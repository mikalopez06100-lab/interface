export const COUT_BASE = {
  reno_partielle: 1200,
  reno_lourde: 2200,
  extension: 2800,
  neuf: 3200,
} as const;

export const MULT_STANDING = {
  standard: 1.0,
  premium: 1.35,
  exception: 1.85,
} as const;

export const MULT_COMPLEX = {
  aucune: 1.0,
  structure: 1.15,
  terrain: 1.18,
  patrimoine: 1.25,
} as const;

export const MULT_ZONE = {
  littoral: 1.15,
  moyen: 1.0,
  arrierepays: 0.92,
} as const;

export const FOURCHETTE = 0.18;
export const HONORAIRES = { bas: 0.08, haut: 0.12 } as const;

export const ESTIMATION_DISCLAIMER =
  "Estimation strictement indicative. Cette fourchette est générée à partir de ratios moyens et ne constitue ni un devis, ni un engagement contractuel. Seule une étude sur pièces et sur site permet un chiffrage fiable. Les coûts réels dépendent de l'état du bien, des choix techniques et des contraintes propres à votre projet.";
