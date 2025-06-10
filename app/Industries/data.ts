import { ArrowRight, Database, Heart, ShoppingBag, Zap, Plane, Signal, Car, GraduationCap, Banknote, ShoppingCart, Truck, Home, Hotel, Shield, Factory } from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  heroImage: string;
  heroSubtitle: string;
}

export interface Region {
  id: string;
  name: string;
  countries: string[];
  coordinates: { x: number; y: number };
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;  
  company: string;
  quote: string;
  image: string;
  companyLogo: string;
}
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
export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Empower patients and providers with seamless digital touchpoints for appointments, follow-ups, and health management.",
    icon: iconMapping.Heart,
    heroImage: "/images/industry/hero/Healthcare.svg",
    heroSubtitle: "Enhance care delivery at every stage of the patient journey"
  },
  {
    id: "education",
    name: "Education",
    description: "Foster active learning environments by linking classrooms, campuses, and families for dynamic educational experiences.",
    icon: iconMapping.GraduationCap,
    heroImage: "/images/industry/hero/Education.svg",
    heroSubtitle: "Inspire growth with connected learning solutions"
  },
  {
    id: "fintech",
    name: "Fintech",
    description: "Accelerate financial innovation with platforms that streamline banking, payments, and user verification processes.",
    icon: iconMapping.Banknote,
    heroImage: "/images/industry/hero/Fintech.svg",
    heroSubtitle: "Build trust and agility in digital finance"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Elevate online retail by automating order tracking, customer service, and personalized shopping experiences.",
    icon: iconMapping.ShoppingCart,
    heroImage: "/images/industry/hero/E-commerce.svg",
    heroSubtitle: "Transform shoppers into loyal brand advocates"
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Optimize fleet management and shipment visibility with solutions for real-time tracking and efficient route planning.",
    icon: iconMapping.Truck,
    heroImage: "/images/industry/hero/Logistics.svg",
    heroSubtitle: "Deliver speed and reliability at every mile"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Accelerate transactions with engaging tools for property tours, timely updates, and smooth contract processes.",
    icon: iconMapping.Home,
    heroImage: "/images/industry/hero/Real_Estate.svg",
    heroSubtitle: "Empower property deals through smarter interactions"
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Delight guests with effortless bookings, tailored offers, and personalized support before, during, and after their stay.",
    icon: iconMapping.Hotel,
    heroImage: "/images/industry/hero/Hospitality.svg",
    heroSubtitle: "Make every guest feel at home from reservation to checkout"
  },
  {
    id: "insurance",
    name: "Insurance",
    description: "Simplify claims, policy management, and customer support with digital-first workflows that boost efficiency.",
    icon: iconMapping.Shield,
    heroImage: "/images/industry/hero/Insurance.svg",
    heroSubtitle: "Make protection and peace of mind truly accessible"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Enhance factory floor productivity with instant updates on inventory, maintenance, and production schedules.",
    icon: iconMapping.Factory,
    heroImage: "/images/industry/hero/Manufacturing.svg",
    heroSubtitle: "Streamline operations from supply chain to delivery"
  },
  {
    id: "retail",
    name: "Retail",
    description: "Engage shoppers in-store and online with tailored promotions, product launches, and loyalty programs.",
    icon: iconMapping.ShoppingBag,
    heroImage: "/images/industry/hero/Retail.svg",
    heroSubtitle: "Bring customers closer with memorable retail moments"
  },
  {
    id: "technology",
    name: "Technology",
    description: "Support innovation teams with robust tools for project coordination, product rollouts, and customer support.",
    icon: iconMapping.Signal,
    heroImage: "/images/industry/hero/Technology.svg",
    heroSubtitle: "Accelerate digital progress across every touchpoint"
  },
  {
    id: "energy",
    name: "Energy",
    description: "Manage grid health, outage alerts, and field operations with platforms built for speed and reliability.",
    icon: iconMapping.Zap,
    heroImage: "/images/industry/hero/Energy.svg",
    heroSubtitle: "Power every sector with resilience and transparency"
  },
  {
    id: "travel",
    name: "Travel",
    description: "Guide travelers with real-time booking updates, destination tips, and seamless itinerary management.",
    icon: iconMapping.Plane,
    heroImage: "/images/industry/hero/Travel.svg",
    heroSubtitle: "Make journeys smoother from takeoff to touchdown"
  },
  {
    id: "telecom",
    name: "Telecom",
    description: "Deliver instant account alerts, service information, and feature updates to subscribers at scale.",
    icon: iconMapping.Signal,
    heroImage: "/images/industry/hero/Telecom.svg",
    heroSubtitle: "Enable seamless connectivity in a digital world"
  },
  {
    id: "automotive",
    name: "Automotive",
    description: "Enhance the road experience with automated service reminders, digital brochures, and buyer support tools.",
    icon: iconMapping.Car,
    heroImage: "/images/industry/hero/Automotive.svg",
    heroSubtitle: "Drive customer satisfaction from showroom to service"
  }
];

export const regions: Region[] = [
  {
    id: "na",
    name: "North America",
    countries: ["USA", "Canada"],
    coordinates: { x: 25, y: 35 }
  },
  {
    id: "eu",
    name: "Europe",
    countries: ["UK", "Germany", "France"],
    coordinates: { x: 48, y: 40 }
  },
  {
    id: "asia",
    name: "Asia Pacific",
    countries: ["India", "Singapore", "Japan"],
    coordinates: { x: 70, y: 45 }
  },
  {
    id: "me",
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia"],
    coordinates: { x: 58, y: 48 }
  },
  {
    id: "af",
    name: "Africa",
    countries: ["South Africa", "Nigeria"],
    coordinates: { x: 45, y: 60 }
  }
]; 
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Chief Technology Officer",
    company: "HealthTech Solutions",
    quote: "Dexotel's communication platform has revolutionized how we connect with our patients. The reliability and security features give us complete peace of mind.",
    image: "/images/testimonials/sarah-johnson.jpg",
    companyLogo: "/images/logos/healthtech-solutions.png"
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "VP of Operations",
    company: "EduConnect Global",
    quote: "Since implementing Dexotel's solutions, our student engagement has improved significantly. The platform's flexibility and ease of use are outstanding.",
    image: "/images/testimonials/michael-chen.jpg",
    companyLogo: "/images/logos/educonnect-global.png"
  },

];