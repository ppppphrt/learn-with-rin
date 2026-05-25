import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getStripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")

  if (!sig) {
    return NextResponse.json({ error: "No stripe-signature header" }, { status: 400 })
  }

  const stripe = getStripe()
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: "Webhook signature invalid" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    await prisma.order.upsert({
      where: { stripeSessionId: session.id },
      update: { status: "paid" },
      create: {
        stripeSessionId: session.id,
        customerEmail: session.customer_details?.email ?? "",
        customerName: session.customer_details?.name ?? null,
        productId: session.metadata?.productId ?? "unknown",
        productName: session.metadata?.productName ?? "unknown",
        amount: session.amount_total ?? 0,
        status: "paid",
      },
    })
  }

  return NextResponse.json({ received: true })
}
