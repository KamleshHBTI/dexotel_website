import React from 'react';
import { motion } from 'framer-motion';
import { Service } from './ServicesGrid';

interface ServiceHeroProps {
  services: Service[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ services }) => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
        >
          <span className="block">Discover</span>
          <span className="block mt-2">Develop</span>
          <span className="block mt-2">Deploy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Unlock the true potential of your business with our digital engineering services.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Let's Discuss Opportunities
        </motion.button>
      </div>

      {/* Service Categories Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm py-6 rounded-t-3xl"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <motion.button
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full text-white hover:bg-gray-800 transition-colors"
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero; 