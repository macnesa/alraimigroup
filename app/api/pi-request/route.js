import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {

  try {

    const data = await req.json()

    // Honeypot check
    if (data.company_website) {
      return Response.json({ success: true })
    }

    const {
      category,
      quantity,
      country,
      timeline,
      boxType,
      finishes,
      name,
      email,
      whatsapp
    } = data

    const formattedCategory = category?.join(", ") || "Not specified"

    await resend.emails.send({

      from: "Alraimi Website <onboarding@resend.dev>",

      to: ["mmacnesa@gmail.com"],

      subject: "New Packaging Quote Request",

      html: `

<div style="
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  background:#F3F2EF;
  padding:40px 20px;
">

  <div style="
    max-width:640px;
    margin:0 auto;
    background:#ffffff;
    border:1px solid #e5e5e5;
    border-radius:12px;
    overflow:hidden;
  ">

    <!-- HEADER -->

    <div style="
      background:#191919;
      color:white;
      padding:28px 32px;
    ">

      <div style="
        font-size:12px;
        letter-spacing:0.18em;
        text-transform:uppercase;
        color:#8C7A5B;
        margin-bottom:8px;
      ">
        Packaging Quote Request
      </div>

      <div style="
        font-size:22px;
        font-weight:500;
      ">
        New Website Submission
      </div>

    </div>


    <!-- BODY -->

    <div style="padding:32px">

      <div style="
        font-size:13px;
        color:#666;
        margin-bottom:28px;
      ">
        ${new Date().toLocaleString()}
      </div>


      <!-- CONTACT -->

      <div style="margin-bottom:32px">

        <div style="
          font-size:12px;
          letter-spacing:0.18em;
          text-transform:uppercase;
          color:#8C7A5B;
          margin-bottom:14px;
        ">
          Contact Information
        </div>

        <table style="
          width:100%;
          border-collapse:collapse;
          font-size:14px;
        ">

          <tr>
            <td style="padding:8px 0;color:#666;width:140px;">Name</td>
            <td style="padding:8px 0;color:#111;">${name || "-"}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">Email</td>
            <td style="padding:8px 0;color:#111;">${email || "-"}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">WhatsApp</td>
            <td style="padding:8px 0;color:#111;">${whatsapp || "-"}</td>
          </tr>

        </table>

      </div>


      <!-- PROJECT DETAILS -->

      <div>

        <div style="
          font-size:12px;
          letter-spacing:0.18em;
          text-transform:uppercase;
          color:#8C7A5B;
          margin-bottom:14px;
        ">
          Project Details
        </div>

        <table style="
          width:100%;
          border-collapse:collapse;
          font-size:14px;
        ">

          <tr>
            <td style="padding:8px 0;color:#666;width:140px;">Category</td>
            <td style="padding:8px 0;color:#111;">${formattedCategory}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">Quantity</td>
            <td style="padding:8px 0;color:#111;">${quantity || "-"}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">Ship-To Country</td>
            <td style="padding:8px 0;color:#111;">${country || "-"}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">Timeline</td>
            <td style="padding:8px 0;color:#111;">${timeline || "-"}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">Box / Bag Type</td>
            <td style="padding:8px 0;color:#111;">${boxType || "-"}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;color:#666;">Finishes</td>
            <td style="padding:8px 0;color:#111;">${finishes || "-"}</td>
          </tr>

        </table>

      </div>

    </div>


    <!-- FOOTER -->

    <div style="
      padding:20px 32px;
      background:#fafafa;
      border-top:1px solid #eee;
      font-size:12px;
      color:#888;
    ">

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