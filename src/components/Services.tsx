import { MapPin, Plane, Mountain, Navigation } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: MapPin,
    title: "Tirumala Temple Visits",
    description: "Dedicated darshan trips with experienced drivers who know the best routes and timings"
  },
  {
    icon: Mountain,
    title: "Local Sightseeing",
    description: "Explore Tirupati's famous attractions including temples, waterfalls, and scenic spots"
  },
  {
    icon: Plane,
    title: "Airport Pickup/Drop",
    description: "Timely airport transfers from Tirupati Airport with meet & greet service"
  },
  {
    icon: Navigation,
    title: "Outstation Packages",
    description: "Comfortable long-distance trips to Chennai, Bangalore, and other nearby cities"
  }
];

export const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
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
              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
