import type { MetadataRoute } from "next";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { getAllProductSlugs } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pompy.pbac.pl";

  const articleEntries: MetadataRoute.Sitemap = getAllArticleSlugs().map(
    (slug) => {
      const article = getArticleBySlug(slug);
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: article?.date ? new Date(article.date) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      };
    }
  );

  const productEntries: MetadataRoute.Sitemap = getAllProductSlugs().map(
    (slug) => ({
      url: `${baseUrl}/produkty/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/poradnik`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...productEntries,
    ...articleEntries,
  ];
}
