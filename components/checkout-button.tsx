"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"

interface CheckoutButtonProps {
  productId: string
  label: string
  className?: string
}

export function CheckoutButton({ productId, label, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleCheckout() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError("เกิดข้อผิดพลาด กรุณาลองใหม่")
        setLoading(false)
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่")
      setLoading(false)
    }
  }

  return (
    <div>
      <Button
        onClick={handleCheckout}
        disabled={loading}
        className={className ?? "h-12 w-full rounded-full bg-[#4DA3FF] text-white hover:bg-[#2F80ED] disabled:opacity-60"}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> กำลังโหลด...
          </>
        ) : (
          <>
            {label} <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      {error && <p className="mt-2 text-center text-xs text-red-500">{error}</p>}
    </div>
  )
}
