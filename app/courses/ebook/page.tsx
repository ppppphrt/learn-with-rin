import Link from "next/link"
import { CheckCircle2, Gift, ArrowRight, ArrowLeft } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata = {
  title: "คอร์สสร้าง E-book ด้วย AI | Learn with Rin",
  description:
    "คอร์สจับมือทำสำหรับมือใหม่ที่อยากสร้าง E-book ขายด้วย ChatGPT + Canva ตั้งแต่หาไอเดีย เขียนเนื้อหา ออกแบบ จนถึงวางขายจริง",
}

const curriculum = [
  {
    title: "บทที่ 1: รู้จักโลกของ E-book แบบคนทำขายจริง",
    items: [
      "ทำไม E-book ถึงขายดีแบบไม่ต้องสต๊อก",
      "ตัวอย่าง E-book ที่ขายดีบนโลกออนไลน์",
      "วิธีตั้งราคาที่ดึงดูดใจ",
    ],
  },
  {
    title: "บทที่ 2: หาไอเดีย E-book ให้ขายได้แน่นอน",
    items: [
      "วิธีใช้ ChatGPT ค้นหาหัวข้อขายดีแบบไม่ต้องเดา",
      "เทคนิคหา keyword ด้วย AI + Google Trends",
    ],
  },
  {
    title: "บทที่ 3: ใช้ ChatGPT เขียนเนื้อหาแบบ \"โปร\"",
    items: [
      "วิธีสั่ง AI ให้เขียนเหมือนคนเขียนเอง",
      "ปรับโทนเสียงให้เหมาะกับกลุ่มเป้าหมาย",
    ],
  },
  {
    title: "บทที่ 4: จัดหน้า E-book สวยปังด้วย Canva (ฟรี)",
    items: [
      "ใช้ Canva ออกแบบปกให้ดูมืออาชีพใน 10 นาที",
      "วิธี export เป็นไฟล์ PDF พร้อมขายได้ทันที",
    ],
  },
  {
    title: "บทที่ 5: ช่องทางขาย E-book แบบมืออาชีพ",
    items: ["ขายผ่าน Facebook / LINE / เว็บไซต์ส่วนตัว"],
  },
  {
    title: "บทที่ 6: เทคนิคปั้นยอดขายให้โตเร็ว",
    items: [
      "เทคนิคปั๊มยอดวันแรกให้ปัง",
      "วิธีใช้รีวิว + ความน่าเชื่อถือ",
      "วิธีขายซ้ำ สร้างรายได้เดือนละหมื่น++",
    ],
  },
]

const bonuses = [
  "Template ปก E-book",
  "Prompt เขียน E-book",
  "Cheat Sheet ตั้งราคา",
  "ไฟล์ตัวอย่าง E-book",
]

const forWho = [
  "มือใหม่ที่ไม่เคยเขียนหนังสือมาก่อน",
  "คนที่มีความรู้ แต่ไม่รู้จะเริ่มทำ E-book ยังไง",
  "คนที่อยากมี Passive Income แต่ไม่มีทุน",
  "คนที่อยากสร้างแบรนด์และความน่าเชื่อถือในสายอาชีพ",
]

export default function EbookCoursePage() {
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
            <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">คอร์สออนไลน์</span>
            <h1 className="mt-4 text-3xl font-black text-[#123A63] md:text-4xl">
              คอร์สสร้าง E-book ด้วย AI แบบจับมือทำ
            </h1>
            <p className="mt-4 text-xl font-bold text-[#2F80ED]">
              เปลี่ยนไอเดียธรรมดา ให้กลายเป็นรายได้จริง
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              คอร์สสำหรับมือใหม่ที่อยากสร้าง E-book ขายด้วย ChatGPT และ Canva ตั้งแต่หาไอเดีย เขียนเนื้อหา ออกแบบ จนถึงวางขายจริง
            </p>
            <div className="mt-8 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-sm font-bold text-slate-400 line-through">ปกติ 5,900 บาท</p>
                <p className="text-4xl font-black text-[#123A63]">1,990 บาท</p>
              </div>
              <span className="rounded-full bg-[#FFE8A3] px-4 py-2 text-sm font-black text-[#123A63]">ราคาพิเศษ</span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton productId="course_ebook" label="สมัครเรียน 1,990 บาท" className="h-12 rounded-full bg-[#4DA3FF] px-8 text-base font-bold text-white shadow-lg hover:bg-[#2F80ED]" />
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

        {/* Curriculum */}
        <section className="bg-[#F4FBFF] px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-black text-[#123A63]">หลักสูตร</h2>
            <div className="mt-6 space-y-4">
              {curriculum.map((chapter) => (
                <div key={chapter.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="font-black text-[#123A63]">{chapter.title}</p>
                  <ul className="mt-3 space-y-2">
                    {chapter.items.map((item) => (
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
          <h2 className="text-2xl font-black md:text-3xl">พร้อมเริ่มสร้าง E-book แรกแล้วหรือยัง?</h2>
          <p className="mt-3 text-blue-100">สมัครวันนี้ในราคาพิเศษ ก่อนราคาจะกลับไปที่ปกติ</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton productId="course_ebook" label="สมัครเรียน 1,990 บาท" className="h-12 rounded-full bg-white px-8 text-base font-bold text-[#123A63] hover:bg-blue-50" />
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
