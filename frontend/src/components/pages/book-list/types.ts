export interface Book {
  id?: number;
  title: string;
  description: string;
  coverImage: string;
  discountRate: number;
  price: number;
}

export interface BookListProps {
  books: Book[];
}
