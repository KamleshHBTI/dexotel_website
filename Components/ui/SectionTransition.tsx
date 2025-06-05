'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionTransition = ({ children, className = '', delay = 0 }: SectionTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`theme-section ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition; 