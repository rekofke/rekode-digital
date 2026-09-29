import Image from "next/image";

export default function SilverStateLandscapesPage() {
  const services = [
    {
      title: "Landscape Design",
      description:
        "Thoughtful outdoor layouts that balance curb appeal, usability, water efficiency, and long-term maintenance.",
    },
    {
      title: "Hardscaping",
      description:
        "Patios, walkways, retaining walls, edging, and outdoor living spaces built to look clean and hold up over time.",
    },
    {
      title: "Irrigation",
      description:
        "Efficient irrigation improvements, repairs, and zone planning designed around healthy landscapes and smart water use.",
    },
    {
      title: "Seasonal Maintenance",
      description:
        "Cleanup, trimming, refresh work, and property maintenance that keeps outdoor spaces looking cared for year-round.",
    },
  ];

  const projects = [
    {
      title: "Desert-Friendly Front Yard",
      image: "/landscape-frontyard.png",
    },
    {
      title: "Backyard Patio Retreat",
      image: "/landscape-patio.png",
    },
    {
      title: "Modern Xeriscape",
      image: "/landscape-xeriscape.png",
    },
    {
      title: "Residential Lawn Refresh",
      image: "/landscape-lawn.png",
    },
  ];

  return (
    <main
      className="
        text-[#243029]
        bg-[#f4f2eb]
      "
    >
      {/* Hero */}
      <section
        className="
          overflow-hidden
          min-h-[760px]
          text-white
          bg-[#1d2b24]
          relative
        "
      >
        <Image
          src="/landscape-hero.png"
          alt="Professional residential landscaping project"
          fill
          priority
          className="
            object-cover
          "
        />

        <div
          className="
            bg-gradient-to-r from-[#17231d]/95 via-[#17231d]/75 to-[#17231d]/30
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
                text-sm font-semibold tracking-[0.3em] text-[#b7c96b]
                uppercase
              "
            >
              Silver State Landscapes
            </p>

            <h1
              className="
                text-5xl font-bold leading-[1.05] tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              Outdoor Spaces
              <span
                className="
                  block
                  text-[#b7c96b]
                "
              >
                Designed to Live In.
              </span>
            </h1>

            <p
              className="
                max-w-2xl
                mt-7
                text-lg leading-8 text-slate-200
              "
            >
              Practical landscape design, hardscaping, irrigation, and outdoor
              improvements created for Northern Nevada homes and the way people
              actually use their yards.
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
                  bg-[#8da34b]
                  rounded-md
                  items-center justify-center transition hover:bg-[#9bb257]
                "
              >
                Request an Estimate
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
                View Projects
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
                text-sm font-semibold tracking-[0.25em] text-[#6f8435]
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
              Better outdoor spaces without overcomplicating them.
            </h2>

            <p
              className="
                mt-6
                text-lg leading-8 text-[#68726c]
              "
            >
              Silver State Landscapes is designed around practical upgrades that
              improve how a property looks, feels, and functions.
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
                  bg-[#fffdf8]
                  rounded-2xl border border-[#dad8ce]
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    h-11 w-11
                    text-sm font-bold text-[#b7c96b]
                    bg-[#233329]
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
                    leading-7 text-[#707872]
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
          bg-[#233329]
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
                text-sm font-semibold tracking-[0.25em] text-[#b7c96b]
                uppercase
              "
            >
              Why Silver State
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Designed for the property you actually have.
            </h2>

            <p
              className="
                max-w-2xl
                mt-6
                text-lg leading-8 text-slate-300
              "
            >
              A good landscape should fit the climate, the home, the budget, and
              the amount of maintenance the homeowner actually wants to do.
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
              "Climate-Aware Planning",
              "Clean Project Communication",
              "Practical Material Choices",
              "Low-Maintenance Options",
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
                    text-2xl text-[#b7c96b]
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
                  text-sm font-semibold tracking-[0.25em] text-[#6f8435]
                  uppercase
                "
              >
                Project Gallery
              </p>

              <h2
                className="
                  mt-4
                  text-4xl font-bold tracking-tight
                  sm:text-5xl
                "
              >
                Landscapes built around real homes.
              </h2>
            </div>

            <p
              className="
                max-w-xl
                leading-7 text-[#6e7770]
              "
            >
              A visual example of the residential landscape work this concept
              site is designed to showcase.
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
                  bg-[#243029]
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
                      text-sm tracking-[0.2em] text-[#c8d67f]
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
              text-sm leading-6 text-[#7a827d]
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
          bg-[#e5e4d9]
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
                text-sm font-semibold tracking-[0.25em] text-[#6f8435]
                uppercase
              "
            >
              Local Landscape Service
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Built for Northern Nevada.
            </h2>
          </div>

          <div>
            <p
              className="
                text-lg leading-8 text-[#626b65]
              "
            >
              Silver State Landscapes is presented as a locally focused
              landscape company that understands dry conditions, changing
              seasons, and the value of thoughtful water use.
            </p>

            <p
              className="
                mt-5
                leading-7 text-[#6c756f]
              "
            >
              The concept emphasizes strong visuals, easy-to-understand
              services, and a simple path for homeowners to request an estimate.
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
          bg-[#18231d]
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
                text-sm font-semibold tracking-[0.25em] text-[#b7c96b]
                uppercase
              "
            >
              Start Your Project
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Tell us what you want to improve.
            </h2>

            <p
              className="
                max-w-xl
                mt-6
                text-lg leading-8 text-slate-300
              "
            >
              Share a little about your yard, the project you have in mind, and
              what you would like the space to do better.
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
                bg-[#243129]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#b7c96b]
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
                px-4 py-3.5
                text-white
                bg-[#243129]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#b7c96b]
              "
            />

            <input
              type="tel"
              placeholder="Phone"
              className="
                px-4 py-3.5
                text-white
                bg-[#243129]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#b7c96b]
              "
            />

            <input
              type="text"
              placeholder="Project Type"
              className="
                px-4 py-3.5
                text-white
                bg-[#243129]
                rounded-md border border-white/10
                outline-none placeholder:text-slate-500 focus:border-[#b7c96b]
              "
            />

            <textarea
              rows={5}
              placeholder="Tell us about your yard or project..."
              className="
                px-4 py-3.5
                text-white
                bg-[#243129]
                rounded-md border border-white/10
                resize-none
                outline-none placeholder:text-slate-500 focus:border-[#b7c96b]
              "
            />

            <button
              type="button"
              className="
                px-6 py-4
                font-semibold text-white
                bg-[#8da34b]
                rounded-md
                transition hover:bg-[#9bb257]
              "
            >
              Request an Estimate
            </button>

            <p
              className="
                text-xs leading-5 text-slate-500
              "
            >
              Demo estimate form for portfolio presentation.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="
          px-6 py-10
          text-white
          bg-[#101712]
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
              Silver State Landscapes
            </p>

            <p
              className="
                mt-1
                text-sm text-slate-500
              "
            >
              Outdoor Spaces Designed to Live In.
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