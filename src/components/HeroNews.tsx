import { Button } from "@/components/ui/button";

export const HeroNews = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-2xl p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg">
          <span className="text-primary font-semibold">BREAKING NEWS</span>
          <h1 className="text-4xl font-bold mt-2 mb-4 dark:text-white">New Town Hall Construction Begins</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The ambitious project to build our server's new town hall has officially begun. 
            Mayor BlockMaster announces the grand design will incorporate both modern and classical elements.
          </p>
          <Button className="bg-primary hover:bg-primary/90">Read More</Button>
        </div>
      </div>
    </div>
  );
};