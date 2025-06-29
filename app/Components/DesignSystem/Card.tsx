import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: {
    href: string;
    text: string;
  };
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  link,
  className = '',
  children,
}) => {
  const cardContent = (
    <>
      {icon && (
        <div className="mb-4 text-theme-500 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-[#2b7360]">{title}</h3>
      <p className="theme-text">
        {description}
      </p>
      {children}
      {link && (
        <div className="mt-4 flex items-center text-theme font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {link.text}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );

  const cardWrapper = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`bg-white p-6 rounded-lg shadow-lg border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors ${className}`}
    >
      {link ? (
        <Link href={link.href} className="group block hover:bg-theme-50 overflow-hidden">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );

  return cardWrapper;
}; 