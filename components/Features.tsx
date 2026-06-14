export default function Features() {
    const features = [
      "Customer Management",
      "Job Tracking",
      "Invoices",
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="border rounded-xl p-6"
            >
              <h3 className="font-bold text-xl">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }