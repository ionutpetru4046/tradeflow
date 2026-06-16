import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeFlow – Modern Tools for Trade Businesses",
  description:
    "TradeFlow is the all-in-one dashboard for trade businesses. Effortlessly manage customers, jobs, invoices, and appointments in one modern web app.",
  metadataBase: new URL("https://tradeflow.app"),
  openGraph: {
    title: "TradeFlow – Modern Tools for Trade Businesses",
    description:
      "Effortlessly manage your trade business with TradeFlow. Customers, jobs, invoices, and scheduling all in one place.",
    url: "https://tradeflow.app",
    siteName: "TradeFlow",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TradeFlow App Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeFlow – Modern Tools for Trade Businesses",
    description:
      "Effortlessly manage your trade business with TradeFlow. Customers, jobs, invoices, and scheduling all in one place.",
    images: ["/opengraph-image.png"],
    site: "@tradeflowapp",
    creator: "@tradeflowapp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#15192C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        "font-sans",
        inter.variable,
        "scroll-smooth",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-blue-200 dark:selection:bg-pink-400/80">
        {children}
      </body>
    </html>
  );
}
