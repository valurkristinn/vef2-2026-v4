import { AuthorType, NewsType } from "@/app/lib/types";

export default function NewsForm({
  news,
  submit,
  authors,
}: {
  news: NewsType | undefined;
  submit: string | ((formData: FormData) => void | Promise<void>) | undefined;
  authors: AuthorType[];
}) {
  if (!news) {
    news = {
      id: 0,
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      published: false,
      authorId: 0,
    };
  }

  const inputClass =
    "w-full border-b border-gray p-3 !text-sm focus:outline-none ";
  const labelClass = "text-sm self-center";

  return (
    <section>
      <form action={submit} className="grid grid-cols-[auto_1fr] gap-4 items-start mt-20">
        <label className={labelClass}>Titill</label>
        <input
          type="text"
          name="title"
          defaultValue={news.title}
          className={inputClass}
        />

        <label className={labelClass}>Stutt lýsing</label>
        <textarea
          name="excerpt"
          defaultValue={news.excerpt}
          className={inputClass}
        />

        <label className={labelClass}>Efni</label>
        <textarea
          name="content"
          defaultValue={news.content}
          rows={5}
          className={inputClass}
        />

        <label className={labelClass}>Höfundur</label>
        <select
          name="authorId"
          defaultValue={news.authorId}
          className={inputClass}
        >
          {authors.map((a) => (
            <option value={a.id} key={a.id}>
              {a.name}
            </option>
          ))}
        </select>

        <label className={labelClass}>Birt</label>
        <input
          type="checkbox"
          name="published"
          defaultChecked={news.published}
          className="justify-self-start self-center"
        />

        <input type="hidden" name="slug" value={news.slug} />

        <div className="col-span-2 justify-self-end">
          <button
            type="submit"
            className="border border-gray rounded px-4 py-1 text-sm hover:bg-gray"
          >
            Vista
          </button>
        </div>
      </form>
    </section>
  );
}
