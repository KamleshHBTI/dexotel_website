'use client';
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-4">
        Subscribe to our newsletter for the latest updates and insights.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-theme text-white rounded-lg hover:bg-theme transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter; 