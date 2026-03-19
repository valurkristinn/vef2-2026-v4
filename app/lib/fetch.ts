import { AuthorType, ListType, NewsType} from "./types";

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

export async function reqNews(type: "POST" | "PUT", body: NewsType) {
  const url = type === "PUT" ? "/news/" + body.slug : "/news";
  try {
    const response = await fetch(process.env.API_URL + url, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return { isError: true, status: "500", message: error.message };
    } else {
      return { isError: true, status: "500", message: "Óþekkt villa við uppfærslu" };
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
