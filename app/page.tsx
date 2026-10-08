import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import VisibilityReview from "@/components/VisibilityReview";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import CustomerPerspective from "@/components/CustomerPerspective";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <CustomerPerspective />
      <About />
      <Founder />
      <Portfolio />
      <VisibilityReview />
      <Footer />
    </main>
  );
}