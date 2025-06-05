export interface PartnerTier {
  id: string;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  eligibilityCriteria: string[];
}

export interface FeaturedPartner {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  caseStudy: {
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
    }[];
  };
}

export interface JourneyMilestone {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const partnerTiers: PartnerTier[] = [
  {
    id: "silver",
    name: "Silver Partner",
    icon: "/images/partners/silver-tier.svg",
    description: "Perfect for growing businesses ready to scale their communication solutions",
    benefits: [
      "Priority technical support",
      "Partner portal access",
      "Marketing collateral",
      "Training resources"
    ],
    eligibilityCriteria: [
      "Annual revenue > $500K",
      "Dedicated support team",
      "Industry certification"
    ]
  },
  {
    id: "gold",
    name: "Gold Partner",
    icon: "/images/partners/gold-tier.svg",
    description: "Advanced partnership tier for established enterprises",
    benefits: [
      "Dedicated account manager",
      "Co-marketing opportunities",
      "Advanced API access",
      "Custom integration support"
    ],
    eligibilityCriteria: [
      "Annual revenue > $2M",
      "Technical certification",
      "Customer success team"
    ]
  },
  {
    id: "platinum",
    name: "Platinum Partner",
    icon: "/images/partners/platinum-tier.svg",
    description: "Elite partnership level for industry leaders",
    benefits: [
      "Strategic business planning",
      "Custom development support",
      "Executive sponsorship",
      "Early access to features"
    ],
    eligibilityCriteria: [
      "Annual revenue > $5M",
      "Global presence",
      "Innovation leadership"
    ]
  }
];

export const featuredPartners: FeaturedPartner[] = [
  {
    id: "1",
    name: "TechCorp Solutions",
    logo: "/images/partners/techcorp.svg",
    industry: "Technology",
    description: "Leading provider of enterprise software solutions",
    caseStudy: {
      challenge: "Scaling customer support operations across multiple regions",
      solution: "Implemented Dexotel's omnichannel communication platform",
      results: [
        { metric: "Customer Satisfaction", value: "95%" },
        { metric: "Response Time", value: "-60%" },
        { metric: "Operating Costs", value: "-40%" }
      ]
    }
  },
  {
    id: "2",
    name: "FinServ Global",
    logo: "/images/partners/finserv.svg",
    industry: "Financial Services",
    description: "International financial services provider",
    caseStudy: {
      challenge: "Secure and compliant customer communication",
      solution: "Deployed Dexotel's encrypted messaging system",
      results: [
        { metric: "Security Compliance", value: "100%" },
        { metric: "Customer Engagement", value: "+75%" },
        { metric: "Processing Time", value: "-50%" }
      ]
    }
  },
  {
    id: "3",
    name: "HealthCare Plus",
    logo: "/images/partners/healthcare.svg",
    industry: "Healthcare",
    description: "Modern healthcare solutions provider",
    caseStudy: {
      challenge: "Patient engagement and appointment management",
      solution: "Integrated Dexotel's automated messaging system",
      results: [
        { metric: "Appointment Adherence", value: "+80%" },
        { metric: "Patient Satisfaction", value: "92%" },
        { metric: "Staff Efficiency", value: "+65%" }
      ]
    }
  }
];

export const partnershipJourney: JourneyMilestone[] = [
  {
    id: "1",
    title: "Application & Assessment",
    description: "Complete our partner application and assessment process",
    icon: "/images/partners/application.svg"
  },
  {
    id: "2",
    title: "Onboarding & Training",
    description: "Access comprehensive training and certification programs",
    icon: "/images/partners/onboarding.svg"
  },
  {
    id: "3",
    title: "Integration & Development",
    description: "Implement solutions and develop custom integrations",
    icon: "/images/partners/integration.svg"
  },
  {
    id: "4",
    title: "Growth & Scaling",
    description: "Expand your business with ongoing support and resources",
    icon: "/images/partners/growth.svg"
  }
]; 