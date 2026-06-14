import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import CustomerTable from "../customers/CustomerTable";

export default function CustomersPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              Customers
            </h1>

            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Add Customer
            </button>
          </div>

          <CustomerTable />
        </main>
      </div>
    </div>
  );
}