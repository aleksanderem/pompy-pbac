import type { Metadata } from "next";
import { Montserrat, Chivo } from "next/font/google";
import Script from "next/script";
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
  title: "Pompy Ciepla - Montaz i Serwis | PBAC Warszawa",
  description:
    "Profesjonalny montaz pomp ciepla w Warszawie. Samsung, Mitsubishi Heavy, Fujitsu, Neoheat. Wycena gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.variable} ${chivo.variable} font-chivo bg-black text-white antialiased`}
      >
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
