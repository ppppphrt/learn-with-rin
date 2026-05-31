import Link from "next/link"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata = {
  title: "Website for Business | Learn with Rin",
  description:
    "สร้างเว็บไซต์ธุรกิจที่ดูน่าเชื่อถือ พร้อมขาย พร้อมหาลูกค้าได้จริง ตั้งแต่เริ่มต้นจนมีเว็บจริงโดยไม่ต้องเขียนโค้ด",
}

const forWho = [
  "เจ้าของธุรกิจ SME",
  "เจ้าของร้านค้าออนไลน์",
  "ฟรีแลนซ์และที่ปรึกษา",
  "นักการตลาดดิจิทัล",
  "ผู้ที่ต้องการมีเว็บไซต์ธุรกิจโดยไม่ต้องเขียนโค้ด",
]

const outcomes = [
  "เข้าใจหลักการสร้างเว็บไซต์เพื่อธุรกิจ",
  "วางโครงสร้างเว็บไซต์ที่ช่วยเพิ่มยอดขาย",
  "ออกแบบเว็บไซต์ให้ดูน่าเชื่อถือและเป็นมืออาชีพ",
  "สร้าง Landing Page และ Sales Page ได้ด้วยตัวเอง",
  "เชื่อมต่อ LINE OA, Facebook และแบบฟอร์มเก็บ Lead",
  "เรียนรู้พื้นฐาน SEO เพื่อให้ลูกค้าค้นหาเจอ",
  "มีเว็บไซต์พร้อมใช้งานจริงสำหรับธุรกิจของคุณ",
]

const modules = [
  {
    title: "Module 1: Website Fundamentals",
    items: [
      "ทำไมธุรกิจต้องมีเว็บไซต์",
      "เว็บไซต์ช่วยเพิ่มยอดขายได้อย่างไร",
      "ตัวอย่างเว็บไซต์ธุรกิจที่ประสบความสำเร็จ",
      "Website vs Facebook Page vs LINE OA",
    ],
  },
  {
    title: "Module 2: Planning Your Business Website",
    items: [
      "กำหนดเป้าหมายของเว็บไซต์",
      "วิเคราะห์กลุ่มลูกค้า",
      "วาง Customer Journey",
      "ออกแบบ Sitemap และ User Flow",
    ],
  },
  {
    title: "Module 3: Website Structure & Conversion Design",
    items: [
      "Hero Section",
      "Pain Point & Solution",
      "Product & Service Section",
      "Testimonial & Social Proof",
      "Pricing & Offer",
      "Call-to-Action ที่กระตุ้นการตัดสินใจ",
    ],
  },
  {
    title: "Module 4: Building Your Website",
    items: [
      "สร้างเว็บไซต์แบบ No-Code",
      "การเลือก Theme สี และ Typography",
      "การออกแบบเว็บไซต์ให้ Mobile Friendly",
      "Workshop สร้างเว็บไซต์ธุรกิจจริง",
    ],
  },
  {
    title: "Module 5: Lead Generation & Integrations",
    items: [
      "เชื่อมต่อ LINE OA",
      "เชื่อมต่อ Facebook Messenger",
      "Google Forms และ Lead Capture",
      "Email Collection",
      "ระบบนัดหมายออนไลน์",
    ],
  },
  {
    title: "Module 6: SEO & Business Growth",
    items: [
      "พื้นฐาน SEO สำหรับธุรกิจ",
      "การเขียนเนื้อหาให้ติด Google",
      "การติดตั้ง Analytics",
      "การวัดผลและปรับปรุงเว็บไซต์",
      "Final Project: สร้างเว็บไซต์ธุรกิจของคุณ",
    ],
  },
]

export default function WebsiteCoursePage() {
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
              Website for Business
            </h1>
            <p className="mt-4 text-xl font-bold text-[#2F80ED]">
              สร้างเว็บไซต์ธุรกิจที่ดูน่าเชื่อถือ พร้อมขาย พร้อมหาลูกค้าได้จริง
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              ในยุคที่ลูกค้าค้นหาข้อมูลทุกอย่างบนอินเทอร์เน็ต การมีเพียง Facebook Page หรือ LINE OA อาจไม่เพียงพออีกต่อไป
              คอร์สนี้จะสอนคุณสร้างเว็บไซต์สำหรับธุรกิจตั้งแต่เริ่มต้น วางโครงสร้างที่ช่วยเพิ่มความน่าเชื่อถือ
              นำเสนอสินค้าและบริการได้อย่างมืออาชีพ พร้อมเชื่อมต่อช่องทางการติดต่อและเครื่องมือทางการตลาด
              เพื่อเปลี่ยนผู้เข้าชมให้กลายเป็นลูกค้า
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
                productId="course_website"
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
          <h2 className="mt-2 text-2xl font-black md:text-3xl">พร้อมสร้างเว็บไซต์ธุรกิจของคุณแล้วหรือยัง?</h2>
          <p className="mt-3 text-blue-100">จากปกติ 5,900 บาท เหลือเพียง 1,990 บาท</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CheckoutButton
              productId="course_website"
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
