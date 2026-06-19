"use client";

import React from "react";
import { motion } from "motion/react";

export default function EPCTrustMetrics() {
  const metrics = [
    {
      value: "223 MWp",
      label: "Tổng công suất",
    },
    {
      value: "50+",
      label: "Dự án hoàn thành",
    },
    {
      value: "8 năm",
      label: "Kinh nghiệm thực tế",
    },
    {
      value: "25 ngày",
      label: "Thi công nhanh nhất",
    },
  ];

  return (
    <section className="bg-rivr-bg py-16 select-none relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col text-center justify-center relative md:border-r border-stone-300/40 last:border-none px-4"
            >
              <span className="block text-3xl sm:text-4xl md:text-[42px] font-normal text-slate-text tracking-tight leading-none mb-2">
                {m.value}
              </span>
              <span className="block text-slate-text opacity-60 text-[10px] md:text-[11px] font-normal uppercase tracking-widest leading-tight">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
