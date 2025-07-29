import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Delicious Food
          <span className="block bg-hero-gradient bg-clip-text text-transparent">
            Delivered Fast
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Order from your favorite restaurants and get fresh, hot meals delivered right to your door
        </p>
        
        {/* Search Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-hover max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Enter your delivery address" 
                className="pl-10 h-12 border-0 bg-secondary text-foreground"
              />
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for food or restaurants" 
                className="pl-10 h-12 border-0 bg-secondary text-foreground"
              />
            </div>
            <Button variant="hero" size="lg" className="h-12 px-8">
              Find Food
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;