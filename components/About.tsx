export default function About() {
  return (
    <section
      id="about"
      className="
        overflow-hidden
        px-6 py-28
        text-white
        bg-[#071426]
        relative
        lg:px-8
      "
    >
      {/* Background accent */}
      <div
        className="
          h-[500px] w-[500px]
          bg-[#C9784A]/5
          rounded-full
          absolute -right-40 top-1/2 -translate-y-1/2 blur-[120px]
        "
      />

      <div
        className="
          grid
          max-w-7xl
          mx-auto
          relative gap-16
          lg:grid-cols-2 lg:items-center
        "
      >
        
        {/* Left */}
        <div>
          <p
            className="
              mb-4
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Why Rekode
          </p>

          <h2
            className="
              text-4xl font-bold leading-tight tracking-tight
              sm:text-5xl
            "
          >
            Small-business service.
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Modern digital capability.
            </span>
          </h2>

          <p
            className="
              max-w-xl
              mt-7
              text-lg leading-8 text-slate-300
            "
          >
            Rekode Digital was built around a simple idea: local businesses
            deserve the same quality digital presence as larger companies
            without the unnecessary complexity.
          </p>

          <p
            className="
              max-w-xl
              mt-5
              leading-7 text-slate-400
            "
          >
            We focus on practical solutions that solve real problems — helping
            businesses look professional, become easier to find, connect with
            customers, and build a stronger foundation for growth.
          </p>
        </div>

        {/* Right */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
          "
        >
          <div
            className="
              p-7
              bg-[#09182b]
              rounded-xl border border-white/10
            "
          >
            <div
              className="
                mb-5
                text-3xl font-bold text-[#C9784A]
              "
            >01</div>
            <h3
              className="
                text-xl font-semibold
              "
            >Straightforward</h3>
            <p
              className="
                mt-3
                leading-7 text-slate-400
              "
            >
              Clear communication and practical recommendations without
              unnecessary technical jargon.
            </p>
          </div>

          <div
            className="
              p-7
              bg-[#09182b]
              rounded-xl border border-white/10
            "
          >
            <div
              className="
                mb-5
                text-3xl font-bold text-[#C9784A]
              "
            >02</div>
            <h3
              className="
                text-xl font-semibold
              "
            >Built Around You</h3>
            <p
              className="
                mt-3
                leading-7 text-slate-400
              "
            >
              Solutions shaped around the needs of your business instead of
              forcing you into a one-size-fits-all package.
            </p>
          </div>

          <div
            className="
              p-7
              bg-[#09182b]
              rounded-xl border border-white/10
            "
          >
            <div
              className="
                mb-5
                text-3xl font-bold text-[#C9784A]
              "
            >03</div>
            <h3
              className="
                text-xl font-semibold
              "
            >Modern</h3>
            <p
              className="
                mt-3
                leading-7 text-slate-400
              "
            >
              Current technology, responsive design, and tools built for how
              customers actually interact with businesses today.
            </p>
          </div>

          <div
            className="
              p-7
              bg-[#C9784A]/5
              rounded-xl border border-[#C9784A]/30
            "
          >
            <div
              className="
                mb-5
                text-3xl font-bold text-[#C9784A]
              "
            >04</div>
            <h3
              className="
                text-xl font-semibold
              "
            >Invested in Growth</h3>
            <p
              className="
                mt-3
                leading-7 text-slate-400
              "
            >
              The goal isn't simply to deliver a website. It's to build
              something that helps your business move forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}