import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          TradeFlow
        </h1>

        <div className="flex gap-4">
          <Link href="/login">
            Login
          </Link>

          <Link href="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}