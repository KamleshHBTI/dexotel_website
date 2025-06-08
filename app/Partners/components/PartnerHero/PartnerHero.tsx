import React, { useState } from "react";
import { motion } from "framer-motion";
import Typography from "@/Components/DesignSystem/Typography";
import Button from "@/Components/DesignSystem/Button";
import Image from "next/image";
import PartnerApplicationModal from "../PartnerApplicationModal/PartnerApplicationModal";

const metrics = [
  { label: "Global Partners", value: "500+", prefix: "", icon: "/images/partners/global-partners.svg" },
  { label: "Success Rate", value: "95", prefix: "%", icon: "/images/partners/success-rate.svg" },
  { label: "Countries", value: "50+", prefix: "", icon: "/images/partners/countries.svg" },
];

const PartnerHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-theme-50 to-white theme-section">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-theme-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme-100 rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="theme-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" className="theme-heading">
              Transform Your Business with Dexotel Partnership
            </Typography>
            <Typography variant="body1" className="theme-text mb-8 text-lg">
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
              className="theme-button px-8 py-4 text-lg"
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
                className="theme-card hover-lift p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={metric.icon}
                    alt={metric.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <Typography variant="h2" className="text-4xl font-bold text-theme mb-2">
                  {metric.prefix}{metric.value}
                </Typography>
                <Typography variant="body2" className="theme-text">
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