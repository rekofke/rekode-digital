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
        {/* Section heading */}
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

          <p
            className="
              max-w-2xl
              mt-6
              text-lg leading-8 text-slate-400
            "
          >
            No unnecessary complexity. Just professional digital solutions
            designed to help your business get noticed, earn trust, and grow.
          </p>
        </div>

        {/* Service cards */}
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
                group relative transition duration-300 hover:-translate-y-2 hover:border-[#C9784A]/60
              "
            >
              <span
                className="
                  text-sm font-semibold text-[#C9784A]
                "
              >
                {service.number}
              </span>

              <h3
                className="
                  mt-8
                  text-2xl font-semibold
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-7 text-slate-400
                "
              >
                {service.description}
              </p>

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
      </div>
    </section>
  );
}