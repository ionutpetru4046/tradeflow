'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-950/80 border-b backdrop-blur-md shadow-sm transition-all">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl font-bold tracking-tight">TradeFlow</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 font-medium text-base">
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
          <Link href="/demo" className="px-4 py-2 rounded-lg border border-black/80 dark:border-white/50 hover:bg-black hover:text-white dark:border-zinc-400 dark:hover:bg-zinc-700 transition-colors">
            View Demo
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-black/90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger for Mobile */}
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
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 shadow border-t transition-all">
          <div className="flex flex-col items-start px-6 py-4 gap-3 text-base font-medium">
            <Link
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 transition"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 transition"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 transition"
            >
              Contact
            </Link>
            <Link
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 hover:text-blue-600 transition"
            >
              FAQ
            </Link>
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="mt-3 w-full px-4 py-2 rounded-lg border border-black/80 dark:border-white/50 hover:bg-black hover:text-white dark:border-zinc-400 dark:hover:bg-zinc-700 transition-colors"
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