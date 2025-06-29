"use client";
import React from "react";
import Link from 'next/link';
import FooterBottom from "./FooterBottom";
import Newsletter from "../Newsletter/Newsletter";
import SocialLinks from "../SocialLinks/SocialLinks";
import { MAIN_NAVIGATION, LEGAL_LINKS, CONTACT_INFO } from "../../constants/navigation";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="outer-container shadow-top">
        <div className="container mx-auto py-16 px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info & Contact */}
            <div className="col-span-1 lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Dexotel</h3>
                <p className="text-gray-600 mb-4">
                  Dexotel is a leading software development company that provides a wide range of services to businesses of all sizes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
                <div className="text-gray-600 space-y-2">
                  <p>{CONTACT_INFO.email}</p>
                  <p>{CONTACT_INFO.phone}</p>
                  <p className="text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.values(MAIN_NAVIGATION).map((section) => (
                  <div key={section.title}>
                    <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-2 mb-8">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link 
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="col-span-1 lg:col-span-1 space-y-8">
              <Newsletter />
              <SocialLinks />
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-wrap justify-center gap-6">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;