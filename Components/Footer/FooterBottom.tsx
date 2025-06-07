"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import "./footer.css";

const FooterBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      <div className="footer_copyright text-gray text-center py-4">
        <p className="text-sm">Copyright © {new Date().getFullYear()} | All Rights Reserved by : Dexotel Solution Pvt. Ltd.</p>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-custom-blue text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition">
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FooterBottom;