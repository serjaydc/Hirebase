import React from "react";
import {
  Briefcase,
  ChartColumn,
  Users,
  Zap,
  Bell,
  FileText,
} from "lucide-react";
import FeaturesCard from "./FeaturesCard";

const FEATURES_DATA = [
  {
    icon: Briefcase,
    title: "Application Tracking",
    description:
      "Track every application with detailed information including status, dates, contacts, and notes.",
  },
  {
    icon: ChartColumn,
    title: "Visual Analytics",
    description:
      "Beautiful charts and graphs to visualize your job search progress and success rate.",
  },
  {
    icon: Bell,
    title: "Follow-up Reminders",
    description:
      "Never miss a follow-up with automatic reminders for interviews and applications.",
  },
  {
    icon: FileText,
    title: "Interview Notes",
    description:
      "Keep detailed notes for each application including interview prep and company research.",
  },
  {
    icon: Users,
    title: "Contact Management",
    description:
      "Store recruiter and hiring manager contact information for easy reference.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description:
      "Fast search, filtering, and bulk operations to manage applications efficiently.",
  },
];

const Features = () => {
  return (
    <section className=" container mx-auto px-2 py-4 mb-10">
      <div className="text-center mb-8">
        <h2 className="font-semibold text-3xl lg:text-4xl mb-2 leading-tight">
          Everything You Need to Succeed
        </h2>
        <p className="text-neutral-500 text-md sm:text-lg">
          Powerful features to help you stay organized and land your dream job
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES_DATA.map((feature, index) => (
          <FeaturesCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
