import { Phone, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tirumala.png";
export const Hero = () => {
  const phoneNumber = "919959969880"; // Updated number
  const whatsappMessage = encodeURIComponent("Hi, I want to book a cab in Tirupati");


  return (
    <section
      className="relative min-h-[60vh] md:min-h-[85vh] lg:min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Desktop Background Image */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Mobile: Warm background color to match temple */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600" />

      {/* Mobile: Temple Image at Top */}
      <div className="md:hidden relative z-10 pt-4 pb-2 px-4">
        <img
          src={heroImage}
          alt="Tirumala Temple"
          className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-16 lg:py-20 text-center md:text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Affordable & Reliable Taxi Services in <span className="text-blue-400">Tirupati & Tirumala</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto font-medium">
            Book trusted cabs for your temple visits, airport transfers, and outstation trips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6">
            <Button 
              size="lg"
              variant="hero"
              className="gap-2 md:gap-3 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base w-full sm:w-auto"
              asChild
            >
              <a href={`tel:+${phoneNumber}`}>
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="cta"
              className="gap-2 md:gap-3 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base w-full sm:w-auto"
              asChild
            >
              <a href="#packages" aria-label="View all tour packages">
                <Package className="w-4 h-4 md:w-5 md:h-5" />
                View Our All Packages
              </a>
            </Button>
          </div>
          
          <div className="hidden md:flex md:pt-8 flex-wrap justify-center gap-6 text-white text-base">
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
