import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Industry } from '@/app/Industries/data';

interface IndustryGridProps {
  industries: Industry[];
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ industries }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {industries.map((industry) => (
        <motion.div
          key={industry.id}
          variants={item}
          className="theme-card hover-lift group"
        >
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 mr-4 p-2 bg-theme-50 rounded-lg group-hover:bg-theme-100 transition-colors duration-300">
              <Image
                src={`/images/industries/${industry.icon}`}
                alt={industry.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="theme-subheading">{industry.name}</h3>
          </div>
          <p className="theme-text">{industry.description}</p>
          <div className="mt-4 flex items-center text-theme font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IndustryGrid; 