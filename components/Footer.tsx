import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        px-6
        text-white
        bg-[#050e1a]
        border-t border-white/10
        lg:px-8
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* Main footer */}
        <div
          className="
            grid
            py-16
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Brand */}
          <div
            className="
              lg:col-span-2
            "
          >
            <a
              href="#"
              className="
                inline-flex
              "
            >
              <Image
                src="/rekode_transparent.png"
                alt="Rekode Digital"
                width={190}
                height={115}
                className="
                  object-contain
                  h-[85px] w-auto
                "
              />
            </a>

            <p
              className="
                max-w-md
                mt-5
                text-lg font-medium text-slate-300
              "
            >
              Helping Local Businesses Rewrite Their Future.
            </p>

            <p
              className="
                max-w-md
                mt-3
                leading-7 text-slate-500
              "
            >
              Modern websites and practical digital solutions built to help
              local businesses get found, look professional, and grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.2em] text-[#C9784A]
                uppercase
              "
            >
              Explore
            </p>

            <nav
              className="
                flex flex-col
                mt-5
                gap-3
              "
            >
              <a
                href="#services"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Services
              </a>

              <a
                href="#work"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Our Work
              </a>

              <a
                href="#about"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                About
              </a>

              <a
                href="#visibility-review"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Free Visibility Review
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.2em] text-[#C9784A]
                uppercase
              "
            >
              Get In Touch
            </p>

            <div
              className="
                mt-5
              "
            >
              <p
                className="
                  text-sm text-slate-500
                "
              >Email</p>

              <a
                href="mailto:getrekode@gmail.com"
                className="
                  inline-block
                  mt-1
                  text-slate-300
                  transition hover:text-[#C9784A]
                "
              >
                getrekode@gmail.com
              </a>
            </div>

            <div
              className="
                mt-5
              "
            >
              <p
                className="
                  text-sm text-slate-500
                "
              >Phone</p>

              <a
                href="tel:+17753755765"
                className="
                  inline-block
                  mt-1
                  text-slate-300
                  transition hover:text-[#C9784A]
                "
              >
                775-375-5765
              </a>
            </div>

            <a
              href="#visibility-review"
              className="
                inline-flex
                mt-7 px-5 py-3
                text-sm font-semibold text-[#C9784A]
                rounded-md border border-[#C9784A]/50
                transition hover:bg-[#C9784A] hover:text-white
              "
            >
              Get Rekode
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            flex flex-col
            py-7
            text-sm text-slate-500
            border-t border-white/10
            gap-3
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Rekode Digital. All rights reserved.
          </p>

          <p>Hometown Values. Modern Solutions.</p>
        </div>
      </div>
    </footer>
  );
}