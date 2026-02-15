import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "neoheat.pl" },
      { protocol: "https", hostname: "samsung-climatesolutions.com" },
      { protocol: "https", hostname: "www.elektronika-sa.com.pl" },
      { protocol: "https", hostname: "www.archiproducts.com" },
      { protocol: "https", hostname: "www.generalww.com" },
      { protocol: "https", hostname: "www.general-hvac.com" },
      { protocol: "https", hostname: "www.klima-therm.com" },
    ],
  },
};

export default nextConfig;
