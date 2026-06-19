"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function BottomRightCorner() {
  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute -bottom-[2px] -right-[2px] p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-rivr-bg rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6 z-20 select-none"
    >
      {/* Intersection SVGs for smooth corner cutout */}
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-[2px] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="var(--color-rivr-bg)" />
        </svg>
      </div>

      <div className="absolute bottom-[2px] -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="var(--color-rivr-bg)" />
        </svg>
      </div>

      {/* Circle Icon Button */}
      <button 
        type="button"
        onClick={scrollToForm}
        className="bg-cream-base border border-solar-gold/20 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-solar-gold/15 hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none shrink-0 group"
      >
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-deep-brown group-hover:text-solar-gold transition-colors" />
      </button>

      {/* Info link column */}
      <div className="flex flex-col text-left justify-center cursor-pointer" onClick={scrollToForm}>
        <span className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-deep-brown whitespace-nowrap">
          Báo giá không ràng buộc
        </span>
        <div className="flex items-center gap-1 text-earth-brown/80 hover:text-solar-gold-hover transition-colors mt-0.5">
          <span className="text-[11px] sm:text-[12px] md:text-[14px] font-normal">
            Nhận báo giá ngay →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
