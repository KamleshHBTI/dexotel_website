"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import "./footer.css";

const FooterBottom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            © {currentYear} Dexotel. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            Made with ❤️ in India | ISO 27001 Certified
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-custom-blue text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition">
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FooterBottom;