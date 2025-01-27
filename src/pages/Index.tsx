import { NavBar } from "@/components/NavBar";
import { HeroNews } from "@/components/HeroNews";
import { NewsGrid } from "@/components/NewsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <NavBar />
      <main className="pt-16">
        <HeroNews />
        <NewsGrid />
      </main>
    </div>
  );
};

export default Index;