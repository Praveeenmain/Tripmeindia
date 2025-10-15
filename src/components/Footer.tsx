import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const email = "info@bookmytoursindia.com";

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="BookMyToursIndia.com Logo" 
              className="h-12 md:h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="mb-4 opacity-90">
              Your trusted partner for affordable and reliable taxi services in Tirupati & Tirumala. Making your journey comfortable and memorable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href={`tel:+${phoneNumber}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Tirupati, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Tirumala Temple Darshan</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Local Tirupati Sightseeing</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Airport Transfers</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Outstation Taxi Service</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Tour Packages</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="opacity-75">
            Copyright © 2025 BookMyToursIndia.com - All Rights Reserved
          </p>
          <p className="mt-2 text-sm opacity-75">
            Keywords: Tirupati Taxi, Tirumala Cab Booking, Tirupati Travels, Affordable Cabs in Tirupati, Temple Visit Taxi
          </p>
        </div>
      </div>
    </footer>
  );
};
