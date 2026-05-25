import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Learn with Rin — ใช้ AI สร้างรายได้แรกจากสิ่งที่คุณมี",
  description:
    "สอนใช้ AI แบบเข้าใจง่าย สำหรับคนที่อยากเริ่มทำ Digital Product, E-book, Template หรือธุรกิจคนเดียวด้วย AI",
  openGraph: {
    title: "Learn with Rin",
    description: "สอนใช้ AI แบบเข้าใจง่าย สำหรับมือใหม่ที่อยากเริ่มสร้างรายได้",
    locale: "th_TH",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
