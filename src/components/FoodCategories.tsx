import { Button } from "@/components/ui/button";
import burgerImage from "@/assets/burger.jpg";
import sushiImage from "@/assets/sushi.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import saladImage from "@/assets/salad.jpg";

const categories = [
  {
    name: "Burgers",
    image: burgerImage,
    count: "120+ restaurants"
  },
  {
    name: "Sushi",
    image: sushiImage,
    count: "85+ restaurants"
  },
  {
    name: "Pizza",
    image: pizzaImage,
    count: "200+ restaurants"
  },
  {
    name: "Salads",
    image: saladImage,
    count: "95+ restaurants"
  }
];

const FoodCategories = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your favorite cuisines from top-rated restaurants in your area
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant="category"
              className="h-auto p-0 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;