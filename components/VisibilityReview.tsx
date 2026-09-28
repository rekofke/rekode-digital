"use client";

import { FormEvent, useState } from "react";

export default function VisibilityReview() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submission = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/visibility-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
    console.error("Visibility review submission error:", error);
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
        px-6 py-28
        text-white
        bg-[#071426]
        relative
        lg:px-8
      "
    >
      {/* Background glow */}
      <div
        className="
          h-[650px] w-[650px]
          bg-[#C9784A]/10
          rounded-full
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
        {/* Heading */}
        <div
          className="
            max-w-3xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              mb-4
              text-sm font-semibold tracking-[0.3em] text-[#C9784A]
              uppercase
            "
          >
            Free Business Visibility Review
          </p>

          <h2
            className="
              text-4xl font-bold leading-tight tracking-tight
              sm:text-5xl
            "
          >
            How easy is it for customers
            <span
              className="
                block
                text-[#C9784A]
              "
            >
              to find and choose you?
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-7
              text-lg leading-8 text-slate-300
            "
          >
            Tell us a little about your business and we'll take a look at your
            online presence and identify practical opportunities to improve it.
          </p>
        </div>

        <div
          className="
            grid overflow-hidden
            mt-14
            bg-[#09182b]
            rounded-2xl border border-[#C9784A]/30
            lg:grid-cols-5
          "
        >
          {/* What we'll review */}
          <div
            className="
              p-8
              sm:p-10
              lg:p-12 lg:col-span-2
            "
          >
            <p
              className="
                text-sm font-semibold tracking-[0.2em] text-[#C9784A]
                uppercase
              "
            >
              What We'll Review
            </p>

            <div
              className="
                mt-8 space-y-6
              "
            >
              {[
                "Your website and mobile experience",
                "How your business appears in local search",
                "Customer trust and first impressions",
                "Calls-to-action and contact options",
                "Opportunities competitors may be using",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-7 w-7
                      mt-0.5
                      text-sm font-bold text-[#C9784A]
                      bg-[#C9784A]/15
                      rounded-full
                      shrink-0 items-center justify-center
                    "
                  >
                    ✓
                  </div>

                  <p
                    className="
                      leading-7 text-slate-300
                    "
                  >{item}</p>
                </div>
              ))}
            </div>

            <div
              className="
                mt-10 pt-8
                border-t border-white/10
              "
            >
              <p
                className="
                  font-semibold text-white
                "
              >
                No pressure. No obligation.
              </p>

              <p
                className="
                  mt-2
                  leading-7 text-slate-400
                "
              >
                Just useful feedback about where your business stands online
                and what could make the biggest difference.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="
              p-8
              bg-[#06111f]
              border-t border-white/10
              sm:p-10
              lg:p-12 lg:border-l lg:border-t-0 lg:col-span-3
            "
          >
            <form
              onSubmit={handleSubmit}
              className="
                grid
                gap-6
                sm:grid-cols-2
              "
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  className="
                    w-full
                    px-4 py-3.5
                    text-white
                    bg-[#09182b]
                    rounded-md border border-white/10
                    outline-none transition placeholder:text-slate-600 focus:border-[#C9784A]
                  "
                />
              </div>

              {/* Business */}
              <div>
                <label
                  htmlFor="business"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Business Name *
                </label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  placeholder="Your Business"
                  className="
                    w-full
                    px-4 py-3.5
                    text-white
                    bg-[#09182b]
                    rounded-md border border-white/10
                    outline-none transition placeholder:text-slate-600 focus:border-[#C9784A]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Email *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@business.com"
                  className="
                    w-full
                    px-4 py-3.5
                    text-white
                    bg-[#09182b]
                    rounded-md border border-white/10
                    outline-none transition placeholder:text-slate-600 focus:border-[#C9784A]
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(775) 555-1234"
                  className="
                    w-full
                    px-4 py-3.5
                    text-white
                    bg-[#09182b]
                    rounded-md border border-white/10
                    outline-none transition placeholder:text-slate-600 focus:border-[#C9784A]
                  "
                />
              </div>

              {/* Website */}
              <div
                className="
                  sm:col-span-2
                "
              >
                <label
                  htmlFor="website"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Website or Social Page
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="yourbusiness.com"
                  className="
                    w-full
                    px-4 py-3.5
                    text-white
                    bg-[#09182b]
                    rounded-md border border-white/10
                    outline-none transition placeholder:text-slate-600 focus:border-[#C9784A]
                  "
                />
              </div>

              {/* Message */}
              <div
                className="
                  sm:col-span-2
                "
              >
                <label
                  htmlFor="message"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  What would you like help with?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your business or what you'd like to improve..."
                  className="
                    w-full
                    px-4 py-3.5
                    text-white
                    bg-[#09182b]
                    rounded-md border border-white/10
                    resize-none
                    outline-none transition placeholder:text-slate-600 focus:border-[#C9784A]
                  "
                />
              </div>

              {/* Submit */}
              <div
                className="
                  sm:col-span-2
                "
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    px-7 py-4
                    font-semibold text-white
                    bg-[#C9784A]
                    rounded-md
                    transition duration-300 hover:-translate-y-0.5 hover:bg-[#D8895B] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0
                  "
                >
                  {isSubmitting
                    ? "Sending Request..."
                    : "Request My Free Visibility Review"}
                </button>

                {/* Success message */}
                {status === "success" && (
                  <div
                    role="status"
                    className="
                      mt-4 px-4 py-3
                      text-center text-sm text-emerald-300
                      bg-emerald-400/10
                      rounded-md border border-emerald-400/30
                    "
                  >
                    ✓ Thanks! Your request has been received. We'll be in touch
                    soon.
                  </div>
                )}

                {/* Error message */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="
                      mt-4 px-4 py-3
                      text-center text-sm text-red-300
                      bg-red-400/10
                      rounded-md border border-red-400/30
                    "
                  >
                    We couldn't send your request. Please try again or email us
                    directly at getrekode@gmail.com.
                  </div>
                )}

                <p
                  className="
                    mt-4
                    text-center text-xs leading-5 text-slate-500
                  "
                >
                  Your information will only be used to respond to your request.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Direct contact */}
        <p
          className="
            mt-8
            text-center text-sm text-slate-500
          "
        >
          Prefer email?{" "}
          <a
            href="mailto:getrekode@gmail.com"
            className="
              text-[#C9784A]
              transition hover:text-[#D8895B]
            "
          >
            getrekode@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}