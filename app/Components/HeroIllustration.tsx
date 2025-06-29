import React from 'react';
import { motion } from 'framer-motion';

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Animated circles in the background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-white/10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white/15"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Central icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroIllustration; 