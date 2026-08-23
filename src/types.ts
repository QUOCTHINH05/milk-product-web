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
  price: number;
  image: string;
  description: string;
}
