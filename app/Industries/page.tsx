'use client';

import React from 'react';
import Section from '@/Components/DesignSystem/Section';
import Typography from '@/Components/DesignSystem/Typography';
import IndustryCarousel from '@/app/Components/Industries/IndustryCarousel';
import IndustryGrid from '@/app/Components/Industries/IndustryGrid';
import TestimonialCard from '@/app/Components/Industries/TestimonialCard';
import WorldMap from '@/app/Components/Industries/WorldMap';

import { industries, testimonials, regions } from './data';

const Industries = () => {
  return (
    <>
      <IndustryCarousel industries={industries} />

      <Section background="white" spacing="lg">
        <div className="text-center mb-12">
          <Typography variant="h1" animate>
            Industries We Serve
          </Typography>
          <Typography variant="body1" className="mt-4 text-gray-600" animate>
            Discover how our solutions transform communications across different sectors
          </Typography>
        </div>
        <IndustryGrid industries={industries} />
      </Section>

      <Section background="secondary" spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="text-center mb-12">
          <Typography variant="h2" animate>
            We Serve Industries across the Globe
          </Typography>
          <Typography variant="body1" className="mt-4 text-gray-600" animate>
            Delivering excellence in communication solutions worldwide
          </Typography>
        </div>
        <WorldMap regions={regions} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Client logos will be mapped here */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative h-12 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img
                src={`/images/logos/client-${index + 1}.png`}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Industries;