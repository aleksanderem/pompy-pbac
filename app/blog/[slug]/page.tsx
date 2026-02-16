import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getRelatedArticles,
} from "@/lib/articles";
import { getAuthorBySlug } from "@/lib/authors";
import { getProductBySlug } from "@/lib/products";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArticlePageClient from "./article-page-client";
import JsonLd from "@/components/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | PBAC Warszawa`,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      siteName: "PBAC",
      images: [{ url: article.coverImage, width: 800, height: 500 }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.relatedSlugs);
  const authorSlug = article.authorSlug || "pbac-team";
  const author = getAuthorBySlug(authorSlug);
  const relatedProducts = (article.relatedProducts || [])
    .map((s) => getProductBySlug(s))
    .filter((p) => p !== undefined);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://pompy.pbac.pl/blog/${article.slug}`,
    headline: article.title,
    description: article.metaDescription,
    ...(article.summary ? { abstract: article.summary } : {}),
    image: {
      "@type": "ImageObject",
      url: article.coverImage,
      width: 800,
      height: 500,
    },
    datePublished: article.date,
    dateModified: article.date,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          description: author.description,
          image: author.image,
          worksFor: {
            "@type": "Organization",
            "@id": "https://pompy.pbac.pl/#organization",
            name: "PBAC",
          },
        }
      : {
          "@type": "Organization",
          "@id": "https://pompy.pbac.pl/#organization",
          name: "PBAC",
        },
    publisher: {
      "@type": "Organization",
      "@id": "https://pompy.pbac.pl/#organization",
      name: "PBAC",
      logo: {
        "@type": "ImageObject",
        url: "https://pompy.pbac.pl/images/pbac-logo.png",
        width: 184,
        height: 150,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pompy.pbac.pl/blog/${article.slug}`,
    },
    url: `https://pompy.pbac.pl/blog/${article.slug}`,
    inLanguage: "pl-PL",
    isPartOf: { "@id": "https://pompy.pbac.pl/blog" },
    articleSection: article.category,
    wordCount: article.sections.reduce(
      (acc, s) => acc + s.content.split(/\s+/).length + s.heading.split(/\s+/).length,
      0
    ),
    timeRequired: `PT${article.readingTime}M`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://pompy.pbac.pl/blog/${article.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Navbar />
      <ArticlePageClient
        article={article}
        related={related}
        relatedProducts={relatedProducts}
        author={author}
      />
      <Footer />
    </main>
  );
}
