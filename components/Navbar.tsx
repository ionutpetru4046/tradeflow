'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if resizing to desktop or clicking outside
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    function handleClick(e: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-950/80 border-b backdrop-blur-md shadow-sm transition-all w-full">
      <div className="max-w-7xl mx-auto h-16 px-2 xs:px-3 sm:px-4 md:px-6 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition min-w-0">
          <span className="text-lg xs:text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            TradeFlow
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3 xs:gap-4 sm:gap-7 font-medium text-[15px] xs:text-base">
          <Link href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Link href="#faq" className="hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link
            href="/demo"
            className="px-3 xs:px-4 py-2 rounded-lg border border-black/80 dark:border-white/50 hover:bg-black hover:text-white dark:hover:bg-zinc-700 transition-colors"
          >
            View Demo
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-4 xs:px-5 py-2 rounded-lg font-semibold shadow hover:bg-black/90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger for Mobile/Tablet */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">Open Menu</span>
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile/Tablet Menu, adapted for all small screens */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white dark:bg-zinc-950 shadow border-t transition-all w-full animate-in fade-in"
        >
          <div className="flex flex-col items-start px-3 xs:px-5 py-4 gap-1.5 xs:gap-2.5 text-base font-medium">
            <Link
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 rounded transition"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 rounded transition"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 rounded transition"
            >
              Contact
            </Link>
            <Link
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 rounded transition"
            >
              FAQ
            </Link>
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="mt-3 w-full px-4 py-2 rounded-lg border border-black/80 dark:border-white/50 hover:bg-black hover:text-white dark:hover:bg-zinc-700 transition-colors"
            >
              View Demo
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full bg-black text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-black/90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}