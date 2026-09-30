import Image from "next/image";

export default function SummitRidgePage() {
  const services = [
    {
      title: "General Construction",
      description:
        "Reliable residential construction built around quality workmanship, clear communication, and durable results.",
    },
    {
      title: "Home Remodels",
      description:
        "Kitchen, bathroom, and interior upgrades designed to improve both function and long-term value.",
    },
    {
      title: "Roofing",
      description:
        "Roof repairs, replacements, and exterior improvements with attention to weather protection and lasting performance.",
    },
    {
      title: "Outdoor Projects",
      description:
        "Decks, fences, patios, and exterior upgrades that make outdoor spaces more useful and inviting.",
    },
  ];

  const projects = [
    {
      title: "Mountain Home Remodel",
      image: "/summit-home.png",
    },
    {
      title: "Residential Roof Replacement",
      image: "/summit-roof.png",
    },
    {
      title: "Custom Backyard Deck",
      image: "/summit-deck.png",
    },
    {
      title: "Exterior Renovation",
      image: "/summit-exterior.png",
    },
  ];

  return (
    <main
      className="
        text-[#1f2526]
        bg-[#f4efe7]
      "
    >
      {/* Hero */}
      <section
        className="
          overflow-hidden
          min-h-[760px]
          text-white
          relative
        "
      >
        <Image
          src="/summit-hero.png"
          alt="Luxury mountain home construction project"
          fill
          priority
          className="
            object-cover
          "
        />

        <div
          className="
            bg-gradient-to-r from-[#11191b]/95 via-[#11191b]/75 to-[#11191b]/30
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
                text-sm font-semibold tracking-[0.3em] text-[#c3905d]
                uppercase
              "
            >
              Serving Northern Nevada
            </p>

            <h1
              className="
                text-5xl font-bold leading-[1.05] tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              Built Right.
              <span
                className="
                  block
                  text-[#c3905d]
                "
              >Built to Last.</span>
            </h1>

            <p
              className="
                max-w-2xl
                mt-7
                text-lg leading-8 text-slate-200
              "
            >
              Summit Ridge Construction delivers dependable residential
              construction, remodeling, roofing, and outdoor projects with a
              straightforward approach and pride in the finished work.
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
                href="#estimate"
                className="
                  inline-flex
                  px-7 py-4
                  font-semibold text-white
                  bg-[#b88552]
                  rounded-md
                  items-center justify-center transition hover:bg-[#c79766]
                "
              >
                Get a Free Estimate
              </a>

              <a
                href="#projects"
                className="
                  inline-flex
                  px-7 py-4
                  font-semibold text-white
                  bg-black/10
                  rounded-md border border-white/30
                  items-center justify-center backdrop-blur-sm transition hover:bg-white/10
                "
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
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
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#a66f3f]
                uppercase
              "
            >
              What We Do
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Practical construction services for real homes.
            </h2>

            <p
              className="
                mt-6
                text-lg leading-8 text-[#5e6566]
              "
            >
              From smaller upgrades to major improvements, Summit Ridge focuses
              on dependable craftsmanship and a finished result you can feel
              good about.
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
                  bg-[#fffaf3]
                  rounded-2xl border border-[#d8cfc2]
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    h-11 w-11
                    text-sm font-bold text-[#c3905d]
                    bg-[#20282a]
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
                >{service.title}</h3>

                <p
                  className="
                    mt-3
                    leading-7 text-[#666d6e]
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
          bg-[#20282a]
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
                text-sm font-semibold tracking-[0.25em] text-[#c3905d]
                uppercase
              "
            >
              Why Summit Ridge
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Straightforward service from first conversation to final cleanup.
            </h2>

            <p
              className="
                max-w-2xl
                mt-6
                text-lg leading-8 text-slate-300
              "
            >
              Good construction should not feel confusing. We believe homeowners
              deserve clear expectations, dependable communication, and work
              that is treated with care.
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
              "Clear Estimates",
              "Dependable Scheduling",
              "Respect for Your Property",
              "Quality-Focused Work",
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
                    text-2xl text-[#c3905d]
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

      {/* Projects */}
      <section
        id="projects"
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
                  text-sm font-semibold tracking-[0.25em] text-[#a66f3f]
                  uppercase
                "
              >
                Recent Work
              </p>

              <h2
                className="
                  mt-4
                  text-4xl font-bold tracking-tight
                  sm:text-5xl
                "
              >
                Built for everyday life.
              </h2>
            </div>

            <p
              className="
                max-w-xl
                leading-7 text-[#666d6e]
              "
            >
              A sample of the type of residential work Summit Ridge Construction
              is designed to showcase.
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
                    bg-gradient-to-t from-black/80 via-black/15 to-transparent
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
                      text-sm tracking-[0.2em] text-[#d5a16e]
                      uppercase
                    "
                  >
                    Project
                  </p>
                  <h3
                    className="
                      mt-2
                      text-2xl font-bold
                    "
                  >{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <p
            className="
              mt-6
              text-sm leading-6 text-[#777e7f]
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
          bg-[#e9dfd1]
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
                text-sm font-semibold tracking-[0.25em] text-[#a66f3f]
                uppercase
              "
            >
              About Us
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Local work. Local reputation.
            </h2>
          </div>

          <div>
            <p
              className="
                text-lg leading-8 text-[#5d6464]
              "
            >
              Summit Ridge Construction is presented as a locally focused
              Northern Nevada contractor built around dependable service,
              practical solutions, and pride in craftsmanship.
            </p>

            <p
              className="
                mt-5
                leading-7 text-[#686f70]
              "
            >
              Whether the project is a remodel, a roof, or a backyard upgrade,
              the goal is simple: make the process easier and deliver something
              the homeowner is proud to live with.
            </p>
          </div>
        </div>
      </section>

      {/* Estimate */}
      <section
        id="estimate"
        className="
          px-6 py-24
          text-white
          bg-[#161d1f]
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
                text-sm font-semibold tracking-[0.25em] text-[#c3905d]
                uppercase
              "
            >
              Start a Project
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Tell us what you&apos;re planning.
            </h2>

            <p
              className="
                max-w-xl
                mt-6
                text-lg leading-8 text-slate-300
              "
            >
              Share a few details and we&apos;ll follow up to talk through the
              project, timeline, and next steps.
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
                bg-[#20282a]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#c3905d]
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
                px-4 py-3.5
                text-white
                bg-[#20282a]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#c3905d]
              "
            />

            <input
              type="tel"
              placeholder="Phone"
              className="
                px-4 py-3.5
                text-white
                bg-[#20282a]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#c3905d]
              "
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="
                px-4 py-3.5
                text-white
                bg-[#20282a]
                rounded-md border border-white/10
                resize-none
                outline-none placeholder:text-slate-500 focus:border-[#c3905d]
              "
            />

            <button
              type="button"
              className="
                px-6 py-4
                font-semibold text-white
                bg-[#b88552]
                rounded-md
                transition hover:bg-[#c79766]
              "
            >
              Request a Free Estimate
            </button>

            <p
              className="
                text-xs leading-5 text-slate-500
              "
            >
              Demo contact form for portfolio presentation.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="
          px-6 py-10
          text-white
          bg-[#0f1516]
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
            >Summit Ridge Construction</p>
            <p
              className="
                mt-1
                text-sm text-slate-500
              "
            >
              Built Right. Built to Last.
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