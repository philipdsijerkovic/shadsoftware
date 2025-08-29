import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
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

  const slideInFromLeftDelayed = {
    hidden: { x: -80, opacity: 0, filter: "blur(8px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative h-screen w-screen ml-[calc(-50vw+50%)] overflow-hidden">
      {/* Background gradient for this section only */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gradientbottom.png"
          alt="Background gradient"
          className="w-full h-full object-cover opacity-17 scale-105 translate-x-4"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen px-4 -mt-24">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-black leading-tight"
            variants={slideInFromLeft}
          >
            Build. Launch. Grow.
            <br />
            <span className="whitespace-nowrap">Your </span>
            <TypeAnimation
              sequence={[
                "small business",
                2000,
                "startup",
                2000,
                "e-commerce store",
                2000,
                "growing company",
                2000,
                "digital presence",
                2000,
                "online success",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                display: "inline-block",
                background: "linear-gradient(to right, #6b7280, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
              }}
              repeat={Infinity}
              cursor={true}
            />
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-xl text-gray-600 font-medium"
            variants={slideInFromLeft}
          >
            Request a quote or go to our interactive quote tool for more
            information.
          </motion.p>

          {/* Email input with buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center max-w-xl mx-auto"
            variants={slideInFromLeftDelayed}
          >
            <div className="relative w-full sm:w-[350px] sm:flex-shrink-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 pr-20 rounded-full bg-gray-300/30 border border-gray-300/50 text-gray-800 placeholder-gray-500 focus:ring-0 focus:border-transparent"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors font-semibold">
                Submit
              </button>
            </div>
            <button className="px-6 py-3 bg-gray-300/30 border border-gray-300/50 text-gray-700 rounded-full hover:bg-gray-100/50 transition-colors whitespace-nowrap font-semibold">
              Interactive Quote Tool
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
