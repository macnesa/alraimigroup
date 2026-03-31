import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// ===== RATE LIMIT (simple memory) =====
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 menit
const MAX_REQUESTS = 5

const ipStore = new Map()

function isRateLimited(ip) {
  const now = Date.now()

  if (!ipStore.has(ip)) {
    ipStore.set(ip, { count: 1, start: now })
    return false
  }

  const record = ipStore.get(ip)

  if (now - record.start > RATE_LIMIT_WINDOW) {
    ipStore.set(ip, { count: 1, start: now })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

// ===== SANITIZE =====
function sanitize(input = "") {
  return String(input)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
}

// ===== EMAIL VALIDATION =====
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req) {
  try {
    const data = await req.json()

    // ===== IP =====
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown"

    // ===== RATE LIMIT =====
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests" },
        { status: 429 }
      )
    }

    // ===== HONEYPOT =====
    if (
      (data.company_website && data.company_website.trim() !== "") ||
      (data.secondary_contact && data.secondary_contact.trim() !== "")
    ) {
      return Response.json({ success: true })
    }

    // ===== TIMING CHECK =====
    if (!data.startTime) {
      return Response.json(
        { error: "Invalid request" },
        { status: 400 }
      )
    }

    const timeTaken = Date.now() - Number(data.startTime)

    if (timeTaken < 3000) {
      return Response.json(
        { error: "Too fast" },
        { status: 400 }
      )
    }

    // ===== EXTRACT =====
    const name = sanitize(data.name)
    const email = sanitize(data.email)
    const whatsapp = sanitize(data.whatsapp)

    const quantity = sanitize(data.quantity)
    const timeline = sanitize(data.timeline)
    const budget = sanitize(data.budget)
    const brandStage = sanitize(data.brandStage)

    const projectType = Array.isArray(data.projectType)
      ? data.projectType.map(sanitize)
      : []

    // ===== VALIDATION =====
    if (!name || !email) {
      return Response.json(
        { error: "Name and Email are required" },
        { status: 400 }
      )
    }

    if (name.length > 100 || email.length > 100) {
      return Response.json(
        { error: "Input too long" },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const formattedProjectType =
      projectType.length > 0
        ? projectType.join(", ")
        : "Not specified"

    // ===== SEND EMAIL =====
    await resend.emails.send({
      from: "Alraimi Website <onboarding@resend.dev>",
      to: ["mmacnesa@gmail.com"],
      subject: "New Production Inquiry",
      html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#F3F2EF;padding:40px 20px;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden;">
    
    <div style="background:#191919;color:white;padding:28px 32px;">
      <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:8px;">
        Production Inquiry
      </div>
      <div style="font-size:22px;font-weight:500;">
        New Website Submission
      </div>
    </div>

    <div style="padding:32px">

      <div style="font-size:13px;color:#666;margin-bottom:28px;">
        ${new Date().toLocaleString()}
      </div>

      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Contact Information
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Name</td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Email</td><td>${email}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">WhatsApp</td><td>${whatsapp || "-"}</td></tr>
        </table>
      </div>

      <div>
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Project Details
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Project Type</td><td>${formattedProjectType}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Quantity</td><td>${quantity || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Timeline</td><td>${timeline || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Budget</td><td>${budget || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Brand Stage</td><td>${brandStage || "-"}</td></tr>
        </table>
      </div>

    </div>

    <div style="padding:20px 32px;background:#fafafa;border-top:1px solid #eee;font-size:12px;color:#888;">
      Sent automatically from alraimigroup.com
    </div>

  </div>
</div>
`
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error(error)

    return Response.json(
      { error: "Email failed" },
      { status: 500 }
    )
  }
}