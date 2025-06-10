import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
    >
      <div className="text-4xl text-primary-600 dark:text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      delay: 0.2
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      content: 'contact@dexotel.com',
      delay: 0.4
    },
    {
      icon: <FaGlobe />,
      title: 'Follow Us',
      content: '@dexotel',
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-lg shadow-lg border-2 border-theme hover:border-[#2b7360] transition-colors dark:bg-theme/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl theme-heading font-bold mb-4">Let's get in touch!</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? We're here to help you achieve your goals.
            Reach out to us through any of these channels.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors"
            >
              <ContactCard key={index} {...info} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 