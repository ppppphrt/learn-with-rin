import type { Metadata } from "next"
import "./globals.css"

const BASE_URL = "https://learn-with-rin-m252.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Learn with Rin — หาเงินจาก AI สำหรับมือใหม่",
    template: "%s | Learn with Rin",
  },
  description:
    "เรียนรู้วิธีหาเงินจาก AI และสร้างอาชีพเสริมจาก AI แบบเข้าใจง่าย ไม่ต้องมีพื้นฐาน เริ่มสร้างรายได้จาก E-book, Digital Product และ ChatGPT ได้ทันที",
  keywords: [
    "หาเงินจาก ai",
    "อาชีพเสริมจาก ai",
    "สร้างรายได้จาก ai",
    "ทำเงินจาก chatgpt",
    "ai สำหรับมือใหม่",
    "เรียน ai สร้างรายได้",
    "ขาย ebook ด้วย ai",
    "digital product ai",
    "passive income ai",
    "หารายได้เสริมออนไลน์",
    "learn with rin",
  ],
  openGraph: {
    title: "Learn with Rin — หาเงินจาก AI สำหรับมือใหม่",
    description:
      "เรียนรู้วิธีหาเงินจาก AI และสร้างอาชีพเสริม ไม่ต้องมีพื้นฐาน เริ่มได้ทันที",
    url: BASE_URL,
    siteName: "Learn with Rin",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn with Rin — หาเงินจาก AI สำหรับมือใหม่",
    description: "เรียนรู้วิธีหาเงินจาก AI และสร้างอาชีพเสริม ไม่ต้องมีพื้นฐาน",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
