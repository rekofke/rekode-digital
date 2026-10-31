
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
      "A modern real estate website concept featuring interactive listing filters, detailed property previews, and a demonstration showing-request form.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    href: "/work/silver-state-property-group",
    features: [
      "Property Search",
      "Listing Details",
      "Showing Requests",
    ],
  },

  // NEW COFFEE SHOP CONCEPT
  {
    name: "Juniper & Ember Coffee House",
    category: "Website Concepts",
    industry: "Coffee Shops & Cafés",
    description:
      "A warm, modern coffee shop website concept with a categorized interactive menu, neighborhood storytelling, and a demonstration pickup-order experience.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
    href: "/work/juniper-ember-coffee",
    features: [
      "Interactive Menu",
      "Sample Pickup Bag",
      "Mobile Friendly",
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

      {/* PORTFOLIO HERO */}
      <section
        className="
          overflow-hidden
          relative
        "
      >
        <div
          className="
            bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_40%)]
            absolute inset-0
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto px-6 pb-20 pt-16
            relative
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              flex flex-col
              mb-12
              gap-8
              lg:flex-row lg:items-end lg:justify-between
            "
          >
            <div
              className="
                max-w-3xl
              "
            >
              <div
                className="
                  inline-flex
                  mb-5 px-3 py-1.5
                  text-xs font-medium tracking-[0.2em] text-sky-200
                  bg-sky-400/10
                  rounded-full border border-sky-400/30
                  items-center gap-2 uppercase
                "
              >
                <Sparkles
                  className="
                    h-3.5 w-3.5
                  "
                />
                Portfolio
              </div>

              <h1
                className="
                  text-4xl font-black tracking-tight text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Digital experiences built to convert.
              </h1>

              <p
                className="
                  max-w-2xl
                  mt-5
                  text-lg text-slate-300
                "
              >
                I design and build polished websites that
                help service businesses, brands, and growing
                teams turn attention into action.
              </p>
            </div>

            <div
              className="
                flex
                text-sm text-slate-300
                items-center gap-4
              "
            >
              <div
                className="
                  flex
                  px-3 py-2
                  bg-white/5
                  rounded-full border border-white/10
                  items-center gap-2
                "
              >
                <Code2
                  className="
                    h-4 w-4
                    text-sky-300
                  "
                />
                {projects.length} Featured Builds
              </div>

              <div
                className="
                  flex
                  px-3 py-2
                  bg-white/5
                  rounded-full border border-white/10
                  items-center gap-2
                "
              >
                <BriefcaseBusiness
                  className="
                    h-4 w-4
                    text-violet-300
                  "
                />
                Multi-Industry Experience
              </div>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            className="
              flex flex-wrap
              mb-8
              gap-3
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2
                  text-sm font-medium
                  rounded-full border
                  transition
                  ${activeCategory === category
                    ? "border-sky-300 bg-sky-400/15 text-sky-100 shadow-[0_0_0_1px_rgba(125,211,252,0.25)]"
                    : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-sky-400/50 hover:text-white"}
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SIX-PROJECT GRID */}
          <div
            className="
              grid
              gap-6
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
                  bg-slate-900/70
                  rounded-3xl border border-white/10
                  shadow-2xl shadow-slate-950/20
                  group
                "
              >
                <div
                  className="
                    overflow-hidden
                    h-64
                    relative
                  "
                >
                  <Link
                    href={project.href}
                    aria-label={`Explore ${project.name}`}
                    className="
                      block
                      h-full
                      relative
                    "
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} website concept`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="
                        object-cover
                        transition duration-500 group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent
                        absolute inset-0
                      "
                    />
                  </Link>
                </div>

                <div
                  className="
                    flex flex-1 flex-col
                    p-6
                  "
                >
                  <div
                    className="
                      flex
                      mb-4
                      items-start justify-between gap-3
                    "
                  >
                    <span
                      className="
                        px-2.5 py-1
                        text-[10px] font-semibold tracking-[0.2em] text-sky-200
                        bg-sky-400/10
                        rounded-full border border-sky-400/30
                        uppercase
                      "
                    >
                      {project.category}
                    </span>

                    <span
                      className="
                        text-right text-xs tracking-[0.2em] text-slate-400
                        uppercase
                      "
                    >
                      {project.industry}
                    </span>
                  </div>

                  <h2
                    className="
                      text-2xl font-bold text-white
                    "
                  >
                    {project.name}
                  </h2>

                  <p
                    className="
                      flex-1
                      mt-3
                      text-sm leading-6 text-slate-300
                    "
                  >
                    {project.description}
                  </p>

                  <ul
                    className="
                      flex flex-wrap
                      mt-5
                      gap-2
                    "
                  >
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="
                          px-2.5 py-1
                          text-xs text-slate-200
                          bg-white/5
                          rounded-full border border-white/10
                        "
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.href}
                    className="
                      inline-flex
                      mt-6
                      text-sm font-semibold text-sky-300
                      items-center gap-2 transition hover:text-sky-200
                    "
                  >
                    View project
                    <ArrowUpRight
                      className="
                        h-4 w-4
                      "
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CONCEPT DISCLOSURE */}
          <p
            className="
              mt-10
              text-center text-sm leading-7 text-slate-400
            "
          >
            These are fictional website concepts created
            to demonstrate Rekode Digital&apos;s design
            and development capabilities.
            They do not represent actual clients.
          </p>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section
        className="
          max-w-7xl
          mx-auto px-6 pb-20
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            p-8
            bg-gradient-to-br from-slate-900 via-slate-950 to-[#081827]
            rounded-[2rem] border border-sky-400/20
            sm:p-10
            lg:p-12
          "
        >
          <div
            className="
              flex flex-col
              gap-8
              lg:flex-row lg:items-center lg:justify-between
            "
          >
            <div
              className="
                max-w-2xl
              "
            >
              <div
                className="
                  flex
                  mb-4
                  text-sm tracking-[0.2em] text-sky-200
                  items-center gap-2 uppercase
                "
              >
                <Search
                  className="
                    h-4 w-4
                  "
                />
                Need a custom website?
              </div>

              <h2
                className="
                  text-3xl font-black text-white
                  sm:text-4xl
                "
              >
                Let&apos;s create a digital experience
                your customers remember.
              </h2>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                px-6 py-3
                text-sm font-semibold text-slate-950
                bg-sky-400
                rounded-full
                items-center justify-center gap-2 transition hover:bg-sky-300
              "
            >
              Book a discovery call
              <ArrowRight
                className="
                  h-4 w-4
                "
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
