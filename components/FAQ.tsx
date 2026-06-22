"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is TradeFlow?",
    answer:
      "TradeFlow is an all-in-one dashboard designed for trade businesses to manage customers, jobs, invoices, and appointments effortlessly in a single modern web app.",
  },
  {
    question: "Who is TradeFlow for?",
    answer:
      "TradeFlow is perfect for electricians, plumbers, HVAC techs, contractors, cleaning services, and any business in the trades looking to simplify operations and grow.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 14-day free trial so you can explore every feature with no commitment and no credit card required.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No downloads required. TradeFlow is a cloud-based web application – access your dashboard from any device, wherever you are.",
  },
  {
    question: "Can I import existing customer data?",
    answer:
      "Absolutely. You can easily import customers, job records, and more using our simple CSV import tool. Our support team is happy to help with migrations.",
  },
  {
    question: "How secure is my business data?",
    answer:
      "Your security is our top priority. All data is encrypted both in transit and at rest. We follow industry best practices and never share your data with third parties.",
  },
  {
    question: "How do I get support?",
    answer:
      "You can reach our friendly support team via live chat or email, 7 days a week. We pride ourselves on fast, personal, and helpful responses.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts—cancel anytime with no hassle right from your account settings.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section
      id="faq"
      className="
        relative 
        py-16 
        sm:py-20 
        md:py-28 
        bg-gradient-to-br from-blue-50/60 via-white to-pink-50/60 
        dark:from-zinc-950/80 dark:via-zinc-900/70 dark:to-pink-950/40 
        overflow-hidden
      "
    >
      {/* Decorative blurred backgrounds - use responsive widths and heights */}
      <div
        className="
          pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2
          w-[340px] h-[400px] sm:w-[440px] sm:h-[500px] md:w-[680px] md:h-[576px]
          bg-gradient-to-r from-blue-400/30 via-purple-300/30 to-pink-300/40
          opacity-40 blur-3xl z-0
        "
        aria-hidden="true"
      />
      <div
        className="
          pointer-events-none absolute
          bottom-[-8%] sm:bottom-[-10%]
          right-[-5%] sm:right-[-8%]
          w-[220px] h-[180px] sm:w-[300px] sm:h-[240px] md:w-[420px] md:h-[440px]
          rounded-full bg-gradient-to-br from-pink-300/25 via-yellow-200/20 to-blue-200/25
          opacity-30 blur-[90px] sm:blur-[100px] z-0
        "
        aria-hidden="true"
      />

      <div className="relative max-w-full sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-6 z-10">
        <h2
          className="
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl
            font-extrabold mb-6 sm:mb-8 text-center
            bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500
            bg-clip-text text-transparent drop-shadow-sm
          "
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-10">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="
                bg-white/95 dark:bg-zinc-900/80 
                border border-gray-200 dark:border-zinc-800 
                rounded-xl shadow transition-all
              "
            >
              <button
                className="
                  flex w-full items-center justify-between
                  px-4 py-4 sm:px-6 sm:py-5 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 
                  rounded-xl group
                  min-h-[44px] 
                "
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => handleToggle(idx)}
              >
                <span className="
                  text-base xs:text-lg sm:text-lg 
                  font-semibold text-left 
                  text-black dark:text-white transition-colors
                  text-wrap break-words
                  "
                >
                  {faq.question}
                </span>
                <svg
                  className={`
                    ml-2 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 
                    text-blue-600 group-hover:scale-110 transform transition-transform duration-200
                    ${openIndex === idx ? "rotate-45" : ""}
                  `}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`
                  px-4 sm:px-6 pb-4 sm:pb-5 pr-6 sm:pr-10
                  text-sm sm:text-base text-muted-foreground
                  transition-all ease-in-out
                  ${openIndex === idx 
                      ? "max-h-48 opacity-100" 
                      : "max-h-0 opacity-0 overflow-hidden"
                    }
                `}
                aria-hidden={openIndex !== idx}
                style={{ transitionProperty: 'max-height, opacity', transitionDuration: '350ms' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-14">
          <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-blue-700 dark:text-pink-400 font-semibold hover:underline"
            >
              Contact us &rarr;
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}