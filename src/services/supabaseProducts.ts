import type { Product } from '../types';
import { getSupabaseClient } from './supabaseClient';

const PRODUCT_STORAGE_KEY = 'toanphat_products';

export const fetchProductsFromSupabase = async (fallback: Product[]): Promise<Product[]> => {
  const supabase = getSupabaseClient();
  
  if (!supabase) {
    return readProductsFromLocalStorage(fallback);
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('data')
      .single();

    if (error) {
      console.warn('Failed to fetch from Supabase, using fallback:', error.message);
      return fallback;
    }

    const products = data?.data as Product[] | undefined;
    if (Array.isArray(products) && products.length > 0) {
      // Cache locally
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
      }
      return products;
    }

    return fallback;
  } catch (err) {
    console.warn('Error fetching products from Supabase:', err);
    return fallback;
  }
};

export const saveProductsToSupabase = async (products: Product[]): Promise<boolean> => {
  const supabase = getSupabaseClient();

  try {
    // Save to local cache first
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
    }

    // Try to sync to Supabase if configured
    if (!supabase) {
      return true; // Return success since local save worked
    }

    const { error } = await supabase
      .from('products')
      .update({ data: products, updated_at: new Date().toISOString() })
      .eq('id', 1);

    if (error) {
      console.warn('Failed to save to Supabase:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Error saving products to Supabase:', err);
    return false;
  }
};

export const readProductsFromLocalStorage = (fallback: Product[]): Product[] => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const saved = window.localStorage.getItem(PRODUCT_STORAGE_KEY);
  if (!saved) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(saved) as Product[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : fallback;
  } catch {
    return fallback;
  }
};
