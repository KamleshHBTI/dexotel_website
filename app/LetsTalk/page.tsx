// "use client";
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";


// const LetsTalk = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="flex items-center justify-center px-6 py-8">
//       <div className="w-full rounded-lg p-8">
//         <h1 className="text-3xl font-bold text-[#2b7360] text-center">Let us Talk</h1>
//         <p className="text-gray-600 text-center mt-2">
//           Fill out the form below, and we will get back to you as soon as possible.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

          
//           <div className="space-y-4">
//             <div className="contactHeading">
//               <h2 className="text-2xl font-bold gap-2">Kickstart your journey with Dexotel.</h2>
//               <p>Whether you create software products or leverage technology for business solutions, Dexotel can help drive and accelerate your success.</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <MapPin className="text-[#2b7360]" />
//               <p className="text-gray-700">123 Business St Road, Gurgoan, India</p>
//             </div>

//             <div className="flex items-center space-x-3">
//               <Mail className="text-[#2b7360]" />
//               <p className="text-gray-700">contact@dexotel.com</p>
//             </div>

//             <div className="flex items-center space-x-3">
//               <Phone className="text-[#2b7360]" />
//               <p className="text-gray-700">+91 9542491764</p>
//             </div>

//             <div className="mt-6 flex space-x-4">
//               <a href="#" className="text-[#2b7360] hover:underline">LinkedIn</a>
//               <a href="#" className="text-[#2b7360] hover:underline">Twitter</a>
//               <a href="#" className="text-[#2b7360] hover:underline">Facebook</a>
//             </div>
//           </div>


//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center bg-[#2b7360] text-white py-3 rounded-lg hover:bg-[#235d50] transition"
//             >
//               Send Message <Send className="ml-2" size={18} />
//             </button>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LetsTalk;



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
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
                    <Linkedin className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                    <Twitter className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                    <Facebook className="w-6 h-6 text-gray-700 hover:scale-110" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                    <Instagram className="w-6 h-6 text-gray-700 hover:scale-110" />
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
    </div>
  );
};

export default LetsTalk;
