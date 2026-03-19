import NewsList from "@/components/NewsList";
import { getAuthors, getNews } from "./lib/fetch";
import Link from "next/link";

const MIN_PAGE = 1;

const newsList = await getNews();
const authorList = await getAuthors();

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const pageNum = parseInt(page) ? parseInt(page) : 0;

  const total = newsList.paging.total;
  const limit = newsList.paging.limit;
  const MaxPage = Math.ceil(total / limit);

  const limitedPage = Math.max(Math.min(pageNum, MaxPage), MIN_PAGE);

  const news = await getNews((limitedPage - 1) * limit);


  return (
    <>
      <NewsList news={news.data} authors={authorList.data} />
      <div>
        <Link href={`./?page=${limitedPage - 1}`}>←</Link>
        <span>Síða {limitedPage}</span>
        <Link href={`./?page=${limitedPage + 1}`}>→</Link>
      </div>
    </>
  );
}
