import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    // Configure your transporter (update with your SMTP credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.FEEDBACK_EMAIL_USER, // e.g. harborworksdigital@gmail.com
        pass: process.env.FEEDBACK_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email || process.env.FEEDBACK_EMAIL_USER,
      to: 'harborworksdigital@gmail.com',
      subject: 'New User Feedback',
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send feedback.' }, { status: 500 });
  }
}
