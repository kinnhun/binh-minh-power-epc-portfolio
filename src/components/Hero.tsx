"use client";

import React from "react";
import { motion } from "motion/react";
import HeroBadge from "@/components/HeroBadge";
import BottomLeftCard from "@/components/BottomLeftCard";
import BottomRightCorner from "@/components/BottomRightCorner";

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-rivr-bg select-none">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group z-10">
        {/* Widescreen Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/image.png"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full scale-105"
          >
            <source src="/Create_a_premium_cinematic_her.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Backdrop color protection shield - intercepts pointers to block YouTube hover controls */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.2px] z-0" />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
          
          {/* Spacing placeholder for sticky absolute navbar */}
          <div className="h-20 md:h-28 w-full shrink-0" />

          {/* Centered Typography Hook Container */}
          <div className="w-full flex flex-col items-center px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 text-center max-w-5xl select-text pb-64 sm:pb-68 md:pb-60 lg:pb-44 xl:pb-24">
            
            {/* Glass Badge */}
            <HeroBadge />

            {/* Main Title heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-white mb-5 tracking-tight leading-[1.25] max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            >
              50+ nhà máy đã <span className="text-solar-gold">giảm 30–45%</span> hóa đơn điện{" "}
              <br className="hidden sm:inline" />
              Nhà máy anh/chị chưa làm vì lý do gì?
            </motion.h1>

            {/* Sub-headline copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-xl sm:max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              Chúng tôi đã thiết kế và thi công từ 600kWp đến 4MWp. Không phải cam kết — là dự án thật, số liệu thật, khách hàng thật.
            </motion.p>
          </div>

          {/* Bottom Left Stats & Click Action */}
          <BottomLeftCard />

          {/* Bottom Right Faux-Cutout & Masking */}
          <BottomRightCorner />

        </div>
      </section>
    </div>
  );
}
