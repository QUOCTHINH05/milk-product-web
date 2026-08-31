import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Star, ShoppingCart, ShieldCheck, Truck, RefreshCw, Heart, Share2 } from 'lucide-react';
import { getProducts, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useEffect, useState } from 'react';

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const PRODUCTS = getProducts();

  const product = PRODUCTS.find(p => p.id === productId);
  const category = CATEGORIES.find(c => c.id === product?.categoryId);
  const relatedProducts = PRODUCTS.filter(p => p.categoryId === product?.categoryId && p.id !== productId).slice(0, 4);
  const images = product && (product.images && product.images.length > 0 ? product.images : [product.image]);
  const selectedImage = images?.[selectedIndex] ?? product?.image;
  const selectedPrice = product?.variantPrices?.find((item) => item.image === selectedImage)?.price ?? product?.price ?? 0;

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
              const galleryImages = images ?? [product.image];
              return (
                <>
                  <div className="relative aspect-square rounded-[32px] overflow-hidden bg-white border border-dairy-ink/5">
                    <img
                      src={galleryImages[selectedIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />

                    <button
                      type="button"
                      onClick={() => setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dairy-ink shadow-md transition hover:bg-white"
                      aria-label="Ảnh trước"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dairy-ink shadow-md transition hover:bg-white"
                      aria-label="Ảnh sau"
                    >
                      <ChevronLeft size={20} className="rotate-180" />
                    </button>
                  </div>

                  <div className="lg:hidden rounded-3xl bg-white border border-dairy-ink/5 p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-dairy-ink/10"} />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-dairy-ink/40 uppercase tracking-widest">
                        4.8 (120 đánh giá)
                      </span>
                    </div>

                    <h1 className="text-3xl font-serif font-bold text-dairy-ink mb-3 leading-tight">
                      {product.name}
                    </h1>

                    <div className="text-2xl font-bold text-dairy-green mb-3">
                      {selectedPrice.toLocaleString('vi-VN')}đ
                    </div>

                    <p className="text-dairy-ink/60 leading-relaxed text-base font-light">
                      {product.description}. Sản phẩm được sản xuất theo quy trình khép kín, đảm bảo giữ trọn vẹn nguồn dinh dưỡng và hương vị tự nhiên nhất từ trang trại.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, i) => (
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
            className="hidden lg:flex flex-col"
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
                {selectedPrice.toLocaleString('vi-VN')}đ
              </div>
              
              <p className="text-dairy-ink/60 leading-relaxed mb-8 text-lg font-light">
                {product.description}. Sản phẩm được sản xuất theo quy trình khép kín, đảm bảo giữ trọn vẹn nguồn dinh dưỡng và hương vị tự nhiên nhất từ trang trại.
              </p>
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
