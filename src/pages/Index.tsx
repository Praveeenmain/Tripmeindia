import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickServices } from "@/components/QuickServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickServices />
      <WhyChooseUs />
      <Services />
      <Packages />
      <ContactForm />
      <Testimonials />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
