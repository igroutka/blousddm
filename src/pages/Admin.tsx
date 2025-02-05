import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { AdminNewsForm } from "@/components/AdminNewsForm";
import { AdminNewsList } from "@/components/AdminNewsList";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface NewsItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

const Admin = () => {
  const [news, setNews] = useState<NewsItem[]>([
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
  ]);

  const [showAccessDialog, setShowAccessDialog] = useState(true);
  const [accessCode, setAccessCode] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddNews = (newNews: Omit<NewsItem, "date">) => {
    setNews([
      {
        ...newNews,
        date: "Just now",
      },
      ...news,
    ]);
  };

  const handleDeleteNews = (index: number) => {
    setNews(news.filter((_, i) => i !== index));
  };

  const handleAccessCodeSubmit = () => {
    if (accessCode === "789456123") {
      setShowAccessDialog(false);
      toast({
        title: "Доступ разрешен",
        description: "Добро пожаловать в админ-панель",
      });
    } else {
      toast({
        title: "Ошибка",
        description: "Неверный код доступа",
        variant: "destructive",
      });
      navigate("/");
    }
  };

  if (showAccessDialog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <NavBar />
        <Dialog open={showAccessDialog} onOpenChange={setShowAccessDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Введите код доступа</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Код доступа"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
              />
              <Button onClick={handleAccessCodeSubmit} className="w-full">
                Войти
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <NavBar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Админ панель</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Добавить новость</h2>
            <AdminNewsForm onSubmit={handleAddNews} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Список новостей</h2>
            <AdminNewsList news={news} onDelete={handleDeleteNews} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;