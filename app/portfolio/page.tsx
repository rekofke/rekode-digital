
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

type Category = "All Projects" | "Website Concepts" | "Client Projects";

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
    name: "Summit Ridge Construction",
    category: "Website Concepts",
    industry: "Construction & Contracting",
    description:
      "A professional construction website designed to showcase services, highlight completed projects, and encourage estimate requests.",
    image: "/summit-hero.png",
    href: "/work/summit-ridge",
    features: ["Responsive Design", "Project Gallery", "Lead Generation"],
  },
  {
    name: "High Desert Auto Repair",
    category: "Website Concepts",
    industry: "Automotive Services",
    description:
      "An automotive service website focused on building trust, clearly presenting repair services, and making it easy for customers to get in touch.",
    image: "/auto-hero.png",
    href: "/work/high-desert-auto",
    features: ["Service Pages", "Mobile Experience", "Contact Options"],
  },
  {
    name: "Silver State Landscapes",
    category: "Website Concepts",
    industry: "Landscaping & Outdoor Living",
    description:
      "A visually engaging landscaping website featuring outdoor project photography, service information, and opportunities to request a quote.",
    image: "/landscape-hero.png",
    href: "/work/silver-state-landscapes",
    features: ["Visual Portfolio", "Service Highlights", "Quote Requests"],
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
    features: ["Property Search", "Listing Details", "Showing Requests"],
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
    <main className="min-h-screen text-white bg-[#071426]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
                <Sparkles className="h-3.5 w-3.5" />
                Portfolio
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Digital experiences built to convert.
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                I design and build polished websites that help service businesses,
                brands, and growing teams turn attention into action.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Code2 className="h-4 w-4 text-sky-300" />
                4 Featured Builds
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <BriefcaseBusiness className="h-4 w-4 text-violet-300" />
                Multi-Industry Experience
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-sky-300 bg-sky-400/15 text-sky-100 shadow-[0_0_0_1px_rgba(125,211,252,0.25)]"
                    : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-sky-400/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-slate-950/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                      {project.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {project.industry}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-[#081827] p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-sky-200">
                <Search className="h-4 w-4" />
                Need a custom website?
              </div>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Let&apos;s create a digital experience your customers remember.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}