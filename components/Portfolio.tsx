
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Search,
  Sparkles,
} from "lucide-react";

type Category =
  | "All Projects"
  | "Website Concepts"
  | "Client Projects";

type Project = {
  name: string;
  category: "Website Concepts" | "Client Projects";
  industry: string;
  description: string;
  image: string;
  href: string;
  features: string[];
};

const projects: Project[] = [
  {
    name: "High Desert Grill & Steakhouse",
    category: "Website Concepts",
    industry: "Restaurants & Hospitality",
    description:
      "An upscale Western steakhouse website featuring an interactive food menu, signature dishes, restaurant information, and a demonstration reservation experience.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
    href: "/work/high-desert-grill",
    features: [
      "Interactive Menu",
      "Featured Dishes",
      "Reservation Demo",
    ],
  },
  {
    name: "Summit Ridge Construction",
    category: "Website Concepts",
    industry: "Construction & Contracting",
    description:
      "A professional construction website designed to showcase services, highlight completed projects, and encourage estimate requests.",
    image: "/summit-hero.png",
    href: "/work/summit-ridge",
    features: [
      "Responsive Design",
      "Project Gallery",
      "Lead Generation",
    ],
  },
  {
    name: "High Desert Auto Repair",
    category: "Website Concepts",
    industry: "Automotive Services",
    description:
      "An automotive service website focused on building trust, clearly presenting repair services, and making it easy for customers to get in touch.",
    image: "/auto-hero.png",
    href: "/work/high-desert-auto",
    features: [
      "Service Pages",
      "Mobile Experience",
      "Contact Options",
    ],
  },
  {
    name: "Silver State Landscapes",
    category: "Website Concepts",
    industry: "Landscaping & Outdoor Living",
    description:
      "A visually engaging landscaping website featuring outdoor project photography, service information, and opportunities to request a quote.",
    image: "/landscape-hero.png",
    href: "/work/silver-state-landscapes",
    features: [
      "Visual Portfolio",
      "Service Highlights",
      "Quote Requests",
    ],
  },
  {
    name: "Silver State Property Group",
    category: "Website Concepts",
    industry: "Real Estate & Property Listings",
    description:
      "A modern real estate website with interactive property filters, detailed listing previews, and a demonstration showing-request experience.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    href: "/work/silver-state-property-group",
    features: [
      "Property Search",
      "Listing Details",
      "Showing Requests",
    ],
  },
];

const categories: Category[] = [
  "All Projects",
  "Website Concepts",
  "Client Projects",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Projects");

  const visibleProjects = projects.filter(
    (project) =>
      activeCategory === "All Projects" ||
      project.category === activeCategory
  );

  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <Navbar />

      {/* HERO */}
      <section
        className="
          overflow-hidden
          px-6 pb-20 pt-40
          relative
          lg:px-8
        "
      >
        <div
          className="
            h-96 w-96
            bg-[#C9784A]/10
            rounded-full
            pointer-events-none
            absolute left-1/2 top-20 -translate-x-1/2 blur-[120px]
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
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Explore Our Work
          </p>

          <h1
            className="
              mt-5
              text-4xl font-bold tracking-tight
              sm:text-6xl
            "
          >
            Built to Impress.
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Designed to Perform.
            </span>
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto mt-7
              text-lg leading-8 text-slate-300
            "
          >
            Explore sample websites created by Rekode Digital
            to demonstrate how thoughtful design, practical
            features, and a professional online presence can
            help businesses connect with their customers.
          </p>

          <div
            className="
              flex flex-col
              mt-9
              justify-center gap-4
              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                px-7 py-4
                font-semibold text-white
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Let&apos;s Build Your Website
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                rounded-md border border-white/25
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHTS */}
      <section
        className="
          px-6 py-12
          bg-[#09182b]
          border-y border-white/10
          lg:px-8
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-8
            md:grid-cols-3
          "
        >
          {[
            {
              icon: Code2,
              title: "Industry-Focused",
              text: "Website concepts tailored to the needs of different businesses.",
            },
            {
              icon: Search,
              title: "Customer-Friendly",
              text: "Clear information, mobile layouts, and easy contact options.",
            },
            {
              icon: BriefcaseBusiness,
              title: "Built for Growth",
              text: "Practical digital features that support real business goals.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  items-start gap-4
                "
              >
                <div
                  className="
                    flex
                    h-12 w-12
                    text-[#C9784A]
                    bg-[#C9784A]/10
                    rounded-xl
                    shrink-0 items-center justify-center
                  "
                >
                  <Icon size={24} />
                </div>

                <div>
                  <h2
                    className="
                      text-lg font-bold
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      leading-7 text-slate-400
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section
        className="
          px-6 py-24
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
              flex flex-col
              gap-8
              lg:flex-row lg:items-end lg:justify-between
            "
          >
            <div
              className="
                max-w-2xl
              "
            >
              <p
                className="
                  text-sm font-semibold tracking-[0.25em] text-[#C9784A]
                  uppercase
                "
              >
                Our Portfolio
              </p>

              <h2
                className="
                  mt-4
                  text-3xl font-bold
                  sm:text-4xl
                "
              >
                See What&apos;s Possible.
              </h2>

              <p
                className="
                  mt-5
                  leading-8 text-slate-400
                "
              >
                Browse our interactive website concepts.
                Each project demonstrates a different industry
                and approach to presenting a business online.
              </p>
            </div>

            {/* CATEGORY FILTERS */}
            <div
              role="group"
              aria-label="Filter portfolio projects"
              className="
                flex flex-wrap
                gap-2
              "
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={
                    ${activeCategory === category
                      ? "rounded-full border border-[#C9784A] bg-[#C9784A]/15 px-4 py-2 text-sm font-semibold text-[#E5A77C] transition"
                      : "rounded-full border border-white/10 bg-[#071426]/60 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-[#C9784A]/40 hover:text-[#E5A77C]"}
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT CARDS */}
          {visibleProjects.length > 0 ? (
            <div
              className="
                grid
                mt-12
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {visibleProjects.map((project) => (
                <article
                  key={project.name}
                  className="
                    flex flex-col overflow-hidden
                    h-full
                    bg-[#09182b]
                    rounded-2xl border border-white/10
                    group transition hover:-translate-y-1 hover:border-[#C9784A]/50
                  "
                >
                  <Link
                    href={project.href}
                    aria-label={"Explore " + project.name}
                    className="
                      block overflow-hidden
                      h-56
                      relative
                    "
                  >
                    <Image
                      src={project.image}
                      alt={
                        project.name +
                        " website concept preview"
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="
                        object-cover
                        transition duration-500 group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        bg-gradient-to-t from-[#071426]/75 to-transparent
                        absolute inset-0
                      "
                    />

                    <span
                      className="
                        px-3 py-1
                        text-xs font-semibold text-[#E5A77C]
                        bg-[#071426]/90
                        rounded-full border border-[#C9784A]/40
                        absolute bottom-4 left-5
                      "
                    >
                      Concept Project
                    </span>
                  </Link>

                  <div
                    className="
                      flex flex-1 flex-col
                      p-7
                    "
                  >
                    <p
                      className="
                        text-xs font-semibold tracking-[0.2em] text-[#C9784A]
                        uppercase
                      "
                    >
                      {project.industry}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl font-bold
                      "
                    >
                      {project.name}
                    </h3>

                    <p
                      className="
                        flex-1
                        mt-4
                        leading-7 text-slate-400
                      "
                    >
                      {project.description}
                    </p>

                    <div
                      className="
                        flex flex-wrap
                        mt-6
                        gap-2
                      "
                    >
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="
                            px-3 py-1
                            text-xs text-slate-300
                            rounded-full border border-white/10
                          "
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.href}
                      className="
                        inline-flex
                        mt-8
                        font-semibold text-[#C9784A]
                        items-center gap-2 transition hover:text-[#E5A77C]
                      "
                    >
                      Explore Website Concept
                      <ArrowUpRight size={19} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="
                mt-12 px-8 py-16
                text-center
                bg-[#09182b]
                rounded-2xl border border-white/10
              "
            >
              <Sparkles
                size={36}
                className="
                  mx-auto
                  text-[#C9784A]
                "
              />

              <h3
                className="
                  mt-5
                  text-2xl font-bold
                "
              >
                Client Projects Coming Soon
              </h3>

              <p
                className="
                  max-w-xl
                  mx-auto mt-4
                  leading-8 text-slate-400
                "
              >
                We&apos;re building this section as we complete
                projects with local businesses. In the meantime,
                explore our demonstration websites to see
                what Rekode Digital can create.
              </p>

              <button
                type="button"
                onClick={() =>
                  setActiveCategory("Website Concepts")
                }
                className="
                  mt-7 px-6 py-3
                  font-semibold
                  bg-[#C9784A]
                  rounded-md
                  transition hover:bg-[#D8895B]
                "
              >
                View Website Concepts
              </button>
            </div>
          )}

          {/* CONCEPT NOTICE */}
          <p
            className="
              mt-10
              text-center text-sm leading-7 text-slate-500
            "
          >
            Concept projects are fictional demonstrations
            created to showcase Rekode Digital&apos;s design
            and development capabilities. They do not
            represent actual clients.
          </p>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section
        className="
          px-6 py-24
          bg-[#09182b]
          border-t border-white/10
          lg:px-8
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.25em] text-[#C9784A]
              uppercase
            "
          >
            Your Business Could Be Next
          </p>

          <h2
            className="
              mt-5
              text-3xl font-bold
              sm:text-5xl
            "
          >
            Let&apos;s Create Something
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Built Around You.
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              leading-8 text-slate-300
            "
          >
            Every business is different. Your website should
            reflect what makes yours unique, connect with
            your customers, and help you grow.
          </p>

          <div
            className="
              flex flex-col
              mt-9
              justify-center gap-4
              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                bg-[#C9784A]
                rounded-md
                items-center justify-center gap-2 transition hover:bg-[#D8895B]
              "
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/#visibility-review"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                rounded-md border border-white/25
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Free Visibility Review
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
