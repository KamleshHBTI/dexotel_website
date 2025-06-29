"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
};

const defaultLogo = {
  src: "/dexotel_logo.png",
  alt: "Dexotel Logo",
  width: 65,
  height: 30,
};

const navigationItems: NavItem[] = [
  { label: "Let's Talk", href: "/LetsTalk" },
  { label: "Services", href: "/Services" },
  { label: "Industries", href: "/Industries" },
  { label: "Company", href: "/Company" },
  { label: "Career", href: "/Career" },
  { label: "Blogs", href: "/Blogs" },
];

export const Header: React.FC<HeaderProps> = ({ 
  logo = defaultLogo,
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");
      
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target as Node) && 
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className={`outer-container shadow-sm ${className}`}>
      <div className="container mx-auto px-4">
        <header className="py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#2b7360] rounded-lg">
              <Image 
                className="dexotel_logo transition-transform duration-300 hover:scale-105"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[#2b7360] font-bold transition-all duration-300
                    hover:text-[#1a4d3e] relative py-2
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-full after:h-0.5 after:bg-[#2b7360]
                    after:scale-x-0 after:transition-transform after:duration-300
                    hover:after:scale-x-100
                    ${pathname === item.href ? 'after:scale-x-100' : ''}
                    focus:outline-none focus:ring-2 focus:ring-[#2b7360] rounded-lg
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              id="menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#2b7360] hover:bg-[#2b736011] rounded-lg transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-[#2b7360]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            className={`
              md:hidden overflow-hidden transition-all duration-300 ease-in-out
              ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[#2b7360] font-bold p-2 rounded-lg transition-all duration-300
                    hover:bg-[#2b736011]
                    ${pathname === item.href ? 'bg-[#2b736022]' : ''}
                    focus:outline-none focus:ring-2 focus:ring-[#2b7360]
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};