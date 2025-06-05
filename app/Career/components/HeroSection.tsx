'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface JobStats {
  openPositions: number;
  departments: number;
  locations: number;
}

const HeroSection = () => {
  const [stats, setStats] = useState<JobStats>({
    openPositions: 45,
    departments: 8,
    locations: 5,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url(/images/career/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          Join Our Mission to Transform Communication
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl"
        >
          Build the future of customer engagement with a team that's revolutionizing how businesses connect
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: 'Open Positions', value: stats.openPositions },
            { label: 'Departments', value: stats.departments },
            { label: 'Locations', value: stats.locations },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}+</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
        >
          Explore Opportunities
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection; 