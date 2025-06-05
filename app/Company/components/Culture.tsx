"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const culturePoints = [
  {
    title: 'Innovation First',
    description: 'We encourage creative thinking and embrace new ideas.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote-friendly environment.',
  },
  {
    title: 'Continuous Learning',
    description: 'Regular workshops, training sessions, and learning opportunities.',
  },
  {
    title: 'Inclusive Environment',
    description: 'Diverse perspectives are valued and celebrated.',
  },
]

const Culture = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Culture</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in creating an environment where people love to work and grow together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturePoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Culture 