export interface Testimonial {
  name: string;
  location: string;
  body: string;
  img: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marek Kowalski",
    location: "Piaseczno",
    body: "Pompa ciepła Samsung od PBAC to najlepsza inwestycja, jaką zrobiłem w domu. Rachunki za ogrzewanie spadły o ponad 60%. Montaż w jeden dzień, wszystko czysto i profesjonalnie.",
    img: "https://avatar.vercel.sh/marek",
    rating: 5,
  },
  {
    name: "Anna Nowak",
    location: "Warszawa, Ursynów",
    body: "Bardzo profesjonalna firma. Doradztwo, dobór urządzenia i montaż — wszystko na najwyższym poziomie. Pompa Neoheat grzeje dom 140m² bez problemu nawet w -20°C.",
    img: "https://avatar.vercel.sh/anna",
    rating: 5,
  },
  {
    name: "Tomasz Wiśniewski",
    location: "Józefosław",
    body: "Fujitsu Waterstage działa u mnie od 2 lat bezawaryjnie. PBAC zaproponowali model idealnie dopasowany do mojej instalacji podłogowej. Polecam!",
    img: "https://avatar.vercel.sh/tomasz",
    rating: 5,
  },
  {
    name: "Katarzyna Lewandowska",
    location: "Pruszków",
    body: "Wymieniliśmy stary kocioł gazowy na pompę ciepła. Już po pierwszym sezonie widzimy realne oszczędności. Ekipa PBAC pomogła też z dofinansowaniem z Czystego Powietrza.",
    img: "https://avatar.vercel.sh/katarzyna",
    rating: 5,
  },
  {
    name: "Piotr Zieliński",
    location: "Konstancin-Jeziorna",
    body: "System Mitsubishi Heavy grzeje zimą i chłodzi latem — dokładnie tego szukaliśmy. Cicha praca, zero problemów. PBAC to solidna firma z dobrym podejściem do klienta.",
    img: "https://avatar.vercel.sh/piotr",
    rating: 5,
  },
  {
    name: "Ewa Kamińska",
    location: "Legionowo",
    body: "Od montażu pompy ciepła nasze rachunki za ogrzewanie spadły z 800 zł na około 250 zł miesięcznie. Nie wierzę, że tak długo ogrzewaliśmy węglem.",
    img: "https://avatar.vercel.sh/ewa",
    rating: 5,
  },
  {
    name: "Jakub Dąbrowski",
    location: "Wołomin",
    body: "Szybka wycena, uczciwa cena, terminowy montaż. Pompa Samsung R290 pracuje cicho i efektywnie. Polecam PBAC każdemu, kto myśli o zmianie ogrzewania.",
    img: "https://avatar.vercel.sh/jakub",
    rating: 5,
  },
  {
    name: "Magdalena Szymańska",
    location: "Warszawa, Białołęka",
    body: "Panowie z PBAC doradzili nam Neoheat Eko Mono i trafili w punkt. Dom 160m² ogrzewany podłogówką — rachunki za prąd to ułamek tego, co płaciliśmy za gaz.",
    img: "https://avatar.vercel.sh/magdalena",
    rating: 4,
  },
];
