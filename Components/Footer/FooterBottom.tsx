"use client";
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./footer.css";

const FooterBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
      <Row justify="center" className="footer-container">
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="footer_copyright">
            <p className="lft-sd">
              Copyright © {new Date().getFullYear()} | All Rights Reserved by Dexotel Solution Pvt. Ltd.
            </p>
          </div>
        </Col>
      </Row>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          className="back-to-top"
          onClick={scrollToTop}>
          <ArrowUpOutlined />
        </button>
      )}
    </>
  );
};

export default FooterBottom;