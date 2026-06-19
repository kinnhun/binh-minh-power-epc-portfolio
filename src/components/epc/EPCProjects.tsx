"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowUpRight, TrendingUp, Calendar, Zap, Landmark } from "lucide-react";

export default function EPCProjects() {
  const [filter, setFilter] = useState<"all" | "epc" | "ppa">("all");

  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      name: "Gỗ Đất Việt",
      capacity: "840 kWp",
      location: "KCN Bàu Bàng, Bình Dương",
      industry: "Chế biến Gỗ",
      model: "EPC",
      savings: "~2,5 tỷ VND/năm",
      payback: "2,5 năm",
      co2: "420 tấn/năm",
      device: "Canadian Solar & Huawei",
      duration: "25 ngày",
      status: "Đang chạy",
      tag: "epc",
    },
    {
      id: 2,
      name: "Gỗ Thuận Lợi",
      capacity: "2.3 MWp", // Corrected capacity
      location: "Bình Phước",
      industry: "Chế biến Gỗ",
      model: "EPC",
      savings: "5,1 tỷ VND/năm",
      payback: "2,7 năm",
      co2: "2.100 tấn/năm",
      device: "Canadian Solar & Sungrow",
      duration: "35 ngày",
      status: "Đang chạy 🏆 Lớn nhất BP",
      tag: "epc",
    },
    {
      id: 3,
      name: "Xi Măng Bình Long",
      capacity: "4.0 MWp",
      location: "Bình Phước",
      industry: "Xi măng / Heavy Industry",
      model: "EPC",
      savings: "~3,5 tỷ VND/năm",
      payback: "3 năm",
      co2: "2.000 tấn/năm",
      device: "Canadian Solar & Sungrow",
      duration: "45 ngày",
      status: "Đang chạy",
      tag: "epc",
    },
    {
      id: 4,
      name: "Vĩnh Phú Nhựa",
      capacity: "600 kWp",
      location: "KCN VSIP 2, Bình Dương",
      industry: "Sản xuất Nhựa",
      model: "PPA 0 Đồng",
      savings: "~1,2 tỷ VND/năm",
      payback: "0đ vốn đầu tư",
      co2: "510 tấn/năm",
      device: "Jinko Solar & Sungrow",
      duration: "20 ngày",
      status: "PPA 0đ",
      tag: "ppa",
    },
    {
      id: 5,
      name: "Gỗ Bình Định",
      capacity: "2.1 MWp",
      location: "KCN Bàu Bàng, Bình Dương",
      industry: "Gỗ xuất khẩu",
      model: "EPC",
      savings: "~2,8 tỷ VND/năm",
      payback: "2,8 năm",
      co2: "1.900 tấn/năm",
      device: "Canadian Solar & Sungrow",
      duration: "25 ngày kỷ lục",
      status: "Đang chạy",
      tag: "epc",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.tag === filter;
  });

  return (
    <section id="epc-projects" className="bg-rivr-bg py-20 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-2">
            <span className="text-slate-text opacity-60 text-xs font-bold uppercase tracking-widest block">
              Dự án đã triển khai
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-text tracking-tight">
              Số liệu thực tế từ hệ thống đang vận hành
            </h2>
          </div>

          {/* RIVR-Style Navigation Pill tabs */}
          <div className="flex items-center gap-1.5 bg-stone-300/40 p-1.5 rounded-full self-start shrink-0 border border-stone-300/50">
            {[
              { id: "all", label: "Tất cả" },
              { id: "epc", label: "EPC Đầu Tư" },
              { id: "ppa", label: "PPA 0 Đồng" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-normal transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-solar-gold text-deep-brown font-bold shadow-sm"
                    : "text-slate-text hover:text-solar-gold-hover"
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
            {filteredProjects.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[1.8rem] border border-slate-200/60 p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 text-left h-full group"
              >
                <div className="space-y-5">
                  {/* Top Row: Name and Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-normal text-slate-text/60 uppercase tracking-wider block">
                        Ngành: {p.industry}
                      </span>
                      <h3 className="text-xl font-normal text-slate-text tracking-tight group-hover:text-deep-brown transition-colors duration-200">
                        {p.name}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cream-base border border-solar-gold/10 border border-solar-gold/20 text-earth-brown text-[9px] font-normal tracking-wide whitespace-nowrap">
                      {p.status}
                    </span>
                  </div>

                  {/* Big capacity metric display */}
                  <div className="py-2 border-y border-stone-100 flex items-center justify-between">
                    <span className="text-3xl font-normal text-slate-text tracking-tight">{p.capacity}</span>
                    <span className="text-[10px] text-slate-text/60 uppercase tracking-widest font-normal">Công suất lắp đặt</span>
                  </div>

                  {/* Specifications Dossier List */}
                  <div className="space-y-2 text-xs text-slate-text">
                    <div className="flex justify-between items-center">
                      <span className="opacity-60 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Địa điểm:</span>
                      <span className="font-normal truncate max-w-[160px]" title={p.location}>{p.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-60 flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> Tiết kiệm/năm:</span>
                      <span className="font-normal text-deep-brown">{p.savings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-60 flex items-center gap-1"><Landmark className="w-3.5 h-3.5" /> Hoàn vốn:</span>
                      <span className="font-normal">{p.payback}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-60 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Thi công:</span>
                      <span className="font-normal">{p.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-60 flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> Thiết bị chính:</span>
                      <span className="font-normal truncate max-w-[150px]" title={p.device}>{p.device}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-4 mt-6 flex justify-between items-center text-xs text-earth-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Xem hồ sơ chi tiết</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}

            {/* 6th Card: B2B Call to Action dossier */}
            {filter === "all" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={scrollToForm}
                className="border-2 border-dashed border-stone-300 rounded-[1.8rem] flex flex-col items-center justify-center p-8 text-center bg-white/40 hover:bg-white hover:border-solar-gold/40 hover:shadow-md transition-all duration-300 cursor-pointer min-h-[300px]"
              >
                <div className="bg-cream-base border border-solar-gold/10 w-12 h-12 rounded-full flex items-center justify-center border border-solar-gold/20 text-earth-brown mb-4">
                  <span className="text-xl">🏭</span>
                </div>
                <h3 className="text-lg font-normal text-slate-text tracking-tight mb-2">Dự án của bạn?</h3>
                <p className="text-xs text-slate-text opacity-75 max-w-[200px] mb-6">
                  Khảo sát miễn phí kết cấu dầm kèo & hồ sơ phụ tải trong 48h.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-earth-brown font-bold group">
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
