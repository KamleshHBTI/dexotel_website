"use client";

import React from 'react';
import { Service } from '@/components/services/ServicesGrid';
import { services } from '@/data/services';
import ContactForm from '@/components/contact/ContactSection';
import ServiceDetails from '@/components/services/ServiceDetails';
import { Metadata } from 'next';
import { Divide } from 'lucide-react';

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
      <ServiceDetails service={service} services={services} />
  );
};

export default ServicePage; 