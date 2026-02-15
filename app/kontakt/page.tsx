import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactPageClient from "./contact-page-client";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Kontakt — PBAC | Montaż pomp ciepła Warszawa",
  description:
    "Skontaktuj się z PBAC — profesjonalny montaż i serwis pomp ciepła w Warszawie. Zadzwoń, napisz lub zamów bezpłatną wycenę.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt — PBAC",
    description:
      "Skontaktuj się z PBAC — profesjonalny montaż i serwis pomp ciepła w Warszawie.",
    type: "website",
    siteName: "PBAC",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://pbac.pl/kontakt",
    name: "Kontakt — PBAC",
    description:
      "Skontaktuj się z PBAC — profesjonalny montaż i serwis pomp ciepła w Warszawie.",
    url: "https://pbac.pl/kontakt",
    isPartOf: { "@id": "https://pbac.pl/#website" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#kontakt-info"],
    },
    mainEntity: {
      "@type": "HVACBusiness",
      "@id": "https://pbac.pl/#localbusiness",
      name: "PBAC",
      telephone: "+48503151802",
      email: "montaz@pbac.pl",
      url: "https://pbac.pl",
      image: "https://pbac.pl/images/pbac-logo.png",
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
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      areaServed: {
        "@type": "City",
        name: "Warszawa",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+48503151802",
          contactType: "customer service",
          availableLanguage: "Polish",
          areaServed: "PL",
        },
        {
          "@type": "ContactPoint",
          email: "montaz@pbac.pl",
          contactType: "sales",
          availableLanguage: "Polish",
          areaServed: "PL",
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://pbac.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kontakt",
        item: "https://pbac.pl/kontakt",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={[contactPageSchema, breadcrumbSchema]} />
      <Navbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
