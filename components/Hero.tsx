import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        flex overflow-hidden
        min-h-screen
        bg-[#071426]
        relative items-center
      "
    >
      {/* Background effects */}
      <div
        className="
          absolute inset-0
        "
      >
        <div
          className="
            h-[500px] w-[500px]
            bg-[#C9784A]/10
            rounded-full
            absolute -right-40 top-20 blur-[120px]
          "
        />
        <div
          className="
            h-[450px] w-[450px]
            bg-blue-900/20
            rounded-full
            absolute -left-40 bottom-0 blur-[120px]
          "
        />
      </div>

      {/* Subtle grid */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        className="
          opacity-[0.04]
          absolute inset-0
        "
      />

      <div
        className="
          grid
          w-full max-w-7xl
          mx-auto px-6 pb-20 pt-36
          relative items-center gap-16
          lg:grid-cols-2 lg:px-8
        "
      >
        {/* Left side */}
        <div>
          <p
            className="
              mb-6
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Websites • Local Visibility • Digital Solutions
          </p>

          <h1
            className="
              text-5xl font-bold leading-[1.08] tracking-tight text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Helping Local
            <br />
            Businesses
            <span
              className="
                block
                mt-2
                text-[#C9784A]
              "
            >
              Rewrite Their Future.
            </span>
          </h1>

          <p
            className="
              max-w-xl
              mt-8
              text-lg leading-8 text-slate-300
            "
          >
            Modern websites and practical digital solutions that help local
            businesses get found, look professional, and grow online.
          </p>

          <div
            className="
              flex flex-wrap
              mt-10
              gap-4
            "
          >
            <a
              href="#visibility-review"
              className="
                px-7 py-4
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                shadow-lg shadow-[#C9784A]/10
                transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8895b]
              "
            >
              Get a Free Visibility Review
            </a>

            <a
              href="#work"
              className="
                px-7 py-4
                font-semibold text-white
                rounded-md border border-slate-600
                transition duration-300 hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Right side */}
        <div
          className="
            hidden
            relative
            lg:flex lg:justify-center
          "
        >
          <div
            className="
              flex
              h-[430px] w-[430px]
              relative items-center justify-center
            "
          >
            {/* Outer rings */}
            <div
              className="
                h-full w-full
                rounded-full border border-[#C9784A]/20
                absolute
              "
            />
            <div
              className="
                h-[340px] w-[340px]
                rounded-full border border-[#C9784A]/30
                absolute
              "
            />
            <div
              className="
                h-[250px] w-[250px]
                bg-[#C9784A]/5
                rounded-full
                absolute blur-sm
              "
            />

            {/* Rekode logo */}
            <div
                className="
                flex
                h-[230px] w-[230px]
                relative items-center justify-center
                "
            >
            <Image
                src="/rekode_transparent.png"
                alt="Rekode Digital"
                width={230}
                height={230}
                priority
                className="
                object-contain
                h-auto w-full
                drop-shadow-2xl
                "
            />
            </div>

            {/* Decorative text */}
            <div
              className="
                text-xs font-semibold tracking-[0.45em] text-slate-400
                absolute bottom-8 uppercase
              "
            >
              Small Business • Big Presence
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          h-px w-[85%]
          bg-gradient-to-r from-transparent via-[#C9784A]/40 to-transparent
          absolute bottom-0 left-1/2 -translate-x-1/2
        "
      />
    </section>
  );
}