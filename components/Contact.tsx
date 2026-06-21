"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Replace this with your API POST call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1300);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 bg-linear-to-br from-blue-50 via-white to-pink-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-pink-950">
      {/* Stylish blurred background shapes */}
      <div aria-hidden="true" className="absolute z-0 inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] max-w-3xl h-96 bg-linear-to-r from-blue-300/25 via-purple-200/25 to-pink-200/30 opacity-50 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 right-[-7vw] w-80 h-80 bg-linear-to-br from-pink-300/25 via-yellow-200/20 to-blue-200/20 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-linear-to-r from-primary/20 to-teal-200/20 text-sm font-semibold text-primary dark:text-teal-300 dark:from-primary/40 dark:to-teal-400/20 mb-4 backdrop-blur">
            We&apos;re here to help
            <svg className="w-4 h-4 text-primary dark:text-teal-300" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path d="M8 13l3 3L16 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center bg-linear-to-r from-primary via-purple-700 to-teal-400 bg-clip-text text-transparent mb-3 drop-shadow">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-center max-w-xl text-lg mt-2">
            Let us know how we can help your business. We aim to reply within one business day.
          </p>
        </div>

        <div className="relative bg-white/90 dark:bg-zinc-900/95 shadow-xl border border-zinc-50 dark:border-zinc-800 rounded-2xl w-full px-8 sm:px-12 py-10 sm:py-14 backdrop-blur-lg transition-all">
          {submitted ? (
            <div className="flex flex-col items-center py-12 animate-in fade-in slide-in-from-top-4">
              <svg className="mb-5 w-16 h-16 text-green-600" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#16a34a" opacity="0.11" />
                <path d="M22 34l7 7 13-15" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-linear-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                Message Sent!
              </h2>
              <p className="text-center text-muted-foreground mb-4">We appreciate your interest.<br />You’ll hear from us soon.</p>
              <button
                className="mt-4 text-sm font-semibold px-6 py-2 bg-linear-to-r from-primary to-teal-400 text-white rounded-full shadow hover:from-primary/80 hover:to-teal-400/80 focus:outline-none focus:ring-2 focus:ring-primary/70 transition"
                onClick={() => setSubmitted(false)}
                type="button"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col gap-7 animate-in fade-in slide-in-from-bottom-8"
              onSubmit={handleSubmit}
              autoComplete="off"
              aria-label="Contact Form"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="block text-base font-semibold mb-1 text-zinc-800 dark:text-zinc-100">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className="w-full px-5 py-3 text-base rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/70 transition placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  placeholder="Your full name"
                  disabled={loading}
                  spellCheck="false"
                  autoComplete="off"
                  aria-required="true"
                  aria-label="Name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="block text-base font-semibold mb-1 text-zinc-800 dark:text-zinc-100">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 text-base rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/70 transition placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  placeholder="you@company.com"
                  disabled={loading}
                  spellCheck="false"
                  autoComplete="off"
                  aria-required="true"
                  aria-label="Email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="block text-base font-semibold mb-1 text-zinc-800 dark:text-zinc-100">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3 text-base rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/70 transition resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  placeholder="Tell us how we can help you..."
                  disabled={loading}
                  spellCheck="false"
                  autoComplete="off"
                  aria-required="true"
                  aria-label="Message"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-teal-400 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg hover:from-primary/90 hover:to-teal-400/80 focus:outline-none focus:ring-2 focus:ring-primary/80 transition-all duration-200"
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 19l21-7-21-7v14z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
          <div className="border-t border-zinc-100 dark:border-zinc-800 mt-11 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground transition">
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5 mr-1 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
              </svg>
              Email:&nbsp;
              <a
                href="mailto:team@tradeflow.app"
                className="underline underline-offset-2 decoration-primary hover:text-primary transition"
              >
                team@tradeflow.app
              </a>
            </span>
            <span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">TradeFlow, Inc.</span> &nbsp;|&nbsp;
              <span className="italic text-zinc-500 dark:text-zinc-400">Modern Tools for Trade Businesses</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}