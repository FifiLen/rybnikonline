"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "@/utils/scroll";

interface NavItem {
  name: string;
  dropdownItems?: {
    name: string;
    href: string;
  }[];
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      scrollToElement(targetId);
    }
  };

  return (
    <div className="font-semibold hidden lg:flex space-x-8">
      {items.map((item) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setActiveDropdown(item.name)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 tracking-tight">
            {item.name}
            {item.dropdownItems && <ChevronDown className="w-4 h-4 ml-1" />}
          </button>

          {item.dropdownItems && (
            <AnimatePresence>
              {activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg py-1 z-10 whitespace-nowrap"
                  style={{ minWidth: "max-content" }}
                >
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={(e) => handleClick(e, dropdownItem.href)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
}
