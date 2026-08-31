import { Home, LayoutGrid, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: <Home size={22} />, label: 'Trang chủ', path: '/' },
    { icon: <LayoutGrid size={22} />, label: 'Danh mục', path: '/category/toan-phat' },
    { icon: <Mail size={22} />, label: 'Liên hệ', path: '/contact' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-dairy-ink/5 pb-safe-area-inset-bottom">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = item.path === '/category/toan-phat'
            ? location.pathname.startsWith('/category')
            : location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center flex-1 h-full gap-1"
            >
              <div className={`transition-colors duration-300 ${isActive ? 'text-dairy-green' : 'text-dairy-ink/40'}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-tighter transition-colors duration-300 ${isActive ? 'text-dairy-green' : 'text-dairy-ink/40'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -top-px left-1/4 right-1/4 h-0.5 bg-dairy-green rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
