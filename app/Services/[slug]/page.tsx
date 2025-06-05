"use client";

import React from 'react';
import { Service } from '@/Components/Services/ServicesGrid';
import { services } from '@/data/services';
import ContactForm from '@/Components/ContactForm';
import ServiceDetails from '@/Components/Services/ServiceDetails';
import { Metadata } from 'next';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServicePage: React.FC<ServicePageProps> = async ({ params }) => {
  const resolvedParams = await params;
  
  const service = services.find((s: Service) => s.slug === resolvedParams.slug);

  // Create metadata for the page
  const metadata: Metadata = {
    title: `${service?.title || 'Service'} | Dexotel`,
    description: service?.description || 'Service description'
  };
  console.log('Page metadata:', metadata);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <ServiceDetails service={service} />
      <section className="py-16 bg-theme-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-theme">
              Get Started with {service.title}
            </h2>
            <div className="theme-card bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage; 