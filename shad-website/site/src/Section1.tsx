import React from "react";
import { motion } from "framer-motion";

const Section1: React.FC = () => {
  const services = [
    {
      title: "Website Design",
      description:
        "Modern custom designs made for your brand. All designs are responsive and made with the latest technologies for optimal performance.",
      badges: ["Responsive", "Modern", "Fast"],
      image: "/web.svg",
    },
    {
      title: "Mobile Apps",
      description:
        "Intelligent mobile solutions designed for seamless user experiences across iOS and Android platforms.",
      badges: ["iOS", "Android", "Cross-platform"],
      image: "/phone.svg",
    },
    {
      title: "Maintenance",
      description:
        "Website maintenance and support services to keep your site modern, secure, and running smoothly.",
      badges: ["Updates", "Custom", "Support"],
      image: "/gear.svg",
    },
    {
      title: "Miscellaneous",
      description:
        "Have another technical issue that needs fixing? Contact us, we're here to help!",
      badges: ["Repair", "Troubleshooting", "Support"],
      image: "/hammer.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0, filter: "blur(10px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { x: -80, opacity: 0, filter: "blur(8px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative py-24 sm:py-32 w-screen ml-[calc(-50vw+50%-0.5rem)] overflow-hidden"
      style={{ backgroundColor: "#d3dfe9" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
            variants={slideInFromLeft}
          >
            Everything you need to{" "}
            <span
              style={{
                background: "linear-gradient(to right, #6b7280, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              grow your business
            </span>
          </motion.p>
          <motion.p
            className="mt-6 text-lg/8 text-gray-700"
            variants={slideInFromLeft}
          >
            We offer a comprehensive suite of services to help your business
            succeed.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:shadow-black/10"
              variants={cardVariants}
            >
              <div className="flex gap-6 h-full">
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {service.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 rounded-xl to-gray-300 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
