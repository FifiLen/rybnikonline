"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { dmSans } from "@/app/fonts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import styles from "./Carousel.module.css";

export const services = [
  {
    title: "Poznaj naszą ofertę edukacyjną",
    items: [
      {
        id: "centrum-egzaminacyjne-telc",
        title: "Centrum Egzaminacyjne TELC",
        subtitle: "Certyfikaty językowe",
        description:
          "Międzynarodowe certyfikaty językowe TELC - egzaminy i kursy przygotowawcze.",
        image: "/assets/telc.png",
        date: "Międzynarodowe certyfikaty językowe TELC - egzaminy i kursy przygotowawcze.",
        gradientColors: "from-purple-600 via-purple-700 to-purple-500",
        link: "https://telc.rybnikonline.eu/",
      },
      {
        id: "studiuj-psychoterapie",
        title: "Studiuj Psychoterapię",
        subtitle: "Poznaj ofertę studiów psychologicznych",
        description:
          "Rozwijaj swoje kompetencje w obszarze psychoterapii dzięki specjalistycznym studiom podyplomowym, które spełniają wymogi NFZ.",
        image: "/assets/psychoterapia.png",
        date: "Rozwijaj swoje kompetencje w obszarze psychoterapii dzięki specjalistycznym studiom podyplomowym, które spełniają wymogi NFZ.",
        gradientColors: "from-green-400 via-teal-500 to-blue-500",
        link: "https://isp.rybnikonline.eu/",
      },
      {
        id: "studia-podyplomowe",
        title: "Studia Podyplomowe",
        subtitle: "Rozwój kariery",
        description:
          "Szeroki wybór kierunków studiów podyplomowych, dostosowanych do potrzeb rynku pracy.",
        image: "/assets/studia.png",
        date: "Szeroki wybór kierunków studiów podyplomowych, dostosowanych do potrzeb rynku pracy.",
        gradientColors: "from-yellow-400 via-orange-500 to-red-500",
        link: "https://isp.rybnikonline.eu/",
      },
      {
        id: "poradnia-psychologiczno-pedagogiczna-magnolia",
        title: "Poradnia Psychologiczno Pedagogiczna MAGNOLIA",
        subtitle: "Pomoc specjalistyczna",
        description:
          "Poradnia Psychologiczno-Pedagogiczna MAGNOLIA oferuje kompleksowe wsparcie dla dzieci, młodzieży oraz dorosłych.",
        image: "/assets/poradniam.png",
        date: "Poradnia Psychologiczno-Pedagogiczna MAGNOLIA oferuje kompleksowe wsparcie dla dzieci, młodzieży oraz dorosłych.",
        gradientColors: "from-purple-400 via-pink-500 to-red-500",
        link: "https://www.poradniamagnolia.pl/",
      },
    ],
  },
];

function Carousel({ items }: { items: (typeof services)[0]["items"] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {}, [currentIndex, items]);

  return (
    <div className="relative -mr-[25vw]" ref={carouselRef}>
      <div className="overflow-hidden mb-8">
        <div className="overflow-visible">
          <motion.div
            animate={{ x: `${-currentIndex * 33.333}%` }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            {items.map((item, index) => (
              <Card
                key={item.id}
                className={`w-[calc(40%)] flex-shrink-0 bg-slate-900 border-none relative ${styles.cardWithShadow}`}
              >
                <CardHeader className="relative p-0 aspect-[21/9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                    priority={index < 3}
                  />
                </CardHeader>
                <CardContent className="p-5">
                  <CardTitle className="text-base md:text-3xl font-semibold mb-3 text-white line-clamp-1">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-xs md:text-base tracking-tight font-medium leading-relaxed line-clamp-2 pb-4">
                    {item.description}
                  </CardDescription>

                  <Link href={item.link}>
                    <Button
                      className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm tracking-tighter px-4 py-2 rounded-2xl"
                      variant="secondary"
                    >
                      Dowiedz się więcej
                      <span className="" aria-hidden="true">
                        →
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex gap-6">
        <button
          onClick={handlePrev}
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
            currentIndex === 0
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : "border-white hover:border-purple-400 text-white hover:text-purple-400"
          }`}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
            currentIndex === items.length - 1
              ? "border-gray-600 text-gray-600 cursor-not-allowed"
              : "border-white hover:border-purple-400 text-white hover:text-purple-400"
          }`}
          disabled={currentIndex === items.length - 1}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default function Row() {
  return (
    <div
      className={`min-h-screen bg-slate-900 text-white flex items-center pt-16 ${dmSans.variable} font-sans relative overflow-hidden`}
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <div
          className={`w-full h-full bg-gradient-to-br opacity-80 transform rotate-[10deg] scale-150 translate-x-2/5 transition-all duration-1000 ${services[0].items[0].gradientColors}`}
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        {services.map((group, index) => (
          <section key={index} className="flex flex-col h-full justify-between">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 tracking-tight text-white">
              {group.title}
            </h2>
            <Carousel items={group.items} />
          </section>
        ))}
      </div>
    </div>
  );
}
