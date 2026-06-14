import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Decorative blurred gradient shapes */}
      <div
        className="absolute -top-24 -left-24 w-[36rem] h-[36rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-36 -right-24 w-[32rem] h-[32rem] bg-gradient-to-bl from-pink-400 via-yellow-300 to-blue-500 opacity-25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-6">
          One Dashboard for <span className="whitespace-nowrap">Your Trade Business</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
          Grow your business and save hours every week.<br/>
          <span className="text-black dark:text-white/90">
            Effortlessly manage customers, jobs, invoices, and appointments in one modern app.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Link
            href="#pricing"
            className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-black/90 transition"
          >
            Start Free Trial
          </Link>
          <Link
            href="/demo"
            className="border-2 border-black/80 dark:border-white/30 px-8 py-4 rounded-xl text-lg font-semibold bg-white/70 dark:bg-zinc-900/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            View Demo
          </Link>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative bg-white dark:bg-zinc-950 border rounded-2xl shadow-xl w-full max-w-2xl p-4 sm:p-8 flex flex-col items-center">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-3 py-1 
              bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs rounded-full shadow font-semibold select-none">
              NEW IN 2024
            </span>
            {/* Demo dashboard illustration or placeholder */}
            <img
              src="/dashboard-hero-placeholder.png"
              alt="Screenshot of TradeFlow dashboard"
              className="rounded-xl shadow-md ring-1 ring-black/10 w-full object-cover"
              loading="lazy"
              style={{ minHeight: "180px", background: "linear-gradient(to right, #e0e7ff, #fce7f3)" }}
            />
            <span className="mt-2 text-sm text-muted-foreground">A sneak peek of your future workspace.</span>
          </div>
        </div>
      </div>
    </section>
  );
}