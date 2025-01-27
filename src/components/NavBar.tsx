import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-primary">MCCity News</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Home</Link>
          <Link to="/admin" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Admin</Link>
          <ThemeToggle />
        </div>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};