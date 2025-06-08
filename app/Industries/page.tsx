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
        <div className="theme-container text-center mb-12">
          <h2 className="theme-heading">
            Industries We Serve
          </h2>
          <p className="theme-subtitle text-theme-500 mb-12">
            Discover how our solutions transform communications across different sectors
          </p>
        </div>
        <IndustryGrid industries={industries} />
      </Section>

      <Section background="secondary" spacing="lg">
        <div className="theme-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="theme-container">
          <div className="text-center mb-12">
            <Typography variant="h2" className="theme-heading" animate>
              We Serve Industries across the Globe
            </Typography>
            <Typography variant="body1" className="theme-text mt-4" animate>
              Delivering excellence in communication solutions worldwide
            </Typography>
          </div>
          <WorldMap regions={regions} />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Client logos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="theme-card hover-grow relative h-12">
                <img
                  src={`/images/companies/client-${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Industries;