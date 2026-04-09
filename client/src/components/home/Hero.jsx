import React from "react";
import { Link } from "react-router-dom";
import { Gem, MoveRight } from "lucide-react";
import HeroTable from "./HeroTable";

const Hero = () => {
  return (
    <section className="min-h-screen container mx-auto px-2 py-4 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Track Your Job Search{" "}
          <span className="text-indigo-600">With Confidence</span>
        </h1>

        <p className="text-neutral-500 text-base sm:text-lg mb-8">
          Stay organized and land your dream job faster with our powerful job
          application tracking platform. Perfect for students, professionals,
          and career switchers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <Link
            to="/signin"
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg hover:bg-indigo-700 transition-all flex items-center gap-2 hover:gap-3"
          >
            Start Tracking Free <MoveRight strokeWidth={1.5} />
          </Link>

          <Link
            to="/"
            className="py-4 px-8 rounded-lg border border-neutral-300 hover:bg-neutral-200 transition-all flex items-center gap-2 hover:gap-3"
          >
            Features & Pricing <Gem strokeWidth={1.5} />
          </Link>
        </div>
      </div>
      <HeroTable />
    </section>
  );
};

export default Hero;
