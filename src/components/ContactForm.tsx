import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    timing: "",
    location: "",
    packageName: "",
    advancePaid: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Input validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.pickup.trim() ||
      !formData.timing.trim() ||
      !formData.location.trim() ||
      !formData.packageName.trim() ||
      !formData.advancePaid.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    const advanceNumber = Number(formData.advancePaid);
    if (Number.isNaN(advanceNumber) || advanceNumber < 0) {
      toast.error("Please enter a valid advance amount");
      return;
    }

    // Create WhatsApp message
    const message = `New Booking Request:`+
      `\nName: ${formData.name}`+
      `\nPhone: ${formData.phone}`+
      `\nPickup: ${formData.pickup}`+
      `\nTiming: ${formData.timing}`+
      `\nLocation: ${formData.location}`+
      `\nTour Package: ${formData.packageName}`+
      `\nAdvance Paid: ₹${advanceNumber.toFixed(2)}`;
    const whatsappNumber = "919959969880"; // Updated number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      pickup: "",
      timing: "",
      location: "",
      packageName: "",
      advancePaid: ""
    });
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    maxLength={100}
                    required
                  />
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                    className="h-12"
                    maxLength={15}
                    required
                  />
                  <Input
                    placeholder="Pickup (e.g., Tirupati Railway Station) *"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="h-12"
                    maxLength={150}
                    required
                  />
                  <Input
                    placeholder="Timing (e.g., 10:30 AM, 24 Oct) *"
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="h-12"
                    maxLength={100}
                    required
                  />
                  <Input
                    placeholder="Location / Destination *"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="h-12"
                    maxLength={150}
                    required
                  />
                  <Input
                    placeholder="Tour Package Name *"
                    value={formData.packageName}
                    onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                    className="h-12"
                    maxLength={150}
                    required
                  />
                  <Input
                    placeholder="Advance Paid (₹) *"
                    type="number"
                    inputMode="decimal"
                    value={formData.advancePaid}
                    onChange={(e) => setFormData({ ...formData, advancePaid: e.target.value })}
                    className="h-12"
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
