'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

const departments = ['Engineering', 'Product', 'Sales', 'Marketing', 'Customer Success', 'Operations'];
const locations = ['Remote', 'Bangalore', 'Mumbai', 'Delhi', 'Hybrid'];

// Mock data - replace with API call
const mockPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '5+ years'
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years'
  },
  // Add more mock positions as needed
];

const OpenPositions = () => {
  const [positions, setPositions] = useState<JobPosition[]>(mockPositions);
  const [filters, setFilters] = useState({
    department: '',
    location: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (type: 'department' | 'location', value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value === prev[type] ? '' : value
    }));
  };

  const filteredPositions = positions.filter(position => {
    const matchesDepartment = !filters.department || position.department === filters.department;
    const matchesLocation = !filters.location || position.location === filters.location;
    const matchesSearch = !searchTerm || 
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-theme">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our team and help shape the future of business communication
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search positions..."
            className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <div className="space-x-2">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => handleFilterChange('department', dept)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    filters.department === dept
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <div className="space-x-2">
              {locations.map(loc => (
                <button
                  key={loc}
                  onClick={() => handleFilterChange('location', loc)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    filters.location === loc
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPositions.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow border-theme border-2 border-solid border-theme-600 hover:border-theme-700 "
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {position.department}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📍</span> {position.location}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">⏰</span> {position.type}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">💼</span> {position.experience}
                  </p>
                </div>

                <button className="w-full bg-theme-600 hover:bg-theme-900 text-white py-2 px-4 rounded-lg transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OpenPositions; 