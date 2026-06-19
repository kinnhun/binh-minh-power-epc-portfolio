import type { Metadata } from "next";
import "./globals.css";

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
    url: "https://binhminhpower.com/epc-portfolio",
    siteName: "Bình Minh Power",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPC Điện Mặt Trời Công Nghiệp | 50+ Dự Án, 22.3 MWp — Bình Minh Power",
    description: "Bình Minh Power cung cấp EPC điện mặt trời công nghiệp trọn gói cho nhà máy, KCN. Hoàn vốn 2–3 năm, monitoring 24/7, hỗ trợ pháp lý và I-REC. Khảo sát miễn phí trong 48h.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased text-stone-900 bg-[#f7f7f5]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
