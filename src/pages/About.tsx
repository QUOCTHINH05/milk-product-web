import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pb-20">
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="assets/chaosgf/1.jpg" alt="Toàn Phát" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-serif font-bold">
            Về Toàn Phát
          </motion.h1>
          <p className="mt-4 text-lg text-white/80">
            Toàn Phát – nhà phân phối lẻ chuyên cung cấp các sản phẩm dinh dưỡng và yến sào chất lượng. Chúng tôi cam kết mang sản phẩm an toàn, minh bạch đến tay người tiêu dùng.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-3">Sứ mệnh</h2>
          <p className="text-dairy-ink/70">Mang đến nguồn thực phẩm an toàn, dinh dưỡng và tiện lợi cho mọi gia đình Việt.</p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold mb-3">Giá trị cốt lõi</h2>
          <ul className="list-disc pl-5 text-dairy-ink/70 space-y-2">
            <li>Chất lượng và minh bạch</li>
            <li>Trách nhiệm với khách hàng</li>
            <li>Phục vụ tận tâm, nhanh chóng</li>
          </ul>
        </div>

        <div className="text-center">
          <Link to="/category/toan-phat" className="inline-block px-6 py-3 bg-dairy-green text-white rounded-full font-bold hover:bg-dairy-ink transition-colors">
            Xem sản phẩm Toàn Phát
          </Link>
        </div>
      </section>
    </div>
  );
};
