import { NavBar } from "@/components/NavBar";
import { HeroNews } from "@/components/HeroNews";
import { NewsGrid } from "@/components/NewsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <NavBar />
      <main className="pt-16">
        <HeroNews />
        <NewsGrid />
      </main>
    </div>
  );
};

export default Index;