"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full bg-[#2b7360]">
      <Image
        src="/videos/hero-background-placeholder.png"
        alt="Hero Background"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center h-full text-white text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 relative"
          >
            Building the Future of Communication
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-white"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            We're revolutionizing how businesses connect with their customers through innovative communication solutions.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#2b7360] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Join Our Team
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero 