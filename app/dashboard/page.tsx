import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import StatsCard from "../dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-6">

          <h1 className="text-3xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <StatsCard
              title="Customers"
              value="124"
            />

            <StatsCard
              title="Jobs"
              value="58"
            />

            <StatsCard
              title="Revenue"
              value="€8,420"
            />

            <StatsCard
              title="Completed"
              value="41"
            />

          </div>

        </main>

      </div>

    </div>
  );
}