"use client";

import React from 'react'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Culture from './components/Culture'
import Team from './components/Team'
import Timeline from './components/Timeline'
import Values from './components/Values'
import ContactSection from '@/components/contact/ContactSection';
import { useState, ChangeEvent, FormEvent } from 'react';
import { ContactFormData, ContactFormErrors } from '../letsTalk/types';
import Header from '../letsTalk/components/Header';
import ContactBenefits from '../letsTalk/components/ContactBenefits';
import ContactForm from '../letsTalk/components/ContactForm';

const Company = () => {
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
  };

  return (
    <main className="min-h-screen">
      <Hero/>
      <Achievements />
      <Culture />
      <Team />
      <Timeline />
      <Values />
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
    </main>
  )
}

export default Company