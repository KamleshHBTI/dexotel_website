import React from 'react';
import { 
  Smartphone, 
  Code, 
  Network, 
  Lightbulb,
  MessageSquare,
  GitBranch,
  Cloud
} from 'lucide-react';
import { Service } from '@/Components/Services/ServicesGrid';

export const services: Service[] = [
  {
    id: '1',
    title: 'Mobile App Development',
    description: 'We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.',
    icon: React.createElement(Smartphone, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'mobile-app-development'
  },
  {
    id: '2',
    title: 'Software Development',
    description: 'From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.',
    icon: React.createElement(Code, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'software-development'
  },
  {
    id: '3',
    title: 'Digital Transformation',
    description: 'We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.',
    icon: React.createElement(Network, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'digital-transformation'
  },
  {
    id: '4',
    title: 'Ideation And Design Strategy',
    description: 'Our strategic ideation and design processes ensure that your digital products are not only functional but also well-resonated with users.',
    icon: React.createElement(Lightbulb, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'ideation-and-design'
  },
  {
    id: '5',
    title: 'IT Consulting',
    description: 'We provide expert IT consulting services to help your organization navigate complex technology decisions and align IT strategies with business objectives.',
    icon: React.createElement(MessageSquare, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'it-consulting'
  },
  {
    id: '6',
    title: 'DevOps',
    description: 'Our DevOps services streamline development and operations to accelerate your project timelines and improve the overall product quality.',
    icon: React.createElement(GitBranch, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'devops'
  },
  {
    id: '7',
    title: 'Cloud Managed Services',
    description: 'We manage your cloud infrastructure end-to-end, ensuring it is optimized, secure, and cost-effective; allowing you to focus on strategic business activities.',
    icon: React.createElement(Cloud, { className: "w-8 h-8 text-[#2b7360]" }),
    slug: 'cloud-managed-services'
  }
]; 