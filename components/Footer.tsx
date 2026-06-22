import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white/70 dark:bg-zinc-950/60 backdrop-blur py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-5">
        {/* Top Row: Logo and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 flex-1">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 bg-clip-text text-transparent select-none">
            TradeFlow
          </span>
          <span className="text-muted-foreground text-sm sm:ml-3">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Center Row: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-5 text-base font-medium min-w-[240px] flex-1">
          <Link href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Bottom/Right Row: Built With and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 flex-1">
          <span className="text-muted-foreground text-sm flex items-center">
            Built with
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline underline-offset-4 hover:text-blue-600 transition-colors"
            >
              Next.js
            </Link>
          </span>
          <span className="flex gap-3 mt-2 sm:mt-0">
            <Link
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 11.5 8.06a12.94 12.94 0 0 1-9.39-4.75A4.47 4.47 0 0 0 3.17 9.72a4.48 4.48 0 0 1-2-.55v.06A4.48 4.48 0 0 0 4.47 14a4.48 4.48 0 0 1-2 .07A4.48 4.48 0 0 0 7.29 17c-2.13 1.67-4.82 2.66-7.29 2.36A12.94 12.94 0 0 0 8.29 22C19.77 22 24.74 13.72 24.74 7.18q0-.29 0-.57A8.3 8.3 0 0 0 23 3Z"/>
              </svg>
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .3A12 12 0 0 0 0 12.47c0 5.28 3.44 9.76 8.2 11.34.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.63-4.04-1.63-.55-1.4-1.35-1.77-1.35-1.77-1.1-.77.08-.76.08-.76 1.22.09 1.87 1.26 1.87 1.26 1.09 1.9 2.87 1.35 3.58 1.03.11-.8.43-1.35.77-1.66-2.67-.31-5.47-1.36-5.47-6.08a4.82 4.82 0 0 1 1.29-3.35 4.48 4.48 0 0 1 .12-3.3s1.01-.32 3.31 1.26a11.47 11.47 0 0 1 6.06 0C17.65 6.46 18.66 6.78 18.66 6.78a4.48 4.48 0 0 1 .12 3.3 4.82 4.82 0 0 1 1.29 3.35c0 4.73-2.81 5.76-5.49 6.07.44.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.47C24 5.84 18.63.3 12 .3Z"/>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}