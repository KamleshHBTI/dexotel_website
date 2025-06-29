"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FocusIndustries from "@/Components/Services/FocusIndustries";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import Testimonials from "@/Components/Testimonials";
import { ContactFormData, ContactFormErrors } from './LetsTalk/types';
import Header from './LetsTalk/components/Header';
import ServicesSection from './Components/Services/ServicesSection';
import ContactPageContent from '@/Components/Contact/ContactPageContent';


const Page = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // TODO: Add form submission logic here
    }
  };

    return (
    <main className="min-h-screen">
      <HeroSection />
      <Features />
      <FocusIndustries />
      <ServicesSection
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Testimonials />
      <Header />
      <ContactPageContent
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default Page;
