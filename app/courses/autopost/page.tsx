import Link from "next/link"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata = {
  title: "Workflow Auto Post Facebook | Learn with Rin",
  description:
    "สร้างระบบโพสต์ Facebook อัตโนมัติ ดึงคอนเทนต์จาก Google Sheets, Notion หรือ AI มาโพสต์ได้เอง โดยไม่ต้องเขียนโค้ด",
}

const forWho = [
  "เจ้าของธุรกิจ SME",
  "นักการตลาดดิจิทัล",
  "แอดมินเพจ",
  "Creator และ Content Creator",
  "ผู้ที่ต้องการใช้ AI และ Automation ในการทำคอนเทนต์",
  "ผู้ที่ไม่มีพื้นฐานการเขียนโค้ด",
]

const outcomes = [
  "เข้าใจหลักการทำ Content Automation",
  "สร้าง Workflow โพสต์ Facebook อัตโนมัติ",
  "เชื่อมต่อ Facebook Page กับระบบ Automation",
  "ใช้ AI ช่วยสร้าง Caption และ Content",
  "ดึงข้อมูลจาก Google Sheets, Notion หรือ Drive",
  "ตั้งเวลาการโพสต์อัตโนมัติ",
  "ลดเวลาการทำคอนเทนต์และเพิ่มความสม่ำเสมอในการโพสต์",
]

const modules = [
  {
    title: "Module 1: Introduction to Content Automation",
    items: [
      "ทำไมธุรกิจควรใช้ Automation",
      "Auto Post ช่วยลดงานอะไรได้บ้าง",
      "ตัวอย่างธุรกิจที่ใช้ Automation สำเร็จ",
    ],
  },
  {
    title: "Module 2: Facebook Auto Post Fundamentals",
    items: [
      "Facebook Graph API คืออะไร",
      "ข้อกำหนดและสิทธิ์การใช้งาน",
      "การเชื่อมต่อ Facebook Page",
    ],
  },
  {
    title: "Module 3: Content Sources",
    items: ["Google Sheets", "Notion", "Google Drive", "Airtable", "AI Generated Content"],
  },
  {
    title: "Module 4: Building Auto Post Workflow",
    items: [
      "Workflow Design",
      "Trigger และ Scheduling",
      "ดึงข้อความและรูปภาพอัตโนมัติ",
      "โพสต์ลง Facebook Page อัตโนมัติ",
      "Workshop สร้าง Auto Post Workflow",
    ],
  },
  {
    title: "Module 5: AI-Powered Content Creation",
    items: [
      "ใช้ ChatGPT สร้าง Caption",
      "สร้างหลาย Caption จากหัวข้อเดียว",
      "สร้าง Content Calendar อัตโนมัติ",
      "AI Content Approval Workflow",
    ],
  },
  {
    title: "Module 6: Advanced Automation",
    items: [
      "Multi-Page Posting",
      "Approval Process ก่อนโพสต์",
      "แจ้งเตือนผ่าน LINE หรือ Email",
      "Error Handling และ Monitoring",
      "Final Project: ระบบ Auto Post สำหรับธุรกิจจริง",
    ],
  },
]

const tools = ["n8n", "Make", "Facebook Graph API", "ChatGPT", "Google Sheets", "Google Drive", "Notion"]

export default function AutoPostCoursePage() {
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
            <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">คอร์สออนไลน์สด · 6 Module</span>
            <h1 className="mt-4 text-3xl font-black text-[#123A63] md:text-4xl">
              Workflow Auto Post Facebook
            </h1>
            <p className="mt-4 text-xl font-bold text-[#2F80ED]">
              สร้างระบบโพสต์ Facebook อัตโนมัติ ลดเวลา เพิ่มความสม่ำเสมอในการทำคอนเทนต์
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              เบื่อกับการต้องโพสต์คอนเทนต์เองทุกวัน? คอร์สนี้จะสอนคุณสร้างระบบ Auto Post ที่สามารถนำคอนเทนต์จาก
              Google Sheets, Notion, Google Drive หรือ AI มาสร้างและโพสต์ลง Facebook ได้แบบอัตโนมัติ
              พร้อมเรียนรู้การใช้ Automation Tools เพื่อช่วยลดงานซ้ำๆ และเพิ่มประสิทธิภาพการตลาดให้กับธุรกิจ
            </p>

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
                productId="course_autopost"
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

        {/* Tools */}
        <section className="bg-[#F4FBFF] px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">เครื่องมือที่ใช้ในคอร์ส</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white px-4 py-2 font-bold text-[#1E5B9A] shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#123A63] to-[#2F80ED] px-5 py-16 text-center text-white lg:px-8">
          <p className="text-sm font-bold text-yellow-300">Early Bird — 50 ท่านแรกเท่านั้น</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">พร้อมสร้างระบบ Auto Post แล้วหรือยัง?</h2>
          <p className="mt-3 text-blue-100">จากปกติ 5,900 บาท เหลือเพียง 1,990 บาท</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton
              productId="course_autopost"
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
