"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Clock, Book, Users } from 'lucide-react';

const culturePoints = [
  {
    title: 'Innovation First',
    description: 'We encourage creative thinking and embrace new ideas.',
    icons: <Brain />,
    color: 'text-theme',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote-friendly environment.',
    icons: <Clock />,
    color: 'text-theme',
  },
  {
    title: 'Continuous Learning',
    description: 'Regular workshops, training sessions, and learning opportunities.',
    icons: <Book />,
    color: 'text-theme',
  },
  {
    title: 'Inclusive Environment',
    description: 'Diverse perspectives are valued and celebrated.',
    icons: <Users />,
    color: 'text-theme',
  },
]

const Culture = () => {
  return (
    <section className="py-20  bg-[#2b7360]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#2b7360]">Our Culture</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in creating an environment where people love to work and grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-theme/20 hover:border-theme transition-colors"
            >
              <h3 className={`text-xl font-bold mb-3 ${point.color}`}>{point.icons} {point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Culture 