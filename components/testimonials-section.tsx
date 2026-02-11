"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/aurora-text";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Marek Kowalski",
    location: "Piaseczno",
    body: "Pompa ciepła Samsung od PBAC to najlepsza inwestycja, jaką zrobiłem w domu. Rachunki za ogrzewanie spadły o ponad 60%. Montaż w jeden dzień, wszystko czysto i profesjonalnie.",
    img: "https://avatar.vercel.sh/marek",
  },
  {
    name: "Anna Nowak",
    location: "Warszawa, Ursynów",
    body: "Bardzo profesjonalna firma. Doradztwo, dobór urządzenia i montaż — wszystko na najwyższym poziomie. Pompa Neoheat grzeje dom 140m² bez problemu nawet w -20°C.",
    img: "https://avatar.vercel.sh/anna",
  },
  {
    name: "Tomasz Wiśniewski",
    location: "Józefosław",
    body: "Fujitsu Waterstage działa u mnie od 2 lat bezawaryjnie. PBAC zaproponowali model idealnie dopasowany do mojej instalacji podłogowej. Polecam!",
    img: "https://avatar.vercel.sh/tomasz",
  },
  {
    name: "Katarzyna Lewandowska",
    location: "Pruszków",
    body: "Wymieniliśmy stary kocioł gazowy na pompę ciepła. Już po pierwszym sezonie widzimy realne oszczędności. Ekipa PBAC pomogła też z dofinansowaniem z Czystego Powietrza.",
    img: "https://avatar.vercel.sh/katarzyna",
  },
  {
    name: "Piotr Zieliński",
    location: "Konstancin-Jeziorna",
    body: "System Mitsubishi Heavy grzeje zimą i chłodzi latem — dokładnie tego szukaliśmy. Cicha praca, zero problemów. PBAC to solidna firma z dobrym podejściem do klienta.",
    img: "https://avatar.vercel.sh/piotr",
  },
  {
    name: "Ewa Kamińska",
    location: "Legionowo",
    body: "Od montażu pompy ciepła nasze rachunki za ogrzewanie spadły z 800 zł na około 250 zł miesięcznie. Nie wierzę, że tak długo ogrzewaliśmy węglem.",
    img: "https://avatar.vercel.sh/ewa",
  },
  {
    name: "Jakub Dąbrowski",
    location: "Wołomin",
    body: "Szybka wycena, uczciwa cena, terminowy montaż. Pompa Samsung R290 pracuje cicho i efektywnie. Polecam PBAC każdemu, kto myśli o zmianie ogrzewania.",
    img: "https://avatar.vercel.sh/jakub",
  },
  {
    name: "Magdalena Szymańska",
    location: "Warszawa, Białołęka",
    body: "Panowie z PBAC doradzili nam Neoheat Eko Mono i trafili w punkt. Dom 160m² ogrzewany podłogówką — rachunki za prąd to ułamek tego, co płaciliśmy za gaz.",
    img: "https://avatar.vercel.sh/magdalena",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

function ReviewCard({
  img,
  name,
  location,
  body,
}: {
  img: string;
  name: string;
  location: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.08]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{location}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/70">{body}</blockquote>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            Co mówią <AuroraText>nasi klienci</AuroraText>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Zaufały nam dziesiątki rodzin z Warszawy i okolic. Sprawdź, jak
            oceniają nasze montaże i dobór pomp ciepła.
          </p>
        </motion.div>

        <div className="relative flex h-[550px] w-screen left-1/2 -translate-x-1/2 flex-row items-center justify-center gap-5 overflow-hidden [perspective:500px]">
          <div
            className="flex flex-row items-center gap-5"
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-30px) rotateX(12deg) rotateY(-6deg) rotateZ(12deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:60s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:60s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:60s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.name + "-2"} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:60s]" vertical>
              {firstRow.map((review) => (
                <ReviewCard key={review.name + "-3"} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:60s]" vertical>
              {firstRow.map((review) => (
                <ReviewCard key={review.name + "-4"} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:60s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.name + "-4"} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:60s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.name + "-5"} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:60s]" vertical>
              {firstRow.map((review) => (
                <ReviewCard key={review.name + "-6"} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:60s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.name + "-7"} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:60s]" vertical>
              {firstRow.map((review) => (
                <ReviewCard key={review.name + "-8"} {...review} />
              ))}
            </Marquee>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
        </div>
      </div>
    </section>
  );
}
