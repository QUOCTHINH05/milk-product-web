import type { Product } from '../types';

export const PRODUCT_STORAGE_KEY = 'toanphat_products';

export const readProductsFromStorage = (fallback: Product[]): Product[] => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const savedProducts = window.localStorage.getItem(PRODUCT_STORAGE_KEY);
  if (!savedProducts) {
    return fallback;
  }

  try {
    const parsedProducts = JSON.parse(savedProducts) as Product[];
    return Array.isArray(parsedProducts) && parsedProducts.length > 0 ? parsedProducts : fallback;
  } catch {
    return fallback;
  }
};

export const writeProductsToStorage = (products: Product[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));

  const remoteProductsUrl = import.meta.env.VITE_PRODUCTS_API_URL;
  if (!remoteProductsUrl) {
    return;
  }

  void fetch(remoteProductsUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(products)
  }).catch(() => {
    // keep local state and let the next sync retry later
  });
};

export const syncProductsToRemote = async (products: Product[]) => {
  const remoteProductsUrl = import.meta.env.VITE_PRODUCTS_API_URL;
  if (!remoteProductsUrl) {
    return products;
  }

  const response = await fetch(remoteProductsUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(products)
  });

  if (!response.ok) {
    throw new Error('Failed to sync products to remote storage');
  }

  writeProductsToStorage(products);
  return products;
};
