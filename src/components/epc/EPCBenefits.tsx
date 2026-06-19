"use client";

import React from "react";
import { ShieldCheck, Cpu, MonitorPlay, FileCheck, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function EPCBenefits() {
  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-rivr-bg py-20 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* RIVR-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-text tracking-tight">
              Giải pháp thiết kế & thi công EPC hàng đầu
            </h2>
            <p className="text-sm text-slate-text opacity-75 font-normal">
              Giải quyết triệt để bài toán điện năng & pháp lý cho doanh nghiệp.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={scrollToForm}
            className="px-6 py-2.5 rounded-full bg-solar-gold text-deep-brown font-bold hover:bg-solar-gold-hover text-xs font-normal transition-all cursor-pointer shadow-sm focus:outline-none self-start md:self-end"
          >
            Nhận báo giá ngay
          </motion.button>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Vertical, full height on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 md:p-8 rounded-[1.5rem] bg-white flex flex-col justify-between min-h-[320px] lg:min-h-[420px] text-left border border-slate-200/40 shadow-xs"
          >
            <div className="bg-cream-base border border-solar-gold/10 w-10 h-10 rounded-full flex items-center justify-center border border-solar-gold/20 text-earth-brown">
              <ShieldCheck className="w-5 h-5" />
            </div>
            
            <div className="space-y-4 pt-10">
              <span className="text-[10px] font-normal text-earth-brown/80 uppercase tracking-wider">
                An toàn sản xuất
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-text tracking-tight leading-snug">
                Sản xuất bình thường suốt quá trình thi công
              </h3>
              <p className="text-xs sm:text-sm text-slate-text opacity-80 leading-relaxed font-normal">
                BMC xây dựng phương án thi công an toàn tuyệt đối, gia cố kết cấu và vận chuyển vật liệu theo khung giờ trống để không làm ảnh hưởng đến tiến độ vận hành của nhà máy.
              </p>
            </div>
          </motion.div>

          {/* Right Column (containing 3 cards) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Card (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 md:p-8 rounded-[1.5rem] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left border border-slate-200/40 shadow-xs"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <div className="bg-cream-base border border-solar-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-earth-brown">
                    <MonitorPlay className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-normal text-earth-brown/80 uppercase tracking-wider">
                    Vận hành thông minh
                  </span>
                </div>
                <h3 className="text-xl font-normal text-slate-text tracking-tight">
                  Monitoring 24/7 realtime qua app di động
                </h3>
                <p className="text-xs text-slate-text opacity-85 leading-relaxed font-normal">
                  Theo dõi sản lượng điện tự tiêu thụ, cảnh báo sự cố kỹ thuật và tính toán lượng chi phí tiết kiệm theo thời gian thực trực quan qua ứng dụng.
                </p>
              </div>
              
              <div className="text-right shrink-0">
                <span className="text-3xl font-normal text-deep-brown tracking-tight">
                  Realtime
                </span>
                <span className="block text-[9px] text-slate-text opacity-60 uppercase tracking-widest mt-1">
                  Đo phụ tải liên tục
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
                className="p-6 rounded-[1.5rem] bg-white flex flex-col justify-between gap-4 text-left border border-slate-200/40 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-cream-base border border-solar-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-earth-brown">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-normal text-earth-brown/80 uppercase tracking-wider">
                    Bảo hành 25 năm
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <h4 className="text-lg font-normal text-slate-text tracking-tight leading-tight">
                    Huawei, Sungrow, Canadian Solar
                  </h4>
                  <p className="text-xs text-slate-text opacity-80 leading-relaxed font-normal">
                    Thiết bị từ top 3 toàn cầu. Chính sách bảo hành hiệu suất tấm pin lên đến 25 năm, inverter bảo hành chính hãng.
                  </p>
                </div>
              </motion.div>

              {/* Bottom Right Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-[1.5rem] bg-white flex flex-col justify-between gap-4 text-left border border-slate-200/40 shadow-xs group"
              >
                <div className="flex items-center justify-between">
                  <div className="bg-cream-base border border-solar-gold/10 w-8 h-8 rounded-full flex items-center justify-center text-earth-brown">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-normal text-earth-brown/80 uppercase tracking-wider">
                    Chứng chỉ xanh
                  </span>
                </div>

                <div className="space-y-2 mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-normal text-slate-text tracking-tight leading-tight">
                      I-REC included tự động
                    </h4>
                    <p className="text-xs text-slate-text opacity-80 leading-relaxed font-normal mt-1">
                      Cấp hàng năm phục vụ báo cáo Scope 2/ESG xuất khẩu EU, đăng ký trực tiếp tổ chức I-REC Standard.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-earth-brown hover:text-solar-gold-hover transition-colors cursor-pointer mt-3 font-medium" onClick={scrollToForm}>
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
