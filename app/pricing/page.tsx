
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MonitorSmartphone,
  TrendingUp,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Pricing & Packages",
  description:
    "Explore starting prices for Rekode Digital website design and digital solutions in Winnemucca and Northern Nevada. Request a personalized quote.",
};

const packages = [
  {
    name: "Starter Website",
    eyebrow: "Establish Your Presence",
    price: "$750",
    description:
      "A clean, professional website for a small business that needs to get online and make a strong first impression.",
    icon: MonitorSmartphone,
    featured: false,
    features: [
      "Up to 3 custom-designed pages",
      "Mobile-friendly responsive design",
      "Contact information and clear calls to action",
      "Basic search-engine optimization setup",
      "Links to your social media profiles",
      "Launch assistance",
    ],
  },
  {
    name: "Business Growth",
    eyebrow: "Build Trust & Generate Leads",
    price: "$1,500",
    description:
      "A more complete website for businesses that want dedicated service pages, stronger messaging, and better lead-generation opportunities.",
    icon: TrendingUp,
    featured: true,
    features: [
      "Up to 6 custom-designed pages",
      "Mobile-friendly responsive design",
      "Dedicated service and contact pages",
      "Contact or quote-request form",
      "Enhanced on-page SEO foundation",
      "Basic website analytics setup",
      "Launch assistance",
    ],
  },
  {
    name: "Custom Digital Solutions",
    eyebrow: "Built Around Your Business",
    price: "Custom",
    description:
      "For websites and digital tools that need specialized functionality, integrations, or a more tailored approach.",
    icon: Wrench,
    featured: false,
    features: [
      "Custom page count and site architecture",
      "Advanced forms and inquiry workflows",
      "Booking or scheduling integrations",
      "Custom features and business tools",
      "Third-party service integrations",
      "Personalized project scope and proposal",
    ],
  },
];

const faqs = [
  {
    question: "Are these fixed prices?",
    answer:
      "No. These are starting prices to help you plan. Your final quote depends on your goals, the number of pages, content requirements, integrations, and other project details. You'll receive a clear quote before work begins.",
  },
  {
    question: "Do I have to pay for everything upfront?",
    answer:
      "Payment terms are discussed before a project begins and included in your written proposal. Depending on the project, milestone-based payment arrangements may be available.",
  },
  {
    question: "Are domain names and hosting included?",
    answer:
      "Domain registration, hosting subscriptions, paid software, and ongoing services may involve separate costs. We'll explain any expected third-party expenses in your quote before you commit.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can review your existing website to see whether a redesign, targeted improvements, or a fresh build makes the most sense.",
  },
  {
    question: "Can I update my website after it launches?",
    answer:
      "Yes. Depending on how your website is built, we can discuss content updates, ongoing maintenance, and support options. Those arrangements are quoted separately when needed.",
  },
  {
    question: "Can you help with Google Business Profile or branding without building a website?",
    answer:
      "Absolutely. Rekode Digital also offers local visibility, Google Business Profile support, branding, and other digital solutions. Contact us for a quote tailored to the service you need.",
  },
];

export default function PricingPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <Navbar />

      {/* HERO */}
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
            h-96 w-96
            bg-[#C9784A]/10
            rounded-full
            pointer-events-none
            absolute left-1/2 top-24 -translate-x-1/2 blur-[120px]
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
            Straightforward Starting Prices
          </p>

          <h1
            className="
              mt-5
              text-4xl font-bold tracking-tight
              sm:text-6xl
            "
          >
            Professional Websites.
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Practical Pricing.
            </span>
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto mt-7
              text-lg leading-8 text-slate-300
            "
          >
            Every business has different goals and needs. Our
            starting packages give you a useful baseline,
            while a personalized quote ensures you only pay
            for solutions that make sense for your business.
          </p>

          <div
            className="
              flex flex-col
              mt-9
              justify-center gap-4
              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Request a Personalized Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                rounded-md border border-white/25
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        className="
          px-6 pb-24
          lg:px-8
        "
      >
        <div
          className="
            max-w-7xl
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
              Website Packages
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Choose Your Starting Point.
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto mt-5
                leading-8 text-slate-400
              "
            >
              These packages are examples of common project
              scopes. We&apos;ll confirm the right fit and final
              investment after discussing your business.
            </p>
          </div>

          <div
            className="
              grid
              items-stretch gap-7
              lg:grid-cols-3
            "
          >
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className={item.featured
                      ? "relative flex flex-col rounded-2xl border-2 border-[#C9784A] bg-[#09182b] p-7 shadow-xl shadow-[#C9784A]/10 sm:p-9"
                      : "relative flex flex-col rounded-2xl border border-white/10 bg-[#09182b] p-7 sm:p-9"}
                >
                  {item.featured && (
                    <span
                      className="
                        px-5 py-2
                        text-xs font-bold tracking-wider text-white
                        bg-[#C9784A]
                        rounded-full
                        absolute -top-4 left-1/2 -translate-x-1/2 uppercase
                      "
                    >
                      Popular Starting Point
                    </span>
                  )}

                  <div
                    className="
                      flex
                      h-14 w-14
                      text-[#C9784A]
                      bg-[#C9784A]/10
                      rounded-xl
                      items-center justify-center
                    "
                  >
                    <Icon size={27} />
                  </div>

                  <p
                    className="
                      mt-7
                      text-xs font-semibold tracking-[0.2em] text-[#C9784A]
                      uppercase
                    "
                  >
                    {item.eyebrow}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl font-bold
                    "
                  >
                    {item.name}
                  </h3>

                  <div
                    className="
                      mt-6
                    "
                  >
                    {item.price === "Custom" ? (
                      <p
                        className="
                          text-3xl font-bold
                        "
                      >
                        Custom Quote
                      </p>
                    ) : (
                      <div>
                        <p
                          className="
                            text-sm text-slate-400
                          "
                        >
                          Starting at
                        </p>
                        <p
                          className="
                            mt-1
                            text-5xl font-bold
                          "
                        >
                          {item.price}
                          <span
                            className="
                              ml-1
                              text-2xl text-[#C9784A]
                            "
                          >
                            +
                          </span>
                        </p>
                      </div>
                    )}
                  </div>

                  <p
                    className="
                      min-h-24
                      mt-6
                      leading-7 text-slate-400
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-7 pt-7
                      border-t border-white/10
                    "
                  >
                    <p
                      className="
                        mb-5
                        text-sm font-semibold text-slate-200
                      "
                    >
                      What This Can Include
                    </p>

                    <ul
                      className="
                        space-y-4
                      "
                    >
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="
                            flex
                            text-sm leading-6 text-slate-300
                            items-start gap-3
                          "
                        >
                          <CheckCircle2
                            size={19}
                            className="
                              mt-0.5
                              text-[#C9784A]
                              shrink-0
                            "
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="
                      mt-auto pt-10
                    "
                  >
                    <Link
                          href={`/contact?package=${encodeURIComponent(item.name)}`}                      className={item.featured
                          ? "flex items-center justify-center gap-2 rounded-md bg-[#C9784A] px-6 py-4 font-semibold text-white transition hover:bg-[#D8895B]"
                          : "flex items-center justify-center gap-2 rounded-md border border-[#C9784A]/60 px-6 py-4 font-semibold text-[#E5A77C] transition hover:bg-[#C9784A] hover:text-white"}
                    >
                      {item.price === "Custom"
                        ? "Discuss Your Project"
                        : "Request a Quote"}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p
            className="
              max-w-4xl
              mx-auto mt-10
              text-center text-sm leading-7 text-slate-400
            "
          >
            Pricing shown is illustrative starting pricing
            for website projects, not a guaranteed final
            quote. Domain names, hosting, subscriptions,
            copywriting, additional features, and ongoing
            services may be priced separately. Your proposal
            will outline the scope, deliverables, and costs.
          </p>
        </div>
      </section>

        
      {/* WHO EACH PACKAGE IS FOR */}
      <section
        className="
          px-6 pb-24
          bg-[#071426]
          lg:px-8
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
          "
        >
          <div
            className="
              max-w-3xl
              mx-auto
              text-center
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              Find Your Fit
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Which Website Package Is Right for You?
            </h2>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              You don't need to know anything about web
              development to get started. Choose the situation
              that best describes your business.
            </p>
          </div>

          <div
            className="
              grid
              mt-12
              gap-6
              md:grid-cols-3
            "
          >
            {[
              {
                title: "I'm Just Getting Started",
                package: "Starter Website",
                description:
                  "You need a professional online home where customers can learn about your business and contact you.",
              },
              {
                title: "I'm Ready to Grow",
                package: "Business Growth",
                description:
                  "You want more service information, stronger calls to action, and better opportunities to generate inquiries.",
              },
              {
                title: "I Need Something Unique",
                package: "Custom Digital Solutions",
                description:
                  "Your business needs specialized features, integrations, or workflows beyond a standard website.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  p-7
                  bg-[#09182b]
                  rounded-xl border border-white/10
                "
              >
                <h3
                  className="
                    text-xl font-bold text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    font-semibold text-[#C9784A]
                  "
                >
                  {item.package}
                </p>

                <p
                  className="
                    mt-4
                    leading-7 text-slate-400
                  "
                >
                  {item.description}
                </p>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    mt-7
                    font-semibold text-[#C9784A]
                    items-center gap-2 transition hover:text-[#E5A77C]
                  "
                >
                  Let's Discuss Your Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FLEXIBLE SERVICES */}
      <section
        className="
          px-6 py-20
          bg-[#09182b]
          border-y border-white/10
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-6xl
            mx-auto
            gap-10
            lg:grid-cols-2 lg:items-center
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              Beyond Website Design
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Need One Service Instead of a Full Package?
            </h2>

            <p
              className="
                mt-6
                leading-8 text-slate-400
              "
            >
              Not every business needs an entirely new
              website. We can also help with Google Business
              Profile improvements, local search visibility,
              branding, contact forms, and practical digital
              solutions.
            </p>
          </div>

          <div
            className="
              p-8
              bg-[#071426]
              rounded-2xl border border-[#C9784A]/30
            "
          >
            <h3
              className="
                text-xl font-bold
              "
            >
              Let&apos;s Find the Right Fit.
            </h3>

            <p
              className="
                mt-4
                leading-7 text-slate-400
              "
            >
              Tell us what you&apos;re trying to accomplish.
              We&apos;ll discuss the scope and recommend a
              practical approach before quoting the work.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                mt-7
                font-semibold text-[#C9784A]
                items-center gap-2 transition hover:text-[#E5A77C]
              "
            >
              Get a Custom Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      
      {/* WHY CHOOSE REKODE DIGITAL */}
      <section
        className="
          px-6 py-24
          bg-[#071426]
          lg:px-8
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
          "
        >
          <div
            className="
              max-w-3xl
              mx-auto
              text-center
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              The Rekode Difference
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Big-City Capabilities.
              <span
                className="
                  block
                  text-[#C9784A]
                "
              >
                Hometown Values.
              </span>
            </h2>

            <p
              className="
                mt-6
                leading-8 text-slate-400
              "
            >
              Your business deserves more than a generic
              website. We believe in understanding what
              makes your business unique and providing
              practical solutions that support your goals.
            </p>
          </div>

          <div
            className="
              grid
              mt-14
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              {
                title: "Locally Focused",
                description:
                  "Based in Winnemucca, Nevada, with an understanding of small-town businesses and rural communities.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "Clear starting prices and personalized quotes so you understand the scope before committing.",
              },
              {
                title: "Personalized Approach",
                description:
                  "Solutions tailored to your business, your customers, and what you want to accomplish.",
              },
              {
                title: "Practical Solutions",
                description:
                  "Professional websites and digital tools designed to solve real problems without unnecessary complexity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  p-7
                  bg-[#09182b]
                  rounded-2xl border border-white/10
                  transition hover:border-[#C9784A]/40
                "
              >
                <CheckCircle2
                  size={29}
                  className="
                    text-[#C9784A]
                  "
                />

                <h3
                  className="
                    mt-6
                    text-xl font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7 text-slate-400
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-12
              text-center
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                px-8 py-4
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Let's Talk About Your Business
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>


      {/* PRICING FAQ */}
      <section
        className="
          px-6 py-24
          lg:px-8
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
          "
        >
          <div
            className="
              mb-12
              text-center
            "
          >
            <HelpCircle
              size={33}
              className="
                mx-auto
                text-[#C9784A]
              "
            />

            <h2
              className="
                mt-5
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Frequently Asked Pricing Questions
            </h2>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              A few helpful details before starting your
              website project.
            </p>
          </div>

          <div
            className="
              space-y-4
            "
          >
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="
                  bg-[#09182b]
                  rounded-xl border border-white/10
                  group
                "
              >
                <summary
                  className="
                    flex
                    p-6
                    font-semibold
                    cursor-pointer
                    list-none items-center justify-between gap-5 transition hover:text-[#C9784A]
                  "
                >
                  <span>{faq.question}</span>
                  <span
                    className="
                      text-2xl text-[#C9784A]
                      transition-transform
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>
                </summary>

                <p
                  className="
                    px-6 pb-6
                    leading-8 text-slate-400
                  "
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="
          px-6 pb-24
          lg:px-8
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto px-7 py-14
            text-center
            bg-[#09182b]
            rounded-2xl border border-[#C9784A]/30
            sm:px-12
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.25em] text-[#C9784A]
              uppercase
            "
          >
            Start With a Conversation
          </p>

          <h2
            className="
              mt-5
              text-3xl font-bold
              sm:text-5xl
            "
          >
            Let&apos;s Talk About Your Business.
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              leading-8 text-slate-300
            "
          >
            No pressure, no unnecessary extras. Just a
            straightforward discussion about what your
            business needs and what it could cost.
          </p>

          <div
            className="
              flex flex-col
              mt-9
              justify-center gap-4
              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Request Your Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/#visibility-review"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                rounded-md border border-white/25
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Get a Free Visibility Review
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
