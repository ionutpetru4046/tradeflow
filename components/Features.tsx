import { Card } from "@/components/ui/card";
import { FaUsers, FaTasks, FaFileInvoiceDollar } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Customer Management",
      description: "Store all customer information in one place, with quick access, notes, and edit options.",
      icon: <FaUsers size={32} className="text-blue-500" />,
      accent: "from-blue-100 to-blue-50",
    },
    {
      title: "Job Tracking",
      description: "Track every job transparently from pending to completed, with progress steps.",
      icon: <FaTasks size={32} className="text-green-500" />,
      accent: "from-green-100 to-green-50",
    },
    {
      title: "Invoices",
      description: "Generate, preview, and download invoices in seconds with modern PDF exports.",
      icon: <FaFileInvoiceDollar size={32} className="text-yellow-500" />,
      accent: "from-yellow-100 to-yellow-50",
    },
  ];

  return (
    <section
      id="features"
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500">
          Everything You Need
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`
                p-8 shadow-xl rounded-2xl border-0
                bg-gradient-to-br ${feature.accent} hover:scale-[1.03] transition-transform duration-200
                hover:shadow-2xl
              `}
            >
              <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl border-4 border-white bg-white/80 shadow-lg mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-base leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}