import { Resend } from "resend";

// TODO: API key comes from Vercel Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { message } = req.body;

    // ===== EMAIL TEMPLATE =====
    const emailText = `
RSVP TEST SUBMISSION

Message:
${message}
`;

    await resend.emails.send({
  from: "RSVP <onboarding@resend.dev>",   // TEST sender
  to: ["asirimece@gmail.com"],           // YOUR inbox
  subject: "RSVP Test Submission",
  text: emailText
});

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("RSVP API error:", error);

    return res.status(500).json({ success: false });
  }
}
