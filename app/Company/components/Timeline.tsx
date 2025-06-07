"use client";

import React from 'react'
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded operations to 50+ countries worldwide',
  },
  {
    year: '2023',
    title: 'One Million Users',
    description: 'Reached the milestone of serving over 1 million active users',
  },
  {
    year: '2022',
    title: 'Product Innovation',
    description: 'Launched revolutionary new communication features',
  },
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Started our journey to transform business communication',
  },
]

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#2b7360]"
        >
          Our Journey
        </motion.h2>
        
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#2b7360]"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : ''}`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className="w-4 h-4 bg-[#2b7360] rounded-full"
                      whileInView={{ scale: [1, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline 