import { ChangeEvent, FormEvent, useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string;
}

export interface FormErrors {
  [key: string]: string;
}

interface UseFormProps {
  initialValues: FormData;
  onSubmit: (data: FormData) => void;
  validate?: (data: FormData) => FormErrors;
}

export const useForm = ({ initialValues, onSubmit, validate }: UseFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(formData);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(formData);
      }
    } else {
      onSubmit(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    setFormData,
    setErrors,
  };
};

export const validateContactForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}; 