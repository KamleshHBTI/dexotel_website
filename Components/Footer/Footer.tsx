// "use client";
// import React from "react";
// import FooterBottom from "../Footer/FooterBottom";
// import { Row, Col } from "antd";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <>
//     <div className="outer-container shadow-top">
//       <div className="container">
//         <footer className="footer-container py-5">
//           <Row gutter={[16, 16]} justify="space-between">
//             {/* Accept Payments Section */}
//             <Col xs={24} sm={12} md={6} lg={6}>
//               <h3 className="footer-title">Accept payments</h3>
//               <ul className="footer-list">
//                 <li>Payment Gateway</li>
//                 <li>Subscription</li>
//                 <li>Native OTP</li>
//                 <li>International Payments</li>
//               </ul>
//             </Col>

//             {/* Other Products Section */}
//             <Col xs={24} sm={12} md={6} lg={6}>
//               <h3 className="footer-title">Other Products</h3>
//               <ul className="footer-list">
//                 <li>PayU Connect</li>
//                 <li>QR</li>
//                 <li>POS</li>
//                 <li>Transact</li>
//               </ul>
//             </Col>

//             {/* Company Section */}
//             <Col xs={24} sm={12} md={6} lg={6}>
//               <h3 className="footer-title">Company</h3>
//               <ul className="footer-list">
//                 <li>About Us</li>
//                 <li>Careers</li>
//                 <li>Partners</li>
//                 <li>Startup Program</li>
//               </ul>
//             </Col>

//             {/* Description Section */}
//             <Col xs={24} sm={24} md={6} lg={6}>
//               <p className="footer-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, sapien vel aliquet vehicula, felis risus tincidunt sapien, eget suscipit felis ligula at metus.
//               </p>
//             </Col>
//           </Row>
//         </footer>
//       </div>
//     </div>
//     <FooterBottom />
//     </>
//   );
// };

//export default Footer;


"use client";
import React from "react";
import FooterBottom from "../Footer/FooterBottom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="outer-container shadow-top">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Accept Payments Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Accept Payments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Payment Gateway</li>
                <li>Subscription</li>
                <li>Native OTP</li>
                <li>International Payments</li>
              </ul>
            </div>

            {/* Other Products Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Other Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>PayU Connect</li>
                <li>QR</li>
                <li>POS</li>
                <li>Transact</li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Startup Program</li>
              </ul>
            </div>

            {/* Description Section */}
            <div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, sapien vel aliquet vehicula, felis risus tincidunt sapien, eget suscipit felis ligula at metus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;