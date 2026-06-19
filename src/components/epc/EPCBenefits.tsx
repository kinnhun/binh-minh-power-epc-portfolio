"use client";

import React from "react";
import { ShieldCheck, Zap, BarChart3, Award, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function EPCBenefits() {
  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="epc-benefits" className="bg-rivr-bg py-24 select-none relative overflow-hidden">
      {/* Decorative blurred background shapes for premium depth */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-solar-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-solar-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* RIVR-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
              Giải pháp tối ưu
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-text tracking-tight leading-tight">
              Lợi thế vượt trội từ tổng thầu BMC
            </h2>
            <p className="text-sm md:text-base text-slate-text opacity-75 font-normal max-w-2xl">
              Chúng tôi giải quyết triệt để bài toán kỹ thuật, vận hành và thủ tục pháp lý để doanh nghiệp an tâm phát triển sản xuất.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={scrollToForm}
            className="px-6 py-3 rounded-full bg-solar-gold text-deep-brown font-extrabold hover:bg-solar-gold-hover text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-solar-gold/10 focus:outline-none self-start md:self-end animate-pulse-glow"
          >
            Nhận báo giá ngay
          </motion.button>
        </div>

        {/* Bento Grid layout - Kept exact structural spans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Vertical, full height on lg) - Col Span: 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 flex flex-col justify-between overflow-hidden text-left hover:bg-white/60 hover:shadow-[0_12px_32px_rgba(100,69,25,0.03)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer relative"
          >
            {/* Top Image - Flush with top, left, right edges */}
            <div className="w-full relative overflow-hidden aspect-[16/10] shrink-0 border-b border-white/30">
              <img 
                src="/e35692ef-881c-4195-b12c-40e253353541.png" 
                alt="Không gián đoạn sản xuất" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Floating Badge on top of image */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-white/50 w-10 h-10 rounded-xl flex items-center justify-center text-earth-brown shadow-xs group-hover:bg-solar-gold group-hover:text-white transition-all duration-300 group-hover:scale-105">
                <Zap className="w-5 h-5 shrink-0" />
              </div>
            </div>
            
            {/* Content area at the bottom with appropriate padding */}
            <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-center">
              <div>
                <span className="text-[10px] font-bold text-solar-gold uppercase tracking-wider block mb-1">
                  Không gián đoạn
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-text tracking-tight leading-snug group-hover:text-solar-gold transition-colors">
                  Sản xuất bình thường suốt quá trình thi công
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                BMC xây dựng phương án thi công an toàn tuyệt đối, gia cố kết cấu và vận chuyển vật liệu theo khung giờ trống để không làm ảnh hưởng đến tiến độ vận hành của nhà máy.
              </p>
            </div>
          </motion.div>

          {/* Right Column (containing 3 cards) - Col Span: 7 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Card (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left hover:bg-white/60 hover:shadow-[0_12px_32px_rgba(100,69,25,0.03)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <div className="bg-cream-base border border-solar-gold/10 w-10 h-10 rounded-xl flex items-center justify-center text-earth-brown transition-colors duration-300 group-hover:bg-solar-gold group-hover:text-white group-hover:scale-105 shrink-0">
                    <BarChart3 className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-[10px] font-bold text-solar-gold uppercase tracking-wider block">
                    Monitoring 24/7
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-text tracking-tight group-hover:text-solar-gold transition-colors">
                  App theo dõi sản lượng, tiết kiệm realtime
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Theo dõi sản lượng điện tự tiêu thụ, cảnh báo sự cố kỹ thuật và tính toán lượng chi phí tiết kiệm theo thời gian thực trực quan qua ứng dụng.
                </p>
              </div>
              
              <div className="text-right shrink-0 flex flex-col items-start sm:items-end">
                <span className="text-3xl font-extrabold text-navy-accent tracking-tight">
                  Realtime
                </span>
                <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase mt-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live
                </span>
              </div>
            </motion.div>

            {/* Bottom Cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              
              {/* Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 flex flex-col justify-between gap-6 text-left hover:bg-white/60 hover:shadow-[0_12px_32px_rgba(100,69,25,0.03)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-cream-base border border-solar-gold/10 w-10 h-10 rounded-xl flex items-center justify-center text-earth-brown transition-colors duration-300 group-hover:bg-solar-gold group-hover:text-white group-hover:scale-105 shrink-0">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-[10px] font-bold text-solar-gold uppercase tracking-wider block">
                    Bảo hành 25 năm
                  </span>
                </div>

                <div className="space-y-3 mt-4">
                  <h4 className="text-lg font-bold text-slate-text tracking-tight group-hover:text-solar-gold transition-colors leading-tight">
                    Huawei, Sungrow, Canadian Solar — top 3 toàn cầu
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Thiết bị chính hãng uy tín cao nhất. Chính sách bảo hành hiệu suất tấm pin bền bỉ đến 25 năm, cùng dịch vụ kỹ thuật đồng hành trọn đời.
                  </p>
                </div>
              </motion.div>

              {/* Bottom Right Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 flex flex-col justify-between gap-6 text-left hover:bg-white/60 hover:shadow-[0_12px_32px_rgba(100,69,25,0.03)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-cream-base border border-solar-gold/10 w-10 h-10 rounded-xl flex items-center justify-center text-earth-brown transition-colors duration-300 group-hover:bg-solar-gold group-hover:text-white group-hover:scale-105 shrink-0">
                    <Award className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-[10px] font-bold text-solar-gold uppercase tracking-wider block">
                    I-REC Included
                  </span>
                </div>

                <div className="space-y-3 mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-text tracking-tight group-hover:text-solar-gold transition-colors leading-tight">
                      Chứng chỉ xanh quốc tế cấp hàng năm tự động
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal mt-1">
                      Cấp tự động phục vụ trực tiếp cho báo cáo Scope 2/ESG xuất khẩu châu Âu (đáp ứng CBAM), đăng ký trực tiếp tổ chức I-REC Standard.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-earth-brown font-bold group-hover:text-solar-gold-hover transition-colors pt-2">
                    <span>Hỗ trợ hồ sơ ESG</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
