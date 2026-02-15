"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DotPattern } from "@/components/ui/dot-pattern";
import { StripedPattern } from "@/components/ui/striped-pattern";
import type { Article } from "@/lib/articles";
import type { Product } from "@/lib/products";
import type { Author } from "@/lib/authors";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  Poradnik: "bg-pbac-blue/20 text-pbac-blue",
  Finanse: "bg-emerald-500/20 text-emerald-400",
  Dotacje: "bg-amber-500/20 text-amber-400",
  Montaż: "bg-purple-500/20 text-purple-400",
  Technologia: "bg-pbac-pink/20 text-pbac-pink",
};

export default function ArticlePageClient({
  article,
  related,
  relatedProducts,
  author,
}: {
  article: Article;
  related: Article[];
  relatedProducts?: Product[];
  author?: Author;
}) {
  return (
    <>
      <article className="relative pt-24 pb-16 px-4 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="absolute inset-x-0 top-0 h-[40%] fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
        />

        {/* Hero cover image */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 p-2"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-96">
              <Image
                src={article.coverImage}
                alt={article.coverAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 text-sm text-white/40"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60 line-clamp-1">
              {article.title}
            </span>
          </motion.nav>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  categoryColors[article.category] ||
                  "bg-white/10 text-white/70"
                }`}
              >
                {article.category}
              </span>
              <time dateTime={article.date} className="text-sm text-white/40">
                {formatDate(article.date)}
              </time>
              <span className="text-sm text-white/40">
                {article.readingTime} min czytania
              </span>
            </div>

            <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              {article.title}
            </h1>

            {author && (
              <div className="flex items-center gap-3 mt-5">
                <div className="w-8 h-8 rounded-full bg-pbac-blue/20 flex items-center justify-center text-xs font-bold text-pbac-blue">
                  {author.name.charAt(0)}
                </div>
                <div className="text-sm">
                  <span className="text-white/70">{author.name}</span>
                  <span className="text-white/30 mx-1.5">·</span>
                  <span className="text-white/40">{author.role}</span>
                </div>
              </div>
            )}
          </motion.header>

          {/* Summary (TL;DR) */}
          {article.summary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="relative rounded-2xl border border-pbac-blue/30 p-2">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-pbac-blue/10 backdrop-blur-md p-6">
                  <h2 className="font-montserrat font-bold text-sm uppercase tracking-wider text-pbac-blue mb-3">
                    W skrócie
                  </h2>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    {article.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Table of contents */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12"
          >
            <div className="relative rounded-2xl border border-white/10 p-2">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6">
                <h2 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white/60 mb-4">
                  Spis treści
                </h2>
                <ol className="space-y-2">
                  {article.sections.map((section, i) => (
                    <li key={i}>
                      <a
                        href={`#sekcja-${i}`}
                        className="text-sm text-white/50 hover:text-pbac-blue transition-colors"
                      >
                        {i + 1}. {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.nav>

          {/* Content sections */}
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <motion.section
                key={i}
                id={`sekcja-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-montserrat font-bold text-2xl mb-4">
                  {section.heading}
                </h2>
                <p className="text-white/70 leading-relaxed text-[17px]">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Related products */}
          {relatedProducts && relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14"
            >
              <h2 className="font-montserrat font-bold text-xl mb-6">
                Polecane produkty
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.slice(0, 4).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/produkty/${product.slug}`}
                    className="group"
                  >
                    <div className="relative rounded-2xl border border-white/10 group-hover:border-white/25 transition-colors p-2">
                      <GlowingEffect
                        spread={25}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                      <div className="relative rounded-xl bg-white/[0.06] group-hover:bg-white/[0.12] backdrop-blur-md p-5 transition-colors duration-300">
                        <div className="flex items-start gap-4">
                          {product.imageUrl && (
                            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white/10">
                              <Image
                                src={product.imageUrl}
                                alt={product.imageAlt}
                                fill
                                className="object-contain p-1"
                                sizes="64px"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="font-montserrat font-bold text-sm group-hover:text-pbac-blue transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-white/40 text-xs mt-1">
                              {product.powerRange} · {product.refrigerant}
                            </p>
                            <p className="text-white/50 text-xs mt-1.5 line-clamp-2">
                              {product.tagline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16"
          >
            <StripedPattern
              width={10}
              height={10}
              className="absolute -inset-8 z-0 text-white/15 [mask-image:radial-gradient(400px_circle_at_50%_50%,white,transparent)]"
            />
            <div className="relative z-10 rounded-2xl border border-white/10 p-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl gradient-primary p-8 text-center">
                <h3 className="font-montserrat font-bold text-2xl mb-3">
                  Chcesz zainstalować pompę ciepła?
                </h3>
                <p className="text-white/80 mb-6 max-w-lg mx-auto">
                  Skontaktuj się z PBAC — bezpłatna wycena, profesjonalny montaż
                  i pomoc w uzyskaniu dotacji.
                </p>
                <a
                  href="/#wycena"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  Zamów bezpłatną wycenę
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="relative pb-24 px-4 overflow-hidden">
          <StripedPattern
            width={12}
            height={12}
            direction="right"
            className="absolute inset-x-0 top-0 h-full z-0 text-white/25 [mask-image:radial-gradient(500px_circle_at_50%_50%,white,transparent)]"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-2xl mb-8">
              Powiązane artykuły
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative rounded-2xl border border-white/10 group-hover:border-white/25 transition-colors p-2 h-full">
                      <GlowingEffect
                        spread={30}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                      <div className="relative rounded-xl bg-white/[0.06] group-hover:bg-white/[0.12] backdrop-blur-md overflow-hidden h-full transition-colors duration-300">
                        <div className="relative h-32 w-full">
                          <Image
                            src={rel.coverImage}
                            alt={rel.coverAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                        <div className="p-4">
                          <span
                            className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mb-2 ${
                              categoryColors[rel.category] ||
                              "bg-white/10 text-white/70"
                            }`}
                          >
                            {rel.category}
                          </span>
                          <h3 className="font-montserrat font-bold text-sm leading-snug group-hover:text-pbac-pink transition-colors">
                            {rel.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
