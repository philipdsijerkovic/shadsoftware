import React from "react";
import BackgroundLayout from "../BackgroundLayout";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      features: [
        "5 page website",
        "Responsive design",
        "Basic SEO",
        "1 month support",
      ],
    },
    {
      name: "Professional",
      price: "$2,499",
      features: [
        "10 page website",
        "Advanced design",
        "SEO optimization",
        "3 months support",
        "CMS integration",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced SEO",
        "6 months support",
        "Full CMS",
        "E-commerce ready",
      ],
    },
  ];

  return (
    <BackgroundLayout>
      <section className="py-32 sm:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h1>
            <p className="text-lg text-gray-700">
              Choose the perfect plan for your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BackgroundLayout>
  );
};

export default Pricing;
