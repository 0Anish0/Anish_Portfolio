import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anishpandey4576@gmail.com',
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            ${validatedData.budget ? `<p><strong>Budget:</strong> ${validatedData.budget}</p>` : ''}
            ${validatedData.timeline ? `<p><strong>Timeline:</strong> ${validatedData.timeline}</p>` : ''}
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${validatedData.message}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: 'Thank you for contacting Anish Kumar Pandey',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Thank You for Your Message!</h2>
          <p>Hi ${validatedData.name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong> ${validatedData.message}</p>
          </div>
          <p>Best regards,<br>Anish Kumar Pandey</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 14px; color: #64748b;">
              Anish Kumar Pandey | ML Engineer & Full Stack Developer<br>
              Email: anishpandey4576@gmail.com | Phone: +91 9852208695<br>
              Location: Noida, Uttar Pradesh (NCR), India
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}