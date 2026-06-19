"use client";

import React from "react";
import { motion } from "motion/react";
import { Search, Compass, FileSignature, Hammer, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EPCProcess() {
  const steps = [
    {
      step: "1",
      title: "Khảo sát",
      subtitle: "Đo đạc mái nhà xưởng, phân tích phụ tải điện tiêu thụ và kiểm tra kỹ thuật kết cấu thực tế.",
      duration: "1–3 ngày",
      icon: Search,
    },
    {
      step: "2",
      title: "Thiết kế kỹ thuật",
      subtitle: "Lên bản vẽ mô phỏng 3D hệ thống, lựa chọn cấu hình thiết bị tối ưu hiệu suất và gửi báo giá chi tiết.",
      duration: "5–7 ngày",
      icon: Compass,
    },
    {
      step: "3",
      title: "Ký kết hợp đồng",
      subtitle: "Thống nhất các điều khoản hợp đồng EPC minh bạch, cam kết tiến độ lắp đặt và điều kiện bàn giao.",
      duration: "1 ngày",
      icon: FileSignature,
    },
    {
      step: "4",
      title: "Thi công & Lắp đặt",
      subtitle: "Vận chuyển vật tư, lắp đặt khung giàn pin, tủ điện và inverter theo phương án cam kết không dừng sản xuất.",
      duration: "15–45 ngày",
      icon: Hammer,
    },
    {
      step: "5",
      title: "Nghiệm thu & Bàn giao",
      subtitle: "Hoàn thiện hồ sơ nghiệm thu điện lực EVN, cấp chứng chỉ I-REC và kích hoạt tài khoản app giám sát realtime.",
      duration: "Hoàn tất",
      icon: ShieldCheck,
    },
  ];

  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="epc-process" className="bg-[#FBFBF9] py-24 select-none relative border-y border-stone-200/50">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-solar-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-solar-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Title & Description) - lg:col-span-5 */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
                  Quy trình thực hiện
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-text tracking-tight leading-tight">
                  Quy trình EPC Trọn Gói — Không lo gì cả
                </h2>
                <p className="text-stone-600 text-sm md:text-base font-normal leading-relaxed">
                  Bình Minh Power chịu trách nhiệm toàn diện từ khảo sát kết cấu, thiết kế hệ thống, cung cấp thiết bị, thi công lắp đặt và hoàn thiện pháp lý đấu nối A–Z.
                </p>
              </div>

              {/* Premium service advantages widget */}
              <div className="bg-cream-base/40 border border-solar-gold/20 rounded-[1.5rem] p-6 text-stone-700 text-xs sm:text-sm font-medium relative overflow-hidden shadow-xs">
                <div className="absolute top-0 right-0 w-20 h-20 bg-solar-gold/10 rounded-bl-full flex items-center justify-end pr-3 pb-7 font-black text-xs text-earth-brown font-mono">
                  5 bước
                </div>
                <div className="space-y-3 relative z-10">
                  <p className="font-extrabold text-navy-accent text-sm sm:text-base">⚡ Cam kết từ tổng thầu:</p>
                  <ul className="space-y-2 list-disc pl-4 text-stone-600 font-normal text-xs sm:text-sm">
                    <li>Khảo sát kết cấu mái & đo phụ tải miễn phí trong 48h.</li>
                    <li>Biện pháp thi công an toàn tuyệt đối, duy trì 100% sản xuất.</li>
                    <li>Bàn giao hệ thống trọn gói (Turnkey) kèm phần mềm giám sát.</li>
                  </ul>
                </div>
              </div>

              {/* Quick button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-solar-gold text-deep-brown font-extrabold hover:bg-solar-gold-hover text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-solar-gold/10 focus:outline-none animate-pulse-glow"
              >
                <span>Yêu cầu khảo sát ngay</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column (Scrolling Timeline List) - lg:col-span-7 */}
          <div className="lg:col-span-7 relative space-y-6">
            
            {/* Connecting Vertical Line visible in card gaps */}
            <div className="absolute left-[48px] md:left-[56px] top-10 bottom-10 w-[2px] border-l-2 border-dashed border-stone-200/80 pointer-events-none z-0" />

            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isCompleted = s.duration === "Hoàn tất";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="p-6 md:p-8 bg-white border border-stone-200 rounded-[2rem] flex flex-col sm:flex-row gap-6 items-start hover:border-solar-gold hover:shadow-[0_12px_32px_rgba(100,69,25,0.04)] transition-all duration-300 relative group cursor-pointer z-10"
                >
                  {/* Left part: Icon & Step badge */}
                  <div className="w-12 h-12 rounded-2xl bg-cream-base border border-solar-gold/20 text-earth-brown flex items-center justify-center group-hover:bg-solar-gold group-hover:text-white transition-all duration-300 relative shrink-0">
                    <Icon className="w-6 h-6 shrink-0" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-navy-accent border border-stone-200 text-[10px] font-black flex items-center justify-center font-mono group-hover:border-solar-gold shadow-xs">
                      {s.step}
                    </span>
                  </div>

                  {/* Right part: Description Content & Duration tag */}
                  <div className="flex-1 space-y-3 text-left w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
                      <h3 className="text-xl font-bold text-slate-text group-hover:text-solar-gold transition-colors duration-250">
                        {s.title}
                      </h3>
                      
                      {/* Highlighted Duration Badge */}
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide border self-start sm:self-center transition-all duration-300",
                        isCompleted 
                          ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white" 
                          : "bg-solar-gold/10 text-deep-brown border-solar-gold/20 group-hover:bg-solar-gold group-hover:text-deep-brown"
                      )}>
                        {s.duration}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {s.subtitle}
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
