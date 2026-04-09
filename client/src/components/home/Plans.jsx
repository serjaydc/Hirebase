import React from "react";
import PlansCard from "./PlansCard";

const PLANS_DATA = [
  {
    name: "Starter",
    price: "Free of Use",
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

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
        <ul className="flex flex-col gap-4 max-w-full lg:max-w-sm xl:max-w-lg">
          <li className="border-b border-neutral-300 pb-4">
            <h3 className="text-lg font-medium mb-1">Risk-Free Pricing</h3>
            <p className="text-neutral-500">
              Job hunting can feel messy and overwhelming. This app helps you
              keep everything in one place — clearly and simply. Try it with a
              30-day money-back guarantee. No stress, no risk.
            </p>
          </li>
          <li className="border-b border-neutral-300 pb-4">
            <h3 className="text-lg font-medium mb-1">
              Built for Your Job Search
            </h3>
            <p className="text-neutral-500">
              Track every application, monitor statuses, add notes, and never
              forget a follow-up again. No more spreadsheets. No more chaos.
              Just a clear view of your progress.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-medium mb-1">
              Stay Focused & Consistent
            </h3>
            <p className="text-neutral-500">
              Consistency is what lands offers. With reminders, timelines, and a
              clear overview, you'll stay on track and move forward with
              confidence.
            </p>
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {PLANS_DATA.map((plan, index) => (
            <PlansCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
