import React from "react";

const Section2: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
          Your ideas, our designs
        </h2>

        {/* Secondary Text */}
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
          We take your ideas and turn them into attractive, modern web user
          interfaces your customers will enjoy
        </p>
      </div>
    </section>
  );
};

export default Section2;
