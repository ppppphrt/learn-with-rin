import Link from "next/link"
import { CheckCircle2, Gift, ArrowRight, ArrowLeft } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata = {
  title: "30 วิธีใช้ AI สร้างรายได้สำหรับมือใหม่ | Learn with Rin",
  description:
    "หนังสือที่รวม 30 วิธีใช้ AI เพื่อเริ่มสร้างรายได้ แม้ไม่มีพื้นฐานก็เริ่มได้ทันที พร้อมแนวทาง แหล่งรายได้ และเครื่องมือแนะนำครบในเล่ม",
}

const bullets = [
  "เขียน E-book ด้วย ChatGPT",
  "ใช้ AI ทำคอนเทนต์ให้ร้านค้า",
  "สร้างภาพด้วย Midjourney",
  "ใช้ AI ขายของออนไลน์",
  "Prompt Writing สำหรับมือใหม่",
]

const bonuses = ["Template ใช้งานได้ทันที", "รายชื่อเว็บไซต์/เครื่องมือ AI ฟรี"]

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-sky-100 bg-white px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Learn with Rin" className="h-10 w-auto object-contain" />
          </Link>
          <Link href="/#product" className="rounded-full bg-[#4DA3FF] px-5 py-2 text-sm font-bold text-white hover:bg-[#2F80ED]">
            ดูคอร์สทั้งหมด
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-white to-[#EAF6FF] px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Link href="/#product" className="mb-6 flex items-center gap-1 text-sm font-medium text-[#2F80ED] hover:underline">
              <ArrowLeft className="h-4 w-4" /> กลับหน้าหลัก
            </Link>
            <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">หนังสือ · เริ่มง่ายที่สุด</span>
            <h1 className="mt-4 text-3xl font-black text-[#123A63] md:text-4xl">
              30 วิธีใช้ AI สร้างรายได้สำหรับมือใหม่
            </h1>
            <p className="mt-4 text-xl font-bold text-[#2F80ED]">
              AI ไม่ได้มาแย่งงาน… แต่มาช่วยหาเงิน
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              หนังสือที่รวม 30 วิธีใช้ AI เพื่อเริ่มสร้างรายได้ แม้ไม่มีพื้นฐานก็เริ่มได้ทันที พร้อมแนวทาง แหล่งรายได้ และเครื่องมือแนะนำครบในเล่ม
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              เหมาะกับแม่ค้าออนไลน์ ฟรีแลนซ์ พนักงานประจำ และคนที่อยากเริ่มธุรกิจเล็กๆ ด้วย AI
            </p>
            <div className="mt-8 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-sm font-bold text-slate-400 line-through">ปกติ 1,590 บาท</p>
                <p className="text-4xl font-black text-[#123A63]">390 บาท</p>
              </div>
              <span className="rounded-full bg-[#FFE8A3] px-4 py-2 text-sm font-black text-[#123A63]">ราคาพิเศษ</span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton productId="book" label="ซื้อหนังสือ 390 บาท" className="h-12 rounded-full bg-[#4DA3FF] px-8 text-base font-bold text-white shadow-lg hover:bg-[#2F80ED]" />
              <Link href="https://lin.ee/Fs1Ke4ZT" target="_blank" rel="noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-sky-200 px-8 text-base font-semibold text-[#123A63] hover:bg-sky-50">
                ทัก LINE เพื่อสั่งซื้อ
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#F4FBFF] px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">สิ่งที่คุณจะได้จากหนังสือเล่มนี้</h2>
            <div className="mt-6 space-y-3">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2F80ED]" />
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <Gift className="h-6 w-6 text-[#2F80ED]" />
              <h2 className="text-2xl font-black text-[#123A63]">Bonus ที่ได้รับ</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {bonuses.map((bonus) => (
                <span key={bonus} className="rounded-full bg-[#EAF6FF] px-4 py-2 font-bold text-[#1E5B9A]">
                  {bonus}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#123A63] to-[#2F80ED] px-5 py-16 text-center text-white lg:px-8">
          <h2 className="text-2xl font-black md:text-3xl">เริ่มต้นเส้นทาง AI ของคุณวันนี้</h2>
          <p className="mt-3 text-blue-100">เพียง 390 บาท ได้ 30 วิธีที่ทำได้จริง</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton productId="book" label="ซื้อหนังสือ 390 บาท" className="h-12 rounded-full bg-white px-8 text-base font-bold text-[#123A63] hover:bg-blue-50" />
            <Link href="https://lin.ee/Fs1Ke4ZT" target="_blank" rel="noreferrer"
              className="flex h-12 items-center gap-2 rounded-full border border-white/40 px-8 text-sm font-semibold text-white hover:bg-white/10">
              ทัก LINE สอบถาม <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
