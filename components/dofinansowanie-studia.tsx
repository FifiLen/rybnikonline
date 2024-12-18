"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import parse from "html-react-parser";

const carouselItems = [
  {
    label: "Dofinansowanie",
    title: "Dofinansowanie <br /> do studiów podyplomowych",
    description:
      "Dofinansowanie nawet do <span class='font-semibold'>95%</span> na studia podyplomowe <br/>z Bazy Usług Rozwojowych",
    buttonText: "Dowiedz się więcej",
    buttonLink:
      "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144",
    gradientColors: "from-yellow-300 via-yellow-300 to-orange-500",
  },
  {
    label: "Dofinansowanie",
    title: "Dofinansowanie <br />do szkoleń i kursów",
    description:
      "Uzyskaj nawet do <span class='font-semibold'>95%</span> dofinansowania <br/>z Bazy Usług Rozwojowych",
    buttonText: "Zobacz ofertę",
    buttonLink:
      "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144",
    gradientColors: "from-green-400 via-teal-500 to-blue-500",
  },
];

export default function GuideSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentGradient, setCurrentGradient] = useState(
    carouselItems[0].gradientColors
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % carouselItems.length;
        setCurrentIndex(nextIndex);
        setCurrentGradient(carouselItems[nextIndex].gradientColors);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="w-full py-16 sm:py-24 md:py-32 bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl bg-slate-900 grid md:grid-cols-2 overflow-hidden border-none shadow-xl">
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <div className="space-y-4 sm:space-y-5">
            <p
              className={`text-sm font-semibold text-blue-300 tracking-wide uppercase transition-opacity duration-1000 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {currentItem.label}
            </p>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white transition-opacity duration-1000 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {currentItem.title.split("<br />").map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== currentItem.title.split("<br />").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </h2>
            <p
              className={`text-base sm:text-lg md:text-xl font-medium tracking-tight pb-4 text-gray-200 transition-opacity duration-1000 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {parse(currentItem.description)}
            </p>
            <Link href={currentItem.buttonLink} passHref>
              <Button
                size="lg"
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-tight transition-opacity rounded-3xl duration-1000 text-base sm:text-lg ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {currentItem.buttonText}
                <span aria-hidden="true">→</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block overflow-hidden">
          <div className="absolute inset-y-0 right-[-60px] w-full">
            <div
              className={`w-full h-full bg-gradient-to-br opacity-80 transform rotate-[10deg] scale-150 translate-x-1/4 transition-all duration-1000 ${currentGradient}`}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
