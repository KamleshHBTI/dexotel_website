'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/data/services'
import ContactSection from '@/Components/Contact/ContactSection';
import Header from '../LetsTalk/components/Header';
import ContactForm from '../LetsTalk/components/ContactForm';
import ContactBenefits from '../LetsTalk/components/ContactBenefits';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <section className="theme-section theme-section-bg">  
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
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors"
            >
              <Link
                href={`/Services/${service.slug}`}
                className="group block hover:bg-theme-50 overflow-hidden"
              >
                <div className="mb-4 text-theme-500 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2b7360]">{service.title}</h3>
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
        </div>
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <ContactBenefits />
          <ContactForm 
            formData={formData} 
            errors={errors}
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>
        <ContactSection />
      </div>
    </section>
  )
}

export default Services