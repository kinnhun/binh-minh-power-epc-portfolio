import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";

// Page-specific EPC Components
import Hero from "@/components/Hero";
import EPCTrustMetrics from "@/components/epc/EPCTrustMetrics";
import EPCBenefits from "@/components/epc/EPCBenefits";
import EPCProjects from "@/components/epc/EPCProjects";
import EPCROI from "@/components/epc/EPCROI";
import EPCProcess from "@/components/epc/EPCProcess";
import EPCPartners from "@/components/epc/EPCPartners";
import EPCFAQ from "@/components/epc/EPCFAQ";
import EPCLeadForm from "@/components/epc/EPCLeadForm";
import StickyCTA from "@/components/epc/StickyCTA";

export const metadata: Metadata = {
  title: "EPC Điện Mặt Trời Công Nghiệp | 50+ Dự Án, 22.3 MWp — Bình Minh Power",
  description: "Bình Minh Power cung cấp EPC điện mặt trời công nghiệp trọn gói cho nhà máy, KCN. Hoàn vốn 2–3 năm, monitoring 24/7, hỗ trợ pháp lý và I-REC. Khảo sát miễn phí trong 48h.",
  keywords: [
    "EPC điện mặt trời công nghiệp",
    "điện mặt trời nhà xưởng",
    "điện mặt trời áp mái nhà máy",
    "lắp đặt điện mặt trời công nghiệp",
    "nhà thầu EPC điện mặt trời",
    "điện mặt trời KCN Bình Dương",
    "điện mặt trời KCN Bình Phước",
    "điện mặt trời áp mái doanh nghiệp",
    "PPA 0 đồng điện mặt trời",
    "I-REC cho điện mặt trời nhà máy",
  ],
  authors: [{ name: "Bình Minh Power" }],
  openGraph: {
    title: "EPC Điện Mặt Trời Công Nghiệp | 50+ Dự Án, 22.3 MWp — Bình Minh Power",
    description: "Bình Minh Power cung cấp EPC điện mặt trời công nghiệp trọn gói cho nhà máy, KCN. Hoàn vốn 2–3 năm, monitoring 24/7, hỗ trợ pháp lý và I-REC. Khảo sát miễn phí trong 48h.",
    url: "https://binhminhpower.com",
    siteName: "Bình Minh Power",
    locale: "vi_VN",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPC Điện Mặt Trời Công Nghiệp | 50+ Dự Án, 22.3 MWp — Bình Minh Power",
    description: "Bình Minh Power cung cấp EPC điện mặt trời công nghiệp trọn gói cho nhà máy, KCN. Hoàn vốn 2–3 năm, monitoring 24/7, hỗ trợ pháp lý và I-REC. Khảo sát miễn phí trong 48h.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-rivr-bg antialiased select-text">
      {/* Sticky Header Menu */}
      <Navbar />

      {/* Main content sections */}
      <main>
        {/* Section 1: Hero (Video backed sleek glassmorphism) */}
        <Hero />

        {/* Section 2: Inline TVL-style Trust Metrics */}
        <EPCTrustMetrics />

        {/* Section 3: Bento Grid Benefits */}
        <EPCBenefits />

        {/* Section 4: Dossiers case studies grid */}
        <EPCProjects />

        {/* Section 5: Landscape Banner ROI */}
        <EPCROI />

        {/* Section 6: Process steps */}
        <EPCProcess />

        {/* Section 7: Monochrome Partner Logo strip */}
        <EPCPartners />

        {/* Section 8: FAQ Accordions */}
        <EPCFAQ />

        {/* Section 9: Detailed B2B Audit Form */}
        <EPCLeadForm />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyCTA />

      {/* Floating Audit Popup */}
      <AuditModal />
    </div>
  );
}
