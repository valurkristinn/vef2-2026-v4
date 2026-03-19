import { AuthorType, NewsType } from "@/app/lib/types";
import Link from "next/link";

export default function NewsPage({
  news,
  author,
}: {
  news: NewsType;
  author: AuthorType;
}) {
  return (
    <section>
      <h1>{news.title}</h1>
      <h4>{news.excerpt}</h4>
      <p>{news.content}</p>
      <p>
        {author.name}    <span className="text-xs text-gray">{author.email}</span>
      </p>
      <Link href={"/news/" + news.slug + "?edit=true"}>Breyta</Link>
    </section>
  );
}
