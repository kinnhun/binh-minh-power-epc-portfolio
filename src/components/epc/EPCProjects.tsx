"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowUpRight, TrendingUp, Calendar, Zap, Landmark, Leaf, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EPCProjects() {
  const [filter, setFilter] = useState<"all" | "epc" | "ppa">("all");

  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      name: "Xưởng gỗ Đất Việt - Bàu Bàng, Bình Dương",
      capacity: "800 kWp",
      location: "KCN Bàu Bàng, Bình Dương",
      industry: "Chế biến gỗ",
      model: "EPC",
      savings: "2 tỷ VND/năm",
      payback: "3 năm",
      co2: "830 tấn",
      device: "Canadian Solar & Huawei",
      duration: "25 ngày",
      status: "Đang vận hành",
      tag: "epc",
    },
    {
      id: 2,
      name: "Gỗ Thuận Lợi BP - Bình Phước",
      capacity: "2300 kWp",
      location: "Bình Phước",
      industry: "Chế biến gỗ",
      model: "EPC",
      savings: "5,8 tỷ VND/năm",
      payback: "3,1 năm",
      co2: "2.502 tấn",
      device: "JA Solar",
      duration: "35 ngày",
      status: "Đang vận hành",
      tag: "epc",
    },
    {
      id: 3,
      name: "Xi măng BP - Bình Phước",
      capacity: "4000 kWp",
      location: "Bình Phước",
      industry: "Sản xuất xi măng",
      model: "EPC",
      savings: "10,2 tỷ VND/năm",
      payback: "3,1 năm",
      co2: "4.352 tấn",
      device: "JA Solar",
      duration: "45 ngày",
      status: "Đang vận hành",
      tag: "epc",
    },
    {
      id: 4,
      name: "Nhựa Vĩnh Phú",
      capacity: "595 kWp",
      location: "KCN VSIP 2, Bình Dương",
      industry: "Sản xuất nhựa",
      model: "PPA 0 Đồng",
      savings: "1,6 tỷ VND/năm",
      payback: "3,2 năm",
      co2: "615 tấn",
      device: "JA Solar",
      duration: "20 ngày",
      status: "Đang vận hành",
      tag: "ppa",
    },
    {
      id: 5,
      name: "Nhà máy gỗ Bình Định - Bình Dương",
      capacity: "2100 kWp",
      location: "Bình Dương",
      industry: "Sản xuất gỗ xuất khẩu",
      model: "EPC",
      savings: "5,4 tỷ VND/năm",
      payback: "3 năm",
      co2: "2.178 tấn",
      device: "JA Solar",
      duration: "25 ngày",
      status: "Đang vận hành",
      tag: "epc",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.tag === filter;
  });

  return (
    <section id="epc-projects" className="bg-rivr-bg py-24 select-none relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-solar-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-solar-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
              Dự án đã triển khai
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-text tracking-tight leading-tight">
              Số liệu thực tế từ hệ thống đang vận hành
            </h2>
            <p className="text-sm md:text-base text-slate-text opacity-75 font-normal max-w-xl">
              Danh sách các nhà máy đã bàn giao và vận hành hiệu quả từ tổng thầu Bình Minh Power.
            </p>
          </div>

          {/* RIVR-Style Navigation Pill tabs */}
          <div className="flex items-center gap-1 bg-white/50 backdrop-blur-md border border-white/60 p-1 rounded-full self-start shrink-0 shadow-sm">
            {[
              { id: "all", label: "Tất cả" },
              { id: "epc", label: "EPC Đầu Tư" },
              { id: "ppa", label: "PPA 0 Đồng" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer focus:outline-none ${
                  filter === tab.id
                    ? "bg-navy-accent text-white shadow-sm"
                    : "text-stone-500 hover:text-navy-accent hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              // Split capacity metrics for advanced typography unit sizing
              const [val, unit] = p.capacity.split(" ");
              return (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between hover:bg-white/60 hover:shadow-[0_12px_32px_rgba(100,69,25,0.03)] hover:border-solar-gold/20 transition-all duration-300 text-left h-full group cursor-pointer"
                >
                  <div className="space-y-6">
                    {/* Top Row: Name, Industry and Status */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-h-[72px]">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                          Ngành: {p.industry}
                        </span>
                        <h3 className="text-xl font-bold text-slate-text tracking-tight group-hover:text-solar-gold transition-colors duration-250">
                          {p.name}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-cream-base border border-solar-gold/15 text-earth-brown text-[9px] font-bold tracking-wide whitespace-nowrap">
                        {p.status}
                      </span>
                    </div>

                    {/* Big capacity metric display with split units styling */}
                    <div className="py-3 border-y border-stone-200/40 flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-extrabold text-navy-accent tracking-tight leading-none">
                        {val}
                        <span className="text-solar-gold font-normal text-lg sm:text-xl ml-0.5">{unit}</span>
                      </span>
                      <span className="text-[9px] text-stone-400 uppercase tracking-widest font-bold">Công suất lắp đặt</span>
                    </div>

                    {/* Specifications Dossier List */}
                    <div className="space-y-3 text-xs text-stone-600 bg-white/30 rounded-2xl p-4 border border-white/40">
                      <div className="flex justify-between items-center py-0.5">
                        <span className="opacity-75 flex items-center gap-1.5 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-solar-gold" /> Địa điểm:
                        </span>
                        <span className="font-bold text-navy-accent truncate max-w-[160px]" title={p.location}>
                          {p.location}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-0.5 border-t border-stone-200/20">
                        <span className="opacity-75 flex items-center gap-1.5 font-medium">
                          <TrendingUp className="w-3.5 h-3.5 text-solar-gold" /> Tiết kiệm / năm:
                        </span>
                        <span className="font-bold text-emerald-600">{p.savings}</span>
                      </div>

                      <div className="flex justify-between items-center py-0.5 border-t border-stone-200/20">
                        <span className="opacity-75 flex items-center gap-1.5 font-medium">
                          <Landmark className="w-3.5 h-3.5 text-solar-gold" /> Hoàn vốn:
                        </span>
                        <span className="font-bold text-navy-accent">{p.payback}</span>
                      </div>

                      <div className="flex justify-between items-center py-0.5 border-t border-stone-200/20">
                        <span className="opacity-75 flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-solar-gold" /> Thi công:
                        </span>
                        <span className="font-bold text-navy-accent">{p.duration}</span>
                      </div>

                      <div className="flex justify-between items-center py-0.5 border-t border-stone-200/20">
                        <span className="opacity-75 flex items-center gap-1.5 font-medium">
                          <Zap className="w-3.5 h-3.5 text-solar-gold" /> Thiết bị chính:
                        </span>
                        <span className="font-bold text-navy-accent truncate max-w-[145px]" title={p.device}>
                          {p.device}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action area */}
                  <div className="border-t border-stone-200/40 pt-4 mt-6 flex justify-between items-center text-xs text-earth-brown/70 group-hover:text-solar-gold-hover transition-colors duration-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                      Giảm {p.co2} CO₂ / năm
                    </span>
                    <div className="flex items-center gap-0.5 text-[11px] uppercase tracking-wider">
                      <span>Chi tiết</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* 6th Card: B2B Call to Action dossier */}
            {filter === "all" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={scrollToForm}
                className="border-2 border-dashed border-stone-300/60 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center bg-white/20 backdrop-blur-xl hover:bg-white/40 hover:border-solar-gold/40 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[340px] group"
              >
                <div className="bg-cream-base border border-solar-gold/15 w-14 h-14 rounded-full flex items-center justify-center text-earth-brown mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Factory className="w-6 h-6 text-earth-brown" />
                </div>
                <h3 className="text-xl font-bold text-slate-text tracking-tight mb-2">Dự án của anh/chị?</h3>
                <p className="text-xs text-stone-600 opacity-90 max-w-[220px] mb-6 leading-relaxed font-normal">
                  Khảo sát miễn phí kết cấu dầm kèo & hồ sơ phụ tải trong vòng 48h.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-earth-brown font-extrabold group">
                  <span>Nhận báo giá ngay</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
