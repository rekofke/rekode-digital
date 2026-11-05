
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/rekodedigital",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rekodedigital",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rekodedigital/",
  },
  {
    name: "X",
    href: "https://x.com/rekodedigital",
  },
];

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
        <div
          className="
            grid
            py-16
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* BRAND AND SOCIAL MEDIA */}
          <div
            className="
              lg:col-span-2
            "
          >
            <Link
              href="/"
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
            </Link>

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
                leading-7 text-slate-400
              "
            >
              Modern websites and practical digital solutions
              built to help local businesses get found,
              look professional, and grow.
            </p>

            {/* SOCIAL LINKS */}
            <div
              className="
                mt-8
              "
            >
              <p
                className="
                  mb-4
                  text-sm font-semibold tracking-[0.2em] text-[#C9784A]
                  uppercase
                "
              >
                Connect With Rekode
              </p>

              <div
                className="
                  flex flex-wrap
                  gap-3
                "
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Rekode Digital on ${social.name}`}
                    className="
                      px-4 py-2
                      text-sm font-semibold text-slate-300
                      rounded-lg border border-[#C9784A]/40
                      transition duration-300 hover:border-[#C9784A] hover:bg-[#C9784A]/10 hover:text-white
                    "
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
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
              <Link
                href="/services"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Our Work
              </Link>

              <Link
                href="/pricing"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Pricing
              </Link>

              <Link
                href="/how-it-works"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                How It Works
              </Link>

              <Link
                href="/#about"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                About
              </Link>

              <Link
                href="/free-visibility-review"
                className="
                  text-slate-400
                  transition hover:text-white
                "
              >
                Free Visibility Review
              </Link>
            </nav>
          </div>

          {/* CONTACT INFORMATION */}
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
              >
                Email
              </p>

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
              >
                Phone
              </p>

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

            <Link
              href="/free-visibility-review"
              className="
                inline-flex
                mt-7 px-5 py-3
                text-sm font-semibold text-[#C9784A]
                rounded-md border border-[#C9784A]/50
                transition hover:bg-[#C9784A] hover:text-white
              "
            >
              Get a Free Visibility Review
            </Link>

            <div
              className="
                mt-5
              "
            >
              <Link
                href="/privacy-policy"
                className="
                  text-sm text-slate-400
                  transition hover:text-[#C9784A]
                "
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
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
            © {new Date().getFullYear()} Rekode Digital.
            All rights reserved.
          </p>

          <p>Hometown Values. Modern Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
