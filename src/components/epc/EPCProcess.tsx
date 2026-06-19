"use client";

import React from "react";
import { motion } from "motion/react";
import { Search, Compass, FileSignature, Hammer, ShieldCheck } from "lucide-react";

export default function EPCProcess() {
  const steps = [
    {
      step: "1",
      title: "Khảo sát",
      subtitle: "Đo mái, phân tích điện",
      duration: "1–3 ngày",
      icon: Search,
    },
    {
      step: "2",
      title: "Thiết kế",
      subtitle: "Bản vẽ, thiết bị, báo giá",
      duration: "5–7 ngày",
      icon: Compass,
    },
    {
      step: "3",
      title: "Ký HĐ",
      subtitle: "Hợp đồng minh bạch",
      duration: "1 ngày",
      icon: FileSignature,
    },
    {
      step: "4",
      title: "Thi công",
      subtitle: "Không gián đoạn SX",
      duration: "15–45 ngày",
      icon: Hammer,
    },
    {
      step: "✓",
      title: "Nghiệm thu",
      subtitle: "Pháp lý + I-REC + App",
      duration: "Done ✅",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-white py-20 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
            Quy trình thực hiện
          </span>
          <h2 className="text-slate-text text-3xl sm:text-4xl font-normal tracking-tight">
            Quy trình EPC Trọn Gói — Không lo gì cả
          </h2>
          <p className="text-slate-text opacity-80 text-sm font-normal">
            BMC quản lý toàn bộ từ A đến Z. Bạn chỉ cần ký nhận bàn giao.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isLast = idx === steps.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-200/50 flex flex-col justify-between text-left transition-all duration-300 relative group h-full"
              >
                {/* Connecting Lines for desktop */}
                {!isLast && (
                  <div className="hidden lg:block absolute right-[-15px] top-10 w-[30px] h-[1px] bg-stone-300/40 z-0 pointer-events-none group-hover:bg-solar-gold transition-colors duration-300" />
                )}

                <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-earth-brown font-mono">{s.step}</span>
                    <div className="w-8 h-8 rounded-lg bg-cream-base border border-solar-gold/10 text-earth-brown flex items-center justify-center transition-colors duration-300 group-hover:bg-solar-gold text-deep-brown font-bold group-hover:text-white">
                      <Icon className="w-4 h-4 shrink-0" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <h3 className="text-slate-text font-semibold text-base sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-text opacity-80 leading-relaxed">
                      {s.subtitle}
                    </p>
                  </div>

                  <div className="border-t border-stone-200/40 pt-3 mt-4 text-[10px] uppercase font-bold tracking-widest text-earth-brown">
                    {s.duration}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
