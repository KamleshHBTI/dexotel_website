'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";


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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
  };
  return (
    <div className="outer-container shadow-top">
        <div className="container py-16">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Dexotel
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
                Contact Us
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Have questions or need assistance? Our team is here to help!  
                Reach out to us for inquiries, support, or collaboration opportunities.  
                We’d love to hear from you.
              </p>
            </div>
          </div>
        </div>

          <div className="flex flex-col md:flex-row mx-auto">
            {/* Left Side - Text & Contact Info */}
            <div className="md:w-1/2 pr-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Begin your adventure with <span className="text-black">Dexotel</span>
              </h2>
              <p className="mt-2 text-gray-600">
                Whether you develop software products or use technology to implement business solutions for your enterprise,
                <br />Dexotel can help advance and accelerate your business outcomes.
              </p>

              <div className="mt-4 space-y-2">
                <p className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="ml-2">D-45, Cyber City, Gurugram, Haryana, India</span>
                </p>
                <p className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="ml-2">+91 9999999999</span>
                </p>
                <p className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="ml-2">hr@dexotel.com</span>
                </p>
              </div>

               {/* Social Media Icons */}
                <div className="mt-4 flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                    <Instagram className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
                    <Linkedin className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                    <Twitter className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                    <Facebook className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
                />

                {/* Job Title & Company */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Email & Mobile Number */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative w-full h-96 overflow-hidden rounded-lg mb-10">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=D-45,Cyber+City,Gurugram,Haryana,India&output=embed"
          ></iframe>
        </div>
    </div>
  );
};

export default LetsTalk;
