import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, address, requests } = body;

    const data = await resend.emails.send({
      from: "Koray Erdem KILIÇ <onboarding@resend.dev>",
      to: ["korayerdem89@gmail.com"],
      subject: "New Customer Information",
      html: `
        <h1>New Customer Information</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Special Requests:</strong> ${requests}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
