import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    tripDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Input validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.tripDetails.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Create WhatsApp message
    const message = `New Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nTrip Details: ${formData.tripDetails}`;
    const whatsappNumber = "919876543210"; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", phone: "", tripDetails: "" });
    toast.success("Opening WhatsApp to send your booking request!");
  };

  return (
    <section className="py-16 md:py-24 bg-accent" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
                Book Your <span className="text-primary">Trip</span>
              </CardTitle>
              <CardDescription className="text-base">
                Fill in your details and we'll connect with you immediately via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    maxLength={100}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                    className="h-12"
                    maxLength={15}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Trip Details (Pickup location, destination, date, time, number of passengers) *"
                    value={formData.tripDetails}
                    onChange={(e) => setFormData({ ...formData, tripDetails: e.target.value })}
                    className="min-h-32 resize-none"
                    maxLength={500}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero"
                  size="lg"
                  className="w-full h-14 text-base gap-2"
                >
                  <Send className="w-5 h-5" />
                  Book My Trip
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
