'use client';
import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import OpenPositions from './components/OpenPositions';
import EmployeeSpotlight from './components/EmployeeSpotlight';

const Career = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <OpenPositions />
      <EmployeeSpotlight />
    </main>
  );
};

export default Career;