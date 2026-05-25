import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F4FBFF] px-5 font-[Sarabun,sans-serif]">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-10 text-center shadow-xl shadow-sky-100">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-black text-[#123A63]">ขอบคุณมากค่ะ!</h1>
        <p className="mt-3 text-lg text-slate-600">การชำระเงินสำเร็จแล้ว</p>

        <div className="mt-6 rounded-2xl bg-[#F4FBFF] p-5 text-left">
          <p className="text-sm font-bold text-[#1E5B9A]">ขั้นตอนถัดไป</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">✓</span>
              เช็คอีเมลที่ใช้ชำระเงิน — จะได้รับข้อมูลการเข้าถึงภายใน 24 ชั่วโมง
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">✓</span>
              หากไม่ได้รับอีเมล ทัก LINE มาได้เลยค่ะ
            </li>
          </ul>
        </div>

        <a
          href="https://lin.ee/Fs1Ke4ZT"
          target="_blank"
          rel="noreferrer"
          className="mt-6 block rounded-2xl bg-green-500 py-3 font-bold text-white hover:bg-green-600"
        >
          ทัก LINE เพื่อรับสินค้า
        </a>

        <Link
          href="/"
          className="mt-4 block text-sm font-medium text-slate-400 hover:text-[#2F80ED]"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  )
}
