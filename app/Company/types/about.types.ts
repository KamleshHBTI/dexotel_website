export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface CultureItem {
  id: number;
  image: string;
  caption: string;
  category: string;
}

export interface Achievement {
  id: number;
  title: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
} 