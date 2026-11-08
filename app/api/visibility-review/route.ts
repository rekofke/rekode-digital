import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const HUBSPOT_ENDPOINT =
  'https://api.hsforms.com/submissions/v3/integration/submit/247640201/884d56c3-41c1-4a45-a93e-7bf0352a5f71'

const PRIVACY_NOTICE =
  'By submitting this form, you agree that Rekode Digital may store and process your information to respond to your Free Business Visibility Review request. You will not be subscribed to marketing emails.'

function clean (value: unknown, maxLength = 500) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml (value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function GET () {
  return NextResponse.json({
    success: true,
    message: 'Rekode Digital API is working.'
  })
}

export async function POST (request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Email service unavailable.' },
        { status: 500 }
      )
    }

    const body = await request.json()

    const name = clean(body.name, 120)
    const business = clean(body.business, 150)
    const email = clean(body.email, 254)
    const phone = clean(body.phone, 40)
    const website = clean(body.website, 300)
    const message = clean(body.message, 5000)

    const source = clean(body.utm_source, 100)
    const medium = clean(body.utm_medium, 100)
    const campaign = clean(body.utm_campaign, 100)

    if (
      !name ||
      !business ||
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Valid name, business, and email are required.'
        },
        { status: 400 }
      )
    }

    // Prepare contact fields for HubSpot.
    const nameParts = name.split(/\s+/)
    const firstname = nameParts.shift() || ''
    const lastname = nameParts.join(' ')

    const fields = [
      { name: 'email', value: email },
      { name: 'firstname', value: firstname },
      { name: 'company', value: business },
      ...(lastname ? [{ name: 'lastname', value: lastname }] : []),
      ...(phone ? [{ name: 'phone', value: phone }] : []),
      ...(website ? [{ name: 'website', value: website }] : [])
    ]

    // Preserve the tracked campaign in HubSpot's
    // form submission page context.
    const tracking = new URLSearchParams()

    if (source && source !== 'direct_or_unknown') {
      tracking.set('utm_source', source)
      tracking.set('utm_medium', medium || 'unspecified')
      tracking.set('utm_campaign', campaign || 'unspecified')
    }

    const pageUri =
      'https://rekodedigital.com/free-visibility-review' +
      (tracking.size ? `?${tracking.toString()}` : '')

    // HubSpot sync is secondary. An unsuccessful sync
    // must not prevent the lead notification email.
    let hubspotSynced = false

    try {
      const hubspotResponse = await fetch(HUBSPOT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields,
          context: {
            pageUri,
            pageName: 'Free Business Visibility Review'
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: PRIVACY_NOTICE,
              communications: []
            }
          }
        }),
        signal: AbortSignal.timeout(8000)
      })

      if (hubspotResponse.ok) {
        hubspotSynced = true
      } else {
        console.error(
          'HubSpot form submission failed:',
          hubspotResponse.status,
          (await hubspotResponse.text()).slice(0, 1000)
        )
      }
    } catch (error) {
      console.error('HubSpot connection error:', error)
    }

    // Preserve your existing Resend email notification.
    const resend = new Resend(apiKey)

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
          source && source !== 'direct_or_unknown' ? source : 'Direct / Unknown'
        )}</p>

        <p><strong>Medium:</strong> ${escapeHtml(medium || 'none')}</p>
        <p><strong>Campaign:</strong> ${escapeHtml(campaign || 'none')}</p>

        <h2>Message</h2>
        <p>${escapeHtml(message || 'No message provided')}</p>

        <hr />

        <h3>HubSpot CRM Status</h3>
        <p><strong>${
          hubspotSynced
            ? 'Submitted successfully to HubSpot'
            : 'HubSpot sync failed — manual CRM entry needed'
        }</strong></p>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, message: 'Unable to send your request.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      hubspotSynced
    })
  } catch (error) {
    console.error('Visibility Review API error:', error)

    return NextResponse.json(
      { success: false, message: 'Unable to process your request.' },
      { status: 500 }
    )
  }
}
