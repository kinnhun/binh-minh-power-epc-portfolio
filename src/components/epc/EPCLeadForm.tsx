"use client";

import React, { useState } from "react";
import { Shield, Send, Check, User, Phone, Building, Mail, MapPin, Briefcase, ChevronDown, Zap, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function EPCLeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    phone: "",
    monthlyBill: "",
    interest: "EPC Trọn gói",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ và tên";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Vui lòng nhập chức vụ";
    if (!formData.companyName.trim()) newErrors.companyName = "Vui lòng nhập tên công ty";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      jobTitle: "",
      companyName: "",
      phone: "",
      monthlyBill: "",
      interest: "EPC Trọn gói",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section 
      id="epc-lead-form" 
      className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden select-none border-t border-stone-200/40"
    >
      {/* Premium Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: B2B Context & Quote Testimonial */}
          <div className="lg:col-span-5 text-left space-y-10 lg:sticky lg:top-32">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-350/20 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5 text-solar-gold" />
                <span>Báo giá EPC — Không ràng buộc</span>
              </div>
              
              <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15]">
                Chuyên viên kỹ thuật BMC liên hệ trong <span className="font-normal text-solar-gold">2 giờ</span>.
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Khảo sát thực tế trong 48–72 giờ. Hoàn toàn miễn phí, không có cam kết.
              </p>
            </div>

            {/* Premium Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-200/60 border-l-4 border-l-solar-gold shadow-md hover:shadow-xl hover:bg-white/95 transition-all duration-300 relative overflow-hidden space-y-5"
            >
              {/* Decorative top-right quote background */}
              <div className="absolute right-6 top-6 text-solar-gold/10 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <p className="relative italic text-slate-700 text-xs sm:text-[13.5px] leading-relaxed font-normal select-text pr-6">
                &ldquo;Chúng tôi tham quan dự án <strong className="font-semibold text-slate-900">840kWp</strong> trước khi quyết định. Thấy hệ thống <strong className="font-semibold text-slate-900">hoạt động thực tế</strong>, đội kỹ thuật <strong className="font-semibold text-slate-900">hỗ trợ tận tình</strong> &mdash; đó là lý do chọn BMC.&rdquo;
              </p>
              
              <div className="flex items-center gap-3.5 pt-1 relative">
                <div className="w-11 h-11 rounded-full bg-deep-brown text-solar-gold flex items-center justify-center font-bold text-xs select-none shadow-sm border border-earth-brown/10 shrink-0">
                  GĐ
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-[13px] font-bold text-slate-950 leading-tight">
                    Giám đốc &mdash; Xi Măng Bình Phước
                  </span>
                  <span className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-solar-gold/10 border border-solar-gold/20 text-deep-brown text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-solar-gold animate-pulse" />
                    4MWp EPC &bull; Hoàn vốn 3 năm
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean White Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 text-left border border-slate-200/50 shadow-xl relative overflow-hidden">
              {/* Top Highlight strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-solar-gold" />
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 px-4 text-center flex flex-col items-center justify-center space-y-4 text-deep-brown"
                >
                  <div className="w-14 h-14 rounded-full bg-deep-brown/10 flex items-center justify-center text-deep-brown">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-slate-900">
                    Gửi thông tin thành công!
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                    Kỹ sư trưởng mảng EPC dự án của Bình Minh Power đã tiếp nhận yêu cầu và sẽ gọi lại tư vấn phương án sơ bộ cho bạn trong vòng 2 giờ.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 px-6 py-3 rounded-full bg-solar-gold hover:bg-solar-gold-hover active:bg-solar-gold-active text-deep-brown font-bold text-xs sm:text-sm transition-colors cursor-pointer focus:outline-none shadow-md shadow-solar-gold/15"
                  >
                    Gửi yêu cầu mới
                  </button>
                </motion.div>
              ) : (
                <div className="select-text">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="font-normal text-slate-950 text-xl sm:text-2xl tracking-tight">
                      Nhận báo giá EPC — Không ràng buộc
                    </h3>
                  </div>
 
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="epcFullName">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          id="epcFullName"
                          name="fullName"
                          placeholder="Nguyễn Văn A"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.fullName 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-slate-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-slate-400 font-medium`}
                        />
                        {errors.fullName && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.fullName}</p>}
                      </div>
 
                      {/* Job Title */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="epcJobTitle">
                          Chức vụ *
                        </label>
                        <input
                          type="text"
                          id="epcJobTitle"
                          name="jobTitle"
                          placeholder="Giám đốc, CFO, Kỹ sư trưởng..."
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.jobTitle 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-slate-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-slate-400 font-medium`}
                        />
                        {errors.jobTitle && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.jobTitle}</p>}
                      </div>
 
                      {/* Company Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="epcCompanyName">
                          Tên công ty / nhà máy *
                        </label>
                        <input
                          type="text"
                          id="epcCompanyName"
                          name="companyName"
                          placeholder="Công ty sản xuất..."
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.companyName 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-slate-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-slate-400 font-medium`}
                        />
                        {errors.companyName && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.companyName}</p>}
                      </div>
 
                      {/* Phone */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="epcPhone">
                          Số điện thoại *
                        </label>
                        <input
                          type="text"
                          id="epcPhone"
                          name="phone"
                          placeholder="0901 234 567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                            errors.phone 
                              ? "border-red-500 ring-1 ring-red-200" 
                              : "border-slate-200 focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10"
                          } focus:outline-none transition-all duration-200 placeholder:text-slate-400 font-medium`}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1.5 font-bold">{errors.phone}</p>}
                      </div>
 
                      {/* Monthly Electricity Bill */}
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2" htmlFor="epcMonthlyBill">
                          Hóa đơn điện / tháng
                        </label>
                        <div className="relative">
                          <select
                            id="epcMonthlyBill"
                            name="monthlyBill"
                            value={formData.monthlyBill}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 text-slate-700 bg-slate-50/50 text-xs sm:text-sm rounded-xl border border-slate-200 appearance-none focus:border-slate-800 focus:bg-white focus:ring-1 focus:ring-slate-800/10 focus:outline-none transition-all duration-200 cursor-pointer font-medium"
                          >
                            <option value="">Chọn mức hóa đơn</option>
                            <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                            <option value="50 - 200 triệu">50 - 200 triệu</option>
                            <option value="200 - 500 triệu">200 - 500 triệu</option>
                            <option value="Trên 500 triệu">Trên 500 triệu</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-450">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
 
                    {/* Interest Solutions Checklist */}
                    <div className="pt-2">
                      <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2.5">
                        Quan tâm đến giải pháp nào?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["EPC Trọn gói", "PPA 0 Đồng", "I-REC / CBAM", "Tư vấn kỹ thuật"].map((val) => {
                          const isSelected = formData.interest === val;
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, interest: val }));
                              }}
                              className={`py-3 px-2 rounded-xl border text-center font-bold text-[11px] transition-all duration-200 cursor-pointer select-none ${
                                isSelected
                                  ? "border-solar-gold bg-cream-base text-deep-brown shadow-sm shadow-solar-gold/10"
                                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                              }`}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
 
                    {/* Submit button */}
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 0.995 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-solar-gold hover:bg-solar-gold-hover active:bg-solar-gold-active text-deep-brown font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-60 focus:outline-none shadow-md shadow-solar-gold/20"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Đang xử lý thông tin...</span>
                          </>
                        ) : (
                          <>
                            <span>Nhận báo giá — Chuyên viên gọi lại trong 2h</span>
                            <Send className="w-4 h-4 shrink-0" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
 
                  <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-slate-400 mt-5 pt-4 border-t border-slate-100 font-medium">
                    <Shield className="w-4 h-4 text-solar-gold shrink-0" />
                    <span>🔒 Không ép mua. Khảo sát miễn phí hoàn toàn.</span>
                  </div>
                </div>
              )}
 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
