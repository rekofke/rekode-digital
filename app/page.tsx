import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import VisibilityReview from "@/components/VisibilityReview";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import CustomerPerspective from "@/components/CustomerPerspective";
import RekodeReport from "@/components/RekodeReport";
import type { Metadata } from "next";


const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://rekodedigital.com/#business",
  name: "Rekode Digital",
  url: "https://rekodedigital.com",
  description:
    "Website design, local SEO, branding, digital marketing, and digital solutions for small businesses in Northern Nevada.",
  telephone: "+1-775-375-5765",
  email: "getrekode@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winnemucca",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "Winnemucca, Nevada" },
    { "@type": "Place", name: "Northern Nevada" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Website Design" },
      { "@type": "OfferCatalog", name: "Local SEO" },
      { "@type": "OfferCatalog", name: "Branding" },
      { "@type": "OfferCatalog", name: "Digital Marketing" },
    ],
  },
};


e
export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />



import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
