import { FAQData } from '../types';

const faqData: FAQData[] = [
  {
    question: "What services does Dexotel offer?",
    answer: "Dexotel provides comprehensive communication solutions including cloud telephony, call center software, and business communication tools designed to enhance customer engagement and streamline operations."
  },
  {
    question: "How can I get started with Dexotel?",
    answer: "Getting started is easy! Simply fill out our contact form, and our team will reach out to understand your requirements and guide you through the implementation process."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we specialize in creating tailored solutions that meet your specific business needs. Our team works closely with you to develop and implement custom features."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, regular updates, and dedicated account managers to ensure smooth operation and address any concerns you may have."
  }
];

const FAQ = () => (
  <div className="mt-16">
    <h2 className="theme-heading text-center mb-12">Frequently Asked Questions</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {faqData.map((faq, index) => (
        <div key={index} className="theme-card hover-lift">
          <h3 className="theme-subheading mb-3">{faq.question}</h3>
          <p className="theme-text">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ; 