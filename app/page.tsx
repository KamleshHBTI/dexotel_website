"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FocusIndustries from "@/Components/Services/FocusIndustries";
import Services from "./Services/page";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import Testimonials from "@/Components/Testimonials";
import { ContactFormData, ContactFormErrors } from './LetsTalk/types';
import LetsTalk from './LetsTalk/page';

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
      <Services/>
      <Testimonials />
      <LetsTalk />
    </main>
  );
};

export default Page;
