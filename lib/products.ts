export interface ProductModel {
  name: string;
  power: string;
  cop?: string;
  scop?: string;
  energyClass?: string;
  dimensions?: string;
  weight?: string;
  noise?: string;
  phase?: string;
  refrigerantCharge?: string;
  maxWaterTemp?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  icon: string; // ezicon name
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  origin: string;
  description: string;
  descriptionLong?: string[]; // multi-paragraph extended description
  imageUrl: string;
  imageAlt: string;
  highlight: string;
  refrigerant: string;
  refrigerantNote: string;
  powerRange: string;
  warranty: string;
  specs: ProductSpec[];
  features: string[];
  models: ProductModel[];
  advantages: { title: string; desc: string; icon: string }[];
  gallery?: GalleryImage[];
  installationNotes?: string[];
  certifications?: string[];
  faq?: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    slug: "neoheat-eko-mono-r290",
    name: "Neoheat Eko Mono R290",
    tagline: "Polska jakość, naturalna wydajność",
    origin: "Polska marka (Iglotech, od 2017)",
    description:
      "Neoheat Eko Mono R290 to monoblokowa pompa ciepła powietrze-woda z ekologicznym czynnikiem R290 (propan) o GWP zaledwie 3. Zintegrowany hydrobox zawiera zawór trójdrogowy, grzałkę elektryczną, pompę obiegową i sterownik — wszystko w jednej kompaktowej jednostce zewnętrznej. Pompa pracuje efektywnie w temperaturach do -25°C, co czyni ją idealnym rozwiązaniem dla polskiego klimatu. System rewersyjny zapewnia zarówno ogrzewanie, jak i chłodzenie.",
    descriptionLong: [
      "Neoheat Eko Mono R290 to monoblokowa pompa ciepła powietrze-woda nowej generacji, produkowana pod marką Neoheat dystrybuowaną przez Iglotech — firmę z Kwidzyna z ponad 30-letnim doświadczeniem w branży HVAC. Cała linia składa się z trzech modeli o mocach 9,5 kW, 12 kW i 16,5 kW, zaprojektowanych z myślą o domach jednorodzinnych w polskim klimacie.",
      "Pompa wykorzystuje ekologiczny czynnik R290 (propan) o współczynniku GWP zaledwie 3, co stanowi ułamek wartości syntetycznych czynników R32 (GWP 675) czy R410A (GWP 2088). Dzięki temu urządzenie z dużym zapasem spełnia restrykcje unijnego rozporządzenia F-Gas 2025 i nie wymaga rejestracji w Centralnym Rejestrze Operatorów. Czynnik R290 zapewnia również o ok. 20% wyższą efektywność termodynamiczną w porównaniu z R32 i R410A.",
      "Konstrukcja monoblokowa oznacza, że cały obieg chłodniczy zamknięty jest w jednej jednostce zewnętrznej — do budynku prowadzą wyłącznie rury wodne. Eliminuje to potrzebę posiadania certyfikatu F-gazowego przez instalatora, co obniża koszty i przyspiesza montaż. W jednostce zintegrowany jest kompletny hydrobox zawierający: zawór trójdrogowy rozdzielający ciepło między ogrzewanie a CWU, pompę obiegową Wilo z falownikiem, grzałkę elektryczną 6 kW (3-stopniową, sekwencyjną), zawór bezpieczeństwa 2,5 bar, manometr, odpowietrzniki oraz sterownik z pełnym okablowaniem.",
      "System jest w pełni rewersyjny — zimą ogrzewa, latem chłodzi, a przez cały rok przygotowuje ciepłą wodę użytkową. Obsługuje dwa niezależne obiegi grzewcze z indywidualnymi temperaturami, co pozwala jednocześnie zasilać ogrzewanie podłogowe i grzejniki. Zakres pracy obejmuje temperatury zewnętrzne od -25°C do +45°C w trybie grzania oraz od 0°C do +55°C w trybie chłodzenia.",
      "Sterowanie odbywa się przez intuicyjny panel dotykowy z automatyczną regulacją pogodową (krzywa grzewcza). WiFi jest standardem — nie opcją — umożliwiając zdalne monitorowanie i sterowanie przez smartfon, tablet lub komputer. System wspiera tryb urlopowy oraz automatyczne przełączanie między ogrzewaniem a chłodzeniem.",
    ],
    imageUrl: "/images/neoheat-cutout.png",
    imageAlt: "Pompa ciepła Neoheat Eko Mono R290 — jednostka zewnętrzna",
    highlight: "Polska jakość",
    refrigerant: "R290 (propan)",
    refrigerantNote: "GWP = 3 · zerowy potencjał niszczenia warstwy ozonowej",
    powerRange: "9,5 – 16,5 kW",
    warranty: "5 lat gwarancji producenta",
    certifications: [
      "Keymark — europejski certyfikat jakości CEN/CENELEC",
      "BAFA — niemiecki rejestr dofinansowań (do 40% zwrotu)",
      "Lista ZUM — kwalifikacja do programu Czyste Powietrze",
      "PolREFF — certyfikat efektywności energetycznej",
      "Zgodność z EN 14511, EN 14825, EU 813/2013",
    ],
    installationNotes: [
      "Montaż monoblokowy — wyłącznie połączenia wodne, bez certyfikatu F-gazowego",
      "Przyłącze wodne G1 (modele 08 i 12) lub G1-1/4 (model 15)",
      "Grzałka elektryczna 6 kW wymaga zasilania 380V (niezależnie od modelu pompy)",
      "Hydrobox waży ok. 25 kg — dostarczany oddzielnie, montaż wewnątrz budynku",
      "Maksymalny podnos pompy obiegowej: 9–11 m (zależnie od modelu)",
      "Wymagana minimalna objętość wody w instalacji: 30–50 L",
      "Obudowa w kolorze antracytowym — estetyczna integracja z elewacją",
    ],
    gallery: [
      {
        src: "https://neoheat.pl/creato-core/media-library/2024/09/MONO-600x418-1.jpg",
        alt: "Neoheat Eko Mono R290 — widok frontalny jednostki zewnętrznej",
        caption: "Jednostka zewnętrzna Eko Mono R290 w obudowie antracytowej",
      },
      {
        src: "https://neoheat.pl/creato-core/media-library/2023/01/Projekt-bez-tytulu-4-600x503.jpg",
        alt: "Neoheat Eko Mono R290 — zbliżenie na jednostkę z czynnikiem R290",
        caption: "Kompaktowa konstrukcja monoblokowa z czynnikiem R290",
      },
      {
        src: "https://neoheat.pl/creato-core/media-library/2024/09/neoheat_pompa_ciepla_sterowanie_wi_fi-600x450.webp",
        alt: "Sterowanie WiFi pompy Neoheat przez smartfon",
        caption: "Zdalne sterowanie i monitoring przez WiFi — w standardzie",
      },
      {
        src: "https://neoheat.pl/creato-core/media-library/2024/07/2024_neoheat_pompy_BAFA_KEYMARK-600x456.jpg",
        alt: "Certyfikaty BAFA i Keymark dla pomp Neoheat",
        caption: "Certyfikaty BAFA i Keymark potwierdzające europejską jakość",
      },
      {
        src: "https://neoheat.pl/creato-core/media-library/2024/07/2024_neoheat_lista_zum_baner-600x315.jpg",
        alt: "Neoheat na liście ZUM — dofinansowanie Czyste Powietrze",
        caption: "Kwalifikacja do dofinansowania z programu Czyste Powietrze",
      },
      {
        src: "https://neoheat.pl/creato-core/media-library/2021/11/klasa_energetyczna-600x284.jpg",
        alt: "Klasa energetyczna A+++ pomp ciepła Neoheat",
        caption: "Klasa energetyczna A+++ przy LWT 35°C dla wszystkich modeli",
      },
    ],
    specs: [
      { label: "Czynnik chłodniczy", value: "R290 (GWP = 3)", icon: "leaf-02" },
      { label: "Zakres mocy", value: "9,5 – 16,5 kW", icon: "energy" },
      { label: "Klasa energetyczna", value: "A+++ (przy 35°C)", icon: "tick-02" },
      { label: "Temp. pracy", value: "do -25°C", icon: "thermometer-cold" },
      { label: "Poziom hałasu", value: "od 34 dB(A)", icon: "volume-low" },
      { label: "Sterowanie", value: "WiFi + aplikacja", icon: "wifi-full-signal" },
      { label: "Gwarancja", value: "5 lat", icon: "shield-02" },
      { label: "Typ", value: "Monoblok rewersyjny", icon: "ruler" },
    ],
    features: [
      "Praca w temperaturach do -25°C z pełną mocą grzewczą",
      "Ekologiczny czynnik R290 o najniższym GWP — zgodny z regulacjami UE 2025",
      "Klasa energetyczna A+++ przy LWT 35°C dla wszystkich modeli",
      "Zintegrowany hydrobox z zaworem trójdrogowym, grzałką 6 kW i pompą Wilo",
      "Rewersyjny — ogrzewanie zimą, chłodzenie latem, CWU cały rok",
      "Dwa niezależne obiegi grzewcze z osobnymi temperaturami",
      "Natywna integracja z instalacjami fotowoltaicznymi",
      "Współpraca z ogrzewaniem podłogowym, grzejnikami i fancoilami",
      "WiFi w standardzie — zdalne sterowanie przez smartfon i komputer",
      "Automatyczna regulacja pogodowa z krzywą grzewczą",
      "Sprężarki Highly, zawory Carel, wymienniki GEA/SWEP, pompy Wilo",
      "Kwalifikacja do dofinansowania: Czyste Powietrze (do 35 200 zł), Moje Ciepło, PolREFF",
    ],
    models: [
      {
        name: "Eko Mono R290 08",
        power: "9,5 kW",
        cop: "4,6 (A7/W35)",
        scop: "A+++ / 199%",
        energyClass: "A+++",
        dimensions: "1570 × 680 mm",
        weight: "123 kg (netto)",
        noise: "34 dB(A)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "0,7 kg R290",
        maxWaterTemp: "55°C",
      },
      {
        name: "Eko Mono R290 12",
        power: "12 kW",
        cop: "3,93 (A7/W35)",
        scop: "A+++ / 192%",
        energyClass: "A+++",
        dimensions: "1570 × 680 mm",
        weight: "110 kg (netto)",
        noise: "34 dB(A)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "0,9 kg R290",
        maxWaterTemp: "55°C",
      },
      {
        name: "Eko Mono R290 15",
        power: "16,5 kW",
        cop: "4,1 (A7/W35)",
        scop: "A+++ / 193%",
        energyClass: "A+++",
        dimensions: "1570 × 680 mm",
        weight: "~145 kg (brutto)",
        noise: "38 dB(A)",
        phase: "1-faz lub 3-faz",
        refrigerantCharge: "1,5 kg R290",
        maxWaterTemp: "55°C",
      },
    ],
    advantages: [
      {
        title: "Polska marka, polski serwis",
        desc: "Iglotech z Kwidzyna — ponad 30 lat doświadczenia w branży HVAC. Szybki dostęp do części i serwisu na terenie całej Polski.",
        icon: "shield-02",
      },
      {
        title: "R290 — przyszłość ekologii",
        desc: "Czynnik R290 ma GWP = 3 (vs R32 z GWP = 675). Spełnia restrykcje UE F-Gas 2025 z ogromnym zapasem. Ok. 20% wyższa efektywność niż R32.",
        icon: "leaf-02",
      },
      {
        title: "Monoblok = prosty montaż",
        desc: "Brak połączeń chłodniczych między jednostkami. Montaż nie wymaga certyfikatu F-gazowego, co obniża koszty instalacji.",
        icon: "energy",
      },
      {
        title: "A+++ we wszystkich modelach",
        desc: "Klasa energetyczna A+++ przy LWT 35°C — najwyższa dostępna. Sprawność sezonowa do 199%.",
        icon: "tick-02",
      },
    ],
    faq: [
      {
        question: "Czy do montażu Neoheat Eko Mono R290 potrzebny jest certyfikat F-gazowy?",
        answer: "Nie. Neoheat Eko Mono R290 to pompa monoblokowa — cały układ chłodniczy z R290 jest hermetycznie zamknięty w jednostce zewnętrznej. Do domu prowadzą wyłącznie rury wodne. Montaż nie wymaga certyfikatu F-gazowego, co upraszcza instalację i obniża koszty.",
      },
      {
        question: "Jaki jest poziom hałasu Neoheat Eko Mono R290?",
        answer: "Neoheat Eko Mono R290 generuje od 34 dB(A) dla modelu 08 (9,5 kW) do 38 dB(A) dla modelu 15 (16,5 kW). To bardzo ciche urządzenie — 34 dB(A) odpowiada szeptowi w cichej bibliotece.",
      },
      {
        question: "Czy Neoheat kwalifikuje się do programu Czyste Powietrze?",
        answer: "Tak. Wszystkie modele Neoheat Eko Mono R290 znajdują się na liście ZUM (Zielone Urządzenia i Materiały), posiadają certyfikaty Keymark i BAFA oraz spełniają wymagania programu Czyste Powietrze. Dofinansowanie sięga do 35 200 zł (poziom podstawowy) lub nawet 59 900 zł (poziom najwyższy).",
      },
      {
        question: "Jaki COP ma Neoheat przy -15°C?",
        answer: "Dokładne wartości COP przy -15°C zależą od modelu i temperatury wody zasilającej. Przy A7/W35 model 08 osiąga COP 4,6. W niższych temperaturach COP naturalnie spada, ale dzięki czynnikowi R290 i sprawności sezonowej do 199% pompa utrzymuje wysoką efektywność przez cały sezon grzewczy w polskim klimacie.",
      },
    ],
  },
  {
    slug: "samsung-ehs-mono-r290",
    name: "Samsung EHS Mono R290",
    tagline: "Najcichsza w klasie, najnowsza technologia",
    origin: "Samsung Climate Solutions",
    description:
      "Samsung EHS Mono R290 to najnowsza generacja monoblokowych pomp ciepła Samsung z ekologicznym czynnikiem R290 (GWP = 3). Hermetycznie zamknięty układ chłodniczy eliminuje ryzyko wycieku i nie wymaga certyfikatu F-gazowego przy montażu. Pompa dostarcza wodę grzewczą o temperaturze do 75°C bez wspomagania grzałką — współpracuje z tradycyjnymi grzejnikami bez wymiany instalacji. Czteropoziomowy tryb cichy redukuje hałas do 35 dB(A), a AI SmartThings inteligentnie zarządza energią.",
    descriptionLong: [
      "Samsung EHS Mono R290 to siódma generacja monoblokowych pomp ciepła Samsung, zaprezentowana na targach IFA 2023 w Berlinie i dostępna na rynku europejskim od końca 2023 roku. Jest to pierwszy produkt Samsung EHS wykorzystujący naturalny czynnik chłodniczy R290 (propan) o współczynniku GWP zaledwie 3, zastępując wcześniej stosowany R32.",
      "Kluczową innowacją jest powiększony wymiennik płytowy o 39% większej powierzchni wymiany ciepła niż w konwencjonalnych jednostkach zewnętrznych. Dzięki temu pompa utrzymuje 100% mocy grzewczej przy temperaturze zewnętrznej -10°C i produkuje wodę grzewczą o temperaturze do 75°C bez wspomagania grzałką elektryczną. To sprawia, że Samsung EHS Mono R290 nadaje się do modernizacji starszych domów z grzejnikami wymagającymi wysokich temperatur zasilania — bez konieczności wymiany instalacji.",
      "Hermetycznie zamknięty układ chłodniczy R290 eliminuje ryzyko wycieku czynnika i nie wymaga certyfikatu F-gazowego od instalatora. Serwis i konserwacja są uproszczone dzięki zdejmowanemu panelowi bocznemu mocowanemu na trzech śrubach, zapewniającemu łatwy dostęp do wszystkich komponentów wewnętrznych.",
      "Opatentowana technologia tłumienia hałasu Groove Grid Felt z podwójną warstwą izolacji akustycznej redukuje poziom hałasu do zaledwie 35 dB(A) (ciśnienie akustyczne mierzone 3 m od frontu). Czteropoziomowy tryb cichy pozwala użytkownikowi wybrać optymalny balans między wydajnością a ciszą pracy.",
      "System można skonfigurować na dwa sposoby: jako standardową jednostkę zewnętrzną z modułem wewnętrznym ClimateHub (zasobnik 200 lub 260 L z pompą obiegową i naczyniem wzbiorczym), lub jako jednostkę Pump-Integrated z hydrauliką, sterownikiem i modułem WiFi zintegrowanymi w obudowie zewnętrznej — oszczędzając miejsce w domu. Moduł WiFi z AI SmartThings uczy się nawyków domowników i optymalizuje zużycie energii, a sterowanie głosowe przez Bixby, Google Home i Amazon Alexa dodaje wygody.",
    ],
    imageUrl: "/images/samsung-cutout.png",
    imageAlt: "Pompa ciepła Samsung EHS Mono R290 — monoblock",
    highlight: "Najcichsza w klasie",
    refrigerant: "R290 (propan)",
    refrigerantNote: "GWP = 3 · hermetyczny układ · bez certyfikatu F-gazowego",
    powerRange: "5 – 16 kW",
    warranty: "5 lat gwarancji producenta",
    certifications: [
      "MCS Certified — brytyjski program certyfikacji mikrogeneracji",
      "Klasa A+++ przy 35°C / A++ przy 55°C — wszystkie modele",
      "Zgodność z ErP i regulacjami UE F-Gas 2025",
      "Patent P2022-0012826 — technologia Groove Grid Felt",
      "Design Plus Award ISH 2025 — kategoria Water & Efficiency+",
    ],
    installationNotes: [
      "Montaż monoblokowy — wyłącznie przyłącza wodne BSPP 1\" (złącze męskie)",
      "Nie wymaga certyfikatu F-gazowego — hermetyczny układ R290",
      "Minimalna objętość wody: 30 L (5–8 kW) lub 50 L (12–16 kW)",
      "Wersja Pump-Integrated integruje hydraulikę w obudowie zewnętrznej — brak modułu wewnętrznego",
      "ClimateHub: zasobnik 200 L lub 260 L, grzałka zapasowa 2 lub 6 kW",
      "Wymagany sterownik MWR-WW10N (dotykowy LCD) — sprzedawany oddzielnie z ClimateHub",
      "Moduł WiFi MIM-H04N: osobno dla wersji standardowej, wbudowany w Pump-Integrated",
      "Kolor obudowy: ciemnoszary (dark grey), estetyczny design",
    ],
    gallery: [
      {
        src: "https://samsung-climatesolutions.com/content/dam/dtnl-aem-samsung-seace/gb/en-gb/lifestyle/products/ehs/r290/Samsung_EU_SEACE_R290_11681.jpg",
        alt: "Samsung EHS Mono R290 — jednostka zewnętrzna w ogrodzie",
        caption: "Kompaktowa jednostka zewnętrzna Samsung EHS Mono R290",
      },
      {
        src: "https://samsung-climatesolutions.com/content/dam/dtnl-aem-samsung-seace/gb/en-gb/lifestyle/products/ehs/r290/Samsung_EU_SEACE_R290_11624.jpg",
        alt: "Samsung EHS Mono R290 — widok z boku",
        caption: "Ciemnoszara obudowa zaprojektowana z myślą o nowoczesnych elewacjach",
      },
      {
        src: "https://samsung-climatesolutions.com/content/dam/dtnl-aem-samsung-seace/gb/en-gb/lifestyle/products/ehs/r290/Samsung_EU_SEACE_R290_12032.jpg",
        alt: "Samsung EHS Mono R290 — zbliżenie na panel serwisowy",
        caption: "Łatwy dostęp serwisowy — zdejmowany panel na 3 śrubach",
      },
      {
        src: "https://samsung-climatesolutions.com/content/dam/dtnl-aem-samsung-seace/gb/en-gb/lifestyle/products/ehs/r290/EHS_R290_Mono_Lifestyle_Image_01.jpg",
        alt: "Samsung EHS Mono R290 zainstalowana przy domu jednorodzinnym",
        caption: "Estetyczna instalacja przy nowoczesnym domu jednorodzinnym",
      },
      {
        src: "https://samsung-climatesolutions.com/content/dam/dtnl-aem-samsung-seace/gb/en-gb/lifestyle/products/ehs/r290/SAC_EHS_R290_F002_Hot-Water-Temperature-of-up-to-75C_A(1).jpg",
        alt: "Schemat temperatury wody do 75°C bez grzałki",
        caption: "Woda grzewcza do 75°C bez wspomagania — kompatybilność z grzejnikami",
      },
      {
        src: "https://samsung-climatesolutions.com/content/dam/dtnl-aem-samsung-seace/gb/en-gb/lifestyle/products/ehs/r290/SAC_EHS_R290_Pump-Integrated_S_F009_Convenience_in_Installation_01_2100x2100.jpg",
        alt: "Wersja Pump-Integrated — schemat instalacji",
        caption: "Wersja Pump-Integrated: hydraulika zintegrowana w jednostce zewnętrznej",
      },
    ],
    specs: [
      { label: "Czynnik chłodniczy", value: "R290 (GWP = 3)", icon: "leaf-02" },
      { label: "Zakres mocy", value: "5 – 16 kW", icon: "energy" },
      { label: "COP", value: "do 5,10", icon: "tick-02" },
      { label: "Temp. wody", value: "do 75°C", icon: "thermometer-warm" },
      { label: "Poziom hałasu", value: "od 35 dB(A)", icon: "volume-low" },
      { label: "Sterowanie", value: "WiFi + AI SmartThings", icon: "wifi-full-signal" },
      { label: "Gwarancja", value: "5 lat", icon: "shield-02" },
      { label: "Klasa energetyczna", value: "A+++ (przy 35°C)", icon: "ruler" },
    ],
    features: [
      "Czynnik R290 — GWP = 3, zgodny z regulacjami UE F-Gas 2025",
      "Temperatura wody grzewczej do 75°C bez grzałki wspomagającej",
      "100% mocy grzewczej przy temperaturze zewnętrznej -10°C",
      "COP do 5,10 — wyjątkowa efektywność energetyczna (SCOP do 4,84)",
      "Czteropoziomowy tryb cichy — od 35 dB(A), patent Groove Grid Felt",
      "WiFi + AI SmartThings — inteligentne uczenie się nawyków i optymalizacja",
      "Sterowanie głosowe: Bixby, Google Home, Amazon Alexa",
      "Hermetyczny układ R290 — montaż bez certyfikatu F-gazowego",
      "Powiększony wymiennik płytowy (+39% powierzchni wymiany ciepła)",
      "ClimateHub: moduł wewnętrzny z zasobnikiem 200 lub 260 L",
      "Wersja Pump-Integrated: hydraulika w obudowie zewnętrznej — oszczędność miejsca",
      "EHS Cloud Service: zdalny monitoring i prediagnostyka dla instalatorów",
      "EER do 4,00 — efektywne chłodzenie latem",
      "5 lat gwarancji producenta w standardzie",
    ],
    models: [
      {
        name: "EHS Mono R290 5kW",
        power: "5 kW",
        cop: "5,10 (A7/W35)",
        scop: "4,84 (A+++)",
        dimensions: "998 × 850 × 500 mm",
        weight: "86 kg",
        noise: "41 dB(A) / 35 dB(A) cichy",
        phase: "1-fazowy 230V",
        refrigerantCharge: "0,63 kg R290",
        maxWaterTemp: "75°C",
      },
      {
        name: "EHS Mono R290 8kW",
        power: "8 kW",
        cop: "4,91 (A7/W35)",
        scop: "4,66 (A+++)",
        dimensions: "998 × 850 × 500 mm",
        weight: "98 kg",
        noise: "45 dB(A) / 35 dB(A) cichy",
        phase: "1-faz lub 3-faz",
        refrigerantCharge: "0,87 kg R290",
        maxWaterTemp: "75°C",
      },
      {
        name: "EHS Mono R290 12kW",
        power: "12 kW",
        cop: "4,80 (A7/W35)",
        scop: "4,73 (A+++)",
        dimensions: "1270 × 1018 × 530 mm",
        weight: "140 kg",
        noise: "47 dB(A) / 35 dB(A) cichy",
        phase: "1-faz lub 3-faz",
        refrigerantCharge: "1,25 kg R290",
        maxWaterTemp: "75°C",
      },
      {
        name: "EHS Mono R290 16kW",
        power: "16 kW",
        cop: "4,51 (A7/W35)",
        scop: "4,57 (A+++)",
        dimensions: "1270 × 1018 × 530 mm",
        weight: "140 kg (154 kg Pump-Int.)",
        noise: "51 dB(A) / 35 dB(A) cichy",
        phase: "1-faz lub 3-faz",
        refrigerantCharge: "1,25 kg R290",
        maxWaterTemp: "75°C",
      },
    ],
    advantages: [
      {
        title: "75°C bez grzałki",
        desc: "Jedyna w klasie pompa R290 dostarczająca wodę 75°C bez wspomagania. Współpracuje z istniejącymi grzejnikami — idealna do modernizacji.",
        icon: "thermometer-warm",
      },
      {
        title: "AI SmartThings",
        desc: "Sztuczna inteligencja uczy się Twoich nawyków i optymalizuje zużycie energii. Sterowanie głosowe przez Bixby, Google Home i Alexa.",
        icon: "wifi-full-signal",
      },
      {
        title: "Najcichsza w klasie",
        desc: "35 dB(A) z patentowaną technologią Groove Grid Felt — podwójna izolacja akustyczna z 4-stopniową regulacją hałasu.",
        icon: "volume-low",
      },
      {
        title: "SCOP do 4,84",
        desc: "Do 15% powyżej progu A+++. Klasa A+++ przy 35°C i A++ przy 55°C we wszystkich modelach — najwyższa sezonowa efektywność.",
        icon: "energy",
      },
    ],
    faq: [
      {
        question: "Jaką maksymalną temperaturę wody grzewczej produkuje Samsung EHS R290?",
        answer: "Samsung EHS Mono R290 produkuje wodę grzewczą o temperaturze do 75°C bez wspomagania grzałką elektryczną. To najwyższa temperatura wśród pomp R290 na rynku, dzięki powiększonemu o 39% wymiennikowi płytowemu. Umożliwia to współpracę z istniejącymi grzejnikami w starszych domach bez ich wymiany.",
      },
      {
        question: "Jak działa sterowanie SmartThings w Samsung EHS R290?",
        answer: "AI SmartThings to inteligentny system Samsung, który uczy się nawyków domowników i automatycznie optymalizuje zużycie energii. Sterowanie odbywa się przez aplikację na smartfonie, tablet lub głosowo (Bixby, Google Home, Alexa). Instalator ma dostęp do EHS Cloud Service z prediagnostyką i zdalnym monitoringiem.",
      },
      {
        question: "Jaka jest gwarancja na Samsung EHS Mono R290?",
        answer: "Samsung oferuje 5 lat gwarancji producenta w standardzie na wszystkie modele EHS Mono R290. Gwarancja obejmuje sprężarkę, wymiennik ciepła, elektronikę sterującą i wszystkie podzespoły. PBAC zapewnia również serwis pogwarancyjny.",
      },
      {
        question: "Czym różni się wersja standard od Pump-Integrated?",
        answer: "W wersji standardowej jednostka zewnętrzna współpracuje z modułem ClimateHub (zasobnik 200 lub 260 L montowany wewnątrz budynku). Wersja Pump-Integrated ma pompę obiegową, sterownik i moduł WiFi zintegrowane w obudowie zewnętrznej — nie wymaga modułu wewnętrznego, oszczędzając miejsce w domu.",
      },
    ],
  },
  {
    slug: "mitsubishi-heavy-hydrolution",
    name: "Mitsubishi Heavy Hydrolution",
    tagline: "3 w 1 — grzeje, chłodzi, podgrzewa wodę",
    origin: "Mitsubishi Heavy Industries",
    description:
      "Mitsubishi Heavy Hydrolution to rewersyjny system split typu powietrze-woda, który łączy trzy funkcje w jednym urządzeniu: ogrzewanie, chłodzenie i przygotowanie ciepłej wody użytkowej. System ALL-IN-ONE zawiera moduł wewnętrzny z zasobnikiem CWU 180L, a wersja Flexible oferuje zasobniki 300–500L. Pompa osiąga COP do 5,32 i klasę energetyczną A+++. Technologia twin-rotary inverter i niebieskie lamele (blue fins) zapewniają niezawodność w ekstremalnych warunkach.",
    descriptionLong: [
      "Mitsubishi Heavy Hydrolution to rewersyjna pompa ciepła powietrze-woda typu split, produkowana przez Mitsubishi Heavy Industries Thermal Systems (MHI-TS) i dystrybuowana w Europie przez MHIAE. System zapewnia trzy funkcje w jednym rozwiązaniu: ogrzewanie pomieszczeń, aktywne chłodzenie przez instalację wodną oraz przygotowanie ciepłej wody użytkowej.",
      "W odróżnieniu od pomp monoblokowych, Hydrolution to system splitowy — jednostka zewnętrzna z kompresorem połączona jest rurami chłodniczymi z modułem wewnętrznym zawierającym wymiennik płytowy (kondensator), pompę obiegową, naczynie wzbiorcze, zawory rozdzielające i sterownik. Wymiennik płytowy jest produkcji ALFA LAVAL (stal AISI 316), a pompa obiegowa to WILO Yonos PARA — komponenty najwyższej klasy.",
      "System oferowany jest w trzech konfiguracjach modułu wewnętrznego. ALL-IN-ONE (seria HMA) to w pełni zintegrowany moduł podłogowy z zasobnikiem CWU 180 L, grzałką 9 kW (3-stopniową: 2-6-9 kW), naczyniem wzbiorczym 10 L i kompletnym sterownikiem — idealne dla typowego domu jednorodzinnego. HYDROBOX (seria HMS) to kompaktowy moduł ścienny o wymiarach zaledwie 850 × 515 × 350 mm — bez zasobnika CWU, ale z możliwością podłączenia zewnętrznych zbiorników PT300 (300 L) lub PT500 (500 L). FLEXIBLE (seria HSB) zawiera jedynie wymiennik płytowy, oferując maksymalną elastyczność konfiguracji z osobno dobieranymi akcesoriami.",
      "Jednostki zewnętrzne dostępne są z czynnikami R410A (modele 6–16 kW) i R32 (modele 6–8 kW, z GWP o 70% niższym niż R410A). Flagowy model FDCW60VNX osiąga COP do 5,32 przy A7/W35, a klasa energetyczna sięga A+++. Zakres pracy obejmuje temperatury od -20°C do +43°C, z produkcją CWU do 60°C bez grzałki elektrycznej (65°C z grzałką).",
      "Sercem systemu jest sprężarka DC Inverter twin-rotary — dwutłokowa, z płynną regulacją obrotów eliminującą energochłonne cykle włącz/wyłącz. Lamele wymiennika zewnętrznego pokryte są specjalną powłoką antykorozyjną Blue Fins, przeniesioną z systemów komercyjnych VRF, chroniącą przed solą, kwasami i zanieczyszczeniami. Grzałka w tacy ociekowej zapobiega zamarzaniu w czasie odszraniania.",
      "Zaawansowany sterownik RC-HY40 obsługuje kaskadowe połączenie do 8 pomp ciepła (łączna moc do ~128 kW) z jednego panelu, co czyni Hydrolution rozwiązaniem nie tylko dla domów jednorodzinnych, ale także dla większych obiektów. Sterownik podstawowy RC-HY20 zapewnia intuicyjne sterowanie z kolorowym wyświetlaczem LCD. Opcjonalna aplikacja myUpway umożliwia zdalny monitoring i sterowanie przez Internet.",
    ],
    imageUrl: "/images/mitsubishi-cutout.png",
    imageAlt: "Mitsubishi Heavy Hydrolution — jednostka zewnętrzna split",
    highlight: "Grzeje i chłodzi",
    refrigerant: "R32 / R410A",
    refrigerantNote: "R32: GWP = 675 · R410A: GWP = 2088 · wysoka efektywność termodynamiczna",
    powerRange: "5 – 16 kW",
    warranty: "5 lat gwarancji producenta",
    certifications: [
      "HP Keymark — europejski certyfikat jakości pomp ciepła",
      "Klasa energetyczna do A+++ (W35) / A++ (W55)",
      "Klasa energetyczna A dla CWU (ErP Lot 2)",
      "Zgodność z EN 14511, EN 14825, EN 16147",
      "Testy przez akredytowane laboratoria niezależne",
    ],
    installationNotes: [
      "System splitowy — wymaga instalatora z certyfikatem F-gazowym",
      "Połączenia chłodnicze: rury miedziane 1/4\" + 1/2\" (6 kW) lub 3/8\" + 5/8\" (8+ kW)",
      "Maksymalna długość instalacji chłodniczej: 30 m, różnica wysokości do 20 m (R32)",
      "ALL-IN-ONE: footprint 600 × 610 mm — kompaktowy moduł podłogowy",
      "HYDROBOX: montaż ścienny 850 × 515 × 350 mm — minimalny footprint",
      "Przyłącza wodne: 22 mm DN20 (6–8 kW) lub 28 mm DN25 (16 kW)",
      "Ciśnienie wody w instalacji: do 10 bar",
      "Dostępne zestawy do podłączenia kotła, kolektorów słonecznych, basenu",
    ],
    gallery: [
      {
        src: "https://www.elektronika-sa.com.pl/assets/images/n/60AHMA60W-cn9f329tza1n25m.jpg",
        alt: "Hydrolution ALL-IN-ONE — moduł wewnętrzny z zasobnikiem 180L",
        caption: "ALL-IN-ONE: kompletny moduł z zasobnikiem CWU 180 L",
      },
      {
        src: "https://www.archiproducts.com/images/lowres/B_HYDROLUTION-ALL-IN-ONE-MITSUBISHI-HEAVY-INDUSTRIES-612341-relbff58779.jpg",
        alt: "Hydrolution ALL-IN-ONE — zestaw z jednostką zewnętrzną",
        caption: "Zestaw ALL-IN-ONE: moduł wewnętrzny + jednostka zewnętrzna",
      },
      {
        src: "https://www.archiproducts.com/images/lowres/B_HYDROLUTION-HYDROBOX-MITSUBISHI-HEAVY-INDUSTRIES-612342-rel2553c1a6.jpg",
        alt: "Hydrolution HYDROBOX — kompaktowy moduł ścienny",
        caption: "HYDROBOX: ultrakompaktowy moduł ścienny 850 × 515 × 350 mm",
      },
    ],
    specs: [
      { label: "Czynnik chłodniczy", value: "R32 / R410A", icon: "leaf-02" },
      { label: "Zakres mocy", value: "5 – 16 kW", icon: "energy" },
      { label: "COP", value: "do 5,32", icon: "tick-02" },
      { label: "Klasa energetyczna", value: "do A+++", icon: "tick-02" },
      { label: "Temp. pracy", value: "-20°C do 43°C", icon: "thermometer-cold" },
      { label: "Temp. CWU", value: "do 60°C (65°C z grzałką)", icon: "thermometer-warm" },
      { label: "Gwarancja", value: "5 lat", icon: "shield-02" },
      { label: "Zasobnik CWU", value: "180L / 300L / 500L", icon: "water-pump" },
    ],
    features: [
      "3-w-1: ogrzewanie + aktywne chłodzenie wodne + ciepła woda użytkowa",
      "COP do 5,32 — najwyższy współczynnik w klasie pomp split",
      "Klasa energetyczna do A+++ (W35) we wszystkich modelach R32",
      "ALL-IN-ONE: zintegrowany moduł z zasobnikiem CWU 180L i grzałką 9 kW",
      "HYDROBOX: ultrakompaktowy moduł ścienny (850 × 515 × 350 mm)",
      "FLEXIBLE: maksymalna elastyczność z zasobnikami 300L lub 500L",
      "Sprężarka DC Inverter twin-rotary — cicha i płynna regulacja mocy",
      "Blue Fins — antykorozyjna powłoka lamel z technologii VRF",
      "Grzałka w tacy ociekowej — niezawodna praca w mrozach",
      "Sterownik RC-HY40: kaskada do 8 pomp (~128 kW), pogodówka, myUpway",
      "Integracja z kolektorami słonecznymi, kotłami i basenami",
      "Temperatura CWU do 60°C bez wspomagania elektrycznego",
    ],
    models: [
      {
        name: "ALL-IN-ONE 60 (R32)",
        power: "5 kW",
        cop: "5,16 (A7/W35)",
        scop: "A+++ / 190%",
        energyClass: "A+++",
        dimensions: "640 × 800 × 290 mm (zew.)",
        weight: "46 kg (zew.) + ~85 kg (wew.)",
        noise: "44 dB(A) (zew.) / 35 dB(A) (wew.)",
        phase: "1-fazowy 230V",
        maxWaterTemp: "58°C",
      },
      {
        name: "ALL-IN-ONE 71 (R32)",
        power: "8,3 kW",
        cop: "4,30 (A7/W35)",
        scop: "A+++ / 180%",
        energyClass: "A+++",
        dimensions: "750 × 880 × 340 mm (zew.)",
        weight: "60 kg (zew.) + ~90 kg (wew.)",
        noise: "49 dB(A) (zew.) / 35 dB(A) (wew.)",
        phase: "1-fazowy 230V",
        maxWaterTemp: "60°C",
      },
      {
        name: "Flexible 100 (R410A)",
        power: "9,2 kW",
        cop: "4,28 (A7/W35)",
        scop: "A++ / 165%",
        energyClass: "A++",
        dimensions: "845 × 970 × 370 mm (zew.)",
        weight: "81 kg (zew.)",
        noise: "50–54 dB(A) (zew.)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "2,9 kg R410A",
        maxWaterTemp: "58°C",
      },
      {
        name: "Flexible 140 (R410A)",
        power: "16 kW",
        cop: "4,20 (A7/W35)",
        scop: "A++ / 166%",
        energyClass: "A++",
        dimensions: "1300 × 970 × 370 mm (zew.)",
        weight: "105 kg (zew.)",
        noise: "54 dB(A) (zew.)",
        phase: "1-faz lub 3-faz",
        refrigerantCharge: "4,0 kg R410A",
        maxWaterTemp: "58°C",
      },
    ],
    advantages: [
      {
        title: "Prawdziwe 3-w-1",
        desc: "Jedyny system split z aktywnym chłodzeniem przez instalację wodną + ogrzewanie + CWU. Klimatyzacja w każdym pomieszczeniu bez osobnych klimatyzatorów.",
        icon: "thermometer-warm",
      },
      {
        title: "COP 5,32",
        desc: "Najwyższy współczynnik COP w klasie pomp split. Z 1 kW prądu pozyskujesz ponad 5 kW ciepła. Klasa A+++ przy W35.",
        icon: "energy",
      },
      {
        title: "Blue Fins z VRF",
        desc: "Antykorozyjna powłoka lamel przeniesiona z systemów komercyjnych VRF — gwarancja trwałości wymiennika w trudnych warunkach atmosferycznych.",
        icon: "shield-02",
      },
      {
        title: "Kaskada do 8 pomp",
        desc: "Sterownik RC-HY40 obsługuje kaskadowe połączenie do 8 urządzeń (~128 kW) — idealne dla większych domów i obiektów komercyjnych.",
        icon: "ruler",
      },
    ],
    faq: [
      {
        question: "Czym różni się R32 od R410A w Mitsubishi Hydrolution?",
        answer: "Modele R32 (6–8 kW) mają GWP o 70% niższy niż R410A, osiągają wyższy COP (do 5,32 vs 4,28) i klasę A+++ przy 35°C. Modele R410A (9–16 kW) oferują wyższe moce grzewcze. Dla domów do 150 m² modele R32 są optymalnym wyborem ze względu na efektywność i ekologię.",
      },
      {
        question: "Czy Mitsubishi Hydrolution może aktywnie chłodzić dom latem?",
        answer: "Tak. Mitsubishi Hydrolution to jedyny system split w ofercie PBAC z prawdziwym aktywnym chłodzeniem przez instalację wodną (podłogówkę lub fancoile). Nie wymaga osobnych klimatyzatorów — chłodzi każde pomieszczenie przez istniejącą instalację grzewczą.",
      },
      {
        question: "Ile pomp Hydrolution można połączyć w kaskadę?",
        answer: "Sterownik RC-HY40 obsługuje kaskadowe połączenie do 8 pomp ciepła Hydrolution z jednego panelu. Łączna moc kaskady sięga ~128 kW. Kaskada automatycznie rozdziela obciążenie i sekwencyjnie włącza kolejne jednostki, co czyni system idealnym dla dużych domów i obiektów komercyjnych.",
      },
      {
        question: "Jaką pojemność ma zasobnik CWU w Hydrolution ALL-IN-ONE?",
        answer: "Model ALL-IN-ONE (seria HMA) zawiera zintegrowany zasobnik CWU o pojemności 180 litrów — wystarczający dla 4-osobowej rodziny. Dla większych gospodarstw dostępne są zewnętrzne zasobniki PT300 (300 L) i PT500 (500 L) w konfiguracji HYDROBOX lub FLEXIBLE.",
      },
    ],
  },
  {
    slug: "fujitsu-waterstage",
    name: "Fujitsu Waterstage",
    tagline: "Szeroka gama mocy, sprawdzona technologia",
    origin: "Fujitsu General",
    description:
      "Fujitsu Waterstage to kompleksowa linia pomp ciepła powietrze-woda obejmująca cztery serie: kompaktową Comfort R32 (A+++), wydajne High Power i Super High Power oraz wygodny Monobloc bez połączeń chłodniczych. Waterstage uzyskuje od 3 do 5 kW ciepła z każdego 1 kW prądu. System obsługuje dwa niezależne obiegi grzewcze — jednoczesne zasilanie ogrzewania podłogowego i grzejników. Pompy współpracują z kolektorami słonecznymi.",
    descriptionLong: [
      "Fujitsu Waterstage to kompleksowa linia pomp ciepła powietrze-woda produkowana przez Fujitsu General, jednego z wiodących światowych producentów klimatyzacji i pomp ciepła. W Polsce dystrybucją zajmuje się Klima-Therm. Seria Waterstage obejmuje cztery odrębne linie produktowe, dostosowane do różnych wymagań: od kompaktowych rozwiązań dla domów jednorodzinnych po systemy o wysokiej mocy dla większych obiektów.",
      "Seria Comfort R32 to najnowsza i najbardziej efektywna linia, wykorzystująca czynnik R32 o GWP 675 — trzykrotnie niższym niż R410A. Dostępna w mocach 5–10 kW, osiąga klasę energetyczną A+++ przy 35°C z COP do 4,74 i sprawnością sezonową do 178%. Dostępna zarówno w wersji split (kompaktowy hydrobox 847 × 450 × 493 mm z buforem 16 L) jak i z zintegrowanym zasobnikiem CWU 190 L ze stali nierdzewnej.",
      "Seria High Power przeznaczona jest dla domów o większym zapotrzebowaniu — moce 11–14 kW, z czynnikiem R410A. Kluczową cechą jest zdolność produkcji wody o temperaturze do 60°C przy temperaturze zewnętrznej do -25°C. Sprężarka twin-rotary z wtryskiem międzystopniowym pary utrzymuje wysoką temperaturę skraplania bez przegrzewania sprężarki. Grzałka zapasowa 6 kW (2 × 3 kW) zapewnia dodatkową rezerwę mocy.",
      "Seria Super High Power to flagowe rozwiązanie — moce 15–17 kW, zdolność utrzymania 60°C przy -20°C i 55°C przy -22°C bez wspomagania grzałką elektryczną. Wymiennik wodny ze stali nierdzewnej jest o 25% bardziej wydajny niż poprzednia generacja. Bufor 25 L i naczynie wzbiorcze 10 L zapewniają stabilną pracę w szerokim zakresie obciążeń. Grzałka zapasowa 6–9 kW (zależnie od wersji 1-faz/3-faz) stanowi rezerwę na ekstremalnie mroźne dni.",
      "Seria Monobloc to kompaktowa alternatywa bez połączeń chłodniczych — moce 5–10 kW z czynnikiem R410A, klasa do A+++ przy 35°C, z obsługą zarówno ogrzewania jak i chłodzenia. Idealna tam, gdzie prostota montażu jest priorytetem.",
      "Wszystkie serie Waterstage obsługują dwa niezależne obiegi grzewcze z indywidualnymi temperaturami (np. podłogówka 35°C + grzejniki 55°C), współpracują z kolektorami słonecznymi i kotłami (zestawy przyłączeniowe), a system kaskadowy z magistralą LPB umożliwia łączenie wielu jednostek. Sterownik z dużym wyświetlaczem LCD oferuje 4 tryby pracy, programator tygodniowy, automatyczną krzywą grzewczą i wbudowany licznik energii. Certyfikat SG-Ready zapewnia kompatybilność z inteligentnymi sieciami energetycznymi i dynamicznymi taryfami.",
    ],
    imageUrl: "/images/fujitsu-cutout.png",
    imageAlt: "Pompa ciepła Fujitsu Waterstage Comfort R32 — split z zasobnikiem",
    highlight: "Szeroka gama mocy",
    refrigerant: "R32 / R410A",
    refrigerantNote: "R32: GWP = 675 (Comfort) · R410A: GWP = 2088 (High Power, Super High Power, Monobloc)",
    powerRange: "4,5 – 17 kW",
    warranty: "5 lat gwarancji producenta",
    certifications: [
      "EUROVENT Certified — certyfikat wydajności europejskiej",
      "PZH — Państwowy Zakład Higieny (certyfikat polski)",
      "EHPA Quality Label — europejski znak jakości pomp ciepła",
      "HP Keymark — niezależne testy wg EN 14511 i EN 16147",
      "SG-Ready — certyfikat smart grid (inteligentna sieć energetyczna)",
      "Zgodność z ErP, dyrektywy EU o efektywności energetycznej",
    ],
    installationNotes: [
      "Serie split (Comfort, High Power, Super High Power) wymagają certyfikatu F-gazowego",
      "Seria Monobloc: wyłącznie przyłącza wodne, bez certyfikatu F-gazowego",
      "Maksymalna długość instalacji: 30 m (Comfort, Super High Power) / 20 m (High Power)",
      "Zasobnik CWU 190 L w wersjach DHW Integrated — ze stali nierdzewnej",
      "Opcjonalne zasobniki zewnętrzne: 200, 300 lub 400 L",
      "Dwa niezależne obiegi grzewcze wymagają zestawu drugiego obiegu (UTW-KZSXE)",
      "Podłączenie kotła zapasowego: zestaw UTW-KBSXD / UTW-KBDXD",
      "Kaskada: zestaw UTW-KCMXE (primary) + UTW-KCSXE (secondary) z magistralą LPB",
      "Interfejs MODBUS (UTW-KMBXE) do integracji z systemami BMS",
    ],
    gallery: [
      {
        src: "https://www.generalww.com/shared/img-f000-atw-split-comfort-wsya050-080ml3-01.png",
        alt: "Fujitsu Waterstage Comfort R32 — split z hydroboxem i jednostką zewnętrzną",
        caption: "Comfort R32: kompaktowy hydrobox + jednostka zewnętrzna",
      },
      {
        src: "https://www.generalww.com/shared/img-f000-atw-split-dhw-wgya050-80ml3-01.png",
        alt: "Fujitsu Waterstage Comfort R32 z zasobnikiem CWU 190L",
        caption: "Comfort R32 z zintegrowanym zasobnikiem CWU 190 L ze stali nierdzewnej",
      },
      {
        src: "https://www.generalww.com/shared/img-f000-atw-split-super-highpower-01.png",
        alt: "Fujitsu Waterstage Super High Power — split z hydroboxem",
        caption: "Super High Power: 15–17 kW, 60°C przy -20°C bez grzałki",
      },
      {
        src: "https://www.general-hvac.com/shared/eu/img-g000-atw-monobloc-type-01.png",
        alt: "Fujitsu Waterstage Monobloc — jednostka zewnętrzna all-in-one",
        caption: "Monobloc: kompaktowa jednostka zewnętrzna bez instalacji chłodniczej",
      },
      {
        src: "https://www.klima-therm.com/pl/images/glowne/1800-4145.png",
        alt: "Fujitsu Waterstage Super High Power — widok od dystrybutora Klima-Therm",
        caption: "Super High Power — dystrybutor Klima-Therm Polska",
      },
    ],
    specs: [
      { label: "Czynnik chłodniczy", value: "R32 / R410A", icon: "leaf-02" },
      { label: "Zakres mocy", value: "4,5 – 17 kW", icon: "energy" },
      { label: "COP", value: "do 4,74", icon: "tick-02" },
      { label: "Klasa energetyczna", value: "A++ do A+++", icon: "tick-02" },
      { label: "Temp. pracy", value: "-25°C do 35°C", icon: "thermometer-cold" },
      { label: "Temp. wody", value: "do 60°C", icon: "thermometer-warm" },
      { label: "Gwarancja", value: "5 lat", icon: "shield-02" },
      { label: "Obiegi grzewcze", value: "2 niezależne", icon: "ruler" },
    ],
    features: [
      "4 serie do wyboru: Comfort R32, High Power, Super High Power, Monobloc",
      "COP do 4,74 — do 5 kW ciepła z każdego 1 kW prądu",
      "Klasa energetyczna do A+++ (seria Comfort R32, sprawność sezonowa do 178%)",
      "Dwa niezależne obiegi grzewcze (podłogówka 35°C + grzejniki 55°C jednocześnie)",
      "Super High Power: 60°C przy -20°C i 55°C przy -22°C bez grzałki",
      "Sprężarka twin-rotary z wtryskiem międzystopniowym pary (High Power / SHP)",
      "Zasobnik CWU 190 L ze stali nierdzewnej (wersje DHW Integrated)",
      "Certyfikat SG-Ready — kompatybilność z inteligentnymi sieciami i dynamicznymi taryfami",
      "Kaskada wielu jednostek przez magistralę LPB — dla większych obiektów",
      "Współpraca z kolektorami słonecznymi, kotłami, basenami (dedykowane zestawy)",
      "Wbudowany licznik energii i automatyczna krzywa grzewcza",
      "Sterowanie zdalne przez moduły web server i MODBUS do integracji z BMS",
      "Zakres pracy od -25°C do 35°C (High Power / Super High Power)",
      "5 lat gwarancji, certyfikaty EUROVENT, PZH, EHPA, Keymark",
    ],
    models: [
      {
        name: "Comfort R32 5 kW (split)",
        power: "4,5 kW",
        cop: "4,74 (A7/W35)",
        scop: "A+++ / 175%",
        energyClass: "A+++",
        dimensions: "632 × 799 × 290 mm (zew.)",
        weight: "39 kg (zew.) + 41 kg (wew.)",
        noise: "57 dB(A) (zew.) / 37 dB(A) (wew.)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "0,97 kg R32",
        maxWaterTemp: "55°C",
      },
      {
        name: "Comfort R32 8 kW (split)",
        power: "7,5 kW",
        cop: "4,43 (A7/W35)",
        scop: "A+++ / 177%",
        energyClass: "A+++",
        dimensions: "716 × 820 × 315 mm (zew.)",
        weight: "42 kg (zew.) + 42 kg (wew.)",
        noise: "60 dB(A) (zew.) / 38 dB(A) (wew.)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "1,02 kg R32",
        maxWaterTemp: "55°C",
      },
      {
        name: "Comfort R32 10 kW (split)",
        power: "9,5 kW",
        cop: "4,50 (A7/W35)",
        scop: "A+++ / 178%",
        energyClass: "A+++",
        dimensions: "998 × 940 × 320 mm (zew.)",
        weight: "62 kg (zew.) + 47 kg (wew.)",
        noise: "62 dB(A) (zew.) / 40 dB(A) (wew.)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "1,63 kg R32",
        maxWaterTemp: "55°C",
      },
      {
        name: "High Power 14 kW (split)",
        power: "13,5 kW",
        cop: "4,18 (A7/W35)",
        scop: "A+ / 148%",
        energyClass: "A+",
        dimensions: "1290 × 900 × 330 mm (zew.)",
        weight: "92 kg (zew.) + 42 kg (wew.)",
        noise: "69 dB(A) (zew.) / 46 dB(A) (wew.)",
        phase: "1-faz lub 3-faz",
        refrigerantCharge: "2,50 kg R410A",
        maxWaterTemp: "60°C",
      },
      {
        name: "Super High Power 16 kW",
        power: "16 kW",
        cop: "4,15 (A7/W35)",
        scop: "A++ / 163%",
        energyClass: "A++",
        dimensions: "1428 × 1080 × 480 mm (zew.)",
        weight: "137 kg (zew.) + 52,5 kg (wew.)",
        noise: "67 dB(A) (zew.) / 45 dB(A) (wew.)",
        phase: "1-fazowy 230V",
        refrigerantCharge: "3,80 kg R410A",
        maxWaterTemp: "60°C",
      },
      {
        name: "Super High Power 17 kW (3-faz)",
        power: "17 kW",
        cop: "4,15 (A7/W35)",
        scop: "A++ / 161%",
        energyClass: "A++",
        dimensions: "1428 × 1080 × 480 mm (zew.)",
        weight: "138 kg (zew.) + 52,5 kg (wew.)",
        noise: "67 dB(A) (zew.) / 45 dB(A) (wew.)",
        phase: "3-fazowy 400V",
        refrigerantCharge: "3,80 kg R410A",
        maxWaterTemp: "60°C",
      },
    ],
    advantages: [
      {
        title: "4 serie do wyboru",
        desc: "Comfort R32 (A+++), High Power, Super High Power, Monobloc — rozwiązanie idealnie dopasowane do wielkości i potrzeb każdego domu.",
        icon: "ruler",
      },
      {
        title: "60°C przy -20°C bez grzałki",
        desc: "Super High Power utrzymuje 60°C wody grzewczej przy -20°C na zewnątrz bez wspomagania elektrycznego — komfort nawet w najsilniejsze mrozy.",
        icon: "thermometer-warm",
      },
      {
        title: "SG-Ready",
        desc: "Certyfikat smart grid pozwala pompie reagować na sygnały z sieci energetycznej — optymalizacja kosztów z dynamicznymi taryfami i fotowoltaiką.",
        icon: "energy",
      },
      {
        title: "Kaskada i BMS",
        desc: "Łączenie wielu jednostek przez magistralę LPB i integracja z systemami BMS przez MODBUS — dla większych domów i obiektów komercyjnych.",
        icon: "ruler",
      },
    ],
    faq: [
      {
        question: "Czym różni się seria Comfort od High Power i Super High Power?",
        answer: "Comfort R32 (5–10 kW) to najefektywniejsza seria z klasą A+++ i COP do 4,74 — idealna dla dobrze ocieplonych domów do 150 m². High Power (11–14 kW) i Super High Power (15–17 kW) to modele na R410A o większych mocach, zdolne do produkcji wody 60°C przy -20°C — przeznaczone dla starszych, większych domów z grzejnikami.",
      },
      {
        question: "Co oznacza certyfikat SG-Ready w Fujitsu Waterstage?",
        answer: "SG-Ready (Smart Grid Ready) to certyfikat potwierdzający kompatybilność z inteligentnymi sieciami energetycznymi. Pompa reaguje na sygnały z sieci — np. zwiększa moc grzania gdy prąd jest tani (dynamiczne taryfy, nadprodukcja z fotowoltaiki) i ogranicza ją przy szczycie cenowym. Optymalizuje koszty ogrzewania automatycznie.",
      },
      {
        question: "Czy Fujitsu Waterstage ma grzałkę zapasową?",
        answer: "Tak. Seria High Power ma grzałkę 6 kW (2 × 3 kW), a Super High Power — 6 lub 9 kW zależnie od wersji (1-faz/3-faz). Seria Comfort ma grzałkę 2 kW. Grzałka włącza się automatycznie tylko w ekstremalnych mrozach lub jako wsparcie przy szybkim nagrzewaniu CWU — typowo przez kilkanaście godzin w sezonie.",
      },
      {
        question: "Jak często trzeba serwisować Fujitsu Waterstage?",
        answer: "Producent zaleca przegląd serwisowy raz w roku — najlepiej przed sezonem grzewczym. Przegląd obejmuje kontrolę ciśnienia, czyszczenie filtrów, sprawdzenie szczelności, weryfikację parametrów pracy i aktualizację oprogramowania sterownika. PBAC oferuje kontrakty serwisowe z gwarancją terminów.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
