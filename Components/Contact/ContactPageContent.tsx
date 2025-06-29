import React from "react";
import ContactBenefits from '@/app/LetsTalk/components/ContactBenefits';    
import ContactForm from '@/app/LetsTalk/components/ContactForm';
import Separator from '@/app/Components/DesignSystem/Separator';    

interface ContactPageContentProps {
  formData: any;
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactPageContent: React.FC<ContactPageContentProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}) => (
  <div className="theme-container"> 
    <div className="flex flex-col md:flex-row gap-12 mb-16">
      <ContactBenefits />
      <Separator orientation="vertical" className="hidden md:block" />
      <ContactForm 
        formData={formData} 
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  </div>
);

export default ContactPageContent;
