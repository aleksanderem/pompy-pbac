"use client";

import { motion } from "motion/react";
import { StripedPattern } from "@/components/ui/striped-pattern";

const headers = ["Cecha", "Neoheat", "Samsung", "Mitsubishi Heavy", "Fujitsu"];

const rows = [
  ["Typ", "Mono/Split", "Monoblock", "Split", "Split/Mono"],
  ["Czynnik", "R290/R32", "R290", "R32", "R32/R410A"],
  ["Moc", "6–15 kW", "5–16 kW", "6–14 kW", "5–17 kW"],
  ["CWU", "Tak", "Tak", "Tak (300–500L)", "Tak"],
  ["Chłodzenie", "Opcja", "Nie", "Tak", "Opcja"],
  ["Gwarancja", "5 lat", "5 lat", "5 lat", "5 lat"],
  ["WiFi", "Opcja", "Tak", "Tak", "Opcja"],
];

export default function ComparisonTable() {
  return (
    <section id="porownanie" className="relative py-20 px-4 overflow-hidden">
      <StripedPattern
        width={14}
        height={14}
        direction="right"
        className="absolute inset-0 text-white/[0.025] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Porównanie marek
        </motion.h2>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="gradient-primary">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left text-sm font-montserrat font-bold text-white first:rounded-tl-xl last:rounded-tr-xl"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={rowIndex % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className={`px-6 py-4 text-sm border-b border-white/10 ${
                        cellIndex === 0 ? "text-white font-medium" : "text-white/70"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {headers.slice(1).map((brand, brandIndex) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: brandIndex * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="font-montserrat text-lg font-bold mb-4">{brand}</h3>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row[0]} className="flex justify-between text-sm">
                    <span className="text-white/50">{row[0]}</span>
                    <span className="text-white/80">{row[brandIndex + 1]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
