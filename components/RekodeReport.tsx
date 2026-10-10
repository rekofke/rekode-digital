
"use client";

import { useEffect } from "react";

export default function RekodeReport() {
  useEffect(() => {
    const scriptId = "hubspot-rekode-newsletter";

    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://js-na2.hsforms.net/forms/embed/247640201.js";
    script.defer = true;

    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="rekode-report"
      className="
        px-6 py-24
        text-white
        bg-[#071426]
      "
    >
      <div
        className="
          grid
          max-w-7xl
          mx-auto
          items-center gap-12
          lg:grid-cols-2
        "
      >
        <div>
          <p
            className="
              mb-4
              text-sm font-bold tracking-[0.2em] text-[#C9784A]
              uppercase
            "
          >
            Free Small-Business Newsletter
          </p>

          <h2
            className="
              mb-6
              text-4xl font-bold
              md:text-5xl
            "
          >
            THE REKODE{" "}
            <span
              className="
                text-[#C9784A]
              "
            >REPORT</span>
          </h2>

          <p
            className="
              mb-5
              text-xl font-semibold
            "
          >
            Smarter Business. Stronger Communities.
          </p>

          <p
            className="
              mb-7
              text-lg leading-relaxed text-slate-300
            "
          >
            Practical ideas for hardworking business owners.
            Twice a month, we share useful technology,
            marketing tips, local business spotlights, and
            ways to help your business get found and grow.
          </p>

          <div
            className="
              space-y-4
              text-slate-300
            "
          >
            {[
              "Google and local visibility tips",
              "Free business tools and technology",
              "Website improvements that make a difference",
              "Northern Nevada business spotlights",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  gap-3
                "
              >
                <span
                  className="
                    font-bold text-[#C9784A]
                  "
                >
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            p-6
            bg-[#12263D]
            rounded-2xl border border-[#C9784A]/30
            md:p-10
          "
        >
          <h3
            className="
              mb-4
              text-2xl font-bold
            "
          >
            Join The Rekode Report
          </h3>

          <p
            className="
              mb-6
              text-slate-300
            "
          >
            Two useful emails a month. Free to subscribe.
          </p>

          <div
            data-region="na2"
            data-form-id="d3da4003-f40a-493e-adc5-045053ceda95"
            data-portal-id="247640201"
            className="
              hs-form-frame
            "
          />

          <p
            className="
              mt-6
              text-sm text-slate-400
            "
          >
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
