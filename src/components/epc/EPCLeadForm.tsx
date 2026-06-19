"use client";

import React, { useState } from "react";
import { Shield, Send, Check, User, Phone, Building, Mail, MapPin, Briefcase, ChevronDown, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function EPCLeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    monthlyBill: "",
    interest: "EPC Trọn gói",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    "Bình Dương",
    "Đồng Nai",
    "Long An",
    "TP. Hồ Chí Minh",
    "Bà Rịa - Vũng Tàu",
    "Bình Phước",
    "Bình Định",
    "Khác...",
  ];

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

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.location) newErrors.location = "Vui lòng chọn tỉnh/KCN";

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
      email: "",
      location: "",
      monthlyBill: "",
      interest: "EPC Trọn gói",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section 
      id="epc-lead-form" 
      className="py-24 bg-gradient-to-b from-rivr-bg via-white/50 to-rivr-bg text-slate-text relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: B2B Context & Quote Testimonial */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-8">
            <div className="space-y-4">
              <span className="text-earth-brown text-xs font-bold uppercase tracking-widest block">
                Báo giá EPC — Không ràng buộc
              </span>
              <h2 className="text-slate-900 text-3xl sm:text-4xl font-normal tracking-tight leading-tight">
                Chuyên viên kỹ thuật BMC liên hệ trong 2 giờ.
              </h2>
              <p className="text-xs sm:text-sm text-slate-text opacity-80 leading-relaxed font-normal">
                Khảo sát thực tế mái xưởng & phân tích hồ sơ phụ tải điện trong 48–72 giờ. Hoàn toàn miễn phí, không có cam kết.
              </p>
            </div>

            {/* Premium Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-[1.5rem] bg-white border border-slate-200/50 shadow-xs space-y-4"
            >
              <p className="italic text-xs sm:text-sm leading-relaxed text-slate-text font-normal">
                &ldquo;Chúng tôi tham quan dự án 840kWp trước khi quyết định. Thấy hệ thống hoạt động thực tế, đội kỹ thuật hỗ trợ tận tình — đó là lý do chọn BMC.&rdquo;
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-solar-gold/10 text-earth-brown flex items-center justify-center font-bold text-xs">
                  GĐ
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-800">
                    Giám đốc — Xi Măng Bình Phước
                  </span>
                  <span className="block text-[10px] text-slate-text opacity-60">
                    4MWp EPC, hoàn vốn 3 năm
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean White Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 text-left border border-slate-200/60 shadow-lg relative overflow-hidden">
              {/* Top Highlight strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-solar-gold text-deep-brown font-bold" />
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4 text-deep-brown"
                >
                  <div className="w-14 h-14 rounded-full bg-cream-base border border-solar-gold/10 border border-solar-gold/20 flex items-center justify-center text-earth-brown">
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
                    className="mt-6 px-6 py-2.5 rounded-full bg-solar-gold text-deep-brown font-bold font-normal text-xs sm:text-sm hover:bg-solar-gold-hover transition-colors cursor-pointer focus:outline-none"
                  >
                    Gửi yêu cầu mới
                  </button>
                </motion.div>
              ) : (
                <div className="select-text">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <h3 className="font-normal text-slate-950 text-xl tracking-tight">
                      Nhận khảo sát & Báo giá EPC
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcFullName">
                          Họ và tên *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="epcFullName"
                            name="fullName"
                            placeholder="Nguyễn Văn A"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                              errors.fullName 
                                ? "border-red-500 ring-1 ring-red-200" 
                                : "border-slate-200 focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20"
                            } focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.fullName}</p>}
                      </div>

                      {/* Job Title */}
                      <div>
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcJobTitle">
                          Chức vụ *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="epcJobTitle"
                            name="jobTitle"
                            placeholder="Giám đốc, CFO, Kỹ sư trưởng..."
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                              errors.jobTitle 
                                ? "border-red-500 ring-1 ring-red-200" 
                                : "border-slate-200 focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20"
                            } focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.jobTitle && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.jobTitle}</p>}
                      </div>

                      {/* Company Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcCompanyName">
                          Tên công ty / nhà máy *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <Building className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="epcCompanyName"
                            name="companyName"
                            placeholder="Công ty sản xuất..."
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                              errors.companyName 
                                ? "border-red-500 ring-1 ring-red-200" 
                                : "border-slate-200 focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20"
                            } focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.companyName && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.companyName}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcPhone">
                          Số điện thoại *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="epcPhone"
                            name="phone"
                            placeholder="0901 234 567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border ${
                              errors.phone 
                                ? "border-red-500 ring-1 ring-red-200" 
                                : "border-slate-200 focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20"
                            } focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcEmail">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="epcEmail"
                            name="email"
                            placeholder="email@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 text-slate-800 bg-slate-50/50 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Monthly Electricity Bill */}
                      <div>
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcMonthlyBill">
                          Hóa đơn điện / tháng
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <Zap className="w-4 h-4" />
                          </div>
                          <select
                            id="epcMonthlyBill"
                            name="monthlyBill"
                            value={formData.monthlyBill}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-10 py-2.5 text-slate-850 bg-slate-50/50 text-xs sm:text-sm rounded-xl border border-slate-200 appearance-none focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20 focus:outline-none transition-all cursor-pointer"
                          >
                            <option value="">Chọn mức hóa đơn</option>
                            <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                            <option value="50 - 200 triệu">50 - 200 triệu</option>
                            <option value="200 - 500 triệu">200 - 500 triệu</option>
                            <option value="Trên 500 triệu">Trên 500 triệu</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-slate-700 text-xs font-bold mb-1.5" htmlFor="epcLocation">
                          Tỉnh / KCN *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-text/60">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <select
                            id="epcLocation"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-10 py-2.5 text-slate-855 bg-slate-50/50 text-xs sm:text-sm rounded-xl border appearance-none cursor-pointer ${
                              errors.location 
                                ? "border-red-500 ring-1 ring-red-200" 
                                : "border-slate-200 focus:border-solar-gold focus:bg-white focus:ring-2 focus:ring-solar-gold/20"
                            } focus:outline-none transition-all`}
                          >
                            <option value="">-- Chọn --</option>
                            {locations.map((loc) => (
                              <option key={loc} value={loc}>
                                {loc}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                        {errors.location && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.location}</p>}
                      </div>
                    </div>

                    {/* Interest Solutions Checklist */}
                    <div className="pt-2">
                      <label className="block text-slate-700 text-xs font-bold mb-2">
                        Quan tâm đến giải pháp nào?
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["EPC Trọn gói", "PPA 0 Đồng", "I-REC / CBAM"].map((val) => {
                          const isSelected = formData.interest === val;
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, interest: val }));
                              }}
                              className={`py-2 px-3 rounded-lg border text-center font-semibold text-xs transition-all cursor-pointer select-none ${
                                isSelected
                                  ? "border-solar-gold bg-cream-base border border-solar-gold/10 text-deep-brown"
                                  : "border-slate-200 bg-white hover:bg-slate-50 text-stone-500"
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
                        className="w-full py-3.5 rounded-full bg-solar-gold text-deep-brown font-bold hover:bg-solar-gold-hover font-normal text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60 focus:outline-none shadow-md shadow-solar-gold/15"
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

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 mt-4 pt-3.5 border-t border-stone-100">
                    <Shield className="w-3.5 h-3.5 text-solar-gold shrink-0" />
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
