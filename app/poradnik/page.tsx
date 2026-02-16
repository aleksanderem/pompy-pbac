import { Metadata } from "next";
import { articles } from "@/lib/articles";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PoradnikPageClient from "./poradnik-page-client";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Kompletny poradnik o pompach ciepła 2026 | PBAC Warszawa",
  description:
    "Wszystko o pompach ciepła w jednym miejscu — jak działają, ile kosztują, jakie dotacje, montaż krok po kroku, porównanie czynników R290 vs R32. Kompletny poradnik PBAC.",
  alternates: {
    canonical: "/poradnik",
  },
  openGraph: {
    title: "Kompletny poradnik o pompach ciepła 2026 | PBAC",
    description:
      "Wszystko o pompach ciepła w jednym miejscu — jak działają, ile kosztują, jakie dotacje, montaż krok po kroku.",
    type: "website",
    siteName: "PBAC",
  },
};

const categoryOrder = ["Poradnik", "Finanse", "Dotacje", "Montaż", "Technologia"];

export default function PoradnikPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    articles: articles.filter((a) => a.category === cat),
  })).filter((g) => g.articles.length > 0);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://pompy.pbac.pl/poradnik",
    name: "Kompletny poradnik o pompach ciepła 2026",
    description:
      "Wszystko o pompach ciepła w jednym miejscu — jak działają, ile kosztują, jakie dotacje, montaż, porównanie czynników R290 vs R32.",
    url: "https://pompy.pbac.pl/poradnik",
    isPartOf: { "@id": "https://pompy.pbac.pl/#website" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `https://pompy.pbac.pl/blog/${a.slug}`,
      })),
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://pompy.pbac.pl/#organization",
      name: "PBAC",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://pompy.pbac.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Poradnik",
        item: "https://pompy.pbac.pl/poradnik",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />
      <Navbar />
      <PoradnikPageClient grouped={grouped} />
      <Footer />
    </main>
  );
}
