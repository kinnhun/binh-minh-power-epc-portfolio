"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function EPCTrustMetrics() {
  const metrics = [
    {
      number: "22.3",
      unit: "MWp",
      label: "Tổng công suất lắp đặt",
    },
    {
      number: "50",
      unit: "+",
      label: "Dự án hoàn thành",
    },
    {
      number: "8",
      unit: "năm",
      label: "Kinh nghiệm thực tế",
    },
    {
      number: "25",
      unit: "ngày",
      label: "Thi công nhanh nhất",
    },
  ];

  return (
    <section className="bg-rivr-bg py-20 select-none relative z-20 border-y border-stone-200/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "flex flex-col text-left px-6 lg:px-8",
                // Mobile layout left border (even index = left col, odd index = right col)
                idx % 2 === 1 ? "border-l border-stone-200/80" : "border-none",
                // Desktop layout left border (all columns except first get border-l)
                "lg:border-l lg:border-stone-200/80 lg:first:border-none"
              )}
            >
              {/* Number and Unit Display */}
              <div className="flex items-baseline mb-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-text tracking-tighter leading-none">
                  {m.number}
                </span>
                <span className="text-solar-gold text-lg sm:text-xl lg:text-2xl font-normal ml-1.5">
                  {m.unit}
                </span>
              </div>
              
              {/* Label */}
              <span className="text-stone-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
