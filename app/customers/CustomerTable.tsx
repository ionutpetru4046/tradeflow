import SearchBar from "./SearchBar";

const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@gmail.com",
    phone: "123456789",
  },
  {
    id: 2,
    name: "Mary Jones",
    email: "mary@gmail.com",
    phone: "987654321",
  },
  {
    id: 3,
    name: "Alex Brown",
    email: "alex@gmail.com",
    phone: "555555555",
  },
];

export default function CustomerTable() {
  return (
    <div className="border rounded-xl p-6">

      <SearchBar />

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Name
            </th>

            <th className="text-left py-3">
              Email
            </th>

            <th className="text-left py-3">
              Phone
            </th>

            <th className="text-left py-3">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>

          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b"
            >
              <td className="py-3">
                {customer.name}
              </td>

              <td>
                {customer.email}
              </td>

              <td>
                {customer.phone}
              </td>

              <td className="space-x-2">

                <button
                  className="
                    bg-blue-500
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Edit
                </button>

                <button
                  className="
                    bg-red-500
                    text-white
                    px-3
                    py-1
                    rounded
                  "
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}