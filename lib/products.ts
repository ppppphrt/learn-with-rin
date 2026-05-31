export const PRODUCTS = {
  book: {
    name: "30 วิธีใช้ AI สร้างรายได้สำหรับมือใหม่",
    description: "หนังสือที่รวม 30 วิธีใช้ AI เพื่อเริ่มสร้างรายได้ แม้ไม่มีพื้นฐาน",
    price: 390,
    label: "ซื้อหนังสือ 390 บาท",
  },
  course_ebook: {
    name: "คอร์สสร้าง E-book ด้วย AI แบบจับมือทำ",
    description: "คอร์สสำหรับมือใหม่ที่อยากสร้าง E-book ขายด้วย ChatGPT และ Canva",
    price: 1990,
    label: "สมัครเรียน 1,990 บาท",
  },
  course_chatgpt: {
    name: "คอร์สใช้ ChatGPT สร้างรายได้",
    description: "คอร์สสอนใช้ ChatGPT แบบเข้าใจง่าย สำหรับคนที่ไม่มีพื้นฐาน",
    price: 1990,
    label: "สมัครเรียน 1,990 บาท",
  },
  course_chatbot: {
    name: "AI Chatbot for Business",
    description: "สร้าง AI Chatbot ให้ธุรกิจตอบลูกค้า ขายของ และเก็บ Lead ได้อัตโนมัติ",
    price: 1990,
    label: "สมัครเรียน 1,990 บาท",
  },
} as const

export type ProductId = keyof typeof PRODUCTS
