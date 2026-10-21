
"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronDown,
  House,
  MapPin,
  Menu,
  Ruler,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

type PropertyType = "House" | "Ranch" | "Land";

type Property = {
  id: number;
  name: string;
  location: string;
  type: PropertyType;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  image: string;
  features: string[];
};

const properties: Property[] = [
  {
    id: 1,
    name: "The Sagebrush Estate",
    location: "Winnemucca",
    type: "House",
    price: 489000,
    beds: 4,
    baths: 3,
    sqft: 2680,
    description:
      "An inviting modern home concept featuring generous living spaces, mountain-inspired finishes, and room to entertain.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Open-concept living",
      "Spacious kitchen",
      "Attached garage",
      "Outdoor entertaining space",
    ],
  },
  {
    id: 2,
    name: "Great Basin Ranch Retreat",
    location: "Paradise Valley",
    type: "Ranch",
    price: 795000,
    beds: 3,
    baths: 2,
    sqft: 2450,
    description:
      "A Western ranch property concept combining wide-open space, rustic character, and comfortable country living.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Ranch-style setting",
      "Expansive outdoor space",
      "Country-inspired design",
      "Mountain atmosphere",
    ],
  },
  {
    id: 3,
    name: "Silver Creek Contemporary",
    location: "Spring Creek",
    type: "House",
    price: 425000,
    beds: 3,
    baths: 2,
    sqft: 1980,
    description:
      "A bright, contemporary family home concept with functional spaces, clean architectural lines, and modern comforts.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Contemporary interiors",
      "Flexible living areas",
      "Modern kitchen",
      "Family-friendly layout",
    ],
  },
  {
    id: 4,
    name: "The Humboldt Homestead",
    location: "Winnemucca",
    type: "House",
    price: 329000,
    beds: 3,
    baths: 2,
    sqft: 1640,
    description:
      "A welcoming home concept with natural finishes, practical living areas, and timeless character.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Comfortable floor plan",
      "Warm interior finishes",
      "Outdoor living potential",
      "Practical everyday spaces",
    ],
  },
  {
    id: 5,
    name: "Mountain View Acreage",
    location: "Paradise Valley",
    type: "Land",
    price: 185000,
    beds: 0,
    baths: 0,
    sqft: 0,
    description:
      "A fictional vacant-land opportunity for buyers dreaming of their own Northern Nevada retreat.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Open land concept",
      "Scenic surroundings",
      "Potential custom homesite",
      "Rural lifestyle",
    ],
  },
  {
    id: 6,
    name: "High Desert Modern",
    location: "Elko",
    type: "House",
    price: 575000,
    beds: 4,
    baths: 3,
    sqft: 2920,
    description:
      "An upscale modern-home concept designed around open spaces, natural light, and contemporary comfort.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Modern architectural style",
      "Large gathering areas",
      "Generous primary suite",
      "Premium design inspiration",
    ],
  },
];

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const fieldClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-[#b38a50]";

export default function SilverStatePropertyGroupPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("All Locations");
  const [propertyType, setPropertyType] = useState("All Types");
  const [maxPrice, setMaxPrice] = useState("Any Price");
  const [selectedProperty, setSelectedProperty] =
    useState<Property | null>(null);
  const [showingOpen, setShowingOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const locationMatch =
        location === "All Locations" ||
        property.location === location;

      const typeMatch =
        propertyType === "All Types" ||
        property.type === propertyType;

      const priceMatch =
        maxPrice === "Any Price" ||
        property.price <= Number(maxPrice);

      return locationMatch && typeMatch && priceMatch;
    });
  }, [location, propertyType, maxPrice]);

  function openDetails(property: Property) {
    setSelectedProperty(property);
    setShowingOpen(false);
    setDemoSubmitted(false);
  }

  function closeDetails() {
    setSelectedProperty(null);
    setShowingOpen(false);
    setDemoSubmitted(false);
  }

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDemoSubmitted(true);
  }

  return (
    <main
      className="
        min-h-screen
        text-[#252321]
        bg-[#f7f4ef]
      "
    >
      {/* FICTIONAL DEMO NOTICE */}
      <div
        className="
          px-4 py-2
          text-center text-xs font-semibold tracking-wide text-white
          bg-[#b38a50]
        "
      >
        REKODE DIGITAL PORTFOLIO CONCEPT — FICTIONAL AGENCY,
        PROPERTIES & AGENTS. NO REAL BOOKINGS.
      </div>

      {/* NAVIGATION */}
      <header
        className="
          z-20
          text-white
          bg-[#211f1d]
          relative
        "
      >
        <div
          className="
            flex
            max-w-7xl
            mx-auto px-6 py-5
            items-center justify-between
          "
        >
          <a
            href="#top"
            className="
              flex
              items-center gap-3
            "
          >
            <Building2
              size={34}
              className="
                text-[#c9a66b]
              "
            />
            <div>
              <p
                className="
                  text-lg font-bold tracking-[0.12em]
                "
              >
                SILVER STATE
              </p>
              <p
                className="
                  text-[10px] tracking-[0.32em] text-[#c9a66b]
                "
              >
                PROPERTY GROUP
              </p>
            </div>
          </a>

          <nav
            className="
              hidden
              text-sm font-medium
              items-center gap-8
              md:flex
            "
          >
            <a
              href="#properties"
              className="
                hover:text-[#c9a66b]
              "
            >
              Properties
            </a>
            <a
              href="#about"
              className="
                hover:text-[#c9a66b]
              "
            >
              About
            </a>
            <a
              href="#services"
              className="
                hover:text-[#c9a66b]
              "
            >
              Services
            </a>
            <a
              href="#contact"
              className="
                hover:text-[#c9a66b]
              "
            >
              Contact
            </a>
            <a
              href="#properties"
              className="
                px-5 py-3
                font-semibold
                bg-[#b38a50]
                rounded-md
                hover:bg-[#c9a66b]
              "
            >
              Explore Listings
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              p-2
              rounded-md border border-white/20
              md:hidden
            "
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="
              flex flex-col
              px-6 pb-5
              border-t border-white/10
              md:hidden
            "
          >
            {[
              ["Properties", "#properties"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="
                  py-4
                  border-b border-white/10
                "
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(24,23,21,0.88), rgba(24,23,21,0.35)), url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="
          flex overflow-hidden
          min-h-[620px]
          px-6 py-28
          text-white
          bg-[#302e2b]
          relative items-center
        "
      >
        <div
          className="
            w-full max-w-7xl
            mx-auto
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.3em] text-[#e1bd83]
              uppercase
            "
          >
            Northern Nevada Living
          </p>

          <h1
            className="
              max-w-3xl
              mt-6
              text-5xl font-bold leading-tight
              sm:text-7xl
            "
          >
            Find a Place
            <span
              className="
                block
                text-[#e1bd83]
              "
            >
              to Call Yours.
            </span>
          </h1>

          <p
            className="
              max-w-xl
              mt-7
              text-lg leading-8 text-stone-200
            "
          >
            Explore the possibilities of life in Northern
            Nevada, from inviting homes to open-country
            retreats.
          </p>

          <a
            href="#properties"
            className="
              inline-flex
              mt-9 px-7 py-4
              font-semibold
              bg-[#b38a50]
              rounded-md
              items-center gap-3 transition hover:bg-[#c9a66b]
            "
          >
            Explore Properties
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* PROPERTY SEARCH */}
      <section
        id="properties"
        className="
          px-6 py-20
          scroll-mt-8
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
              text-center
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#a0783f]
                uppercase
              "
            >
              Featured Properties
            </p>

            <h2
              className="
                mt-4
                text-4xl font-bold
                sm:text-5xl
              "
            >
              Discover Your Next Chapter.
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto mt-5
                leading-8 text-stone-600
              "
            >
              Explore our sample listings and experience a
              modern property-search website.
            </p>
          </div>

          {/* FILTERS */}
          <div
            className="
              grid
              mt-12 p-6
              bg-white
              rounded-2xl border border-stone-200
              shadow-lg
              gap-4
              md:grid-cols-4
            "
          >
            <div>
              <label
                htmlFor="property-location"
                className="
                  block
                  mb-2
                  text-sm font-semibold
                "
              >
                Location
              </label>

              <select
                id="property-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={fieldClass}
              >
                <option>All Locations</option>
                <option>Winnemucca</option>
                <option>Paradise Valley</option>
                <option>Spring Creek</option>
                <option>Elko</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="property-type"
                className="
                  block
                  mb-2
                  text-sm font-semibold
                "
              >
                Property Type
              </label>

              <select
                id="property-type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className={fieldClass}
              >
                <option>All Types</option>
                <option>House</option>
                <option>Ranch</option>
                <option>Land</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="property-price"
                className="
                  block
                  mb-2
                  text-sm font-semibold
                "
              >
                Maximum Price
              </label>

              <select
                id="property-price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className={fieldClass}
              >
                <option value="Any Price">Any Price</option>
                <option value="250000">$250,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
                <option value="650000">$650,000</option>
                <option value="1000000">$1,000,000</option>
              </select>
            </div>

            <div
              className="
                flex
                items-end
              "
            >
              <div
                className="
                  flex
                  w-full
                  px-5 py-3.5
                  font-semibold text-white
                  bg-[#252321]
                  rounded-lg
                  items-center justify-center gap-2
                "
              >
                <Search size={19} />
                {filteredProperties.length} Results
              </div>
            </div>
          </div>

          {/* PROPERTY GRID */}
          {filteredProperties.length > 0 ? (
            <div
              className="
                grid
                mt-12
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {filteredProperties.map((property) => (
                <article
                  key={property.id}
                  className="
                    overflow-hidden
                    bg-white
                    rounded-2xl border border-stone-200
                    shadow-sm
                    transition hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  <div
                    style={{
                      backgroundImage:
                        "url('" + property.image + "')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="
                      h-60
                      bg-stone-300
                      relative
                    "
                  >
                    <span
                      className="
                        px-4 py-2
                        text-xs font-semibold text-white
                        bg-[#252321]/90
                        rounded-full
                        absolute left-4 top-4
                      "
                    >
                      Demo Listing
                    </span>

                    <span
                      className="
                        px-4 py-2
                        font-bold text-[#252321]
                        bg-white
                        rounded-md
                        absolute bottom-4 right-4
                      "
                    >
                      {money(property.price)}
                    </span>
                  </div>

                  <div
                    className="
                      p-6
                    "
                  >
                    <p
                      className="
                        flex
                        text-sm text-[#a0783f]
                        items-center gap-2
                      "
                    >
                      <MapPin size={16} />
                      {property.location}, Nevada
                    </p>

                    <h3
                      className="
                        mt-3
                        text-2xl font-bold
                      "
                    >
                      {property.name}
                    </h3>

                    <div
                      className="
                        flex flex-wrap
                        mt-5 py-4
                        text-sm text-stone-600
                        border-y border-stone-200
                        gap-5
                      "
                    >
                      {property.type !== "Land" && (
                        <>
                          <span
                            className="
                              flex
                              items-center gap-2
                            "
                          >
                            <BedDouble size={17} />
                            {property.beds} Beds
                          </span>

                          <span
                            className="
                              flex
                              items-center gap-2
                            "
                          >
                            <Bath size={17} />
                            {property.baths} Baths
                          </span>
                        </>
                      )}

                      <span
                        className="
                          flex
                          items-center gap-2
                        "
                      >
                        <House size={17} />
                        {property.type}
                      </span>
                    </div>

                    <p
                      className="
                        min-h-20
                        mt-5
                        leading-7 text-stone-600
                      "
                    >
                      {property.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => openDetails(property)}
                      className="
                        flex
                        w-full
                        mt-7 px-5 py-3.5
                        font-semibold text-white
                        bg-[#252321]
                        rounded-md
                        items-center justify-center gap-2 transition hover:bg-[#a0783f]
                      "
                    >
                      View Property Details
                      <ArrowUpRight size={19} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="
                mt-12 px-8 py-16
                text-center
                bg-white
                rounded-2xl border border-stone-200
              "
            >
              <Search
                size={34}
                className="
                  mx-auto
                  text-[#b38a50]
                "
              />
              <h3
                className="
                  mt-4
                  text-2xl font-bold
                "
              >
                No Matching Properties
              </h3>
              <p
                className="
                  mt-3
                  text-stone-600
                "
              >
                Try changing your location, property type,
                or price range.
              </p>

              <button
                type="button"
                onClick={() => {
                  setLocation("All Locations");
                  setPropertyType("All Types");
                  setMaxPrice("Any Price");
                }}
                className="
                  mt-6 px-6 py-3
                  font-semibold text-white
                  bg-[#b38a50]
                  rounded-md
                "
              >
                Clear Filters
              </button>
            </div>
          )}

          <p
            className="
              mt-8
              text-center text-sm text-stone-500
            "
          >
            All property names, prices, details, and availability
            are fictional examples for this website demonstration.
            Photos are illustrative stock imagery.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="
          px-6 py-24
          text-white
          bg-[#252321]
          scroll-mt-12
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-12
            lg:grid-cols-2 lg:items-center
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold tracking-[0.25em] text-[#c9a66b]
                uppercase
              "
            >
              Our Story — Concept Example
            </p>

            <h2
              className="
                mt-5
                text-4xl font-bold leading-tight
                sm:text-5xl
              "
            >
              Real Estate,
              <span
                className="
                  block
                  text-[#c9a66b]
                "
              >
                Rooted in Community.
              </span>
            </h2>

            <p
              className="
                mt-6
                leading-8 text-stone-300
              "
            >
              Silver State Property Group represents the kind
              of locally focused real estate brand that values
              relationships, regional knowledge, and
              personalized guidance.
            </p>

            <p
              className="
                mt-5
                leading-8 text-stone-400
              "
            >
              This fictional agency demonstrates how a
              professional website can help buyers explore
              properties while giving a real estate business
              a polished online presence.
            </p>
          </div>

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {[
              ["Local Character", "Northern Nevada inspired design."],
              ["Easy Discovery", "Interactive search and listing filters."],
              ["Clear Details", "Property specifications and features."],
              ["Simple Inquiries", "An intuitive showing-request demo."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="
                  p-7
                  bg-white/5
                  rounded-xl border border-white/10
                "
              >
                <CheckCircle2
                  size={26}
                  className="
                    text-[#c9a66b]
                  "
                />
                <h3
                  className="
                    mt-5
                    text-lg font-bold
                  "
                >
                  {title}
                </h3>
                <p
                  className="
                    mt-3
                    leading-7 text-stone-400
                  "
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="
          px-6 py-24
          scroll-mt-12
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.25em] text-[#a0783f]
              uppercase
            "
          >
            Concept Agency Services
          </p>

          <h2
            className="
              mt-5
              text-4xl font-bold
            "
          >
            Guidance for Every Move.
          </h2>

          <div
            className="
              grid
              mt-12
              gap-7
              md:grid-cols-3
            "
          >
            {[
              {
                icon: House,
                title: "Buy a Home",
                text: "Explore available home styles, neighborhoods, and property details.",
              },
              {
                icon: Building2,
                title: "Sell a Property",
                text: "Present listings professionally with strong photography and clear information.",
              },
              {
                icon: ShieldCheck,
                title: "Property Management",
                text: "Showcase rental management, owner resources, and inquiry options.",
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    p-9
                    text-left
                    bg-white
                    rounded-2xl border border-stone-200
                    shadow-sm
                  "
                >
                  <Icon
                    size={33}
                    className="
                      text-[#b38a50]
                    "
                  />

                  <h3
                    className="
                      mt-6
                      text-2xl font-bold
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-8 text-stone-600
                    "
                  >
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT / REKODE CTA */}
      <section
        id="contact"
        className="
          px-6 py-20
          bg-[#e9e1d5]
          scroll-mt-12
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
              text-sm font-semibold tracking-[0.25em] text-[#a0783f]
              uppercase
            "
          >
            Built by Rekode Digital
          </p>

          <h2
            className="
              mt-5
              text-4xl font-bold
            "
          >
            Imagine a Website Like This
            <span
              className="
                block
                text-[#a0783f]
              "
            >
              for Your Business.
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              leading-8 text-stone-700
            "
          >
            This is a fictional real estate website created
            to demonstrate Rekode Digital's interactive
            web design capabilities.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-9 px-8 py-4
              font-semibold text-white
              bg-[#252321]
              rounded-md
              items-center gap-3 hover:bg-[#a0783f]
            "
          >
            Contact Rekode Digital
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <footer
        className="
          px-6 py-8
          text-center text-sm text-stone-400
          bg-[#211f1d]
        "
      >
        <p>
          Silver State Property Group — Fictional Website
          Concept
        </p>
        <p
          className="
            mt-3
          "
        >
          Designed by Rekode Digital.
          No actual properties are offered for sale.
        </p>
        <Link
          href="/portfolio"
          className="
            inline-block
            mt-4
            font-semibold text-[#c9a66b]
          "
        >
          Return to Rekode Portfolio
        </Link>
      </footer>

      {/* PROPERTY DETAILS / SHOWING DEMO */}
      {selectedProperty && (
        <div
          onClick={closeDetails}
          className="
            z-[100] overflow-y-auto
            px-4 py-8
            bg-black/75
            fixed inset-0
          "
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Property details"
            onClick={(event) => event.stopPropagation()}
            className="
              overflow-hidden
              max-w-3xl
              mx-auto
              bg-[#f7f4ef]
              rounded-2xl
              shadow-2xl
              relative
            "
          >
            <button
              type="button"
              aria-label="Close property details"
              onClick={closeDetails}
              className="
                z-10
                p-3
                text-white
                bg-[#252321]
                rounded-full
                absolute right-4 top-4
              "
            >
              <X size={21} />
            </button>

            <div
              style={{
                backgroundImage:
                  "url('" + selectedProperty.image + "')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="
                h-64
                bg-stone-300
                sm:h-80
              "
            />

            <div
              className="
                p-6
                sm:p-9
              "
            >
              <p
                className="
                  text-xs font-bold tracking-wider text-[#a0783f]
                  uppercase
                "
              >
                Fictional Property Listing
              </p>

              <h2
                className="
                  mt-3
                  text-3xl font-bold
                "
              >
                {selectedProperty.name}
              </h2>

              <p
                className="
                  flex
                  mt-3
                  text-stone-600
                  items-center gap-2
                "
              >
                <MapPin size={17} />
                {selectedProperty.location}, Nevada
              </p>

              <p
                className="
                  mt-5
                  text-3xl font-bold text-[#a0783f]
                "
              >
                {money(selectedProperty.price)}
              </p>

              <div
                className="
                  flex flex-wrap
                  mt-6 py-5
                  text-stone-700
                  border-y border-stone-200
                  gap-5
                "
              >
                {selectedProperty.type !== "Land" && (
                  <>
                    <span
                      className="
                        flex
                        items-center gap-2
                      "
                    >
                      <BedDouble size={19} />
                      {selectedProperty.beds} Beds
                    </span>

                    <span
                      className="
                        flex
                        items-center gap-2
                      "
                    >
                      <Bath size={19} />
                      {selectedProperty.baths} Baths
                    </span>

                    <span
                      className="
                        flex
                        items-center gap-2
                      "
                    >
                      <Ruler size={19} />
                      {selectedProperty.sqft.toLocaleString()} sq ft
                    </span>
                  </>
                )}

                <span
                  className="
                    flex
                    items-center gap-2
                  "
                >
                  <House size={19} />
                  {selectedProperty.type}
                </span>
              </div>

              <p
                className="
                  mt-6
                  leading-8 text-stone-600
                "
              >
                {selectedProperty.description}
              </p>

              <h3
                className="
                  mt-7
                  text-xl font-bold
                "
              >
                Property Highlights
              </h3>

              <ul
                className="
                  grid
                  mt-4
                  gap-3
                  sm:grid-cols-2
                "
              >
                {selectedProperty.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      text-stone-700
                      items-center gap-2
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="
                        text-[#b38a50]
                      "
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {!showingOpen && (
                <button
                  type="button"
                  onClick={() => setShowingOpen(true)}
                  className="
                    flex
                    w-full
                    mt-9 px-6 py-4
                    font-semibold text-white
                    bg-[#b38a50]
                    rounded-md
                    items-center justify-center gap-2 hover:bg-[#a0783f]
                  "
                >
                  Schedule a Showing — Demo
                  <ArrowRight size={18} />
                </button>
              )}

              {showingOpen && !demoSubmitted && (
                <form
                  onSubmit={handleDemoSubmit}
                  className="
                    mt-8 space-y-5 p-6
                    bg-white
                    rounded-xl border border-stone-200
                  "
                >
                  <h3
                    className="
                      text-xl font-bold
                    "
                  >
                    Request a Sample Showing
                  </h3>

                  <p
                    className="
                      text-sm text-stone-600
                    "
                  >
                    Demonstration only. Nothing is sent or booked.
                    Please do not enter real personal information.
                  </p>

                  <div>
                    <label
                      htmlFor="demo-name"
                      className="
                        block
                        mb-2
                        text-sm font-semibold
                      "
                    >
                      Sample Name
                    </label>
                    <input
                      id="demo-name"
                      required
                      placeholder="Demo Visitor"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="demo-date"
                      className="
                        block
                        mb-2
                        text-sm font-semibold
                      "
                    >
                      Preferred Date
                    </label>
                    <input
                      id="demo-date"
                      type="date"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="demo-time"
                      className="
                        block
                        mb-2
                        text-sm font-semibold
                      "
                    >
                      Preferred Time
                    </label>
                    <select
                      id="demo-time"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      <option>9:00 AM</option>
                      <option>11:00 AM</option>
                      <option>1:00 PM</option>
                      <option>3:00 PM</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full
                      px-5 py-4
                      font-semibold text-white
                      bg-[#252321]
                      rounded-md
                    "
                  >
                    Preview Showing Request
                  </button>
                </form>
              )}

              {demoSubmitted && (
                <div
                  role="status"
                  className="
                    mt-8 p-6
                    text-center
                    bg-[#b38a50]/10
                    rounded-xl border border-[#b38a50]/40
                  "
                >
                  <CheckCircle2
                    size={36}
                    className="
                      mx-auto
                      text-[#a0783f]
                    "
                  />
                  <h3
                    className="
                      mt-3
                      text-xl font-bold
                    "
                  >
                    Demo Request Complete!
                  </h3>
                  <p
                    className="
                      mt-3
                      text-stone-600
                    "
                  >
                    This shows how a request confirmation
                    could work on a real estate website.
                    No showing has been scheduled and no
                    information was transmitted.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
