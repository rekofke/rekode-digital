
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MonitorSmartphone,
  MapPin,
  Palette,
  Settings2,
  Megaphone,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Rekode Digital's website design, local SEO, Google Business Profile, branding, social media, and digital solutions for small businesses in Northern Nevada.",
};

const services = [
  {
    id: "websites",
    number: "01",
    title: "Website Design & Redesign",
    subtitle: "Make a great first impression.",
    description:
      "Your website should do more than just exist. It should help customers understand what you offer, trust your business, and take the next step. We build modern, responsive websites around your business and your goals.",
    icon: MonitorSmartphone,
    benefits: [
      "Custom website design and redesign",
      "Mobile-friendly, responsive layouts",
      "Clear service and contact pages",
      "Website updates and maintenance options",
    ],
  },
  {
    id: "local-visibility",
    number: "02",
    title: "Google Business Profile & Local SEO",
    subtitle: "Help nearby customers find you.",
    description:
      "When people search for services in your area, your business needs a professional and accurate online presence. We help improve your Google Business Profile, local business information, and website content so potential customers can find and evaluate you more easily.",
    icon: MapPin,
    benefits: [
      "Google Business Profile review and optimization",
      "Consistent business contact information",
      "Local search and website recommendations",
      "Review and reputation-building guidance",
    ],
  },
  {
    id: "branding",
    number: "03",
    title: "Branding & Digital Identity",
    subtitle: "Look as professional as the work you do.",
    description:
      "Your branding tells a story before you ever speak to a customer. We help businesses create a consistent, recognizable appearance across websites, graphics, social media, and everyday marketing materials.",
    icon: Palette,
    benefits: [
      "Logo and visual identity concepts",
      "Coordinated colors, fonts, and graphics",
      "Business cards and marketing materials",
      "Consistent digital brand presentation",
    ],
  },
  {
    id: "digital-solutions",
    number: "04",
    title: "Digital Solutions & Automation",
    subtitle: "Make technology work for your business.",
    description:
      "Small businesses should not need complicated systems to operate professionally. We create practical digital tools that simplify communication, collect inquiries, and improve how businesses connect with customers.",
    icon: Settings2,
    benefits: [
      "Contact and quote-request forms",
      "Customer inquiry workflows",
      "Business email and digital tool setup",
      "Custom solutions for everyday business needs",
    ],
  },
  {
    id: "marketing",
    number: "05",
    title: "Social Media & Digital Marketing",
    subtitle: "Show up consistently and professionally.",
    description:
      "From campaign graphics to promotional messaging, we help businesses communicate their value online. The focus is on practical content that supports your business goals and fits your available time and budget.",
    icon: Megaphone,
    benefits: [
      "Social media graphics and promotional content",
      "Campaign and post planning",
      "Digital advertising creative",
      "Consistent messaging across platforms",
    ],
  },
  {
    id: "visibility-review",
    number: "06",
    title: "Free Business Visibility Review",
    subtitle: "Discover where you stand online.",
    description:
      "Not sure what your business needs? Start with a complimentary review. We look at your online presence from a potential customer's perspective and identify practical opportunities for improvement.",
    icon: SearchCheck,
    benefits: [
      "Website and mobile experience review",
      "Google presence and local visibility review",
      "Customer trust and contact experience",
      "Actionable improvement recommendations",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "We learn about your business, your customers, and what you want to accomplish.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Find the Opportunities",
    description:
      "We evaluate your current online presence and recommend practical next steps.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Build & Improve",
    description:
      "We put the right solutions in place and help your business move forward.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
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
          px-6 pb-24 pt-40
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
            absolute left-1/2 top-20 -translate-x-1/2 blur-[120px]
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
            What We Do
          </p>

          <h1
            className="
              mt-5
              text-4xl font-bold leading-tight tracking-tight
              sm:text-6xl
            "
          >
            Digital Services Built for
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Local Business Growth.
            </span>
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto mt-7
              text-lg leading-8 text-slate-300
            "
          >
            Your business deserves a strong online presence.
            Rekode Digital provides modern websites, better
            local visibility, professional branding, and
            practical technology solutions without unnecessary
            complexity.
          </p>

          <div
            className="
              flex flex-col
              mt-10
              justify-center gap-4
              sm:flex-row
            "
          >
            <Link
              href="/#visibility-review"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Get a Free Visibility Review
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                rounded-md border border-white/25
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Let&apos;s Talk About Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section
        className="
          px-6 py-20
          bg-[#09182b]
          lg:px-8
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.25em] text-[#C9784A]
              uppercase
            "
          >
            Our Solutions
          </p>

          <h2
            className="
              max-w-3xl
              mt-4
              text-3xl font-bold
              sm:text-4xl
            "
          >
            The right tools for where your business is today.
          </h2>

          <p
            className="
              max-w-3xl
              mt-5
              leading-8 text-slate-400
            "
          >
            Whether you&apos;re just getting started or looking to
            improve what you already have, we&apos;ll help identify
            solutions that make sense for your business.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICE CARDS */}
      <section
        className="
          px-6 py-24
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-7
            md:grid-cols-2
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                id={service.id}
                className="
                  p-7
                  bg-[#09182b]
                  rounded-2xl border border-white/10
                  group scroll-mt-28 transition hover:-translate-y-1 hover:border-[#C9784A]/50
                  sm:p-9
                "
              >
                <div
                  className="
                    flex
                    items-start justify-between gap-4
                  "
                >
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
                    <Icon size={28} />
                  </div>

                  <span
                    className="
                      text-sm font-bold tracking-widest text-[#C9784A]/70
                    "
                  >
                    {service.number}
                  </span>
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl font-bold
                    sm:text-3xl
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    font-semibold text-[#C9784A]
                  "
                >
                  {service.subtitle}
                </p>

                <p
                  className="
                    mt-5
                    leading-8 text-slate-400
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                    mt-8 pt-7
                    border-t border-white/10
                  "
                >
                  <p
                    className="
                      mb-5
                      text-sm font-semibold tracking-[0.15em] text-slate-300
                      uppercase
                    "
                  >
                    What This Can Include
                  </p>

                  <ul
                    className="
                      space-y-4
                    "
                  >
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="
                          flex
                          text-slate-300
                          items-start gap-3
                        "
                      >
                        <CheckCircle2
                          size={20}
                          className="
                            mt-0.5
                            text-[#C9784A]
                            shrink-0
                          "
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={
                    service.id === "visibility-review"
                      ? "/#visibility-review"
                      : "/contact"
                  }
                  className="
                    inline-flex
                    mt-9
                    font-semibold text-[#C9784A]
                    items-center gap-2 transition hover:gap-3 hover:text-[#E5A77C]
                  "
                >
                  {service.id === "visibility-review"
                    ? "Request Your Free Review"
                    : "Ask About This Service"}
                  <ArrowRight size={18} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY REKODE */}
      <section
        className="
          px-6 py-24
          bg-[#09182b]
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-12
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
              The Rekode Difference
            </p>

            <h2
              className="
                mt-5
                text-3xl font-bold leading-tight
                sm:text-5xl
              "
            >
              Hometown Values.
              <span
                className="
                  block
                  text-[#C9784A]
                "
              >
                Modern Solutions.
              </span>
            </h2>

            <p
              className="
                mt-7
                leading-8 text-slate-300
              "
            >
              We understand that local businesses have real
              responsibilities, limited time, and budgets that
              need to make sense. Our approach starts with
              listening, understanding your goals, and
              recommending practical improvements.
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              We&apos;re based in Winnemucca, Nevada, and we&apos;re
              proud to serve businesses throughout Northern
              Nevada and beyond.
            </p>

            <Link
              href="/how-it-works"
              className="
                inline-flex
                mt-8
                font-semibold text-[#C9784A]
                items-center gap-2 transition hover:text-[#E5A77C]
              "
            >
              Learn How We Work
              <ArrowRight size={18} />
            </Link>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {[
              ["Practical First", "Solutions built around actual business needs."],
              ["Clear Communication", "Straightforward explanations and expectations."],
              ["Locally Focused", "An understanding of small-town and rural businesses."],
              ["Built to Grow", "Digital tools that can evolve with your business."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="
                  p-6
                  bg-[#071426]
                  rounded-xl border border-[#C9784A]/20
                "
              >
                <CheckCircle2
                  size={25}
                  className="
                    text-[#C9784A]
                  "
                />

                <h3
                  className="
                    mt-5
                    text-xl font-bold
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-3
                    leading-7 text-slate-400
                  "
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="
          px-6 py-24
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
              Getting Started
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Simple Steps. Real Progress.
            </h2>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              No confusing process or unnecessary complexity.
              Just a straightforward way to improve your
              business&apos;s digital presence.
            </p>
          </div>

          <div
            className="
              grid
              mt-14
              gap-6
              md:grid-cols-3
            "
          >
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    p-8
                    text-center
                    bg-[#09182b]
                    rounded-2xl border border-white/10
                  "
                >
                  <div
                    className="
                      flex
                      h-14 w-14
                      mx-auto
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
                      mt-6
                      text-sm font-bold tracking-widest text-[#C9784A]
                    "
                  >
                    STEP {step.number}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-xl font-bold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7 text-slate-400
                    "
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
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
            Ready When You Are
          </p>

          <h2
            className="
              mt-5
              text-3xl font-bold
              sm:text-5xl
            "
          >
            Let&apos;s Build Something Better.
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              leading-8 text-slate-300
            "
          >
            Whether you need a new website, better local
            visibility, or help choosing your next digital
            step, let&apos;s start with a conversation.
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
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Contact Rekode Digital
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/#visibility-review"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                rounded-md border border-white/20
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Get Your Free Review
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
