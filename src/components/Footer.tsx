import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-xl font-bold">FoodieExpress</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Delivering delicious food from your favorite restaurants to your doorstep, fast and fresh.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">About Us</Button></li>
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Contact</Button></li>
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Careers</Button></li>
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Partner with Us</Button></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Help Center</Button></li>
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Privacy Policy</Button></li>
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Terms of Service</Button></li>
              <li><Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">Refund Policy</Button></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80 text-sm">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background text-foreground border-background/20"
              />
              <Button variant="default" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 FoodieExpress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;