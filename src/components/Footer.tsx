import { useState } from 'react';
import { Milk, Facebook, MessageCircle, Mail, Phone, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [isZaloQrOpen, setIsZaloQrOpen] = useState(false);
  const zaloQrSrc = '../../assets/zaloqr.jpg'; // Replace with the actual path to your Zalo QR code image

  return (
    <footer className="bg-dairy-ink text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-dairy-green rounded-full flex items-center justify-center text-white">
                <Milk size={24} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Toàn<span className="text-dairy-green">Phát</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Mang nguồn dinh dưỡng thuần khiết từ thiên nhiên đến bàn ăn của mọi gia đình Việt. Chúng tôi cam kết chất lượng và sự tươi ngon trong từng sản phẩm.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/vo.nhat.duy.792521?mibextid=wwXIfr&rdid=r0p2zEi7MZpffP6z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F198qUgBGho%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-dairy-green hover:border-dairy-green transition-all">
                <Facebook size={18} />
              </a>
              <button
                type="button"
                onClick={() => setIsZaloQrOpen(true)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-dairy-green hover:border-dairy-green transition-all"
                aria-label="Xem mã QR Zalo"
              >
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Trang Chủ</Link></li>
              <li><Link to="/category/toan-phat" className="hover:text-white transition-colors">Sản Phẩm Toàn Phát</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Về Chúng Tôi</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Liên Hệ</Link></li>
              <li><Link to="/policy" className="hover:text-white transition-colors">Chính Sách Giao Hàng</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Danh Mục</h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/60">
              <ul className="space-y-4">
                <li><Link to="/product/tp-chao-sgf" className="hover:text-white transition-colors">Cháo SGF</Link></li>
                <li><Link to="/product/tp-sua-firo" className="hover:text-white transition-colors">Sữa Firo</Link></li>
                <li><Link to="/product/tp-goldenfarm" className="hover:text-white transition-colors">Sữa tươi Goldfarm</Link></li>
                <li><Link to="/product/tp-natonestkh" className="hover:text-white transition-colors">Yến sào Natonest</Link></li>
              </ul>

              <ul className="space-y-4">
                <li><Link to="/product/tp-tranest" className="hover:text-white transition-colors">Tranest</Link></li>
                <li><Link to="/product/tp-yen-my-khanh" className="hover:text-white transition-colors">Yến sào Mỹ Khánh</Link></li>
                <li><Link to="/product/tp-takazumi" className="hover:text-white transition-colors">Tã Kazumi</Link></li>
                <li><Link to="/product/tp-yumisun" className="hover:text-white transition-colors">Tã Yumisun</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Thông Tin Liên Hệ</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-dairy-green shrink-0" />
                <span>194, ấp Minh Nghĩa, xã Hương Mỹ, tỉnh Vĩnh Long</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-dairy-green shrink-0" />
                <span>03 2626 0939</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-dairy-green shrink-0" />
                <span>toanphat.bt268@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© 2026 CÔNG TY TNHH TOÀN PHÁT GLOBAL NUTRITION. All rights reserved.</p>
        </div>
      </div>

      {isZaloQrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setIsZaloQrOpen(false)}>
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsZaloQrOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Đóng mã QR Zalo"
            >
              <X size={16} />
            </button>
            <div className="text-center">
              <p className="text-lg font-bold text-dairy-ink mb-3">Quét mã Zalo</p>
              <img src={zaloQrSrc} alt="Mã QR Zalo" className="w-64 h-64 object-cover rounded-xl border border-gray-200" />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
