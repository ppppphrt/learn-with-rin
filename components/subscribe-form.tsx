"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

export function SubscribeForm() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), contact: contact.trim() }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage(
          contact.includes("@")
            ? "เช็คอีเมลได้เลยค่ะ! ไฟล์ถูกส่งไปแล้ว 🎉"
            : "บันทึกแล้ว! ทีมจะส่งไฟล์ทาง LINE ให้เร็ว ๆ นี้ค่ะ"
        )
        setName("")
        setContact("")
      } else {
        setStatus("error")
        setMessage(data.error ?? "เกิดข้อผิดพลาด กรุณาลองใหม่")
      }
    } catch {
      setStatus("error")
      setMessage("เกิดข้อผิดพลาด กรุณาลองใหม่")
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-500" />
        <p className="font-bold text-green-700">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-slate-400 underline"
        >
          กรอกใหม่
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-13 w-full rounded-2xl border border-sky-100 bg-[#F8FCFF] px-4 py-3 outline-none focus:border-[#4DA3FF] focus:ring-2 focus:ring-sky-100"
        placeholder="ชื่อของคุณ"
        required
        disabled={status === "loading"}
      />
      <input
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="h-13 w-full rounded-2xl border border-sky-100 bg-[#F8FCFF] px-4 py-3 outline-none focus:border-[#4DA3FF] focus:ring-2 focus:ring-sky-100"
        placeholder="อีเมล หรือ LINE ID"
        required
        disabled={status === "loading"}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-13 w-full rounded-2xl bg-[#4DA3FF] text-base font-bold text-white hover:bg-[#2F80ED] disabled:opacity-60"
      >
        {status === "loading" ? "กำลังส่ง..." : "รับไฟล์ฟรีทันที"}
      </Button>

      {status === "error" && (
        <p className="text-center text-sm font-medium text-red-500">{message}</p>
      )}

      <p className="mt-4 text-center text-xs text-slate-500">
        ไม่มีสแปม ส่งเฉพาะเนื้อหาที่ช่วยให้คุณเริ่มได้จริง
      </p>
    </form>
  )
}
