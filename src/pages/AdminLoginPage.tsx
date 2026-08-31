import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'nhatduy1234';
const ADMIN_SESSION_KEY = 'toanphat_admin_authenticated';

export const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    if (isLoggedIn) {
      navigate('/admin', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_SESSION_KEY, 'true');
      navigate('/admin', { replace: true });
      return;
    }

    setError('Tên đăng nhập hoặc mật khẩu không đúng.');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-[28px] border border-dairy-ink/10 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-dairy-ink">Admin Login</h1>
          <p className="mt-2 text-sm text-dairy-ink/60">Chỉ dành cho quản trị viên</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-semibold text-dairy-ink">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-xl border border-dairy-ink/10 bg-dairy-blue/20 px-4 py-3 text-dairy-ink outline-none transition focus:border-dairy-green"
              placeholder="admin"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-dairy-ink">
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-dairy-ink/10 bg-dairy-blue/20 px-4 py-3 text-dairy-ink outline-none transition focus:border-dairy-green"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-dairy-green px-5 py-3 font-bold text-white transition hover:bg-dairy-ink"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};
