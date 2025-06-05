import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Typography from "@/Components/DesignSystem/Typography";
import Button from "@/Components/DesignSystem/Button";

interface PartnerApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  companyName: string;
  website: string;
  industry: string;
  employeeCount: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
};

const steps = [
  {
    title: "Company Information",
    fields: ["companyName", "website", "industry", "employeeCount"],
  },
  {
    title: "Contact Details",
    fields: ["contactName", "email", "phone"],
  },
  {
    title: "Additional Information",
    fields: ["message"],
  },
];

const PartnerApplicationModal: React.FC<PartnerApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
    onClose();
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        >
          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <Typography variant="h2" className="text-2xl font-semibold mb-4">
                Partner Application - {steps[currentStep].title}
              </Typography>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className={`flex-1 h-2 rounded-full mx-1 ${
                        index <= currentStep ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentStep === 0 && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Company Name
                          </label>
                          <input
                            type="text"
                            {...register("companyName", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                          {errors.companyName && (
                            <span className="text-red-500 text-sm">This field is required</span>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Website
                          </label>
                          <input
                            type="url"
                            {...register("website", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Industry
                          </label>
                          <select
                            {...register("industry", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          >
                            <option value="">Select Industry</option>
                            <option value="technology">Technology</option>
                            <option value="finance">Finance</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="retail">Retail</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Number of Employees
                          </label>
                          <select
                            {...register("employeeCount", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          >
                            <option value="">Select Range</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="500+">500+</option>
                          </select>
                        </div>
                      </>
                    )}

                    {currentStep === 1 && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Contact Name
                          </label>
                          <input
                            type="text"
                            {...register("contactName", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Phone
                          </label>
                          <input
                            type="tel"
                            {...register("phone", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </>
                    )}

                    {currentStep === 2 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Additional Information
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Tell us about your goals and how you'd like to partner with us..."
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex justify-between">
                  <Button
                    variant="secondary"
                    onClick={currentStep === 0 ? onClose : prevStep}
                  >
                    {currentStep === 0 ? "Cancel" : "Previous"}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={currentStep === steps.length - 1 ? handleSubmit(onSubmit) : nextStep}
                  >
                    {currentStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerApplicationModal; 