import Image from "next/image";

export default function Founder() {
  return (
    <section
      id="founder"
      className="
        px-6 py-28
        text-white
        bg-[#071426]
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
        {/* Founder image */}
        <div
          className="
            relative
          "
        >
          <div
            className="
              bg-[#C9784A]/10
              rounded-3xl
              absolute -inset-5 blur-2xl
            "
          />

          <div
            className="
              overflow-hidden
              bg-[#09182b]
              rounded-2xl border border-[#C9784A]/30
              shadow-2xl
              relative
            "
          >
            <div
              className="
                min-h-[560px]
                relative
              "
            >
              <Image
                src="/eric-founder.jpg"
                alt="Eric Rekofke, founder of Rekode Digital"
                fill
                className="
                  object-cover object-center
                "
              />

              <div
                className="
                  bg-gradient-to-t from-[#071426]/70 via-transparent to-transparent
                  absolute inset-0
                "
              />
            </div>
          </div>
        </div>

        {/* Founder content */}
        <div>
          <p
            className="
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Meet the Founder
          </p>

          <h2
            className="
              mt-4
              text-4xl font-bold tracking-tight
              sm:text-5xl
            "
          >
            Eric Rekofke
          </h2>

          <p
            className="
              mt-3
              text-lg font-semibold text-[#C9784A]
            "
          >
            Owner & Digital Solutions Partner
          </p>

          <p
            className="
              mt-7
              text-lg leading-8 text-slate-300
            "
          >
            I started Rekode Digital because I believe small businesses deserve
            the same quality digital tools and professional online presence as
            larger companies — without the big-agency complexity or cost.
          </p>

          <p
            className="
              mt-5
              leading-8 text-slate-400
            "
          >
            I enjoy solving problems, building useful technology, and helping
            local businesses present themselves with confidence. My approach is
            straightforward: listen first, understand what the business
            actually needs, and build practical solutions that help people get
            found, earn trust, and connect with customers.
          </p>

          <div
            className="
              grid
              mt-9
              gap-4
              sm:grid-cols-2
            "
          >
            {[
              "Local & Approachable",
              "Clear Communication",
              "Practical Solutions",
              "Built Around Your Business",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  px-5 py-4
                  bg-white/5
                  rounded-xl border border-white/10
                  items-center gap-3
                "
              >
                <span
                  className="
                    flex
                    h-7 w-7
                    text-sm font-bold text-[#C9784A]
                    bg-[#C9784A]/15
                    rounded-full
                    shrink-0 items-center justify-center
                  "
                >
                  ✓
                </span>

                <span
                  className="
                    font-medium text-slate-200
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            className="
              flex flex-col
              mt-9
              gap-4
              sm:flex-row
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
                items-center justify-center transition hover:bg-[#D8895B]
              "
            >
              Get a Free Visibility Review
            </a>

            <a
              href="tel:+17753755765"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                rounded-md border border-white/20
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Call 775-375-5765
            </a>
          </div>

          <p
            className="
              mt-6
              text-sm text-slate-500
            "
          >
            Based in Winnemucca, Nevada.
          </p>
        </div>
      </div>
    </section>
  );
}