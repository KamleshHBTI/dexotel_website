import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Testimonial } from '@/app/industries/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 relative"
    >
      <div className="flex items-center mb-6">
        <div className="relative w-16 h-16 mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600">
            {testimonial.title} at {testimonial.company}
          </p>
        </div>
      </div>
      
      <blockquote className="text-gray-800 text-lg mb-8 italic">
        "{testimonial.quote}"
      </blockquote>

      <div className="relative h-12 w-32 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
        <Image
          src={testimonial.companyLogo}
          alt={testimonial.company}
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 