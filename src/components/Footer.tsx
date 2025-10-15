import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const phoneNumber = "919959969880"; // Updated number
  const email = "info@bookmytoursindia.com";

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <img 
                src={logo} 
                alt="BookMyToursIndia.com Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
              <div className="leading-tight select-none">
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white" style={{ color: '#E8F4FD' }}>BookMy</span>
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight" style={{ color: '#4AA0D9' }}>ToursIndia.com</span>
              </div>
            </div>
            <p className="mb-4 opacity-90">
              Your trusted partner for affordable and reliable taxi services in Tirupati & Tirumala. Making your journey comfortable and memorable.
            </p>
            
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href={`tel:+${phoneNumber}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 99599 69880</span>
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 99599 69880</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>63 Pillar No, Sreenivasa Nagar, Next to Domino's, Opposite CPR Apartment, Leela Mahal Circle, Tirupati 517501</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Tirumala Tirupati Cabs</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Local Tirupati Sightseeing</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Airport Transfers</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Outstation Taxi Service</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Tour Packages</li>
            </ul>
          </div>
          
          {/* Places to Visit */}
          <div>
            <h3 className="text-xl font-bold mb-4">Places to Visit in Tirumala</h3>
            <ul className="space-y-2">
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Sri Venkateswara Temple</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Akasa Ganga Waterfalls</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Silathoranam Natural Arch</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Japali hanuman Temple</li>
              <li className="opacity-90 hover:text-secondary transition-colors cursor-pointer">Sri Govindaraja Swamy Temple</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="opacity-75">
            Copyright © 2025 BookMyToursIndia.com - All Rights Reserved
          </p>
          <p className="mt-2 text-sm opacity-75">
            Keywords: Tirupati Taxi, Tirumala Cab Booking, Tirupati Travels, Affordable Cabs in Tirupati, Temple Visit Taxi, Places to Visit in Tirumala, Tirupati Car Rental, Cabs in Tirupati, Tirumala Visiting Places, Car Rental in Tirupati
          </p>
        </div>
      </div>
    </footer>
  );
};
