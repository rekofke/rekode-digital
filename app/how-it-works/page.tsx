import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How It Works | Rekode Digital",
  description:
    "See how Rekode Digital works with local businesses to improve their online presence through a simple, practical five-step process.",
};

const steps = [
  {
    number: "01",
    title: "We Talk",
    description:
      "We start with a conversation about your business, your customers, the services you provide, and where you want to grow. No assumptions. No cookie-cutter package.",
  },
  {
    number: "02",
    title: "We Review",
    description:
      "We look at your current online presence from a customer's perspective — including your website, Google presence, mobile experience, reviews, services, and how easy it is to contact you.",
  },
  {
    number: "03",
    title: "We Recommend",
    description:
      "We identify the biggest opportunities and explain what we think will actually help. You get clear recommendations without being pushed into technology you don't need.",
  },
  {
    number: "04",
    title: "We Build",
    description:
      "Once we know what makes sense, we build the tools and online presence your business actually needs — whether that's a website, improved visibility, lead-generation tools, or something more customized.",
  },
  {
    number: "05",
    title: "We Grow",
    description:
      "Your business changes over time, and your online presence should too. We can continue helping with updates, maintenance, visibility, new pages, improvements, and practical digital solutions.",
  },
];

const expectations = [
  "Clear communication",
  "Practical recommendations",
  "No unnecessary technology",
  "Solutions built around your business",
];

export default function HowItWorksPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <Navbar />

      {/* Hero */}
      <section
        className="
          px-6 pb-20 pt-36
          lg:px-8 lg:pb-24 lg:pt-40
        "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            How It Works
          </p>

          <h1
            className="
              mt-5
              text-4xl font-bold tracking-tight
              sm:text-6xl
            "
          >
            Simple Process.
            <br />
            <span
              className="
                text-slate-300
              "
            >Real Business Results.</span>
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto mt-7
              text-lg leading-8 text-slate-300
            "
          >
            We believe working on your business online should not be
            complicated. Our process is straightforward, collaborative, and
            built around what your business actually needs.
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
              href="/#visibility-review"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                items-center justify-center transition hover:bg-[#D8895B]
              "
            >
              Get a Free Visibility Review
            </Link>

            <Link
              href="/"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                rounded-md border border-white/20
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="
          px-6 pb-24
          lg:px-8 lg:pb-32
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
              max-w-2xl
              mx-auto mb-14
              text-center
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              Our Process
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              Five Steps. One Clear Direction.
            </h2>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              From the first conversation to ongoing improvements, we keep the
              process focused on your business and your customers.
            </p>
          </div>

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-5
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  p-7
                  bg-[#09182b]
                  rounded-2xl border border-white/10
                  relative transition hover:-translate-y-1 hover:border-[#C9784A]/40
                "
              >
                <div
                  className="
                    text-4xl font-bold text-[#C9784A]/40
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-6
                    text-xl font-bold
                  "
                >{step.title}</h3>

                <p
                  className="
                    mt-4
                    text-sm leading-7 text-slate-400
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="
          px-6 pb-24
          lg:px-8 lg:pb-32
        "
      >
        <div
          className="
            grid
            max-w-6xl
            mx-auto px-8 py-12
            bg-[#09182b]
            rounded-2xl border border-[#C9784A]/20
            gap-12
            lg:grid-cols-2 lg:px-14 lg:py-16 lg:items-center
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              The Rekode Approach
            </p>

            <h2
              className="
                mt-4
                text-3xl font-bold
                sm:text-4xl
              "
            >
              You run the business.
              <br />
              We help with the digital side.
            </h2>

            <p
              className="
                mt-6
                leading-8 text-slate-400
              "
            >
              Running a local business already comes with enough moving parts.
              Your website, Google presence, technology, and online visibility
              should support the work you are already doing — not become
              another problem you have to manage.
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              That&apos;s why we focus on practical solutions, clear communication,
              and long-term relationships instead of selling technology for
              technology&apos;s sake.
            </p>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {expectations.map((item) => (
              <div
                key={item}
                className="
                  p-5
                  bg-[#071426]
                  rounded-xl border border-white/10
                "
              >
                <div
                  className="
                    flex
                    items-start gap-3
                  "
                >
                  <span
                    className="
                      mt-1
                      text-lg text-[#C9784A]
                    "
                  >✓</span>

                  <span
                    className="
                      font-medium text-slate-200
                    "
                  >{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          px-6 pb-28
          lg:px-8
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto px-8 py-14
            text-center
            bg-[#09182b]
            rounded-2xl border border-[#C9784A]/30
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.25em] text-[#C9784A]
              uppercase
            "
          >
            Start With A Conversation
          </p>

          <h2
            className="
              mt-4
              text-3xl font-bold
              sm:text-4xl
            "
          >
            Lets see where your opportunities are.
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-5
              leading-8 text-slate-400
            "
          >
            Start with a complimentary Business Visibility Review. We will take
            a look at how your business appears online and help identify where
            you may have opportunities to improve.
          </p>

          <div
            className="
              flex flex-col
              mt-8
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
                items-center justify-center transition hover:bg-[#D8895B]
              "
            >
              Get Your Free Review
            </Link>

            <a
              href="tel:+17753755765"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                rounded-md border border-white/20
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Call 775-375-5765
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}