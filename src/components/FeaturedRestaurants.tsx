import RestaurantCard from "./RestaurantCard";
import burgerImage from "@/assets/burger.jpg";
import sushiImage from "@/assets/sushi.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import saladImage from "@/assets/salad.jpg";

const restaurants = [
  {
    name: "Burger Palace",
    image: burgerImage,
    cuisine: "American • Burgers • Fast Food",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    distance: "1.2 km",
    featured: true
  },
  {
    name: "Tokyo Sushi",
    image: sushiImage,
    cuisine: "Japanese • Sushi • Seafood",
    rating: 4.9,
    deliveryTime: "30-45 min",
    deliveryFee: "Free",
    distance: "2.1 km",
    featured: true
  },
  {
    name: "Mama's Pizza",
    image: pizzaImage,
    cuisine: "Italian • Pizza • Pasta",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    distance: "0.8 km"
  },
  {
    name: "Green Garden",
    image: saladImage,
    cuisine: "Healthy • Salads • Vegan",
    rating: 4.6,
    deliveryTime: "15-25 min",
    deliveryFee: "$2.49",
    distance: "1.5 km"
  },
  {
    name: "Spice Route",
    image: burgerImage,
    cuisine: "Indian • Curry • Spicy",
    rating: 4.5,
    deliveryTime: "35-50 min",
    deliveryFee: "$3.99",
    distance: "2.8 km"
  },
  {
    name: "Ocean Breeze",
    image: sushiImage,
    cuisine: "Seafood • Mediterranean",
    rating: 4.8,
    deliveryTime: "40-55 min",
    deliveryFee: "Free",
    distance: "3.2 km"
  }
];

const FeaturedRestaurants = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Restaurants
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Top-rated restaurants delivering the best food experiences right to your doorstep
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;