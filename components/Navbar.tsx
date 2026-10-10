"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="
        z-[9999]
        w-full
        bg-[#071426]/95
        border-b border-white/10
        fixed left-0 top-0 backdrop-blur-md
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            h-[82px]
            items-center justify-between
          "
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              flex
              items-center
            "
          >
            <Image
              src="/rekode_transparent.png"
              alt="Rekode Digital"
              width={150}
              height={90}
              priority
              className="
                object-contain
                h-[58px] w-auto
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              hidden
              items-center gap-7
              md:flex
            "
          >
            <Link
              href="/#services"
              className="
                text-sm font-medium text-slate-300
                transition hover:text-[#C9784A]
              "
            >
              Services
            </Link>

            <Link
              href="/#work"
              className="
                text-sm font-medium text-slate-300
                transition hover:text-[#C9784A]
              "
            >
              Our Work
            </Link>

            <Link
              href="/how-it-works"
              className="
                text-sm font-medium text-slate-300
                transition hover:text-[#C9784A]
              "
            >
              How It Works
            </Link>

            <Link
              href="/#about"
              className="
                text-sm font-medium text-slate-300
                transition hover:text-[#C9784A]
              "
            >
              About
            </Link>

            <Link
              href="/#contact"
              className="
                text-sm font-medium text-slate-300
                transition hover:text-[#C9784A]
              "
            >
              Contact
            </Link>

            <Link
              href="/#visibility-review"
              className="
                px-5 py-2.5
                text-sm font-semibold text-white
                bg-[#C9784A]
                rounded-md
                transition hover:bg-[#D8895B]
              "
            >
              Free Visibility Review
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="
              flex
              h-11 w-11
              text-white
              rounded-md border border-white/10
              items-center justify-center transition hover:border-[#C9784A]/60
              md:hidden
            "
          >
            <div
              className="
                flex flex-col
                w-5
                gap-[5px]
              "
            >
              <span
                className={`
                  h-[2px] w-full
                  bg-current
                  transition
                  ${menuOpen ? "translate-y-[7px] rotate-45" : ""}
                `}
              />

              <span
                className={`
                  h-[2px] w-full
                  bg-current
                  transition
                  ${menuOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  h-[2px] w-full
                  bg-current
                  transition
                  ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}
                `}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            className="
              pb-6 pt-4
              border-t border-white/10
              md:hidden
            "
          >
            <div
              className="
                flex flex-col
              "
            >
              <Link
                href="/#services"
                onClick={closeMenu}
                className="
                  py-4
                  text-slate-300
                  border-b border-white/5
                  transition hover:text-[#C9784A]
                "
              >
                Services
              </Link>

              <Link
                href="/#work"
                onClick={closeMenu}
                className="
                  py-4
                  text-slate-300
                  border-b border-white/5
                  transition hover:text-[#C9784A]
                "
              >
                Our Work
              </Link>

              <Link
                href="/how-it-works"
                onClick={closeMenu}
                className="
                  py-4
                  text-slate-300
                  border-b border-white/5
                  transition hover:text-[#C9784A]
                "
              >
                How It Works
              </Link>

              <Link
                href="/#about"
                onClick={closeMenu}
                className="
                  py-4
                  text-slate-300
                  border-b border-white/5
                  transition hover:text-[#C9784A]
                "
              >
                About
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="
                  py-4
                  text-slate-300
                  border-b border-white/5
                  transition hover:text-[#C9784A]
                "
              >
                Contact
              </Link>

              <Link
                href="/#visibility-review"
                onClick={closeMenu}
                className="
                  mt-5 px-5 py-3.5
                  text-center font-semibold text-white
                  bg-[#C9784A]
                  rounded-md
                  transition hover:bg-[#D8895B]
                "
              >
                Free Visibility Review
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
