import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          TradeFlow
        </h1>

        <div className="flex items-center gap-6">
          <Link href="#features">
            Features
          </Link>

          <Link href="#pricing">
            Pricing
          </Link>

          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}