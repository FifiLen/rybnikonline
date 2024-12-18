"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "./nav-config";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/60 text-gray-100 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <h1
              className={`text-3xl md:text-4xl tracking-tighter font-[700] text-white`}
            >
              RYBNIK<span className={` text-2xl`}>Online</span>
            </h1>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <DesktopNav items={navItems} />
          <Link
            href="/contact"
            className="text-slate-900 hover:text-gray-800 font-bold py-2 px-4 rounded-lg text-sm tracking-tight transition duration-300 border bg-white border-zinc-500"
          >
            Kontakt
          </Link>
        </div>
      </nav>

      <MobileNav
        items={navItems}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
    </header>
  );
}
