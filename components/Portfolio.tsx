const projects = [
  {
    category: "Contractor / Home Services",
    title: "Summit Ridge Construction",
    description:
      "A conversion-focused website concept designed to help a local contractor showcase services, establish trust, and generate quote requests.",
    tag: "Concept Project",
    gradient: "from-[#C9784A]/30 to-[#071426]",
  },
  {
    category: "Automotive",
    title: "High Desert Auto Repair",
    description:
      "A local auto repair concept focused on making services easy to understand, building customer confidence, and driving appointment requests.",
    tag: "Concept Project",
    gradient: "from-slate-500/20 to-[#071426]",
  },
  {
    category: "Landscaping",
    title: "Silver State Landscapes",
    description:
      "A visual service-business concept built around project galleries, clear service offerings, and simple estimate requests.",
    tag: "Concept Project",
    gradient: "from-emerald-900/30 to-[#071426]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="
        px-6 py-28
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

        {/* Heading */}
        <div
          className="
            flex flex-col
            justify-between gap-8
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
                mb-4
                text-sm font-semibold tracking-[0.3em] text-[#C9784A]
                uppercase
              "
            >
              Our Work
            </p>

            <h2
              className="
                text-4xl font-bold tracking-tight
                sm:text-5xl
              "
            >
              Built to solve
              <span
                className="
                  block
                  text-[#C9784A]
                "
              >
                real business problems.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              leading-7 text-slate-400
            "
          >
            These concept projects demonstrate how Rekode approaches different
            industries, customer needs, and digital challenges.
          </p>
        </div>

        {/* Projects */}
        <div
          className="
            grid
            mt-16
            gap-8
            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                overflow-hidden
                bg-[#071426]
                rounded-xl border border-white/10
                group transition duration-300 hover:-translate-y-2 hover:border-[#C9784A]/50
              "
            >

              {/* Project visual placeholder */}
              <div
                className={`
                  relative flex h-64 items-center justify-center bg-gradient-to-br ${project.gradient}
                `}
              >
                <div
                  className="
                    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]
                    absolute inset-0
                  "
                />

                <div
                  className="
                    text-center
                    relative
                  "
                >
                  <div
                    className="
                      text-5xl font-black text-[#C9784A]/80
                    "
                  >
                    R
                  </div>

                  <p
                    className="
                      mt-3
                      text-xs font-semibold tracking-[0.3em] text-slate-400
                      uppercase
                    "
                  >
                    Rekode Concept
                  </p>
                </div>
              </div>

              {/* Project information */}
              <div
                className="
                  p-7
                "
              >
                <div
                  className="
                    flex
                    items-center justify-between gap-4
                  "
                >
                  <p
                    className="
                      text-xs font-semibold tracking-[0.2em] text-[#C9784A]
                      uppercase
                    "
                  >
                    {project.category}
                  </p>

                  <span
                    className="
                      px-3 py-1
                      text-xs text-slate-400
                      rounded-full border border-white/10
                    "
                  >
                    {project.tag}
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-2xl font-semibold
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7 text-slate-400
                  "
                >
                  {project.description}
                </p>

                <button
                  type="button"
                  className="
                    flex
                    mt-7
                    font-semibold text-[#C9784A]
                    items-center gap-2 transition group-hover:gap-4
                  "
                >
                  View Project
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Transparency note */}
        <p
          className="
            mt-10
            text-sm leading-6 text-slate-500
          "
        >
          Concept projects are independently created by Rekode Digital to
          demonstrate design and development capabilities and do not represent
          commissioned client work.
        </p>

      </div>
    </section>
  );
}