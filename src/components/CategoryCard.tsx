import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dairy-ink/80 via-dairy-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(category.rating) ? "fill-yellow-400 text-yellow-400" : "text-white/30"}
            />
          ))}
          <span className="text-xs font-medium ml-1 opacity-80">{category.rating}</span>
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 group-hover:text-dairy-green transition-colors">
          {category.name}
        </h3>
        
        <p className="text-sm text-white/80 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {category.description}
        </p>

        <Link
          to={`/category/${category.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group/btn"
        >
          Khám phá ngay
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
