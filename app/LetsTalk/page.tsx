"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";


const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="w-full rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#2b7360] text-center">Let us Talk</h1>
        <p className="text-gray-600 text-center mt-2">
          Fill out the form below, and we will get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#2b7360] text-white py-3 rounded-lg hover:bg-[#235d50] transition"
            >
              Send Message <Send className="ml-2" size={18} />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#2b7360]" />
              <p className="text-gray-700">123 Business St Road, Gurgoan, India</p>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="text-[#2b7360]" />
              <p className="text-gray-700">contact@dexotel.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-[#2b7360]" />
              <p className="text-gray-700">+91 9542491764</p>
            </div>

            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-[#2b7360] hover:underline">LinkedIn</a>
              <a href="#" className="text-[#2b7360] hover:underline">Twitter</a>
              <a href="#" className="text-[#2b7360] hover:underline">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
