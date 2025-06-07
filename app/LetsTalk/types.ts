export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactFormProps {
  formData: ContactFormData;
  errors: ContactFormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface TestimonialData {
  name: string;
  position: string;
  company: string;
  testimonial: string;
}

export interface FAQData {
  question: string;
  answer: string;
} 