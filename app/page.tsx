"use client";
import { useEffect } from 'react';
import FocusIndustries from "@/Components/Services/FocusIndustries";
import Services from "./Services/page";
import ContactForm from "@/Components/ContactForm";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import Testimonials from "@/Components/Testimonials";

const Page = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <Features />
      <FocusIndustries />
      <Services />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Page;
