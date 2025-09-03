import React from "react";
import { motion } from "framer-motion";
import tailwindLogo from "/public/tailwind.png";
import shadcnLogo from "/public/shadcn.png";

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: "React",
      image: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      ),
    },
    {
      name: "HTML5",
      image: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
      ),
    },
    {
      name: "Tailwind CSS",
      image: <img src={tailwindLogo} alt="Tailwind CSS" />,
    },
    {
      name: "Figma",
      image: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
      ),
    },
    {
      name: "shadcn/ui",
      image: <img src={shadcnLogo} alt="shadcn/ui" />,
    },
    {
      name: "Python",
      image: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
        />
      ),
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

  const techVariants = {
    hidden: { x: -60, opacity: 0, filter: "blur(6px)" },
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
      className="w-full min-h-screen py-28 sm:py-36 px-6"
      style={{
        backgroundColor: "#f3f7fb",
        position: "relative",
        margin: 0,
        padding: "7rem 1.5rem",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#f3f7fb" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
            variants={slideInFromLeft}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(to right, #6b7280, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tech Stack
            </span>
          </motion.p>
          <motion.p
            className="mt-6 text-lg/8 text-gray-700 max-w-3xl mx-auto"
            variants={slideInFromLeft}
          >
            We leverage cutting-edge technologies and frameworks to build
            robust, scalable, and modern web applications that deliver
            exceptional performance.
          </motion.p>
        </motion.div>

        {/* Technology Images */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={techVariants}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20">
                {typeof tech.image === "string" ? (
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  tech.image
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
