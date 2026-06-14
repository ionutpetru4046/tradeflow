import { Card } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Customer Management",
      description:
        "Store all customer information in one place.",
    },
    {
      title: "Job Tracking",
      description:
        "Track every job from pending to completed.",
    },
    {
      title: "Invoices",
      description:
        "Generate invoices in seconds.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6"
            >
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}