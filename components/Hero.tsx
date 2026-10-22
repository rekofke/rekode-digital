
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
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

      {/* SUBTLE GRID */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent, #ffffff 1px)",
          backgroundSize: "60px 60px",
        }}
        className="
          pointer-events-none opacity-[0.04]
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
        {/* LEFT SIDE */}
        <div>
          {/* LOCAL BUSINESS POSITIONING */}
          <p
            className="
              mb-6
              text-sm font-semibold tracking-[0.2em] text-[#C9784A]
              uppercase
            "
          >
            Winnemucca, Nevada · Serving Northern Nevada
          </p>

          {/* MAIN HEADLINE */}
          <h1
            className="
              text-4xl font-bold leading-[1.1] tracking-tight text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Professional Websites
            <span
              className="
                block
                mt-2
                text-[#C9784A]
              "
            >
              & Digital Solutions
            </span>
            <span
              className="
                block
                mt-3
                text-white
              "
            >
              for Northern Nevada Businesses.
            </span>
          </h1>

          {/* VALUE PROPOSITION */}
          <p
            className="
              max-w-xl
              mt-8
              text-lg leading-8 text-slate-300
            "
          >
            Help your business get found online, look
            professional, and turn more visitors into
            customers. Rekode Digital builds practical,
            affordable digital solutions tailored to
            local businesses.
          </p>

          {/* BUSINESS BENEFITS */}
          <div
            className="
              flex flex-wrap
              mt-7
              gap-x-6 gap-y-3
            "
          >
            {[
              "Professional Web Design",
              "Local Online Visibility",
              "Personalized Support",
            ].map((benefit) => (
              <div
                key={benefit}
                className="
                  flex
                  text-sm text-slate-300
                  items-center gap-2
                "
              >
                <CheckCircle2
                  size={17}
                  className="
                    text-[#C9784A]
                    shrink-0
                  "
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CALLS TO ACTION */}
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
                inline-flex
                px-7 py-4
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                shadow-lg shadow-[#C9784A]/10
                items-center justify-center gap-2 transition duration-300 hover:-translate-y-0.5 hover:bg-[#D8895B]
              "
            >
              Get a Free Visibility Review
              <ArrowRight size={18} />
            </a>

            <Link
              href="/pricing"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                rounded-md border border-slate-600
                items-center justify-center gap-2 transition duration-300 hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Explore Website Packages
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* BRAND MESSAGE */}
          <p
            className="
              mt-9
              text-sm font-medium tracking-wide text-slate-400
            "
          >
            Hometown Values. Modern Solutions.
          </p>
        </div>

        {/* RIGHT SIDE — EXISTING REKODE LOGO */}
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
            {/* OUTER RINGS */}
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

            {/* REKODE LOGO */}
            <div
              className="
                flex
                h-[230px] w-[230px]
                relative items-center justify-center
              "
            >
              <Image
                src="/rekode_transparent.png"
                alt="Rekode Digital logo"
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

            {/* DECORATIVE TEXT */}
            <div
              className="
                text-xs font-semibold tracking-[0.35em] text-slate-400
                absolute bottom-8 uppercase
              "
            >
              Small Business · Big Presence
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div
        aria-hidden="true"
        className="
          h-px w-[85%]
          bg-gradient-to-r from-transparent via-[#C9784A]/40 to-transparent
          absolute bottom-0 left-1/2 -translate-x-1/2
        "
      />
    </section>
  );
}
