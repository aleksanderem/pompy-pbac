import { Metadata } from "next";
import { articles } from "@/lib/articles";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogPageClient from "./blog-page-client";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Blog o pompach ciepła — poradniki, porównania, dotacje | PBAC",
  description:
    "Artykuły eksperckie o pompach ciepła: jak działają, ile kosztują, jakie dotacje, montaż krok po kroku. Praktyczna wiedza od instalatorów z Warszawy.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog o pompach ciepła | PBAC Warszawa",
    description:
      "Artykuły eksperckie o pompach ciepła: działanie, koszty, dotacje, montaż. Praktyczna wiedza od certyfikowanych instalatorów z Warszawy.",
    type: "website",
    siteName: "PBAC",
    url: "https://pompy.pbac.pl/blog",
  },
};

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://pompy.pbac.pl/blog",
    name: "Blog o pompach ciepła",
    description:
      "Artykuły eksperckie o pompach ciepła: jak działają, ile kosztują, jakie dotacje, montaż krok po kroku.",
    url: "https://pompy.pbac.pl/blog",
    isPartOf: { "@id": "https://pompy.pbac.pl/#website" },
    publisher: { "@id": "https://pompy.pbac.pl/#organization" },
    inLanguage: "pl-PL",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sorted.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://pompy.pbac.pl/blog/${article.slug}`,
        name: article.title,
      })),
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
        name: "Blog",
        item: "https://pompy.pbac.pl/blog",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />
      <Navbar />
      <BlogPageClient articles={articles} />
      <Footer />
    </main>
  );
}
