import { NextRequest, NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { PRODUCTS, ProductId } from "@/lib/products"

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key || key.startsWith("sk_test_...")) {
    return NextResponse.json(
      { error: "ยังไม่ได้ตั้งค่า STRIPE_SECRET_KEY — กรุณาใส่ key จริงใน .env.local" },
      { status: 503 }
    )
  }

  try {
    const { productId } = await req.json()

    if (!(productId in PRODUCTS)) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 })
    }

    const product = PRODUCTS[productId as ProductId]
    const stripe = getStripe()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "thb",
      line_items: [
        {
          price_data: {
            currency: "thb",
            unit_amount: product.price * 100, // THB → satang
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#product`,
      metadata: { productId, productName: product.name },
      locale: "th",
    })

    return NextResponse.json({ url: session.url })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error("Checkout error:", msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
