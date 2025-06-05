import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@/Components/DesignSystem/Typography";
import { featuredPartners } from "../../data/partnerData";
import Image from "next/image";

interface ExpandedPartner {
  id: string;
  isExpanded: boolean;
}

const FeaturedPartners = () => {
  const [expandedPartners, setExpandedPartners] = useState<ExpandedPartner[]>([]);

  const togglePartner = (partnerId: string) => {
    setExpandedPartners((prev) => {
      const isCurrentlyExpanded = prev.some((p) => p.id === partnerId);
      if (isCurrentlyExpanded) {
        return prev.filter((p) => p.id !== partnerId);
      }
      return [...prev, { id: partnerId, isExpanded: true }];
    });
  };

  const isExpanded = (partnerId: string) =>
    expandedPartners.some((p) => p.id === partnerId);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Success Stories
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Discover how our partners are transforming their businesses with Dexotel
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPartners.map((partner) => (
            <motion.div
              key={partner.id}
              layout
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                isExpanded(partner.id) ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => togglePartner(partner.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-32 h-12">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    {partner.industry}
                  </span>
                </div>

                <Typography variant="h3" className="mb-3">
                  {partner.name}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {partner.description}
                </Typography>

                <AnimatePresence>
                  {isExpanded(partner.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6"
                    >
                      <div className="border-t pt-6">
                        <div className="mb-6">
                          <Typography variant="h4" className="text-sm font-semibold mb-2">
                            Challenge
                          </Typography>
                          <Typography variant="body2" className="text-gray-600">
                            {partner.caseStudy.challenge}
                          </Typography>
                        </div>

                        <div className="mb-6">
                          <Typography variant="h4" className="text-sm font-semibold mb-2">
                            Solution
                          </Typography>
                          <Typography variant="body2" className="text-gray-600">
                            {partner.caseStudy.solution}
                          </Typography>
                        </div>

                        <div>
                          <Typography variant="h4" className="text-sm font-semibold mb-4">
                            Results
                          </Typography>
                          <div className="grid grid-cols-3 gap-4">
                            {partner.caseStudy.results.map((result, index) => (
                              <div
                                key={index}
                                className="text-center p-4 bg-gray-50 rounded-lg"
                              >
                                <Typography
                                  variant="h3"
                                  className="text-2xl font-bold text-blue-600 mb-2"
                                >
                                  {result.value}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                  {result.metric}
                                </Typography>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPartners; 