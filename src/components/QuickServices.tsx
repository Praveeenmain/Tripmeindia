import { Car, Package, Bus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickServices = [
  {
    icon: Car,
    title: "Car Rentals",
    description: "Premium cars for your comfort and convenience. Available for hourly, daily, and weekly rentals.",
    placeholderColor: "bg-blue-500",
    whatsappMessage: "Hi, I want to book Car Rental service",
    image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
  },
  {
    icon: Package,
    title: "Tour Packages",
    description: "Complete tour packages to explore Tirupati's temples and surrounding attractions with experienced guides.",
    placeholderColor: "bg-green-500",
    whatsappMessage: "Hi, I want to book Tour Package",
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
  },
  {
    icon: Bus,
    title: "Bus Tours",
    description: "Group bus tours for comfortable travel to multiple destinations. Perfect for families and groups.",
    placeholderColor: "bg-orange-500",
    whatsappMessage: "Hi, I want to book Bus Tour",
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
  }
];

export const QuickServices = () => {
  const phoneNumber = "919959969880";

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quick <span className="text-primary">Booking</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your preferred service and book instantly via WhatsApp
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quickServices.map((service, index) => {
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 overflow-hidden"
              >
                {/* Image Area */}
                {service.image ? (
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  </div>
                ) : (
                  <div className={`${service.placeholderColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                    <service.icon className="w-16 h-16 text-white opacity-80" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  </div>
                )}
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Book ${service.title} via WhatsApp`}
                    >
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
