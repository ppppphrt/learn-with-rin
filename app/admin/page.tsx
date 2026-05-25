"use client"

import { useState } from "react"

interface Subscriber {
  id: number
  name: string
  contact: string
  type: string
  createdAt: string
}

interface Order {
  id: number
  customerEmail: string
  customerName: string | null
  productName: string
  amount: number
  status: string
  createdAt: string
}

type Tab = "subscribers" | "orders"

export default function AdminPage() {
  const [token, setToken] = useState("")
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState<Tab>("subscribers")
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function fetchAll(adminToken: string) {
    setLoading(true)
    setError("")

    const [subRes, ordRes] = await Promise.all([
      fetch("/api/admin/subscribers", { headers: { "x-admin-token": adminToken } }),
      fetch("/api/admin/orders", { headers: { "x-admin-token": adminToken } }),
    ])

    if (subRes.status === 401) {
      setError("Token ไม่ถูกต้อง")
      setLoading(false)
      return
    }

    const subData = await subRes.json()
    const ordData = await ordRes.json()

    setSubscribers(subData.subscribers)
    setOrders(ordData.orders)
    setTotalRevenue(ordData.totalRevenue)
    setAuthed(true)
    setLoading(false)
  }

  async function handleDeleteSubscriber(id: number) {
    if (!confirm("ลบข้อมูลนี้?")) return
    await fetch(`/api/admin/subscribers?id=${id}`, {
      method: "DELETE",
      headers: { "x-admin-token": token },
    })
    setSubscribers((prev) => prev.filter((s) => s.id !== id))
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4FBFF]">
        <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-xl font-black text-[#123A63]">Admin — Learn with Rin</h1>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchAll(token)}
            placeholder="ADMIN_TOKEN"
            className="mb-3 w-full rounded-2xl border border-sky-100 bg-[#F8FCFF] px-4 py-3 outline-none focus:border-[#4DA3FF]"
          />
          {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
          <button
            onClick={() => fetchAll(token)}
            disabled={loading}
            className="w-full rounded-2xl bg-[#4DA3FF] py-3 font-bold text-white hover:bg-[#2F80ED] disabled:opacity-60"
          >
            {loading ? "กำลังโหลด..." : "เข้าสู่ระบบ"}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4FBFF] p-6" style={{ fontFamily: "Sarabun, sans-serif" }}>
      <div className="mx-auto max-w-5xl">

        {/* Header stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-slate-400">Subscribers</p>
            <p className="mt-1 text-3xl font-black text-[#123A63]">{subscribers.length}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-slate-400">Orders</p>
            <p className="mt-1 text-3xl font-black text-[#123A63]">{orders.length}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-slate-400">รายได้รวม</p>
            <p className="mt-1 text-3xl font-black text-green-600">
              ฿{(totalRevenue / 100).toLocaleString("th-TH")}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setTab("subscribers")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              tab === "subscribers"
                ? "bg-[#4DA3FF] text-white shadow-sm"
                : "bg-white text-slate-500 hover:bg-sky-50"
            }`}
          >
            Subscribers ({subscribers.length})
          </button>
          <button
            onClick={() => setTab("orders")}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              tab === "orders"
                ? "bg-[#4DA3FF] text-white shadow-sm"
                : "bg-white text-slate-500 hover:bg-sky-50"
            }`}
          >
            Orders ({orders.length})
          </button>
          <button
            onClick={() => fetchAll(token)}
            className="ml-auto rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2F80ED] shadow-sm hover:bg-sky-50"
          >
            รีเฟรช
          </button>
        </div>

        {/* Subscribers table */}
        {tab === "subscribers" && (
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="border-b border-sky-100 bg-[#F4FBFF]">
                <tr>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">#</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">ชื่อ</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">ติดต่อ</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">ประเภท</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">วันที่</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="border-b border-sky-50 hover:bg-sky-50/50">
                    <td className="px-5 py-4 text-slate-400">{sub.id}</td>
                    <td className="px-5 py-4 font-medium text-slate-800">{sub.name}</td>
                    <td className="px-5 py-4 text-slate-600">{sub.contact}</td>
                    <td className="px-5 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${sub.type === "email" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                        {sub.type === "email" ? "Email" : "LINE"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-500">
                      {new Date(sub.createdAt).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-5 py-4">
                      <button onClick={() => handleDeleteSubscriber(sub.id)} className="text-red-400 hover:text-red-600">ลบ</button>
                    </td>
                  </tr>
                ))}
                {subscribers.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-10 text-center text-slate-400">ยังไม่มีข้อมูล</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Orders table */}
        {tab === "orders" && (
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="border-b border-sky-100 bg-[#F4FBFF]">
                <tr>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">#</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">ลูกค้า</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">สินค้า</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">ราคา</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">สถานะ</th>
                  <th className="px-5 py-4 text-left font-bold text-[#123A63]">วันที่</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-sky-50 hover:bg-sky-50/50">
                    <td className="px-5 py-4 text-slate-400">{order.id}</td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-slate-800">{order.customerName ?? "—"}</p>
                      <p className="text-xs text-slate-400">{order.customerEmail}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{order.productName}</td>
                    <td className="px-5 py-4 font-bold text-[#123A63]">
                      ฿{(order.amount / 100).toLocaleString("th-TH")}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                        order.status === "paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.status === "paid" ? "ชำระแล้ว" : order.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-500">
                      {new Date(order.createdAt).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-10 text-center text-slate-400">ยังไม่มี orders</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
