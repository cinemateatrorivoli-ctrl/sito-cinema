"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cinema", href: "/cinema" },
  { name: "Teatro", href: "/teatro" },
  { name: "Arena", href: "/arena" },
  { name: "Prezzi", href: "/#prezzi" },
  { name: "Contatti", href: "/#contatti" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <Link href="/" className="shrink-0 flex items-center hover:opacity-80 transition-opacity">
              <img src="/logo_white.png" alt="Cinema Rivoli" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${pathname === link.href ? "text-red-500 font-semibold" : "text-gray-300 hover:text-white"
                    } px-3 py-2 rounded-md text-sm transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
            >
              <span className="sr-only">Apri menu principale</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute w-full border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${pathname === link.href ? "text-red-500 bg-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
