import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { div } from "framer-motion/client";

const footerLinks = [
  {
    title: "Dofinansowania",
    links: [
      {
        name: "Dofinansowanie do studiów podyplomowych",
        href: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144",
      },
      {
        name: "Dofinansowanie do szkoleń i kursów",
        href: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144",
      },
    ],
  },
  {
    title: "Edukacja",
    links: [
      { name: "Studia Podyplomowe", href: "https://isp.rybnikonline.eu/" },
      {
        name: "Kierunki Psychologiczne",
        href: "https://isp.rybnikonline.eu/",
      },
      {
        name: "Platforma eLearning",
        href: "https://elearning.rybnikonline.eu/",
      },
    ],
  },
  {
    title: "Rozwój",
    links: [
      {
        name: "Poradnia Psychologiczno Pedagogiczna MAGNOLIA",
        href: "https://www.poradniamagnolia.pl/",
      },
      {
        name: "Centrum Egzaminacyjne TELC",
        href: "https://telc.rybnikonline.eu/",
      },
      {
        name: "Kursy i Materiały Edukacyjne",
        href: "https://sklep.rybnikonline.eu/",
      },
      {
        name: "Niepubliczny Ośrodek Doskonalenia Nauczycieli",
        href: "http://www.odnrybnik.edu.pl/",
      },
    ],
  },
  {
    title: "Projekty",
    links: [
      {
        name: "Edukacja Włączająca",
        href: "https://edukacjawlaczajaca.rybnikonline.eu/",
      },
      { name: "Lekcja Enter", href: "https://lekcjaenter.rybnikonline.eu/" },
    ],
  },
];
export default function Footer() {
  return (
    <footer className={`bg-slate-900 max-w-full py-8`}>
      <div
        className={`bg-slate-900 mt-28 max-w-7xl mx-auto px-10 text-gray-300`}
      >
        <div className="px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-24 mb-12">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className={`text-lg font-semibold text-white mb-4 `}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors duration-300"
                      >
                        <Markdown>{link.name}</Markdown>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-4">
              <h3 className={`text-lg font-semibold text-white mb-4 `}>
                Kontakt
              </h3>
              <address className="not-italic">
                <p className="text-sm">ul. Magnolii 25</p>
                <p className="text-sm">44-207 Rybnik</p>
                <p className="text-sm">Tel: +48 789 790 860</p>
                <p className="text-sm">Tel: +48 797 173 501</p>
                <p className="text-sm">Tel: +48 503 192 950</p>
                <p className="text-sm">Tel: +48 690 515 224</p>
                <p className="text-sm">WhatsApp: +48 502 162 365</p>

                <p className="text-sm">Email: odn.rybnik@gmail.com</p>
              </address>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-600 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} RybnikOnline. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
