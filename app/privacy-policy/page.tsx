
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Rekode Digital",
  description:
    "Learn how Rekode Digital collects, uses, and protects information submitted through our website and newsletter.",
};

export default function PrivacyPolicyPage() {
  const updated = "October 11, 2026";

  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto px-6 py-16
          md:py-24
        "
      >
        <Link
          href="/"
          className="
            inline-block
            mb-10
            text-[#C9784A]
            hover:underline
          "
        >
          ← Back to Rekode Digital
        </Link>

        <p
          className="
            mb-3
            text-sm font-bold tracking-[0.2em] text-[#C9784A]
            uppercase
          "
        >
          Rekode Digital
        </p>

        <h1
          className="
            mb-4
            text-4xl font-bold
            md:text-5xl
          "
        >
          Privacy Policy
        </h1>

        <p
          className="
            mb-10
            text-slate-400
          "
        >
          Effective Date: {updated}
        </p>

        <div
          className="
            space-y-10
            leading-8 text-slate-300
          "
        >
          <section>
            <p>
              Rekode Digital is a digital services business
              based in Winnemucca, Nevada. We respect your
              privacy and aim to be transparent about how
              information is collected and used when you
              visit our website, request services, or
              subscribe to The Rekode Report.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              1. Information We Collect
            </h2>
            <p>
              Depending on how you interact with us, we may
              collect your name, email address, phone number,
              business name, business website, and information
              you voluntarily provide through forms or other
              communications.
            </p>
            <p
              className="
                mt-3
              "
            >
              Our website and service providers may also
              process technical information such as browser
              type, approximate location, device information,
              pages visited, and usage data.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              2. How We Use Your Information
            </h2>
            <p>We use personal information to:</p>
            <ul
              className="
                mt-3 space-y-2 pl-6
                list-disc
              "
            >
              <li>Respond to inquiries and service requests.</li>
              <li>Provide requested Business Visibility Reviews.</li>
              <li>Manage customer and prospective customer relationships.</li>
              <li>Deliver newsletters you choose to receive.</li>
              <li>Operate, secure, and improve our website.</li>
              <li>Meet applicable legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              3. The Rekode Report Newsletter
            </h2>
            <p>
              When you subscribe to The Rekode Report,
              we use your submitted information to manage
              your subscription and deliver newsletters
              approximately twice per month. These may
              contain business tips, technology insights,
              local business spotlights, and occasional
              information about Rekode Digital services.
            </p>
            <p
              className="
                mt-3
              "
            >
              You may withdraw your consent or unsubscribe
              from marketing emails at any time using the
              unsubscribe link included in our emails or
              by contacting us directly.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              4. Service Providers and Information Sharing
            </h2>
            <p>
              We use third-party service providers to
              operate our website, manage forms and customer
              records, deliver email communications, and
              understand website performance.
            </p>
            <p
              className="
                mt-3
              "
            >
              These providers may include HubSpot for forms,
              contact management, and email marketing;
              Vercel for website hosting and analytics;
              and Resend for certain website-generated emails.
              Providers may process information according
              to their agreements with us and applicable
              privacy terms.
            </p>
            <p
              className="
                mt-3
              "
            >
              We may also disclose information when required
              by law, to protect our rights, or as part of
              a legitimate business transfer.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              5. Cookies and Website Analytics
            </h2>
            <p>
              Our website and embedded services may use
              cookies or similar technologies for website
              functionality, spam prevention, analytics,
              and form management. Certain third-party
              services may collect information about your
              activity across websites over time, depending
              on their technology and your browser settings.
            </p>
            <p
              className="
                mt-3
              "
            >
              You can manage cookies through your browser
              settings. Disabling certain technologies may
              affect some website features.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              6. Data Security and Retention
            </h2>
            <p>
              We take reasonable steps to safeguard the
              information we handle and use established
              technology providers to support our operations.
              However, no online system is completely secure.
            </p>
            <p
              className="
                mt-3
              "
            >
              We retain information for as long as reasonably
              necessary for the purposes described in this
              policy, including customer service, recordkeeping,
              legal obligations, and legitimate business needs.
              You may request deletion of eligible information
              using the contact details below.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              7. Your Privacy Choices
            </h2>
            <p>
              You may contact us to request access to,
              correction of, or deletion of personal
              information we maintain about you, subject
              to applicable laws and recordkeeping needs.
              We may need to verify your identity before
              fulfilling a request.
            </p>
            <p
              className="
                mt-3
              "
            >
              Nevada residents may also submit applicable
              requests concerning the sale of covered
              information under Nevada law. Contact us
              using the email address below. Requests
              will be handled as required by applicable law.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              8. Children's Privacy
            </h2>
            <p>
              Our website and services are intended for
              business audiences and are not directed
              to children under 13. If you believe a child
              has provided us with personal information,
              please contact us.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              9. Changes to This Policy
            </h2>
            <p>
              We may update this policy as our business,
              technology, or legal obligations change.
              Material updates will be communicated through
              an updated notice on this page, and where
              appropriate, by additional notification.
              The effective date above indicates when the
              current version took effect.
            </p>
          </section>

          <section>
            <h2
              className="
                mb-3
                text-2xl font-semibold text-white
              "
            >
              10. Contact Rekode Digital
            </h2>
            <p>
              If you have questions about this policy or
              wish to make a privacy request, contact:
            </p>
            <div
              className="
                mt-4 p-6
                bg-white/5
                rounded-xl border border-[#C9784A]/30
              "
            >
              <p
                className="
                  font-bold text-white
                "
              >
                Rekode Digital
              </p>
              <p>Eric Rekofke, Owner</p>
              <p>Winnemucca, Nevada 89445</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:getrekode@gmail.com"
                  className="
                    text-[#C9784A]
                    hover:underline
                  "
                >
                  getrekode@gmail.com
                </a>
              </p>
              <p>Phone: 775-375-5765</p>
              <p>
                Website:{" "}
                <a
                  href="https://www.rekodedigital.com"
                  className="
                    text-[#C9784A]
                    hover:underline
                  "
                >
                  www.rekodedigital.com
                </a>
              </p>
            </div>
          </section>
        </div>

        <div
          className="
            mt-14 pt-6
            text-sm text-slate-400
            border-t border-white/15
          "
        >
          © {new Date().getFullYear()} Rekode Digital.
          All rights reserved.
        </div>
      </div>
    </main>
  );
}
