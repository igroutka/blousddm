import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NewsItem {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
}

export const AdminNewsForm = ({ onSubmit }: { onSubmit: (news: NewsItem) => void }) => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      excerpt,
      category,
      imageUrl,
    });
    setTitle("");
    setExcerpt("");
    setCategory("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Заголовок новости"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          placeholder="Краткое описание"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full"
        />
      </div>
      <div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Выберите категорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Community">Community</SelectItem>
            <SelectItem value="Economy">Economy</SelectItem>
            <SelectItem value="Events">Events</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Input
          placeholder="URL изображения"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full">
        Добавить новость
      </Button>
    </form>
  );
};