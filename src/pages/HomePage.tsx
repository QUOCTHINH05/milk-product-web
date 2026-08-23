import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';

export const HomePage = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/Logo-BG.png"
            alt="Dairy Farm"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center sm:text-left"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-dairy-green/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
              Tinh hoa từ thiên nhiên
            </span>
            <h1 className="text-4xl sm:text-7xl font-serif font-bold leading-[1.1] mb-4 sm:mb-6">
              Nguồn Dinh Dưỡng <br />
              <span className="italic font-light">Thuần Khiết</span> Mỗi Ngày
            </h1>
            <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 font-light leading-relaxed px-4 sm:px-0">
              Khám phá bộ sưu tập các sản phẩm sữa tươi sạch, sữa chua lên men tự nhiên và các loại hạt dinh dưỡng cao cấp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-white text-dairy-ink rounded-full font-bold hover:bg-dairy-green hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                Mua Sắm Ngay
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all text-center"
              >
                Tìm Hiểu Thêm
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:flex gap-8">
          {[
            { label: 'Trang Trại', value: '10+' },
            { label: 'Sản Phẩm', value: '50+' },
            { label: 'Khách Hàng', value: '10k+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white min-w-[140px]"
            >
              <div className="text-3xl font-serif font-bold mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: 'Kiểm Định Nghiêm Ngặt', desc: 'Mọi sản phẩm đều trải qua quy trình kiểm tra chất lượng 5 bước.' },
            { icon: <Truck size={32} />, title: 'Giao Hàng Siêu Tốc', desc: 'Nhận hàng trong vòng 2h tại khu vực nội thành TP.HCM và Hà Nội.' },
            { icon: <Leaf size={32} />, title: '100% Tự Nhiên', desc: 'Không chất bảo quản, không hương liệu nhân tạo, an toàn tuyệt đối.' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-dairy-blue/30 border border-dairy-blue flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-dairy-green mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-dairy-ink/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-dairy-green font-bold text-xs uppercase tracking-widest mb-3 block">Danh mục nổi bật</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
              Lựa Chọn <span className="italic font-light">Tốt Nhất</span> <br /> Cho Mẹ Bầu và Bé Yêu
            </h2>
          </div>
          <Link to="/products" className="text-sm font-bold flex items-center gap-2 hover:text-dairy-green transition-colors group">
            Xem tất cả sản phẩm
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* Toàn Phát Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-dairy-green font-bold text-xs uppercase tracking-widest mb-3 block">Toàn Phát</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Sản phẩm nổi bật</h2>
          </div>
          <a href="#" className="text-sm font-bold text-dairy-green">Xem tất cả</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {PRODUCTS.filter(p => p.categoryId === 'toan-phat').map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-dairy-green p-8 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Đăng ký nhận tin để nhận <br /> ưu đãi 20% cho đơn hàng đầu tiên
              </h2>
              <p className="text-white/70 font-light">
                Cập nhật những sản phẩm mới nhất và các chương trình khuyến mãi đặc biệt từ Dairy Delight.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-white/50 px-4"
                />
                <button className="px-6 py-3 bg-white text-dairy-green rounded-xl font-bold hover:bg-dairy-blue transition-colors whitespace-nowrap">
                  Gửi ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
