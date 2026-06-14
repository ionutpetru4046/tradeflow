import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        TradeFlow
      </h1>

      <nav className="space-y-4">

        <Link
          href="/dashboard"
          className="flex items-center gap-2"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/customers"
          className="flex items-center gap-2"
        >
          <Users size={18} />
          Customers
        </Link>

        <Link
          href="/jobs"
          className="flex items-center gap-2"
        >
          <Briefcase size={18} />
          Jobs
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-2"
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>

    </aside>
  );
}