"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("epc-lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200/80 p-3 flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:hidden pointer-events-auto"
        >
          {/* Call Hotline */}
          <a
            href="tel:0913943788"
            className="flex-1 py-3 px-4 rounded-xl border border-solar-gold bg-[#FFFDF2] text-earth-brown text-center text-xs font-black flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors focus:outline-none"
          >
            <Phone className="w-4 h-4 text-solar-gold animate-bounce" />
            <span>Gọi BMC</span>
          </a>

          {/* Request Quote */}
          <button
            type="button"
            onClick={scrollToForm}
            className="flex-[2] py-3 px-4 rounded-xl bg-solar-gold text-deep-brown text-center text-xs font-black flex items-center justify-center gap-2 hover:bg-solar-gold-hover transition-colors focus:outline-none cursor-pointer animate-pulse-glow"
          >
            <Calendar className="w-4 h-4" />
            <span>Nhận báo giá EPC</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
