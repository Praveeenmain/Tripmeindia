import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-start">
          <img 
            src={logo} 
            alt="BookMyToursIndia.com - Affordable Taxi & Travel Services in Tirupati" 
            className="w-[200px] md:w-[250px] h-auto"
          />
        </div>
      </div>
    </header>
  );
};
