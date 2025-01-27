import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">MCCity News</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Events</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Updates</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">About</a>
          <ThemeToggle />
        </div>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};