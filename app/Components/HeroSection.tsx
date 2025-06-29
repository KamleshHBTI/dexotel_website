import React from 'react';
import { motion } from 'framer-motion';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  illustration?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  illustration,
  variant = 'tertiary',
}) => {
  // Animation variants for staggered animations
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

  // Variant-based styles
  const variantStyles = {
    primary: 'bg-gradient-to-br from-blue-900 to-indigo-800',
    secondary: 'bg-gradient-to-br from-purple-900 to-indigo-800',
    tertiary: 'bg-gradient-to-br from-gray-900 to-slate-800',
  };

  return (
    <section 
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${variantStyles[variant]}`}
      aria-labelledby="hero-title"
    >
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
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transform transition-all duration-300 hover:scale-105"
                role="button"
              >
                {ctaText}
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
          {illustration && (
            <motion.div
              className="flex-1 max-w-lg"
              variants={itemVariants}
            >
              {illustration}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 