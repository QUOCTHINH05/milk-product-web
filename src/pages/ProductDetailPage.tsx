import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Star, ShoppingCart, ShieldCheck, Truck, RefreshCw, Heart, Share2 } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useEffect, useState } from 'react';

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const product = PRODUCTS.find(p => p.id === productId);
  const category = CATEGORIES.find(c => c.id === product?.categoryId);
  const relatedProducts = PRODUCTS.filter(p => p.categoryId === product?.categoryId && p.id !== productId).slice(0, 4);

  useEffect(() => {
    if (!product) {
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer);
    }
  }, [product, navigate]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-serif font-bold mb-4">Không tìm thấy sản phẩm</h2>
        <p className="text-dairy-ink/60 mb-6">Đang chuyển hướng về trang chủ...</p>
        <Link to="/" className="text-dairy-green font-bold flex items-center gap-2">
          <ChevronLeft size={20} /> Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs font-medium text-dairy-ink/40 uppercase tracking-widest">
          <Link to="/" className="hover:text-dairy-green transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link to={`/category/${category?.id}`} className="hover:text-dairy-green transition-colors">{category?.name}</Link>
          <span>/</span>
          <span className="text-dairy-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {(() => {
              const images = product.images && product.images.length > 0 ? product.images : [product.image];
              return (
                <>
                  <div className="aspect-square rounded-[32px] overflow-hidden bg-white border border-dairy-ink/5">
                    <img
                      src={images[selectedIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {images.slice(0, 8).map((src, i) => (
                      <div
                        key={src + i}
                        onClick={() => setSelectedIndex(i)}
                        className={`aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${i === selectedIndex ? 'border-dairy-green opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-dairy-ink/10"} />
                  ))}
                </div>
                <span className="text-xs font-bold text-dairy-ink/40 uppercase tracking-widest border-l border-dairy-ink/10 pl-2">
                  4.8 (120 đánh giá)
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-dairy-ink mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="text-3xl font-bold text-dairy-green mb-6">
                {product.price.toLocaleString('vi-VN')}đ
              </div>
              
              <p className="text-dairy-ink/60 leading-relaxed mb-8 text-lg font-light">
                {product.description}. Sản phẩm được sản xuất theo quy trình khép kín, đảm bảo giữ trọn vẹn nguồn dinh dưỡng và hương vị tự nhiên nhất từ trang trại.
              </p>
            </div>

            {/* Purchase Options */}
            <div className="space-y-8 mb-10">
              <div className="hidden sm:flex items-center gap-6">
                <div className="flex items-center border border-dairy-ink/10 rounded-full p-1 bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-dairy-ink/40 hover:text-dairy-green transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-dairy-ink/40 hover:text-dairy-green transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-dairy-green text-white py-4 rounded-full font-bold hover:bg-dairy-ink transition-all flex items-center justify-center gap-3 shadow-lg shadow-dairy-green/20">
                  <ShoppingCart size={20} />
                  Thêm vào giỏ hàng
                </button>
                <button className="w-14 h-14 border border-dairy-ink/10 rounded-full flex items-center justify-center text-dairy-ink/40 hover:text-red-500 hover:border-red-500 transition-all">
                  <Heart size={20} />
                </button>
              </div>

              {/* Mobile Sticky Bar (Visible only on mobile) */}
              <div className="sm:hidden fixed bottom-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-dairy-ink/5 p-4 flex items-center gap-4">
                <div className="flex items-center border border-dairy-ink/10 rounded-full p-1 bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center text-dairy-ink/40">-</button>
                  <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center text-dairy-ink/40">+</button>
                </div>
                <button className="flex-1 bg-dairy-green text-white h-12 rounded-full font-bold text-sm flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Thêm giỏ hàng
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-dairy-ink/5">
                {[
                  { icon: <ShieldCheck size={20} />, text: '100% Chính hãng' },
                  { icon: <Truck size={20} />, text: 'Giao nhanh 2h' },
                  { icon: <RefreshCw size={20} />, text: 'Đổi trả 7 ngày' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-semibold text-dairy-ink/60 uppercase tracking-wider">
                    <span className="text-dairy-green">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs / Additional Info */}
            <div className="bg-dairy-blue/20 rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold mb-4">Thông tin dinh dưỡng</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between border-b border-dairy-ink/5 pb-2">
                  <span className="text-dairy-ink/40">Năng lượng</span>
                  <span className="font-bold">60 kcal</span>
                </div>
                <div className="flex justify-between border-b border-dairy-ink/5 pb-2">
                  <span className="text-dairy-ink/40">Chất béo</span>
                  <span className="font-bold">3.3 g</span>
                </div>
                <div className="flex justify-between border-b border-dairy-ink/5 pb-2">
                  <span className="text-dairy-ink/40">Chất đạm</span>
                  <span className="font-bold">3.0 g</span>
                </div>
                <div className="flex justify-between border-b border-dairy-ink/5 pb-2">
                  <span className="text-dairy-ink/40">Canxi</span>
                  <span className="font-bold">110 mg</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">Sản phẩm tương tự</h2>
          <Link to={`/category/${category?.id}`} className="text-sm font-bold text-dairy-green hover:underline">
            Xem tất cả
          </Link>
        </div>
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 gap-4 sm:gap-8 snap-x no-scrollbar">
          {relatedProducts.map((p, i) => (
            <div key={p.id} className="min-w-[200px] sm:min-w-0 snap-start">
              <ProductCard product={p} index={i} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
