export interface BookAttributes {
  id: number;
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

export interface BookCreationAttributes {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}
