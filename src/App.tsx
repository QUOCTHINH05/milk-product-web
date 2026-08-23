import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { motion, AnimatePresence } from 'motion/react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/category/:categoryId" element={<PageWrapper><CategoryPage /></PageWrapper>} />
            <Route path="/product/:productId" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
            {/* Fallback for other routes */}
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-serif font-bold mb-4">Trang đang phát triển</h2>
                <a href="/" className="text-dairy-green font-bold">Quay lại trang chủ</a>
              </div>
            } />
          </Routes>
        </main>
        <BottomNav />
        <Footer />
      </div>
    </Router>
  );
}
