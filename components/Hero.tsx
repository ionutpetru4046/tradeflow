import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Blurred gradient blobs */}
      <div
        className="pointer-events-none absolute -top-48 -left-40 z-0 blur-3xl opacity-40 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-56 -right-48 z-0 blur-3xl opacity-30 w-[28rem] h-[28rem] bg-gradient-to-bl from-pink-500 via-yellow-300 to-blue-500"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-xs tracking-wide shadow-lg">
            ALL-IN-ONE TOOL FOR TRADE BUSINESSES
          </span>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-7">
            Streamline Your <span className="whitespace-nowrap">Trade Business</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg sm:text-xl text-muted-foreground dark:text-zinc-300 font-medium">
            Unlock growth and stay organized with <b className="text-black dark:text-white/90 font-semibold">TradeFlow</b> – the modern way for electricians, plumbers, and contractors to handle customers, jobs, quotes, and appointments. <br className="hidden sm:block" />
            <span className="inline sm:block text-blue-700 dark:text-purple-300/80 font-medium">All in a single intuitive dashboard.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto justify-center lg:justify-start">
            <Link
              href="#pricing"
              className="bg-linear-to-r from-blue-700 via-purple-700 to-pink-600 text-white px-9 py-4 rounded-xl text-lg font-bold shadow-xl hover:brightness-90 active:scale-95 transition-all duration-150 w-full sm:w-auto text-center ring-2 ring-transparent hover:ring-pink-300 focus-visible:outline-none"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="border-2 border-blue-700/80 dark:border-white/40 px-9 py-4 rounded-xl text-lg font-semibold bg-white/80 dark:bg-zinc-900/60 hover:bg-blue-50 dark:hover:bg-zinc-800/80 text-blue-800 dark:text-white transition w-full sm:w-auto text-center focus-visible:outline-none"
            >
              View Demo
            </Link>
          </div>
          {/* Mini features */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5 text-muted-foreground text-sm font-medium items-center justify-center lg:justify-start w-full">
            <div className="flex items-center gap-2">
              <img src="/icon-customer.svg" alt="Customer" className="w-5 h-5" />
              Customer Manager
            </div>
            <div className="flex items-center gap-2">
              <img src="/icon-job.svg" alt="Job Tracking" className="w-5 h-5" />
              Job Tracking
            </div>
            <div className="flex items-center gap-2">
              <img src="/icon-invoice.svg" alt="Invoices" className="w-5 h-5" />
              Fast Invoicing
            </div>
            <div className="flex items-center gap-2">
              <img src="/icon-calendar.svg" alt="Calendar" className="w-5 h-5" />
              Appointments
            </div>
          </div>
        </div>
        {/* Right side - Images / Dashboard Preview */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-lg xs:max-w-xl sm:max-w-2xl rounded-3xl shadow-2xl border bg-white/90 dark:bg-zinc-950 p-0 overflow-hidden ring-1 ring-black/10">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full shadow-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white tracking-wide select-none z-10">
              NEW FOR 2024
            </span>
            <img
              src="/dashboard-hero-expanded.png"
              alt="Modern dashboard screenshot of TradeFlow app"
              className="rounded-t-3xl w-full object-cover border-b border-zinc-200 dark:border-zinc-800"
              loading="eager"
              style={{
                minHeight: "180px",
                maxHeight: "430px",
                aspectRatio: "16/9",
                objectFit: "cover",
                background: "linear-gradient(to right, #e0e7ff, #fdf2fa)",
              }}
            />
            <div className="absolute top-7 left-3 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-blue-100 dark:border-zinc-800 shadow-md px-4 py-2 flex items-center gap-2 text-blue-700 dark:text-purple-200 text-xs font-semibold">
              <img src="/icon-lightning.svg" alt="Lightning" className="w-4 h-4" />
              Blazing Fast. No setup.
            </div>
            <div className="absolute bottom-8 right-5 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-pink-100 dark:border-zinc-800 shadow-md px-4 py-2 flex items-center gap-2 text-pink-700 dark:text-pink-300 text-xs font-semibold">
              <img src="/icon-cloud.svg" alt="Cloud" className="w-4 h-4" />
              Access Anywhere.
            </div>
            <span className="block mt-2 text-xs xs:text-sm text-muted-foreground text-center px-2 pb-3">
              Actual interface: simple, vivid, mobile-friendly.
            </span>
          </div>
          {/* Secondary image or badge for mobile */}
          <div className="flex mt-6 gap-3">
            <img
              src="/app-mobile-mock.png"
              alt="Mobile app preview"
              className="w-32 h-auto rounded-xl border shadow-lg bg-gradient-to-br from-blue-100/80 via-pink-50/60 to-yellow-50/50 object-cover"
              loading="lazy"
            />
            <img
              src="/app-joblist-mock.png"
              alt="Job list preview"
              className="w-32 h-auto rounded-xl border shadow-lg bg-gradient-to-br from-yellow-100/50 via-blue-50/40 to-pink-100/60 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}