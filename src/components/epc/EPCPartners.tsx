"use client";

import React from "react";

export default function EPCPartners() {
  const partners = [
    "Huawei Solar",
    "Sungrow",
    "Canadian Solar",
    "VSIP Group",
    "I-REC Standard",
    "BQL KCN BP/BD",
  ];

  return (
    <section className="bg-[#FBF7EF] py-12 border-y border-stone-200/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <p className="text-stone-500 text-xs sm:text-sm font-bold uppercase tracking-wider text-center">
            Thiết bị chuẩn hóa & Đối tác đồng hành hàng đầu
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {partners.map((p, idx) => (
              <span
                key={idx}
                className="text-navy-accent font-extrabold text-sm sm:text-base cursor-default select-none tracking-tight hover:opacity-100 hover:text-solar-gold transition-colors duration-200"
              >
                {p}
              </span>
            ))}
          </div>

          <p className="text-stone-400 text-[10px] text-center italic font-medium">
            * Thiết bị được lựa chọn theo tiêu chuẩn kỹ thuật, điều kiện mái, hồ sơ phụ tải và mục tiêu hoàn vốn của từng nhà máy.
          </p>
        </div>
      </div>
    </section>
  );
}
