import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET () {
  return Response.json({
    success: true,
    message: 'Rekode Digital API is working.'
  })
}


export async function POST (request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: 'RESEND_API_KEY is missing from the server.'
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const body = await request.json()

    const {
    name,
    business,
    email,
    phone,
    website,
    message,
    utm_source,
    utm_medium,
    utm_campaign
  } = body


    const { data, error } = await resend.emails.send({
      from: 'Rekode Digital <onboarding@resend.dev>',
      to: ['getrekode@gmail.com'],
      replyTo: email,
      subject: `New Visibility Review Request — ${business}`,

      html: `
        <h1>New Rekode Digital Visibility Review</h1>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Website:</strong> ${escapeHtml(
          website || 'Not provided'
        )}</p>


      <h2>Marketing Attribution</h2>

      <p><strong>Lead Source:</strong> ${escapeHtml(
        utm_source && utm_source !== "direct_or_unknown"
          ? utm_source
          : "Direct / Unknown"
      )}</p>

      <p><strong>Medium:</strong> ${escapeHtml(
        utm_medium || "none"
      )}</p>

      <p><strong>Campaign:</strong> ${escapeHtml(
        utm_campaign || "none"
      )}</p>

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || 'No message provided')}</p>
      `
    })

    if (error) {
      console.error('RESEND ERROR:', error)

      return NextResponse.json(
        {
          success: false,
          message: error.message || 'Resend rejected the email.'
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      id: data?.id
    })
  } catch (error) {
    console.error('VISIBILITY REVIEW API ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Unknown server error occurred.'
      },
      { status: 500 }
    )
  }
}

function escapeHtml (value: unknown) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
