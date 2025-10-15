import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="BookMyToursIndia.com - Affordable Taxi & Travel Services in Tirupati" 
            className="h-10 md:h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
