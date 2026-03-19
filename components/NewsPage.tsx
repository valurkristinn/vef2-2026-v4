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
      <p>{news.content}</p>
      <p>
        {author.name} <span className="sub">{author.email}</span>
      </p>
      <Link href={"/news/" + news.slug + "?edit=true"}>Breyta</Link>
    </section>
  );
}
