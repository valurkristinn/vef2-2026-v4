import { AuthorType, NewsType } from "@/app/lib/types";

export default function NewsCard({
  news,
  authors,
}: {
  news: NewsType;
  authors: AuthorType[];
}) {
  const authorObj = authors.find((a) => a.id === news.authorId);
  

  return (
    <article>
      <a href={"news/" + news.slug}>
        <h3>{news.title}</h3>
      </a>
      <p>{news.excerpt}</p>
      <p>{authorObj && authorObj.name}</p>
    </article>
  );
}
