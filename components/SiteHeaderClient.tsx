"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/offre", label: "L'offre" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/#contact", label: "Contact", cta: true },
];

export function SiteHeaderClient() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className={`site-header-inner nav${open ? " open" : ""}`}>
        <BrandLogo variant="nav" href="/" priority />
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className="nav-overlay" aria-hidden={!open} onClick={close} />
        <nav
          id={drawerId}
          className="site-nav-drawer"
          aria-label="Navigation principale"
          aria-hidden={!open}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.cta ? "site-header-cta" : undefined}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
