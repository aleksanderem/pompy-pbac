"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";

const DarkVeil = dynamic(() => import("@/components/dark-veil"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* DarkVeil animated background */}
      <div className="absolute inset-0">
        <DarkVeil
          hueShift={230}
          noiseIntensity={0.09}
          scanlineIntensity={0.55}
          speed={1.4}
          scanlineFrequency={0}
          warpAmount={0.45}
          resolutionScale={1}
        />
      </div>
      {/* Brand gradient overlay */}
      <div className="absolute inset-0 gradient-primary opacity-40" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block text-sm uppercase tracking-[0.2em] text-white/60 border border-white/20 rounded-full px-5 py-2">
            Montaż i serwis · Warszawa i okolice
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          <AuroraText className="font-montserrat">Kup spokój na dekady</AuroraText>
          <br />
          <span className="text-white/90">Pompy ciepła z montażem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Oszczędź do 70% kosztów ogrzewania. Profesjonalny montaż pomp ciepła
          Samsung, Mitsubishi Heavy, Fujitsu i Neoheat z ekologicznym czynnikiem
          R290. Bezpłatna wycena w 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="gradient-button rounded-full uppercase text-sm tracking-wider px-8 h-12 text-white border-0 hover:opacity-90 transition-opacity"
          >
            <a href="#wycena">Zamów darmową wycenę</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full uppercase text-sm tracking-wider px-8 h-12 text-white border-white/30 hover:bg-white/10 bg-transparent"
          >
            <a href="#marki">Zobacz ofertę</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/50 text-sm"
        >
          <div className="text-center">
            <p className="font-montserrat text-2xl font-bold text-white">4</p>
            <p>marki premium</p>
          </div>
          <div className="text-center">
            <p className="font-montserrat text-2xl font-bold text-white">5 lat</p>
            <p>gwarancji</p>
          </div>
          <div className="text-center">
            <p className="font-montserrat text-2xl font-bold text-white">70%</p>
            <p>oszczędności</p>
          </div>
          <div className="text-center">
            <p className="font-montserrat text-2xl font-bold text-white">24h</p>
            <p>wycena gratis</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
