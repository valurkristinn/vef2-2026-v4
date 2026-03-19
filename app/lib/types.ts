export type NewsType = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published: boolean;
  authorId: number;
};

export type AuthorType = {
  id: number;
  email: string;
  name: string;
};

export type ListType<T> = {
  data: T[];
  paging: {
    limit: number;
    offset: number;
    total: number;
  };
};
