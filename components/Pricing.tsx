import { Card } from "@/components/ui/card";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold">
          Simple Pricing
        </h2>

        <Card className="mt-12 p-10 text-center">

          <h3 className="text-3xl font-bold">
            Pro
          </h3>

          <p className="text-6xl font-bold mt-6">
            €19
          </p>

          <p className="text-muted-foreground">
            per month
          </p>

          <ul className="mt-8 space-y-3">
            <li>Unlimited Customers</li>
            <li>Unlimited Jobs</li>
            <li>Invoice Generator</li>
            <li>Email Support</li>
          </ul>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl">
            Start Trial
          </button>

        </Card>

      </div>
    </section>
  );
}