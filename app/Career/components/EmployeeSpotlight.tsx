'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  quote: string;
  story: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Senior Product Manager',
    department: 'Product',
    image: '/images/career/team/priya-sharma.jpg',
    quote: "At Dexotel, innovation isn't just a buzzword—it's our daily reality.",
    story: "I joined Dexotel 3 years ago, and it's been an incredible journey of growth and innovation. The culture here truly empowers you to think big and make an impact."
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Tech Lead',
    department: 'Engineering',
    image: '/images/career/team/rahul-verma.jpg',
    quote: "The technical challenges we solve here are both exciting and meaningful.",
    story: "Working at Dexotel has given me the opportunity to work with cutting-edge technology while solving real customer problems. The engineering culture here is second to none."
  },
  {
    id: 3,
    name: 'Sarah Khan',
    role: 'Customer Success Manager',
    department: 'Customer Success',
    image: '/images/career/team/sarah-khan.jpg',
    quote: "Every day brings new opportunities to make a difference in our customers' lives.",
    story: "The most rewarding part of my role is seeing how our solutions transform our customers' businesses. We're not just providing a service—we're building partnerships."
  },
  {
    id: 4,
    name: 'Arun Patel',
    role: 'Solutions Architect',
    department: 'Engineering',
    image: '/images/career/team/arun-patel.jpg',
    quote: "We're building the future of communication, one solution at a time.",
    story: "What I love about Dexotel is how we're constantly pushing the boundaries of what's possible. Every project is an opportunity to innovate and create something truly impactful."
  }
];

const EmployeeSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % employees.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % employees.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + employees.length) % employees.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="theme-section bg-gradient-to-b from-theme-900 to-theme-950 text-white">
      <div className="theme-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="theme-heading text-white">Meet Our Team</h2>
          <div className="w-24 h-1 bg-theme mx-auto mt-4 rounded-full" />
          <p className="theme-text text-gray-300 max-w-2xl mx-auto mt-4">
            Get to know the amazing people behind Dexotel's success
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-8"
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square overflow-hidden rounded-2xl theme-card">
                  <div className="absolute inset-0 bg-gradient-to-t from-theme/40 to-transparent z-10" />
                  <Image
                    src={employees[currentIndex].image}
                    alt={employees[currentIndex].name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{employees[currentIndex].name}</h3>
                  <p className="text-theme font-medium">{employees[currentIndex].role}</p>
                  <p className="text-gray-400">{employees[currentIndex].department}</p>
                </div>

                <blockquote className="text-2xl font-light italic text-gray-300 border-l-4 border-theme pl-4">
                  "{employees[currentIndex].quote}"
                </blockquote>

                <p className="theme-text text-gray-400 leading-relaxed">
                  {employees[currentIndex].story}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-theme/20 hover:bg-theme p-3 rounded-full shadow-lg text-white transition-colors"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-theme/20 hover:bg-theme p-3 rounded-full shadow-lg text-white transition-colors"
          >
            →
          </button>

          <div className="flex justify-center items-center space-x-2 mt-8">
            {employees.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-theme w-6' : 'bg-gray-600 hover:bg-theme/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSpotlight; 