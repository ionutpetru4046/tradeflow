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
    // Here you would typically POST to an API endpoint
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1300);
  }

  return (
    <section className="relative max-w-3xl mx-auto px-6 py-24 flex flex-col items-center z-10">
      {/* Subtle blurred accent background */}
      <div aria-hidden="true" className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <div className="w-3/5 h-[320px] bg-gradient-to-r from-primary/30 to-teal-400/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <h1 className="relative text-3xl md:text-5xl font-extrabold mb-3 text-center tracking-tight bg-gradient-to-br from-primary to-teal-500 bg-clip-text text-transparent z-10 drop-shadow-sm">
        Contact Us
      </h1>
      <p className="relative text-muted-foreground mb-12 text-center max-w-2xl text-lg z-10">
        Have a question, need a demo, or want to talk to our team? Fill out the form below and we’ll get back to you within 1 business day.
      </p>
      <div className="relative bg-white/80 dark:bg-zinc-900/80 shadow-2xl border border-zinc-100 dark:border-zinc-800 rounded-2xl w-full p-10 z-10 backdrop-blur-md">
        {submitted ? (
          <div className="flex flex-col items-center py-10 animate-in fade-in slide-in-from-top-4">
            <svg className="text-green-500 mb-5" width="62" height="62" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#16a34a" opacity="0.1" />
              <path d="M8 13l3 3L16 9" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">Thank you!</h2>
            <p className="text-center text-muted-foreground mb-2">Your message has been received.<br />We&apos;ll be in touch soon.</p>
            <button
              className="mt-6 text-sm px-4 py-2 bg-gradient-to-r from-primary to-teal-400 text-white rounded-full shadow hover:from-primary/80 hover:to-teal-400/70 focus:outline-none focus:ring-2 focus:ring-primary transition"
              onClick={() => setSubmitted(false)}
              type="button"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-6"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="block text-base font-semibold mb-0.5 text-zinc-700 dark:text-zinc-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={2}
                className="w-full px-5 py-3 text-base rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/70 transition"
                placeholder="Your name"
                disabled={loading}
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-base font-semibold mb-0.5 text-zinc-700 dark:text-zinc-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 text-base rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/70 transition"
                placeholder="you@email.com"
                disabled={loading}
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="block text-base font-semibold mb-0.5 text-zinc-700 dark:text-zinc-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-3 text-base rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/70 transition resize-none"
                placeholder="How can we help you?"
                disabled={loading}
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-3 relative bg-gradient-to-r from-primary to-teal-400 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg hover:from-primary/90 hover:to-teal-400/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
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
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
        <div className="border-t border-zinc-100 dark:border-zinc-800 mt-12 pt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground transition">
          <span>
            Email:{" "}
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
    </section>
  );
}