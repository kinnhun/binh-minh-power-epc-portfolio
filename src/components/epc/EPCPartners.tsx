"use client";

import React from "react";

export default function EPCPartners() {
  const partners = [
    { name: "Huawei Solar", logo: "/logo-doi-tac/huawei.png" },
    { name: "Sungrow", logo: "/logo-doi-tac/sungrow.png" },
    { name: "Canadian Solar", logo: "/logo-doi-tac/canadian.png" },
    { name: "VSIP Group", logo: "/logo-doi-tac/vsip.png" },
    { name: "I-REC Standard", logo: "/logo-doi-tac/i-rec.png" },
    { name: "BQL KCN", logo: "/logo-doi-tac/bql.png" },
  ];

  return (
    <section className="bg-transparent py-16 border-y border-stone-200/50 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <p className="text-stone-500 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">
            Thiết bị chuẩn hóa & Đối tác đồng hành hàng đầu
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-items-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {partners.map((p, idx) => (
              <div key={idx} className="group relative w-full flex justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-out select-none pointer-events-none"
                />
              </div>
            ))}
          </div>

          <p className="text-stone-400 text-[10px] sm:text-xs text-center italic font-medium max-w-2xl mx-auto leading-relaxed">
            * Thiết bị được lựa chọn theo tiêu chuẩn kỹ thuật, điều kiện mái, hồ sơ phụ tải và mục tiêu hoàn vốn của từng nhà máy.
          </p>
        </div>
      </div>
    </section>
  );
}
