
import Image from "next/image";

export default function Founder() {
  return (
    <section
      id="founder"
      className="
        overflow-hidden
        px-6 py-24
        text-white
        bg-[#071426]
        relative
        lg:px-8 lg:py-28
      "
    >
      {/* Copper background glow */}
      <div
        className="
          h-96 w-96
          bg-[#C9784A]/10
          rounded-full
          pointer-events-none
          absolute -right-32 top-20 blur-3xl
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
        "
      >
        {/* Main introduction */}
        <div
          className="
            grid
            items-center gap-12
            lg:grid-cols-2 lg:gap-16
          "
        >
          {/* Eric & Tracy photo */}
          <div
            className="
              relative
            "
          >
            <div
              className="
                bg-[#C9784A]/10
                rounded-3xl
                absolute -inset-4 blur-2xl
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
                  w-full
                  relative aspect-[4/5]
                "
              >
                <Image
                  src="/eric-tracy-rekode.png"
                  alt="Eric and Tracy, the couple behind Rekode Digital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover object-center
                  "
                />
                <div
                  className="
                    bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent
                    absolute inset-0
                  "
                />

                <div
                  className="
                    p-6
                    absolute bottom-0 left-0 right-0
                    sm:p-8
                  "
                >
                  <p
                    className="
                      text-xs font-semibold tracking-[0.24em] text-[#E7A27C]
                      uppercase
                    "
                  >
                    Built on Partnership
                  </p>
                  <p
                    className="
                      mt-2
                      text-2xl font-bold
                    "
                  >
                    Eric &amp; Tracy
                  </p>
                  <p
                    className="
                      mt-1
                      text-sm text-slate-200
                    "
                  >
                    The People Behind Rekode Digital
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main story */}
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.3em] text-[#C9784A]
                uppercase
              "
            >
              Meet Eric &amp; Tracy
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold leading-tight tracking-tight
                sm:text-5xl
              "
            >
              Two Perspectives.
              <span
                className="
                  block
                  mt-2
                  text-[#C9784A]
                "
              >
                One Shared Vision.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg font-semibold leading-8 text-slate-200
              "
            >
              Built on partnership. Driven by creativity.
              Focused on your success.
            </p>

            <p
              className="
                mt-7
                text-lg leading-8 text-slate-300
              "
            >
              Behind Rekode Digital is more than a business.
              It&apos;s two people building something meaningful
              together.
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-300
              "
            >
              We&apos;re Eric and Tracy, a couple with a shared
              vision: helping small businesses gain the visibility,
              confidence, and professional online presence they
              deserve.
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              We believe the strongest businesses are built on
              relationships, trust, creativity, and a willingness
              to do things differently.
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              Eric brings technical expertise, digital strategy,
              and problem-solving skills. Tracy brings her creative
              perspective, fresh ideas, and personal touch.
              Together, we&apos;re building a company that combines
              professional digital solutions with genuine,
              one-on-one service.
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-400
              "
            >
              We know what it means to build something from the
              ground up. That&apos;s why we approach every business
              with respect for the hard work, dedication, and
              dreams behind it.
            </p>

            <p
              className="
                mt-6
                text-lg font-semibold leading-8 text-white
              "
            >
              When you work with Rekode Digital, you&apos;re not
              just another client. You&apos;re another business
              we&apos;re rooting for.
            </p>
          </div>
        </div>

        {/* Individual partner cards */}
        <div
          className="
            grid
            mt-16
            gap-6
            md:grid-cols-2
          "
        >
          {/* Eric */}
          <div
            className="
              p-8
              bg-[#09182b]
              rounded-2xl border border-white/10
              transition-colors
              hover:border-[#C9784A]/50
            "
          >
            <p
              className="
                text-xs font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              Digital Strategy &amp; Development
            </p>

            <h3
              className="
                mt-4
                text-2xl font-bold
              "
            >
              Eric Rekofke
            </h3>

            <p
              className="
                mt-2
                font-semibold text-[#E7A27C]
              "
            >
              Owner &amp; Digital Solutions Partner
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-300
              "
            >
              Focused on website development, digital strategy,
              online visibility, and helping business owners
              turn opportunities into growth.
            </p>
          </div>

          {/* Tracy */}
          <div
            className="
              p-8
              bg-[#C9784A]/5
              rounded-2xl border border-[#C9784A]/30
              transition-colors
              hover:border-[#C9784A]/70
            "
          >
            <p
              className="
                text-xs font-semibold tracking-[0.25em] text-[#C9784A]
                uppercase
              "
            >
              Creativity &amp; Storytelling
            </p>

            <h3
              className="
                mt-4
                text-2xl font-bold
              "
            >
              Tracy
            </h3>

            <p
              className="
                mt-2
                font-semibold text-[#E7A27C]
              "
            >
              Creative Partner
            </p>

            <p
              className="
                mt-5
                leading-8 text-slate-300
              "
            >
              Bringing creativity, fresh perspectives, and
              thoughtful ideas that help businesses tell
              their stories and connect with their customers.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div
          className="
            mt-16 pt-12
            border-t border-white/10
          "
        >
          <div
            className="
              flex flex-col
              items-start justify-between gap-8
              lg:flex-row lg:items-center
            "
          >
            <div>
              <h3
                className="
                  text-3xl font-bold
                "
              >
                Let&apos;s Grow Together.
              </h3>

              <p
                className="
                  max-w-xl
                  mt-3
                  leading-7 text-slate-400
                "
              >
                Based in Winnemucca, Nevada, and proud to help
                businesses throughout Northern Nevada get found,
                look professional, and grow online.
              </p>
            </div>

            <div
              className="
                flex flex-col
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
          </div>
        </div>
      </div>
    </section>
  );
}
