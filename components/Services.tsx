
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Modern, responsive websites built to make your business look professional and turn visitors into customers.",
  },
  {
    number: "02",
    title: "Local Visibility",
    description:
      "Improve how your business appears online so local customers can find you when they need what you offer.",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Clean, consistent branding that helps your business look established, trustworthy, and memorable.",
  },
  {
    number: "04",
    title: "Digital Solutions",
    description:
      "Practical technology and automation that simplify how your business connects with and serves customers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        px-6 py-24
        text-white
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
        {/* SECTION INTRODUCTION */}
        <div
          className="
            max-w-3xl
          "
        >
          <p
            className="
              mb-4
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            What We Do
          </p>

          <h2
            className="
              text-4xl font-bold tracking-tight
              sm:text-5xl
            "
          >
            Digital tools built for
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              real local businesses.
            </span>
          </h2>

          {/* LOCAL SEO OPTIMIZED DESCRIPTION */}
          <p
            className="
              max-w-2xl
              mt-6
              text-lg leading-8 text-slate-300
            "
          >
            Based in Winnemucca, Rekode Digital
            helps Northern Nevada businesses build
            a stronger online presence through
            custom website design, website
            redesign, local SEO, professional
            branding, and practical digital
            solutions. We focus on helping your
            business get found, earn trust, and
            connect with more customers.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div
          className="
            grid
            mt-16
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                overflow-hidden
                p-7
                bg-[#071426]
                rounded-xl border border-white/10
                transition-all
                group relative duration-300 hover:-translate-y-2 hover:border-[#C9784A]/60
              "
            >
              {/* SERVICE NUMBER */}
              <span
                className="
                  text-sm font-semibold text-[#C9784A]
                "
              >
                {service.number}
              </span>

              {/* SERVICE TITLE */}
              <h3
                className="
                  mt-8
                  text-2xl font-semibold
                "
              >
                {service.title}
              </h3>

              {/* SERVICE DESCRIPTION */}
              <p
                className="
                  mt-4
                  leading-7 text-slate-400
                "
              >
                {service.description}
              </p>

              {/* HOVER ACCENT */}
              <div
                className="
                  h-1 w-0
                  bg-[#C9784A]
                  transition-all
                  absolute bottom-0 left-0 duration-300 group-hover:w-full
                "
              />
            </div>
          ))}
        </div>

        {/* INTERNAL SEO LINK */}
        <div
          className="
            mt-12
            text-center
          "
        >
          <Link
            href="/services"
            className="
              inline-flex
              px-7 py-4
              font-semibold text-[#C9784A]
              rounded-md border border-[#C9784A]
              transition-all
              items-center justify-center duration-300 hover:bg-[#C9784A] hover:text-white hover:shadow-lg hover:shadow-[#C9784A]/10
            "
          >
            Explore All Website & Digital Services
          </Link>

          <p
            className="
              max-w-xl
              mx-auto mt-5
              text-sm leading-6 text-slate-400
            "
          >
            From your first website to ongoing
            digital improvements, we're here
            to help your business move forward.
          </p>
        </div>
      </div>
    </section>
  );
}
