
"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const fieldStyle =
    "w-full rounded-md border border-white/15 bg-[#071426] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#C9784A]";

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
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
      service: formData.get("service"),
      message: formData.get("message"),
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

      setStatus("success");
      form.reset();
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

      {/* SUBMIT BUTTON */}
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

        {isSubmitting ? "Sending Message..." : "Send Message"}
      </button>

      {/* SUCCESS MESSAGE */}
      {status === "success" && (
        <div
          role="status"
          className="
            flex
            p-4
            text-green-300
            bg-green-500/10
            rounded-lg border border-green-500/30
            items-start gap-3
          "
        >
          <CheckCircle
            size={22}
            className="
              shrink-0
            "
          />
          <p>
            Your message was sent successfully!
            Thank you for contacting Rekode Digital.
          </p>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div
          role="alert"
          className="
            flex
            p-4
            text-red-300
            bg-red-500/10
            rounded-lg border border-red-500/30
            items-start gap-3
          "
        >
          <AlertCircle
            size={22}
            className="
              shrink-0
            "
          />
          <p>
            Your message could not be sent.
            Please try again or email getrekode@gmail.com.
          </p>
        </div>
      )}

      {/* PRIVACY NOTICE */}
      <p
        className="
          text-center text-xs leading-6 text-slate-400
        "
      >
        Your information will only be used to respond to your inquiry.
        We respect your privacy.
      </p>
    </form>
  );
}
