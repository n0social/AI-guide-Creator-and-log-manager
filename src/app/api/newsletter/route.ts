
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import validator from 'validator';
import xss from 'xss';

const CSV_PATH = path.resolve(process.cwd(), 'email_signupsheet.csv');

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }
    // Sanitize and validate email
    const cleanEmail = xss(email.trim());
    if (!validator.isEmail(cleanEmail)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }
    // Restrict to top brand email providers
    const allowedDomains = [
      'gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'aol.com', 'hotmail.com',
      'protonmail.com', 'zoho.com', 'yandex.com', 'mail.com', 'msn.com', 'live.com',
      'comcast.net', 'verizon.net', 'att.net', 'sbcglobal.net', 'me.com', 'mac.com', 'googlemail.com'
    ];
    const emailDomain = cleanEmail.split('@')[1]?.toLowerCase();
    if (!emailDomain || !allowedDomains.includes(emailDomain)) {
      return NextResponse.json({ error: 'Only top brand email accounts are allowed.' }, { status: 400 });
    }
    // Append to CSV (create file if not exists)
    const row = `${cleanEmail},${new Date().toISOString()}\n`;
    await fs.appendFile(CSV_PATH, row, { encoding: 'utf8', flag: 'a' });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save email.' }, { status: 500 });
  }
}
