'use client';

import React, { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';
import { ContactFormData, ContactFormErrors } from '../LetsTalk/types';
import HeroIllustration from "../Components/HeroIllustration";
import HeroSection from "../Components/HeroSection";
import ServicesSection from '../Components/Services/ServicesSection';
import ContactPageContent from '@/Components/Contact/ContactPageContent';
import Header from '../LetsTalk/components/Header';

const Services = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic here
  };

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Explore our comprehensive range of services designed to meet your business communication needs."
        ctaText="Explore Services"
        ctaLink="#services"
        illustration={<HeroIllustration />}
        variant="secondary"
      />
      <ServicesSection
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Header />
      <ContactPageContent
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Services;