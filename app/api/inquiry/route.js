import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { Resend } from "resend"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const resend = new Resend(process.env.RESEND_API_KEY)

const sanitize = (v = "") =>
  !v ? "" : String(v).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim()

const nl2br = (v = "") => sanitize(v).replace(/\n/g, "<br/>")

const schema = {
  name: { required: true },
  company: {},
  email: { required: true },
  phone: {},
  projectType: { required: true },
  productName: { required: true },
  specs: { required: true, multiline: true },
  referenceLink: {},
  quantity: { required: true },
  budget: {},
  brandStage: {},
  branding: {},
  targetPrice: {},
  orderTimeline: { required: true },
  deadline: { required: true },
  destination: { required: true },
  notes: { multiline: true },
}

function parseForm(formData) {
  const data = {}
  for (const key in schema) {
    const raw = formData.get(key)
    data[key] = schema[key].multiline ? nl2br(raw) : sanitize(raw)
  }
  return data
}

function validate(data) {
  for (const key in schema) {
    if (schema[key].required && !data[key]) {
      return `${key} is required`
    }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    return "Invalid email format"
  }
  return null
}

function extractNumber(str) {
  if (!str) return 0
  const cleaned = String(str).replace(/[^0-9.-]+/g, " ")
  const parts = cleaned.split(" ").filter(Boolean)
  return parseFloat(parts[0]) || 0
}

function getColor(value) {
  if (value < 10000) return "#dc2626"
  if (value <= 50000) return "#ca8a04"
  return "#16a34a"
}

function buildHTML(data, uploaded) {
  const now = new Date().toLocaleString()

  const price = extractNumber(data.targetPrice)
  const qty = extractNumber(data.quantity)
  const total = price * qty
  const totalColor = total ? getColor(total) : "#111"

  const budgetVal = extractNumber(data.budget)
  const budgetColor = budgetVal ? getColor(budgetVal) : "#111"

  return `
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
        ${now}
      </div>

      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Contact Information
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Name</td><td>${data.name || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Company</td><td>${data.company || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Email</td><td>${data.email || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Phone</td><td>${data.phone || "-"}</td></tr>
        </table>
      </div>

      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Project Details
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Project Type</td><td>${data.projectType || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Product Name</td><td>${data.productName || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Specifications</td><td>${data.specs || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Reference</td><td>${data.referenceLink || "-"}</td></tr>
        </table>
      </div>

      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Production
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Quantity</td><td>${data.quantity || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Budget</td><td style="color:${budgetColor};">${data.budget || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Brand Stage</td><td>${data.brandStage || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Branding</td><td>${data.branding || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Target Price</td><td>${data.targetPrice || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Estimated Value</td><td style="color:${totalColor};">${total ? total.toLocaleString() : "-"}</td></tr>
        </table>
      </div>

      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Logistics
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#666;width:140px;">Order Timeline</td><td>${data.orderTimeline || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Deadline</td><td>${data.deadline || "-"}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Destination</td><td>${data.destination || "-"}</td></tr>
        </table>
      </div>

      ${data.notes ? `
      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Additional Notes
        </div>
        <div style="font-size:14px;color:#111;line-height:1.6;">
          ${data.notes}
        </div>
      </div>` : ""}

      ${uploaded.length > 0 ? `
      <div style="margin-bottom:32px">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7A5B;margin-bottom:14px;">
          Files
        </div>
        ${uploaded.map(f => `
          <div style="font-size:14px;margin-bottom:6px;">
            <a href="${f.url}" style="color:#8C7A5B;text-decoration:none;">
              ${f.name}
            </a>
          </div>
        `).join("")}
      </div>` : ""}

    </div>

    <div style="padding:20px 32px;background:#fafafa;border-top:1px solid #eee;font-size:12px;color:#888;">
      Sent automatically from alraimigroup.com
    </div>

  </div>
</div>
`
}

const ipStore = new Map()

function checkRateLimit(ip) {
  const now = Date.now()
  const windowTime = 60000
  const limit = 10

  const logs = (ipStore.get(ip) || []).filter(t => now - t < windowTime)
  logs.push(now)

  ipStore.set(ip, logs)
  if (ipStore.size > 1000) ipStore.clear()

  return logs.length <= limit
}

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown"

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 })
    }

    const formData = await req.formData()
    const data = parseForm(formData)

    const error = validate(data)
    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    const files = formData.getAll("files")
    const uploaded = []

    for (const file of files) {
      if (!file || typeof file === "string") continue

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { resource_type: "auto", folder: "inquiries" },
          (err, res) => {
            if (err) reject(err)
            else resolve(res)
          }
        ).end(buffer)
      })

      uploaded.push({
        name: file.name,
        url: result.secure_url,
      })
    }

    const html = buildHTML(data, uploaded)

    await resend.emails.send({
      from: "Inquiry <onboarding@resend.dev>",
      to: ["hello@alraimigroup.com"],
      subject: "New Production Inquiry",
      html,
      reply_to: data.email,
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Server error, please try again later" },
      { status: 500 }
    )
  }
}