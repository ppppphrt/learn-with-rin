import { Resend } from "resend"

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function sendWelcomeEmail({
  name,
  email,
}: {
  name: string
  email: string
}) {
  const resend = getResend()
  const from = process.env.FROM_EMAIL ?? "Learn with Rin <hello@learnwithrin.com>"
  const checklistUrl = process.env.CHECKLIST_URL ?? "#"

  return resend.emails.send({
    from,
    to: email,
    subject: "Checklist ของคุณมาแล้ว! เริ่มหาเงินจาก AI ใน 7 วัน 🎉",
    html: buildEmailHtml({ name, checklistUrl }),
  })
}

function buildEmailHtml({
  name,
  checklistUrl,
}: {
  name: string
  checklistUrl: string
}) {
  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Checklist ของคุณมาแล้ว!</title>
</head>
<body style="margin:0;padding:0;background:#F4FBFF;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(18,58,99,0.08);">

    <div style="background:linear-gradient(135deg,#123A63,#2F80ED);padding:40px 32px;text-align:center;">
      <h1 style="color:#fff;margin:0;font-size:24px;font-weight:900;">Learn with Rin</h1>
      <p style="color:#BAD9FF;margin:8px 0 0;font-size:14px;">สอนใช้ AI แบบเข้าใจง่าย เพื่อเริ่มสร้างรายได้</p>
    </div>

    <div style="padding:40px 32px;">
      <h2 style="color:#123A63;font-size:22px;font-weight:900;margin:0 0 16px;">
        สวัสดีคุณ ${name}! 👋
      </h2>
      <p style="color:#4B5563;font-size:16px;line-height:1.8;margin:0 0 24px;">
        ขอบคุณที่สนใจ Learn with Rin นะคะ 🙏<br/>
        นี่คือ <strong>Checklist: เริ่มหาเงินจาก AI ใน 7 วัน</strong> ที่คุณขอไว้ค่ะ
      </p>

      <div style="text-align:center;margin:32px 0;">
        <a href="${checklistUrl}"
          style="display:inline-block;background:#4DA3FF;color:#fff;padding:16px 40px;border-radius:100px;text-decoration:none;font-weight:900;font-size:16px;box-shadow:0 4px 16px rgba(77,163,255,0.4);">
          ดาวน์โหลด Checklist ฟรี →
        </a>
      </div>

      <div style="background:#F4FBFF;border-radius:16px;padding:24px;margin:24px 0;">
        <p style="color:#1E5B9A;font-weight:700;margin:0 0 12px;font-size:14px;">สิ่งที่คุณจะได้เรียนรู้:</p>
        <ul style="color:#374151;font-size:14px;line-height:2;margin:0;padding-left:20px;">
          <li>วิธีหาไอเดียรายได้จากสิ่งที่คุณมีอยู่แล้ว</li>
          <li>เครื่องมือ AI ที่ใช้เริ่มต้นได้ฟรี</li>
          <li>7 ขั้นตอนสู่รายได้แรกใน 7 วัน</li>
          <li>ตัวอย่างสินค้าดิจิทัลที่ขายได้จริง</li>
        </ul>
      </div>

      <hr style="border:none;border-top:1px solid #EAF6FF;margin:32px 0;" />

      <p style="color:#6B7280;font-size:14px;line-height:1.8;margin:0;">
        มีคำถามเพิ่มเติม ทัก LINE มาได้เลยค่ะ:<br/>
        <a href="https://lin.ee/Fs1Ke4ZT" style="color:#4DA3FF;font-weight:700;">คลิกที่นี่เพื่อทัก LINE</a>
      </p>
    </div>

    <div style="background:#F9FAFB;padding:24px 32px;text-align:center;border-top:1px solid #EAF6FF;">
      <p style="color:#9CA3AF;font-size:12px;margin:0;line-height:1.6;">
        Learn with Rin · สอนใช้ AI แบบเข้าใจง่าย เพื่อเริ่มสร้างรายได้จากสิ่งที่คุณมี<br/>
        ถ้าไม่ต้องการรับอีเมลอีก <a href="#" style="color:#9CA3AF;">unsubscribe ที่นี่</a>
      </p>
    </div>
  </div>
</body>
</html>`
}
