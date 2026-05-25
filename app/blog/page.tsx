import Link from "next/link"
import { articles } from "@/lib/articles"
import { ChevronRight } from "lucide-react"

export const metadata = { title: "บทความ | Learn with Rin" }

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-sky-100 bg-white px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Learn with Rin" className="h-10 w-auto object-contain" />
          </Link>
          <Link href="/#product" className="rounded-full bg-[#4DA3FF] px-5 py-2 text-sm font-bold text-white hover:bg-[#2F80ED]">
            ดูคอร์ส
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <p className="font-bold text-[#2F80ED]">บทความ</p>
        <h1 className="mt-3 text-3xl font-black text-[#123A63] md:text-4xl">บทความทั้งหมด</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">เนื้อหาสำหรับคนที่อยากเริ่มต้นใช้ AI หาเงินออนไลน์</p>

        <div className="mt-10 divide-y divide-sky-100">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col gap-2 py-8 hover:opacity-80"
            >
              <span className="w-fit rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">
                {article.category}
              </span>
              <h2 className="text-xl font-black leading-snug text-[#123A63] group-hover:text-[#2F80ED] md:text-2xl">
                {article.title}
              </h2>
              <p className="leading-7 text-slate-600">{article.desc}</p>
              <div className="mt-2 flex items-center gap-1 text-sm font-bold text-[#2F80ED]">
                อ่านต่อ <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
              <p className="text-xs text-slate-400">{article.date}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
