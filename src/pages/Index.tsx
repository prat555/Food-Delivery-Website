import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FoodCategories from "@/components/FoodCategories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FoodCategories />
        <FeaturedRestaurants />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
