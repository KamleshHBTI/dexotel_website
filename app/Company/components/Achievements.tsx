"use client";

import React from 'react'
import { motion } from 'framer-motion'

const achievements = [
  {
    number: '1M+',
    label: 'Active Users',
  },
  {
    number: '50+',
    label: 'Countries',
  },
  {
    number: '99.9%',
    label: 'Uptime',
  },
  {
    number: '24/7',
    label: 'Support',
  },
]

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements 