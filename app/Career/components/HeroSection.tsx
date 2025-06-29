'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HeroIllustration from "@/app/Components/HeroIllustration";

interface JobStats {
  openPositions: number;
  departments: number;
  locations: number;
}

const HeroSection = () => {
  const [stats] = React.useState<JobStats>({
    openPositions: 45,
    departments: 8,
    locations: 5,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Join Our Mission to Transform Communication
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Build the future of customer engagement with a team that's revolutionizing how businesses connect
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 justify-center lg:justify-start mb-8">
              {[
                { label: 'Open Positions', value: stats.openPositions },
                { label: 'Departments', value: stats.departments },
                { label: 'Locations', value: stats.locations },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}+</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a
                href="#opportunities"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transform transition-all duration-300 hover:scale-105"
                role="button"
              >
                Explore Opportunities
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            className="flex-1 max-w-lg"
            variants={itemVariants}
          >
            <HeroIllustration />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 