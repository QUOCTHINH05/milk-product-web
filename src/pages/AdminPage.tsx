import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../constants';

const ADMIN_SESSION_KEY = 'toanphat_admin_authenticated';

const getVariantPrices = (product: ReturnType<typeof getProducts>[number]) => {
  if (product.variantPrices && product.variantPrices.length > 0) {
    return product.variantPrices;
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  return images.map((image, index) => ({
    image,
    price: product.price + index * 1000
  }));
};

export const AdminPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => getProducts());

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem('toanphat_products', JSON.stringify(products));
  }, [products]);

  const totalValue = useMemo(
    () => products.reduce((sum, product) => sum + getVariantPrices(product).reduce((innerSum, item) => innerSum + item.price, 0), 0),
    [products]
  );

  const handleVariantPriceChange = (productId: string, image: string, value: string) => {
    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) return;

    setProducts((current) =>
      current.map((product) => {
        if (product.id !== productId) return product;

        const nextVariants = getVariantPrices(product).map((item) =>
          item.image === image ? { ...item, price: numericValue } : item
        );

        return {
          ...product,
          variantPrices: nextVariants,
          price: nextVariants[0]?.price ?? product.price
        };
      })
    );
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-dairy-cream px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[28px] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-dairy-green">Admin Panel</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-dairy-ink">Quản lý giá sản phẩm</h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-dairy-ink/10 px-5 py-2 font-semibold text-dairy-ink transition hover:border-dairy-green hover:text-dairy-green"
          >
            Đăng xuất
          </button>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-dairy-ink/60">Tổng số sản phẩm</p>
            <p className="mt-2 text-3xl font-bold text-dairy-ink">{products.length}</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-dairy-ink/60">Giá trung bình</p>
            <p className="mt-2 text-3xl font-bold text-dairy-ink">
              {Math.round(totalValue / (products.length || 1)).toLocaleString('vi-VN')}đ
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-dairy-ink/60">Tổng giá trị</p>
            <p className="mt-2 text-3xl font-bold text-dairy-ink">{totalValue.toLocaleString('vi-VN')}đ</p>
          </div>
        </div>

        <div className="space-y-6">
          {products.map((product) => {
            const variants = getVariantPrices(product);

            return (
              <div key={product.id} className="rounded-[28px] border border-dairy-ink/10 bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="h-12 w-12 rounded-xl object-cover" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-dairy-green">{product.categoryId}</p>
                      <h2 className="font-serif text-2xl font-bold text-dairy-ink">{product.name}</h2>
                    </div>
                  </div>
                  <span className="rounded-full bg-dairy-blue/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-dairy-ink">
                    {variants.length} ảnh
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {variants.map((variant) => (
                    <div key={`${product.id}-${variant.image}`} className="rounded-2xl border border-dairy-ink/5 bg-dairy-blue/10 p-3">
                      <img src={variant.image} alt={product.name} className="h-24 w-full rounded-xl object-cover" />
                      <div className="mt-3 flex items-center gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-dairy-ink/60">Giá</label>
                        <input
                          type="number"
                          min={0}
                          value={variant.price}
                          onChange={(event) => handleVariantPriceChange(product.id, variant.image, event.target.value)}
                          className="flex-1 rounded-xl border border-dairy-ink/10 bg-white px-3 py-2 text-dairy-ink outline-none transition focus:border-dairy-green"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
