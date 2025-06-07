"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import '@/styles/theme.css';
import SectionTransition from '../ui/SectionTransition';


export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const ServicesGrid: React.FC = () => {
  return (
    <SectionTransition>
    <section className="theme-section theme-section-bg">
      <div className="theme-container">
        <div className="text-center mb-12">
          <h2 className="theme-title">Our Services</h2>
          <p className="theme-subtitle">
            Empowering businesses with cutting-edge technology solutions to drive growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="theme-card h-full group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 text-theme">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#2b7360] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#2b7360] text-[#2b7360] rounded-lg hover:bg-[#2b7360] hover:text-white transition-all duration-300"
          >
            Our Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        </div>
      </section>
    </SectionTransition>
  );
}; 