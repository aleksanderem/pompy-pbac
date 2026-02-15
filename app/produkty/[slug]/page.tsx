import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductBySlug, getAllProductSlugs } from "@/lib/products";
import { articles } from "@/lib/articles";
import ProductPageClient from "./product-page-client";
import JsonLd from "@/components/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Pompa Ciepła | PBAC Warszawa`,
    description: `${product.tagline}. ${product.powerRange}, czynnik ${product.refrigerant}. Profesjonalny montaż w Warszawie. Wycena gratis.`,
    alternates: {
      canonical: `/produkty/${slug}`,
    },
    openGraph: {
      title: `${product.name} — Pompa Ciepła | PBAC`,
      description: `${product.tagline}. ${product.powerRange}, czynnik ${product.refrigerant}.`,
      type: "website",
      siteName: "PBAC",
      images: product.imageUrl ? [{ url: product.imageUrl }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://pbac.pl/produkty/${product.slug}`,
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    brand: {
      "@type": "Brand",
      name: product.name.split(" ")[0],
    },
    category: "Pompy ciepła",
    url: `https://pbac.pl/produkty/${product.slug}`,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Czynnik chłodniczy",
        value: product.refrigerant,
      },
      {
        "@type": "PropertyValue",
        name: "Zakres mocy",
        value: product.powerRange,
      },
      {
        "@type": "PropertyValue",
        name: "Gwarancja",
        value: product.warranty,
      },
      ...product.specs.map((spec) => ({
        "@type": "PropertyValue" as const,
        name: spec.label,
        value: spec.value,
      })),
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": "https://pbac.pl/#organization",
        name: "PBAC",
      },
      url: `https://pbac.pl/produkty/${product.slug}`,
      offerCount: product.models.length,
    },
    ...(product.certifications && product.certifications.length > 0
      ? {
          award: product.certifications,
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://pbac.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produkty",
        item: "https://pbac.pl/produkty",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://pbac.pl/produkty/${product.slug}`,
      },
    ],
  };

  const faqSchema = product.faq && product.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  const relatedArticles = articles.filter(
    (a) => a.relatedProducts?.includes(product.slug)
  );

  return (
    <>
      <JsonLd
        data={[productSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]}
      />
      <ProductPageClient product={product} relatedArticles={relatedArticles} />
    </>
  );
}
