"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from './ServicesGrid';
import { serviceDetails } from '@/data/service-details';
import ServiceHero from './ServiceHero';
import ContactSection from '../Contact/ContactSection';

interface ServiceDetailsProps {
  service: Service;
  services: Service[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, services }) => {
  const details = serviceDetails[service.slug];

  if (!details) {
    return <div>Service details not found</div>;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <ServiceHero services={services} />
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              {service.icon}
            </div>
            <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300">{service.description}</p>
          </div>
        </div>
      </motion.section>
      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Process
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {details.processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] border-2 p-6 rounded-lg"
                variants={fadeInUp}
              >
                <div className="text-[#2b7360] text-xl font-bold mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tools & Technologies
          </h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {details.tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-black p-6 rounded-lg text-center group hover:bg-[#2b7360] transition-colors duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-3xl text-[#2b7360] group-hover:text-white transition-colors">
                      <Icon />
                    </div>
                    <span className="font-semibold text-lg group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Key Benefits
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {details.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <div className="text-[#2b7360]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {details.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-black p-6 rounded-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ServiceDetails; 