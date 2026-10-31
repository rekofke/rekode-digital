
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { ArrowRight, MousePointerClick } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Website Concepts | Rekode Digital",
  description:
    "Explore six interactive website demos for restaurants, construction, automotive services, landscaping, real estate, and coffee shops by Rekode Digital.",
};

export default function PortfolioPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <Navbar />

      <section
        className="
          overflow-hidden
          px-6 pb-5 pt-40
          relative
          lg:px-8
        "
      >
        <div
          className="
            h-72 w-72
            bg-[#C9784A]/15
            rounded-full
            pointer-events-none
            absolute left-1/2 top-16 -translate-x-1/2 blur-[100px]
          "
        />

        <div
          className="
            max-w-5xl
            mx-auto
            text-center
            relative
          "
        >
          <p
            className="
              inline-flex
              text-xs font-bold tracking-[0.28em] text-[#E5A77C]
              items-center gap-2 uppercase
            "
          >
            <MousePointerClick size={16} />
            Rekode Digital Portfolio
          </p>

          <h1
            className="
              mt-5
              text-4xl font-extrabold tracking-tight
              sm:text-6xl
            "
          >
            Real interactions.{" "}
            <span
              className="
                text-[#C9784A]
              "
            >
              Creative possibilities.
            </span>
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto mt-6
              text-lg leading-8 text-slate-300
            "
          >
            Test interactive menus, explore projects, filter
            listings, and see how clear design can guide
            customers toward taking action. All six projects
            are fictional website demonstrations.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-8 px-6 py-3
              font-semibold text-white
              rounded-lg border border-[#C9784A]/60
              items-center gap-2 transition hover:bg-[#C9784A]/20
            "
          >
            Talk About Your Website
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Portfolio />

      <Footer />
    </main>
  );
}
