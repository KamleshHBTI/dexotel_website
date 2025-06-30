'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { industries } from '@/app/industries/data';
import { ContactFormData, ContactFormErrors } from '@/app/letsTalk/types';
import ContactForm from '@/app/letsTalk/components/ContactForm';

const IndustryDetails = () => {
  const { slug } = useParams();
  const industry = industries.find(ind => ind.id === slug);
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<ContactFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic here
  };

  if (!industry) {
    return <div>Industry not found</div>;
  }

  const processSteps = [
    {
      title: 'Requirements Analysis',
      description: 'We begin with a thorough analysis of your industry-specific needs and create a detailed solution roadmap.'
    },
    {
      title: 'Solution Design',
      description: 'Our team designs a customized solution that addresses your unique industry challenges.'
    },
    {
      title: 'Implementation',
      description: 'We follow a systematic approach to deploy and integrate the solution into your existing workflow.'
    },
    {
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous optimization to ensure maximum value from your investment.'
    }
  ];

  const tools = [
    'Cloud Infrastructure',
    'API Integration',
    'Analytics Dashboard',
    'Security Protocols',
    'Automation Tools',
    'Mobile Solutions',
    'CRM Integration',
    'Custom Workflows'
  ];

  const benefits = [
    'Industry-Specific Solutions',
    'Seamless Integration',
    'Real-time Analytics',
    '24/7 Support',
    'Scalable Architecture',
    'Enterprise Security'
  ];

  const faqs = [
    {
      question: `How can Dexotel help my ${industry.name} business?`,
      answer: 'Our solutions are tailored to address specific industry challenges while ensuring seamless communication and operational efficiency.'
    },
    {
      question: 'What integration options are available?',
      answer: 'We offer flexible integration options with major business systems and custom APIs for specific requirements.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures and comply with industry-specific regulations and standards.'
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
            <h1 className="text-5xl font-bold mb-6">{industry.name} Solutions</h1>
            <p className="text-xl text-gray-300">{industry.heroSubtitle}</p>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our {industry.name} Process
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
            Our {industry.name} Tools & Technologies
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
            Why Choose Our {industry.name} Solutions
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
              Get Started with {industry.name} Solutions
            </h2>
            <ContactForm formData={formData} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetails; 