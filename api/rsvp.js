import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  console.log("RSVP FUNCTION HIT");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    const { message } = req.body;

    console.log("Sending email...");

    const emailText = `
RSVP TEST SUBMISSION

Message:
${message}
`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["asirimece@gmail.com"],
      subject: "RSVP Test Submission",
      text: emailText
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("RSVP API error:", error);

    return res.status(500).json({ success: false, error: error.message });
  }
}
