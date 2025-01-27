import { NewsCard } from "./NewsCard";

const newsItems = [
  {
    title: "Community Garden Project Flourishes",
    excerpt: "Players come together to create the server's largest community garden, featuring every crop type available.",
    category: "Community",
    date: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
  },
  {
    title: "New Shopping District Opens",
    excerpt: "The commercial zone expands with 20 new player-owned shops opening this weekend.",
    category: "Economy",
    date: "1 day ago",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a"
  },
  {
    title: "Upcoming PvP Tournament",
    excerpt: "Get ready for the monthly arena championship with exciting prizes and new rule sets.",
    category: "Events",
    date: "2 days ago",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363"
  }
];

export const NewsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};