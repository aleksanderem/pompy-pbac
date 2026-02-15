import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PBAC — Pompy Ciepła Warszawa",
    short_name: "PBAC",
    description:
      "Profesjonalny montaż i serwis pomp ciepła w Warszawie. Samsung, Mitsubishi Heavy, Fujitsu, Neoheat.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#3D5EFF",
    icons: [
      {
        src: "/images/pbac-logo.png",
        sizes: "184x150",
        type: "image/png",
      },
    ],
  };
}
