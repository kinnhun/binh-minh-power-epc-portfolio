"use client";

import React from "react";
import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit border border-white/20 select-none z-20"
    >
      {/* Metrics Column */}
      <div className="flex flex-col text-left">
        <span className="text-2xl md:text-3xl font-normal text-deep-brown tracking-tight">
          223 MWp
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-earth-brown/80 uppercase tracking-wider">
          50+ Dự án · Tổng công suất
        </span>
      </div>

      {/* Click-to-call Phone Button */}
      <a href="tel:0901234788" className="self-start">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors group cursor-pointer"
        >
          <div className="bg-solar-gold/10 p-1 rounded-full text-deep-brown flex items-center justify-center">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[14px] font-normal text-deep-brown whitespace-nowrap">
            0901 234 788
          </span>
        </motion.div>
      </a>
    </motion.div>
  );
}
