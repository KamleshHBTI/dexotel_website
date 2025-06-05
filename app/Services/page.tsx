'use client';

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/data/services'
import SectionTransition from '@/Components/ui/SectionTransition'
import GreenOverlay from '@/Components/ui/GreenOverlay'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <SectionTransition>
      <div className="theme-container">
        <motion.h1 
          className="theme-heading text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
          <div className="w-24 h-1 bg-theme mx-auto mt-4 rounded-full" />
        </motion.h1>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link 
                href={`/Services/${service.slug}`}
                className="theme-card group block hover:bg-theme-50 overflow-hidden"
              >
                <div className="mb-4 text-theme-500 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="theme-subheading group-hover:text-theme transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="theme-text">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-theme font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionTransition>
  )
}

export default Services