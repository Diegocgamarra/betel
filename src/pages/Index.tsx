
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Investment from "@/components/Investment";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Services />
      <ClientLogos />
      <Investment />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
