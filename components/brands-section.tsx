"use client";

import { motion } from "motion/react";
import BrandCard from "@/components/brand-card";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const brands = [
  {
    slug: "neoheat-eko-mono-r290",
    name: "Neoheat",
    origin: "Polska marka (Iglotech, od 2017)",
    series: "Eko Mono · Eko II Plus · Heavy · R290",
    power: "6–15 kW",
    description:
      "Neoheat to dynamicznie rozwijająca się polska marka pomp ciepła, stworzona przez firmę Iglotech z Kwidzyna z ponad 30-letnim doświadczeniem w branży HVAC. Pompy Neoheat wyróżniają się doskonałymi parametrami pracy w niskich temperaturach zewnętrznych — nawet do -25°C — co czyni je idealnym rozwiązaniem dla polskiego klimatu. Seria Eko II Plus z czynnikiem R290 zapewnia wysoką efektywność energetyczną przy minimalnym wpływie na środowisko. Urządzenia współpracują z instalacjami fotowoltaicznymi, co pozwala na dodatkowe obniżenie kosztów eksploatacji.",
    features: [
      "Praca w temperaturach do -25°C z pełną mocą grzewczą",
      "Ekologiczny czynnik R290 o najniższym GWP",
      "Natywna integracja z instalacjami fotowoltaicznymi",
      "Intuicyjny system sterowania z funkcją harmonogramów",
      "Nagroda Dobra Marka — Jakość, Zaufanie, Renoma",
    ],
    highlight: "Polska jakość",
    imageUrl: "/images/neoheat-cutout.png",
    imageAlt: "Pompa ciepła Neoheat Eko II Plus — jednostka zewnętrzna",
  },
  {
    slug: "samsung-ehs-mono-r290",
    name: "Samsung EHS Mono R290",
    origin: "Samsung Climate Solutions",
    series: "EHS Mono R290 Standard · ClimateHub · Control Kit",
    power: "5 · 8 · 12 · 16 kW",
    description:
      "Samsung EHS Mono R290 to najnowsza generacja monoblokowych pomp ciepła Samsung, wykorzystująca ekologiczny czynnik R290 (propan) o współczynniku GWP zaledwie 3. Hermetycznie zamknięty układ chłodniczy eliminuje ryzyko wycieku i nie wymaga certyfikatu F-gazowego przy montażu. Pompa dostarcza wodę grzewczą o temperaturze do 75°C, co pozwala na współpracę z tradycyjnymi grzejnikami bez konieczności wymiany instalacji. Czteropoziomowy tryb cichy redukuje hałas do zaledwie 35 dB(A), a wbudowany moduł WiFi z technologią AI SmartThings umożliwia inteligentne zarządzanie energią.",
    features: [
      "Czynnik R290 — GWP=3, zgodny z regulacjami UE F-Gas 2025",
      "Temperatura wody grzewczej do 75°C bez grzałki wspomagającej",
      "Tryb cichy od 35 dB(A) — 4 stopnie regulacji hałasu",
      "WiFi + AI SmartThings — inteligentne sterowanie i harmonogramy",
      "5 lat gwarancji producenta w standardzie",
      "Montaż bez certyfikatu F-gazowego",
    ],
    highlight: "Najcichsza w klasie",
    imageUrl: "/images/samsung-cutout.png",
    imageAlt: "Pompa ciepła Samsung EHS Mono R290 — monoblock",
  },
  {
    slug: "mitsubishi-heavy-hydrolution",
    name: "Mitsubishi Heavy Hydrolution",
    origin: "Mitsubishi Heavy Industries",
    series: "Flexible Split — ALL-IN-ONE",
    power: "6 · 7,1 · 10 · 14 kW",
    description:
      "Mitsubishi Heavy Hydrolution Flexible to rewersyjny system split typu powietrze-woda, który łączy trzy funkcje w jednym urządzeniu: ogrzewanie, chłodzenie i przygotowanie ciepłej wody użytkowej. System składa się z jednostki zewnętrznej i modułu wewnętrznego z wbudowanym zasobnikiem CWU o pojemności 300L (modele 60–100) lub 500L (model 140). Pompa osiąga wysoką efektywność energetyczną nawet przy ekstremalnie niskich temperaturach zewnętrznych i przygotowuje wodę użytkową o temperaturze do 60°C. Zdalne sterowanie przez Internet pozwala na monitorowanie i zarządzanie systemem z dowolnego miejsca.",
    features: [
      "3-w-1: ogrzewanie + chłodzenie + ciepła woda użytkowa",
      "Zasobnik CWU 300L lub 500L wbudowany w moduł wewnętrzny",
      "Temperatura CWU do 60°C bez wspomagania elektrycznego",
      "Zdalne sterowanie i monitoring pracy przez aplikację",
      "Opcjonalne: grzałka przepływowa, zawory rewersyjne, anody tytanowe",
      "Wysoka efektywność energetyczna w mrozach do -25°C",
    ],
    highlight: "Grzeje i chłodzi",
    imageUrl: "/images/mitsubishi-cutout.png",
    imageAlt: "Mitsubishi Heavy Hydrolution — jednostka zewnętrzna split",
  },
  {
    slug: "fujitsu-waterstage",
    name: "Fujitsu Waterstage",
    origin: "Fujitsu General",
    series: "Comfort R32 · High Power · Super High Power · Monobloc",
    power: "5–17 kW",
    description:
      "Fujitsu Waterstage to kompleksowa linia pomp ciepła powietrze-woda obejmująca cztery serie dostosowane do różnych potrzeb: od kompaktowej serii Comfort R32 z czynnikiem R32 i klasą energetyczną A+++, przez wydajne serie High Power i Super High Power, po wygodny Monobloc niewymagający połączeń chłodniczych. Waterstage pozwala uzyskać od 3 do 5 kW energii cieplnej z każdego 1 kW energii elektrycznej. System obsługuje dwa niezależne obiegi grzewcze — można jednocześnie zasilać ogrzewanie podłogowe i grzejniki. Pompy współpracują z kolektorami słonecznymi, co dodatkowo obniża koszty przygotowania ciepłej wody.",
    features: [
      "COP 3–5 — do 5 kW ciepła z każdego 1 kW prądu",
      "Dwa niezależne obiegi grzewcze (podłogówka + grzejniki)",
      "Klasa energetyczna A++ do A+++ (seria Comfort R32)",
      "Współpraca z kolektorami słonecznymi i zasobnikami CWU",
      "Zakres pracy od -20°C do 35°C temperatury zewnętrznej",
      "5 lat gwarancji producenta, zasilanie 1-faz lub 3-faz",
    ],
    highlight: "Szeroka gama mocy",
    imageUrl: "/images/fujitsu-cutout.png",
    imageAlt: "Pompa ciepła Fujitsu Waterstage Comfort R32 — split z zasobnikiem",
  },
];

export default function BrandsSection() {
  return (
    <section id="marki" className="relative py-20 px-4 overflow-hidden scroll-mt-20">
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
            Marki, którym ufamy
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Oferujemy pompy ciepła wiodących światowych producentów. Każda marka
            została przetestowana i dobrana pod kątem niezawodności, efektywności
            energetycznej i dopasowania do polskiego klimatu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 p-2 overflow-visible h-full"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <BrandCard {...brand} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
