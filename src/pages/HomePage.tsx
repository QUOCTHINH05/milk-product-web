import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, getProducts } from '../constants';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';

export const HomePage = () => {
  const PRODUCTS = getProducts();
  return (
    <div className="space-y-12 pb-20 pt-6">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-dairy-green font-bold text-xs uppercase tracking-widest mb-2 block">Danh mục</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Danh mục sản phẩm</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-dairy-green font-bold text-xs uppercase tracking-widest mb-2 block">Sản phẩm</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Tất cả sản phẩm</h2>
          </div>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};
