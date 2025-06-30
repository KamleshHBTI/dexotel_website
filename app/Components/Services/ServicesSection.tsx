import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Card } from '../DesignSystem/Card';
import { ContactFormData, ContactFormErrors } from '../../letsTalk/types';

interface ServicesSectionProps {
  formData: ContactFormData;
  errors: ContactFormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
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
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={{
                href: `/services/${service.slug}`,
                text: 'Learn more'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 