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
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src={industry.icon}
                alt={industry.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
          </div>
          <p className="text-gray-600">{industry.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IndustryGrid; 