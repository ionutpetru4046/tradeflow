import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Decorative blurred gradient shapes */}
      <div
        className="absolute -top-36 -left-1/2 sm:-top-24 sm:-left-24 w-[24rem] h-[24rem] xs:w-[30rem] xs:h-[30rem] sm:w-[36rem] sm:h-[36rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-1/2 sm:-bottom-36 sm:-right-24 w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] sm:w-[32rem] sm:h-[32rem] bg-gradient-to-bl from-pink-400 via-yellow-300 to-blue-500 opacity-25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 xs:px-5 sm:px-8">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-5 xs:mb-6">
          One Dashboard for <span className="whitespace-nowrap">Your Trade Business</span>
        </h1>
        <p className="mt-3 xs:mt-4 text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-[95vw] sm:max-w-2xl mx-auto">
          Grow your business and save hours every week.<br />
          <span className="text-black dark:text-white/90">
            Effortlessly manage customers, jobs, invoices, and appointments in one modern app.
          </span>
        </p>
        <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4 mt-10 sm:mt-12 w-full">
          <Link
            href="#pricing"
            className="bg-black text-white px-7 xs:px-8 py-3 xs:py-4 rounded-xl text-base xs:text-lg font-semibold shadow-lg hover:bg-black/90 transition w-full xs:w-auto text-center"
          >
            Start Free Trial
          </Link>
          <Link
            href="/demo"
            className="border-2 border-black/80 dark:border-white/30 px-7 xs:px-8 py-3 xs:py-4 rounded-xl text-base xs:text-lg font-semibold bg-white/70 dark:bg-zinc-900/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition w-full xs:w-auto text-center"
          >
            View Demo
          </Link>
        </div>
        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <div className="relative bg-white dark:bg-zinc-950 border rounded-2xl shadow-xl w-full max-w-lg xs:max-w-xl sm:max-w-2xl p-2 xs:p-3 sm:p-4 md:p-8 flex flex-col items-center">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 xs:px-3 py-1 
              bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-[10px] xs:text-xs rounded-full shadow font-semibold select-none">
              NEW IN 2024
            </span>
            {/* Demo dashboard illustration or placeholder */}
            <img
              src="/dashboard-hero-placeholder.png"
              alt="Screenshot of TradeFlow dashboard"
              className="rounded-xl shadow-md ring-1 ring-black/10 w-full object-cover"
              loading="lazy"
              style={{
                minHeight: "120px",
                maxHeight: "400px",
                aspectRatio: "16/9",
                background: "linear-gradient(to right, #e0e7ff, #fce7f3)",
                objectFit: "cover",
              }}
            />
            <span className="mt-2 text-xs xs:text-sm text-muted-foreground text-center">
              A sneak peek of your future workspace.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}