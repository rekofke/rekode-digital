
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageSquare,
  Search,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Rekode Digital in Winnemucca, Nevada, for website design, local visibility, branding, and practical digital solutions.",
};

const contactDetails = [
  {
    label: "Email Us",
    value: "getrekode@gmail.com",
    href: "mailto:getrekode@gmail.com",
    icon: Mail,
  },
  {
    label: "Call Us",
    value: "(775) 375-5765",
    href: "tel:+17753755765",
    icon: Phone,
  },
  {
    label: "Based In",
    value: "Winnemucca, Nevada",
    href: null,
    icon: MapPin,
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "1. Reach Out",
    text: "Tell us about your business and what you'd like to improve.",
  },
  {
    icon: Search,
    title: "2. We Explore",
    text: "We'll review your needs and discuss practical options.",
  },
  {
    icon: Handshake,
    title: "3. Move Forward",
    text: "We'll outline clear next steps, with no pressure.",
  },
];

export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="
          overflow-hidden
          px-6 pb-20 pt-40
          relative
          lg:px-8
        "
      >
        <div
          className="
            h-80 w-80
            bg-[#C9784A]/10
            rounded-full
            absolute left-1/2 top-28 -translate-x-1/2 blur-[110px]
          "
        />

        <div
          className="
            max-w-5xl
            mx-auto
            text-center
            relative
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Get in Touch
          </p>

          <h1
            className="
              mt-5
              text-4xl font-bold tracking-tight
              sm:text-6xl
            "
          >
            Let&apos;s Talk About
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Your Business Goals.
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto mt-7
              text-lg leading-8 text-slate-300
            "
          >
            Have a question, an idea, or a business that needs a
            stronger online presence? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}
      <section
        className="
          px-6 pb-28
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-10
            lg:grid-cols-5
          "
        >

          {/* LEFT COLUMN */}
          <div
            className="
              lg:col-span-2
            "
          >
            <h2
              className="
                text-3xl font-bold
              "
            >
              Start the Conversation
            </h2>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              Whether you need a new website, better Google
              visibility, or guidance on your digital presence,
              we&apos;re here to help you figure out the next step.
            </p>

            {/* CONTACT DETAILS */}
            <div
              className="
                mt-10 space-y-5
              "
            >
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="
                      flex
                      items-start gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-12 w-12
                        text-[#C9784A]
                        bg-[#C9784A]/10
                        rounded-xl
                        shrink-0 items-center justify-center
                      "
                    >
                      <Icon size={23} />
                    </div>

                    <div>
                      <p
                        className="
                          text-sm text-slate-400
                        "
                      >
                        {detail.label}
                      </p>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="
                            inline-block
                            mt-1
                            font-semibold text-white
                            transition hover:text-[#C9784A]
                          "
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p
                          className="
                            mt-1
                            font-semibold
                          "
                        >
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FREE VISIBILITY REVIEW CARD */}
            <div
              className="
                mt-12 p-7
                bg-[#09182b]
                rounded-2xl border border-[#C9784A]/30
              "
            >
              <Search
                size={30}
                className="
                  text-[#C9784A]
                "
              />

              <h3
                className="
                  mt-4
                  text-xl font-bold
                "
              >
                Not Sure Where to Start?
              </h3>

              <p
                className="
                  mt-3
                  leading-7 text-slate-400
                "
              >
                Get a complimentary Business Visibility Review.
                We&apos;ll take a look at your current online
                presence and identify practical opportunities
                for improvement.
              </p>

              <Link
                href="/#visibility-review"
                className="
                  inline-flex
                  mt-6
                  font-semibold text-[#C9784A]
                  items-center gap-2 transition hover:text-[#E5A77C]
                "
              >
                Request Your Free Review
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div
            className="
              p-7
              bg-[#09182b]
              rounded-2xl border border-white/10
              shadow-2xl
              sm:p-10
              lg:col-span-3
            "
          >

            <p
              className="
                text-sm font-semibold tracking-[0.2em] text-[#C9784A]
                uppercase
              "
            >
              Send a Message
            </p>

            <h2
              className="
                mt-3
                text-3xl font-bold
              "
            >
              Tell Us About Your Project
            </h2>

            <p
              className="
                mt-4
                leading-7 text-slate-400
              "
            >
              Share a little about what you&apos;re looking for,
              and we&apos;ll take it from there.
            </p>

            {/* INTERACTIVE FORM */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section
        className="
          px-6 py-20
          bg-[#09182b]
          border-t border-white/10
          lg:px-8
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
          "
        >

          <div
            className="
              mb-12
              text-center
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              Our Approach
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              What Happens Next?
            </h2>

            <p
              className="
                max-w-xl
                mx-auto mt-5
                leading-7 text-slate-400
              "
            >
              Starting a conversation with Rekode Digital is
              simple and pressure-free.
            </p>
          </div>

          <div
            className="
              grid
              text-center
              gap-8
              md:grid-cols-3
            "
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="
                    p-8
                    bg-[#071426]
                    rounded-xl border border-white/10
                  "
                >
                  <Icon
                    size={30}
                    className="
                      mx-auto
                      text-[#C9784A]
                    "
                  />

                  <h3
                    className="
                      mt-5
                      text-xl font-bold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-7 text-slate-400
                    "
                  >
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section
        className="
          px-6 py-20
          lg:px-8
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <h2
            className="
              text-3xl font-bold
              sm:text-4xl
            "
          >
            Ready to Give Your Business a Fresh Start?
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-5
              leading-8 text-slate-400
            "
          >
            We help Northern Nevada businesses get found,
            look professional, and grow through practical
            digital solutions.
          </p>

          <Link
            href="/#visibility-review"
            className="
              inline-flex
              mt-8 px-8 py-4
              font-semibold text-white
              bg-[#C9784A]
              rounded-md
              items-center gap-2 transition hover:bg-[#D8895B]
            "
          >
            Get Your Free Visibility Review
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
