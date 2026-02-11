"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TrendingDown, Leaf } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import Co2RadarChart from "@/components/co2-radar-chart";
import { StripedPattern } from "@/components/ui/striped-pattern";

/* ── data ─────────────────────────────────────────────── */

const annualCosts = [
  { label: "Ogrzewanie elektryczne", value: 9600, color: "#ef4444" },
  { label: "Olej opałowy", value: 6600, color: "#f97316" },
  { label: "Gaz ziemny", value: 5400, color: "#eab308" },
  { label: "Węgiel", value: 4800, color: "#a3a3a3" },
  { label: "Klimatyzator (split)", value: 4200, color: "#60a5fa" },
  { label: "Pompa ciepła", value: 2160, color: "#22c55e" },
];
const maxCost = Math.max(...annualCosts.map((d) => d.value));

/* ── animated bar ─────────────────────────────────────── */

function AnimatedBar({
  pct,
  color,
  delay,
  inView,
}: {
  pct: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

/* ── section ──────────────────────────────────────────── */

export default function ChartsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dane" className="relative py-20 px-4 overflow-hidden" ref={ref}>
      <StripedPattern
        width={16}
        height={16}
        direction="right"
        className="absolute inset-0 text-pbac-navy/[0.06] [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            <AuroraText>Pompa ciepła</AuroraText> w liczbach
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Twarde dane, które potwierdzają przewagę pompy ciepła nad tradycyjnym
            ogrzewaniem i klimatyzacją. Obliczenia dla domu 120 m² ze średnią
            izolacją.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── chart 1: annual costs ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl gradient-icon flex items-center justify-center">
                <TrendingDown className="size-5 text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  Roczny koszt ogrzewania
                </h3>
                <p className="text-white/40 text-sm">dom 120 m², średnia izolacja</p>
              </div>
            </div>
            <div className="space-y-4">
              {annualCosts.map((item, i) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">{item.label}</span>
                    <span className="font-montserrat font-bold" style={{ color: item.color }}>
                      {item.value.toLocaleString("pl-PL")} zł
                    </span>
                  </div>
                  <AnimatedBar
                    pct={(item.value / maxCost) * 100}
                    color={item.color}
                    delay={i * 0.1}
                    inView={inView}
                  />
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-4">
              * Dane szacunkowe na podstawie średnich cen energii w Polsce (2025)
            </p>
          </motion.div>

          {/* ── chart 2: CO₂ emissions radar ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl gradient-icon flex items-center justify-center">
                <Leaf className="size-5 text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  Emisja CO₂ rocznie
                </h3>
                <p className="text-white/40 text-sm">wpływ na środowisko</p>
              </div>
            </div>
            <Co2RadarChart />
            <p className="text-white/30 text-xs mt-2">
              * Obliczenia uwzględniają polski mix energetyczny (2025)
            </p>
          </motion.div>
        </div>

        {/* ── summary highlight ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 gradient-primary rounded-2xl p-8 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-montserrat text-4xl font-bold text-white">60%</p>
              <p className="text-white/70 text-sm mt-1">mniejsze rachunki vs gaz</p>
            </div>
            <div>
              <p className="font-montserrat text-4xl font-bold text-white">83%</p>
              <p className="text-white/70 text-sm mt-1">mniej CO₂ vs węgiel</p>
            </div>
            <div>
              <p className="font-montserrat text-4xl font-bold text-white">4×</p>
              <p className="text-white/70 text-sm mt-1">więcej ciepła z 1 kWh prądu</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
