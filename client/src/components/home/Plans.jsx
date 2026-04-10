import React from "react";
import PlansCard from "./PlansCard";

const PLANS_DATA = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect to get started and stay organized",
    features: [
      "Track up to 50 applications",
      "Basic status tracking",
      "Simple dashboard overview",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "£19.98 / month",
    description: "Unlock powerful tools to land jobs faster",
    features: [
      "Unlimited applications",
      "Advanced analytics & charts",
      "Detailed dashboard overview",
      "Describe Job Position",
      "Add Tags to Applications",
      "Contact management",
    ],
    highlighted: true,
  },
];

const Plans = () => {
  return (
    <section className="container mx-auto px-2 py-4 mb-10">
      <div className="text-center mb-8">
        <h2 className="font-semibold text-3xl lg:text-4xl mb-2 leading-tight">
          Advance Your Job Tracking
        </h2>
        <p className="text-neutral-500 text-md sm:text-lg">
          Simple pricing, no hidden fees. Start free and upgrade anytime
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {PLANS_DATA.map((plan, index) => (
          <PlansCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
