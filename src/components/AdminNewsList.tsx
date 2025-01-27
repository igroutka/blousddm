import { Button } from "@/components/ui/button";

interface NewsItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export const AdminNewsList = ({
  news,
  onDelete,
}: {
  news: NewsItem[];
  onDelete: (index: number) => void;
}) => {
  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.category} - {item.date}
            </p>
          </div>
          <Button
            variant="destructive"
            onClick={() => onDelete(index)}
          >
            Удалить
          </Button>
        </div>
      ))}
    </div>
  );
};