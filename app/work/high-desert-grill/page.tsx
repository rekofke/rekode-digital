
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  MapPin,
  Menu,
  Phone,
  Star,
  UtensilsCrossed,
  X,
} from "lucide-react";

type MenuCategory =
  | "Steaks"
  | "Burgers"
  | "Starters"
  | "Sides"
  | "Desserts";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
};

const menuItems: MenuItem[] = [
  {
    name: "High Desert Ribeye",
    description:
      "Hand-cut ribeye, flame-grilled and finished with garlic herb butter.",
    price: 38,
    category: "Steaks",
    featured: true,
  },
  {
    name: "Great Basin New York Strip",
    description:
      "Classic New York strip with house seasoning and roasted garlic.",
    price: 35,
    category: "Steaks",
  },
  {
    name: "The Cattleman's Sirloin",
    description:
      "Tender center-cut sirloin served with your choice of two sides.",
    price: 29,
    category: "Steaks",
  },
  {
    name: "Smokehouse Burger",
    description:
      "Angus beef, smoked cheddar, crispy bacon, barbecue sauce, and onion rings.",
    price: 19,
    category: "Burgers",
    featured: true,
  },
  {
    name: "The Desert Classic",
    description:
      "Juicy beef patty, American cheese, lettuce, tomato, and house sauce.",
    price: 16,
    category: "Burgers",
  },
  {
    name: "Western Mushroom Burger",
    description:
      "Grilled mushrooms, Swiss cheese, caramelized onions, and toasted brioche.",
    price: 18,
    category: "Burgers",
  },
  {
    name: "Crispy Fried Pickles",
    description:
      "Golden fried pickle chips with creamy house ranch.",
    price: 9,
    category: "Starters",
  },
  {
    name: "Loaded Potato Skins",
    description:
      "Crispy potato skins with cheddar, bacon, green onions, and sour cream.",
    price: 12,
    category: "Starters",
  },
  {
    name: "Smoked Brisket Nachos",
    description:
      "Corn tortilla chips with smoked brisket, cheese, jalapeños, and house salsa.",
    price: 16,
    category: "Starters",
  },
  {
    name: "Garlic Mashed Potatoes",
    description: "Creamy potatoes whipped with garlic and butter.",
    price: 6,
    category: "Sides",
  },
  {
    name: "Steakhouse Mac & Cheese",
    description: "Three-cheese sauce with a golden breadcrumb topping.",
    price: 8,
    category: "Sides",
  },
  {
    name: "Seasoned Fries",
    description: "Crispy fries tossed in signature steakhouse seasoning.",
    price: 6,
    category: "Sides",
  },
  {
    name: "Warm Apple Cobbler",
    description:
      "Baked cinnamon apples topped with vanilla ice cream.",
    price: 10,
    category: "Desserts",
  },
  {
    name: "Chocolate Lava Cake",
    description:
      "Rich chocolate cake with a molten center and whipped cream.",
    price: 11,
    category: "Desserts",
  },
];

const categories: MenuCategory[] = [
  "Steaks",
  "Burgers",
  "Starters",
  "Sides",
  "Desserts",
];

const inputStyle =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none focus:border-[#B77943]";

const steakImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=85";

const burgerImage =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85";

const interiorImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85";

export default function HighDesertGrillPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("Steaks");
  const [reservationOpen, setReservationOpen] = useState(false);
  const [reservationComplete, setReservationComplete] =
    useState(false);

  const visibleMenu = menuItems.filter(
    (item) => item.category === activeCategory
  );

  function openReservation() {
    setReservationComplete(false);
    setReservationOpen(true);
  }

  function closeReservation() {
    setReservationOpen(false);
    setReservationComplete(false);
  }

  function handleReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReservationComplete(true);
  }

  return (
    <main
      id="top"
      className="
        min-h-screen
        text-[#F7F0E6]
        bg-[#171614]
      "
    >
      {/* CONCEPT DISCLOSURE */}
      <div
        className="
          px-4 py-2
          text-center text-xs font-semibold tracking-wide text-white
          bg-[#B77943]
        "
      >
        REKODE DIGITAL PORTFOLIO CONCEPT — FICTIONAL RESTAURANT.
        NO ACTUAL RESERVATIONS OR ORDERS.
      </div>

      {/* NAVIGATION */}
      <header
        className="
          z-20
          bg-[#171614]
          border-b border-white/10
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
            <Flame
              size={34}
              className="
                text-[#D49A61]
              "
            />

            <div>
              <p
                className="
                  text-lg font-black tracking-[0.1em]
                "
              >
                HIGH DESERT
              </p>
              <p
                className="
                  text-xs font-semibold tracking-[0.21em] text-[#D49A61]
                "
              >
                GRILL & STEAKHOUSE
              </p>
            </div>
          </a>

          <nav
            className="
              hidden
              text-sm font-semibold
              items-center gap-8
              lg:flex
            "
          >
            <a
              href="#menu"
              className="
                hover:text-[#D49A61]
              "
            >
              Our Menu
            </a>
            <a
              href="#favorites"
              className="
                hover:text-[#D49A61]
              "
            >
              Favorites
            </a>
            <a
              href="#story"
              className="
                hover:text-[#D49A61]
              "
            >
              Our Story
            </a>
            <a
              href="#hours"
              className="
                hover:text-[#D49A61]
              "
            >
              Hours & Location
            </a>
            <button
              type="button"
              onClick={openReservation}
              className="
                px-6 py-3
                text-white
                bg-[#B77943]
                rounded-md
                transition hover:bg-[#D49A61]
              "
            >
              Reserve a Table — Demo
            </button>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              p-2
              rounded-md border border-white/20
              lg:hidden
            "
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="
              flex flex-col
              px-6 pb-6
              border-t border-white/10
              lg:hidden
            "
          >
            {[
              ["Our Menu", "#menu"],
              ["Favorites", "#favorites"],
              ["Our Story", "#story"],
              ["Hours & Location", "#hours"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="
                  py-4
                  text-sm font-semibold
                  border-b border-white/10
                "
              >
                {label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openReservation();
              }}
              className="
                mt-5 px-5 py-4
                font-semibold
                bg-[#B77943]
                rounded-md
              "
            >
              Reserve a Table — Demo
            </button>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15,14,12,0.93) 0%, rgba(15,14,12,0.74) 48%, rgba(15,14,12,0.25) 100%), url('" +
            steakImage +
            "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="
          flex
          min-h-[650px]
          px-6 py-28
          bg-[#24201c]
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
              text-sm font-bold tracking-[0.3em] text-[#E6AE76]
              uppercase
            "
          >
            Bold Flavor. Western Soul.
          </p>

          <h1
            className="
              max-w-4xl
              mt-6
              text-5xl font-black leading-tight
              sm:text-7xl
            "
          >
            Fire-Grilled.
            <span
              className="
                block
                text-[#D49A61]
              "
            >
              Desert Inspired.
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mt-7
              text-lg leading-8 text-stone-200
            "
          >
            Where premium cuts meet genuine Western hospitality.
            Great food, good company, and unforgettable flavor
            in the heart of Northern Nevada.
          </p>

          <div
            className="
              flex flex-wrap
              mt-10
              gap-4
            "
          >
            <a
              href="#menu"
              className="
                inline-flex
                px-7 py-4
                font-bold text-white
                bg-[#B77943]
                rounded-md
                items-center gap-3 transition hover:bg-[#D49A61]
              "
            >
              Explore Our Menu
              <ArrowRight size={19} />
            </a>

            <button
              type="button"
              onClick={openReservation}
              className="
                px-7 py-4
                font-bold text-white
                bg-black/20
                rounded-md border border-white/40
                transition hover:border-[#D49A61]
              "
            >
              Reserve a Table
            </button>
          </div>

          <p
            className="
              mt-9
              text-xs text-stone-300
            "
          >
            Fictional restaurant and illustrative menu prices.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section
        className="
          px-6 py-10
          bg-[#221F1B]
          border-y border-white/10
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            text-center
            gap-8
            md:grid-cols-3
          "
        >
          <div>
            <Flame
              size={30}
              className="
                mx-auto
                text-[#D49A61]
              "
            />
            <h2
              className="
                mt-3
                font-bold
              "
            >
              Flame-Grilled Favorites
            </h2>
            <p
              className="
                mt-2
                text-sm text-stone-400
              "
            >
              Classic steakhouse flavors
            </p>
          </div>

          <div>
            <UtensilsCrossed
              size={30}
              className="
                mx-auto
                text-[#D49A61]
              "
            />
            <h2
              className="
                mt-3
                font-bold
              "
            >
              Made for Gathering
            </h2>
            <p
              className="
                mt-2
                text-sm text-stone-400
              "
            >
              Comfort food and good company
            </p>
          </div>

          <div>
            <Star
              size={30}
              className="
                mx-auto
                text-[#D49A61]
              "
            />
            <h2
              className="
                mt-3
                font-bold
              "
            >
              Western Hospitality
            </h2>
            <p
              className="
                mt-2
                text-sm text-stone-400
              "
            >
              Inspired by Northern Nevada
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED FAVORITES */}
      <section
        id="favorites"
        className="
          px-6 py-24
          scroll-mt-12
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
                text-sm font-bold tracking-[0.25em] text-[#D49A61]
                uppercase
              "
            >
              House Favorites
            </p>
            <h2
              className="
                mt-4
                text-4xl font-black
                sm:text-5xl
              "
            >
              Made to Be Remembered.
            </h2>
            <p
              className="
                max-w-2xl
                mx-auto mt-5
                leading-8 text-stone-400
              "
            >
              From perfectly grilled steaks to hearty burgers,
              our sample menu celebrates steakhouse classics.
            </p>
          </div>

          <div
            className="
              grid
              mt-12
              gap-8
              md:grid-cols-2
            "
          >
            {[
              {
                name: "High Desert Ribeye",
                price: "$38",
                image: steakImage,
                description:
                  "A rich, flame-grilled ribeye finished with garlic herb butter.",
              },
              {
                name: "Smokehouse Burger",
                price: "$19",
                image: burgerImage,
                description:
                  "Angus beef, smoked cheddar, crispy bacon, and smoky barbecue sauce.",
              },
            ].map((dish) => (
              <article
                key={dish.name}
                className="
                  overflow-hidden
                  bg-[#24211D]
                  rounded-2xl border border-white/10
                "
              >
                <div
                  role="img"
                  aria-label={"Illustrative food photograph for " + dish.name}
                  style={{
                    backgroundImage: "url('" + dish.image + "')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="
                    h-72
                    bg-stone-800
                  "
                />

                <div
                  className="
                    p-7
                  "
                >
                  <div
                    className="
                      flex
                      items-start justify-between gap-4
                    "
                  >
                    <h3
                      className="
                        text-2xl font-bold
                      "
                    >
                      {dish.name}
                    </h3>
                    <span
                      className="
                        text-xl font-bold text-[#D49A61]
                      "
                    >
                      {dish.price}
                    </span>
                  </div>

                  <p
                    className="
                      mt-4
                      leading-7 text-stone-400
                    "
                  >
                    {dish.description}
                  </p>

                  <a
                    href="#menu"
                    className="
                      inline-flex
                      mt-6
                      font-bold text-[#D49A61]
                      items-center gap-2
                    "
                  >
                    Explore Full Menu
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE MENU */}
      <section
        id="menu"
        className="
          px-6 py-24
          text-[#24201C]
          bg-[#F5EFE6]
          scroll-mt-12
        "
      >
        <div
          className="
            max-w-6xl
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
                text-sm font-bold tracking-[0.25em] text-[#A66535]
                uppercase
              "
            >
              The Menu
            </p>

            <h2
              className="
                mt-4
                text-4xl font-black
                sm:text-5xl
              "
            >
              Find Your Favorite.
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto mt-5
                leading-8 text-stone-600
              "
            >
              Browse our fictional menu by category to see
              how an interactive restaurant menu could work.
            </p>
          </div>

          {/* CATEGORY FILTERS */}
          <div
            role="group"
            aria-label="Menu categories"
            className="
              flex flex-wrap
              mt-10
              justify-center gap-3
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
                    ? "rounded-full bg-[#A66535] px-6 py-3 text-sm font-bold text-white"
                    : "rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-700 transition hover:border-[#A66535]"}
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* MENU ITEMS */}
          <div
            className="
              grid
              mt-12
              gap-5
              md:grid-cols-2
            "
          >
            {visibleMenu.map((item) => (
              <div
                key={item.name}
                className="
                  p-7
                  bg-white
                  rounded-xl border border-stone-200
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    items-start justify-between gap-4
                  "
                >
                  <h3
                    className="
                      text-xl font-bold
                    "
                  >
                    {item.name}
                  </h3>

                  <span
                    className="
                      text-xl font-black text-[#A66535]
                      shrink-0
                    "
                  >
                    ${item.price}
                  </span>
                </div>

                {item.featured && (
                  <p
                    className="
                      inline-flex
                      mt-3 px-3 py-1
                      text-xs font-bold text-[#A66535]
                      bg-[#A66535]/10
                      rounded-full
                      items-center gap-2
                    "
                  >
                    <Star size={13} />
                    House Favorite
                  </p>
                )}

                <p
                  className="
                    mt-4
                    leading-7 text-stone-600
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="
              mt-9
              text-center text-sm text-stone-500
            "
          >
            All dishes, descriptions, and prices are fictional
            examples created for this portfolio demonstration.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="story"
        className="
          px-6 py-24
          bg-[#211E1A]
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
          <div
            role="img"
            aria-label="Illustrative upscale restaurant interior"
            style={{
              backgroundImage: "url('" + interiorImage + "')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="
              min-h-[430px]
              bg-stone-800
              rounded-2xl
            "
          />

          <div>
            <p
              className="
                text-sm font-bold tracking-[0.25em] text-[#D49A61]
                uppercase
              "
            >
              Our Story — Concept Example
            </p>

            <h2
              className="
                mt-5
                text-4xl font-black leading-tight
                sm:text-5xl
              "
            >
              Good Food.
              <span
                className="
                  block
                  text-[#D49A61]
                "
              >
                Genuine Hospitality.
              </span>
            </h2>

            <p
              className="
                mt-7
                leading-8 text-stone-300
              "
            >
              High Desert Grill & Steakhouse is a fictional
              restaurant inspired by the hardworking communities,
              wide-open landscapes, and welcoming spirit of
              Northern Nevada.
            </p>

            <p
              className="
                mt-5
                leading-8 text-stone-400
              "
            >
              This concept demonstrates how a restaurant website
              can introduce its personality, highlight signature
              dishes, display menus, and help guests plan a visit.
            </p>

            <a
              href="#hours"
              className="
                inline-flex
                mt-8
                font-bold text-[#D49A61]
                items-center gap-3
              "
            >
              Hours & Location
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* HOURS AND LOCATION */}
      <section
        id="hours"
        className="
          px-6 py-24
          scroll-mt-12
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            gap-12
            lg:grid-cols-2
          "
        >
          <div>
            <p
              className="
                text-sm font-bold tracking-[0.25em] text-[#D49A61]
                uppercase
              "
            >
              Plan Your Visit
            </p>

            <h2
              className="
                mt-4
                text-4xl font-black
              "
            >
              Pull Up a Chair.
            </h2>

            <p
              className="
                max-w-lg
                mt-6
                leading-8 text-stone-400
              "
            >
              Here's an example of how a restaurant can make
              its hours, location, and reservation options
              easy to find.
            </p>

            <div
              className="
                mt-9 space-y-7
              "
            >
              <div
                className="
                  flex
                  items-start gap-4
                "
              >
                <Clock3
                  size={25}
                  className="
                    text-[#D49A61]
                    shrink-0
                  "
                />
                <div>
                  <h3
                    className="
                      font-bold
                    "
                  >Sample Hours</h3>
                  <p
                    className="
                      mt-2
                      text-stone-400
                    "
                  >
                    Monday–Thursday: 11 AM – 9 PM
                  </p>
                  <p
                    className="
                      text-stone-400
                    "
                  >
                    Friday–Saturday: 11 AM – 10 PM
                  </p>
                  <p
                    className="
                      text-stone-400
                    "
                  >
                    Sunday: 12 PM – 8 PM
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-start gap-4
                "
              >
                <MapPin
                  size={25}
                  className="
                    text-[#D49A61]
                    shrink-0
                  "
                />
                <div>
                  <h3
                    className="
                      font-bold
                    "
                  >Concept Location</h3>
                  <p
                    className="
                      mt-2
                      text-stone-400
                    "
                  >
                    Winnemucca, Nevada
                  </p>
                  <p
                    className="
                      text-sm text-stone-500
                    "
                  >
                    No physical restaurant or street address.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-start gap-4
                "
              >
                <Phone
                  size={25}
                  className="
                    text-[#D49A61]
                    shrink-0
                  "
                />
                <div>
                  <h3
                    className="
                      font-bold
                    "
                  >
                    Contact Information
                  </h3>
                  <p
                    className="
                      mt-2
                      text-stone-400
                    "
                  >
                    Demonstration only — no restaurant phone
                    or ordering service.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openReservation}
              className="
                inline-flex
                mt-10 px-7 py-4
                font-bold text-white
                bg-[#B77943]
                rounded-md
                items-center gap-3 transition hover:bg-[#D49A61]
              "
            >
              <CalendarDays size={19} />
              Try Reservation Demo
            </button>
          </div>

          <div
            className="
              flex flex-col
              min-h-[390px]
              p-10
              text-center
              bg-[#24211D]
              rounded-2xl border border-[#D49A61]/20
              items-center justify-center
            "
          >
            <MapPin
              size={48}
              className="
                text-[#D49A61]
              "
            />
            <h3
              className="
                mt-6
                text-2xl font-bold
              "
            >
              Northern Nevada Inspired
            </h3>
            <p
              className="
                max-w-sm
                mt-4
                leading-8 text-stone-400
              "
            >
              A real restaurant website could display an
              interactive map, driving directions, parking
              information, and contact details here.
            </p>
            <p
              className="
                mt-5
                text-sm text-stone-500
              "
            >
              No actual restaurant location is represented.
            </p>
          </div>
        </div>
      </section>

      {/* REKODE CTA */}
      <section
        className="
          px-6 py-20
          text-center text-white
          bg-[#B77943]
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto
          "
        >
          <p
            className="
              text-sm font-bold tracking-[0.25em]
              uppercase
            "
          >
            A Rekode Digital Website Concept
          </p>

          <h2
            className="
              mt-5
              text-4xl font-black
              sm:text-5xl
            "
          >
            Your Restaurant Deserves
            <span
              className="
                block
              "
            >
              a Website This Good.
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              leading-8 text-white/90
            "
          >
            This fictional restaurant site demonstrates how
            Rekode Digital can help food and hospitality
            businesses showcase menus, tell their story,
            and connect with customers.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-9 px-8 py-4
              font-bold text-white
              bg-[#211E1A]
              rounded-md
              items-center gap-3 transition hover:bg-[#332C25]
            "
          >
            Build a Website With Rekode
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          px-6 py-10
          text-center text-sm text-stone-400
          bg-[#141311]
        "
      >
        <p
          className="
            font-bold text-[#D49A61]
          "
        >
          HIGH DESERT GRILL & STEAKHOUSE
        </p>

        <p
          className="
            mt-3
          "
        >
          Fictional restaurant website concept by Rekode Digital.
        </p>

        <p
          className="
            mt-2
          "
        >
          No actual restaurant, food orders, or reservations.
        </p>

        <Link
          href="/portfolio"
          className="
            inline-block
            mt-5
            font-bold text-[#D49A61]
          "
        >
          Return to Rekode Portfolio
        </Link>
      </footer>

      {/* RESERVATION DEMONSTRATION */}
      {reservationOpen && (
        <div
          onClick={closeReservation}
          className="
            z-[100] overflow-y-auto
            px-4 py-8
            bg-black/80
            fixed inset-0
          "
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Demonstration reservation form"
            onClick={(event) => event.stopPropagation()}
            className="
              max-w-xl
              mx-auto p-7
              text-[#24201C]
              bg-[#F5EFE6]
              rounded-2xl
              shadow-2xl
              relative
              sm:p-10
            "
          >
            <button
              type="button"
              aria-label="Close reservation form"
              onClick={closeReservation}
              className="
                p-2
                text-white
                bg-[#24201C]
                rounded-full
                absolute right-5 top-5
              "
            >
              <X size={21} />
            </button>

            {!reservationComplete ? (
              <>
                <p
                  className="
                    text-xs font-bold tracking-[0.25em] text-[#A66535]
                    uppercase
                  "
                >
                  Reservation Experience
                </p>

                <h2
                  className="
                    mt-4 pr-10
                    text-3xl font-black
                  "
                >
                  Reserve Your Table.
                </h2>

                <p
                  className="
                    mt-4
                    leading-7 text-stone-600
                  "
                >
                  This is a demonstration form only.
                  Nothing is submitted or reserved.
                  Please use fictional information.
                </p>

                <form
                  onSubmit={handleReservation}
                  className="
                    mt-8 space-y-5
                  "
                >
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="
                        block
                        mb-2
                        text-sm font-bold
                      "
                    >
                      Guest Name
                    </label>
                    <input
                      id="guest-name"
                      required
                      placeholder="Sample Guest"
                      className={
                        ${inputStyle}
                      }
                    />
                  </div>

                  <div
                    className="
                      grid
                      gap-5
                      sm:grid-cols-2
                    "
                  >
                    <div>
                      <label
                        htmlFor="guest-date"
                        className="
                          block
                          mb-2
                          text-sm font-bold
                        "
                      >
                        Date
                      </label>
                      <input
                        id="guest-date"
                        type="date"
                        required
                        min={new Date().toLocaleDateString("en-CA")}
                        className={
                          ${inputStyle}
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guest-party"
                        className="
                          block
                          mb-2
                          text-sm font-bold
                        "
                      >
                        Party Size
                      </label>
                      <select
                        id="guest-party"
                        required
                        defaultValue=""
                        className={
                          ${inputStyle}
                        }
                      >
                        <option value="" disabled>
                          Select guests
                        </option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(
                          (number) => (
                            <option
                              key={number}
                              value={number}
                            >
                              {number} Guests
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="guest-time"
                      className="
                        block
                        mb-2
                        text-sm font-bold
                      "
                    >
                      Preferred Time
                    </label>
                    <select
                      id="guest-time"
                      required
                      defaultValue=""
                      className={
                        ${inputStyle}
                      }
                    >
                      <option value="" disabled>
                        Choose a time
                      </option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full
                      px-6 py-4
                      font-bold text-white
                      bg-[#A66535]
                      rounded-md
                      transition hover:bg-[#B77943]
                    "
                  >
                    Preview Reservation Request
                  </button>
                </form>
              </>
            ) : (
              <div
                role="status"
                className="
                  py-10
                  text-center
                "
              >
                <CheckCircle2
                  size={58}
                  className="
                    mx-auto
                    text-[#A66535]
                  "
                />

                <h2
                  className="
                    mt-6
                    text-3xl font-black
                  "
                >
                  Demo Request Complete!
                </h2>

                <p
                  className="
                    mt-5
                    leading-8 text-stone-600
                  "
                >
                  This demonstrates how a reservation
                  confirmation could appear on a restaurant
                  website. No reservation was made and
                  no information was transmitted.
                </p>

                <button
                  type="button"
                  onClick={closeReservation}
                  className="
                    mt-8 px-8 py-4
                    font-bold text-white
                    bg-[#24201C]
                    rounded-md
                  "
                >
                  Close Demo
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
