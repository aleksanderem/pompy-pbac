import type { Metadata } from "next";
import { Montserrat, Chivo } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/json-ld";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pbac.pl"),
  title: "Pompy Ciepła — Montaż i Serwis | PBAC Warszawa",
  description:
    "Profesjonalny montaż pomp ciepła w Warszawie. Samsung, Mitsubishi Heavy, Fujitsu, Neoheat. Wycena gratis.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/pbac-logo.png",
    apple: "/images/pbac-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={`${montserrat.variable} ${chivo.variable} font-chivo bg-black text-white antialiased`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://pbac.pl/#organization",
            name: "PBAC",
            url: "https://pbac.pl",
            logo: {
              "@type": "ImageObject",
              url: "https://pbac.pl/images/pbac-logo.png",
              width: 184,
              height: 150,
            },
            description:
              "Profesjonalny montaż i serwis pomp ciepła oraz klimatyzacji w Warszawie i okolicach.",
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
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 52.2297,
                longitude: 21.0122,
              },
              geoRadius: "50000",
            },
            sameAs: ["https://pbac.pl"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+48503151802",
              contactType: "customer service",
              availableLanguage: "Polish",
              areaServed: "PL",
            },
          }}
        />
        {children}
        <Script
          src="https://ezicons.com/sdk.js"
          data-key="iek_oYNmSmglKJTtwcB1AHUMdI2XDxW98DHP"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
