import { Users, Building2 } from "lucide-react";
import { TestimonialData } from '../types';

const testimonialData: TestimonialData[] = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart",
    testimonial: "Dexotel's solutions have transformed our customer service operations. Their platform is intuitive and their support team is exceptional."
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Global Solutions",
    testimonial: "The scalability and reliability of Dexotel's services have been crucial for our growing business. Their team's expertise is unmatched."
  },
  {
    name: "Priya Sharma",
    position: "Operations Manager",
    company: "Innovate Inc",
    testimonial: "Implementing Dexotel's solutions has significantly improved our customer satisfaction scores. Their platform is powerful yet easy to use."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialData }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
        {testimonial.position.includes("CEO") || testimonial.position.includes("CTO") ? (
          <Building2 className="w-6 h-6 text-emerald-600" />
        ) : (
          <Users className="w-6 h-6 text-emerald-600" />
        )}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
      </div>
    </div>
    <p className="text-gray-600">"{testimonial.testimonial}"</p>
  </div>
);

const Testimonials = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonialData.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials; 