import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function ActualitesPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ padding: "4rem 1.5rem", maxWidth: 1120, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>Actualites</h1>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
        <article style={{ border: "1px solid #dcd3c2", background: "#fbf8f1", padding: "1.2rem" }}>
          <p style={{ fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase" }}>Conseils</p>
          <h2 style={{ margin: ".5rem 0 1rem" }}>
            Surélévation de maison sur la Côte d&apos;Azur : faisabilité, règles et conseils
          </h2>
          <Link href="/actualites/surelevation-maison-cote-azur">Lire l&apos;article</Link>
        </article>
        <article style={{ border: "1px solid #dcd3c2", background: "#fbf8f1", padding: "1.2rem" }}>
          <p style={{ fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase" }}>Bientôt disponible</p>
          <h2 style={{ margin: ".5rem 0 1rem" }}>Hors d&apos;eau hors d&apos;air ou clé en main</h2>
          <p>[article à publier]</p>
        </article>
        <article style={{ border: "1px solid #dcd3c2", background: "#fbf8f1", padding: "1.2rem" }}>
          <p style={{ fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase" }}>Bientôt disponible</p>
          <h2 style={{ margin: ".5rem 0 1rem" }}>Combien coûte une rénovation lourde</h2>
          <p>[article à publier]</p>
        </article>
      </div>
    </main>
    </>
  );
}
