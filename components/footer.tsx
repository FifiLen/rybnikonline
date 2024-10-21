import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

const footerLinks = [
  {
    title: "Dofinansowania",
    links: [
      {
        name: "Dofinansowanie do studiów podyplomowych",
        href: "/psychoterapia",
      },
      {
        name: "Dofinansowanie do szkoleń i&nbsp;kursów",
        href: "/platforma-vr",
      },
    ],
  },
  {
    title: "Edukacja",
    links: [
      { name: "Studia Podyplomowe", href: "/studia-podyplomowe" },
      {
        name: "Kierunki Psychologiczne",
        href: "/edukacja-wlaczajaca",
      },
      { name: "Platforma eLearning", href: "/szkolenia-biznesowe" },
    ],
  },
  {
    title: "Rozwój",
    links: [
      {
        name: "Poradnia Psychologiczno Pedagogiczna MAGNOLIA",
        href: "/doradztwo-zawodowe",
      },

      { name: "Centrum Egzaminacyjne TELC", href: "/centrum-telc" },
      { name: "Kursy i Materiały Edukacyjne", href: "/elearning" },
      {
        name: "Niepubliczny Ośrodek Doskonalenia Nauczycieli",
        href: "/kursy-jezykowe",
      },
    ],
  },
  {
    title: "Projekty",
    links: [
      { name: "Edukacja Włączająca", href: "/elearning" },
      { name: "Lekcja Enter", href: "/kursy-jezykowe" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className={`bg-transparent mt-28 text-gray-300 ${GeistSans.className}`}
    >
      <div className="px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-24 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3
                className={`text-lg font-semibold text-white mb-4 ${GeistMono.className}`}
              >
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
            <h3
              className={`text-lg font-semibold text-white mb-4 ${GeistMono.className}`}
            >
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
    </footer>
  );
}
