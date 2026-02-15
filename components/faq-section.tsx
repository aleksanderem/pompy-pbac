"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const faqs = [
  {
    question: "Ile kosztuje pompa ciepła?",
    answer:
      "Koszt pompy ciepła zależy od wielu czynników: mocy urządzenia, producenta, typu instalacji i wielkości domu. Ceny zaczynają się od ok. 15 000 zł za urządzenie z montażem. Skontaktuj się z nami po bezpłatną wycenę.",
  },
  {
    question: "Ile można zaoszczędzić na ogrzewaniu?",
    answer:
      "Pompa ciepła pozwala zaoszczędzić nawet do 70% kosztów ogrzewania w porównaniu z ogrzewaniem gazowym lub olejowym. Przeciętna rodzina w domu 150 m² może zaoszczędzić 3 000–5 000 zł rocznie.",
  },
  {
    question: "Czy pompa ciepła działa w mrozy?",
    answer:
      "Tak! Nowoczesne pompy ciepła, takie jak Samsung EHS R290 czy Mitsubishi Heavy Hydrolution, pracują efektywnie nawet przy temperaturach do -25°C. Czynnik R290 zapewnia stabilną pracę w ekstremalnych warunkach.",
  },
  {
    question: "Jak długo trwa montaż pompy ciepła?",
    answer:
      "Standardowy montaż pompy ciepła trwa 1–3 dni, w zależności od typu urządzenia i zakresu prac instalacyjnych. Obejmuje to ustawienie jednostki zewnętrznej, podłączenie hydrauliczne i elektryczne oraz uruchomienie.",
  },
  {
    question: "Czy mogę uzyskać dofinansowanie?",
    answer:
      "Tak! W ramach programu Czyste Powietrze oraz Mój Prąd można uzyskać dofinansowanie na pompę ciepła. Pomagamy naszym klientom w procesie aplikowania o dotacje.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-20 px-4 overflow-hidden">
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
          className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Najczęściej zadawane pytania
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-white/10 p-2"
        >
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-4">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10 bg-white/5 rounded-xl px-6"
              >
                <AccordionTrigger className="text-base text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
