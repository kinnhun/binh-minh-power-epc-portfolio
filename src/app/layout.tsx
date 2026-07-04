import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NDV6K2WQ');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-stone-900 bg-[#f7f7f5]" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDV6K2WQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
