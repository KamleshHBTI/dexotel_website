"use client";
import React from "react";
import FooterBottom from "../Footer/FooterBottom";
import { Row, Col } from "antd";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="outer-container shadow-top">
      <div className="container">
        <footer className="footer-container py-5">
          <Row gutter={[16, 16]} justify="space-between">
            {/* Accept Payments Section */}
            <Col xs={24} sm={12} md={6} lg={6}>
              <h3 className="footer-title">Accept payments</h3>
              <ul className="footer-list">
                <li>Payment Gateway</li>
                <li>Subscription</li>
                <li>Native OTP</li>
                <li>International Payments</li>
              </ul>
            </Col>

            {/* Other Products Section */}
            <Col xs={24} sm={12} md={6} lg={6}>
              <h3 className="footer-title">Other Products</h3>
              <ul className="footer-list">
                <li>PayU Connect</li>
                <li>QR</li>
                <li>POS</li>
                <li>Transact</li>
              </ul>
            </Col>

            {/* Company Section */}
            <Col xs={24} sm={12} md={6} lg={6}>
              <h3 className="footer-title">Company</h3>
              <ul className="footer-list">
                <li>About Us</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Startup Program</li>
              </ul>
            </Col>

            {/* Description Section */}
            <Col xs={24} sm={24} md={6} lg={6}>
              <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, sapien vel aliquet vehicula, felis risus tincidunt sapien, eget suscipit felis ligula at metus.
              </p>
            </Col>
          </Row>
        </footer>
      </div>
    </div>
    <FooterBottom />
    </>
  );
};

export default Footer;
