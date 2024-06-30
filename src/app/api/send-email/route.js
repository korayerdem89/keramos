import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, address, requests, startDate, endDate } = body;

    // Yöneticiye email gönderme
    const adminEmailData = await resend.emails.send({
      from: "Keramos Sailing Reservation <onboarding@resend.dev>",
      to: ["info@keramosailing.com"],
      subject: "New Customer Information",
      html: `
        <h1>New Customer Information</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Special Requests:</strong> ${requests}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
      `,
    });

    const customerEmailData = await resend.emails.send({
      from: "Keramos Sailing Reservation <onboarding@resend.dev>",
      to: [email],
      subject: "Rezervasyon Onayı",
      html: `
        <h1>Rezervasyonunuz Alınmıştır</h1>
        <p>Sayın ${fullName},</p>
        <p>Rezervasyonunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz!</p>
        <p><strong>Rezervasyon Detayları:</strong></p>
        <p><strong>Başlangıç Tarihi:</strong> ${startDate}</p>
        <p><strong>Bitiş Tarihi:</strong> ${endDate}</p>
        <p>Herhangi bir sorunuz olursa lütfen bizimle iletişime geçmekten çekinmeyin.</p>
        <p>İyi günler dileriz,</p>
        <p>Keramos Sailing Ekibi</p>
      `,
    });

    return NextResponse.json({ adminEmail: adminEmailData, customerEmail: customerEmailData });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
