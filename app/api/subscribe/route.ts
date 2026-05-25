import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { sendWelcomeEmail } from "@/lib/email"

const schema = z.object({
  name: z.string().min(1).max(100),
  contact: z.string().min(1).max(200),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: "กรุณากรอกข้อมูลให้ครบและถูกต้อง" }, { status: 400 })
    }

    const { name, contact } = parsed.data
    const isEmail = contact.includes("@") && contact.includes(".")
    const type = isEmail ? "email" : "line"

    const subscriber = await prisma.subscriber.upsert({
      where: { contact },
      update: { name },
      create: { name, contact, type, source: "checklist" },
    })

    const isNew = subscriber.createdAt.getTime() > Date.now() - 5000

    if (isEmail && isNew) {
      const emailResult = await sendWelcomeEmail({ name, email: contact })
      if (emailResult.error) {
        console.error("Email send error:", emailResult.error)
      }
    }

    return NextResponse.json({ success: true, type })
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json({ error: "เกิดข้อผิดพลาด กรุณาลองใหม่" }, { status: 500 })
  }
}
