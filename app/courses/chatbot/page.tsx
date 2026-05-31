import Link from "next/link"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata = {
  title: "AI Chatbot for Business | Learn with Rin",
  description:
    "สร้าง AI Chatbot ให้ธุรกิจตอบลูกค้า ขายของ และเก็บ Lead ได้อัตโนมัติ เชื่อมต่อ LINE OA, Facebook และ Website โดยไม่ต้องเขียนโค้ด",
}

const forWho = [
  "เจ้าของธุรกิจ SME",
  "เจ้าของร้านค้าออนไลน์",
  "นักการตลาดดิจิทัล",
  "ทีม Customer Service",
  "ผู้ที่อยากใช้ AI ในธุรกิจโดยไม่ต้องเขียนโค้ด",
]

const outcomes = [
  "เข้าใจพื้นฐาน AI Chatbot และการประยุกต์ใช้ในธุรกิจ",
  "ออกแบบ Chatbot Flow และ Customer Journey",
  "สร้าง Chatbot สำหรับ LINE OA, Facebook และ Website",
  "ใช้ Chatbot ช่วยงานขาย การตลาด และบริการลูกค้า",
  "เชื่อมต่อ CRM, Google Sheets และระบบ Automation",
  "วัดผลและปรับปรุง Chatbot ให้มีประสิทธิภาพมากขึ้น",
  "สร้าง Chatbot พร้อมใช้งานจริงสำหรับธุรกิจของคุณ",
]

const modules = [
  {
    title: "Module 1: Introduction to AI Chatbot",
    items: [
      "ทำไมธุรกิจต้องใช้ Chatbot",
      "AI Chatbot vs Rule-based Chatbot",
      "ตัวอย่างธุรกิจที่ใช้ Chatbot ได้ผลจริง",
    ],
  },
  {
    title: "Module 2: Designing a Chatbot Flow",
    items: [
      "Persona ของ Chatbot",
      "Conversation Design",
      "Customer Journey",
      "Workshop ออกแบบ Flow สำหรับธุรกิจจริง",
    ],
  },
  {
    title: "Module 3: Tools & Platforms",
    items: ["ChatGPT API", "Dialogflow", "LINE OA", "Facebook Messenger", "Website Chat Widget"],
  },
  {
    title: "Module 4: Business Use Cases",
    items: [
      "Chatbot สำหรับงานขาย",
      "Chatbot สำหรับบริการลูกค้า",
      "Chatbot สำหรับเก็บ Leads",
      "Workshop สร้าง Chatbot ใช้งานจริง",
    ],
  },
  {
    title: "Module 5: Integration & Automation",
    items: [
      "เชื่อมต่อ CRM",
      "เชื่อมต่อ Google Sheets",
      "Email Automation",
      "n8n / Make Automation",
      "Workshop สร้างระบบอัตโนมัติ",
    ],
  },
  {
    title: "Module 6: Analytics & Scaling",
    items: [
      "KPI และ Conversion Tracking",
      "วิเคราะห์ผลลัพธ์ Chatbot",
      "ปรับปรุงประสิทธิภาพด้วย Generative AI",
      "Final Project",
    ],
  },
]

export default function ChatbotCoursePage() {
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
            <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">คอร์สออนไลน์สด · 5 สัปดาห์</span>
            <h1 className="mt-4 text-3xl font-black text-[#123A63] md:text-4xl">
              AI Chatbot for Business
            </h1>
            <p className="mt-4 text-xl font-bold text-[#2F80ED]">
              สร้าง AI Chatbot ให้ธุรกิจตอบลูกค้า ขายของ และเก็บ Lead ได้อัตโนมัติ
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              ทุกวันนี้ลูกค้าต้องการคำตอบที่รวดเร็ว แต่เจ้าของธุรกิจไม่สามารถเฝ้าตอบแชทได้ตลอดเวลา
              คอร์สนี้จะสอนคุณสร้าง AI Chatbot สำหรับธุรกิจ ตั้งแต่การออกแบบบทสนทนา การเชื่อมต่อกับ Facebook,
              LINE OA และ Website ไปจนถึงการทำ Automation เพื่อช่วยตอบลูกค้า เก็บข้อมูล และส่งต่อให้ทีมขายแบบอัตโนมัติ
            </p>

            {/* Schedule */}
            <div className="mt-8 rounded-2xl border border-sky-200 bg-white p-5 text-sm text-slate-700">
              <p className="font-black text-[#123A63]">วันเวลาเรียน</p>
              <ul className="mt-3 space-y-1.5">
                <li>เรียนออนไลน์สดผ่าน Facebook Group</li>
                <li>ทุกวันอาทิตย์ เวลา 13.00 – 16.00 น.</li>
                <li>จำนวน 5 สัปดาห์ · ดูย้อนหลังได้ตลอด</li>
              </ul>
            </div>

            {/* Price */}
            <div className="mt-8 rounded-2xl bg-[#FFE8A3] p-5">
              <p className="text-sm font-bold text-slate-500">โปรโมชั่นพิเศษ Early Bird — 50 ท่านแรกเท่านั้น</p>
              <div className="mt-2 flex flex-wrap items-end gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-400 line-through">ปกติ 5,900 บาท</p>
                  <p className="text-4xl font-black text-[#123A63]">1,990 บาท</p>
                </div>
                <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-black text-white">Early Bird</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton
                productId="course_chatbot"
                label="สมัครเรียน 1,990 บาท"
                className="h-12 rounded-full bg-[#4DA3FF] px-8 text-base font-bold text-white shadow-lg hover:bg-[#2F80ED]"
              />
              <Link
                href="https://lin.ee/Fs1Ke4ZT"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-sky-200 px-8 text-base font-semibold text-[#123A63] hover:bg-sky-50"
              >
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

        {/* Outcomes */}
        <section className="bg-[#F4FBFF] px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">สิ่งที่คุณจะได้รับ</h2>
            <div className="mt-6 space-y-3">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2F80ED]" />
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">เนื้อหาภายในคอร์ส</h2>
            <div className="mt-6 space-y-4">
              {modules.map((mod) => (
                <div key={mod.title} className="rounded-2xl border border-sky-100 p-6">
                  <p className="font-black text-[#123A63]">{mod.title}</p>
                  <ul className="mt-3 space-y-2">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DA3FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#123A63] to-[#2F80ED] px-5 py-16 text-center text-white lg:px-8">
          <p className="text-sm font-bold text-yellow-300">Early Bird — 50 ท่านแรกเท่านั้น</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">พร้อมสร้าง Chatbot ให้ธุรกิจแล้วหรือยัง?</h2>
          <p className="mt-3 text-blue-100">จากปกติ 5,900 บาท เหลือเพียง 1,990 บาท</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton
              productId="course_chatbot"
              label="สมัครเรียน 1,990 บาท"
              className="h-12 rounded-full bg-white px-8 text-base font-bold text-[#123A63] hover:bg-blue-50"
            />
            <Link
              href="https://lin.ee/Fs1Ke4ZT"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center gap-2 rounded-full border border-white/40 px-8 text-sm font-semibold text-white hover:bg-white/10"
            >
              ทัก LINE สอบถาม <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
