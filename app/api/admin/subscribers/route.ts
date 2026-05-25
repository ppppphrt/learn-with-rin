import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

function isAuthorized(req: NextRequest) {
  const token = req.headers.get("x-admin-token")
  return token === process.env.ADMIN_TOKEN
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      contact: true,
      type: true,
      source: true,
      createdAt: true,
    },
  })

  return NextResponse.json({ subscribers, total: subscribers.length })
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 })
  }

  await prisma.subscriber.delete({ where: { id: Number(id) } })
  return NextResponse.json({ success: true })
}
