"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DotPattern } from "@/components/ui/dot-pattern";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { AuroraText } from "@/components/ui/aurora-text";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 503 151 802",
    href: "tel:+48503151802",
    description: "Zadzwoń — odpowiadamy od ręki",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "montaz@pbac.pl",
    href: "mailto:montaz@pbac.pl",
    description: "Napisz — odpisujemy w ciągu 24h",
  },
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: "Marszałkowska 55/73",
    href: "https://maps.google.com/?q=Marszałkowska+55/73+Warszawa",
    description: "00-676 Warszawa — obsługujemy okolicę do 50 km",
  },
  {
    icon: Clock,
    label: "Godziny pracy",
    value: "Pon–Pt: 8:00–18:00",
    description: "Soboty po wcześniejszym umówieniu",
  },
];

export default function ContactPageClient() {
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
            <AuroraText>Skontaktuj się</AuroraText> z nami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Masz pytania o pompy ciepła? Potrzebujesz wyceny lub porady?
            Jesteśmy do Twojej dyspozycji.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative pb-16 px-4 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative rounded-2xl border border-white/10 p-2 h-full">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-white/[0.06] backdrop-blur-md p-6 h-full flex flex-col">
                  <div className="size-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="size-6 text-white" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-white/40 font-montserrat font-bold mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-montserrat font-bold text-lg text-white hover:text-pbac-pink transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-montserrat font-bold text-lg text-white">
                      {item.value}
                    </p>
                  )}
                  <p className="text-sm text-white/50 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map + CTA */}
      <section className="relative pb-24 px-4 overflow-hidden">
        <StripedPattern
          width={12}
          height={12}
          className="absolute inset-x-0 bottom-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_70%,white,transparent)]"
        />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl border border-white/10 p-2 h-full">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl overflow-hidden h-80 lg:h-full min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGFsYWMgS3VsdHVyeQ!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl&q=Marszałkowska+55/73,+00-676+Warszawa"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa — PBAC Warszawa"
                />
              </div>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Quote CTA */}
            <div className="relative rounded-2xl border border-white/10 p-2 flex-1">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl gradient-primary p-8 h-full flex flex-col justify-center">
                <h2 className="font-montserrat font-bold text-2xl mb-3">
                  Zamów bezpłatną wycenę
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Wypełnij krótki formularz, a nasz specjalista skontaktuje się
                  z Tobą w ciągu 24 godzin z indywidualną ofertą dopasowaną do
                  Twojego budynku.
                </p>
                <a
                  href="/#wycena"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-montserrat font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors w-fit group"
                >
                  Formularz wyceny
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Quick contact info */}
            <div className="relative rounded-2xl border border-white/10 p-2">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative rounded-xl bg-white/[0.06] backdrop-blur-md p-6">
                <h3 className="font-montserrat font-bold text-lg mb-3">
                  Szybki kontakt
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Wolisz porozmawiać? Zadzwoń lub napisz — chętnie odpowiemy
                  na wszystkie pytania dotyczące pomp ciepła, montażu i dotacji.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+48503151802"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-5 py-2.5 rounded-full text-sm font-medium"
                  >
                    <Phone className="size-4" />
                    +48 503 151 802
                  </a>
                  <a
                    href="mailto:montaz@pbac.pl"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-5 py-2.5 rounded-full text-sm font-medium"
                  >
                    <Mail className="size-4" />
                    montaz@pbac.pl
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
