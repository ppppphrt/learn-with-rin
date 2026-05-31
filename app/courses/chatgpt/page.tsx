import Link from "next/link"
import { CheckCircle2, Gift, ArrowRight, ArrowLeft } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata = {
  title: "คอร์สใช้ ChatGPT สร้างรายได้ | Learn with Rin",
  description:
    "คอร์สสอนใช้ ChatGPT แบบเข้าใจง่าย สำหรับคนที่ไม่มีพื้นฐาน แต่อยากเริ่มสร้างรายได้จากการเขียน งานบริการ และสินค้าดิจิทัล",
}

const features = [
  "ไม่ต้องมีพื้นฐาน ก็ใช้ ChatGPT เป็นภายใน 1 วัน",
  "รู้ทันข้อจำกัดของเวอร์ชันฟรี และใช้ให้ \"คุ้มเกินคาด\"",
  "ได้ Prompt สำเร็จรูป ใช้ต่อยอดสร้างเงินได้ทันที",
  "รวม 10+ ช่องทางหาเงินจาก ChatGPT ที่ทำได้จริง",
  "สร้างโพสต์ บทความ รีวิว และสคริปต์ด้วย AI",
  "สร้าง Digital Product ขายซ้ำได้",
]

const forWho = [
  "แม่ค้าออนไลน์ที่อยากเขียนโพสต์ไวขึ้น ขายดีขึ้น",
  "พนักงานประจำที่อยากมีรายได้เสริมหลังเลิกงาน",
  "นักเรียน/นักศึกษาที่อยากเริ่มหารายได้แบบง่ายๆ",
  "คนที่ไม่มีทุน ไม่มีสกิล แต่มีเวลา + มือถือเครื่องเดียว",
  "ทุกคนที่อยากเปลี่ยน ChatGPT ฟรี ให้กลายเป็นเครื่องผลิตเงิน",
]

const bonuses = ["PDF + Template + Prompt", "เรียนได้ตลอดชีพ", "สอบถามผู้สอนได้"]

export default function ChatGPTCoursePage() {
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
            <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">คอร์สออนไลน์ · เหมาะกับมือใหม่ 0 พื้นฐาน</span>
            <h1 className="mt-4 text-3xl font-black text-[#123A63] md:text-4xl">
              คอร์สใช้ ChatGPT สร้างรายได้
            </h1>
            <p className="mt-4 text-xl font-bold text-[#2F80ED]">
              เปลี่ยน ChatGPT ฟรี ให้กลายเป็นเครื่องมือทำเงิน
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              คอร์สสอนใช้ ChatGPT แบบเข้าใจง่าย สำหรับคนที่ไม่มีพื้นฐาน แต่อยากเริ่มสร้างรายได้จากการเขียน งานบริการ และสินค้าดิจิทัล
            </p>
            <div className="mt-8 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-sm font-bold text-slate-400 line-through">ปกติ 3,900 บาท</p>
                <p className="text-4xl font-black text-[#123A63]">1,990 บาท</p>
              </div>
              <span className="rounded-full bg-[#FFE8A3] px-4 py-2 text-sm font-black text-[#123A63]">ราคาพิเศษ</span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton productId="course_chatgpt" label="สมัครเรียน 1,990 บาท" className="h-12 rounded-full bg-[#4DA3FF] px-8 text-base font-bold text-white shadow-lg hover:bg-[#2F80ED]" />
              <Link href="https://lin.ee/Fs1Ke4ZT" target="_blank" rel="noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-sky-200 px-8 text-base font-semibold text-[#123A63] hover:bg-sky-50">
                ทัก LINE สอบถาม
              </Link>
            </div>
          </div>
        </section>

        {/* For Who */}
        <section className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">คอร์สนี้เหมาะกับใคร?</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {forWho.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-sky-100 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2F80ED]" />
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F4FBFF] px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">สิ่งที่คุณจะได้จากคอร์สนี้</h2>
            <div className="mt-6 space-y-3">
              {features.map((item) => (
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
          <h2 className="text-2xl font-black md:text-3xl">พร้อมเริ่มหาเงินจาก ChatGPT แล้วหรือยัง?</h2>
          <p className="mt-3 text-blue-100">สมัครวันนี้ในราคาพิเศษ ก่อนราคาจะกลับไปที่ปกติ</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton productId="course_chatgpt" label="สมัครเรียน 1,990 บาท" className="h-12 rounded-full bg-white px-8 text-base font-bold text-[#123A63] hover:bg-blue-50" />
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
