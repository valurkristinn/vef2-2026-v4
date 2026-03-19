import { AuthorType, ListType, NewsType } from "./types";

async function getData(url: string) {
  try {
    const response = await fetch(process.env.API_URL + url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Óþekkt villa:", error);
    }
  }
}

async function getList(url: string, offset?: number) {
  if (!offset) {
    offset = 0;
  }

  return await getData(url + "?offset=" + offset);
}

export async function getNews(offset?: number): Promise<ListType<NewsType>> {
  return await getList("/news", offset);
}

export async function getAuthors(
  offset?: number,
): Promise<ListType<AuthorType>> {
  return await getList("/authors", offset);
}

export async function getNewsBySlug(slug: string): Promise<NewsType> {
  return await getData("/news/" + slug);
}

export async function getAuthorById(id: number): Promise<AuthorType> {
  return await getData("/authors/" + id);
}
