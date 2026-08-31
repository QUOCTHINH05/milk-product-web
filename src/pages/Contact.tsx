import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend: just clear and show alert
    alert('Cảm ơn bạn! Tin nhắn đã được ghi nhận (demo).');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="pb-20">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-3xl font-serif font-bold mb-4">Liên hệ</h1>
        <p className="text-dairy-ink/70 mb-8">Bạn có thể liên hệ với Toàn Phát qua form bên dưới hoặc thông tin liên hệ.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl p-6 shadow-sm">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Họ và tên" className="w-full p-3 border rounded-lg" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-lg" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tin nhắn" className="w-full p-3 border rounded-lg h-32" />
            <div className="flex items-center justify-between">
              <button type="submit" className="px-6 py-3 bg-dairy-green text-white rounded-full font-bold">Gửi tin</button>
              <span className="text-sm text-dairy-ink/60">Hoặc gọi ngay: <strong className="text-dairy-ink">03 2626 0939</strong></span>
            </div>
          </form>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Thông tin liên hệ</h3>
              <p className="flex items-center gap-3 text-dairy-ink/70"><MapPin /> 194, ấp Minh Nghĩa, xã Hương Mỹ, tỉnh Vĩnh Long</p>
              <p className="flex items-center gap-3 text-dairy-ink/70"><Phone /> 03 2626 0939</p>
              <p className="flex items-center gap-3 text-dairy-ink/70"><Mail /> toanphat.bt268@gmail.com</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Giờ làm việc</h3>
              <p className="text-dairy-ink/70">Thứ Hai - Thứ Sáu: 8:00 - 17:00</p>
              <p className="text-dairy-ink/70">Thứ Bảy: 8:00 - 12:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
