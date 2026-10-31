"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MousePointerClick, MonitorSmartphone, Sparkles } from "lucide-react";

const projects = [
  { name: "High Desert Grill & Steakhouse", industry: "Restaurants & Hospitality", description: "Explore an interactive food menu and a sample reservation experience.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85", href: "/work/high-desert-grill", features: ["Food Menu", "Reservation Demo"] },
  { name: "Summit Ridge Construction", industry: "Construction & Trades", description: "See how a contractor can showcase its work and guide visitors toward requesting an estimate.", image: "/summit-hero.png", href: "/work/summit-ridge", features: ["Project Gallery", "Estimate Request"] },
  { name: "High Desert Auto Repair", industry: "Automotive Services", description: "Browse a customer-first repair shop experience built around services and credibility.", image: "/auto-hero.png", href: "/work/high-desert-auto", features: ["Service Overview", "Contact Options"] },
  { name: "Silver State Landscapes", industry: "Landscaping & Outdoor Living", description: "Discover a photo-led landscape portfolio with clear service and quote-request pathways.", image: "/landscape-hero.png", href: "/work/silver-state-landscapes", features: ["Project Photography", "Quote Pathway"] },
  { name: "Silver State Property Group", industry: "Property & Real Estate", description: "Try property filters, view sample listings, and preview the showing-request flow.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85", href: "/work/silver-state-property-group", features: ["Listing Filters", "Showing Demo"] },
  { name: "Juniper & Ember Coffee House", industry: "Coffee Shops & Cafés", description: "Browse the café menu and try a sample pickup bag—no real orders are placed.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85", href: "/work/juniper-ember-coffee", features: ["Interactive Menu", "Pickup Bag Demo"] },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Food & Drink" | "Services" | "Property">("All");
  const filtered = projects.filter((p) => filter === "All" || (filter === "Food & Drink" ? ["Restaurants & Hospitality", "Coffee Shops & Cafés"].includes(p.industry) : filter === "Property" ? p.industry === "Property & Real Estate" : !["Restaurants & Hospitality", "Coffee Shops & Cafés", "Property & Real Estate"].includes(p.industry)));

  return (
    <section
      id="portfolio"
      className="
        px-6 py-24
        text-white
        bg-[#071426]
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
            mb-10
            gap-7
            lg:flex-row lg:items-end lg:justify-between
          "
        >
          <div
            className="
              max-w-3xl
            "
          >
            <p
              className="
                flex
                mb-3
                text-xs font-bold tracking-[0.26em] text-[#E5A77C]
                items-center gap-2 uppercase
              "
            ><Sparkles size={16} /> Explore Our Work</p>
            <h2
              className="
                text-4xl font-extrabold tracking-tight
                sm:text-5xl
              "
            >Don&apos;t just look. <span
              className="
                text-[#C9784A]
              "
            >Explore.</span></h2>
            <p
              className="
                mt-5
                text-lg leading-8 text-slate-300
              "
            >These aren&apos;t static screenshots. Open any of our six interactive website concepts to experience the navigation, menus, listings, and customer pathways for yourself.</p>
          </div>
          <div
            className="
              flex flex-wrap
              text-sm text-slate-200
              gap-3
            "
          >
            <span
              className="
                inline-flex
                px-4 py-2
                bg-[#C9784A]/10
                rounded-full border border-[#C9784A]/40
                items-center gap-2
              "
            ><MousePointerClick
              size={16}
              className="
                text-[#E5A77C]
              "
            /> Interactive demos</span>
            <span
              className="
                inline-flex
                px-4 py-2
                rounded-full border border-white/15
                items-center gap-2
              "
            ><MonitorSmartphone size={16} /> Mobile friendly</span>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter website concepts"
          className="
            flex flex-wrap
            mb-8
            gap-2
          "
        >
          {(["All", "Food & Drink", "Services", "Property"] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
              className={filter === option ? "rounded-full border border-[#C9784A] bg-[#C9784A]/20 px-4 py-2 text-sm font-semibold text-[#E5A77C]" : "rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300 transition hover:border-[#C9784A]/60 hover:text-white"}
            >{option}</button>
          ))}
        </div>

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filtered.map((project) => (
            <article
              key={project.href}
              className="
                flex flex-col overflow-hidden
                h-full
                bg-[#0D1E32]
                rounded-2xl border border-white/10
                group transition duration-300 hover:-translate-y-1 hover:border-[#C9784A]/60 hover:shadow-xl hover:shadow-black/20
              "
            >
              <Link
                href={project.href}
                aria-label={`Explore interactive demo: ${project.name}`}
                className="
                  block overflow-hidden
                  h-56
                  relative
                "
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website concept preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="
                    object-cover
                    transition duration-500 group-hover:scale-105
                  "
                />
                <div
                  className="
                    bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent
                    absolute inset-0
                  "
                />
                <span
                  className="
                    inline-flex
                    px-3 py-1.5
                    text-xs font-semibold text-white
                    bg-[#071426]/90
                    rounded-full border border-[#E5A77C]/50
                    absolute bottom-4 left-4 items-center gap-2
                  "
                ><MousePointerClick
                  size={14}
                  className="
                    text-[#E5A77C]
                  "
                /> Interactive Demo</span>
                <span
                  className="
                    p-2
                    text-white
                    bg-[#C9784A]
                    rounded-full
                    absolute bottom-4 right-4 transition group-hover:scale-110
                  "
                ><ArrowUpRight size={17} /></span>
              </Link>
              <div
                className="
                  flex flex-1 flex-col
                  p-6
                "
              >
                <p
                  className="
                    text-xs font-bold tracking-[0.18em] text-[#E5A77C]
                    uppercase
                  "
                >{project.industry}</p>
                <h3
                  className="
                    mt-3
                    text-2xl font-bold
                  "
                >{project.name}</h3>
                <p
                  className="
                    flex-1
                    mt-3
                    leading-7 text-slate-300
                  "
                >{project.description}</p>
                <div
                  className="
                    flex flex-wrap
                    mt-5
                    gap-2
                  "
                >{project.features.map((feature) => <span
                  key={feature}
                  className="
                    px-3 py-1
                    text-xs text-slate-300
                    rounded-full border border-white/15
                  "
                >{feature}</span>)}</div>
                <Link
                  href={project.href}
                  className="
                    inline-flex
                    mt-7
                    font-semibold text-[#E5A77C]
                    items-center gap-2 transition hover:text-white
                  "
                >Explore the live-style demo <ArrowRight size={17} /></Link>
              </div>
            </article>
          ))}
        </div>

        <p
          className="
            mt-8
            text-center text-sm leading-6 text-slate-400
          "
        >All six businesses are fictional portfolio concepts, not paying clients. Forms and sample ordering or booking experiences are demonstrations only.</p>
        <div
          className="
            flex flex-col
            mt-12 px-6 py-9
            text-center
            bg-gradient-to-r from-[#12263C] to-[#172333]
            rounded-2xl border border-[#C9784A]/30
            items-center gap-4
            sm:px-10
          "
        >
          <h3
            className="
              text-2xl font-bold
              sm:text-3xl
            "
          >Imagine what we could build for your business.</h3>
          <p
            className="
              max-w-2xl
              text-slate-300
            "
          >Every concept starts with a simple goal: make it easier for your customers to discover, trust, and contact you.</p>
          <div
            className="
              flex flex-wrap
              justify-center gap-3
            "
          >
            <Link
              href="/#visibility-review"
              className="
                inline-flex
                px-6 py-3
                font-semibold text-white
                bg-[#C9784A]
                rounded-lg
                items-center gap-2 transition hover:bg-[#D8895B]
              "
            >Get a Free Visibility Review <ArrowRight size={17} /></Link>
            <Link
              href="/portfolio"
              className="
                inline-flex
                px-6 py-3
                font-semibold text-white
                rounded-lg border border-white/25
                items-center gap-2 transition hover:border-[#C9784A]
              "
            >View Full Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
