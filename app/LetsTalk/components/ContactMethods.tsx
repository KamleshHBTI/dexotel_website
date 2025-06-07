import { Phone, Mail, Share2 } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 9999999999",
    subInfo: "Available 24/7 for urgent support"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "contact@dexotel.com",
    subInfo: "We'll respond within 24 hours"
  },
  {
    icon: Share2,
    title: "Social Media",
    info: "@dexotel",
    subInfo: "Follow us for updates"
  }
];

const ContactMethods = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {contactMethods.map((method, index) => (
        <div
          key={index}
          className={`
            p-6 bg-white rounded-lg shadow-sm 
            transform transition-all duration-300 
            ${hoveredIndex === index ? 'scale-105 shadow-lg' : ''}
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <method.icon className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
          <p className="text-gray-800 font-medium mb-1">{method.info}</p>
          <p className="text-gray-600 text-sm">{method.subInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactMethods; 