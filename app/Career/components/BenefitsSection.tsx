'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaPlane, FaLaptopCode, FaHandshake, FaChartLine } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHeartbeat className="w-8 h-8" />,
    title: 'Health & Wellness',
    description: 'Comprehensive medical coverage, mental health support, and wellness programs for you and your family.'
  },
  {
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities with dedicated budget for courses, conferences, and certifications.'
  },
  {
    icon: <FaPlane className="w-8 h-8" />,
    title: 'Flexible Time Off',
    description: 'Unlimited PTO policy with work-life balance at its core, including paid sabbaticals.'
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: 'Remote Work',
    description: 'Hybrid work culture with state-of-the-art home office setup and flexible schedules.'
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Equity & Benefits',
    description: 'Competitive compensation with stock options and comprehensive benefits package.'
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Career Growth',
    description: 'Clear career progression paths with regular performance reviews and mentorship programs.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Join Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer more than just a job. Join us for a fulfilling career with amazing benefits and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 