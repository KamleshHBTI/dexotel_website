"use client";
import React from "react";
import { ArrowRight, Database, Heart, ShoppingBag, Zap, Plane, Signal, Car, GraduationCap, Banknote, ShoppingCart, Truck, Home, Hotel, Shield, Factory } from "lucide-react";
import { motion } from 'framer-motion';

// Define types for industries
interface Industry {
  name: string;
  icon: keyof typeof iconMapping;
}

const industries: Industry[] = [
  { name: "Healthcare", icon: "Heart" },
  { name: "Retail", icon: "ShoppingBag" },
  { name: "Technology", icon: "Database" },
  { name: "Energy", icon: "Zap" },
  { name: "Travel", icon: "Plane" },
  { name: "Telecom", icon: "Signal" },
  { name: "Automotive", icon: "Car" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Fintech", icon: "Banknote" },
  { name: "E-commerce", icon: "ShoppingCart" },
  { name: "Logistics", icon: "Truck" },
  { name: "Real Estate", icon: "Home" },
  { name: "Hospitality", icon: "Hotel" },
  { name: "Insurance", icon: "Shield" },
  { name: "Manufacturing", icon: "Factory" }
];

const iconMapping = {
  Heart,
  ShoppingBag,
  Database,
  Zap,
  Plane,
  Signal,
  Car,
  GraduationCap,
  Banknote,
  ShoppingCart,
  Truck,
  Home,
  Hotel,
  Shield,
  Factory
};

interface IndustryCardProps {
  name: string;
  icon: keyof typeof iconMapping;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, icon }) => {
  const IconComponent = iconMapping[icon];

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="theme-card group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {IconComponent && <IconComponent className="text-[#2b7360] text-2xl" />}
          <span className="font-semibold text-lg group-hover:text-[#2b7360] transition-colors">{name}</span>
        </div>
        <ArrowRight className="text-[#2b7360]" />
      </div>
    </motion.div>
  );
};

const FocusIndustries = () => {
  return (
      <div className="theme-container text-center">
        <div className="text-center">
          <h2 className="theme-heading">Industries We Serve</h2>
          <p className="theme-subtitle text-theme-500 mb-12">
            Delivering specialized solutions across diverse sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IndustryCard {...industry} />
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default FocusIndustries;