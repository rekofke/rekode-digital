
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import VisibilityReview from "@/components/VisibilityReview";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Business Visibility Review",
  description:
    "Request a free Business Visibility Review from Rekode Digital in Winnemucca, Nevada. Discover opportunities to improve your website, Google presence, and local visibility.",
  alternates: {
    canonical: "/free-visibility-review",
  },
  openGraph: {
    title: "Free Business Visibility Review | Rekode Digital",
    description:
      "Find out how your business looks online. Get a free, personalized visibility review from Rekode Digital.",
    url: "/free-visibility-review",
  },
};

export default function FreeVisibilityReviewPage() {
  return (
    <main
      className="
        min-h-screen
        text-white
        bg-[#071426]
      "
    >
      <Navbar />

      <div
        className="
          pt-20
        "
      >
        <VisibilityReview />
      </div>

      <Footer />
    </main>
  );
}
