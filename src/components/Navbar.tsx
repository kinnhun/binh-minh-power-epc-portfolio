"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Giải pháp", hasDropdown: false },
    { label: "Dự án", hasDropdown: false },
    { label: "Quy trình EPC", hasDropdown: false },
    { label: "Tư vấn ESG", hasDropdown: true },
  ];

  return (
    <nav 
      className={`fixed left-0 right-0 z-40 w-full flex items-center justify-between transition-all duration-300 select-none ${
        isScrolled 
          ? "top-0 py-3.5 px-6 md:px-12 bg-white/75 backdrop-blur-md border-b border-stone-200/40 shadow-xs" 
          : "top-[40px] py-6 px-6 md:px-10 bg-transparent"
      }`}
    >
      {/* Desktop Logo (Left Side) */}
      <div className="flex-1 hidden md:flex">
        <span 
          className={`font-bold tracking-tight text-xl cursor-pointer transition-colors duration-300 ${
            isScrolled ? "text-deep-brown" : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Bình Minh Power
        </span>
      </div>

      {/* Center Menu */}
      <ul 
        className={`hidden md:flex items-center gap-8 font-normal text-sm transition-colors duration-300 ${
          isScrolled ? "text-deep-brown/80" : "text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        }`}
      >
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer hover:opacity-75 transition-opacity flex items-center gap-1 group"
          >
            <span>{item.label}</span>
            {item.hasDropdown && (
              <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5 ${
                isScrolled ? "text-stone-500" : "text-white/70"
              }`} />
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span 
          className={`font-regular tracking-tighter text-xl transition-colors duration-300 ${
            isScrolled ? "text-deep-brown" : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          }`}
        >
          BMC
        </span>
      </div>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={scrollToForm}
          className="flex items-center bg-solar-gold text-deep-brown font-bold rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-solar-gold-hover transition-all group cursor-pointer focus:outline-none shadow-md shadow-solar-gold/10"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">
            Khảo sát miễn phí
          </span>
        </motion.button>
      </div>
    </nav>
  );
}
