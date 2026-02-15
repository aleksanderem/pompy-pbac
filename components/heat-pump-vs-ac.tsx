"use client";

import { motion } from "motion/react";
import { Check, X, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const comparisons = [
  {
    feature: "Ogrzewanie domu",
    heatPump: { value: true, note: "Pełne ogrzewanie domu przez cały sezon — podłogówka, grzejniki, CWU" },
    ac: { value: false, note: "Tylko wspomaganie — klimatyzator grzeje powietrze w jednym pomieszczeniu" },
  },
  {
    feature: "Chłodzenie latem",
    heatPump: { value: true, note: "Tak, modele split (np. Mitsubishi Heavy Hydrolution) chłodzą dom przez instalację wodną" },
    ac: { value: true, note: "Tak — podstawowa funkcja klimatyzatora, bardzo efektywna" },
  },
  {
    feature: "Ciepła woda użytkowa (CWU)",
    heatPump: { value: true, note: "Tak — ogrzewa wodę do 60–75°C, zasobnik 200–500L" },
    ac: { value: false, note: "Nie — klimatyzator nie podgrzewa wody użytkowej" },
  },
  {
    feature: "Ogrzewanie podłogowe",
    heatPump: { value: true, note: "Idealnie współpracuje — niska temperatura zasilania 35–45°C to optymalne warunki dla pompy" },
    ac: { value: false, note: "Nie — klimatyzator nie jest podłączony do instalacji wodnej" },
  },
  {
    feature: "Zastąpienie pieca / kotła",
    heatPump: { value: true, note: "Tak — pompa ciepła w pełni zastępuje kocioł gazowy, olejowy lub węglowy" },
    ac: { value: false, note: "Nie — klimatyzator to urządzenie uzupełniające, nie zastępuje kotła" },
  },
  {
    feature: "Efektywność w mrozy (-20°C)",
    heatPump: { value: true, note: "Nowoczesne pompy (Samsung R290, Neoheat) pracują efektywnie do -25°C" },
    ac: { value: false, note: "Większość klimatyzatorów traci wydajność poniżej -15°C i nie nadaje się do głównego ogrzewania" },
  },
  {
    feature: "Dofinansowanie (Czyste Powietrze)",
    heatPump: { value: true, note: "Tak — pompy ciepła kwalifikują się do programu Czyste Powietrze i Mój Prąd" },
    ac: { value: false, note: "Nie — klimatyzatory nie są objęte dofinansowaniem" },
  },
  {
    feature: "Koszt inwestycji",
    heatPump: { value: "higher", note: "Wyższy (15 000–45 000 zł z montażem), ale zwraca się w 3–7 lat" },
    ac: { value: "lower", note: "Niższy (3 000–8 000 zł za split), ale nie zastępuje głównego ogrzewania" },
  },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="size-5 text-green-400" />;
  if (value === false) return <X className="size-5 text-red-400/60" />;
  if (value === "higher") return <span className="text-yellow-400 text-sm font-bold">$$</span>;
  if (value === "lower") return <span className="text-green-400 text-sm font-bold">$</span>;
  return null;
}

export default function HeatPumpVsAc() {
  return (
    <section id="vs-klimatyzator" className="relative py-20 px-4 overflow-hidden">
      <StripedPattern
        width={12}
        height={12}
        className="absolute inset-x-0 top-0 h-[60%] z-0 text-white/25 [mask-image:radial-gradient(600px_circle_at_50%_30%,white,transparent)]"
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            <AuroraText>Pompa ciepła</AuroraText> vs Klimatyzator
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Obie technologie wykorzystują ten sam obieg chłodniczy, ale służą
            zupełnie innym celom. Sprawdź, czym się różnią i kiedy warto
            wybrać pompę ciepła.
          </p>
        </motion.div>

        {/* Comparison table */}
        <div className="space-y-3">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 px-4 text-sm">
            <div />
            <div className="text-center">
              <span className="gradient-button text-white text-xs uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
                Pompa ciepła
              </span>
            </div>
            <div className="text-center">
              <span className="bg-white/10 text-white/60 text-xs uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
                Klimatyzator
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-[1fr_1fr_1fr] gap-3 bg-white/5 border border-white/10 rounded-xl p-4 items-start"
            >
              <div>
                <p className="font-montserrat font-bold text-white text-sm">
                  {row.feature}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <StatusIcon value={row.heatPump.value} />
                <p className="text-white/60 text-xs leading-relaxed">
                  {row.heatPump.note}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <StatusIcon value={row.ac.value} />
                <p className="text-white/60 text-xs leading-relaxed">
                  {row.ac.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="relative rounded-2xl border border-white/10 p-2 h-full">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <Card className="bg-white/10 backdrop-blur-md border-0 rounded-xl h-full">
            <CardContent className="pt-6">
              <h3 className="font-montserrat font-bold text-xl mb-3 text-white">
                Wybierz pompę ciepła, gdy:
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-pbac-magenta mt-0.5 shrink-0" />
                  Szukasz głównego źródła ogrzewania domu
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-pbac-magenta mt-0.5 shrink-0" />
                  Chcesz obniżyć rachunki za ogrzewanie o 50–70%
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-pbac-magenta mt-0.5 shrink-0" />
                  Potrzebujesz ogrzewania, CWU i opcjonalnie chłodzenia
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-pbac-magenta mt-0.5 shrink-0" />
                  Masz ogrzewanie podłogowe lub grzejniki
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-pbac-magenta mt-0.5 shrink-0" />
                  Chcesz skorzystać z dofinansowania Czyste Powietrze
                </li>
              </ul>
            </CardContent>
          </Card>
          </div>

          <div className="relative rounded-2xl border border-white/10 p-2 h-full">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <Card className="bg-white/10 backdrop-blur-md border-0 rounded-xl h-full">
            <CardContent className="pt-6">
              <h3 className="font-montserrat font-bold text-xl mb-3 text-white">
                Klimatyzator wystarczy, gdy:
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-white/40 mt-0.5 shrink-0" />
                  Potrzebujesz przede wszystkim chłodzenia latem
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-white/40 mt-0.5 shrink-0" />
                  Masz już sprawne ogrzewanie centralne (kocioł gazowy)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-white/40 mt-0.5 shrink-0" />
                  Chcesz dogrzać jedno-dwa pomieszczenia
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-white/40 mt-0.5 shrink-0" />
                  Dysponujesz mniejszym budżetem
                </li>
              </ul>
            </CardContent>
          </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            Nie jesteś pewien, co wybrać? Pomożemy dobrać najlepsze rozwiązanie.
          </p>
          <Button
            asChild
            className="gradient-button rounded-full uppercase text-sm tracking-wider px-8 h-12 text-white border-0 hover:opacity-90 transition-opacity"
          >
            <a href="#wycena">Zapytaj o bezpłatną konsultację</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
