import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

export default function DashboardPage() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-6">

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

        </main>

      </div>

    </div>
  );
}