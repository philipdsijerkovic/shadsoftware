import React from "react";

const Section1: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, scalable web applications built with cutting-edge technology.",
    },
    {
      title: "Mobile Apps",
      description:
        "Intelligent mobile solutions designed for seamless user experiences.",
    },
    {
      title: "Software Solutions",
      description:
        "Custom AI-powered software to automate and optimize your workflows.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Services
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto"></div>
        </div>

        {/* Vertical Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300/60 transition-all duration-500 p-10 rounded-sm hover:bg-white/80"
            >
              {/* Content */}
              <div>
                <h3 className="text-2xl font-light text-black mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
                <button className="text-black text-sm font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-300">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
