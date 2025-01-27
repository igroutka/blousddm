interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export const NewsCard = ({ title, excerpt, category, date, imageUrl }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary font-semibold">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{excerpt}</p>
      </div>
    </div>
  );
};