"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { scrollToElement } from "@/utils/scroll"

interface DropdownItem {
  name: string
  href: string
}

interface NavItem {
  name: string
  href: string
  dropdownItems?: DropdownItem[]
}

interface MobileNavItemProps {
  item: NavItem
  setMobileMenuOpen: (isOpen: boolean) => void
}

export function MobileNavItem({ item, setMobileMenuOpen }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    scrollToElement(targetId)
    setMobileMenuOpen(false)
  }

  if (!item.dropdownItems) {
    return (
      <Link
        href={item.href}
        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        <ChevronDown
          className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1 space-y-1"
          >
            {item.dropdownItems.map((subItem: DropdownItem) => (
              <a
                key={subItem.name}
                href={subItem.href}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={(e) => handleClick(e, subItem.href)}
              >
                {subItem.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

