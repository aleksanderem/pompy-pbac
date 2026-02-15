"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DotPattern } from "@/components/ui/dot-pattern";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import type { Article } from "@/lib/articles";

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

function ArticleCard({
  article,
  featured = false,
  index,
}: {
  article: Article;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link
        href={`/blog/${article.slug}`}
        className="group block h-full"
      >
        <div className="relative rounded-2xl border border-white/10 group-hover:border-white/25 transition-colors p-2 h-full">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative rounded-xl bg-white/[0.06] group-hover:bg-white/[0.12] backdrop-blur-md overflow-hidden h-full flex flex-col transition-colors duration-300">
            {/* Cover image */}
            <div
              className={`relative w-full overflow-hidden ${
                featured ? "h-64 md:h-72" : "h-48"
              }`}
            >
              <Image
                src={article.coverImage}
                alt={article.coverAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={
                  featured
                    ? "(max-width: 768px) 100vw, 80vw"
                    : "(max-width: 768px) 100vw, 40vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category badge on image */}
              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${
                    categoryColors[article.category] ||
                    "bg-white/10 text-white/70"
                  }`}
                >
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3 text-xs text-white/40">
                <time dateTime={article.date}>
                  {formatDate(article.date)}
                </time>
                <span
                  className="size-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(120deg, #3D5EFF 0%, #DF396F 100%)",
                  }}
                />
                <span>{article.readingTime} min czytania</span>
              </div>

              <h2
                className={`font-montserrat font-bold mb-3 group-hover:text-pbac-pink transition-colors leading-snug ${
                  featured ? "text-2xl md:text-3xl" : "text-lg"
                }`}
              >
                {article.title}
              </h2>

              <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">
                {article.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 mt-4 text-sm text-pbac-blue group-hover:gap-3 transition-all">
                Czytaj dalej
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogPageClient({
  articles,
}: {
  articles: Article[];
}) {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="absolute inset-x-0 top-0 h-[80%] fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-montserrat font-bold text-4xl md:text-5xl mb-4"
          >
            Blog o <AuroraText>pompach ciepła</AuroraText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Praktyczne poradniki, porównania technologii i aktualności ze świata
            pomp ciepła. Wiedza, która pomoże Ci podjąć najlepszą decyzję.
          </motion.p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="relative pb-24 px-4 overflow-hidden">
        <StripedPattern
          width={12}
          height={12}
          className="absolute inset-x-0 bottom-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_70%,white,transparent)]"
        />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              featured={i === 0}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
