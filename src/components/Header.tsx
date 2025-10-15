import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-0 border-b border-border shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 py-1">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <img 
              src={logo} 
              alt="BookMyToursIndia.com - Affordable Taxi & Travel Services in Tirupati" 
              className="h-12 sm:h-16 md:h-24 lg:h-28 w-auto block -my-1 md:-my-2"
            />
            <div className="block leading-tight select-none">
              <span className="text-sm sm:text-[16px] md:text-lg lg:text-xl font-bold tracking-tight" style={{ color: '#0B3A75' }}>BookMy</span>
              <span className="text-sm sm:text-[16px] md:text-lg lg:text-xl font-bold tracking-tight" style={{ color: '#4AA0D9' }}>ToursIndia.com</span>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#services" className="hidden sm:inline text-foreground/80 hover:text-foreground transition-colors font-medium">Services</a>
            <a 
              href={`https://wa.me/919959969880?text=${encodeURIComponent("Hi, I want to book a cab in Tirupati")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-3 md:h-10 md:px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold shadow-sm transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
