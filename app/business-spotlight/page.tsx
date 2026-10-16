
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Local Business Spotlight | Rekode Digital",
  description:
    "Nominate a local business in Winnemucca or Northern Nevada for The Rekode Report's complimentary Local Business Spotlight.",
};

export default function BusinessSpotlightPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <section
        className="
          max-w-4xl
          mx-auto px-6 py-16
          md:py-24
        "
      >
        <div
          className="
            text-center
          "
        >
          <p
            className="
              mb-4
              font-semibold tracking-[0.2em] text-[#C9784A]
              uppercase
            "
          >
            The Rekode Report Presents
          </p>

          <h1
            className="
              text-4xl font-bold leading-tight
              md:text-6xl
            "
          >
            Local Business{" "}
            <span
              className="
                text-[#C9784A]
              "
            >Spotlight</span>
          </h1>

          <p
            className="
              mt-6
              text-2xl font-semibold
            "
          >
            You Built the Business.
            <br />
            We'll Tell Your Story.
          </p>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              text-lg leading-relaxed text-gray-300
            "
          >
            Northern Nevada is home to hardworking business owners
            with stories worth sharing. Help us recognize the
            entrepreneurs, craftspeople, and local businesses
            that make our communities special.
          </p>
        </div>

        <div
          className="
            grid
            mt-12
            text-center
            gap-4
            md:grid-cols-3
          "
        >
          {[
            ["01", "Nominate", "Tell us about a local business."],
            ["02", "Connect", "We reach out to selected businesses."],
            ["03", "Celebrate", "We share their stories with the community."],
          ].map(([number, heading, description]) => (
            <div
              key={number}
              className="
                p-6
                bg-white/5
                rounded-xl border border-[#C9784A]/30
              "
            >
              <p
                className="
                  text-2xl font-bold text-[#C9784A]
                "
              >
                {number}
              </p>
              <h2
                className="
                  mt-2
                  text-xl font-semibold
                "
              >{heading}</h2>
              <p
                className="
                  mt-2
                  text-sm text-gray-300
                "
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        <section
          aria-labelledby="nomination-heading"
          className="
            mt-14 p-6
            text-[#071426]
            bg-white
            rounded-2xl
            shadow-xl
            md:p-10
          "
        >
          <h2
            id="nomination-heading"
            className="
              mb-3
              text-center text-3xl font-bold
            "
          >
            Nominate a Business
          </h2>

          <p
            className="
              mb-8
              text-center text-gray-600
            "
          >
            Know a Northern Nevada business that deserves recognition?
            Tell us about them below. Nominations are free.
          </p>

          <Script
            src="https://js-na2.hsforms.net/forms/embed/247640201.js"
            strategy="afterInteractive"
          />

          <div
            data-region="na2"
            data-form-id="0341812e-420d-44e6-9178-4b8e4b5e4214"
            data-portal-id="247640201"
            className="
              hs-form-frame
            "
          />
        </section>

        <p
          className="
            mt-10
            text-center text-sm text-gray-400
          "
        >
          Presented by Rekode Digital
          <br />
          Hometown Values. Modern Solutions.
        </p>
      </section>
    </main>
  );
}
