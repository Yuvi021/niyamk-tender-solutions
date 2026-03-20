"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = "mobile-menu";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Go to homepage">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/logo.jpeg"
                alt="Niyamak Tender Solutions logo"
                width={56}
                height={56}
                priority
              />
              <span className="ml-3 text-xl sm:text-2xl font-extrabold text-gray-800 tracking-wide hidden md:block">
                Niyamak{" "}
                <span className="text-emerald-600">Tender Solutions</span>
              </span>
            </div>
          </Link>
        </div>

        <button
          aria-label="Open navigation menu"
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
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

        <div className="hidden md:flex items-center gap-4">
          <nav aria-label="Primary navigation" className="space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                    pathname === item.href
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <a
            href="tel:+918160781810"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-gray-800 hover:text-emerald-700 hover:bg-emerald-50 font-semibold transition-colors"
            aria-label="Call Niyamak Tender Solutions"
          >
            <span className="hidden lg:inline text-sm">Call</span>
            <span className="text-sm lg:text-base">+91 8160781810</span>
          </a>

          <Link href="/contact" className="btn-primary px-5 py-2.5">
            Get Started
          </Link>
        </div>
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
        id={mobileMenuId}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col space-y-4 px-8 py-6">
          <h2 className="text-xl font-bold text-emerald-600 mb-4">Menu</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                  pathname === item.href
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}

          <div className="pt-2 space-y-3 group btn-primary rounded-full px-8 py-4 text-base">
            <a
              href="tel:+918160781810"
              className="group btn-primary rounded-full px-8 py-4 text-base"
            >
              +91 8160781810
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary block text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
