export interface ArticleSection {
  heading: string;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  summary: string;
  date: string;
  excerpt: string;
  readingTime: number;
  category: string;
  coverImage: string;
  coverAlt: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
  authorSlug?: string;
  relatedProducts?: string[];
}

export const articles: Article[] = [
  {
    slug: "pompa-ciepla-co-to-jest-jak-dziala",
    title: "Pompa ciepła — co to jest i jak działa? Kompletny przewodnik 2026",
    metaDescription:
      "Dowiedz się, czym jest pompa ciepła, jak działa i dlaczego to najefektywniejsze źródło ogrzewania domu. Przewodnik po typach, zasadzie działania i zastosowaniach.",
    summary:
      "Pompa ciepła pobiera energię cieplną z otoczenia (powietrza, gruntu lub wody) i przenosi ją do budynku, zużywając niewielką ilość prądu. Z 1 kW energii elektrycznej wytwarza 3–5 kW ciepła. Wyróżniamy pompy powietrze-woda (najpopularniejsze w Polsce), powietrze-powietrze i gruntowe. Nowoczesne modele pracują skutecznie nawet przy -25°C.",
    date: "2025-11-05",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop&q=80",
    coverAlt: "Nowoczesny dom z pompą ciepła — jak działa pompa ciepła",
    excerpt:
      "Pompa ciepła to urządzenie, które pobiera energię cieplną z otoczenia — powietrza, gruntu lub wody — i przekazuje ją do wnętrza budynku. Działa na zasadzie odwróconego obiegu chłodniczego, podobnie jak lodówka, tyle że w przeciwnym kierunku.",
    readingTime: 8,
    category: "Poradnik",
    sections: [
      {
        heading: "Czym jest pompa ciepła?",
        content:
          "Pompa ciepła to urządzenie grzewcze, które wykorzystuje energię odnawialną zgromadzoną w otoczeniu — powietrzu, gruncie lub wodach gruntowych — do ogrzewania budynku i przygotowania ciepłej wody użytkowej. W odróżnieniu od tradycyjnych kotłów gazowych czy olejowych, pompa ciepła nie spala paliwa. Zamiast tego przenosi ciepło z jednego miejsca do drugiego, zużywając przy tym stosunkowo niewielką ilość energii elektrycznej. Dzięki temu z 1 kW pobranego prądu pompa ciepła potrafi dostarczyć od 3 do 5 kW ciepła — reszta pochodzi z darmowej energii otoczenia.",
      },
      {
        heading: "Zasada działania — odwrócony obieg chłodniczy",
        content:
          "Pompa ciepła działa na zasadzie termodynamicznego obiegu chłodniczego, znanego jako cykl Carnota. W skrócie: czynnik chłodniczy (np. R290, R32) krąży w zamkniętym obiegu przez cztery kluczowe elementy. W parowniku czynnik chłodniczy odbiera ciepło z otoczenia (powietrza, gruntu) i odparowuje w niskiej temperaturze. Sprężarka podnosi ciśnienie i temperaturę gazowego czynnika — to jedyny element wymagający energii elektrycznej. W skraplaczu gorący gaz oddaje ciepło do instalacji grzewczej budynku, skraplając się z powrotem w ciecz. Zawór rozprężny obniża ciśnienie czynnika, przygotowując go do ponownego odparowania. Cały cykl powtarza się w sposób ciągły, dostarczając ciepło do domu.",
      },
      {
        heading: "Typy pomp ciepła",
        content:
          "Wyróżniamy trzy główne typy pomp ciepła ze względu na źródło ciepła. Pompy powietrze-woda (air-to-water) są najpopularniejsze w Polsce — pobierają ciepło z powietrza zewnętrznego i przekazują je do instalacji wodnej (ogrzewanie podłogowe, grzejniki, CWU). Ich montaż jest najprostszy i najtańszy. Pompy powietrze-powietrze działają jak klimatyzatory z funkcją grzania — ogrzewają powietrze bezpośrednio, bez instalacji wodnej. Są tańsze, ale nie przygotowują ciepłej wody użytkowej. Pompy gruntowe (solanka-woda) pobierają ciepło z gruntu za pomocą kolektorów poziomych lub sond pionowych. Mają najwyższą efektywność (grunt ma stabilną temperaturę przez cały rok), ale ich montaż jest znacznie droższy ze względu na konieczność wykonania odwiertów lub rozłożenia kolektorów.",
      },
      {
        heading: "Monoblok vs split — różnice w konstrukcji",
        content:
          "Pompy ciepła powietrze-woda występują w dwóch wariantach konstrukcyjnych. Monoblok to rozwiązanie, w którym cały obieg chłodniczy zamknięty jest w jednej jednostce zewnętrznej — do budynku prowadzą wyłącznie rury z wodą. Montaż jest prostszy i nie wymaga certyfikatu F-gazowego. Przykłady to Samsung EHS Mono R290 czy Neoheat Eko Mono R290. System split składa się z jednostki zewnętrznej (z kompresorem) i wewnętrznej (z wymiennikiem), połączonych rurami chłodniczymi. Wymaga instalatora z uprawnieniami F-gazowymi, ale oferuje większą elastyczność rozmieszczenia elementów. Przykładem jest Mitsubishi Heavy Hydrolution.",
      },
      {
        heading: "Czy pompa ciepła działa zimą?",
        content:
          "Tak — nowoczesne pompy ciepła typu powietrze-woda pracują efektywnie nawet przy temperaturach zewnętrznych do -25°C. Oczywiście im niższa temperatura na zewnątrz, tym niższy współczynnik efektywności COP, ale pompa nadal produkuje ciepło. Przykładowo Samsung EHS Mono R290 utrzymuje 100% mocy grzewczej przy -10°C, a modele Fujitsu Super High Power produkują wodę 60°C przy -20°C bez wspomagania grzałką. W praktyce polski klimat (średnio -5 do -15°C zimą) jest w pełni w zasięgu możliwości współczesnych pomp ciepła.",
      },
      {
        heading: "Dla kogo jest pompa ciepła?",
        content:
          "Pompa ciepła sprawdzi się zarówno w nowym domu, jak i podczas modernizacji starszego budynku. W nowych domach o niskim zapotrzebowaniu na ciepło (dobrze ocieplonych) pompa ciepła jest naturalnym wyborem — szczególnie w połączeniu z ogrzewaniem podłogowym i fotowoltaiką. W starszych domach warto rozważyć pompy zdolne do produkcji wody o temperaturze 65-75°C (jak Samsung EHS Mono R290), które mogą współpracować z istniejącymi grzejnikami bez konieczności ich wymiany. Kluczowe jest odpowiednie dobranie mocy pompy do zapotrzebowania cieplnego budynku — audyt energetyczny pomoże określić potrzeby.",
      },
    ],
    relatedSlugs: [
      "ile-kosztuje-pompa-ciepla-2026",
      "pompa-ciepla-zima-czy-grzeje-przy-minus-20",
      "cop-scop-pompy-ciepla-co-oznaczaja",
    ],
    relatedProducts: ["neoheat-eko-mono-r290", "samsung-ehs-mono-r290"],
  },
  {
    slug: "ile-kosztuje-pompa-ciepla-2026",
    title: "Ile kosztuje pompa ciepła w 2026 roku? Ceny, montaż, eksploatacja",
    metaDescription:
      "Sprawdź aktualne ceny pomp ciepła w 2026 r. Koszt zakupu, montażu i eksploatacji. Porównanie marek Samsung, Mitsubishi, Fujitsu, Neoheat. Kiedy się zwraca?",
    summary:
      "Kompletna instalacja pompy ciepła powietrze-woda w domu 120–150 m² kosztuje 30 000–65 000 zł brutto w 2026 roku. Roczne koszty ogrzewania wynoszą ok. 2 000–2 300 zł (vs 5 000–7 000 zł za gaz). Po odliczeniu dotacji z Czystego Powietrza (do 59 900 zł) zwrot inwestycji następuje w 3–8 lat.",
    date: "2025-11-18",
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80",
    coverAlt: "Kalkulator i monety — koszty pompy ciepła w 2026 roku",
    excerpt:
      "Koszt pompy ciepła to nie tylko cena urządzenia. Na całkowitą inwestycję składa się zakup pompy, montaż z materiałami, ewentualna adaptacja instalacji oraz koszty eksploatacji. Sprawdź, z jakimi kwotami musisz się liczyć.",
    readingTime: 10,
    category: "Finanse",
    sections: [
      {
        heading: "Składniki kosztu instalacji pompy ciepła",
        content:
          "Całkowity koszt instalacji pompy ciepła składa się z kilku elementów. Po pierwsze, samo urządzenie — jego cena zależy od producenta, mocy i typu (monoblok vs split). Po drugie, montaż z materiałami instalacyjnymi obejmuje prace hydrauliczne, elektryczne, posadowienie jednostki zewnętrznej i podłączenie do istniejącej instalacji. Po trzecie, w starszych domach może być konieczna adaptacja instalacji — np. wymiana grzejników na niskotemperaturowe lub montaż bufora ciepła. Wreszcie, dokumentacja i uruchomienie obejmują projekt, protokoły i zgłoszenia.",
      },
      {
        heading: "Ceny pomp ciepła — przegląd rynku 2026",
        content:
          "W 2026 roku ceny samych urządzeń kształtują się następująco. Pompy monoblokowe o mocy 8-12 kW (np. Neoheat Eko Mono R290, Samsung EHS Mono R290) kosztują od 18 000 do 35 000 zł netto za samo urządzenie. Systemy split z modułem wewnętrznym (np. Mitsubishi Heavy Hydrolution ALL-IN-ONE z zasobnikiem 180L) to wydatek rzędu 25 000-45 000 zł. Pompy o wyższych mocach 14-17 kW (np. Fujitsu Waterstage Super High Power) mogą kosztować od 30 000 do 50 000 zł. Do ceny urządzenia należy doliczyć montaż z materiałami — zwykle od 8 000 do 15 000 zł, w zależności od złożoności instalacji.",
      },
      {
        heading: "Łączny koszt inwestycji",
        content:
          "Podsumowując, kompletna instalacja pompy ciepła powietrze-woda w domu jednorodzinnym w 2026 roku to wydatek rzędu 30 000-65 000 zł brutto. Dla typowego domu 120-150 m² z ogrzewaniem podłogowym, pompa o mocy 8-12 kW z montażem zamknie się w przedziale 35 000-50 000 zł. To kwota przed odliczeniem dotacji — programy Czyste Powietrze i Moje Ciepło mogą pokryć nawet 35 000-50 000 zł, drastycznie obniżając realny koszt inwestycji.",
      },
      {
        heading: "Koszty eksploatacji — ile prądu zużywa pompa ciepła?",
        content:
          "Koszt ogrzewania domu pompą ciepła zależy od sprawności urządzenia (COP/SCOP), powierzchni domu, jego izolacji i cen prądu. Dla domu 150 m² o dobrym ociepleniu zapotrzebowanie na ciepło wynosi ok. 10 000-12 000 kWh rocznie. Przy średnim sezonowym COP na poziomie 3,5 pompa zużyje ok. 3 000-3 500 kWh prądu rocznie. Przy cenie prądu ok. 0,65 zł/kWh (taryfa G11) daje to roczny koszt ogrzewania ok. 2 000-2 300 zł. Dla porównania, ogrzewanie gazem kosztuje ok. 5 000-7 000 zł rocznie, a węglem 4 000-6 000 zł. W połączeniu z fotowoltaiką koszty prądu można zredukować nawet o 50-70%.",
      },
      {
        heading: "Okres zwrotu inwestycji",
        content:
          "Przy różnicy kosztów ogrzewania ok. 3 000-5 000 zł rocznie na korzyść pompy ciepła (w porównaniu z gazem) i po odliczeniu dotacji, zwrot inwestycji następuje zwykle po 5-8 latach. Jeśli dom jest wyposażony w fotowoltaikę, okres ten skraca się do 3-5 lat. Warto pamiętać, że pompa ciepła to inwestycja na 15-20 lat — po zwrocie kosztów oszczędności kumulują się przez wiele kolejnych lat. Dodatkowo pompa ciepła podnosi wartość nieruchomości i poprawia jej klasę energetyczną.",
      },
      {
        heading: "Na czym nie warto oszczędzać?",
        content:
          "Najtańsza pompa ciepła nie zawsze oznacza najlepszą inwestycję. Kluczowe jest dobranie mocy do budynku (zbyt mała = drogrzewanie grzałką, zbyt duża = taktowanie i awarie), wybór sprawdzonego producenta z dostępnym serwisem i częściami zamiennymi, oraz profesjonalny montaż. Oszczędność 5 000 zł na montażu u niedoświadczonego instalatora może kosztować wielokrotnie więcej w naprawach i zwiększonym zużyciu prądu. Warto inwestować w urządzenia z dobrym COP/SCOP — różnica 0,5 punktu COP to oszczędność rzędu 500-800 zł rocznie.",
      },
    ],
    relatedSlugs: [
      "dotacje-pompy-ciepla-2026-czyste-powietrze",
      "pompa-ciepla-co-to-jest-jak-dziala",
      "pompa-ciepla-do-starego-domu",
    ],
    relatedProducts: ["neoheat-eko-mono-r290", "samsung-ehs-mono-r290", "fujitsu-waterstage"],
  },
  {
    slug: "pompa-ciepla-powietrze-woda-vs-powietrze-powietrze",
    title:
      "Pompa ciepła powietrze-woda vs powietrze-powietrze — którą wybrać?",
    metaDescription:
      "Porównanie pomp ciepła powietrze-woda i powietrze-powietrze. Różnice w działaniu, kosztach, efektywności i zastosowaniu. Która lepsza do Twojego domu?",
    summary:
      "Pompa powietrze-woda grzeje budynek przez instalację wodną (podłogówka, grzejniki) i przygotowuje ciepłą wodę użytkową — to kompletny system zastępujący kocioł. Pompa powietrze-powietrze grzeje tylko powietrze, nie przygotowuje CWU. Dla polskich domów jednorodzinnych pompa powietrze-woda jest lepszą i bardziej kompletną inwestycją.",
    date: "2025-12-02",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&q=80",
    coverAlt: "Nowoczesny salon z ogrzewaniem — porównanie typów pomp ciepła",
    excerpt:
      "Oba typy pomp ciepła korzystają z energii powietrza zewnętrznego, ale różnią się sposobem przekazywania ciepła do budynku. Powietrze-woda grzeje wodę w instalacji, powietrze-powietrze ogrzewa bezpośrednio powietrze w pomieszczeniach.",
    readingTime: 7,
    category: "Poradnik",
    sections: [
      {
        heading: "Jak działają oba systemy?",
        content:
          "Pompa ciepła powietrze-woda (air-to-water) pobiera ciepło z powietrza zewnętrznego i przekazuje je do wody krążącej w instalacji grzewczej — ogrzewanie podłogowe, grzejniki, a także ciepła woda użytkowa (CWU). To kompletny system grzewczy zastępujący kocioł. Pompa ciepła powietrze-powietrze (air-to-air) to w istocie klimatyzator z funkcją grzania. Pobiera ciepło z powietrza zewnętrznego i oddaje je bezpośrednio do powietrza wewnątrz pomieszczenia przez jednostkę wewnętrzną (split). Nie grzeje wody ani nie współpracuje z instalacją grzejnikową.",
      },
      {
        heading: "Ogrzewanie i ciepła woda",
        content:
          "Pompa powietrze-woda jest pełnoprawnym systemem grzewczym. Ogrzewa budynek przez instalację wodną (podłogówka, grzejniki) i przygotowuje ciepłą wodę użytkową — prysznic, kąpiel, zmywanie. Jeden system zastępuje i kocioł, i podgrzewacz wody. Pompa powietrze-powietrze ogrzewa wyłącznie powietrze w pomieszczeniach i nie przygotowuje CWU. Do podgrzewania wody potrzebne jest osobne urządzenie (np. bojler elektryczny, pompa CWU). To istotny dodatkowy koszt i mniejsza wygoda.",
      },
      {
        heading: "Efektywność i koszty eksploatacji",
        content:
          "Pompy powietrze-powietrze mają wyższy COP punktowy (5-7) niż powietrze-woda (3-5), ponieważ nie muszą podgrzewać wody do wysokich temperatur. Jednak sezonowa efektywność (SCOP) jest zbliżona, bo pompy powietrze-powietrze tracą wydajność przy dużych mrozach szybciej. W praktyce koszty ogrzewania powietrzem mogą być o 10-20% niższe niż wodą, ale brak CWU w bilansie niweluje tę różnicę po doliczeniu kosztów osobnego podgrzewania wody.",
      },
      {
        heading: "Komfort i równomierność ogrzewania",
        content:
          "Ogrzewanie podłogowe zasilane pompą powietrze-woda zapewnia najbardziej równomierny rozkład temperatury — ciepło promieniuje z całej powierzchni podłogi, bez przeciągów i zimnych stref. Nawet grzejniki dają stabilne ogrzewanie konwekcyjne. Pompa powietrze-powietrze grzeje strumieniem ciepłego powietrza z jednostki wewnętrznej. To powoduje nierównomierną temperaturę w pomieszczeniu (cieplej pod sufitem, zimniej przy podłodze) i wyczuwalny ruch powietrza. Każde pomieszczenie wymaga osobnej jednostki wewnętrznej, co przy wielu pokojach oznacza system multi-split.",
      },
      {
        heading: "Koszty zakupu i montażu",
        content:
          "Pompa powietrze-powietrze jest tańsza w zakupie — klimatyzator split 3,5 kW kosztuje 4 000-8 000 zł z montażem. Jednak ogrzanie całego domu wymaga wielu jednostek (multi-split), co szybko podnosi cenę do 15 000-30 000 zł. Pompa powietrze-woda o mocy 8-12 kW to inwestycja 35 000-50 000 zł z montażem, ale to kompletny system — ogrzewanie, chłodzenie i CWU w jednym. Dodatkowo, pompy powietrze-woda kwalifikują się do wyższych dotacji (Czyste Powietrze, Moje Ciepło), co znacząco obniża realny koszt.",
      },
      {
        heading: "Którą wybrać? Podsumowanie",
        content:
          "Pompa ciepła powietrze-woda to właściwy wybór, jeśli budujesz nowy dom z instalacją wodną, chcesz kompletny system grzewczy z CWU, zależy Ci na komforcie ogrzewania podłogowego lub chcesz wymienić kocioł gazowy/węglowy w istniejącym domu. Pompa powietrze-powietrze ma sens, gdy potrzebujesz przede wszystkim klimatyzacji latem z dodatkowym ogrzewaniem zimą, masz niewielki dom lub mieszkanie bez instalacji wodnej, lub szukasz najtańszego rozwiązania grzewczego bez CWU. W większości przypadków dla polskich domów jednorodzinnych pompa powietrze-woda jest lepszą i bardziej kompletną inwestycją.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-co-to-jest-jak-dziala",
      "pompa-ciepla-a-klimatyzacja-roznice",
      "montaz-pompy-ciepla-co-musisz-wiedziec",
    ],
    relatedProducts: ["samsung-ehs-mono-r290", "mitsubishi-heavy-hydrolution"],
  },
  {
    slug: "dotacje-pompy-ciepla-2026-czyste-powietrze",
    title:
      "Dotacje na pompy ciepła 2026 — Czyste Powietrze, Moje Ciepło i inne programy",
    metaDescription:
      "Kompletny przewodnik po dotacjach na pompy ciepła w 2026 roku. Czyste Powietrze, Moje Ciepło, ulga termomodernizacyjna. Ile można dostać i jak złożyć wniosek?",
    summary:
      "W 2026 r. program Czyste Powietrze oferuje do 59 900 zł dotacji na pompę ciepła (zależnie od dochodu). Moje Ciepło daje do 21 500 zł dla nowych domów. Ulga termomodernizacyjna pozwala odliczyć do 53 000 zł od podatku. Programy można łączyć, pokrywając nawet połowę kosztów inwestycji.",
    date: "2025-12-15",
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848e968f44?w=800&h=500&fit=crop&q=80",
    coverAlt: "Dokumenty i wnioski — dotacje na pompy ciepła 2026",
    excerpt:
      "W 2026 roku dostępnych jest kilka programów dofinansowania zakupu i montażu pomp ciepła. Łącząc dotacje z ulgą termomodernizacyjną, można odzyskać nawet połowę kosztów inwestycji.",
    readingTime: 9,
    category: "Dotacje",
    sections: [
      {
        heading: "Program Czyste Powietrze 2026",
        content:
          "Program Czyste Powietrze to największy i najpopularniejszy program dofinansowania wymiany ogrzewania w Polsce. W 2026 roku program kontynuuje działanie z trzema poziomami dofinansowania zależnymi od dochodu wnioskodawcy. Poziom podstawowy (dochód do 135 000 zł rocznie) oferuje dofinansowanie do 35 200 zł na pompę ciepła powietrze-woda. Poziom podwyższony (dochód do 1 894 zł na osobę w gospodarstwie) zwiększa kwotę do 47 500 zł. Poziom najwyższy (dochód do 1 090 zł na osobę) pozwala uzyskać nawet 59 900 zł. Warunek: wymiana starego źródła ciepła na paliwo stałe (kocioł węglowy, piec kaflowy). Program obejmuje nie tylko pompę ciepła, ale też ocieplenie, wymianę okien i drzwi.",
      },
      {
        heading: "Program Moje Ciepło",
        content:
          "Program Moje Ciepło jest skierowany do właścicieli nowych domów (z pozwoleniem na budowę od 2021 roku), którzy od początku instalują pompę ciepła jako jedyne źródło ogrzewania. Dofinansowanie wynosi do 21 500 zł dla pompy powietrze-woda i do 28 500 zł dla pompy gruntowej. Dodatkowy bonus 5 000 zł przysługuje, jeśli dom posiada kartę efektywności energetycznej klasy A+ lub wyżej. Program nie wymaga wymiany starego źródła ciepła — jest dedykowany nowym budynkom. Wniosek składa się przez portal gov.pl po zakończeniu montażu.",
      },
      {
        heading: "Ulga termomodernizacyjna",
        content:
          "Ulga termomodernizacyjna pozwala odliczyć od podstawy opodatkowania do 53 000 zł wydatków na termomodernizację domu jednorodzinnego. Obejmuje m.in. zakup i montaż pompy ciepła, ocieplenie ścian, wymianę okien. Przy stawce podatkowej 12% ulga oznacza oszczędność do 6 360 zł, a przy 32% — do 16 960 zł. Co ważne, ulgę termomodernizacyjną można łączyć z programem Czyste Powietrze (odlicza się wydatki nieobjęte dotacją). Warunek: termomodernizacja musi być zakończona w ciągu 3 lat od końca roku, w którym poniesiono pierwszy wydatek.",
      },
      {
        heading: "Dofinansowania lokalne i regionalne",
        content:
          "Wiele gmin i województw oferuje dodatkowe programy dofinansowania wymiany ogrzewania. W Warszawie i okolicach dostępne są programy z budżetu miasta oraz województwa mazowieckiego, które mogą pokrywać kolejne 5 000-15 000 zł kosztów. Programy te zmieniają się co roku — warto sprawdzić aktualne oferty w urzędzie gminy, WFOŚiGW (Wojewódzki Fundusz Ochrony Środowiska) oraz na stronie czystepowietrze.gov.pl. Niektóre samorządy oferują też preferencyjne pożyczki na dopłatę własną.",
      },
      {
        heading: "Warunki techniczne — jakie pompy kwalifikują się do dotacji?",
        content:
          "Nie każda pompa ciepła kwalifikuje się do dofinansowania. Program Czyste Powietrze wymaga, aby urządzenie znajdowało się na liście ZUM (Zielone Urządzenia i Materiały) i spełniało minimalne wymagania efektywności energetycznej. Pompa musi posiadać certyfikat zgodności z normą EN 14511 lub EN 14825, a jej klasa energetyczna nie może być niższa niż A+. Wszystkie pompy z oferty PBAC (Neoheat Eko Mono R290, Samsung EHS Mono, Mitsubishi Hydrolution, Fujitsu Waterstage) spełniają te wymagania i znajdują się na liście ZUM.",
      },
      {
        heading: "Jak złożyć wniosek o dotację?",
        content:
          "Wniosek o dofinansowanie z programu Czyste Powietrze składa się elektronicznie przez portal gov.pl lub w Wojewódzkim Funduszu Ochrony Środowiska. Można go złożyć zarówno przed rozpoczęciem inwestycji (wniosek o zobowiązanie), jak i po jej zakończeniu (wniosek o płatność). Do wniosku potrzebne są: formularz z danymi budynku, kosztorys lub faktury, zaświadczenie o dochodach, zdjęcia starego źródła ciepła (przed wymianą) i nowej instalacji. Profesjonalni instalatorzy, tacy jak PBAC, pomagają w przygotowaniu dokumentacji i wyborze urządzenia kwalifikującego się do dotacji.",
      },
    ],
    relatedSlugs: [
      "ile-kosztuje-pompa-ciepla-2026",
      "pompa-ciepla-do-starego-domu",
      "montaz-pompy-ciepla-co-musisz-wiedziec",
    ],
    relatedProducts: ["neoheat-eko-mono-r290", "samsung-ehs-mono-r290"],
  },
  {
    slug: "pompa-ciepla-zima-czy-grzeje-przy-minus-20",
    title: "Pompa ciepła zimą — czy grzeje przy -20°C?",
    metaDescription:
      "Czy pompa ciepła działa w mrozy? Sprawdź, jak nowoczesne pompy radzą sobie zimą przy -20°C i niżej. Fakty vs mity o efektywności w polskim klimacie.",
    summary:
      "Tak, nowoczesne pompy ciepła grzeją skutecznie przy -20°C i niżej. Samsung EHS R290 utrzymuje 100% mocy przy -10°C i produkuje wodę 75°C. Fujitsu Super High Power dostarcza 60°C przy -20°C bez grzałki. COP spada w mrozy (do 1,8–2,5 przy -20°C), ale nadal jest dwukrotnie wydajniejszy niż grzałka elektryczna.",
    date: "2025-12-29",
    coverImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=500&fit=crop&q=80",
    coverAlt: "Śnieżny zimowy krajobraz — pompa ciepła w mrozach",
    excerpt:
      "Jedną z najczęstszych obaw przy wyborze pompy ciepła jest pytanie, czy będzie grzać w mrozy. Odpowiedź jest jednoznaczna — nowoczesne pompy ciepła powietrze-woda pracują efektywnie nawet przy -25°C.",
    readingTime: 7,
    category: "Poradnik",
    sections: [
      {
        heading: "Mit o pompach ciepła i mrozach",
        content:
          "Przekonanie, że pompy ciepła nie radzą sobie zimą, pochodzi z czasów, gdy technologia była znacznie mniej zaawansowana. Starsze modele z lat 2000-2010 rzeczywiście traciły większość mocy grzewczej poniżej -7°C. Ale technologia sprężarek inwerterowych i nowoczesne czynniki chłodnicze zrewolucjonizowały rynek. Współczesne pompy ciepła projektowane na rynek europejski (w tym polski) są testowane i certyfikowane do pracy w temperaturach do -25°C, a niektóre nawet do -28°C. To nie są warunki laboratoryjne — to realne zakresy pracy gwarantowane przez producentów.",
      },
      {
        heading: "Jak pompy radzą sobie w mrozach — dane techniczne",
        content:
          "Spójrzmy na konkretne parametry pomp z oferty PBAC. Samsung EHS Mono R290 utrzymuje 100% mocy grzewczej przy -10°C i produkuje wodę o temperaturze 75°C bez grzałki. Zakres pracy sięga do -25°C. Neoheat Eko Mono R290 pracuje w temperaturach od -25°C do +45°C z pełną mocą grzewczą, utrzymując klasę A+++ nawet przy niskich temperaturach zewnętrznych. Fujitsu Waterstage Super High Power dostarcza wodę 60°C przy -20°C i 55°C przy -22°C bez wspomagania grzałką elektryczną. Mitsubishi Heavy Hydrolution pracuje w zakresie od -20°C do +43°C, dostarczając CWU o temperaturze 60°C.",
      },
      {
        heading: "Co dzieje się z COP w mrozy?",
        content:
          "Współczynnik COP (stosunek dostarczonego ciepła do zużytego prądu) faktycznie spada wraz z temperaturą zewnętrzną — to fizyka, której nie da się obejść. Przy +7°C typowy COP wynosi 4-5 (z 1 kW prądu 4-5 kW ciepła). Przy -7°C COP spada do ok. 2,5-3,5. Przy -20°C COP może wynosić 1,8-2,5. Nawet COP 2,0 oznacza, że pompa jest dwukrotnie efektywniejsza niż grzałka elektryczna. A dni z temperaturą poniżej -15°C stanowią w Polsce statystycznie mniej niż 5% sezonu grzewczego. Dlatego liczy się nie COP punktowy, lecz sezonowy SCOP — średnioważony za cały sezon.",
      },
      {
        heading: "Grzałka zapasowa — ubezpieczenie, nie norma",
        content:
          "Większość pomp ciepła posiada wbudowaną grzałkę elektryczną (zwykle 2-9 kW) jako element zapasowy. Jej zadaniem jest wspomaganie pompy w ekstremalnych mrozach lub podczas odszraniania wymiennika zewnętrznego. W dobrze dobranej i zainstalowanej pompie grzałka włącza się sporadycznie — przez kilkanaście do kilkudziesięciu godzin w sezonie. Jej koszt eksploatacji jest minimalny w skali rocznej, a daje poczucie bezpieczeństwa, że w domu będzie ciepło nawet podczas fali arktycznego mrozu.",
      },
      {
        heading: "Polski klimat a dobór mocy pompy",
        content:
          "Klucz do komfortu zimą to prawidłowy dobór mocy pompy ciepła do zapotrzebowania cieplnego budynku. W Polsce temperatura obliczeniowa dla ogrzewania to -20°C (strefa III — Warszawa i okolice) lub -24°C (strefa V — Suwałki). Pompa powinna pokrywać co najmniej 80-90% zapotrzebowania cieplnego w temperaturze obliczeniowej. Profesjonalny instalator wykonuje obliczenia na podstawie audytu energetycznego budynku i dobiera pompę z odpowiednim zapasem mocy. Zbyt mała pompa będzie nadmiernie korzystać z grzałki, a zbyt duża będzie taktować (włączać i wyłączać się zbyt często), co skraca jej żywotność.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-co-to-jest-jak-dziala",
      "cop-scop-pompy-ciepla-co-oznaczaja",
      "pompa-ciepla-do-starego-domu",
    ],
    relatedProducts: ["samsung-ehs-mono-r290", "fujitsu-waterstage", "neoheat-eko-mono-r290"],
  },
  {
    slug: "pompa-ciepla-a-klimatyzacja-roznice",
    title: "Pompa ciepła a klimatyzacja — różnice, zalety i wady",
    metaDescription:
      "Czym różni się pompa ciepła od klimatyzacji? Porównanie kosztów, efektywności i komfortu. Czy klimatyzator może zastąpić ogrzewanie? Kompletne porównanie.",
    summary:
      "Pompa ciepła i klimatyzator działają na tej samej zasadzie, ale pompa jest zoptymalizowana do grzania (pracuje do -25°C), grzeje wodę w instalacji (podłogówka, grzejniki) i przygotowuje CWU. Klimatyzator grzeje tylko powietrze i traci moc poniżej -15°C. Dla polskich domów pompa ciepła powietrze-woda jest zdecydowanie lepszym wyborem.",
    date: "2026-01-10",
    coverImage:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&h=500&fit=crop&q=80",
    coverAlt: "Klimatyzator na ścianie — pompa ciepła vs klimatyzacja",
    excerpt:
      "Pompa ciepła i klimatyzator to w gruncie rzeczy to samo urządzenie działające na tej samej zasadzie termodynamicznej. Różnica polega na przeznaczeniu, mocy, sposobie dystrybucji ciepła i przygotowaniu do pracy w niskich temperaturach.",
    readingTime: 6,
    category: "Poradnik",
    sections: [
      {
        heading: "Ta sama zasada, inne przeznaczenie",
        content:
          "Zarówno pompa ciepła, jak i klimatyzator działają na zasadzie obiegu chłodniczego — przenoszą ciepło z jednego miejsca w drugie za pomocą sprężarki i czynnika chłodniczego. Klimatyzator jest zaprojektowany przede wszystkim do chłodzenia (grzanie to funkcja dodatkowa), podczas gdy pompa ciepła jest zoptymalizowana do grzania (chłodzenie to bonus). Ta różnica w priorytetach przekłada się na konstrukcję, moc grzewczą, efektywność w mrozach i trwałość podzespołów.",
      },
      {
        heading: "Moc grzewcza i praca zimą",
        content:
          "Klimatyzator ścienny o mocy chłodniczej 3,5 kW ma moc grzewczą ok. 3,5-4 kW, ale przy -15°C jego moc grzewcza spada do 40-60% wartości nominalnej, a przy -20°C wiele modeli wyłącza się całkowicie. Pompa ciepła powietrze-woda o mocy 10 kW utrzymuje zbliżoną moc grzewczą przy -15°C (80-100% zależnie od modelu) i pracuje stabilnie nawet do -25°C. Różnica wynika z konstrukcji — pompy ciepła mają bardziej wydajne sprężarki, większe wymienniki ciepła i zaawansowane algorytmy odszraniania.",
      },
      {
        heading: "Sposób dystrybucji ciepła",
        content:
          "Klimatyzator grzeje powietrze bezpośrednio — strumień ciepłego powietrza wydmuchiwany jest z jednostki wewnętrznej. Tworzy to nierównomierny rozkład temperatury: ciepło pod sufitem, chłodno przy podłodze, wyczuwalny przeciąg. Pompa ciepła powietrze-woda grzeje wodę w instalacji — ogrzewanie podłogowe (najbardziej komfortowe, równomierne), grzejniki lub fancoile. Ciepło promieniuje z dużej powierzchni, bez ruchu powietrza i z idealnym rozkładem temperatury od podłogi do sufitu.",
      },
      {
        heading: "Ciepła woda użytkowa",
        content:
          "Pompa ciepła powietrze-woda przygotowuje również ciepłą wodę użytkową (CWU) — prysznic, kąpiel, zmywanie. Jeden system zastępuje i kocioł centralnego ogrzewania, i podgrzewacz wody. Klimatyzator grzeje wyłącznie powietrze — do CWU potrzebny jest osobny podgrzewacz (bojler elektryczny, gazowy lub pompa CWU). To dodatkowy koszt zakupu i eksploatacji.",
      },
      {
        heading: "Kiedy klimatyzacja wystarczy?",
        content:
          "Klimatyzacja jako jedyne źródło ogrzewania sprawdzi się w mieszkaniach z centralnym ogrzewaniem (jako uzupełnienie w okresach przejściowych), w domach letniskowych używanych okazjonalnie zimą, w bardzo dobrze ocieplonych domach pasywnych o minimalnym zapotrzebowaniu na ciepło, oraz w klimatach łagodniejszych niż polski. W typowym polskim domu jednorodzinnym klimatyzacja nie zastąpi pełnoprawnego systemu grzewczego — pompa ciepła powietrze-woda jest zdecydowanie lepszym wyborem.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-powietrze-woda-vs-powietrze-powietrze",
      "pompa-ciepla-co-to-jest-jak-dziala",
      "pompa-ciepla-zima-czy-grzeje-przy-minus-20",
    ],
    relatedProducts: ["mitsubishi-heavy-hydrolution"],
  },
  {
    slug: "montaz-pompy-ciepla-co-musisz-wiedziec",
    title: "Montaż pompy ciepła — co musisz wiedzieć przed instalacją",
    metaDescription:
      "Jak wygląda montaż pompy ciepła krok po kroku? Przygotowanie, wybór lokalizacji, instalacja, uruchomienie. Na co zwrócić uwagę przy wyborze instalatora?",
    summary:
      "Montaż pompy ciepła składa się z 5 etapów: audyt i dobór mocy, wybór lokalizacji jednostki zewnętrznej, instalacja hydrauliczna i elektryczna, podłączenie do istniejącej instalacji oraz uruchomienie z regulacją krzywej grzewczej. Trwa 1–3 dni. Kluczowy jest dobór doświadczonego instalatora z autoryzacją producenta.",
    date: "2026-01-22",
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=80",
    coverAlt: "Instalator przy pracy — montaż pompy ciepła krok po kroku",
    excerpt:
      "Prawidłowy montaż to podstawa efektywnej pracy pompy ciepła. Nawet najlepsze urządzenie zainstalowane nieprawidłowo będzie pracować głośno, nieefektywnie i awaryjnie. Oto co musisz wiedzieć.",
    readingTime: 8,
    category: "Montaż",
    sections: [
      {
        heading: "Etap 1 — audyt i dobór mocy",
        content:
          "Prawidłowa instalacja zaczyna się od określenia zapotrzebowania cieplnego budynku. Profesjonalny instalator wykonuje obliczenia na podstawie powierzchni domu, izolacji ścian i dachu, rodzaju okien, lokalizacji (strefa klimatyczna) i nawyków domowników. Wynik mówi, ile kilowatów ciepła potrzebuje dom w najzimniejszy dzień (tzw. temperatura obliczeniowa). Na tej podstawie dobierana jest pompa ciepła o odpowiedniej mocy — z zapasem na CWU, ale bez przesadnego przewymiarowania.",
      },
      {
        heading: "Etap 2 — wybór lokalizacji jednostki zewnętrznej",
        content:
          "Lokalizacja jednostki zewnętrznej wpływa na efektywność, poziom hałasu i estetykę. Jednostkę należy ustawić na stabilnym podłożu (fundament betonowy, konsola stalowa) z zachowaniem minimalnych odległości od ścian i ogrodzenia (zwykle 30-50 cm z boku i z tyłu, 150-200 cm z przodu). Ważne jest, aby strumień powietrza z wentylatora nie był kierowany na okna, tarasy czy chodniki. Lokalizacja powinna zapewniać swobodny przepływ powietrza i dostęp serwisowy. Unikamy miejsc narażonych na zsuwający się śnieg z dachu.",
      },
      {
        heading: "Etap 3 — instalacja hydrauliczna i elektryczna",
        content:
          "W przypadku pomp monoblokowych (Neoheat, Samsung EHS Mono R290) od jednostki zewnętrznej do domu prowadzone są rury wodne — zwykle miedź lub PEX izolowane termicznie. W systemach split (Mitsubishi Hydrolution, Fujitsu Waterstage) między jednostkami prowadzone są rury chłodnicze — wymaga to instalatora z certyfikatem F-gazowym. Instalacja elektryczna obejmuje zasilanie pompy (230V lub 400V zależnie od modelu), podłączenie grzałki zapasowej, czujników temperatury zewnętrznej i wewnętrznej, sterownika oraz modułu WiFi.",
      },
      {
        heading: "Etap 4 — podłączenie do istniejącej instalacji",
        content:
          "Pompa ciepła podłączana jest do istniejącej instalacji grzewczej — ogrzewania podłogowego, grzejników lub obu jednocześnie (dwa obiegi). W nowych domach instalacja jest zwykle przygotowana pod pompę ciepła. W starszych budynkach może być potrzebna adaptacja: wymiana zaworów termostatycznych, montaż bufora ciepła (zbiornik akumulacyjny), dodanie naczynia wzbiorczego, a w niektórych przypadkach wymiana grzejników na niskotemperaturowe. Bufor ciepła (50-100 L) jest zalecany dla większości instalacji — stabilizuje pracę pompy i wydłuża jej żywotność.",
      },
      {
        heading: "Etap 5 — uruchomienie i regulacja",
        content:
          "Po zakończeniu montażu mechanicznego instalator przeprowadza próby ciśnieniowe, odpowietrzanie instalacji, napełnianie i regulację przepływów. Następnie uruchamia pompę ciepła i ustawia parametry pracy: krzywą grzewczą (automatyczną regulację temperatury zasilania w zależności od temperatury zewnętrznej), temperatury CWU, harmonogramy pracy, tryb cichy (jeśli dostępny). Prawidłowa regulacja krzywej grzewczej jest kluczowa dla efektywności — zbyt wysoka temperatura zasilania oznacza niepotrzebne zużycie prądu, zbyt niska — dyskomfort termiczny.",
      },
      {
        heading: "Na co zwrócić uwagę przy wyborze instalatora?",
        content:
          "Wybór instalatora jest tak samo ważny jak wybór pompy ciepła. Instalator powinien posiadać doświadczenie w montażu konkretnej marki (autoryzacja producenta), uprawnienia F-gazowe (dla systemów split), referencje i portfolio zrealizowanych instalacji, a także ubezpieczenie OC. Profesjonalny instalator nie tylko zamontuje urządzenie, ale też pomoże dobrać moc pompy, przygotować dokumentację do dotacji, zapewni serwis gwarancyjny i posprzedażowy. W PBAC zapewniamy kompleksową obsługę — od audytu przez montaż po serwis.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-co-to-jest-jak-dziala",
      "ile-kosztuje-pompa-ciepla-2026",
      "pompa-ciepla-do-starego-domu",
    ],
    relatedProducts: ["neoheat-eko-mono-r290", "samsung-ehs-mono-r290", "fujitsu-waterstage"],
  },
  {
    slug: "pompa-ciepla-do-starego-domu",
    title:
      "Pompa ciepła do starego domu — czy to się opłaca bez termomodernizacji?",
    metaDescription:
      "Czy pompa ciepła sprawdzi się w starym, nieocieplonym domu? Kiedy konieczna jest termomodernizacja? Jaką pompę wybrać do domu z grzejnikami?",
    summary:
      "Pompa ciepła opłaca się w starym domu, szczególnie z dotacją z Czystego Powietrza (do 59 900 zł). Samsung EHS R290 produkuje wodę 75°C bez grzałki, współpracując z istniejącymi grzejnikami. Termomodernizacja nie jest konieczna, ale poprawia efektywność o 30–50%. Zwrot inwestycji z dotacją: 2–5 lat.",
    date: "2026-01-31",
    coverImage:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop&q=80",
    coverAlt: "Starszy dom jednorodzinny — pompa ciepła do starego budynku",
    excerpt:
      "Coraz więcej właścicieli starszych domów rozważa wymianę kotła na pompę ciepła. Czy to ma sens ekonomicznie? Czy konieczne jest wcześniejsze ocieplenie? Odpowiedzi nie są jednoznaczne — zależą od stanu budynku.",
    readingTime: 8,
    category: "Poradnik",
    sections: [
      {
        heading: "Wyzwania starszych budynków",
        content:
          "Starsze domy (sprzed 2000 roku) mają zwykle wyższe zapotrzebowanie na ciepło niż nowe budynki — gorsza izolacja ścian i dachu, nieszczelne okna, mosty termiczne. Zapotrzebowanie cieplne takiego domu może wynosić 100-150 kWh/m² rocznie, podczas gdy nowy dom spełniający normy WT2021 ma zaledwie 40-70 kWh/m². To oznacza, że stary dom potrzebuje pompy o większej mocy, co przekłada się na wyższy koszt urządzenia i większe zużycie prądu.",
      },
      {
        heading: "Grzejniki vs ogrzewanie podłogowe",
        content:
          "Większość starszych domów ma tradycyjne grzejniki zaprojektowane pod kocioł gazowy lub węglowy, pracujące z temperaturą zasilania 60-80°C. Pompy ciepła są najefektywniejsze przy niskich temperaturach zasilania (35-45°C). To kluczowy problem — ale nie nierozwiązywalny. Samsung EHS Mono R290 produkuje wodę o temperaturze do 75°C bez grzałki, co pozwala współpracować z istniejącymi grzejnikami bez ich wymiany. Fujitsu Super High Power dostarcza 60°C przy -20°C. Alternatywą jest wymiana grzejników na niskotemperaturowe (np. typu 22 o większej powierzchni) lub montaż fancoili — to tańsze niż układanie ogrzewania podłogowego.",
      },
      {
        heading: "Czy ocieplenie jest konieczne?",
        content:
          "Termomodernizacja nie jest warunkiem koniecznym do instalacji pompy ciepła, ale zdecydowanie poprawia opłacalność inwestycji. Ocieplenie ścian i dachu zmniejsza zapotrzebowanie na ciepło o 30-50%, co pozwala zainstalować mniejszą (tańszą) pompę, obniżyć rachunki za prąd i poprawić komfort termiczny. Jeśli budżet na to nie pozwala, sensowne jest podejście etapowe: najpierw pompa ciepła (z dotacją z Czystego Powietrza), a w kolejnych latach ocieplenie. Program Czyste Powietrze pozwala rozłożyć termomodernizację na etapy.",
      },
      {
        heading: "Dobór mocy — nie za mało, nie za dużo",
        content:
          "W starszym domu prawidłowy dobór mocy jest jeszcze ważniejszy niż w nowym. Zbyt mała pompa nie nagrzeje domu w mrozy i będzie nadmiernie korzystać z grzałki elektrycznej (kosztownej w eksploatacji). Zbyt duża pompa będzie taktować — włączać się i wyłączać co kilka minut, co skraca żywotność sprężarki i obniża efektywność. Audyt energetyczny wskaże dokładne zapotrzebowanie cieplne. Dla domu 150 m² sprzed 2000 roku, bez ocieplenia, typowe zapotrzebowanie to 12-18 kW — potrzebna jest pompa o mocy 12-16 kW.",
      },
      {
        heading: "Koszty i okres zwrotu",
        content:
          "Wymiana kotła węglowego na pompę ciepła w starym domu to inwestycja rzędu 40 000-60 000 zł (pompa 12-16 kW z montażem). Po odliczeniu dotacji z Czystego Powietrza (35 000-60 000 zł zależnie od poziomu) realny koszt może wynosić od 0 do 25 000 zł. Roczna oszczędność na ogrzewaniu wynosi 3 000-6 000 zł (w porównaniu z węglem) lub 4 000-7 000 zł (w porównaniu z gazem). Z dotacją zwrot następuje w ciągu 2-5 lat — bez dotacji 7-12 lat. Dochodzą korzyści niemierzalne: brak brudu z węgla, automatyka, brak konserwacji kotła, lepsza jakość powietrza.",
      },
      {
        heading: "Podsumowanie — kiedy warto?",
        content:
          "Pompa ciepła w starym domu opłaca się szczególnie gdy: dom ma zapotrzebowanie cieplne poniżej 150 kWh/m² rocznie (co obejmuje większość domów z lat 80-90 po częściowym ociepleniu), dostępna jest dotacja z Czystego Powietrza (kluczowy czynnik ekonomiczny), dom posiada grzejniki kompatybilne z niższą temperaturą zasilania lub wybrana pompa produkuje wodę 65-75°C, oraz właściciel planuje etapową termomodernizację. Jeśli dom jest w bardzo złym stanie (brak jakiejkolwiek izolacji, jednoszybowe okna), sensowniej jest zacząć od podstawowego ocieplenia, a dopiero potem instalować pompę ciepła.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-co-to-jest-jak-dziala",
      "dotacje-pompy-ciepla-2026-czyste-powietrze",
      "montaz-pompy-ciepla-co-musisz-wiedziec",
    ],
    relatedProducts: ["samsung-ehs-mono-r290", "fujitsu-waterstage"],
  },
  {
    slug: "cop-scop-pompy-ciepla-co-oznaczaja",
    title:
      "COP i SCOP pompy ciepła — co oznaczają i jak porównywać efektywność?",
    metaDescription:
      "Co to jest COP i SCOP pompy ciepła? Jak je interpretować i porównywać różne modele? Praktyczny poradnik z przykładami Samsung, Mitsubishi, Fujitsu, Neoheat.",
    summary:
      "COP to stosunek ciepła do zużytego prądu w danym momencie (np. COP 4,0 = 4 kW ciepła z 1 kW prądu). SCOP to średnia sezonowa, lepiej oddająca realne koszty. Klasa A+++ wymaga SCOP powyżej 5,10 przy 35°C. Różnica 0,5 punktu SCOP to ok. 450 zł oszczędności rocznie. Przy porównywaniu sprawdzaj identyczne warunki pomiarowe.",
    date: "2026-02-05",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    coverAlt: "Wykresy i dane energetyczne — COP i SCOP pompy ciepła",
    excerpt:
      "COP i SCOP to kluczowe wskaźniki efektywności pompy ciepła. COP mówi, ile ciepła pompa produkuje w danym momencie, SCOP — ile średnio przez cały sezon grzewczy. Oto jak je czytać i porównywać.",
    readingTime: 7,
    category: "Technologia",
    sections: [
      {
        heading: "COP — współczynnik efektywności punktowej",
        content:
          "COP (Coefficient of Performance) to stosunek dostarczonej energii cieplnej do zużytej energii elektrycznej w konkretnych warunkach. COP = 4,0 oznacza, że z 1 kW prądu pompa produkuje 4 kW ciepła — 3 kW pochodzi z darmowej energii powietrza. COP podawany jest zawsze w standardowych warunkach pomiarowych, np. A7/W35 — co oznacza temperaturę powietrza +7°C i temperaturę wody zasilającej 35°C. Ważne: COP zmienia się w zależności od warunków — przy niższej temperaturze powietrza lub wyższej temperaturze wody COP spada.",
      },
      {
        heading: "SCOP — sezonowy współczynnik efektywności",
        content:
          "SCOP (Seasonal Coefficient of Performance) to średnioważony współczynnik efektywności za cały sezon grzewczy, uwzględniający zmienność temperatur w ciągu roku. Jest obliczany według normy EN 14825 dla standardowego europejskiego klimatu (strefa umiarkowana — Strasburg). SCOP jest lepszym wskaźnikiem realnych kosztów eksploatacji niż COP, ponieważ uwzględnia fakt, że pompa pracuje w różnych temperaturach — od +15°C jesienią do -20°C zimą. Np. Samsung EHS Mono R290 5kW ma COP 5,10 (A7/W35), ale SCOP 4,84 — różnica wynika z uwzględnienia pracy w mrozach.",
      },
      {
        heading: "Klasa energetyczna a SCOP",
        content:
          "Klasa energetyczna pomp ciepła wynika bezpośrednio z wartości SCOP. Dla urządzeń grzewczych przy temperaturze zasilania 35°C: A+++ to SCOP powyżej 5,10 (sprawność ponad 175%), A++ to SCOP 4,30-5,10, A+ to SCOP 3,60-4,30, a klasa A to SCOP 3,00-3,60. Przy temperaturze zasilania 55°C progi są niższe, bo osiągnięcie wysokiego SCOP jest trudniejsze. Dlatego ta sama pompa może mieć A+++ przy 35°C i A++ przy 55°C — to normalne i nie oznacza gorszej jakości.",
      },
      {
        heading: "Jak porównywać pompy ciepła po COP/SCOP?",
        content:
          "Porównując pompy ciepła, zawsze sprawdzaj warunki pomiarowe — COP 5,0 przy A7/W35 to co innego niż COP 5,0 przy A10/W35. Porównuj SCOP przy tej samej temperaturze zasilania (35°C lub 55°C). Sprawdzaj COP przy niższych temperaturach (A2/W35, A-7/W35) — to pokazuje, jak pompa radzi sobie w mrozy. Oto porównanie pomp z oferty PBAC przy A7/W35: Samsung EHS Mono R290 5kW — COP 5,10, SCOP 4,84 (A+++). Neoheat Eko Mono R290 08 — COP 4,60, SCOP 199% (A+++). Mitsubishi Hydrolution 60 — COP 5,16, SCOP 190% (A+++). Fujitsu Comfort R32 10kW — COP 4,50, SCOP 178% (A+++).",
      },
      {
        heading: "EER i SEER — efektywność chłodzenia",
        content:
          "Jeśli planujesz korzystać z pompy ciepła również do chłodzenia latem, warto zwrócić uwagę na wskaźniki EER (Energy Efficiency Ratio) i SEER (Seasonal EER). Działają analogicznie do COP i SCOP, ale dotyczą trybu chłodzenia. Samsung EHS Mono R290 ma EER do 4,00, co oznacza bardzo efektywne chłodzenie. Wskaźniki te są mniej istotne niż COP/SCOP, ponieważ sezon chłodzenia w Polsce jest krótki, ale warto je sprawdzić — efektywne chłodzenie to przyjemny bonus.",
      },
      {
        heading: "COP w praktyce — ile zapłacisz za ogrzewanie?",
        content:
          "Przełożenie SCOP na realne koszty jest proste. Jeśli dom potrzebuje 10 000 kWh ciepła rocznie, a pompa ma SCOP 4,0, to zużyje 2 500 kWh prądu (10 000 / 4,0). Przy cenie prądu 0,65 zł/kWh roczny koszt ogrzewania wyniesie 1 625 zł. Porównanie: ta sama ilość ciepła z gazu (przy sprawności kotła 90% i cenie gazu 3,50 zł/m³) kosztuje ok. 3 900 zł. Z kotła węglowego (sprawność 60%, węgiel 1 200 zł/t) — ok. 3 000 zł. Różnica 0,5 punktu SCOP (np. 3,5 vs 4,0) to ok. 450 zł rocznie — na 15 lat użytkowania to 6 750 zł.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-co-to-jest-jak-dziala",
      "czynnik-r290-vs-r32-vs-r410a",
      "pompa-ciepla-zima-czy-grzeje-przy-minus-20",
    ],
    relatedProducts: ["samsung-ehs-mono-r290", "mitsubishi-heavy-hydrolution", "fujitsu-waterstage", "neoheat-eko-mono-r290"],
  },
  {
    slug: "czynnik-r290-vs-r32-vs-r410a",
    title:
      "Czynnik R290 vs R32 vs R410A — który najlepszy dla pompy ciepła?",
    metaDescription:
      "Porównanie czynników chłodniczych R290, R32 i R410A w pompach ciepła. Ekologia, efektywność, bezpieczeństwo, regulacje F-Gas. Który wybrać w 2026 roku?",
    summary:
      "R290 (propan, GWP = 3) jest rekomendowany w 2026 r. — najwyższa efektywność, zerowy wpływ na klimat, brak ryzyka regulacyjnego, prostszy montaż monoblokowy. R32 (GWP = 675) to dobra opcja dla systemów split. R410A (GWP = 2088) jest wycofywany. Samsung EHS i Neoheat używają R290, Mitsubishi i Fujitsu Comfort — R32.",
    date: "2026-02-10",
    coverImage:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=500&fit=crop&q=80",
    coverAlt: "Zielona technologia i ekologia — porównanie czynników chłodniczych",
    excerpt:
      "Wybór czynnika chłodniczego wpływa na ekologiczność, efektywność energetyczną i przyszłą zgodność pompy ciepła z regulacjami UE. R290, R32 i R410A to trzy najczęściej stosowane czynniki — każdy ma swoje zalety.",
    readingTime: 8,
    category: "Technologia",
    sections: [
      {
        heading: "Czym jest czynnik chłodniczy i dlaczego ma znaczenie?",
        content:
          "Czynnik chłodniczy to substancja krążąca w zamkniętym obiegu pompy ciepła, która umożliwia przenoszenie ciepła z otoczenia do instalacji grzewczej. Jego właściwości fizyczne i chemiczne wpływają na efektywność energetyczną pompy, zakres temperatur pracy, wpływ na środowisko (potencjał tworzenia efektu cieplarnianego — GWP) oraz bezpieczeństwo (palność, toksyczność). Unia Europejska wprowadza coraz ostrzejsze regulacje (rozporządzenie F-Gas) ograniczające stosowanie czynników o wysokim GWP, co w perspektywie 2027-2030 wyeliminuje wiele czynników syntetycznych.",
      },
      {
        heading: "R290 (propan) — naturalny i ekologiczny",
        content:
          "R290 to naturalny czynnik chłodniczy — propan — o GWP zaledwie 3 (praktycznie zerowy wpływ na efekt cieplarniany). Jest o ok. 20% wydajniejszy termodynamicznie niż R32 i R410A, co przekłada się na wyższy COP. R290 nie wymaga rejestracji w Centralnym Rejestrze Operatorów i z dużym zapasem spełnia restrykcje F-Gas 2025. Wadą jest łatwopalność — R290 klasyfikowany jest jako A3 (łatwopalny), dlatego pompy R290 mają hermetycznie zamknięty układ i nie wymagają serwisu F-gazowego. Napełnienie czynnikiem jest małe (0,6-1,5 kg). Pompy R290 w ofercie PBAC: Samsung EHS Mono R290 i Neoheat Eko Mono R290.",
      },
      {
        heading: "R32 — kompromis między ekologią a wydajnością",
        content:
          "R32 (difluorometan) to czynnik syntetyczny o GWP 675 — trzykrotnie niższym niż R410A, ale zdecydowanie wyższym niż R290. Oferuje dobrą efektywność energetyczną i jest szeroko stosowany w nowoczesnych klimatyzatorach i pompach ciepła. R32 jest klasyfikowany jako A2L (umiarkowanie łatwopalny), co wymaga zachowania procedur bezpieczeństwa przy instalacji i serwisie. Montaż systemu split z R32 wymaga certyfikatu F-gazowego. R32 nadal mieści się w regulacjach F-Gas 2025, ale jego przyszłość po 2027 roku jest niepewna z powodu malejących kwot HFC. Pompy R32 w ofercie PBAC: Mitsubishi Heavy Hydrolution (modele 6-8 kW) i Fujitsu Waterstage Comfort.",
      },
      {
        heading: "R410A — odchodzący standard",
        content:
          "R410A to mieszanina dwóch czynników HFC o GWP 2088 — najwyższym wśród porównywanych. Był dominującym czynnikiem w pompach ciepła przez ostatnią dekadę, ale regulacje F-Gas skutecznie wypierają go z rynku. R410A jest nadal stosowany w mocniejszych modelach (Mitsubishi Hydrolution Flexible 100/140, Fujitsu High Power i Super High Power) ze względu na sprawdzone właściwości termodynamiczne przy dużych mocach. Jednak nowe modele u wszystkich producentów przechodzą na R32 lub R290. Jeśli planujesz zakup na dłuższą perspektywę, R410A nie jest optymalnym wyborem — dostępność czynnika serwisowego może się zmniejszyć w kolejnych latach.",
      },
      {
        heading: "Porównanie parametrów",
        content:
          "Porównajmy kluczowe parametry. Pod kątem GWP (wpływu na klimat): R290 = 3, R32 = 675, R410A = 2088 — im niżej, tym lepiej. Efektywność energetyczna: R290 najwyższa (COP do 5,10), R32 bardzo dobra (COP do 5,16), R410A dobra (COP do 4,28). Bezpieczeństwo: R290 łatwopalny ale hermetyczny (bezpieczny w użytkowaniu), R32 umiarkowanie łatwopalny, R410A niepalny. Montaż: R290 monoblok (bez F-gazu), R32 split wymaga F-gazu, R410A split wymaga F-gazu. Przyszłość regulacyjna: R290 pewna (bez ograniczeń), R32 prawdopodobne ograniczenia po 2027, R410A stopniowe wycofywanie.",
      },
      {
        heading: "Który wybrać w 2026 roku?",
        content:
          "Dla nowych instalacji w 2026 roku R290 jest rekomendowanym wyborem — najwyższa efektywność, zerowy wpływ na klimat, brak ryzyka regulacyjnego, prostszy montaż (monoblok). Samsung EHS Mono R290 i Neoheat Eko Mono R290 to doskonałe opcje. R32 pozostaje dobrą opcją dla systemów split o mniejszych mocach — szczególnie Mitsubishi Hydrolution ALL-IN-ONE z jego wyjątkowym COP. R410A warto rozważyć jedynie jeśli potrzebujesz dużej mocy (14-17 kW) i nie ma jeszcze odpowiednika w R290/R32, np. Fujitsu Super High Power 16-17 kW. Niezależnie od wyboru, wszystkie pompy z oferty PBAC spełniają aktualne normy i kwalifikują się do dotacji.",
      },
    ],
    relatedSlugs: [
      "pompa-ciepla-co-to-jest-jak-dziala",
      "cop-scop-pompy-ciepla-co-oznaczaja",
      "pompa-ciepla-zima-czy-grzeje-przy-minus-20",
    ],
    relatedProducts: ["neoheat-eko-mono-r290", "samsung-ehs-mono-r290", "mitsubishi-heavy-hydrolution", "fujitsu-waterstage"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is Article => a !== undefined);
}
