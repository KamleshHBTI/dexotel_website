export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  heroImage: string;
  heroSubtitle: string;
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

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Streamline patient communications and appointment management with secure, HIPAA-compliant solutions.",
    icon: "/icons/healthcare.svg",
    heroImage: "/images/industries/healthcare.jpg",
    heroSubtitle: "Transform patient engagement with secure communication solutions"
  },
  {
    id: "education",
    name: "Education",
    description: "Connect students, parents, and staff with reliable communication tools designed for educational institutions.",
    icon: "/icons/education.svg",
    heroImage: "/images/industries/education.jpg",
    heroSubtitle: "Enhance learning experiences through seamless communication"
  },
  {
    id: "fintech",
    name: "Fintech",
    description: "Secure and reliable communication solutions for financial services and technology companies.",
    icon: "/icons/fintech.svg",
    heroImage: "/images/industries/fintech.jpg",
    heroSubtitle: "Power financial communications with enterprise-grade security"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Enhance customer experience with automated order updates and support communication.",
    icon: "/icons/ecommerce.svg",
    heroImage: "/images/industries/ecommerce.jpg",
    heroSubtitle: "Drive customer satisfaction with seamless communication"
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Streamline delivery updates and fleet communication with reliable messaging solutions.",
    icon: "/icons/logistics.svg",
    heroImage: "/images/industries/logistics.jpg",
    heroSubtitle: "Optimize operations with real-time communication"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Connect agents, buyers, and sellers with professional communication tools.",
    icon: "/icons/real-estate.svg",
    heroImage: "/images/industries/real-estate.jpg",
    heroSubtitle: "Transform property dealings with efficient communication"
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Enhance guest experience with seamless booking and service communications.",
    icon: "/icons/hospitality.svg",
    heroImage: "/images/industries/hospitality.jpg",
    heroSubtitle: "Elevate guest experiences through personalized communication"
  },
  {
    id: "insurance",
    name: "Insurance",
    description: "Streamline claims processing and policy updates with reliable communication.",
    icon: "/icons/insurance.svg",
    heroImage: "/images/industries/insurance.jpg",
    heroSubtitle: "Simplify insurance processes with effective communication"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Optimize supply chain and production communications with reliable solutions.",
    icon: "/icons/manufacturing.svg",
    heroImage: "/images/industries/manufacturing.jpg",
    heroSubtitle: "Streamline operations with integrated communication"
  },
  {
    id: "retail",
    name: "Retail",
    description: "Enhance customer engagement and loyalty with omnichannel communication.",
    icon: "/icons/retail.svg",
    heroImage: "/images/industries/retail.jpg",
    heroSubtitle: "Build lasting customer relationships through effective communication"
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
  }
];

export const regions = [
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