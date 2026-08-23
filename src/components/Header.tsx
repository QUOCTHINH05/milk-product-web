import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Milk } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Sản Phẩm', path: '/products' },
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Liên Hệ', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-dairy-cream/80 backdrop-blur-lg border-b border-dairy-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-dairy-green rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Milk size={24} />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-dairy-ink">
              Dairy<span className="text-dairy-green">Delight</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-dairy-green after:w-full' : 'text-dairy-ink/70'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-dairy-ink/70 hover:text-dairy-green transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-dairy-ink/70 hover:text-dairy-green transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-dairy-green text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2 text-dairy-ink/70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-dairy-ink/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-dairy-ink hover:bg-dairy-blue hover:text-dairy-green rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
