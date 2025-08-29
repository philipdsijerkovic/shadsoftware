import React from "react";

const Section2: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements through in person or virtual meetings.",
      icon: "🔍",
    },
    {
      number: "2",
      title: "Design & Wireframing",
      description:
        "Our team creates intuitive wireframes and stunning visual designs that align with your brand identity.",
      icon: "🎨",
    },
    {
      number: "3",
      title: "Development",
      description:
        "We build your website using modern technologies, ensuring optimal performance and responsive design.",
      icon: "💻",
    },
    {
      number: "4",
      title: "Testing & Optimization",
      description:
        "Rigorous testing across devices and browsers to ensure everything works perfectly before launch.",
      icon: "🔧",
    },
    {
      number: "5",
      title: "Launch & Deployment",
      description:
        "We deploy your website to production and ensure a smooth launch with minimal downtime.",
      icon: "🚀",
    },
    {
      number: "6",
      title: "Support & Maintenance",
      description:
        "Ongoing support, updates, and maintenance to keep your website secure and performing at its best.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-32 sm:py-40 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Your ideas, our{" "}
            <span
              style={{
                background: "linear-gradient(to right, #6b7280, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              process
            </span>
          </p>
          <p className="mt-6 text-lg/8 text-gray-700 max-w-3xl mx-auto">
            From concept to launch, we collaborate with you to create digital
            experiences that captivate your audience and drive results
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-8 lg:p-12"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left Side - Number */}
                <div className="flex items-center gap-6 lg:min-w-[100px]">
                  <span className="text-6xl lg:text-7xl font-extralight text-gray-200">
                    {step.number}
                  </span>
                </div>

                {/* Middle - Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Right Side - Icon */}
                <div className="flex justify-center lg:justify-end lg:min-w-[80px]">
                  <div className="text-4xl lg:text-5xl">{step.icon}</div>
                </div>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 lg:hidden">
                    <div className="w-px h-6 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
