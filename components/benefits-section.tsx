"use client";

import { motion } from "motion/react";
import { Wallet, Leaf, Thermometer, Volume2 } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { DotPattern } from "@/components/ui/dot-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const benefits = [
  {
    icon: Wallet,
    title: "Oszczędność",
    description:
      "Do 70% niższe koszty ogrzewania w porównaniu z gazem i olejem",
  },
  {
    icon: Leaf,
    title: "Ekologia",
    description:
      "Czynnik R290 z najniższym wpływem na środowisko (GWP=3)",
  },
  {
    icon: Thermometer,
    title: "Wszystko w jednym",
    description:
      "Ogrzewanie, chłodzenie i ciepła woda użytkowa z jednego urządzenia",
  },
  {
    icon: Volume2,
    title: "Cicha praca",
    description:
      "Poziom hałasu od zaledwie 16 dB — ciszej niż szept",
  },
];

export default function BenefitsSection() {
  return (
    <section id="korzysci" className="relative py-20 px-4 overflow-hidden scroll-mt-20">
      <DotPattern
        width={20}
        height={20}
        cr={1}
        className="absolute inset-x-0 top-0 h-[60%] fill-white/5 [mask-image:radial-gradient(700px,#ffffff45,#00000000)]"
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Dlaczego <AuroraText>pompa ciepła</AuroraText>?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <div className="mb-4 size-12 rounded-xl gradient-icon flex items-center justify-center">
                    <Icon className="size-6 text-white" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
