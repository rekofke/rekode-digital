
"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  SearchCheck,
} from "lucide-react";

const inputClass =
  "w-full rounded-md border border-white/15 bg-[#09182b] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#C9784A]";

const reviewPoints = [
  {
    title: "Local search visibility",
    detail:
      "How easily customers can find your business in Google and local search results.",
  },
  {
    title: "Website and mobile experience",
    detail:
      "How clearly your website presents your business and works on a phone.",
  },
  {
    title: "Trust and first impressions",
    detail:
      "Whether your online presence helps customers feel confident contacting you.",
  },
  {
    title: "Next-step opportunities",
    detail:
      "Practical ways to improve your online visibility and customer experience.",
  },
];

export default function VisibilityReview() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "idle") {
      statusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      statusRef.current?.focus({
        preventScroll: true,
      });
    }
  }, [status]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submission = {
      name: String(formData.get("name") || ""),
      business: String(formData.get("business") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(
        "/api/visibility-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Visibility review request failed"
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(
        "Visibility review submission error:",
        error
      );

      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="visibility-review"
      className="
        overflow-hidden
        px-6 py-24
        text-white
        bg-[#071426]
        relative scroll-mt-20
        lg:px-8
      "
    >
      <div
        aria-hidden="true"
        className="
          h-[650px] w-[650px]
          bg-[#C9784A]/10
          rounded-full
          pointer-events-none
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[150px]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
        "
      >
        {/* Section Heading */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-sm font-semibold tracking-[0.23em] text-[#C9784A]
              uppercase
            "
          >
            Free Business Visibility Review
          </p>

          <h2
            className="
              mt-5
              text-4xl font-bold leading-tight tracking-tight
              sm:text-5xl
            "
          >
            How Easily Can Customers
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              Find Your Business Online?
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              text-lg leading-8 text-slate-300
            "
          >
            Get a personalized look at your business&apos;s
            online presence and discover practical
            opportunities to improve visibility,
            credibility, and customer experience.
          </p>

          <p
            className="
              mt-4
              text-sm font-semibold text-slate-300
            "
          >
            No obligation. No high-pressure sales pitch.
          </p>
        </div>

        {/* Main Content */}

        <div
          className="
            grid overflow-hidden
            mt-14
            bg-[#09182b]
            rounded-2xl border border-[#C9784A]/30
            lg:grid-cols-5
          "
        >
          {/* Left Column */}

          <div
            className="
              p-8
              sm:p-10
              lg:p-12 lg:col-span-2
            "
          >
            <div
              className="
                inline-flex
                px-4 py-2
                text-xs font-semibold tracking-wider text-[#E5A77C]
                bg-[#C9784A]/10
                rounded-full
                items-center gap-2 uppercase
              "
            >
              <SearchCheck size={17} />
              Your Free Review
            </div>

            <h3
              className="
                mt-6
                text-2xl font-bold
              "
            >
              Here&apos;s what we&apos;ll look at
            </h3>

            <div
              className="
                mt-8 space-y-7
              "
            >
              {reviewPoints.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-start gap-3
                  "
                >
                  <CheckCircle2
                    size={23}
                    className="
                      mt-0.5
                      text-[#C9784A]
                      shrink-0
                    "
                  />

                  <div>
                    <h4
                      className="
                        font-semibold text-white
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm leading-6 text-slate-400
                      "
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
                mt-10 pt-8
                border-t border-white/10
              "
            >
              <h4
                className="
                  font-semibold
                "
              >
                What happens next?
              </h4>

              <p
                className="
                  mt-2
                  leading-7 text-slate-400
                "
              >
                Share a few details below. Rekode Digital
                will review your online presence and
                follow up with personalized observations
                and practical next steps. You don&apos;t
                need an existing website to request
                a review.
              </p>
            </div>
          </div>

          {/* Right Column */}

          <div
            className="
              p-8
              bg-[#06111f]
              border-t border-white/10
              sm:p-10
              lg:p-12 lg:border-l lg:border-t-0 lg:col-span-3
            "
          >
            <h3
              className="
                text-2xl font-bold
              "
            >
              Request Your Free Review
            </h3>

            <p
              className="
                mt-2
                text-sm leading-6 text-slate-400
              "
            >
              Fields marked * are required.
            </p>

            {/* Success Message */}

            {status === "success" && (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                className="
                  mt-6 p-6
                  text-center
                  bg-emerald-400/10
                  rounded-xl border-2 border-emerald-400/40
                  scroll-mt-28 outline-none
                "
              >
                <CheckCircle2
                  size={38}
                  className="
                    mx-auto
                    text-emerald-400
                  "
                />

                <h4
                  className="
                    mt-3
                    text-xl font-bold text-emerald-300
                  "
                >
                  Request Sent Successfully!
                </h4>

                <p
                  className="
                    mt-2
                    text-sm leading-6 text-slate-200
                  "
                >
                  Thank you! Your visibility review
                  request has been sent to Rekode Digital.
                  We&apos;ll follow up using the contact
                  details you provided.
                </p>
              </div>
            )}

            {/* Error Message */}

            {status === "error" && (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="alert"
                className="
                  mt-6 p-6
                  text-center
                  bg-red-400/10
                  rounded-xl border border-red-400/40
                  scroll-mt-28 outline-none
                "
              >
                <AlertCircle
                  size={34}
                  className="
                    mx-auto
                    text-red-400
                  "
                />

                <h4
                  className="
                    mt-3
                    text-lg font-bold text-red-300
                  "
                >
                  We Couldn&apos;t Send Your Request
                </h4>

                <p
                  className="
                    mt-2
                    text-sm leading-6 text-slate-200
                  "
                >
                  Please try again, or email
                  getrekode@gmail.com directly.
                  Your form entries are still here.
                </p>
              </div>
            )}

            {/* Review Form */}

            <form
              onSubmit={handleSubmit}
              className="
                grid
                mt-7
                gap-5
                sm:grid-cols-2
              "
            >
              <div>
                <label
                  htmlFor="review-name"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Your Name *
                </label>

                <input
                  id="review-name"
                  name="name"
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="review-business"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Business Name *
                </label>

                <input
                  id="review-business"
                  name="business"
                  type="text"
                  required
                  maxLength={150}
                  placeholder="Your business name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="review-email"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Email Address *
                </label>

                <input
                  id="review-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="you@business.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="review-phone"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Phone Number
                </label>

                <input
                  id="review-phone"
                  name="phone"
                  type="tel"
                  maxLength={40}
                  autoComplete="tel"
                  placeholder="(775) 555-1234"
                  className={inputClass}
                />
              </div>

              <div
                className="
                  sm:col-span-2
                "
              >
                <label
                  htmlFor="review-website"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Website or Social Media Page (optional)
                </label>

                <input
                  id="review-website"
                  name="website"
                  type="text"
                  maxLength={300}
                  placeholder="yourbusiness.com or a social media page"
                  className={inputClass}
                />

                <p
                  className="
                    mt-2
                    text-xs text-slate-400
                  "
                >
                  No website? That&apos;s okay.
                  You can leave this blank.
                </p>
              </div>

              <div
                className="
                  sm:col-span-2
                "
              >
                <label
                  htmlFor="review-message"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  What would you like to improve? (optional)
                </label>

                <textarea
                  id="review-message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  placeholder="Tell us about your business or anything you're concerned about online..."
                  className={inputClass}
                />
              </div>

              <div
                className="
                  sm:col-span-2
                "
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    flex
                    w-full
                    px-7 py-4
                    font-semibold text-white
                    bg-[#C9784A]
                    rounded-md
                    items-center justify-center gap-2 transition hover:bg-[#D8895B] disabled:cursor-not-allowed disabled:opacity-60
                  "
                >
                  {isSubmitting
                    ? "Sending Your Request..."
                    : "Request My Free Visibility Review"}

                  {!isSubmitting && (
                    <ArrowRight size={18} />
                  )}
                </button>

                <p
                  className="
                    mt-4
                    text-center text-xs leading-6 text-slate-400
                  "
                >
                  We&apos;ll use the information you
                  provide only to respond to your request.
                  No obligation.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Direct Contact */}

        <p
          className="
            mt-8
            text-center text-sm text-slate-400
          "
        >
          Prefer email?{" "}
          <a
            href="mailto:getrekode@gmail.com"
            className="
              font-semibold text-[#C9784A]
              hover:text-[#E5A77C]
            "
          >
            getrekode@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
