export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  images?: string[];
  description: string;
}
