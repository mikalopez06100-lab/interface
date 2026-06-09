import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <BrandLogo variant="nav" href="/" priority />
        <nav className="site-header-nav" aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <Link href="/offre">L&apos;offre</Link>
          <Link href="/professionnels">Professionnels</Link>
          <Link href="/#contact" className="site-header-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
