import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-100/60 via-white dark:from-zinc-950/80 dark:via-zinc-900/70 to-pink-100/60">
      {/* Modern blurred gradient decorations */}
      <div
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-25 blur-[120px] z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-8%] right-[-12%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 opacity-25 blur-[100px] z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center z-10 px-6">
        <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-sm">
          Ready to Grow <span className="whitespace-nowrap">Your Business?</span>
        </h2>
        <p className="mt-3 text-xl sm:text-2xl text-muted-foreground font-medium mb-10">
          Unlock hours of productivity. See what TradeFlow can do for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="#pricing"
            className="bg-black text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-black/90 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            Start Free Trial
          </Link>
          <Link
            href="/demo"
            className="border-2 border-black/80 dark:border-white/30 px-10 py-4 rounded-xl text-lg font-semibold bg-white/70 dark:bg-zinc-900/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            View Demo
          </Link>
        </div>
        <span className="block mt-8 text-sm text-gray-500 dark:text-gray-400">
          No credit card required. Cancel anytime.
        </span>
      </div>
    </section>
  );
}