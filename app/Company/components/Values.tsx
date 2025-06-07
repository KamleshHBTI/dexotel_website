"use client";

import React from 'react'
import { motion } from 'framer-motion';

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    icon: "💡",
  },
  {
    title: "Customer First",
    description: "Our customers' success is our success. We prioritize their needs in everything we do.",
    icon: "🤝",
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in all our dealings.",
    icon: "🎯",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work and never settle for mediocrity.",
    icon: "⭐",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a collaborative environment.",
    icon: "🤲",
  },
  {
    title: "Sustainability",
    description: "We are committed to sustainable practices and responsible business operations.",
    icon: "🌱",
  },
]

const Values = () => {
  return (
    <section className="py-20 bg-[#2b7360]/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2b7360]">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#2b7360]">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values 