import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BatagorSection from "@/components/BatagorSection";
import KitchenSection from "@/components/KitchenSection";
import CateringSection from "@/components/CateringSection";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BatagorSection />
        <KitchenSection />
        <CateringSection />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}