import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import VisibilityReview from "@/components/VisibilityReview";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Founder />
      <Portfolio />
      <VisibilityReview />
      <Founder />
      <Footer />
    </main>
  );
}