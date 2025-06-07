"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/Components/Services/ServicesGrid';
import { ContactFormData, ContactFormErrors } from '@/app/LetsTalk/types';
import ContactForm from '@/app/LetsTalk/components/ContactForm';

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    // Phone validation
    if (!formData.phone.trim()) { 
      newErrors.phone = 'Phone number is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';  
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form changes  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // TODO: Add form submission logic here
    }
  };

    const processSteps = [ 
    {
      title: 'Discovery & Planning',
      description: 'We begin with a thorough analysis of your requirements and create a detailed project roadmap.'
    },
    {
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and creates detailed technical specifications.'
    },
    {
      title: 'Development & Testing',
      description: 'We follow agile development practices with continuous testing and quality assurance.'
    },
    {
      title: 'Deployment & Support',
      description: 'We ensure smooth deployment and provide ongoing maintenance and support.'
    }
  ];

  const tools = [
    'React/Next.js',
    'Node.js',
    'Python',
    'AWS/Azure/GCP',
    'Docker',
    'Kubernetes',
    'MongoDB',
    'PostgreSQL'
  ];

  const benefits = [
    'Expert Team with Proven Track Record',
    'Agile Development Methodology',
    'Transparent Communication',
    'Cost-Effective Solutions',
    'Scalable Architecture',
    '24/7 Support'
  ];

  const faqs = [
    {
      question: `How long does a typical ${service.title} project take?`,
      answer: 'Project timelines vary based on complexity and requirements. We provide detailed estimates during the discovery phase.'
    },
    {
      question: 'What is your development methodology?',
      answer: 'We follow an agile development methodology with regular sprints and client feedback sessions.'
    },
    {
      question: 'Do you provide post-deployment support?',
      answer: 'Yes, we offer comprehensive post-deployment support and maintenance services.'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300">{service.description}</p>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our {service.title} Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#2b7360] text-xl font-bold mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our {service.title} Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-black p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our {service.title} Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#2b7360]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-black p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get Started with {service.title}
            </h2>
            <ContactForm formData={formData} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </div>
  );
} 