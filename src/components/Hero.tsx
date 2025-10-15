import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tirupati.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hi, I want to book a cab in Tirupati");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22, 93, 206, 0.85) 0%, rgba(22, 93, 206, 0.6) 100%), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="BookMyToursIndia.com Logo" 
              className="w-[200px] md:w-[250px] h-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Affordable & Reliable Taxi Services in <span className="text-secondary">Tirupati & Tirumala</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-medium">
            Book trusted cabs for your temple visits, airport transfers, and outstation trips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              variant="hero"
              className="gap-3 h-14 px-8 text-base"
              asChild
            >
              <a href={`tel:+${phoneNumber}`}>
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="cta"
              className="gap-3 h-14 px-8 text-base"
              asChild
            >
              <a 
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span className="font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span className="font-medium">Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <span className="font-medium">Clean & Comfortable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
