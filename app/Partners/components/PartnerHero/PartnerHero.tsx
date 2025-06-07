import React, { useState } from "react";
import { motion } from "framer-motion";
import Typography from "@/Components/DesignSystem/Typography";
import Button from "@/Components/DesignSystem/Button";
import PartnerApplicationModal from "../PartnerApplicationModal/PartnerApplicationModal";

const metrics = [
  { label: "Global Partners", value: "500+", prefix: "" },
  { label: "Success Rate", value: "95", prefix: "%" },
  { label: "Countries", value: "50+", prefix: "" },
];

const PartnerHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" className="mb-6">
              Transform Your Business with Dexotel Partnership
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-8 text-lg">
              Join our ecosystem of innovative partners and unlock new opportunities for growth,
              collaboration, and success in the communications industry.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 text-lg"
            >
              Become a Partner
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="p-6 bg-white rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Typography variant="h2" className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.prefix}{metric.value}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {metric.label}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partner Application Modal */}
      <PartnerApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PartnerHero; 