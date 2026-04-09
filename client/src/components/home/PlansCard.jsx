import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PlansCard = ({ plan }) => {
  const { name, price, description, features, highlighted } = plan;
  if (highlighted) {
    return (
      <div className="border-2 border-indigo-500 shadow-xl p-4 rounded-xl">
        <div className="text-center mb-4">
          <h3 className="font-semibold text-2xl mb-2 text-indigo-600">
            {name}
          </h3>
          <p className="text-neutral-500 mb-4">{description}</p>
          <p className="text-xl font-semibold">{price}</p>
        </div>
        <div className="mb-4 border-b border-neutral-300 pb-4">
          <Link
            to="/plan"
            className="bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors block text-center"
          >
            Get Premium
          </Link>
        </div>
        <div>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 mb-2">
                <Check className="text-indigo-600 size-6" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="border border-neutral-300 p-4 rounded-xl">
      <div className="text-center mb-4">
        <h3 className="font-semibold text-2xl mb-2 text-indigo-600">{name}</h3>
        <p className="text-neutral-500 mb-4">{description}</p>
        <p className="text-xl font-semibold">{price}</p>
      </div>
      <div className="mb-4 border-b border-neutral-300 pb-4">
        <Link
          to="/signin"
          className="py-3 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors block text-center"
        >
          Sign In
        </Link>
      </div>
      <div>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 mb-2">
              <Check className="text-indigo-600 size-6" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlansCard;
