"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import Footer from "./footer";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

const services = [
  [
    {
      id: "dofinansowanie-do-studiow-podyplomowych",
      title: "Dofinansowanie do studiów podyplomowych",
      subtitle:
        "Dofinansowanie nawet do 95% na studia podyplomowe z Bazy Usług Rozwojowych",
      description:
        "Innowacyjne metody nauczania z wykorzystaniem technologii wirtualnej rzeczywistości.",
      image: "/assets/dofinansowanie.png",
    },
    {
      id: "dofinansowanie-do-szkolen-i-kursow",
      title: "Dofinansowanie do szkoleń i kursów",
      subtitle: "Uzyskaj nawet do 95% dofinansowania z Bazy Usług Rozwojowych",
      description:
        "Szeroki wybór kierunków studiów podyplomowych, dostosowanych do potrzeb rynku pracy.",
      image: "/assets/dofinansowanies.png",
    },
  ],
  [
    {
      id: "centrum-egzaminacyjne-telc",
      title: "Centrum Egzaminacyjne TELC",
      subtitle: "Certyfikaty językowe",
      description:
        "Międzynarodowe certyfikaty językowe TELC - egzaminy i kursy przygotowawcze.",
      image: "/assets/telc.png",
    },
    {
      id: "studiuj-psychoterapie",
      title: "Studiuj Psychoterapię",
      subtitle: "Poznaj ofertę studiów psychologicznych",
      description:
        "Rozwijaj swoje kompetencje w obszarze psychoterapii dzięki specjalistycznym studiom podyplomowym, które spełniają wymogi NFZ. <br/><br/>Zdobądź praktyczne doświadczenie kliniczne, korzystaj z nowoczesnych metod nauczania online i przygotuj się do pracy w placówkach terapeutycznych.",
      image: "/assets/psychoterapia.png",
    },
    {
      id: "studia-podyplomowe",
      title: "Studia Podyplomowe",
      subtitle: "Rozwój kariery",
      description:
        "Szeroki wybór kierunków studiów podyplomowych, dostosowanych do potrzeb rynku pracy.",
      image: "/assets/studia.png",
    },
    {
      id: "poradnia-psychologiczno-pedagogiczna-magnolia",
      title: "Poradnia Psychologiczno Pedagogiczna MAGNOLIA",
      subtitle: "Pomoc specjalistyczna",
      description:
        "Poradnia Psychologiczno-Pedagogiczna MAGNOLIA oferuje kompleksowe wsparcie dla dzieci, młodzieży oraz dorosłych.<br/><br/> Specjalizujemy się we wczesnym wspomaganiu rozwoju dziecka, treningu umiejętności społecznych, terapii uzależnień oraz psychoterapii par. Zapewniamy profesjonalną pomoc w przyjaznym otoczeniu, również online.",
      image: "/assets/poradniam.png",
    },
  ],
  [
    {
      id: "niepubliczny-osrodek-doskonalenia-nauczycieli",
      title: "Niepubliczny Ośrodek Doskonalenia Nauczycieli",
      subtitle: "Rozwój nauczycieli",
      description:
        "Kompleksowe szkolenia i warsztaty dla nauczycieli, podnoszące kwalifikacje zawodowe.",
      image: "/assets/nauczyciele.png",
    },
    {
      id: "platforma-elearning",
      title: "Platforma eLearning",
      subtitle: "Nauka online",
      description:
        "Nowoczesna platforma do nauki online, oferująca szeroki zakres kursów i materiałów edukacyjnych.",
      image: "/assets/elearning.png",
    },
    {
      id: "kursy-i-materialy-edukacyjne",
      title: "Kursy i Materiały Edukacyjne",
      subtitle: "Odwiedź nasz sklep i zapoznaj się z ofertą",
      description:
        "Kompleksowe szkolenia i warsztaty dla nauczycieli, podnoszące kwalifikacje zawodowe.",
      image: "/assets/sklep.png",
    },
    {
      id: "edukacja-wlaczajaca",
      title: "Edukacja Włączająca",
      subtitle: "Równe szanse",
      description:
        "Programy i metody nauczania wspierające integrację uczniów o różnych potrzebach edukacyjnych.",
      image: "/assets/edukacja.png",
    },
    {
      id: "lekcja-enter",
      title: "Lekcja Enter",
      subtitle: "Równe szanse",
      description:
        "Programy i metody nauczania wspierające integrację uczniów o różnych potrzebach edukacyjnych.",
      image: "/assets/enter.png",
    },
  ],
];

const navItems = [
  {
    name: "Dofinansowania",
    href: "/",
    dropdownItems: [
      {
        name: "Dofinansowanie do studiów podyplomowych",
        href: "#dofinansowanie-do-studiow-podyplomowych",
      },
      {
        name: "Dofinansowanie do szkoleń i kursów",
        href: "#dofinansowanie-do-szkolen-i-kursow",
      },
    ],
  },
  {
    name: "Edukacja",
    href: "/services",
    dropdownItems: [
      { name: "Studia Podyplomowe", href: "#studia-podyplomowe" },
      { name: "Kierunki Psychologiczne", href: "#studiuj-psychoterapie" },
      { name: "Platforma eLearning", href: "#platforma-elearning" },
    ],
  },
  {
    name: "Rozwój",
    href: "/about",
    dropdownItems: [
      {
        name: "Poradnia Psychologiczno Pedagogiczna MAGNOLIA",
        href: "#poradnia-psychologiczno-pedagogiczna-magnolia",
      },
      {
        name: "Centrum Egzaminacyjne TELC",
        href: "#centrum-egzaminacyjne-telc",
      },
      {
        name: "Kursy i Materiały Edukacyjne",
        href: "#kursy-i-materialy-edukacyjne",
      },
      {
        name: "Niepubliczny Ośrodek Doskonalenia Nauczycieli",
        href: "#niepubliczny-osrodek-doskonalenia-nauczycieli",
      },
    ],
  },
  {
    name: "Projekty",
    href: "/contact",
    dropdownItems: [
      { name: "Edukacja Włączająca", href: "#edukacja-wlaczajaca" },
      { name: "Lekcja Enter", href: "#lekcja-enter" },
    ],
  },
];

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    // Najpierw przewijamy do rzędu
    const yOffset = -100; // Dostosuj tę wartość w zależności od wysokości nagłówka
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    // Następnie przewijamy do elementu w rzędzie
    setTimeout(() => {
      const row = element.closest(".overflow-x-auto");
      if (row) {
        const rowRect = row.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollLeft =
          elementRect.left -
          rowRect.left +
          row.scrollLeft -
          (rowRect.width - elementRect.width) / 2;
        row.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }, 500); // Opóźnienie, aby dać czas na zakończenie przewijania w osi Y
  }
}

function NavItem({ item }: { item: (typeof navItems)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    scrollToElement(targetId);
  };

  if (!item.dropdownItems) {
    return (
      <Link
        href={item.href}
        className="text-white hover:text-gray-400 transition-colors duration-300"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center text-white hover:text-gray-400 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {item.name}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg py-1 z-10 whitespace-nowrap"
            style={{ minWidth: "max-content" }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {item.dropdownItems.map((dropdownItem) => (
              <a
                key={dropdownItem.name}
                href={dropdownItem.href}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={(e) => handleClick(e, dropdownItem.href)}
              >
                {dropdownItem.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EducationalServices() {
  const [hoveredTile, setHoveredTile] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const rowRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    // Obsługa początkowego przewijania do elementu, jeśli w URL jest obecny hash
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      setTimeout(() => {
        scrollToElement(targetId);
      }, 500);
    }
    const secondRow = rowRefs[1].current;
    if (secondRow) {
      secondRow.scrollLeft = secondRow.scrollWidth - secondRow.clientWidth;
    }
  }, []);

  const scroll = (rowIndex: number, direction: "left" | "right") => {
    const row = rowRefs[rowIndex].current;
    if (row) {
      const scrollAmount = direction === "left" ? -400 : 400;
      row.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-zinc-950 via-gray-800 to-black text-gray-100 p-4 md:p-8 ${GeistSans.className}`}
    >
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16">
        <div className="flex items-center space-x-8">
          <h1
            className={`text-3xl md:text-4xl tracking-tighter font-[700] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-[#FF0091] to-blue-600 mb-4 md:mb-0 ${GeistSans.className}`}
          >
            RYBNIK
            <span className={`${GeistMono.className} text-2xl`}>Online</span>
          </h1>

          <nav
            className={`${GeistMono.className} font-semibold flex pl-10 space-x-4 md:space-x-8`}
          >
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>
        </div>

        <Link
          href="/contact"
          className={`${GeistMono.className} text-white hover:text-gray-400 font-bold py-2 px-4 rounded transition duration-300 border border-zinc-500`}
        >
          Kontakt
        </Link>
      </header>

      <main className="space-y-12 md:space-y-20">
        {services.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <div
              ref={rowRefs[rowIndex]}
              className={`flex overflow-x-auto space-x-4 md:space-x-8 pb-6 md:pb-12 -mx-4 md:-mx-8 px-4 md:px-8 scrollbar-hide`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {row.map((service, colIndex) => (
                <motion.div
                  key={colIndex}
                  id={service.id}
                  className={`flex-none ${
                    rowIndex === 0
                      ? "w-[800px] md:w-[1000px] h-[300px] md:h-[400px]"
                      : rowIndex === 1
                      ? "w-[280px] md:w-[500px] h-[400px] md:h-[650px]"
                      : "w-[240px] md:w-[400px] h-[350px] md:h-[550px]"
                  } relative  rounded-2xl overflow-hidden shadow-2xl`}
                  onHoverStart={() =>
                    setHoveredTile({ row: rowIndex, col: colIndex })
                  }
                  onHoverEnd={() => setHoveredTile(null)}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={100}
                    priority={
                      rowIndex === 0 || (rowIndex === 1 && colIndex < 2)
                    }
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-all duration-500 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      rowIndex === 0
                        ? "from-purple-900"
                        : rowIndex === 1
                        ? "from-pink-900"
                        : "from-blue-900"
                    } via-transparent to-transparent opacity-80`}
                  />
                  <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-10">
                    <h3
                      className={`text-xl md:text-2xl font-semibold tracking-tighter text-white mb-1 ${GeistMono.className}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base tracking-tight font-medium text-gray-300">
                      {service.subtitle}
                    </p>
                  </div>
                  <AnimatePresence>
                    {hoveredTile?.row === rowIndex &&
                      hoveredTile?.col === colIndex && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`absolute bottom-0 left-0 right-0 ${
                            rowIndex === 0
                              ? "bg-purple-950"
                              : rowIndex === 1
                              ? "bg-pink-950"
                              : "bg-blue-950"
                          } bg-opacity-95 flex items-center justify-center p-4 md:p-8 overflow-hidden`}
                        >
                          <p
                            className={`${GeistMono.className} text-base md:text-xl tracking-tight font-medium text-white leading-relaxed`}
                          >
                            <Markdown>{service.description}</Markdown>
                          </p>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => scroll(rowIndex, "left")}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full transition-colors duration-300 ${
                rowIndex === 0
                  ? "bg-purple-500/50 hover:bg-purple-600"
                  : rowIndex === 1
                  ? "bg-pink-500/50 hover:bg-pink-600"
                  : "bg-blue-500/50 hover:bg-blue-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.button>
            <motion.button
              onClick={() => scroll(rowIndex, "right")}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full transition-colors duration-300 ${
                rowIndex === 0
                  ? "bg-purple-500/50 hover:bg-purple-600"
                  : rowIndex === 1
                  ? "bg-pink-500/50 hover:bg-pink-600"
                  : "bg-blue-500/50 hover:bg-blue-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.button>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
