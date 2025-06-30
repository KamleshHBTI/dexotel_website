'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BlogSection from '@/components/blog/BlogSection';
import HeroSection from "../Components/HeroSection";
import HeroIllustration from "../Components/HeroIllustration";

const Blog = () => {
  return (
    <div>
      <HeroSection
        title="Insights & Updates"
        subtitle="Stay informed with our latest articles, industry insights, and expert perspectives on communication technology."
        ctaText="Read Latest"
        ctaLink="#blog-posts"
        illustration={<HeroIllustration />}
        variant="tertiary"
      />
      <div className="theme-container theme-section theme-section-bg">
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
    </div>
  );
};

export default Blog;