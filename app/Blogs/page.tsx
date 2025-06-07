'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BlogSection from '@/Components/Blogs/BlogSection';
import SectionTransition from '@/Components/ui/SectionTransition';
import GreenOverlay from '@/Components/ui/GreenOverlay';

const Blogs = () => {
  return (
    <SectionTransition>
      <div className="theme-container">
        <motion.h1
          className="theme-heading text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Blog
          <div className="w-24 h-1 bg-theme mx-auto mt-4 rounded-full" />
        </motion.h1>
        <BlogSection />
      </div>
    </SectionTransition>
  );
};

export default Blogs;