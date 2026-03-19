import { getAuthorById, getNewsBySlug } from "@/app/lib/fetch";
import NewsPage from "@/components/NewsPage";

export default async function News({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  const author = await getAuthorById(news.authorId);

  return <NewsPage news={news} author={author} />;
}
