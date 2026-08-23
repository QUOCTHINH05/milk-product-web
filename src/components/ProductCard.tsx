import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-dairy-ink/5 hover:border-dairy-green/20 hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.images?.[0] ?? product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic would go here
            }}
            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-dairy-ink hover:bg-dairy-green hover:text-white transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="font-serif text-lg font-bold text-dairy-ink mb-1 line-clamp-1 group-hover:text-dairy-green transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-dairy-ink/50 mb-3 line-clamp-2 h-8">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-dairy-green font-bold">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-dairy-ink/40 group-hover:text-dairy-green transition-colors">
              Chi tiết
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
