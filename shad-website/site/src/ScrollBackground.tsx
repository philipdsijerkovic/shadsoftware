import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Left side animations
  const leftY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const leftY2 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const leftScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.8, 1.5, 0.9, 1.2]
  );

  // Right side animations
  const rightY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rightY2 = useTransform(scrollYProgress, [0, 1], [-50, -400]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [360, -360]);
  const rightScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [1, 0.7, 1.3, 0.9]
  );

  // Opacity animations
  const leftOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.1, 0.3, 0.2, 0.4, 0.1]
  );
  const rightOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.2, 0.4, 0.3, 0.15]
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* LEFT SIDE ANIMATIONS */}

      {/* Complex Geometric Shape - Left Top */}
      <motion.div
        className="absolute top-20 left-[-50px] w-60 h-60"
        style={{
          y: leftY1,
          rotate: leftRotate,
          scale: leftScale,
          opacity: leftOpacity,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M50,10 L80,35 L90,65 L60,85 L20,85 L10,65 L40,35 Z"
            fill="url(#leftGradient1)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="0.5"
            animate={{
              d: [
                "M50,10 L80,35 L90,65 L60,85 L20,85 L10,65 L40,35 Z",
                "M50,5 L85,30 L95,70 L70,90 L30,90 L5,70 L35,30 Z",
                "M50,15 L75,40 L85,60 L55,80 L25,80 L15,60 L45,40 Z",
                "M50,10 L80,35 L90,65 L60,85 L20,85 L10,65 L40,35 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient
              id="leftGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Rotating Hexagon with Inner Animation - Left Middle */}
      <motion.div
        className="absolute top-1/2 left-[-30px] w-48 h-48"
        style={{
          y: leftY2,
          rotate: useTransform(leftRotate, (value) => -value * 0.5),
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polygon
            points="50,5 93.3,25 93.3,75 50,95 6.7,75 6.7,25"
            fill="url(#leftGradient2)"
            stroke="rgba(139, 92, 246, 0.4)"
            strokeWidth="1"
            animate={{
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="15"
            fill="rgba(59, 130, 246, 0.6)"
            animate={{
              r: [10, 20, 15, 25, 10],
              opacity: [0.6, 0.3, 0.8, 0.2, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <radialGradient id="leftGradient2">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Morphing Star - Left Bottom */}
      <motion.div
        className="absolute bottom-40 left-[-20px] w-44 h-44"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [50, -250]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 540]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.4, 0.9]),
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M50,10 L58,35 L85,35 L65,55 L75,85 L50,70 L25,85 L35,55 L15,35 L42,35 Z"
            fill="url(#leftGradient3)"
            animate={{
              d: [
                "M50,10 L58,35 L85,35 L65,55 L75,85 L50,70 L25,85 L35,55 L15,35 L42,35 Z",
                "M50,5 L62,30 L90,30 L70,50 L80,90 L50,75 L20,90 L30,50 L10,30 L38,30 Z",
                "M50,15 L54,40 L80,40 L60,60 L70,80 L50,65 L30,80 L40,60 L20,40 L46,40 Z",
                "M50,10 L58,35 L85,35 L65,55 L75,85 L50,70 L25,85 L35,55 L15,35 L42,35 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient
              id="leftGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* RIGHT SIDE ANIMATIONS */}

      {/* Complex Spiral - Right Top */}
      <motion.div
        className="absolute top-32 right-[-40px] w-56 h-56"
        style={{
          y: rightY1,
          rotate: rightRotate,
          scale: rightScale,
          opacity: rightOpacity,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M50,50 Q75,25 50,10 Q25,25 50,50 Q75,75 50,90 Q25,75 50,50"
            fill="none"
            stroke="url(#rightGradient1)"
            strokeWidth="2"
            animate={{
              d: [
                "M50,50 Q75,25 50,10 Q25,25 50,50 Q75,75 50,90 Q25,75 50,50",
                "M50,50 Q85,15 50,5 Q15,15 50,50 Q85,85 50,95 Q15,85 50,50",
                "M50,50 Q70,30 50,15 Q30,30 50,50 Q70,70 50,85 Q30,70 50,50",
                "M50,50 Q75,25 50,10 Q25,25 50,50 Q75,75 50,90 Q25,75 50,50",
              ],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="5"
            fill="rgba(139, 92, 246, 0.8)"
            animate={{
              r: [3, 8, 5, 12, 3],
              cx: [50, 55, 45, 50],
              cy: [50, 45, 55, 50],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient
              id="rightGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Animated Mandala - Right Middle */}
      <motion.div
        className="absolute top-1/2 right-[-50px] w-52 h-52"
        style={{
          y: rightY2,
          rotate: useTransform(rightRotate, (value) => value * 0.3),
          scale: useTransform(
            scrollYProgress,
            [0, 0.3, 0.7, 1],
            [0.8, 1.3, 0.9, 1.1]
          ),
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="50"
              cy="50"
              rx="30"
              ry="8"
              fill="url(#rightGradient2)"
              transform={`rotate(${i * 45} 50 50)`}
              animate={{
                rx: [25, 35, 20, 40, 25],
                ry: [6, 12, 4, 14, 6],
                opacity: [0.3, 0.7, 0.2, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          <defs>
            <radialGradient id="rightGradient2">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Flowing DNA Helix - Right Bottom */}
      <motion.div
        className="absolute bottom-32 right-[-30px] w-40 h-80"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [100, -350]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
        }}
      >
        <svg viewBox="0 0 40 80" className="w-full h-full">
          <motion.path
            d="M20,0 Q30,10 20,20 Q10,30 20,40 Q30,50 20,60 Q10,70 20,80"
            fill="none"
            stroke="url(#rightGradient3)"
            strokeWidth="3"
            animate={{
              d: [
                "M20,0 Q30,10 20,20 Q10,30 20,40 Q30,50 20,60 Q10,70 20,80",
                "M20,0 Q35,15 20,30 Q5,45 20,60 Q35,75 20,80",
                "M20,0 Q25,5 20,10 Q15,15 20,20 Q25,25 20,30 Q15,35 20,40 Q25,45 20,50 Q15,55 20,60 Q25,65 20,70 Q15,75 20,80",
                "M20,0 Q30,10 20,20 Q10,30 20,40 Q30,50 20,60 Q10,70 20,80",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M20,0 Q10,10 20,20 Q30,30 20,40 Q10,50 20,60 Q30,70 20,80"
            fill="none"
            stroke="url(#rightGradient4)"
            strokeWidth="2"
            opacity="0.6"
            animate={{
              d: [
                "M20,0 Q10,10 20,20 Q30,30 20,40 Q10,50 20,60 Q30,70 20,80",
                "M20,0 Q5,15 20,30 Q35,45 20,60 Q5,75 20,80",
                "M20,0 Q15,5 20,10 Q25,15 20,20 Q15,25 20,30 Q25,35 20,40 Q15,45 20,50 Q25,55 20,60 Q15,65 20,70 Q25,75 20,80",
                "M20,0 Q10,10 20,20 Q30,30 20,40 Q10,50 20,60 Q30,70 20,80",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <defs>
            <linearGradient
              id="rightGradient3"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="rightGradient4"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Enhanced Flowing Lines Across Screen */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <motion.path
          d="M-100,400 Q300,200 600,400 Q900,600 1300,400"
          stroke="url(#flowGradient1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-100,300 Q400,100 800,300 Q1200,500 1300,300"
          stroke="url(#flowGradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#EC4899" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default ScrollBackground;
