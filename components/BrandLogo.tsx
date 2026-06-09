import Image from "next/image";
import Link from "next/link";
import { brandAlt, siteConfig } from "@/config/site";

type Variant = "nav" | "footer" | "vertical" | "symbol";

type Props = {
  variant?: Variant;
  href?: string;
  priority?: boolean;
};

const sizes: Record<Variant, { width: number; height: number; className: string }> = {
  nav: { width: 240, height: 56, className: "brand-logo-nav" },
  footer: { width: 260, height: 60, className: "brand-logo-footer" },
  vertical: { width: 200, height: 130, className: "brand-logo-vertical" },
  symbol: { width: 40, height: 40, className: "brand-logo-symbol" },
};

export function BrandLogo({ variant = "nav", href = "/", priority = false }: Props) {
  const { width, height, className } = sizes[variant];
  const src =
    variant === "vertical"
      ? siteConfig.assets.vertical
      : variant === "symbol"
        ? siteConfig.assets.symbolNegative
        : variant === "nav"
          ? siteConfig.assets.horizontalLight
          : siteConfig.assets.horizontal;

  const image = (
    <Image
      src={src}
      alt={variant === "symbol" ? "" : brandAlt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="brand-link" aria-label={`${siteConfig.brand} — Accueil`}>
      {image}
    </Link>
  );
}
