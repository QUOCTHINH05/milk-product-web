import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Filter, LayoutGrid, List } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = CATEGORIES.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-serif font-bold mb-4">Không tìm thấy danh mục</h2>
        <Link to="/" className="text-dairy-green font-bold flex items-center gap-2">
          <ChevronLeft size={20} /> Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Category Header */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-dairy-ink/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-dairy-green transition-colors">
            <ChevronLeft size={16} /> Trang chủ
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-serif font-bold mb-4"
          >
            {category.name}
          </motion.h1>
          <p className="max-w-2xl text-white/80 font-light">
            {category.description}
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 sm:top-20 z-40 bg-dairy-cream/90 backdrop-blur-md border-b border-dairy-ink/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-dairy-ink/5 text-sm font-medium hover:border-dairy-green transition-all">
              <Filter size={16} /> Bộ lọc
            </button>
            <span className="text-xs text-dairy-ink/40 hidden sm:inline">Hiển thị {products.length} sản phẩm</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-dairy-green bg-white rounded-lg shadow-sm">
              <LayoutGrid size={20} />
            </button>
            <button className="p-2 text-dairy-ink/40 hover:text-dairy-green transition-colors">
              <List size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-dairy-ink/40 italic">Hiện chưa có sản phẩm nào trong danh mục này.</p>
          </div>
        )}
      </section>
    </div>
  );
};
