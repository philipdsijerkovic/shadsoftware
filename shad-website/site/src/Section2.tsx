import React from "react";

const Section2: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-base/7 font-semibold text-gray-600 mb-4">
          Our Process
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Your ideas, our{" "}
          <span
            style={{
              background: "linear-gradient(to right, #6b7280, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            designs
          </span>
        </p>

        {/* Secondary Text */}
        <p className="mt-6 text-lg/8 text-gray-700 max-w-3xl mx-auto">
          We partner with you through every step of development, turning your concepts into polished digital solutions that exceed expectations
        </p>
      </div>
    </section>
  );
};

export default Section2;
