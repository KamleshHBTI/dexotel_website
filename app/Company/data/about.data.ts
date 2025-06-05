import { TimelineItem, CoreValue, TeamMember, CultureItem, Achievement, Testimonial } from '../types/about.types';

export const heroContent = {
  title: "Transforming Communication, One Conversation at a Time",
  subtitle: "Building the Future of Business Communication",
  description: "At Dexotel, we're revolutionizing how businesses connect with their customers through innovative communication solutions that drive meaningful engagement and lasting relationships."
};

export const timelineData: TimelineItem[] = [
  {
    year: "2015",
    title: "Our Journey Begins",
    description: "Founded with a vision to revolutionize business communication",
    image: "/images/timeline/founding.jpg"
  },
  {
    year: "2017",
    title: "Market Expansion",
    description: "Expanded operations across multiple regions",
    image: "/images/timeline/expansion.jpg"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched innovative cloud communication solutions",
    image: "/images/timeline/digital.jpg"
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Recognized as industry leader in communication solutions",
    image: "/images/timeline/recognition.jpg"
  }
];

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Innovation",
    description: "Constantly pushing boundaries to create cutting-edge solutions",
    icon: "lightbulb"
  },
  {
    id: 2,
    title: "Customer First",
    description: "Your success is our success",
    icon: "users"
  },
  {
    id: 3,
    title: "Integrity",
    description: "Building trust through transparency and honesty",
    icon: "shield"
  },
  {
    id: 4,
    title: "Excellence",
    description: "Delivering quality in everything we do",
    icon: "star"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO & Co-founder",
    bio: "Visionary leader with 15+ years in tech",
    image: "/images/team/john.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    bio: "Tech innovator with passion for scalable solutions",
    image: "/images/team/sarah.jpg"
  }
];

export const cultureItems: CultureItem[] = [
  {
    id: 1,
    image: "/images/culture/office.jpg",
    caption: "Our vibrant workspace",
    category: "Office"
  },
  {
    id: 2,
    image: "/images/culture/team-event.jpg",
    caption: "Annual team retreat",
    category: "Events"
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: 1000,
    suffix: "+"
  },
  {
    id: 2,
    title: "Countries",
    value: 50,
    suffix: "+"
  },
  {
    id: 3,
    title: "Team Members",
    value: 200,
    suffix: "+"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Brown",
    position: "Director of Operations",
    company: "Tech Solutions Inc",
    quote: "Dexotel has transformed how we communicate with our customers",
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: 2,
    name: "Emily Chen",
    position: "Head of Customer Success",
    company: "Global Retail Co",
    quote: "The best communication platform we've ever used",
    image: "/images/testimonials/emily.jpg"
  }
]; 