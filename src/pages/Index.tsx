import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import LoanProducts from "@/components/landing/LoanProducts";
import EMICalculator from "@/components/landing/EMICalculator";
import TrustIndicators from "@/components/landing/TrustIndicators";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <ProcessTimeline />
        <LoanProducts />
        <EMICalculator />
        <TrustIndicators />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
