"use client"

import { motion } from "framer-motion"
import {
  ArrowRight, CheckCircle2, Sparkles, BookOpen, Download,
  MessageCircle, PenLine, Laptop, Target, Star, ChevronRight,
  Gift, Tags, GraduationCap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SubscribeForm } from "@/components/subscribe-form"
import { CheckoutButton } from "@/components/checkout-button"

const articles = [
  {
    title: "ใช้ AI หาเงินยังไง สำหรับมือใหม่ที่ยังไม่มีประสบการณ์",
    category: "AI สำหรับมือใหม่",
    desc: "เริ่มจากสิ่งที่คุณรู้อยู่แล้ว แล้วใช้ AI ช่วยเปลี่ยนให้เป็นสินค้าเล็ก ๆ ที่ทดสอบขายได้จริง",
  },
  {
    title: "AI ไม่ได้เสกเงิน แต่มันช่วยให้เริ่มธุรกิจคนเดียวได้เร็วขึ้น",
    category: "One-Person Business",
    desc: "เข้าใจบทบาทที่แท้จริงของ AI: ลดเวลา ลดต้นทุน และช่วยให้คุณทดลองไอเดียได้ไวขึ้น",
  },
  {
    title: "เงินบาทแรกสำคัญกว่าไอเดียธุรกิจล้านบาท เพราะอะไร",
    category: "Mindset",
    desc: "รายได้แรกคือหลักฐานว่ามีคนยอมจ่าย และเป็นจุดเริ่มต้นของการเรียนรู้จากตลาดจริง",
  },
]

const steps = [
  {
    icon: Target,
    title: "หาไอเดียจากสิ่งที่คุณมี",
    text: "เริ่มจากทักษะ ประสบการณ์ งานที่เคยทำ หรือปัญหาที่คุณเข้าใจดี",
  },
  {
    icon: Sparkles,
    title: "ใช้ AI ช่วยสร้าง Product",
    text: "เปลี่ยนไอเดียเป็น E-book, Template, Workbook, Prompt Pack หรือบริการเล็ก ๆ",
  },
  {
    icon: MessageCircle,
    title: "ทดสอบขายเพื่อไปถึงเงินบาทแรก",
    text: "ไม่ต้องรอให้สมบูรณ์แบบ เริ่มจากตลาดเล็ก ๆ แล้วปรับจาก feedback จริง",
  },
]

const resources = [
  "Checklist เริ่มหาเงินจาก AI ใน 7 วัน",
  "Template วางแผน E-book เล่มแรก",
  "Prompt Pack สำหรับทำ Digital Product",
  "Worksheet หาไอเดียรายได้จากทักษะตัวเอง",
]

const products = [
  {
    productId: "book",
    type: "หนังสือ",
    badge: "เริ่มง่ายที่สุด",
    icon: BookOpen,
    title: "30 วิธีใช้ AI สร้างรายได้สำหรับมือใหม่",
    hook: "AI ไม่ได้มาแย่งงาน… แต่มาช่วยหาเงิน",
    description: "หนังสือที่รวม 30 วิธีใช้ AI เพื่อเริ่มสร้างรายได้ แม้ไม่มีพื้นฐานก็เริ่มได้ทันที พร้อมแนวทาง แหล่งรายได้ และเครื่องมือแนะนำครบในเล่ม",
    bullets: ["เขียน E-book ด้วย ChatGPT", "ใช้ AI ทำคอนเทนต์ให้ร้านค้า", "สร้างภาพด้วย Midjourney", "ใช้ AI ขายของออนไลน์", "Prompt Writing สำหรับมือใหม่"],
    bonuses: ["Template ใช้งานได้ทันที", "รายชื่อเว็บไซต์/เครื่องมือ AI ฟรี"],
    fit: "เหมาะกับแม่ค้าออนไลน์ ฟรีแลนซ์ พนักงานประจำ และคนที่อยากเริ่มธุรกิจเล็ก ๆ ด้วย AI",
    price: "390 บาท",
    oldPrice: "1,590 บาท",
    checkoutLabel: "ซื้อหนังสือ 390 บาท",
    secondaryCta: "ทัก LINE เพื่อสั่งซื้อ",
    highlight: false,
  },
  {
    productId: "course_ebook",
    type: "คอร์สออนไลน์",
    badge: "แนะนำสำหรับคนอยากมีสินค้าเอง",
    icon: GraduationCap,
    title: "คอร์สสร้าง E-book ด้วย AI แบบจับมือทำ",
    hook: "เปลี่ยนไอเดียธรรมดา ให้กลายเป็นรายได้จริง",
    description: "คอร์สสำหรับมือใหม่ที่อยากสร้าง E-book ขายด้วย ChatGPT และ Canva ตั้งแต่หาไอเดีย เขียนเนื้อหา ออกแบบ จนถึงวางขายจริง",
    bullets: ["หาไอเดีย E-book ที่ขายได้", "ใช้ ChatGPT ช่วยเขียนแบบมืออาชีพ", "จัดหน้า E-book ด้วย Canva", "ขายผ่าน Facebook / LINE / เว็บไซต์", "ตั้งระบบส่งไฟล์อัตโนมัติ"],
    bonuses: ["Template ปก E-book", "Prompt เขียน E-book", "Cheat Sheet ตั้งราคา", "ไฟล์ตัวอย่าง E-book"],
    fit: "เหมาะกับคนที่มีความรู้ แต่อยากเปลี่ยนเป็นสินค้าดิจิทัลที่ขายซ้ำได้",
    price: "1,990 บาท",
    oldPrice: "5,900 บาท",
    checkoutLabel: "สมัครเรียน 1,990 บาท",
    secondaryCta: "ทัก LINE เพื่อสมัครเรียน",
    highlight: true,
  },
  {
    productId: "course_chatgpt",
    type: "คอร์สออนไลน์",
    badge: "เหมาะกับมือใหม่ 0 พื้นฐาน",
    icon: Laptop,
    title: "คอร์สใช้ ChatGPT สร้างรายได้",
    hook: "เปลี่ยน ChatGPT ฟรี ให้กลายเป็นเครื่องมือทำเงิน",
    description: "คอร์สสอนใช้ ChatGPT แบบเข้าใจง่าย สำหรับคนที่ไม่มีพื้นฐาน แต่อยากเริ่มสร้างรายได้จากการเขียน งานบริการ และสินค้าดิจิทัล",
    bullets: ["เข้าใจ ChatGPT แบบไม่ต้องเป็นสายเทคนิค", "เขียน Prompt ให้เอาไปทำเงินต่อได้", "10+ ช่องทางหาเงินจาก ChatGPT", "สร้างโพสต์ บทความ รีวิว และสคริปต์", "สร้าง Digital Product ขายซ้ำได้"],
    bonuses: ["PDF + Template + Prompt", "เรียนได้ตลอดชีพ", "สอบถามผู้สอนได้"],
    fit: "เหมาะกับแม่ค้าออนไลน์ พนักงานประจำ นักเรียน/นักศึกษา และคนที่มีมือถือเครื่องเดียว",
    price: "1,990 บาท",
    oldPrice: "3,900 บาท",
    checkoutLabel: "สมัครเรียน 1,990 บาท",
    secondaryCta: "ทัก LINE เพื่อสมัครเรียน",
    highlight: false,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Learn with Rin" className="h-11 w-auto object-contain" />
          </div>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#start" className="hover:text-blue-500">เริ่มที่นี่</a>
            <a href="#blog" className="hover:text-blue-500">บทความ</a>
            <a href="#free" className="hover:text-blue-500">ไฟล์ฟรี</a>
            <a href="#product" className="hover:text-blue-500">E-book</a>
          </div>
          <Button className="rounded-full bg-[#4DA3FF] px-5 text-white hover:bg-[#2F80ED]">
            รับ Checklist ฟรี
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4FBFF] to-[#EAF6FF]">
          <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-[#1E5B9A] shadow-sm">
                <Star className="h-4 w-4 fill-yellow-300 text-yellow-400" />
                สำหรับมือใหม่ที่อยากเริ่มหาเงินออนไลน์ด้วย AI
              </div>
              <h1 className="max-w-3xl font-black font-sans text-[#123A63] space-y-5">
                <span className="block text-3xl md:text-5xl">ใช้ AI ให้เป็น แล้วเริ่มสร้าง</span>
                <span className="block text-3xl md:text-5xl">
                  <span className="rounded-2xl bg-[#FFE8A3] px-3 py-1">รายได้</span>{" "}
                  จากสิ่งที่คุณมี
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Learn with Rin สอนใช้ AI แบบเข้าใจง่าย ไม่ซับซ้อน สำหรับคนที่อยากเริ่มทำ Digital Product, E-book, Template หรือธุรกิจคนเดียวด้วย AI
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-13 rounded-full bg-[#4DA3FF] px-7 text-base font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#2F80ED]">
                  เริ่มเรียนฟรีจากบทความ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-13 rounded-full border-sky-200 bg-white px-7 text-base font-semibold text-[#123A63] hover:bg-sky-50" asChild>
                  <a href="#free">ดาวน์โหลด Checklist ฟรี</a>
                </Button>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-center">
                {[
                  { value: "7 วัน", label: "เริ่มวางแผนรายได้แรก" },
                  { value: "0 ทุน", label: "เริ่มจากสิ่งที่มี" },
                  { value: "AI", label: "ช่วยลดเวลาและต้นทุน" },
                ].map((stat) => (
                  <div key={stat.value} className="rounded-3xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-black text-[#123A63]">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative z-10">
              <div className="rounded-[2rem] border border-sky-100 bg-white p-5 shadow-2xl shadow-sky-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#EAF6FF] via-white to-[#DFF3FF] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#1E5B9A]">AI Income Roadmap</p>
                      <p className="text-xs text-slate-500">3 ขั้นตอนสู่รายได้แรก</p>
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-500 shadow-sm">Beginner</div>
                  </div>
                  <div className="space-y-4">
                    {steps.map((step, index) => {
                      const Icon = step.icon
                      return (
                        <div key={step.title} className="flex gap-4 rounded-3xl bg-white p-4 shadow-sm">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[#2F80ED]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-sky-500">STEP {index + 1}</p>
                            <h3 className="font-bold text-[#123A63]">{step.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-slate-500">{step.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Start Here */}
        <section id="start" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-[#2F80ED]">Start Here</p>
            <h2 className="mt-3 text-2xl font-black leading-[3.0] font-sans text-[#123A63] md:text-4xl">ใช้ AI ทุกวัน แต่ยังไม่รู้จะเอาไปทำเงินยังไง?</h2>
            <p className="mt-7 text-base leading-8 text-slate-600">
              ปัญหาไม่ใช่คุณใช้ AI ไม่เก่ง แต่คุณอาจยังไม่รู้ว่าจะเอา AI ไปแก้ปัญหาอะไร และเปลี่ยนเป็นสินค้าเล็ก ๆ ที่มีคนยอมจ่ายได้อย่างไร
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="rounded-[1.75rem] border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[#2F80ED]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#123A63]">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Brand Belief */}
        <section className="bg-[#F4FBFF] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div>
              <p className="font-bold text-[#2F80ED]">Brand Belief</p>
              <h2 className="mt-3 text-2xl font-black leading-[3.0] font-sans text-[#123A63] md:text-4xl">เราไม่ได้สอนว่า AI เสกเงินได้</h2>
              <p className="mt-7 text-base leading-8 text-slate-600">
                แต่เราสอนให้ใช้ AI ลดเวลา ลดต้นทุน และเริ่มทดลองไอเดียเล็ก ๆ เพื่อให้คุณไปถึงรายได้แรกได้เร็วขึ้น
              </p>
              <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
                <p className="text-2xl font-black leading-[3.0] text-[#123A63]">
                  "เป้าหมายแรกไม่ใช่เงินล้าน แต่คือเงินบาทแรกที่พิสูจน์ว่าคุณทำได้"
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["ไม่ต้องเก่ง AI ระดับลึก", "ไม่ต้องมีทีม", "ไม่ต้องมีทุนเยอะ", "เริ่มจากมือถือหรือคอมเครื่องเดียว", "เปลี่ยนความรู้เป็นสินค้า", "เรียนรู้จากตลาดจริง"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2F80ED]" />
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold text-[#2F80ED]">บทความ</p>
              <h2 className="mt-3 text-3xl font-black font-sans leading-[3.0] text-[#123A63] md:text-4xl">บทความเริ่มต้นที่ควรอ่าน</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">เนื้อหาสำหรับคนที่อยากเริ่มต้นใช้ AI หาเงินออนไลน์โดยไม่รู้จะเริ่มจากไหน</p>
            </div>
            <Button variant="outline" className="rounded-full border-sky-200 text-[#123A63] hover:bg-sky-50">ดูบทความทั้งหมด</Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.title} className="group overflow-hidden rounded-[1.75rem] border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100">
                <div className="h-36 bg-gradient-to-br from-[#DFF3FF] via-white to-[#A7D8F5] p-5">
                  <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#1E5B9A] shadow-sm">{article.category}</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-black leading-[3.0] text-[#123A63]">{article.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{article.desc}</p>
                  <div className="mt-5 flex items-center font-bold text-[#2F80ED]">
                    อ่านต่อ <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Free Resources — form ใช้งานได้จริง */}
        <section id="free" className="bg-gradient-to-br from-[#123A63] to-[#2F80ED] py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_.9fr] lg:px-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Download className="h-4 w-4" /> Free Resources
              </div>
              <h2 className="text-2xl font-black font-sans leading-[3.0] md:text-4xl">รับไฟล์ฟรีสำหรับเริ่มสร้างรายได้จาก AI ใน 7 วัน</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
                เหมาะกับคนที่ยังไม่รู้จะเริ่มจากอะไร ไฟล์นี้จะช่วยให้คุณเห็นเส้นทางจาก "ใช้ AI เล่น ๆ" ไปสู่ "ไอเดียรายได้แรก" ได้ชัดขึ้น
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {resources.map((resource) => (
                  <div key={resource} className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="font-medium">{resource}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-7 text-slate-800 shadow-2xl shadow-blue-900/20">
              <p className="text-sm font-bold text-[#2F80ED]">ดาวน์โหลดฟรี</p>
              <h3 className="mt-2 text-2xl font-black text-[#123A63]">Checklist: เริ่มหาเงินจาก AI ใน 7 วัน</h3>
              <SubscribeForm />
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="product" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-[#2F80ED]">Products & Courses</p>
            <h2 className="mt-3 text-3xl font-black font-sans leading-[3.0] text-[#123A63] md:text-4xl">
              สินค้าและคอร์สที่ช่วยให้คุณเริ่มสร้างรายได้ด้วย AI
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              เลือกเริ่มจากหนังสือ คอร์สจับมือทำ หรือคอร์สใช้ ChatGPT สร้างรายได้
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Card
                  key={product.title}
                  className={`group relative overflow-hidden rounded-[2rem] border bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-100 ${
                    product.highlight ? "border-[#4DA3FF] shadow-xl shadow-sky-100" : "border-sky-100 shadow-sm"
                  }`}
                >
                  {product.highlight && (
                    <div className="absolute right-5 top-5 z-10 rounded-full bg-[#FFE8A3] px-3 py-1 text-xs font-black text-[#123A63] shadow-sm">
                      Popular
                    </div>
                  )}
                  <div className={`h-3 ${product.highlight ? "bg-[#4DA3FF]" : "bg-[#DFF3FF]"}`} />
                  <CardContent className="flex h-full flex-col p-7">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${product.highlight ? "bg-[#4DA3FF] text-white" : "bg-[#EAF6FF] text-[#2F80ED]"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-wide text-[#2F80ED]">{product.type}</p>
                        <div className="mt-2 inline-flex rounded-full bg-[#F4FBFF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">
                          {product.badge}
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-6 text-2xl font-black leading-[3.0] text-[#123A63]">{product.title}</h3>
                    <p className="mt-3 text-base font-bold leading-7 text-[#1E5B9A]">{product.hook}</p>
                    <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
                    <div className="mt-6 space-y-3">
                      {product.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2F80ED]" />
                          <p className="text-sm font-medium leading-6 text-slate-700">{bullet}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-3xl bg-[#F4FBFF] p-5">
                      <div className="mb-3 flex items-center gap-2 font-black text-[#123A63]">
                        <Gift className="h-5 w-5 text-[#2F80ED]" />
                        Bonus ที่ได้รับ
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.bonuses.map((bonus) => (
                          <span key={bonus} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
                            {bonus}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 rounded-3xl border border-sky-100 bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">เหมาะกับ</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{product.fit}</p>
                    </div>
                    <div className="mt-auto pt-7">
                      <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-slate-400 line-through">ปกติ {product.oldPrice}</p>
                          <p className="text-3xl font-black text-[#123A63]">{product.price}</p>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-[#FFE8A3] px-3 py-2 text-xs font-black text-[#123A63]">
                          <Tags className="h-4 w-4" /> ราคาพิเศษ
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <CheckoutButton
                          productId={product.productId}
                          label={product.checkoutLabel}
                        />
                        <Button variant="outline" className="h-12 rounded-full border-sky-200 bg-white text-[#123A63] hover:bg-sky-50" asChild>
                          <a href="https://lin.ee/Fs1Ke4ZT" target="_blank" rel="noreferrer">
                            {product.secondaryCta}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 rounded-[2rem] bg-[#F4FBFF] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[.85fr_1.15fr] md:items-center">
              <div>
                <p className="font-bold text-[#2F80ED]">เลือกไม่ถูก?</p>
                <h3 className="mt-2 text-2xl font-black text-[#123A63]">เริ่มจากเป้าหมายของคุณก่อน</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  ถ้าอยากเห็นภาพรวมให้เริ่มจากหนังสือ ถ้าอยากมีสินค้าเป็นของตัวเองให้เลือกคอร์ส E-book
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "อยากเริ่มถูก ๆ", value: "หนังสือ 390 บาท" },
                  { label: "อยากมี E-book", value: "คอร์ส E-book" },
                  { label: "อยากใช้ ChatGPT หาเงิน", value: "คอร์ส ChatGPT" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-xs font-bold text-slate-400">{item.label}</p>
                    <p className="mt-2 font-black text-[#123A63]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-sky-100 bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[#2F80ED]">
              <PenLine className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-black font-sans leading-[3.0] text-[#123A63] md:text-4xl">เริ่มจากบทความฟรี</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              ไม่ต้องรีบซื้ออะไร แค่เริ่มอ่าน เริ่มทำตาม และค่อย ๆ เปลี่ยน AI ให้เป็นเครื่องมือในการคว้าเงินจากอากาศ
            </p>
            <Button className="mt-7 rounded-full bg-[#4DA3FF] px-8 text-white hover:bg-[#2F80ED]">
              เริ่มที่หน้า Start Here <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#123A63] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <img src="/logo.png" alt="Learn with Rin" className="h-10 w-auto object-contain brightness-0 invert" />
            <p className="mt-2 text-sm text-blue-100">สอนใช้ AI แบบเข้าใจง่าย เพื่อเริ่มสร้างรายได้จากสิ่งที่คุณมี</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-blue-100">
            <a href="#start" className="hover:text-white">เริ่มที่นี่</a>
            <a href="#blog" className="hover:text-white">บทความ</a>
            <a href="#free" className="hover:text-white">ไฟล์ฟรี</a>
            <a href="#product" className="hover:text-white">E-book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
