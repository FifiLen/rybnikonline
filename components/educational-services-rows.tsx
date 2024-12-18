"use client";

import { useState, useRef } from "react";
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

const services = [
  {
    title: "Postaw na rozwój",
    items: [
      {
        id: "niepubliczny-osrodek-doskonalenia-nauczycieli",
        title: "Niepubliczny Ośrodek Doskonalenia Nauczycieli",
        subtitle: "Rozwój nauczycieli",
        description:
          "Kompleksowe szkolenia i warsztaty dla nauczycieli, podnoszące kwalifikacje zawodowe.",
        image: "/assets/nauczyciele.png",
        date: "Kompleksowe szkolenia i warsztaty dla nauczycieli, podnoszące kwalifikacje zawodowe.",
        link: "http://www.odnrybnik.edu.pl/",
      },
      {
        id: "platforma-elearning",
        title: "Platforma eLearning",
        subtitle: "Nauka online",
        description:
          "Nowoczesna platforma do nauki online, oferująca szeroki zakres kursów i materiałów edukacyjnych.",
        image: "/assets/elearning.png",
        date: "Nowoczesna platforma do nauki online, oferująca szeroki zakres kursów i materiałów edukacyjnych.",
        link: "https://elearning.rybnikonline.eu/",
      },
      {
        id: "kursy-i-materialy-edukacyjne",
        title: "Kursy i Materiały Edukacyjne",
        subtitle: "Odwiedź nasz sklep i zapoznaj się z ofertą",
        description:
          "Kompleksowe szkolenia i warsztaty dla nauczycieli, podnoszące kwalifikacje zawodowe.",
        image: "/assets/sklep.png",
        date: "Kompleksowe szkolenia i warsztaty dla nauczycieli, podnoszące kwalifikacje zawodowe.",
        link: "https://sklep.rybnikonline.eu/",
      },
      {
        id: "edukacja-wlaczajaca",
        title: "Edukacja Włączająca",
        subtitle: "Równe szanse",
        description:
          "Programy i metody nauczania wspierające integrację uczniów o różnych potrzebach edukacyjnych.",
        image: "/assets/edukacja.png",
        date: "Programy i metody nauczania wspierające integrację uczniów o różnych potrzebach edukacyjnych.",
        link: "https://edukacjawlaczajaca.rybnikonline.eu/",
      },
      {
        id: "lekcja-enter",
        title: "Lekcja Enter",
        subtitle: "Innowacyjne nauczanie",
        description:
          "Program rozwijający kompetencje cyfrowe nauczycieli i uczniów, wprowadzający nowoczesne technologie do edukacji.",
        image: "/assets/enter.png",
        date: "Programy i metody nauczania wspierające integrację uczniów o różnych potrzebach edukacyjnych.",
        link: "https://lekcjaenter.rybnikonline.eu/",
      },
    ],
  },
];

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

function Carousel({ items }: { items: CarouselItem[] }) {
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
                className={`w-[calc(40%)] flex-shrink-0 bg-white border-none relative ${styles.cardWithShadow}`}
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
                  <CardTitle className="text-base md:text-3xl font-semibold mb-3 text-slate-900 line-clamp-1">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-slate-700 text-xs md:text-base tracking-tight font-medium leading-relaxed line-clamp-2 pb-4">
                    {item.description}
                  </CardDescription>
                  <Link href={item.link} passHref>
                    <Button
                      className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm tracking-tighter px-4 py-2 rounded-2xl"
                      variant="secondary"
                    >
                      Dowiedz się więcej
                      <span className="ml-2" aria-hidden="true">
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
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-purple-600 text-purple-600 hover:bg-purple-100"
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
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-purple-600 text-purple-600 hover:bg-purple-100"
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
      className={`min-h-screen bg-slate-900 flex items-center pt-16 ${dmSans.variable} font-sans relative overflow-hidden`}
    >
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
