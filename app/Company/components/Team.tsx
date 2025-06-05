"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/team/ceo.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/team/cto.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Product',
    image: '/team/product-head.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Operations',
    image: '/team/operations-head.jpg',
  },
]

const Team = () => {
  return (
    <section className="py-20  bg-[#2b7360]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the people who are driving our vision forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team 