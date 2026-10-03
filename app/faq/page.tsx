import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | Rekode Digital",
  description:
    "Answers to common questions about Rekode Digital websites, local visibility, maintenance, pricing, and business visibility reviews.",
};

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every business is different, so pricing depends on the size of the website, features, content, and overall scope of the project. Smaller professional websites generally start around $750, while most small-business projects fall in the $1,500–$2,500 range. More advanced websites or custom functionality may cost more. After learning about your business, we will provide a clear recommendation and price before any work begins.",
  },
  {
    question: "Do I need a brand-new website?",
    answer:
      "Not necessarily. If your current website has a solid foundation, we may be able to improve the design, messaging, mobile experience, calls to action, or overall customer experience without starting over. Our goal is to recommend what actually makes sense for your business — not rebuild something simply because we can.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical small-business website can usually be completed within a few weeks once we have the necessary information, photos, services, and content. Larger or more customized projects may take longer. We will establish expectations and a project timeline before development begins.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Rekode Digital helps businesses improve their overall online presence. That can include websites, Google Business Profile optimization, local visibility, branding, contact and lead-generation tools, business email setup, digital consulting, and other practical technology solutions.",
  },
  {
    question: "Can you help my business show up better on Google?",
    answer:
      "Yes. We can review your Google Business Profile, business information, website, services, photos, reviews, local search presence, and other factors that affect how customers find and evaluate your business online. While no company can guarantee a specific Google ranking, we can identify opportunities to improve your local visibility.",
  },
  {
    question: "What is a Business Visibility Review?",
    answer:
      "Our complimentary Business Visibility Review looks at your business from the perspective of a potential customer. We review areas such as your website, Google presence, mobile experience, reviews, contact process, and overall first impression. We then identify areas that are working well and opportunities that may deserve attention.",
  },
  {
    question: "Is the Business Visibility Review really free?",
    answer:
      "Yes. There is no charge for the initial Business Visibility Review and no obligation to purchase anything afterward. The purpose is to give you a clearer understanding of how your business appears online and where potential improvements may exist.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Not for a standard website project. Project work is clearly defined before we begin. If you choose ongoing website care, maintenance, or visibility services afterward, those services can be discussed separately so you know exactly what is included.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "You can manage things independently, or Rekode Digital can continue helping with website maintenance, updates, content changes, technical support, and ongoing digital improvements. The goal is to make sure your website does not become another neglected item on your to-do list.",
  },
  {
    question: "Will my website work on phones and tablets?",
    answer:
      "Yes. Modern customers frequently visit business websites from mobile devices, so responsive design is an important part of every website we build. Your site will be designed to work across phones, tablets, laptops, and desktop computers.",
  },
  {
    question: "Do you work with businesses outside Winnemucca?",
    answer:
      "Yes. Rekode Digital is based in Winnemucca, Nevada, and we enjoy working with local and rural businesses, but digital services can be provided to businesses throughout Nevada and beyond.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Usually we begin with a conversation about your business, your customers, the services you want to grow, what is currently working, and what you would like to improve. From there, we can recommend the next steps and determine what information, photos, branding, or content will be needed.",
  },
];

export default function FAQPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      {/* Hero */}
      <section
        className="
          px-6 pt-32 pb-16
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
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Rekode Digital
          </p>

          <h1
            className="
              mt-5
              text-4xl font-bold tracking-tight
              sm:text-6xl
            "
          >
            Frequently Asked Questions
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              text-lg leading-8 text-slate-300
            "
          >
            Straightforward answers to some of the questions business owners
            commonly have before working with Rekode Digital.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="
          px-6 pb-24
          lg:px-8
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto space-y-4
          "
        >
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="
                overflow-hidden
                bg-[#09182b]
                rounded-xl border border-white/10
                group
              "
            >
              <summary
                className="
                  flex
                  px-6 py-5
                  font-semibold
                  cursor-pointer
                  list-none items-center justify-between gap-6 transition hover:text-[#C9784A]
                "
              >
                <span>{faq.question}</span>

                <span
                  className="
                    flex
                    h-8 w-8
                    text-xl text-[#C9784A]
                    rounded-full border border-[#C9784A]/30
                    transition-transform
                    shrink-0 items-center justify-center group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <div
                className="
                  px-6 pb-6
                "
              >
                <p
                  className="
                    leading-8 text-slate-400
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          px-6 pb-28
          lg:px-8
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto px-8 py-12
            text-center
            bg-[#09182b]
            rounded-2xl border border-[#C9784A]/30
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.25em] text-[#C9784A]
              uppercase
            "
          >
            Still Have Questions?
          </p>

          <h2
            className="
              mt-4
              text-3xl font-bold
            "
          >
            Let&apos;s talk about your business.
          </h2>

          <p
            className="
              max-w-xl
              mx-auto mt-4
              leading-7 text-slate-400
            "
          >
            Start with a complimentary Business Visibility Review and we&apos;ll
            take a look at where your business stands online and where the
            biggest opportunities may be.
          </p>

          <div
            className="
              flex flex-col
              mt-8
              gap-4
              sm:flex-row sm:justify-center
            "
          >
            <Link
              href="/#visibility-review"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                bg-[#C9784A]
                rounded-md
                items-center justify-center transition hover:bg-[#D8895B]
              "
            >
              Get a Free Visibility Review
            </Link>

            <a
              href="tel:+17753755765"
              className="
                inline-flex
                px-7 py-4
                font-semibold
                rounded-md border border-white/20
                items-center justify-center transition hover:border-[#C9784A] hover:text-[#C9784A]
              "
            >
              Call 775-375-5765
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
