const jobs = [
    {
      customer: "John Smith",
      service: "Brake Repair",
      status: "Pending",
    },
    {
      customer: "Mary Jones",
      service: "Oil Change",
      status: "Completed",
    },
    {
      customer: "Alex Brown",
      service: "Engine Check",
      status: "In Progress",
    },
  ];
  
  export default function RecentJobs() {
    return (
      <div className="border rounded-xl p-6 mt-8">
  
        <h2 className="text-xl font-bold mb-4">
          Recent Jobs
        </h2>
  
        <table className="w-full">
  
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Customer
              </th>
  
              <th className="text-left py-3">
                Service
              </th>
  
              <th className="text-left py-3">
                Status
              </th>
            </tr>
          </thead>
  
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.customer}
                className="border-b"
              >
                <td className="py-3">
                  {job.customer}
                </td>
  
                <td>
                  {job.service}
                </td>
  
                <td>
                  {job.status}
                </td>
              </tr>
            ))}
          </tbody>
  
        </table>
  
      </div>
    );
  }