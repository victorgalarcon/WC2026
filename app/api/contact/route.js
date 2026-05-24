import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "World Cup VIP <onboarding@resend.dev>", // replace with verified domain
      to: ["victor.g.alarcon@outlook.com"],
      subject: `New VIP Inquiry from ${name}`,
      html: `
        <h2>New Reservation Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
