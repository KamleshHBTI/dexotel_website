"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FocusIndustries from "@/Components/Services/FocusIndustries";
import Services from "./Services/page";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import Testimonials from "@/Components/Testimonials";
import ContactForm from './LetsTalk/components/ContactForm';
import { ContactFormData, ContactFormErrors } from './LetsTalk/types';
import ContactBenefits from './LetsTalk/components/ContactBenefits';
import Header from './LetsTalk/components/Header';
import { motion } from 'framer-motion';


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
      <Services/>
      <Testimonials />
      <Header />
      <div className="theme-container">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <ContactBenefits />
          <ContactForm 
            formData={formData} 
            errors={errors}
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
