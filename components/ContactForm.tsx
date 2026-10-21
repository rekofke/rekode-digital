
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const allowedPackages = [
  "Starter Website",
  "Business Growth",
  "Custom Digital Solutions",
];

const fieldStyle =
  "w-full rounded-md border border-white/15 bg-[#071426] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#C9784A]";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [selectedPackage, setSelectedPackage] = useState("");
  const notificationRef = useRef<HTMLDivElement>(null);

  // Read the selected package from the Pricing page URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const packageName = params.get("package");

    if (packageName && allowedPackages.includes(packageName)) {
      setSelectedPackage(packageName);
    }
  }, []);

  // Scroll to the confirmation after it appears.
  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const notification = notificationRef.current;

    if (notification) {
      notification.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      notification.focus({ preventScroll: true });
    }
  }, [status]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const originalMessage = String(
      formData.get("message") || ""
    );

    const fullMessage = selectedPackage
      ? "Package requested: " +
        selectedPackage +
        "\n\n" +
        originalMessage
      : originalMessage;

    const submission = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      service: formData.get("service"),
      message: fullMessage,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        mt-8 space-y-6
      "
    >
      {/* SELECTED WEBSITE PACKAGE */}
      {selectedPackage && (
        <div
          className="
            p-5
            bg-[#C9784A]/10
            rounded-xl border border-[#C9784A]/40
          "
        >
          <p
            className="
              text-sm font-semibold text-[#C9784A]
            "
          >
            Your Selected Package
          </p>

          <p
            className="
              mt-2
              text-xl font-bold text-white
            "
          >
            {selectedPackage}
          </p>

          <p
            className="
              mt-2
              text-sm leading-6 text-slate-300
            "
          >
            Tell us about your project and we'll prepare
            a personalized quote.
          </p>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {status === "success" && (
        <div
          ref={notificationRef}
          tabIndex={-1}
          role="status"
          className="
            p-6
            text-center
            bg-green-500/15
            rounded-xl border-2 border-green-500/50
            scroll-mt-28 outline-none
          "
        >
          <CheckCircle
            size={42}
            className="
              mx-auto
              text-green-400
            "
          />

          <h3
            className="
              mt-4
              text-2xl font-bold text-green-300
            "
          >
            Message Sent Successfully!
          </h3>

          <p
            className="
              mt-3
              leading-7 text-slate-200
            "
          >
            Thank you for contacting Rekode Digital.
            Your message has been sent, and we look
            forward to speaking with you!
          </p>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div
          ref={notificationRef}
          tabIndex={-1}
          role="alert"
          className="
            p-6
            text-center
            bg-red-500/10
            rounded-xl border border-red-500/40
            scroll-mt-28 outline-none
          "
        >
          <AlertCircle
            size={36}
            className="
              mx-auto
              text-red-400
            "
          />

          <h3
            className="
              mt-3
              text-xl font-bold text-red-300
            "
          >
            Message Could Not Be Sent
          </h3>

          <p
            className="
              mt-3
              leading-7 text-slate-200
            "
          >
            Please try again or contact us directly
            at getrekode@gmail.com.
          </p>
        </div>
      )}

      {/* NAME AND BUSINESS */}
      <div
        className="
          grid
          gap-5
          sm:grid-cols-2
        "
      >
        <div>
          <label
            htmlFor="contact-name"
            className="
              block
              mb-2
              text-sm text-slate-300
            "
          >
            Your Name *
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Your full name"
            className={fieldStyle}
          />
        </div>

        <div>
          <label
            htmlFor="contact-business"
            className="
              block
              mb-2
              text-sm text-slate-300
            "
          >
            Business Name
          </label>

          <input
            id="contact-business"
            name="business"
            type="text"
            maxLength={150}
            placeholder="Your business name"
            className={fieldStyle}
          />
        </div>
      </div>

      {/* EMAIL AND PHONE */}
      <div
        className="
          grid
          gap-5
          sm:grid-cols-2
        "
      >
        <div>
          <label
            htmlFor="contact-email"
            className="
              block
              mb-2
              text-sm text-slate-300
            "
          >
            Email Address *
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@business.com"
            className={fieldStyle}
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="
              block
              mb-2
              text-sm text-slate-300
            "
          >
            Phone Number
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            placeholder="(775) 555-1234"
            className={fieldStyle}
          />
        </div>
      </div>

      {/* WEBSITE */}
      <div>
        <label
          htmlFor="contact-website"
          className="
            block
            mb-2
            text-sm text-slate-300
          "
        >
          Website or Social Media Page
        </label>

        <input
          id="contact-website"
          name="website"
          type="text"
          maxLength={300}
          placeholder="yourbusiness.com"
          className={fieldStyle}
        />
      </div>

      {/* SERVICE SELECTION */}
      <div>
        <label
          htmlFor="contact-service"
          className="
            block
            mb-2
            text-sm text-slate-300
          "
        >
          What Can We Help With?
        </label>

        <select
          id="contact-service"
          name="service"
          defaultValue=""
          className={fieldStyle}
        >
          <option value="">Select a service</option>

          <option value="Website Design or Redesign">
            Website Design or Redesign
          </option>

          <option value="Google Business Profile / Local SEO">
            Google Business Profile / Local SEO
          </option>

          <option value="Branding">
            Branding
          </option>

          <option value="Social Media / Digital Marketing">
            Social Media / Digital Marketing
          </option>

          <option value="Other Digital Solutions">
            Other Digital Solutions
          </option>

          <option value="General Question">
            General Question
          </option>
        </select>
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className="
            block
            mb-2
            text-sm text-slate-300
          "
        >
          Tell Us About Your Project *
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Tell us about your business, your goals, or what you'd like help with..."
          className={fieldStyle}
        />
      </div>

      {/* SEND BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          flex
          w-full
          px-6 py-4
          font-semibold text-white
          bg-[#C9784A]
          rounded-md
          items-center justify-center gap-2 transition hover:bg-[#D8895B] disabled:cursor-not-allowed disabled:opacity-60
        "
      >
        <Send size={18} />

        {isSubmitting
          ? "Sending Message..."
          : "Send Message"}
      </button>

      {/* PRIVACY NOTICE */}
      <p
        className="
          text-center text-xs leading-6 text-slate-400
        "
      >
        Your information will only be used to respond
        to your inquiry. We respect your privacy.
      </p>
    </form>
  );
}
