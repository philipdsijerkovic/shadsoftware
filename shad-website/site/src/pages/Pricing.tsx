import React, { useState } from "react";
import BackgroundLayout from "../BackgroundLayout";

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      id: 0,
      name: "Starter",
      tagline: "Perfect for small businesses",
      price: 700,
      popular: false,
      color: "blue",
      features: [
        { name: "5 page website", included: true },
        { name: "Responsive design", included: true },
        { name: "Basic SEO setup", included: true },
        { name: "1 month support", included: true },
        { name: "Contact forms", included: true },
        { name: "Google Analytics", included: true },
        { name: "CMS integration", included: false },
        { name: "E-commerce", included: false },
        { name: "Advanced SEO", included: false },
        { name: "Custom animations", included: false },
      ],
    },
    {
      id: 1,
      name: "Professional",
      tagline: "Most popular choice",
      price: 1200,
      popular: true,
      color: "blue",
      features: [
        { name: "15 page website", included: true },
        { name: "Advanced responsive design", included: true },
        { name: "SEO optimization", included: true },
        { name: "3 months support", included: true },
        { name: "Contact forms", included: true },
        { name: "Google Analytics", included: true },
        { name: "CMS integration", included: true },
        { name: "Basic e-commerce", included: true },
        { name: "Advanced SEO", included: true },
        { name: "Custom animations", included: false },
      ],
    },
    {
      id: 2,
      name: "Enterprise",
      tagline: "For growing businesses",
      price: "Custom",
      popular: false,
      color: "blue",
      features: [
        { name: "Unlimited pages", included: true },
        { name: "Premium design system", included: true },
        { name: "Advanced SEO suite", included: true },
        { name: "6 months support", included: true },
        { name: "Advanced forms", included: true },
        { name: "Full analytics suite", included: true },
        { name: "Full CMS", included: true },
        { name: "Advanced e-commerce", included: true },
        { name: "Advanced SEO", included: true },
        { name: "Custom animations", included: true },
      ],
    },
  ];

  const formatPrice = (price: number | string) => {
    if (typeof price === "string") {
      return price;
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <BackgroundLayout>
      <section className="py-4 sm:py-8 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All plans include
              hosting, SSL certificate, and our signature support.
            </p>
          </div>

          {/* Hosting Included Badge */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-100/80 backdrop-blur-md border border-green-200/60 rounded-2xl">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-700 font-semibold">
                Hosting Included
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  selectedPlan === plan.id ? "scale-105" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative bg-white/90 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-2xl overflow-hidden transition-all duration-500 ${
                    selectedPlan === plan.id
                      ? "border-blue-500 shadow-blue-500/25"
                      : "border-white/70 hover:border-gray-300"
                  }`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5 transition-opacity duration-500 ${
                      selectedPlan === plan.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{plan.tagline}</p>
                    </div>

                    {/* Price Display */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-5xl font-bold text-gray-900">
                          {formatPrice(plan.price)}
                        </span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        + Hosting Included
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 mb-8 ${
                        selectedPlan === plan.id
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Get Started
                    </button>

                    {/* Features List */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-center mb-6">
                        What's included:
                      </h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center justify-between"
                        >
                          <span
                            className={`text-sm ${
                              feature.included
                                ? "text-gray-700"
                                : "text-gray-400"
                            }`}
                          >
                            {feature.name}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              feature.included
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {feature.included ? "✓" : "×"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-3xl p-8 shadow-2xl overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Compare All Features
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center py-4 px-6">
                        <div className="font-bold text-lg text-gray-900">
                          {plan.name}
                        </div>
                        <div className="text-sm font-medium text-blue-500">
                          {formatPrice(plan.price)}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plans[0].features.map((_, featureIndex) => (
                    <tr
                      key={featureIndex}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-gray-700">
                        {plans[0].features[featureIndex].name}
                      </td>
                      {plans.map((plan) => (
                        <td key={plan.id} className="text-center py-4 px-6">
                          <div
                            className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center ${
                              plan.features[featureIndex].included
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {plan.features[featureIndex].included ? "✓" : "×"}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-blue-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Not sure which plan is right for you?
              </h3>
              <p className="text-blue-100 mb-6">
                Let's have a conversation about your needs and find the perfect
                solution.
              </p>
              <button className="bg-white text-blue-500 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                Schedule a Free Consultation
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              We typically respond to quote requests within 24 hours
            </p>
          </div>
        </div>
      </section>
    </BackgroundLayout>
  );
};

export default Pricing;
