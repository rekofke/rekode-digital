import Image from "next/image";

export default function HighDesertAutoPage() {
  const services = [
    {
      title: "Diagnostics",
      description:
        "Accurate troubleshooting for warning lights, performance issues, electrical problems, and hard-to-find drivability concerns.",
    },
    {
      title: "Brake & Suspension",
      description:
        "Brake service, shocks, struts, steering components, and suspension repairs to keep your vehicle safe and predictable.",
    },
    {
      title: "Engine & Cooling",
      description:
        "Repairs for overheating, leaks, belts, hoses, cooling systems, and common engine-related problems.",
    },
    {
      title: "Routine Maintenance",
      description:
        "Oil changes, filters, fluids, inspections, and scheduled maintenance to help prevent bigger repairs later.",
    },
  ];

  const projects = [
    {
      title: "Brake System Overhaul",
      image: "/auto-brakes.png",
    },
    {
      title: "Engine Diagnostic",
      image: "/auto-diagnostic.png",
    },
    {
      title: "Suspension Repair",
      image: "/auto-suspension.png",
    },
    {
      title: "Preventive Maintenance",
      image: "/auto-maintenance.png",
    },
  ];

  return (
    <main
      className="
        text-[#1c2328]
        bg-[#f3f4f6]
      "
    >
      {/* Hero */}
      <section
        className="
          overflow-hidden
          min-h-[760px]
          text-white
          bg-[#111820]
          relative
        "
      >
        <Image
          src="/auto-hero.png"
          alt="Professional auto repair shop"
          fill
          priority
          className="
            object-cover
          "
        />

        <div
          className="
            bg-gradient-to-r from-[#0d1319]/95 via-[#0d1319]/80 to-[#0d1319]/35
            absolute inset-0
          "
        />

        <div
          className="
            flex
            min-h-[760px] max-w-7xl
            mx-auto px-6 py-24
            relative items-center
            lg:px-8
          "
        >
          <div
            className="
              max-w-3xl
            "
          >
            <p
              className="
                mb-5
                text-sm font-semibold tracking-[0.3em] text-[#e09a45]
                uppercase
              "
            >
              High Desert Auto Repair
            </p>

            <h1
              className="
                text-5xl font-bold leading-[1.05] tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              Straight Answers.
              <span
                className="
                  block
                  text-[#e09a45]
                "
              >
                Reliable Repairs.
              </span>
            </h1>

            <p
              className="
                max-w-2xl
                mt-7
                text-lg leading-8 text-slate-200
              "
            >
              Honest automotive service built around clear explanations,
              dependable workmanship, and helping drivers get back on the road
              with confidence.
            </p>

            <div
              className="
                flex flex-col
                mt-9
                gap-4
                sm:flex-row
              "
            >
              <a
                href="#appointment"
                className="
                  inline-flex
                  px-7 py-4
                  font-semibold text-white
                  bg-[#d88932]
                  rounded-md
                  items-center justify-center transition hover:bg-[#e49a45]
                "
              >
                Request an Appointment
              </a>

              <a
                href="#services"
                className="
                  inline-flex
                  px-7 py-4
                  font-semibold text-white
                  bg-black/10
                  rounded-md border border-white/30
                  items-center justify-center backdrop-blur-sm transition hover:bg-white/10
                "
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
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
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#c87425]
                uppercase
              "
            >
              Auto Services
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Repair work that makes sense.
            </h2>

            <p
              className="
                mt-6
                text-lg leading-8 text-[#5f676c]
              "
            >
              High Desert Auto Repair is designed around one simple idea:
              customers should understand what their vehicle needs and why.
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
            {services.map((service, index) => (
              <div
                key={service.title}
                className="
                  p-7
                  bg-white
                  rounded-2xl border border-slate-200
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    h-11 w-11
                    text-sm font-bold text-[#e09a45]
                    bg-[#182129]
                    rounded-full
                    items-center justify-center
                  "
                >
                  0{index + 1}
                </div>

                <h3
                  className="
                    mt-6
                    text-xl font-bold
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    leading-7 text-[#687177]
                  "
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        className="
          px-6 py-24
          text-white
          bg-[#172028]
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-14
            lg:grid-cols-2 lg:items-center
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#e09a45]
                uppercase
              "
            >
              Why Drivers Choose Us
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              No mystery. No unnecessary runaround.
            </h2>

            <p
              className="
                max-w-2xl
                mt-6
                text-lg leading-8 text-slate-300
              "
            >
              Car repairs are stressful enough. The goal is to make the process
              clearer with straightforward recommendations and service you can
              understand.
            </p>
          </div>

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {[
              "Clear Explanations",
              "Upfront Estimates",
              "Quality Parts",
              "Practical Recommendations",
            ].map((item) => (
              <div
                key={item}
                className="
                  p-6
                  bg-white/5
                  rounded-2xl border border-white/10
                "
              >
                <div
                  className="
                    text-2xl text-[#e09a45]
                  "
                >✓</div>
                <p
                  className="
                    mt-4
                    font-semibold
                  "
                >{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Work */}
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
              flex flex-col
              justify-between gap-6
              lg:flex-row lg:items-end
            "
          >
            <div
              className="
                max-w-3xl
              "
            >
              <p
                className="
                  text-sm font-semibold tracking-[0.25em] text-[#c87425]
                  uppercase
                "
              >
                In The Shop
              </p>

              <h2
                className="
                  mt-4
                  text-4xl font-bold tracking-tight
                  sm:text-5xl
                "
              >
                The kind of work customers depend on.
              </h2>
            </div>

            <p
              className="
                max-w-xl
                leading-7 text-[#697176]
              "
            >
              Example service categories and shop work presented as part of this
              Rekode Digital concept project.
            </p>
          </div>

          <div
            className="
              grid
              mt-14
              gap-6
              md:grid-cols-2
            "
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  overflow-hidden
                  min-h-[360px]
                  bg-[#1a2228]
                  rounded-2xl
                  group relative
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition duration-500 group-hover:scale-105
                  "
                />

                <div
                  className="
                    bg-gradient-to-t from-black/85 via-black/15 to-transparent
                    absolute inset-0
                  "
                />

                <div
                  className="
                    p-7
                    text-white
                    absolute bottom-0 left-0
                  "
                >
                  <p
                    className="
                      text-sm tracking-[0.2em] text-[#f0a85c]
                      uppercase
                    "
                  >
                    Service
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl font-bold
                    "
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <p
            className="
              mt-6
              text-sm leading-6 text-[#7a8287]
            "
          >
            Demo portfolio content created for presentation purposes.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        className="
          px-6 py-24
          bg-[#e8ebed]
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-14
            lg:grid-cols-2 lg:items-center
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#c87425]
                uppercase
              "
            >
              Local Auto Care
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Built around trust.
            </h2>
          </div>

          <div>
            <p
              className="
                text-lg leading-8 text-[#5e666b]
              "
            >
              High Desert Auto Repair is presented as a locally focused shop
              where customers can expect practical recommendations, clear
              communication, and dependable service.
            </p>

            <p
              className="
                mt-5
                leading-7 text-[#697176]
              "
            >
              The site concept is intentionally simple: help people understand
              the services, build trust quickly, and make it easy to request an
              appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section
        id="appointment"
        className="
          px-6 py-24
          text-white
          bg-[#111820]
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-14
            lg:grid-cols-2
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#e09a45]
                uppercase
              "
            >
              Schedule Service
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Tell us what your vehicle is doing.
            </h2>

            <p
              className="
                max-w-xl
                mt-6
                text-lg leading-8 text-slate-300
              "
            >
              Share the symptoms, warning lights, or service you need and
              we&apos;ll follow up to discuss the next step.
            </p>
          </div>

          <form
            className="
              grid
              p-8
              bg-white/5
              rounded-2xl border border-white/10
              gap-5
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                px-4 py-3.5
                text-white
                bg-[#1b252d]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#e09a45]
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
                px-4 py-3.5
                text-white
                bg-[#1b252d]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#e09a45]
              "
            />

            <input
              type="tel"
              placeholder="Phone"
              className="
                px-4 py-3.5
                text-white
                bg-[#1b252d]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#e09a45]
              "
            />

            <input
              type="text"
              placeholder="Vehicle Year / Make / Model"
              className="
                px-4 py-3.5
                text-white
                bg-[#1b252d]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#e09a45]
              "
            />

            <textarea
              rows={5}
              placeholder="Describe the problem or service you need..."
              className="
                px-4 py-3.5
                text-white
                bg-[#1b252d]
                rounded-md border border-white/10
                resize-none
                outline-none placeholder:text-slate-500 focus:border-[#e09a45]
              "
            />

            <button
              type="button"
              className="
                px-6 py-4
                font-semibold text-white
                bg-[#d88932]
                rounded-md
                transition hover:bg-[#e49a45]
              "
            >
              Request an Appointment
            </button>

            <p
              className="
                text-xs leading-5 text-slate-500
              "
            >
              Demo appointment form for portfolio presentation.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="
          px-6 py-10
          text-white
          bg-[#0a0f13]
          lg:px-8
        "
      >
        <div
          className="
            flex flex-col
            max-w-7xl
            mx-auto pt-8
            border-t border-white/10
            gap-4
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <div>
            <p
              className="
                font-bold
              "
            >
              High Desert Auto Repair
            </p>

            <p
              className="
                mt-1
                text-sm text-slate-500
              "
            >
              Straight Answers. Reliable Repairs.
            </p>
          </div>

          <p
            className="
              text-sm text-slate-500
            "
          >
            Concept project by Rekode Digital
          </p>
        </div>
      </footer>
    </main>
  );
}