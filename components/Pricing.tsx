import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "For individuals just getting started.",
    features: [
      "Up to 5 Customers",
      "Up to 10 Jobs",
      "Basic Invoice Generator",
      "Community Support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: 19,
    description: "Best for growing businesses.",
    features: [
      "Unlimited Customers",
      "Unlimited Jobs",
      "Advanced Invoice Generator",
      "Priority Email Support",
      "Team Collaboration",
    ],
    cta: "Start 14-day Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large teams and enterprises.",
    features: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA & Support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-linear-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-4">
          Pricing Plans for Every Stage
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-14">
          Choose the plan that fits your business and scale as you grow. No hidden fees, cancel anytime.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`
                flex flex-col items-center p-8 transition-all
                border-2
                ${plan.highlight
                  ? "border-black/80 shadow-xl scale-105 bg-linear-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
                  : "border-muted"}
                hover:shadow-2xl hover:scale-105
              `}
            >
              {plan.highlight && (
                <span className="uppercase text-xs bg-black text-white px-3 py-1 rounded-full mb-3 tracking-widest font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-5">{plan.description}</p>

              <div className="flex items-end gap-2">
                <span
                  className="text-5xl font-bold"
                >
                  {plan.price === 0
                    ? "Free"
                    : plan.price === "Custom"
                    ? "Custom"
                    : `€${plan.price}`}
                </span>
                {typeof plan.price === "number" && (
                  <span className="self-end text-muted-foreground mb-1">/month</span>
                )}
              </div>

              <ul className="mt-8 mb-8 space-y-3 text-sm text-left w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl text-base font-semibold transition-all focus:outline-none
                  ${plan.highlight
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-white border border-black/40 text-black hover:bg-black/5 dark:bg-zinc-900 dark:text-white"}
                `}
              >
                {plan.cta}
              </button>
            </Card>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-12">
          14-day money-back guarantee on all paid plans. No risk, just value.
        </p>
      </div>
    </section>
  );
}