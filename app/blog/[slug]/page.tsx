import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { articles, getArticle } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)
  if (!article) return {}
  return { title: `${article.title} | Learn with Rin` }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  const currentIndex = articles.findIndex((a) => a.slug === article.slug)
  const prev = articles[currentIndex + 1]
  const next = articles[currentIndex - 1]

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

      <main className="mx-auto max-w-2xl px-5 py-16 lg:px-8">
        <Link href="/blog" className="mb-8 flex items-center gap-1 text-sm font-medium text-[#2F80ED] hover:underline">
          <ArrowLeft className="h-4 w-4" /> กลับไปหน้าบทความ
        </Link>

        <span className="rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-bold text-[#1E5B9A]">
          {article.category}
        </span>
        <h1 className="mt-4 text-3xl font-black leading-snug text-[#123A63] md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-sm text-slate-400">{article.date}</p>

        <div className="mt-10 space-y-6">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-9 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-br from-[#123A63] to-[#2F80ED] p-8 text-center text-white">
          <p className="text-lg font-black">อยากเริ่มสร้างรายได้จาก AI จริงๆ?</p>
          <p className="mt-2 text-sm text-blue-100">ดูคอร์สและ E-book ที่ช่วยให้คุณเริ่มได้ทันที</p>
          <Link
            href="/#product"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#123A63] hover:bg-blue-50"
          >
            ดูสินค้าทั้งหมด <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {(prev || next) && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {next && (
              <Link href={`/blog/${next.slug}`} className="group rounded-2xl border border-sky-100 p-5 hover:border-[#4DA3FF] hover:shadow-sm">
                <p className="text-xs text-slate-400">บทความก่อนหน้า</p>
                <p className="mt-2 font-bold text-[#123A63] group-hover:text-[#2F80ED]">{next.title}</p>
              </Link>
            )}
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="group rounded-2xl border border-sky-100 p-5 text-right hover:border-[#4DA3FF] hover:shadow-sm sm:col-start-2">
                <p className="text-xs text-slate-400">บทความถัดไป</p>
                <p className="mt-2 font-bold text-[#123A63] group-hover:text-[#2F80ED]">{prev.title}</p>
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
