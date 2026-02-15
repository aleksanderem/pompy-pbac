"use client";

import { motion } from "motion/react";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const steps = [
  {
    number: "01",
    title: "Kontakt i wycena",
    description:
      "Skontaktuj się z nami, a przygotujemy bezpłatną wycenę dopasowaną do Twojego domu.",
  },
  {
    number: "02",
    title: "Dobór urządzenia",
    description:
      "Nasi specjaliści dobiorą optymalną pompę ciepła na podstawie metrażu i potrzeb.",
  },
  {
    number: "03",
    title: "Profesjonalny montaż",
    description:
      "Realizujemy montaż zgodnie z najwyższymi standardami producenta.",
  },
  {
    number: "04",
    title: "Serwis i gwarancja",
    description:
      "Zapewniamy pełen serwis gwarancyjny i pogwarancyjny.",
  },
];

export default function HowItWorks() {
  return (
    <section id="jak-dzialamy" className="relative py-20 px-4 overflow-hidden">
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
          className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Jak działamy?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-white/10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl border border-white/10 p-2"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6 text-center">
              <span
                className="font-montserrat text-5xl md:text-6xl font-bold inline-block mb-4"
                style={{
                  background: "linear-gradient(120deg, #3D5EFF 0%, #DF396F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {step.number}
              </span>
              <h3 className="font-montserrat text-lg font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
