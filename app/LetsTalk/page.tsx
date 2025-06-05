'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, Clock, Building2, Users } from "lucide-react";

const ContactInfo = () => (
  <div className="md:w-1/2 pr-8">
    <h2 className="text-3xl font-bold text-gray-900">
      Let's Build Something <span className="text-emerald-600">Amazing</span> Together
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Whether you're looking to enhance your customer communication, streamline your business operations,
      or explore innovative solutions, Dexotel is here to help you achieve your goals.
    </p>

    <div className="mt-8 space-y-6">
      <div className="flex items-start space-x-4">
        <div className="bg-emerald-50 p-3 rounded-lg">
          <MapPin className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Our Location</h3>
          <p className="mt-1 text-gray-600">D-45, Cyber City, Gurugram, Haryana, India</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="bg-emerald-50 p-3 rounded-lg">
          <Phone className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Phone Number</h3>
          <p className="mt-1 text-gray-600">+91 9999999999</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="bg-emerald-50 p-3 rounded-lg">
          <Mail className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Email Address</h3>
          <p className="mt-1 text-gray-600">hr@dexotel.com</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="bg-emerald-50 p-3 rounded-lg">
          <Clock className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Business Hours</h3>
          <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
           className="bg-emerald-50 p-3 rounded-lg text-emerald-600 hover:bg-emerald-100 transition-all duration-300">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
           className="bg-emerald-50 p-3 rounded-lg text-emerald-600 hover:bg-emerald-100 transition-all duration-300">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
           className="bg-emerald-50 p-3 rounded-lg text-emerald-600 hover:bg-emerald-100 transition-all duration-300">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
           className="bg-emerald-50 p-3 rounded-lg text-emerald-600 hover:bg-emerald-100 transition-all duration-300">
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
);

const ContactForm = ({ formData, handleChange, handleSubmit }: any) => (
  <div className="md:w-1/2">
    <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Product Manager"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="+91 9999999999"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

const FAQ = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">What services does Dexotel offer?</h3>
        <p className="text-gray-600">Dexotel provides comprehensive communication solutions including cloud telephony, call center software, and business communication tools designed to enhance customer engagement and streamline operations.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I get started with Dexotel?</h3>
        <p className="text-gray-600">Getting started is easy! Simply fill out our contact form, and our team will reach out to understand your requirements and guide you through the implementation process.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer custom solutions?</h3>
        <p className="text-gray-600">Yes, we specialize in creating tailored solutions that meet your specific business needs. Our team works closely with you to develop and implement custom features.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">What kind of support do you provide?</h3>
        <p className="text-gray-600">We offer 24/7 technical support, regular updates, and dedicated account managers to ensure smooth operation and address any concerns you may have.</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
            <p className="text-sm text-gray-600">CEO, TechStart</p>
          </div>
        </div>
        <p className="text-gray-600">"Dexotel's solutions have transformed our customer service operations. Their platform is intuitive and their support team is exceptional."</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Building2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">Michael Chen</h4>
            <p className="text-sm text-gray-600">CTO, Global Solutions</p>
          </div>
        </div>
        <p className="text-gray-600">"The scalability and reliability of Dexotel's services have been crucial for our growing business. Their team's expertise is unmatched."</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
            <p className="text-sm text-gray-600">Operations Manager, Innovate Inc</p>
          </div>
        </div>
        <p className="text-gray-600">"Implementing Dexotel's solutions has significantly improved our customer satisfaction scores. Their platform is powerful yet easy to use."</p>
      </div>
    </div>
  </div>
);

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add form submission logic here
  };

  return (
    <div className="outer-container shadow-top bg-gray-50">
      <div className="container py-16 px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <span className="mb-2 block text-lg font-semibold text-emerald-600">
            Get in Touch
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-[48px]">
            Let's Build Your Next Success Story
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're looking to enhance your customer communication, streamline operations,
            or explore innovative solutions, our team is here to help you achieve your goals.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <ContactInfo />
          <ContactForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>

        {/* Map Section */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg mb-16">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=D-45,Cyber+City,Gurugram,Haryana,India&output=embed"
          />
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </div>
  );
};

export default LetsTalk;
