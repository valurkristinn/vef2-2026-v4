import { AuthorType, NewsType } from "@/app/lib/types";
import NewsCard from "./NewsCard";

export default function NewsList({
  news,
  authors,
}: {
  news: NewsType[];
  authors: AuthorType[];
}) {
  return (
    <section>
    <h1>Fréttir</h1>
      {news.map((n: NewsType) => (
          <NewsCard news={n} authors={authors} key={n.id} />
      ))}
    </section>
  );
}
