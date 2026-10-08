
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  MousePointerClick,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Can They Find You?",
    description:
      "When someone searches for your services, does your business appear where they are looking?",
    Icon: Search,
  },
  {
    number: "02",
    title: "Do They Trust You?",
    description:
      "Does your website and online presence give customers confidence that you're the right choice?",
    Icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Can They Choose You?",
    description:
      "Can visitors easily call, get directions, or request a quote without frustration?",
    Icon: MousePointerClick,
  },
];

export default function CustomerPerspective() {
  return (
    <section
      id="customer-perspective"
      className="
        overflow-hidden
        px-6 py-24
        text-white
        bg-[#071426]
        relative
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          h-96 w-96
          bg-[#C58B55]/10
          rounded-full
          pointer-events-none
          absolute -right-40 -top-40 blur-3xl
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
        "
      >
        {/* Heading */}
        <div
          className="
            max-w-3xl
            mx-auto mb-16
            text-center
          "
        >
          <p
            className="
              mb-4
              text-sm font-semibold tracking-[0.25em] text-[#C58B55]
              uppercase
            "
          >
            The Customer Perspective
          </p>

          <h2
            className="
              mb-6
              text-3xl font-bold leading-tight
              md:text-5xl
            "
          >
            See Your Business Through{" "}
            <span
              className="
                text-[#C58B55]
              "
            >
              Your Customer&apos;s Eyes
            </span>
          </h2>

          <p
            className="
              text-lg leading-relaxed text-slate-300
            "
          >
            You know the quality of your work. But before
            customers ever meet you, they judge what they
            can find online. What impression is your
            business making?
          </p>
        </div>

        {/* Customer journey cards */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {steps.map(
            ({ number, title, description, Icon }) => (
              <div
                key={number}
                className="
                  p-8
                  bg-white/[0.04]
                  rounded-2xl border border-white/10
                  transition-all
                  group duration-300 hover:-translate-y-2 hover:border-[#C58B55]/60 hover:bg-white/[0.07]
                "
              >
                <div
                  className="
                    flex
                    mb-8
                    items-center justify-between
                  "
                >
                  <div
                    className="
                      flex
                      h-14 w-14
                      text-[#C58B55]
                      bg-[#C58B55]/10
                      rounded-xl
                      items-center justify-center
                    "
                  >
                    <Icon
                      size={28}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    className="
                      text-3xl font-bold text-white/10
                    "
                  >
                    {number}
                  </span>
                </div>

                <h3
                  className="
                    mb-4
                    text-xl font-semibold
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    leading-relaxed text-slate-300
                  "
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>

        {/* Call to action */}
        <div
          className="
            mt-16
            text-center
          "
        >
          <h3
            className="
              mb-4
              text-2xl font-bold
              md:text-3xl
            "
          >
            What Are Your Customers Seeing?
          </h3>

          <p
            className="
              max-w-2xl
              mx-auto mb-8
              text-slate-300
            "
          >
            Get a fresh perspective on your
            business&apos;s online visibility.
            Discover opportunities to make a
            stronger first impression.
          </p>

          <Link
            href="/#visibility-review"
            className="
              inline-flex
              px-8 py-4
              font-bold text-[#071426]
              bg-[#C58B55]
              rounded-xl
              transition-all
              items-center justify-center gap-3 duration-300 hover:bg-[#DDA46E] hover:shadow-lg hover:shadow-[#C58B55]/20
            "
          >
            Get My Free Visibility Review
            <ArrowRight
              size={20}
              aria-hidden="true"
            />
          </Link>

          <p
            className="
              mt-4
              text-sm text-slate-400
            "
          >
            Complimentary review. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
