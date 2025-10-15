import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hi, I want to book a cab in Tirupati");

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <Button 
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white border-none"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </a>

      {/* Sticky Call Button - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary p-3 shadow-xl">
        <Button 
          variant="hero"
          size="lg"
          className="w-full h-12 gap-2"
          asChild
        >
          <a href={`tel:+${phoneNumber}`}>
            <Phone className="h-5 w-5" />
            Call Now for Instant Booking
          </a>
        </Button>
      </div>
    </>
  );
};
