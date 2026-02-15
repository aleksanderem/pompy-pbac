"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { AuroraText } from "@/components/ui/aurora-text";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import type { Article } from "@/lib/articles";

const categoryColors: Record<string, string> = {
  Poradnik: "bg-pbac-blue/20 text-pbac-blue border-pbac-blue/30",
  Finanse: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Dotacje: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Montaż: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Technologia: "bg-pbac-pink/20 text-pbac-pink border-pbac-pink/30",
};

const categoryDescriptions: Record<string, string> = {
  Poradnik:
    "Podstawy wiedzy o pompach ciepła — jak działają, jakie typy wybrać, porównania technologii.",
  Finanse:
    "Ile kosztuje pompa ciepła, koszty eksploatacji, okres zwrotu inwestycji.",
  Dotacje:
    "Programy dofinansowania — Czyste Powietrze, Moje Ciepło, ulga termomodernizacyjna.",
  Montaż:
    "Jak wygląda montaż krok po kroku, na co zwrócić uwagę, dobór instalatora.",
  Technologia:
    "COP i SCOP, czynniki chłodnicze R290 vs R32 vs R410A, parametry techniczne.",
};

interface GroupedArticles {
  category: string;
  articles: Article[];
}

export default function PoradnikPageClient({
  grouped,
}: {
  grouped: GroupedArticles[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="absolute inset-0 fill-white/5 [mask-image:radial-gradient(800px,#ffffff40,#00000000)]"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/60">Poradnik</span>
            </nav>

            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Kompletny poradnik o{" "}
              <AuroraText>pompach ciepła</AuroraText>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Wszystko, co musisz wiedzieć przed zakupem pompy ciepła — od
              zasady działania, przez koszty i dotacje, po montaż i parametry
              techniczne. Artykuły przygotowane przez certyfikowanych
              instalatorów PBAC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category sections */}
      <section className="relative pb-24 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {grouped.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    categoryColors[group.category] || "bg-white/10 text-white/70 border-white/20"
                  }`}
                >
                  {group.category}
                </span>
              </div>
              {categoryDescriptions[group.category] && (
                <p className="text-white/40 text-sm mb-6 max-w-xl">
                  {categoryDescriptions[group.category]}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.articles.map((article, ai) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ai * 0.07 }}
                  >
                    <Link
                      href={`/blog/${article.slug}`}
                      className="group block h-full"
                    >
                      <div className="relative rounded-2xl border border-white/10 group-hover:border-white/25 transition-colors p-2 h-full">
                        <GlowingEffect
                          spread={25}
                          glow={true}
                          disabled={false}
                          proximity={64}
                          inactiveZone={0.01}
                        />
                        <div className="relative rounded-xl bg-white/[0.06] group-hover:bg-white/[0.12] backdrop-blur-md overflow-hidden h-full transition-colors duration-300">
                          <div className="relative h-36 w-full">
                            <Image
                              src={article.coverImage}
                              alt={article.coverAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          </div>
                          <div className="p-5">
                            <h3 className="font-montserrat font-bold text-sm leading-snug group-hover:text-pbac-blue transition-colors mb-2">
                              {article.title}
                            </h3>
                            <p className="text-white/40 text-xs line-clamp-2 leading-relaxed">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center gap-3 mt-3 text-xs text-white/30">
                              <span>{article.readingTime} min</span>
                              <span>·</span>
                              <time dateTime={article.date}>
                                {new Date(article.date).toLocaleDateString(
                                  "pl-PL",
                                  { day: "numeric", month: "short", year: "numeric" }
                                )}
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
