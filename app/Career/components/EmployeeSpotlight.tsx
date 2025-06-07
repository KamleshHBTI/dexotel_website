'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    image: '/images/career/employee-1.jpg',
    quote: "At Dexotel, innovation isn't just a buzzword—it's our daily reality.",
    story: "I joined Dexotel 3 years ago, and it's been an incredible journey of growth and innovation. The culture here truly empowers you to think big and make an impact."
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Tech Lead',
    department: 'Engineering',
    image: '/images/career/employee-2.jpg',
    quote: "The technical challenges we solve here are both exciting and meaningful.",
    story: "Working at Dexotel has given me the opportunity to work with cutting-edge technology while solving real customer problems. The engineering culture here is second to none."
  },
  {
    id: 3,
    name: 'Sarah Khan',
    role: 'Customer Success Manager',
    department: 'Customer Success',
    image: '/images/career/employee-3.jpg',
    quote: "Every day brings new opportunities to make a difference in our customers' lives.",
    story: "The most rewarding part of my role is seeing how our solutions transform our customers' businesses. We're not just providing a service—we're building partnerships."
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                  <img
                    src={employees[currentIndex].image}
                    alt={employees[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{employees[currentIndex].name}</h3>
                  <p className="text-blue-600 font-medium">{employees[currentIndex].role}</p>
                  <p className="text-gray-500">{employees[currentIndex].department}</p>
                </div>

                <blockquote className="text-2xl font-light italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  "{employees[currentIndex].quote}"
                </blockquote>

                <p className="text-gray-600 leading-relaxed">
                  {employees[currentIndex].story}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            →
          </button>

          <div className="flex justify-center items-center space-x-2 mt-8">
            {employees.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
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