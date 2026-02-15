"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AuroraText } from "@/components/ui/aurora-text";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import StickyPhone from "@/components/sticky-phone";
import type { Product } from "@/lib/products";
import type { Article } from "@/lib/articles";

function EzIcon({
  name,
  size = 20,
  color = "#ffffff",
  className,
}: {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    // @ts-expect-error web component
    <easier-icon
      name={name}
      variant="twotone"
      corners="rounded"
      size={String(size)}
      color={color}
      class={className}
    />
  );
}

function GallerySection({
  images,
  productName,
}: {
  images: { src: string; alt: string; caption?: string }[];
  productName: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <StripedPattern
        width={12}
        height={12}
        className="absolute inset-x-0 top-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_30%,white,transparent)]"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Galeria {productName}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 p-1.5 group cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="relative rounded-xl overflow-hidden aspect-square bg-white/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              {img.caption && (
                <p className="text-white/50 text-xs mt-2 px-1 text-center line-clamp-1">
                  {img.caption}
                </p>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              {images[selectedIndex].caption && (
                <p className="absolute bottom-0 left-0 right-0 text-center text-white/70 text-sm py-3 bg-gradient-to-t from-black/60 to-transparent">
                  {images[selectedIndex].caption}
                </p>
              )}

              {/* Navigation arrows */}
              {selectedIndex > 0 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(selectedIndex - 1);
                  }}
                >
                  ←
                </button>
              )}
              {selectedIndex < images.length - 1 && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(selectedIndex + 1);
                  }}
                >
                  →
                </button>
              )}

              {/* Close */}
              <button
                className="absolute top-2 right-2 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FaqAccordion({ faq }: { faq: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <StripedPattern
        width={12}
        height={12}
        className="absolute inset-x-0 top-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_30%,white,transparent)]"
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Często zadawane pytania
        </motion.h2>

        <div className="space-y-4">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 p-2"
            >
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl bg-white/10 backdrop-blur-md overflow-hidden">
                <button
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-montserrat font-bold text-white text-sm md:text-base">
                    {item.question}
                  </span>
                  <span className="text-white/60 text-xl shrink-0">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedArticlesSection({ articles: relatedArticles }: { articles: Article[] }) {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <DotPattern
        width={20}
        height={20}
        cr={1}
        className="absolute inset-x-0 top-0 h-[60%] z-0 fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Powiązane artykuły
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.slice(0, 3).map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${article.slug}`}
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
                  <div className="relative rounded-xl bg-white/[0.06] group-hover:bg-white/[0.12] backdrop-blur-md p-5 h-full transition-colors duration-300">
                    <span className="text-xs text-pbac-blue font-medium">
                      {article.category}
                    </span>
                    <h3 className="font-montserrat font-bold text-white text-sm mt-2 mb-2 leading-snug group-hover:text-pbac-pink transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/50 text-xs line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPageClient({
  product,
  relatedArticles = [],
}: {
  product: Product;
  relatedArticles?: Article[];
}) {
  return (
    <>
    <Navbar />
    <main className="min-h-screen pt-16">
      {/* ── Back link ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/#marki"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
        >
          <EzIcon name="arrow-left-05" size={16} color="currentColor" />
          Powrót do strony głównej
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="relative py-16 px-4 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="absolute inset-x-0 top-0 h-[60%] z-0 fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs gradient-button text-white px-3 py-1 rounded-full inline-block mb-4">
                {product.highlight}
              </span>
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                <AuroraText>{product.name}</AuroraText>
              </h1>
              <p className="text-xl text-white/60 mb-2">{product.origin}</p>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                {product.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="gradient-button rounded-full uppercase text-sm tracking-wider px-8 h-12 text-white border-0 hover:opacity-90 transition-opacity"
                >
                  <a href="/#wycena">Zamów bezpłatną wycenę</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full uppercase text-sm tracking-wider px-8 h-12 border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <a href="#specyfikacja">Zobacz specyfikację</a>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(179,24,83,0.2)]"
                  sizes="(max-width: 768px) 90vw, 450px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key specs grid ── */}
      <section id="specyfikacja" className="relative py-16 px-4 overflow-hidden scroll-mt-20">
        <StripedPattern
          width={12}
          height={12}
          className="absolute inset-x-0 top-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_30%,white,transparent)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Kluczowe parametry
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-2xl border border-white/10 p-2"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-5 text-center h-full">
                  <div className="size-10 rounded-xl gradient-icon flex items-center justify-center mx-auto mb-3">
                    <EzIcon name={spec.icon} size={20} color="#ffffff" />
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="font-montserrat font-bold text-white text-lg">
                    {spec.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Description + Features ── */}
      <section className="relative py-16 px-4 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="absolute inset-x-0 top-0 h-[60%] z-0 fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 p-2 h-full"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6 h-full">
                <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                  O produkcie
                </h3>
                {product.descriptionLong ? (
                  <div className="space-y-4 mb-6">
                    {product.descriptionLong.map((para, i) => (
                      <p key={i} className="text-white/70 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/70 leading-relaxed mb-6">
                    {product.description}
                  </p>
                )}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <EzIcon name="leaf-02" size={18} color="#22c55e" />
                    <span className="text-white/40 text-xs uppercase tracking-wider">
                      Czynnik chłodniczy
                    </span>
                  </div>
                  <p className="font-montserrat font-bold text-white">
                    {product.refrigerant}
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    {product.refrigerantNote}
                  </p>
                </div>
                {product.certifications && product.certifications.length > 0 && (
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <EzIcon name="shield-02" size={18} color="#3b82f6" />
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        Certyfikaty i zgodność
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white/70"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl border border-white/10 p-2 h-full"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6 h-full">
                <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                  Cechy i funkcje
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-white/70 text-sm flex items-start gap-3"
                    >
                      <span className="mt-1">
                        <EzIcon name="tick-02" size={16} color="#22c55e" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {product.gallery && product.gallery.length > 0 && (
        <GallerySection images={product.gallery} productName={product.name} />
      )}

      {/* ── Installation notes ── */}
      {product.installationNotes && product.installationNotes.length > 0 && (
        <section className="relative py-16 px-4 overflow-hidden">
          <DotPattern
            width={20}
            height={20}
            cr={1}
            className="absolute inset-x-0 top-0 h-[60%] z-0 fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
          />
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              Montaż i instalacja
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl border border-white/10 p-2"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6">
                <ul className="space-y-4">
                  {product.installationNotes.map((note, i) => (
                    <li
                      key={i}
                      className="text-white/70 text-sm leading-relaxed flex items-start gap-3"
                    >
                      <span className="mt-1">
                        <EzIcon name="tick-02" size={16} color="#3b82f6" />
                      </span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Advantages ── */}
      <section className="relative py-16 px-4 overflow-hidden">
        <StripedPattern
          width={12}
          height={12}
          className="absolute inset-x-0 top-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_30%,white,transparent)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Dlaczego {product.name}?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 p-2 h-full"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6 h-full">
                  <div className="size-12 rounded-xl gradient-icon flex items-center justify-center mb-4">
                    <EzIcon name={adv.icon} size={24} color="#ffffff" />
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-lg mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Models comparison ── */}
      <section className="relative py-16 px-4 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cr={1}
          className="absolute inset-x-0 top-0 h-[60%] z-0 fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Dostępne modele
          </motion.h2>

          {/* Desktop table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block relative rounded-2xl border border-white/10 p-2"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative rounded-xl overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="gradient-primary">
                    <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white first:rounded-tl-xl">
                      Model
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white">
                      Moc
                    </th>
                    {product.models[0]?.cop && (
                      <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white">
                        COP
                      </th>
                    )}
                    {product.models[0]?.scop && (
                      <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white">
                        SCOP
                      </th>
                    )}
                    {product.models[0]?.energyClass && (
                      <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white">
                        Klasa
                      </th>
                    )}
                    {product.models[0]?.noise && (
                      <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white">
                        Hałas
                      </th>
                    )}
                    {product.models[0]?.dimensions && (
                      <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white">
                        Wymiary
                      </th>
                    )}
                    <th className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white last:rounded-tr-xl">
                      Zasilanie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.models.map((model, i) => (
                    <tr
                      key={model.name}
                      className={
                        i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"
                      }
                    >
                      <td className="px-6 py-4 text-sm text-white font-medium border-b border-white/10">
                        {model.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                        {model.power}
                      </td>
                      {model.cop !== undefined && (
                        <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                          {model.cop}
                        </td>
                      )}
                      {model.scop !== undefined && (
                        <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                          {model.scop}
                        </td>
                      )}
                      {model.energyClass !== undefined && (
                        <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                          {model.energyClass}
                        </td>
                      )}
                      {model.noise !== undefined && (
                        <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                          {model.noise}
                        </td>
                      )}
                      {model.dimensions !== undefined && (
                        <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                          {model.dimensions}
                        </td>
                      )}
                      <td className="px-6 py-4 text-sm text-white/70 border-b border-white/10">
                        {model.phase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {product.models.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 p-2"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-5">
                  <h3 className="font-montserrat font-bold text-white mb-3">
                    {model.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Moc</span>
                      <span className="text-white/80">{model.power}</span>
                    </div>
                    {model.cop && (
                      <div className="flex justify-between">
                        <span className="text-white/50">COP</span>
                        <span className="text-white/80">{model.cop}</span>
                      </div>
                    )}
                    {model.scop && (
                      <div className="flex justify-between">
                        <span className="text-white/50">SCOP</span>
                        <span className="text-white/80">{model.scop}</span>
                      </div>
                    )}
                    {model.energyClass && (
                      <div className="flex justify-between">
                        <span className="text-white/50">Klasa</span>
                        <span className="text-white/80">
                          {model.energyClass}
                        </span>
                      </div>
                    )}
                    {model.noise && (
                      <div className="flex justify-between">
                        <span className="text-white/50">Hałas</span>
                        <span className="text-white/80">{model.noise}</span>
                      </div>
                    )}
                    {model.dimensions && (
                      <div className="flex justify-between">
                        <span className="text-white/50">Wymiary</span>
                        <span className="text-white/80">
                          {model.dimensions}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-white/50">Zasilanie</span>
                      <span className="text-white/80">{model.phase}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {product.faq && product.faq.length > 0 && (
        <FaqAccordion faq={product.faq} />
      )}

      {/* ── Related Articles ── */}
      {relatedArticles.length > 0 && (
        <RelatedArticlesSection articles={relatedArticles} />
      )}

      {/* ── CTA ── */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-primary rounded-2xl p-10 text-center"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
              Zainteresowany?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Skontaktuj się z nami po bezpłatną wycenę {product.name}{" "}
              dopasowaną do Twojego domu. Doradzimy najlepszy model i
              zaplanujemy montaż.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-black rounded-full uppercase text-sm tracking-wider px-8 h-12 hover:bg-white/90 transition-colors font-bold"
              >
                <a href="/#wycena">Zamów wycenę</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full uppercase text-sm tracking-wider px-8 h-12 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <a href="tel:+48123456789">Zadzwoń teraz</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    <StickyPhone />
    </>
  );
}
