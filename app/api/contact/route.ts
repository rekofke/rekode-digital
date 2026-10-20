import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST (request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing')
      return NextResponse.json(
        { message: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const body = await request.json()

    const { name, business, email, phone, website, service, message } = body

    if (
      typeof name !== 'string' ||
      !name.trim() ||
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== 'string' ||
      !message.trim()
    ) {
      return NextResponse.json(
        { message: 'Please provide your name, email, and message.' },
        { status: 400 }
      )
    }

    const clean = (value: unknown) =>
      String(value ?? 'Not provided')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: 'Rekode Digital <onboarding@resend.dev>',
      to: ['getrekode@gmail.com'],
      replyTo: email,
      subject: `New Rekode Contact Inquiry - ${name
        .trim()
        .slice(0, 120)
        .replace(/[\r\n]/g, ' ')}`,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${clean(name)}</p>
        <p><strong>Business:</strong> ${clean(business)}</p>
        <p><strong>Email:</strong> ${clean(email)}</p>
        <p><strong>Phone:</strong> ${clean(phone)}</p>
        <p><strong>Website:</strong> ${clean(website)}</p>
        <p><strong>Interested In:</strong> ${clean(service)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${clean(message)}</p>
      `
    })

    if (error) {
      console.error('Contact email failed:', error)
      return NextResponse.json(
        { message: 'Unable to deliver your message.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { message: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
