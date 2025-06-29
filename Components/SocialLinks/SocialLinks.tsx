import React from 'react';
import { SOCIAL_LINKS } from '../../constants/navigation';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
      <div className="flex flex-col gap-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label={`Follow us on ${link.platform}`}
          >
            <span className={`w-6 h-6 inline-block`}>
              {/* Replace with your actual icon components or SVGs */}
              {link.platform}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks; 