"use client";
import React from "react";
import { ArrowRight, Database, Heart, ShoppingBag, Zap, Plane, Signal, Car } from "lucide-react";

// Define types for industries
interface Industry {
  name: string;
  icon: keyof typeof iconMapping; // Ensures only valid keys are used
}

// Mapping industry names to Lucide icons
const iconMapping = {
  digitalization: Database,
  health: Heart,
  crm: ShoppingBag,
  data: Zap,
  travel: Plane,
  devops: Signal,
  mobile: Car,
};

// Industry list
const industries: Industry[] = [
  { name: "HiTech", icon: "digitalization" },
  { name: "Healthcare & Life Sciences", icon: "health" },
  { name: "Retail & CPG", icon: "crm" },
  { name: "Energy & Utilities", icon: "data" },
  { name: "Banking, Financial Services & Insurance", icon: "travel" },
  { name: "Travel, Hospitality & Logistics", icon: "travel" },
  { name: "Telecom & Media", icon: "devops" },
  { name: "Automotive", icon: "mobile" },
];

// Define props type for IndustryCard
interface IndustryCardProps {
  name: string;
  icon: keyof typeof iconMapping;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, icon }) => {
  const IconComponent = iconMapping[icon];

  return (
    <div className="rounded-2xl border p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Render icon dynamically */}
          {IconComponent && <IconComponent className="text-[#2b7360] text-2xl" />}
          <span className="font-semibold text-lg">{name}</span>
        </div>
        <ArrowRight className="text-[#2b7360]" />
      </div>
    </div>
  );
};

const FocusIndustries: React.FC = () => (
  <div className="py-12">
    <div className="text-center mb-8">
      <h2 className="mb-3 text-3xl font-bold text-[#2b7360]">Focus Industries</h2>
      <p className="text-gray-600">
        A trusted partner for industry leaders and digital natives across every major sector of the global economy.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
      {industries.map((industry, index) => (
        <IndustryCard key={index} name={industry.name} icon={industry.icon} />
      ))}
    </div>
  </div>
);

export default FocusIndustries;