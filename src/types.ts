export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
}

export interface ProductImagePrice {
  image: string;
  price: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  variantPrices?: ProductImagePrice[];
  description: string;
}
