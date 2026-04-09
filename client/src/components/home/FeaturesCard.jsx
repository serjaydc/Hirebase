import React from "react";

const FeaturesCard = ({ feature }) => {
  const { title, description } = feature;
  const Icon = feature.icon;

  const renderContent = () => {
    switch (feature.title) {
      case "Application Tracking":
        return (
          <div className="border border-neutral-300/80 p-4 rounded-xl hover:shadow-lg transition-all">
            <div className="bg-blue-100 border border-blue-200 rounded-xl w-fit p-3 mb-4">
              <Icon className="text-blue-600 size-6" />
            </div>
            <h3 className="font-medium text-xl mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
          </div>
        );
      case "Visual Analytics":
        return (
          <div className="border border-neutral-300/80 p-4 rounded-xl hover:shadow-lg transition-all">
            <div className="bg-green-100 border border-green-200 rounded-xl w-fit p-3 mb-4">
              <Icon className="text-green-600 size-6" />
            </div>
            <h3 className="font-medium text-xl mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
          </div>
        );
      case "Follow-up Reminders":
        return (
          <div className="border border-neutral-300/80 p-4 rounded-xl hover:shadow-lg transition-all">
            <div className="bg-orange-100 border border-orange-200 rounded-xl w-fit p-3 mb-4">
              <Icon className="text-orange-600 size-6" />
            </div>
            <h3 className="font-medium text-xl mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
          </div>
        );
      case "Interview Notes":
        return (
          <div className="border border-neutral-300/80 p-4 rounded-xl hover:shadow-lg transition-all">
            <div className="bg-purple-100 border border-purple-200 rounded-xl w-fit p-3 mb-4">
              <Icon className="text-purple-600 size-6" />
            </div>
            <h3 className="font-medium text-xl mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
          </div>
        );
      case "Contact Management":
        return (
          <div className="border border-neutral-300/80 p-4 rounded-xl hover:shadow-lg transition-all">
            <div className="bg-rose-100 border border-rose-200 rounded-xl w-fit p-3 mb-4">
              <Icon className="text-rose-600 size-6" />
            </div>
            <h3 className="font-medium text-xl mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
          </div>
        );
      case "Quick Actions":
        return (
          <div className="border border-neutral-300/80 p-4 rounded-xl hover:shadow-lg transition-all">
            <div className="bg-fuchsia-100 border border-fuchsia-200 rounded-xl w-fit p-3 mb-4">
              <Icon className="text-fuchsia-600 size-6" />
            </div>
            <h3 className="font-medium text-xl mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
          </div>
        );
    }
  };

  return renderContent();
};

export default FeaturesCard;
