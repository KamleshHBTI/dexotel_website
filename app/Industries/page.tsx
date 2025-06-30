'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Section from '@/components/DesignSystem/Section';  
import IndustryCarousel from '@/app/Components/industries/IndustryCarousel';
import IndustryGrid from '@/app/Components/industries/IndustryGrid';
import TestimonialCard from '@/app/Components/industries/TestimonialCard';
import { industries, testimonials, regions } from '@/app/industries/data';
import * as XLSX from 'xlsx';
import { ContactFormData, ContactFormErrors } from '../letsTalk/types';
import ContactBenefits from '../letsTalk/components/ContactBenefits';
import ContactForm from '../letsTalk/components/ContactForm';
import ContactSection from '@/components/contact/ContactSection';
import Header from '../letsTalk/components/Header';

const Industries = () => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();
      
      // Convert form data to worksheet
      const wsData = [
        ['Name', 'Email', 'Phone', 'Message', 'Submission Date'],
        [
          formData.name,
          formData.email,
          formData.phone,
          formData.message,
          new Date().toLocaleString()
        ]
      ];
      
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      
      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Contact Form Submissions');
      
      // Save the file
      XLSX.writeFile(wb, 'contact_form_submissions.xlsx');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

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
      <div className="outer-container shadow-top bg-theme/6">
      <div className="container py-16 px-4 mx-auto max-w-7xl mb-12">
        <Header />
      <div className="flex flex-col md:flex-row gap-12 mb-8">
          <ContactBenefits />
          <ContactForm
            formData={formData} 
            errors={errors}
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>
        <ContactSection />
      </div>
    </div>
      {/* <Section background="white" spacing="lg">
        <div className="theme-container">
          <div className="text-center mb-12">
            <h2 className="theme-heading">
              We Serve Industries across the Globe
            </h2>
            <p className="theme-text mt-4">
              Delivering excellence in communication solutions worldwide
            </p>
          </div>
          <WorldMap regions={regions} />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Client logos */}
            {/* {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="theme-card hover-grow relative h-12">
                <img
                  src={`/images/companies/client-${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))} */}
          {/* </div>
        </div>
      </Section>  */}
    </>
  );
};

export default Industries;