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
  metadataBase: new URL("https://pompy.pbac.pl"),
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
  openGraph: {
    siteName: "PBAC",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "PBAC — Pompy Ciepła Warszawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pompy Ciepła — Montaż i Serwis | PBAC Warszawa",
    description:
      "Profesjonalny montaż pomp ciepła w Warszawie. Samsung, Mitsubishi Heavy, Fujitsu, Neoheat. Wycena gratis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <head>
        <link rel="preconnect" href="https://ezicons.com" />
        <link rel="dns-prefetch" href="https://ezicons.com" />
      </head>
      <body
        className={`${montserrat.variable} ${chivo.variable} font-chivo bg-black text-white antialiased`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://pompy.pbac.pl/#organization",
            name: "PBAC",
            url: "https://pompy.pbac.pl",
            logo: {
              "@type": "ImageObject",
              url: "https://pompy.pbac.pl/images/pbac-logo.png",
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
            sameAs: ["https://pompy.pbac.pl"],
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
