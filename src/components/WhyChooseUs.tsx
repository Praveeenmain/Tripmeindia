import { Clock, DollarSign, Shield, Car } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "24x7 Service",
    description: "Available round the clock for all your travel needs anytime, anywhere"
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent rates with no hidden charges. Best prices guaranteed"
  },
  {
    icon: Shield,
    title: "Verified Drivers",
    description: "Professional, licensed, and background-verified drivers for your safety"
  },
  {
    icon: Car,
    title: "Clean & Comfortable Cars",
    description: "Well-maintained vehicles with AC for a pleasant journey"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">BookMyToursIndia.com</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted travel partner in Tirupati offering exceptional service and unmatched reliability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/30 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
