import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typography from "@/Components/DesignSystem/Typography";
import { partnerTiers } from "../../data/partnerData";
import Image from "next/image";

const PartnerTiers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Choose Your Partnership Level
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Select the tier that best aligns with your business goals and growth aspirations
          </Typography>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {partnerTiers.map((tier) => (
              <motion.div
                key={tier.id}
                className="flex-none w-[350px] bg-white rounded-xl shadow-lg p-8"
                style={{ scrollSnapAlign: "start" }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-16 h-16 mb-6">
                  <Image
                    src={tier.icon}
                    alt={`${tier.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>

                <Typography variant="h3" className="mb-4">
                  {tier.name}
                </Typography>

                <Typography variant="body2" className="text-gray-600 mb-6">
                  {tier.description}
                </Typography>

                <div className="mb-6">
                  <Typography variant="h4" className="text-sm font-semibold mb-3">
                    Benefits
                  </Typography>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <Typography variant="body2">{benefit}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Typography variant="h4" className="text-sm font-semibold mb-3">
                    Eligibility
                  </Typography>
                  <ul className="space-y-2">
                    {tier.eligibilityCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <Typography variant="body2">{criteria}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PartnerTiers; 