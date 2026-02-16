export interface Author {
  slug: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  image: string;
}

export const authors: Author[] = [
  {
    slug: "pbac-team",
    name: "Zespół PBAC",
    role: "Certyfikowani instalatorzy pomp ciepła",
    experience: "10+ lat doświadczenia",
    description:
      "Zespół certyfikowanych instalatorów pomp ciepła PBAC z Warszawy. Ponad 10 lat doświadczenia w montażu i serwisie systemów grzewczych Samsung, Mitsubishi Heavy, Fujitsu i Neoheat.",
    image: "https://pompy.pbac.pl/images/pbac-logo.png",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
