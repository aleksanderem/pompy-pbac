import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";

export const dynamic = "force-static";

export function GET() {
  const baseUrl = "https://pompy.pbac.pl";

  const articles = getAllArticleSlugs().map((slug) => {
    const a = getArticleBySlug(slug)!;
    return `- [${a.title}](${baseUrl}/blog/${slug}): ${a.metaDescription}`;
  });

  const products = getAllProductSlugs().map((slug) => {
    const p = getProductBySlug(slug)!;
    return `- [${p.name}](${baseUrl}/produkty/${slug}): ${p.tagline}. Moc: ${p.powerRange}, czynnik: ${p.refrigerant}.`;
  });

  const body = `# PBAC — Pompy Ciepła Warszawa

> Profesjonalny montaż i serwis pomp ciepła w Warszawie i okolicach. Certyfikowani instalatorzy. Samsung, Mitsubishi Heavy, Fujitsu, Neoheat.

## O firmie

PBAC to warszawska firma specjalizująca się w doborze, montażu i serwisie pomp ciepła powietrze-woda. Obsługujemy domy jednorodzinne w Warszawie i promieniu 50 km. Pomagamy klientom uzyskać dofinansowanie z programu Czyste Powietrze i Mój Prąd.

- Adres: Marszałkowska 55/73, 00-676 Warszawa
- Telefon: +48 503 151 802
- E-mail: montaz@pbac.pl
- Strona: ${baseUrl}

## Strony

- [Strona główna](${baseUrl}): Montaż pomp ciepła od 30 000 zł z dotacją. Bezpłatna wycena.
- [Poradnik](${baseUrl}/poradnik): Kompletny poradnik o pompach ciepła — jak działają, ile kosztują, jakie dotacje.
- [Blog](${baseUrl}/blog): Artykuły eksperckie o pompach ciepła.
- [Kontakt](${baseUrl}/kontakt): Formularz kontaktowy, dane teleadresowe, mapa dojazdu.

## Produkty (pompy ciepła)

${products.join("\n")}

## Artykuły na blogu

${articles.join("\n")}

## Najczęściej zadawane pytania

- Ile kosztuje pompa ciepła? — Ceny zaczynają się od ok. 15 000 zł za urządzenie z montażem, zależnie od mocy i producenta.
- Ile można zaoszczędzić? — Do 70% kosztów ogrzewania vs gaz/olej. Oszczędność 3 000–5 000 zł rocznie dla domu 150 m².
- Czy pompa ciepła działa w mrozy? — Tak, nowoczesne modele (Samsung R290, Neoheat) pracują efektywnie do -25°C.
- Jak długo trwa montaż? — Standardowy montaż trwa 1–3 dni.
- Czy mogę uzyskać dofinansowanie? — Tak, z programu Czyste Powietrze i Mój Prąd.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
