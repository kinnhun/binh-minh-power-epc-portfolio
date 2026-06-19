"use client";

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Landmark, Zap } from "lucide-react";

export default function EPCROI() {
  const stats = [
    {
      num: "2–3",
      label: "Năm hoàn vốn",
      detail: "Tùy thuộc vào suất đầu tư, diện tích mái & giờ hoạt động",
      icon: TrendingUp
    },
    {
      num: "25–30",
      label: "Năm tuổi thọ",
      detail: "Tạo dòng điện chi phí thấp trong 20+ năm sau hoàn vốn",
      icon: ShieldCheck
    },
    {
      num: "400–500%",
      label: "ROI vòng đời",
      detail: "Tổng giá trị tiết kiệm điện, I-REC & chứng chỉ ESG",
      icon: Landmark
    },
    {
      num: "15–25%",
      label: "Giảm chi phí điện",
      detail: "Tỷ lệ giảm trực tiếp trên tổng hóa đơn hàng tháng",
      icon: Zap
    }
  ];

  return (
    <section className="bg-rivr-bg py-12 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Full-width premium banner card */}
        <div 
          className="relative w-full rounded-[2rem] overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[480px] bg-deep-brown shadow-xl"
          style={{ backgroundImage: "url('/solar_energy_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}
        >
          {/* Dark Overlay Shield */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2900]/95 via-[#644519]/90 to-[#3D2900]/60 z-0 pointer-events-none" />

          {/* Banner Header Text */}
          <div className="relative z-10 text-left max-w-2xl space-y-4">
            <span className="text-[rgba(248,185,20,0.9)] text-[10px] font-bold uppercase tracking-wider block">
              Dữ liệu từ 50+ dự án BMC đang vận hành
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
              Tại sao EPC là khoản đầu tư sinh lời nhất?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
              Các chỉ số tài chính được theo dõi thời gian thực giúp ban giám đốc dễ dàng hoạch định lộ trình chuyển đổi năng lượng xanh.
            </p>
          </div>

          {/* Glass Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 relative z-10">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col text-left justify-between min-h-[160px] group cursor-default"
                >
                  <div className="flex items-center justify-between text-white">
                    <span className="text-3xl font-normal tracking-tight block">
                      {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-4 h-4 shrink-0" />
                    </div>
                  </div>
                  
                  <div className="space-y-1 mt-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                      {s.label}
                    </h3>
                    <p className="text-white/60 text-[10px] leading-relaxed font-normal">
                      {s.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
