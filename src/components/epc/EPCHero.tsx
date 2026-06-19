"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function EPCHero() {
  const openAuditModal = () => {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  };

  const scrollToProjects = () => {
    const el = document.getElementById("epc-projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-navy-accent select-none"
      style={{ backgroundImage: "url('/solar_energy_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}
    >
      {/* Dark overlay to protect contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1329]/98 via-[#0b1329]/95 to-[#0b1329]/70 backdrop-blur-[1px]"></div>
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/3 top-1/4 w-[500px] h-[500px] rounded-full bg-solar-gold/10 blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 bottom-10 w-[450px] h-[450px] rounded-full bg-orange-500/5 blur-[110px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full select-text">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting headlines & primary CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-7">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-stone-300 text-xs font-semibold shadow-md"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-solar-gold"></span>
                </span>
                <span>Nhà thầu EPC Solar Công Nghiệp Uy Tín</span>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h1 className="text-white text-3xl sm:text-4.5xl md:text-5.5xl font-black tracking-tight leading-[1.15] flex flex-col">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-solar-gold bg-gradient-to-r from-solar-gold via-amber-450 to-[#ffd984] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(248,185,20,0.25)] font-black"
                >
                  EPC Điện Mặt Trời
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white font-black mt-1"
                >
                  Công Nghiệp Trọn Gói
                </motion.span>
              </h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-stone-200 text-lg sm:text-xl font-bold tracking-wide border-l-2 border-solar-gold pl-3"
              >
                Thu hồi vốn 2–3 năm. Tạo dòng điện chi phí thấp trong 20+ năm sau hoàn vốn.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium"
            >
              Bình Minh Power đã triển khai 50+ dự án tại các KCN lớn nhất miền Nam. Thiết kế → Thi công → Nghiệm thu pháp lý → App monitoring → I-REC. Trọn gói từ A–Z.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* Primary Button */}
              <div className="relative inline-flex">
                <motion.span
                  className="absolute inset-0 rounded-full border border-solar-gold/45 bg-solar-gold/5 pointer-events-none z-0"
                  animate={{ scale: [1, 1.12, 1.2], opacity: [0.6, 0.25, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <button
                  type="button"
                  onClick={openAuditModal}
                  className="relative group overflow-hidden px-7 py-4.5 rounded-full bg-solar-gold hover:bg-solar-gold-hover active:bg-solar-gold-active text-deep-brown font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer focus:outline-none z-10 shadow-lg shadow-solar-gold/10"
                >
                  <span>Nhận báo giá không ràng buộc</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Secondary button */}
              <button
                type="button"
                onClick={scrollToProjects}
                className="px-7 py-4.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all focus:outline-none cursor-pointer"
              >
                <span>Xem dự án thực tế</span>
              </button>
            </motion.div>

            {/* highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-xs sm:text-sm text-stone-200 font-semibold">
              {[
                "Không gián đoạn sản xuất",
                "Thiết bị Bankable lớn",
                "Pháp lý trọn gói 100%"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 cursor-default">
                  <CheckCircle className="w-4 h-4 text-solar-gold shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Glass bento card with stats */}
          <div className="lg:col-span-5 flex flex-col space-y-6 pt-10 lg:pt-0 relative">
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-6 rounded-3xl bg-[#0d1630]/35 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-end min-h-[380px] overflow-hidden group cursor-default"
            >
              {/* Inside abstract solar cells grid background */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{ 
                  backgroundImage: "radial-gradient(rgba(248, 185, 20, 0.15) 1px, transparent 1px)", 
                  backgroundSize: "20px 20px" 
                }}
              />
              
              <div className="space-y-4 relative z-10">
                <span className="text-solar-gold text-[10px] font-black uppercase tracking-wider block">
                  BMC EPC Portfolio
                </span>
                
                <h3 className="text-white text-xl sm:text-2xl font-black leading-tight">
                  Tối ưu hóa hóa đơn điện & nâng tầm chứng chỉ xanh
                </h3>
                
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Chúng tôi xây dựng các hệ thống năng lượng mặt trời công nghiệp hiệu suất cao từ 600kWp đến 4MWp, tích hợp đầy đủ thủ tục đấu nối và cấp chứng chỉ I-REC.
                </p>

                {/* Glass statistics badge overlays inside card */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col">
                    <span className="text-solar-gold text-lg sm:text-xl font-black">223 MWp</span>
                    <span className="text-stone-400 text-[10px] uppercase font-bold mt-0.5">Tổng công suất</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col">
                    <span className="text-solar-gold text-lg sm:text-xl font-black">50+ Dự án</span>
                    <span className="text-stone-400 text-[10px] uppercase font-bold mt-0.5">Triển khai</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
