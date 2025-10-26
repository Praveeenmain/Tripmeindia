import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Plane, Train, Landmark, Mountain } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  price?: string; // Add optional price field
}

const services: Service[] = [
  {
    icon: Car, // Assuming Car is imported from 'lucide-react'
    title: "Outstation Cabs",
    description: "Reliable and comfortable cabs for your outstation travel needs.",
    price: "Starting from ₹18/km", // Example pricing
  },
  {
    icon: Plane, // Assuming Plane is imported from 'lucide-react'
    title: "Airport Transfers",
    description: "Hassle-free airport pickup and drop-off services.",
    price: "Starting from ₹1125", // Example pricing
  },
  {
    icon: Train, // Assuming Train is imported from 'lucide-react'
    title: "Railway Transfers",
    description: "Convenient railway station transfers for a smooth journey.",
    price: "Starting from ₹938", // Example pricing
  },
  {
    icon: Landmark, // Assuming Landmark is imported from 'lucide-react'
    title: "Local Sightseeing",
    description: "Explore local attractions with our guided sightseeing tours.",
    price: "Starting from ₹2250", // Example pricing
  },
  {
    icon: Mountain, // Assuming Mountain is imported from 'lucide-react'
    title: "Pilgrimage Tours",
    description: "Spiritual journeys to sacred destinations with expert guidance.",
    price: "Custom packages available", // Example pricing
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive taxi and tour services designed to make your Tirupati experience memorable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {service.description}
                    </CardDescription>
                    {service.price && (
                      <p className="text-primary font-medium mt-2">{service.price}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#packages" aria-label="View all tour packages">View Our All Packages</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
