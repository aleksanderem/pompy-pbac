"use client";

import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const steps = [
  {
    label: "Powietrze zewnętrzne",
    desc: "Wentylator pobiera powietrze z otoczenia — nawet w temperaturze -25°C zawiera ono energię cieplną.",
  },
  {
    label: "Parownik",
    desc: "Czynnik chłodniczy (np. R290) pochłania ciepło z powietrza i zamienia się w gaz.",
  },
  {
    label: "Sprężarka",
    desc: "Sprężarka podnosi temperaturę i ciśnienie gazu — to serce pompy ciepła.",
  },
  {
    label: "Skraplacz",
    desc: "Gorący gaz oddaje ciepło do wody w instalacji grzewczej i CWU, a sam wraca do stanu ciekłego.",
  },
];

const infoCards = [
  {
    title: "Jak to możliwe, że ogrzewa zimą?",
    text: "Powietrze o temperaturze nawet -25°C nadal zawiera energię cieplną. Pompa ciepła wykorzystuje czynnik chłodniczy, który wrze już w temperaturze około -40°C. Dzięki temu nawet mroźne powietrze jest w stanie odparować czynnik, a sprężarka podnosi jego temperaturę do poziomu potrzebnego do ogrzania domu (nawet 75°C).",
  },
  {
    title: "Ile energii zużywa?",
    text: "Pompa ciepła potrzebuje prądu elektrycznego tylko do napędu sprężarki i wentylatora. Z każdego 1 kWh prądu potrafi wytworzyć 3–5 kWh ciepła (tzw. współczynnik COP). To oznacza, że aż 70–80% energii grzewczej pochodzi z darmowego powietrza.",
  },
  {
    title: "Czy mogę ogrzewać grzejnikami?",
    text: "Tak! Nowoczesne pompy ciepła, jak Samsung EHS Mono R290, dostarczają wodę o temperaturze do 75°C, co wystarcza do zasilania tradycyjnych grzejników. Optymalnie pompa współpracuje z ogrzewaniem podłogowym (35–45°C), ale sprawdzi się też z istniejącą instalacją grzejnikową.",
  },
];

export default function WhatIsHeatPump() {
  return (
    <section id="co-to-jest" className="relative py-20 px-4 overflow-hidden">
      <StripedPattern
        width={12}
        height={12}
        className="absolute inset-x-0 top-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_30%,white,transparent)]"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            Co to jest <AuroraText>pompa ciepła</AuroraText>?
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Pompa ciepła to urządzenie, które pobiera darmowe ciepło z powietrza
            zewnętrznego i przekazuje je do Twojego domu. Działa na zasadzie
            odwróconego obiegu chłodniczego — tak jak lodówka, ale zamiast chłodzić
            wnętrze, ogrzewa je.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: how it works – 2×2 grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {steps.map((step, i) => (
              <div key={step.label} className="relative rounded-2xl border border-white/10 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-5">
                  <div className="size-10 rounded-full gradient-primary flex items-center justify-center text-white font-montserrat font-bold text-sm mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-lg">
                    {step.label}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: info cards with glowing effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {infoCards.map((card) => (
              <div key={card.title} className="relative rounded-2xl border border-white/10 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative rounded-xl bg-white/10 backdrop-blur-md p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
