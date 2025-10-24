import { Phone } from "lucide-react";
import { Button } from "./ui/button";

import whatsappIcon from "../assets/whatsapp-svgrepo-com (1).svg";
export const FloatingButtons = () => {
  const phoneNumber = "919959969880"; // Updated number
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
          className="h-12 w-12 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white border-none"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="h-full w-full object-contain" />
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
