import { Metadata } from "next";
import dynamic from "next/dynamic";
import JsonLd from "@/components/json-ld";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhatIsHeatPump from "@/components/what-is-heat-pump";
import BenefitsSection from "@/components/benefits-section";
import BrandsSection from "@/components/brands-section";
import { testimonials } from "@/lib/testimonials";

const CalculatorSection = dynamic(() => import("@/components/calculator-section"));
const HeatPumpVsAc = dynamic(() => import("@/components/heat-pump-vs-ac"));
const ChartsSection = dynamic(() => import("@/components/charts-section"));
const HowItWorks = dynamic(() => import("@/components/how-it-works"));
const ComparisonTable = dynamic(() => import("@/components/comparison-table"));
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"));
const QuoteForm = dynamic(() => import("@/components/quote-form"));
const FaqSection = dynamic(() => import("@/components/faq-section"));
const Footer = dynamic(() => import("@/components/footer"));
const StickyPhone = dynamic(() => import("@/components/sticky-phone"));

export const metadata: Metadata = {
  title: "Pompy Ciepła — Montaż i Serwis | PBAC Warszawa",
  description:
    "Montaż pomp ciepła od 30 000 zł z dotacją. Samsung, Mitsubishi, Fujitsu, Neoheat — certyfikowani instalatorzy w Warszawie. Bezpłatna wycena.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pompy Ciepła — Montaż i Serwis | PBAC Warszawa",
    description:
      "Montaż pomp ciepła od 30 000 zł z dotacją. Samsung, Mitsubishi, Fujitsu, Neoheat — certyfikowani instalatorzy w Warszawie.",
    type: "website",
    siteName: "PBAC",
    url: "https://pompy.pbac.pl",
    images: [
      {
        url: "https://pompy.pbac.pl/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "PBAC — Pompy Ciepła Warszawa",
      },
    ],
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pompy.pbac.pl/#website",
    name: "PBAC — Pompy Ciepła Warszawa",
    url: "https://pompy.pbac.pl",
    description:
      "Profesjonalny montaż pomp ciepła w Warszawie. Samsung, Mitsubishi Heavy, Fujitsu, Neoheat. Wycena gratis.",
    publisher: { "@id": "https://pompy.pbac.pl/#organization" },
    inLanguage: "pl-PL",
  };

  const ratingValue =
    Math.round(
      (testimonials.reduce((sum, t) => sum + t.rating, 0) /
        testimonials.length) *
        100
    ) / 100;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://pompy.pbac.pl/#localbusiness",
    name: "PBAC — Montaż pomp ciepła i klimatyzacji",
    image: "https://pompy.pbac.pl/images/pbac-logo.png",
    url: "https://pompy.pbac.pl",
    telephone: "+48503151802",
    email: "montaz@pbac.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marszałkowska 55/73",
      postalCode: "00-676",
      addressLocality: "Warszawa",
      addressRegion: "mazowieckie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2297,
      longitude: 21.0122,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Warszawa",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.2297,
        longitude: 21.0122,
      },
      geoRadius: "50000",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount: testimonials.length,
      ratingCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.body,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pompy ciepła",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Montaż pomp ciepła",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Montaż pompy ciepła powietrze-woda",
                description:
                  "Profesjonalny montaż pomp ciepła typu powietrze-woda z uruchomieniem i konfiguracją.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Serwis i przegląd pompy ciepła",
                description:
                  "Okresowy przegląd, czyszczenie i konserwacja pomp ciepła wszystkich marek.",
              },
            },
          ],
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://pompy.pbac.pl/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ile kosztuje pompa ciepła?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Koszt pompy ciepła zależy od wielu czynników: mocy urządzenia, producenta, typu instalacji i wielkości domu. Ceny zaczynają się od ok. 15 000 zł za urządzenie z montażem. Skontaktuj się z nami po bezpłatną wycenę.",
        },
      },
      {
        "@type": "Question",
        name: "Ile można zaoszczędzić na ogrzewaniu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pompa ciepła pozwala zaoszczędzić nawet do 70% kosztów ogrzewania w porównaniu z ogrzewaniem gazowym lub olejowym. Przeciętna rodzina w domu 150 m² może zaoszczędzić 3 000–5 000 zł rocznie.",
        },
      },
      {
        "@type": "Question",
        name: "Czy pompa ciepła działa w mrozy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak! Nowoczesne pompy ciepła, takie jak Samsung EHS R290 czy Mitsubishi Heavy Hydrolution, pracują efektywnie nawet przy temperaturach do -25°C. Czynnik R290 zapewnia stabilną pracę w ekstremalnych warunkach.",
        },
      },
      {
        "@type": "Question",
        name: "Jak długo trwa montaż pompy ciepła?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standardowy montaż pompy ciepła trwa 1–3 dni, w zależności od typu urządzenia i zakresu prac instalacyjnych. Obejmuje to ustawienie jednostki zewnętrznej, podłączenie hydrauliczne i elektryczne oraz uruchomienie.",
        },
      },
      {
        "@type": "Question",
        name: "Czy mogę uzyskać dofinansowanie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak! W ramach programu Czyste Powietrze oraz Mój Prąd można uzyskać dofinansowanie na pompę ciepła. Pomagamy naszym klientom w procesie aplikowania o dotacje.",
        },
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#faq"],
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Jak zamówić montaż pompy ciepła w PBAC",
    description:
      "Proces zamawiania i montażu pompy ciepła w 4 prostych krokach — od kontaktu po serwis gwarancyjny.",
    totalTime: "P7D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "PLN",
      value: "30000-65000",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Kontakt i wycena",
        text: "Skontaktuj się z nami telefonicznie lub przez formularz, a przygotujemy bezpłatną wycenę dopasowaną do Twojego domu.",
        url: "https://pompy.pbac.pl/#wycena",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Dobór urządzenia",
        text: "Nasi specjaliści dobiorą optymalną pompę ciepła na podstawie metrażu, izolacji i potrzeb grzewczych Twojego domu.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Profesjonalny montaż",
        text: "Realizujemy montaż zgodnie z najwyższymi standardami producenta — hydraulika, elektryka, uruchomienie i konfiguracja.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serwis i gwarancja",
        text: "Zapewniamy pełen serwis gwarancyjny i pogwarancyjny oraz pomoc w uzyskaniu dotacji z programu Czyste Powietrze.",
      },
    ],
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Montaż pompy ciepła",
      description:
        "Profesjonalny montaż pomp ciepła powietrze-woda z doborem, instalacją hydrauliczną i elektryczną, uruchomieniem i konfiguracją.",
      provider: { "@id": "https://pompy.pbac.pl/#localbusiness" },
      areaServed: { "@type": "City", name: "Warszawa" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "PLN",
        lowPrice: 30000,
        highPrice: 65000,
        offerCount: 4,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Serwis pomp ciepła",
      description:
        "Okresowy przegląd, czyszczenie, konserwacja i naprawy pomp ciepła wszystkich marek — Samsung, Mitsubishi Heavy, Fujitsu, Neoheat.",
      provider: { "@id": "https://pompy.pbac.pl/#localbusiness" },
      areaServed: { "@type": "City", name: "Warszawa" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Pomoc z dofinansowaniem na pompę ciepła",
      description:
        "Kompleksowa pomoc w uzyskaniu dotacji z programu Czyste Powietrze, Moje Ciepło i ulgi termomodernizacyjnej na pompę ciepła.",
      provider: { "@id": "https://pompy.pbac.pl/#localbusiness" },
      areaServed: { "@type": "City", name: "Warszawa" },
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://pompy.pbac.pl",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd
        data={[
          websiteSchema,
          localBusinessSchema,
          faqSchema,
          howToSchema,
          ...serviceSchemas,
          breadcrumbSchema,
        ]}
      />
      <Navbar />
      <HeroSection />
      <WhatIsHeatPump />
      <BenefitsSection />
      <BrandsSection />
      <CalculatorSection />
      <HeatPumpVsAc />
      <ChartsSection />
      <HowItWorks />
      <ComparisonTable />
      <TestimonialsSection />
      <QuoteForm />
      <FaqSection />
      <Footer />
      <StickyPhone />
    </main>
  );
}
