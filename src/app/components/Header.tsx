"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex justify-between items-center py-4 px-8">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/images/logo.jpeg" alt="Logo" width={100} height={100} />
            <span className="ml-4 text-2xl font-extrabold text-gray-800 tracking-wide hidden md:block">
              Niyamak <span className="text-blue-600">Tender Solutions</span>
            </span>
          </div>
        </Link>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  pathname === item.href
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4 px-8 py-6">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Menu</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                  pathname === item.href
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
