






















"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Coffee,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

type MenuCategory = "Coffee" | "Espresso" | "Tea & More" | "Bakery";
type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  tag?: string;
};

const menuCategories: MenuCategory[] = ["Coffee", "Espresso", "Tea & More", "Bakery"];

const menuItems: MenuItem[] = [
  { id: "house", name: "House Drip", category: "Coffee", description: "A smooth, balanced daily brew.", price: 3.75 },
  { id: "cold", name: "Slow-Made Cold Brew", category: "Coffee", description: "Steeped overnight with chocolate notes.", price: 4.75, tag: "Popular" },
  { id: "pour", name: "Single-Origin Pour Over", category: "Coffee", description: "Hand-brewed and bright; rotating selection.", price: 5.5 },
  { id: "latte", name: "Honey & Hearth Latte", category: "Espresso", description: "Espresso, honey, cinnamon, and silky milk.", price: 6.25, tag: "Signature" },
  { id: "cortado", name: "Cortado", category: "Espresso", description: "Double espresso softened with steamed milk.", price: 4.5 },
  { id: "mocha", name: "Dark Chocolate Mocha", category: "Espresso", description: "Rich dark cocoa and expertly pulled espresso.", price: 6.5 },
  { id: "chai", name: "Spiced Chai", category: "Tea & More", description: "A comforting blend of black tea and spices.", price: 5.25 },
  { id: "matcha", name: "Vanilla Cloud Matcha", category: "Tea & More", description: "Earthy matcha with a smooth vanilla finish.", price: 6 },
  { id: "tea", name: "Loose-Leaf Tea", category: "Tea & More", description: "A rotating selection, steeped to order.", price: 3.75 },
  { id: "roll", name: "Brown Butter Cinnamon Roll", category: "Bakery", description: "Soft spirals and vanilla glaze.", price: 5.75, tag: "Baked daily" },
  { id: "scone", name: "Maple Pecan Scone", category: "Bakery", description: "Golden edges and a maple drizzle.", price: 4.5 },
  { id: "toast", name: "Avocado Toast", category: "Bakery", description: "Sourdough, lemon, fresh herbs, chili crunch.", price: 8.5 },
];

const photos = {
  hero: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=85",
  interior: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=85",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1300&q=85",
  bakery: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1300&q=85",
};

const dollars = (amount: number) => `$${amount.toFixed(2)}`;

export default function JuniperEmberCoffeePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Coffee");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [previewComplete, setPreviewComplete] = useState(false);

  const selectedItems = useMemo(
    () => menuItems.filter((item) => (cart[item.id] ?? 0) > 0),
    [cart]
  );
  const itemCount = selectedItems.reduce((count, item) => count + cart[item.id], 0);
  const orderTotal = selectedItems.reduce((sum, item) => sum + item.price * cart[item.id], 0);

  function updateItem(id: string, change: number) {
    setPreviewComplete(false);
    setCart((current) => ({
      ...current,
      [id]: Math.max(0, (current[id] ?? 0) + change),
    }));
  }

  function showBag() {
    setPreviewComplete(false);
    setCartOpen(true);
  }

  return (
    <main
      id="top"
      className="
        min-h-screen
        text-[#2c241d]
        bg-[#f7f1e8]
      "
    >
      {/* This is a portfolio demonstration, not an operational coffee shop. */}
      <div
        className="
          px-4 py-2
          text-center text-[11px] font-semibold leading-5 tracking-wide text-[#f9ead7]
          bg-[#2d241e]
        "
      >
        REKODE DIGITAL PORTFOLIO CONCEPT — FICTIONAL COFFEE SHOP. NO REAL ORDERS OR PAYMENTS.
        <Link
          href="/portfolio"
          className="
            ml-2
            underline underline-offset-2 hover:text-[#deb186]
          "
        >Back to portfolio</Link>
      </div>

      <header
        className="
          z-30
          bg-[#fcf8f1]/95
          border-b border-[#d7c6b3]
          sticky top-0 backdrop-blur-md
        "
      >
        <div
          className="
            flex
            max-w-7xl
            mx-auto px-6 py-4
            items-center justify-between
            lg:px-10
          "
        >
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="
              flex
              items-center gap-3
            "
          >
            <span
              className="
                flex
                h-11 w-11
                text-[#98653d]
                rounded-full border border-[#b7855f]
                items-center justify-center
              "
            ><Coffee size={24} /></span>
            <span
              className="
                leading-none
              "
            >
              <span
                className="
                  block
                  font-serif text-xl font-bold tracking-tight
                  sm:text-2xl
                "
              >Juniper <span
                className="
                  text-[#a46743]
                  italic
                "
              >&</span> Ember</span>
              <span
                className="
                  block
                  mt-1
                  text-[10px] font-bold tracking-[0.25em] text-[#97704f]
                  uppercase
                "
              >Coffee House</span>
            </span>
          </a>
          <nav
            aria-label="Coffee shop navigation"
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
                hover:text-[#a46743]
              "
            >Menu</a>
            <a
              href="#story"
              className="
                hover:text-[#a46743]
              "
            >Our Story</a>
            <a
              href="#visit"
              className="
                hover:text-[#a46743]
              "
            >Hours & Location</a>
            <button
              type="button"
              onClick={showBag}
              className="
                inline-flex
                px-5 py-3
                text-white
                bg-[#365044]
                rounded-full
                items-center gap-2 transition hover:bg-[#243d33]
              "
            >
              <ShoppingBag size={17} /> Sample pickup bag {itemCount > 0 && `(${itemCount})`}
            </button>
          </nav>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              p-3
              rounded-full border border-[#c6b29c]
              lg:hidden
            "
          >
            {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="
              flex flex-col
              px-6 py-3
              text-sm font-semibold
              bg-[#fcf8f1]
              border-t border-[#d7c6b3]
              lg:hidden
            "
          >
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="
                py-3
              "
            >Menu</a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="
                py-3
              "
            >Our Story</a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="
                py-3
              "
            >Hours & Location</a>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); showBag(); }}
              className="
                my-2 px-5 py-3
                text-left text-white
                bg-[#365044]
                rounded-full
              "
            >Sample pickup bag ({itemCount})</button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        className="
          overflow-hidden
          bg-[#ece1d1]
          relative
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto px-6 py-20
            items-center gap-12
            lg:grid-cols-2 lg:min-h-[660px] lg:px-10 lg:gap-20
          "
        >
          <div>
            <p
              className="
                inline-flex
                mb-7 px-4 py-2
                text-xs font-bold tracking-[0.17em] text-[#8d603f]
                rounded-full border border-[#b99a7b]
                items-center gap-2 uppercase
              "
            ><Sparkles size={15} /> A little warmth in every cup</p>
            <h1
              className="
                font-serif text-[clamp(3.8rem,7vw,6.8rem)] font-semibold leading-[0.96] tracking-[-0.05em]
              "
            >Slow mornings.<br /><span
              className="
                text-[#a76640]
                italic
              "
            >Bold coffee.</span></h1>
            <p
              className="
                max-w-lg
                mt-8
                text-lg leading-8 text-[#625447]
              "
            >Thoughtful coffee, comforting bites, and a place to stay awhile. Welcome to your favorite part of the day.</p>
            <div
              className="
                flex flex-wrap
                mt-9
                gap-4
              "
            >
              <a
                href="#menu"
                className="
                  inline-flex
                  px-7 py-4
                  text-sm font-bold text-white
                  bg-[#365044]
                  rounded-full
                  items-center gap-3 transition hover:bg-[#263d33]
                "
              >Explore our menu <ArrowRight size={17} /></a>
              <a
                href="#visit"
                className="
                  inline-flex
                  px-4 py-4
                  text-sm font-bold text-[#855537]
                  items-center underline decoration-[#b68a67] underline-offset-8
                "
              >Plan a visit</a>
            </div>
            <div
              className="
                flex flex-wrap
                mt-12 pt-7
                text-sm text-[#685749]
                border-t border-[#cbb8a2]
                items-center gap-6
              "
            ><span
              className="
                flex
                items-center gap-2
              "
            ><Leaf
              size={17}
              className="
                text-[#365044]
              "
            /> Thoughtfully sourced</span><span
              className="
                flex
                items-center gap-2
              "
            ><Coffee
              size={17}
              className="
                text-[#a76640]
              "
            /> Brewed with care</span></div>
          </div>
          <div
            className="
              min-h-[420px]
              relative
              lg:min-h-[580px]
            "
          >
            <div
              className="
                bg-[#bc835b]/50
                rounded-t-[12rem] rounded-b-[2rem]
                absolute inset-0 -rotate-3
              "
            />
            <div
              className="
                overflow-hidden
                rounded-t-[12rem] rounded-b-[2rem]
                absolute inset-3
              "
            >
              <Image
                src={photos.hero}
                alt="Freshly brewed specialty coffee"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                "
              />
              <div
                className="
                  bg-gradient-to-t from-black/40 to-transparent
                  absolute inset-0
                "
              />
            </div>
            <div
              className="
                max-w-[260px]
                p-5
                bg-[#fcf8f1]
                rounded-xl
                shadow-xl
                absolute -bottom-6 left-3
                sm:-left-7
              "
            ><p
              className="
                text-[10px] font-bold tracking-[0.2em] text-[#a76640]
                uppercase
              "
            >Our daily ritual</p><p
              className="
                mt-2
                font-serif text-xl
              "
            >Good coffee. Good company. Every day.</p></div>
          </div>
        </div>
      </section>
      <section
        className="
          px-6 py-7
          text-center text-[#fff7eb]
          bg-[#365044]
        "
      ><p
        className="
          font-serif text-xl
          italic
          sm:text-2xl
        "
      >“Come for the coffee. Stay for the feeling.”</p></section>

      {/* Interactive menu */}
      <section
        id="menu"
        className="
          px-6 py-24
          scroll-mt-28
          lg:px-10
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
              max-w-2xl
              mx-auto
              text-center
            "
          >
            <p
              className="
                text-xs font-bold tracking-[0.28em] text-[#a76640]
                uppercase
              "
            >Made for your moment</p>
            <h2
              className="
                mt-4
                font-serif text-5xl
                sm:text-6xl
              "
            >Find your favorite.</h2>
            <p
              className="
                mt-5
                text-lg leading-8 text-[#6f5d4d]
              "
            >From the first sip to the last crumb, everything is made to brighten your day.</p>
          </div>
          <div
            role="group"
            aria-label="Menu categories"
            className="
              flex flex-wrap
              mt-12
              justify-center gap-3
            "
          >
            {menuCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3
                  text-sm font-bold
                  rounded-full border
                  transition
                  ${activeCategory === category ? "border-[#365044] bg-[#365044] text-white" : "border-[#cbbba7] bg-[#fffaf4] text-[#5f5143] hover:border-[#365044]"}
                `}
              >
                {category}
              </button>
            ))}
          </div>
          <div
            className="
              grid
              mt-10
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {menuItems.filter((item) => item.category === activeCategory).map((item) => (
              <article
                key={item.id}
                className="
                  flex flex-col
                  p-7
                  bg-[#fffbf6]
                  rounded-2xl border border-[#ddccbb]
                  shadow-sm
                  justify-between
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-start justify-between gap-3
                    "
                  ><h3
                    className="
                      font-serif text-2xl font-semibold
                    "
                  >{item.name}</h3><span
                    className="
                      font-bold text-[#90603d]
                      shrink-0
                    "
                  >{dollars(item.price)}</span></div>
                  <p
                    className="
                      mt-3
                      leading-7 text-[#776658]
                    "
                  >{item.description}</p>
                  {item.tag && <span
                    className="
                      inline-flex
                      mt-4 px-3 py-1
                      text-xs font-semibold text-[#875537]
                      bg-[#f2e4d5]
                      rounded-full
                    "
                  >{item.tag}</span>}
                </div>
                <div
                  className="
                    flex
                    mt-8 pt-5
                    border-t border-[#ecded0]
                    items-center justify-between gap-2
                  "
                >
                  <span
                    className="
                      text-xs font-semibold tracking-wide text-[#9a7a61]
                      uppercase
                    "
                  >Sample menu</span>
                  <button
                    type="button"
                    onClick={() => updateItem(item.id, 1)}
                    aria-label={`Add ${item.name} to sample bag`}
                    className="
                      inline-flex
                      px-4 py-2
                      text-sm font-semibold text-white
                      bg-[#365044]
                      rounded-full
                      items-center gap-2 transition hover:bg-[#263d33]
                    "
                  ><Plus size={15} /> Add to bag</button>
                </div>
              </article>
            ))}
          </div>
          <div
            className="
              mt-9
              text-center
            "
          ><button
            type="button"
            onClick={showBag}
            className="
              inline-flex
              px-6 py-3
              text-sm font-bold text-[#365044]
              rounded-full border border-[#365044]
              items-center gap-2 transition hover:bg-[#365044] hover:text-white
            "
          ><ShoppingBag size={18} /> View sample bag ({itemCount})</button></div>
        </div>
      </section>

      {/* Signature products */}
      <section
        className="
          px-6 py-24
          bg-[#e9dbc9]
          lg:px-10
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            items-center gap-12
            lg:grid-cols-2 lg:gap-20
          "
        >
          <div
            className="
              overflow-hidden
              min-h-[390px]
              rounded-3xl
              shadow-xl
              relative
              lg:min-h-[540px]
            "
          ><Image
            src={photos.coffee}
            alt="Cups of coffee shared over a table"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
            "
          /></div>
          <div>
            <p
              className="
                text-xs font-bold tracking-[0.26em] text-[#98603c]
                uppercase
              "
            >Beyond the everyday</p>
            <h2
              className="
                mt-5
                font-serif text-5xl leading-tight
              "
            >Your new favorite <span
              className="
                text-[#a76640]
                italic
              "
            >ritual.</span></h2>
            <p
              className="
                mt-6
                text-lg leading-8 text-[#6d5b4b]
              "
            >Coffee should be an experience worth slowing down for. Discover comforting classics, seasonal favorites, and the little details that make a neighborhood coffeehouse feel like home.</p>
            <a
              href="#menu"
              className="
                inline-flex
                mt-8 pb-2
                text-sm font-bold text-[#744629]
                border-b-2 border-[#98603c]
                items-center gap-2
              "
            >Explore the full menu <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="
          px-6 py-24
          scroll-mt-28
          lg:px-10
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            items-center gap-12
            lg:grid-cols-2 lg:gap-20
          "
        >
          <div
            className="
              order-2
              lg:order-1
            "
          >
            <p
              className="
                text-xs font-bold tracking-[0.26em] text-[#a76640]
                uppercase
              "
            >Our story</p>
            <h2
              className="
                mt-5
                font-serif text-5xl leading-tight
              "
            >A little space for the <span
              className="
                text-[#a76640]
                italic
              "
            >good things.</span></h2>
            <p
              className="
                mt-6
                text-lg leading-8 text-[#6d5b4b]
              "
            >Juniper & Ember is an imagined neighborhood coffee house built around the simple joy of gathering: familiar faces, warm drinks, and a welcoming place to pause.</p>
            <p
              className="
                mt-4
                leading-8 text-[#6d5b4b]
              "
            >This concept demonstrates how distinctive branding, beautiful photography, a clear menu, and simple interactions can help a local café connect with its community.</p>
            <div
              className="
                flex
                mt-7
                text-sm font-semibold text-[#365044]
                items-center gap-3
              "
            ><Leaf size={20} /> Coffee with character. Community at heart.</div>
          </div>
          <div
            className="
              order-1 overflow-hidden
              min-h-[390px]
              rounded-3xl
              relative
              lg:order-2 lg:min-h-[500px]
            "
          ><Image
            src={photos.interior}
            alt="Cozy coffeehouse setting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
            "
          /></div>
        </div>
      </section>

      {/* Visit / fictional hours */}
      <section
        id="visit"
        className="
          px-6 py-24
          text-[#fff8ef]
          bg-[#365044]
          scroll-mt-28
          lg:px-10
        "
      >
        <div
          className="
            grid
            max-w-7xl
            mx-auto
            items-center gap-14
            lg:grid-cols-2
          "
        >
          <div>
            <p
              className="
                text-xs font-bold tracking-[0.25em] text-[#e0b78e]
                uppercase
              "
            >Make yourself at home</p>
            <h2
              className="
                mt-5
                font-serif text-5xl
              "
            >Good things are brewing.</h2>
            <p
              className="
                max-w-lg
                mt-6
                text-lg leading-8 text-[#ebdfcf]
              "
            >A welcoming space for morning rituals, midday meetings, and everything in between. The details below are fictional examples for this portfolio concept.</p>
            <div
              className="
                mt-9 space-y-5
              "
            >
              <div
                className="
                  flex
                  items-start gap-4
                "
              ><Clock3
                size={22}
                className="
                  mt-1
                  text-[#e0b78e]
                  shrink-0
                "
              /><div><h3
                className="
                  font-bold
                "
              >Sample hours</h3><p
                className="
                  mt-1
                  text-[#ebdfcf]
                "
              >Monday–Friday: 6:30 AM–5 PM<br />Saturday–Sunday: 7 AM–4 PM</p></div></div>
              <div
                className="
                  flex
                  items-start gap-4
                "
              ><MapPin
                size={22}
                className="
                  mt-1
                  text-[#e0b78e]
                  shrink-0
                "
              /><div><h3
                className="
                  font-bold
                "
              >Our neighborhood</h3><p
                className="
                  mt-1
                  text-[#ebdfcf]
                "
              >Northern Nevada — fictional location</p></div></div>
            </div>
          </div>
          <div
            className="
              overflow-hidden
              min-h-[360px]
              rounded-3xl
              relative
              lg:min-h-[480px]
            "
          ><Image
            src={photos.bakery}
            alt="Coffeehouse drinks and pastries"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="
              object-cover
            "
          /></div>
        </div>
      </section>

      <footer
        className="
          px-6 py-12
          text-[#f6ebde]
          bg-[#241d19]
          lg:px-10
        "
      >
        <div
          className="
            flex flex-col
            max-w-7xl
            mx-auto pt-9
            border-t border-white/15
            justify-between gap-6
            sm:flex-row sm:items-end
          "
        >
          <div><p
            className="
              font-serif text-2xl
            "
          >Juniper & Ember</p><p
            className="
              mt-2
              text-sm text-[#c8b4a3]
            "
          >An original fictional coffeehouse concept by Rekode Digital.</p></div>
          <Link
            href="/portfolio"
            className="
              inline-flex
              text-sm font-bold text-[#e0b78e]
              items-center gap-2 hover:text-white
            "
          >More Rekode Digital concepts <ArrowRight size={16} /></Link>
        </div>
      </footer>

      {/* Fully local sample bag; does not submit, reserve, or charge anything. */}
      {cartOpen && (
        <div
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}
          className="
            z-50 flex
            p-4
            bg-black/70
            fixed inset-0 items-center justify-center
          "
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sample-bag-title"
            className="
              overflow-y-auto
              max-h-[90vh] w-full max-w-lg
              p-7
              bg-[#fcf8f1]
              rounded-3xl
              shadow-2xl
              sm:p-9
            "
          >
            <div
              className="
                flex
                items-center justify-between gap-4
              "
            ><div><p
              className="
                text-xs font-bold tracking-[0.2em] text-[#a76640]
                uppercase
              "
            >Interactive preview</p><h2
              id="sample-bag-title"
              className="
                mt-2
                font-serif text-3xl
              "
            >Your sample bag</h2></div><button
              type="button"
              onClick={() => setCartOpen(false)}
              aria-label="Close sample bag"
              className="
                p-2
                rounded-full border border-[#cfbaa2]
              "
            ><X size={21} /></button></div>
            <p
              className="
                mt-4 px-4 py-3
                text-sm leading-6 text-[#755c45]
                bg-[#f1e5d6]
                rounded-lg
              "
            >Demonstration only. No real order is placed, no personal information is collected, and no payment is processed.</p>
            {previewComplete ? (
              <div
                role="status"
                className="
                  py-12
                  text-center
                "
              ><CheckCircle2
                size={49}
                className="
                  mx-auto
                  text-[#365044]
                "
              /><h3
                className="
                  mt-5
                  font-serif text-3xl
                "
              >Preview complete!</h3><p
                className="
                  mt-3
                  leading-7 text-[#715f4e]
                "
              >This is how a sample pickup confirmation could look on a real coffee shop website. Nothing was transmitted.</p><button
                onClick={() => setCartOpen(false)}
                className="
                  mt-7 px-8 py-3
                  font-bold text-white
                  bg-[#365044]
                  rounded-full
                "
              >Close preview</button></div>
            ) : (
              <>
                {selectedItems.length === 0 ? <p
                  className="
                    py-12
                    text-center text-[#756353]
                  "
                >Your sample bag is empty. Add something from the menu to try the interaction.</p> : <div
                  className="
                    mt-6 space-y-5
                  "
                >{selectedItems.map(item => <div
                  key={item.id}
                  className="
                    flex
                    pb-5
                    border-b border-[#e6d9ca]
                    items-center justify-between gap-3
                  "
                ><div><h3
                  className="
                    font-semibold
                  "
                >{item.name}</h3><p
                  className="
                    mt-1
                    text-sm text-[#80694f]
                  "
                >{dollars(item.price)} each</p></div><div
                  className="
                    flex
                    items-center gap-3
                  "
                ><button
                  type="button"
                  aria-label={`Remove one ${item.name}`}
                  onClick={() => updateItem(item.id, -1)}
                  className="
                    p-2
                    rounded-full border border-[#cfbaa2]
                  "
                ><Minus size={16}/></button><span
                  className="
                    min-w-4
                    text-center font-bold
                  "
                >{cart[item.id]}</span><button
                  type="button"
                  aria-label={`Add one ${item.name}`}
                  onClick={() => updateItem(item.id, 1)}
                  className="
                    p-2
                    rounded-full border border-[#cfbaa2]
                  "
                ><Plus size={16}/></button></div></div>)}</div>}
                <div
                  className="
                    flex
                    mt-7 pt-5
                    text-xl font-bold
                    border-t border-[#cfbaa2]
                    justify-between
                  "
                ><span>Sample total</span><span>{dollars(orderTotal)}</span></div>
                <button
                  type="button"
                  disabled={itemCount === 0}
                  onClick={() => setPreviewComplete(true)}
                  className="
                    w-full
                    mt-6 px-6 py-4
                    font-bold text-white
                    bg-[#365044]
                    rounded-full
                    transition hover:bg-[#263d33] disabled:cursor-not-allowed disabled:opacity-40
                  "
                >Preview pickup confirmation <ArrowRight
                  size={17}
                  className="
                    inline
                    ml-2
                  "
                /></button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}


