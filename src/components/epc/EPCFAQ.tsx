"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function EPCFAQ() {
  const faqs = [
    {
      q: "EPC điện mặt trời công nghiệp là gì?",
      a: "EPC là viết tắt của Thiết kế (Engineering), Cung cấp thiết bị (Procurement), và Thi công lắp đặt (Construction). Đây là mô hình tổng thầu trọn gói, trong đó Bình Minh Power chịu toàn bộ trách nhiệm từ khảo sát mái, tính toán kết cấu, chuẩn bị hồ sơ pháp lý, nhập khẩu tấm pin/inverter, đấu nối EVN và bàn giao hệ thống chìa khóa trao tay cho nhà máy.",
    },
    {
      q: "Điện mặt trời nhà xưởng hoàn vốn bao lâu?",
      a: "Thông thường thời gian thu hồi vốn đầu tư (payback period) dao động từ 2–3 năm. Thời gian hoàn vốn thực tế phụ thuộc trực tiếp vào suất đầu tư của hệ thống, diện tích mái khả dụng, biểu giá điện công nghiệp hàng tháng của nhà máy, tỷ lệ tự dùng điện mặt trời vào ban ngày và các chỉ số phụ tải sản xuất.",
    },
    {
      q: "Thi công lắp đặt có làm gián đoạn sản xuất của nhà máy không?",
      a: "Hoàn toàn không. Bình Minh Power xây dựng biện pháp thi công an toàn tuyệt đối và phối hợp chặt chẽ với ban quản lý nhà xưởng. Các công tác như khoan mái, đấu nối tủ điện hoặc cẩu thiết bị nặng được bố trí thực hiện vào giờ nghỉ, ngày cuối tuần hoặc ca dừng lò sản xuất, cam kết duy trì 100% tần suất hoạt động của nhà máy.",
    },
    {
      q: "Nhà máy chưa muốn bỏ vốn đầu tư ban đầu có lắp đặt được không?",
      a: "Có. Chúng tôi cung cấp giải pháp hợp tác PPA 0 Đồng (Hợp đồng mua bán điện). Trong mô hình này, quỹ tài chính liên kết của BMC sẽ đầu tư 100% chi phí lắp đặt và bảo trì. Nhà máy chỉ cần cho thuê mái và mua lại nguồn điện mặt trời phát ra với giá thấp hơn giá điện EVN.",
    },
    {
      q: "Hệ thống điện mặt trời áp mái có được cấp chứng chỉ I-REC không?",
      a: "Có. Bình Minh Power là đơn vị cung cấp tín chỉ I-REC, hỗ trợ trọn gói hồ sơ kỹ thuật, đăng ký thông tin nhà máy và phát hành chứng chỉ năng lượng tái tạo I-REC hàng năm theo sản lượng điện thực tế, giúp doanh nghiệp đạt chuẩn báo cáo ESG, Scope 2 và CBAM.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="epc-faq" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-solar-gold text-xs sm:text-sm font-bold uppercase tracking-widest block">
            Hỏi đáp kỹ thuật
          </span>
          <h2 className="text-navy-accent text-3xl sm:text-4xl font-extrabold tracking-tight">
            Câu hỏi thường gặp về EPC Điện Mặt Trời
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Giải đáp các thắc mắc về kỹ thuật, tài chính, vận hành và thủ tục pháp lý trọn gói cho doanh nghiệp.
          </p>
          <div className="w-16 h-1 bg-solar-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200/80 rounded-2xl bg-[#FCFBF9] overflow-hidden transition-all duration-300 hover:border-solar-gold/30 hover:shadow-xs text-left"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-extrabold text-navy-accent text-sm sm:text-base cursor-pointer focus:outline-none transition-colors duration-200 hover:text-solar-gold select-none"
                >
                  <span>{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full bg-cream-base flex items-center justify-center text-earth-brown transition-transform duration-300 ${isOpen ? "rotate-180 bg-solar-gold/20" : ""}`}>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-stone-700 text-xs sm:text-sm leading-relaxed border-t border-stone-200/40 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
