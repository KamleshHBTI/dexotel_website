import React from 'react'
import Link from 'next/link'
import { services } from '@/data/services'
  
const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link 
            href={`/Services/${service.slug}`} 
            key={service.id}
            className="bg-[#1a1a1a] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-300"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold mb-3">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services