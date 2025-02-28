"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="outer-container shadow-sm">
      <div className="container">
        <header className="px-0 py-2  text-[#2b7360]">
          <div className="flex justify-between items-center">
            
          <Link href="/" passHref>
              <Image 
                className="dexotel_logo cursor-pointer"
                src="/dexotel_logo.png" 
                alt="Logo" 
                width={65} 
                height={30} 
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 text-[#2b7360] font-medium">
              <Link href="/LetsTalk">Let&apos;s Talk</Link>
              <Link href="/Services">Services</Link>
              <Link href="/Industries">Industries</Link>
              <Link href="/Company">Company</Link>
              <Link href="/Partners">Partners</Link>
              <Link href="/Career">Career</Link>
              <Link href="/Blogs">Blogs</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#2b7360]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-4 mt-4 text-[#2b7360] font-medium">
              <Link href="/LetsTalk" onClick={() => setIsOpen(false)}>Let &apos; s Talk</Link>
              <Link href="/Services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/Industries" onClick={() => setIsOpen(false)}>Industries</Link>
              <Link href="/Company" onClick={() => setIsOpen(false)}>Company</Link>
              <Link href="/Partners" onClick={() => setIsOpen(false)}>Partners</Link>
              <Link href="/Career" onClick={() => setIsOpen(false)}>Career</Link>
              <Link href="/Blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};