import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  distance: string;
  featured?: boolean;
}

const RestaurantCard = ({ 
  name, 
  image, 
  cuisine, 
  rating, 
  deliveryTime, 
  deliveryFee, 
  distance,
  featured = false 
}: RestaurantCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-hover transform hover:-translate-y-2 overflow-hidden bg-card border-border">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm">{cuisine}</p>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{distance}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-card-foreground">
              Delivery: {deliveryFee}
            </span>
            <Badge variant="secondary" className="text-xs">
              Available
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;