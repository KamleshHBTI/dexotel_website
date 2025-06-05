import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Typography from "@/Components/DesignSystem/Typography";
import { partnershipJourney } from "../../data/partnerData";
import Image from "next/image";

const PartnershipJourney = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Your Partnership Journey
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            A step-by-step guide to growing together
          </Typography>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2" />

          {/* Timeline Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {partnershipJourney.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto relative z-10 ${
                    index <= activeStep
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-400 border-2 border-gray-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {index + 1}
                </motion.div>

                {/* Step Content */}
                <div className="text-center">
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Typography variant="h4" className="mb-2">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {step.description}
                  </Typography>
                </div>

                {/* Connecting Line */}
                {index < partnershipJourney.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-6 left-1/2 w-full h-0.5 ${
                      index <= activeStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnershipJourney; 