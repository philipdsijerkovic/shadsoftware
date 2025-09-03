import React from "react";
import { motion } from "framer-motion";

const Section3: React.FC = () => {
  const features = [
    {
      title: "Expert Team",
      description: [
        "Years of industry experience",
        "Skilled developers and designers",
        "Proven track record of success",
        "Dedicated project management",
      ],
      image: "/web.svg",
    },
    {
      title: "Modern Technology",
      description: [
        "Latest frameworks and tools",
        "Fast and secure solutions",
        "Scalable architecture",
        "Future-proof development",
      ],
      image: "/gear.svg",
    },
    {
      title: "Small Business",
      description: [
        "I'm a recent college graduate from UNC Greensboro with a passion for web development. I found my passion for web development while attending school and have been studying it for over 5 years now.",
        "My mission is to help individuals and businesses bring their ideas to life online through clean, responsive, and creative websites. Whether it's a simple landing page, a fully custom business site, or ongoing support, I focus on creating solutions that are tailored to each client's unique needs.",
      ],
      image: "/me.png",
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
        duration: 0.4,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 w-screen ml-[calc(-50vw+50%-0.5rem)] overflow-hidden">
      {/* Waves SVG Background */}
      <div className="absolute -inset-20 z-0 -translate-y-55 mt-10">
        <img
          src="/layered-waves-haikei.svg"
          alt="Background waves"
          className="w-full h-full object-cover scale-135"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 -translate-y-12">
        {/* Title */}
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl lg:text-balance"
            variants={slideInFromLeft}
          >
            Why{" "}
            <span
              style={{
                background: "linear-gradient(to right, #6b7280, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              choose us
            </span>
          </motion.p>
          <motion.p
            className="mt-6 text-xl/9 text-gray-700"
            variants={slideInFromLeft}
          >
            We combine technical expertise with creative vision to deliver
            exceptional digital solutions that drive real business results.
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 - Square */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 shadow-lg shadow-black/10 aspect-square flex flex-col text-center"
            variants={cardVariants}
          >
            {/* Image at top center */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-2xl">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {features[0].title}
            </h3>

            {/* Bullet points */}
            <ul className="space-y-3 text-gray-600 text-base leading-relaxed">
              {features[0].description.map((point, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 - Square */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 shadow-lg shadow-black/10 aspect-square flex flex-col text-center"
            variants={cardVariants}
          >
            {/* Image at top center */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-2xl">
                <img
                  src={features[1].image}
                  alt={features[1].title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {features[1].title}
            </h3>

            {/* Bullet points */}
            <ul className="space-y-3 text-gray-600 text-base leading-relaxed">
              {features[1].description.map((point, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 - Rectangular with large image on left */}
          <motion.div
            className="lg:col-span-2 relative bg-white rounded-3xl p-8 shadow-lg shadow-black/10 min-h-[200px] flex items-center gap-8"
            variants={cardVariants}
          >
            {/* Large Image on Left */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 lg:w-48 lg:h-48 flex items-center justify-center rounded-3xl">
                <img
                  src={features[2].image}
                  alt={features[2].title}
                  className="w-40 h-40 lg:w-60 lg:h-60 object-contain rounded-3xl"
                />
              </div>
            </div>

            {/* Content on Right */}
            <div className="flex-1">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {features[2].title}
              </h3>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>{features[2].description[0]}</p>
                <p>{features[2].description[1]}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
