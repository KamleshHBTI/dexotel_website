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
      {industries.map((industry, index) => (
        <motion.div 
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors"
            >
              <div className="text-4xl mb-4">{industry.icon && <industry.icon className="text-[#2b7360] text-2xl" />}</div>
              <h3 className="text-xl font-bold mb-3 text-[#2b7360]">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
      ))}
    </motion.div>
  );
};

export default IndustryGrid; 