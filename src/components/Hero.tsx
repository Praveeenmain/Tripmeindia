import { Phone, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tirupati.jpg";

export const Hero = () => {
  const phoneNumber = "919959969880"; // Updated number
  const whatsappMessage = encodeURIComponent("Hi, I want to book a cab in Tirupati");

  return (
    <section 
      className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      style={{
        // Ensure the section takes full viewport on all devices
        minHeight: '100vh',
        height: 'auto'
      }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-scroll sm:bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(22, 93, 206, 0.75) 0%, rgba(22, 93, 206, 0.65) 50%, rgba(22, 93, 206, 0.8) 100%), url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // Ensure image covers the entire area on all devices
          minHeight: '100%',
          width: '100%'
        }}
      />
      
      {/* Additional overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
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
              <a href="#packages" aria-label="View all tour packages">
                <Package className="w-5 h-5" />
                View Our All Packages
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
