import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'feder-nutrition',
    name: 'Sữa Feder Nutrition',
    description: 'Nguồn dinh dưỡng thuần khiết từ những trang trại xanh mướt.',
    image: '../../assets/feder-nutrition.jpg',
    rating: 4.9
  },
  {
    id: 'procare-usmilk',
    name: 'Sữa Procare USMilk',
    description: 'Hương vị thơm ngon, hỗ trợ tiêu hóa và tăng cường miễn dịch.',
    image: '../../assets/procare-usmilk.jpg',
    rating: 4.8
  },
  {
    id: 'chao-tuoi-sgf',
    name: 'Cháo tươi SGF',
    description: 'Sự kết hợp hoàn hảo giữa các loại hạt cao cấp và công nghệ hiện đại.',
    image: '../../assets/chao-tuoi-sgf.jpg',
    rating: 4.7
  },
  {
    id: 'yen-my-khanh',
    name: 'Yến sào cao cấp Mỹ Khánh',
    description: 'Độ béo ngậy đặc trưng, làm dậy vị cho mọi món ăn của bạn.',
    image: '../../assets/yen-my-khanh.jpg',
    rating: 4.9
  },
  {
    id: 'yen-khanh-hoa',
    name: 'Yến Vipnest Khánh Hòa',
    description: 'Giải pháp dinh dưỡng tối ưu cho từng giai đoạn phát triển.',
    image: '../../assets/yen-khanh-hoa.jpg',
    rating: 4.6
  },
  {
    id: 'yen-happy',
    name: 'Yến Happy',
    description: 'Sản phẩm được yêu thích bởi hương vị thơm ngon và chất lượng tuyệt vời.',
    image: '../../assets/yen-happy.jpg',
    rating: 4.8
  }
];

export const PRODUCTS: Product[] = [
  // Sữa Tươi Nguyên Chất
  { id: 'st1', categoryId: 'feder-nutrition', name: 'Sữa Tươi Thanh Trùng 1L', price: 45000, image: 'https://images.unsplash.com/photo-1563636619-e9107da5a199?auto=format&fit=crop&q=80&w=400', description: 'Sữa tươi 100% nguyên chất, không đường.' },
  { id: 'st2', categoryId: 'feder-nutrition', name: 'Sữa Tươi Tiệt Trùng Ít Đường', price: 38000, image: 'https://images.unsplash.com/photo-1550583724-1255818c0533?auto=format&fit=crop&q=80&w=400', description: 'Hương vị nhẹ nhàng, dễ uống cho cả gia đình.' },
  { id: 'st3', categoryId: 'feder-nutrition', name: 'Sữa Tươi Vị Dâu 180ml', price: 12000, image: 'https://images.unsplash.com/photo-1553902861-428a8b2ee23b?auto=format&fit=crop&q=80&w=400', description: 'Sự kết hợp ngọt ngào giữa sữa và dâu tươi.' },
  { id: 'st4', categoryId: 'feder-nutrition', name: 'Sữa Tươi Vị Socola 180ml', price: 12000, image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&q=80&w=400', description: 'Đậm đà vị socola nguyên chất.' },
  { id: 'st5', categoryId: 'feder-nutrition', name: 'Sữa Tươi Tách Béo', price: 42000, image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&q=80&w=400', description: 'Giảm 99% chất béo, giữ trọn canxi.' },

  // Sữa Chua & Phô Mai
  { id: 'sc1', categoryId: 'sua-chua-dairy', name: 'Sữa Chua Có Đường', price: 8000, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400', description: 'Lên men tự nhiên, mịn màng.' },
  { id: 'sc2', categoryId: 'sua-chua-dairy', name: 'Sữa Chua Hy Lạp', price: 25000, image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&q=80&w=400', description: 'Giàu protein, kết cấu đặc mịn.' },
  { id: 'sc3', categoryId: 'sua-chua-dairy', name: 'Phô Mai Lát 200g', price: 55000, image: 'https://images.unsplash.com/photo-1485962391945-447a3a4511b2?auto=format&fit=crop&q=80&w=400', description: 'Tiện lợi cho bữa sáng kẹp bánh mì.' },
  { id: 'sc4', categoryId: 'sua-chua-dairy', name: 'Phô Mai Viên Cho Bé', price: 45000, image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=400', description: 'Bổ sung canxi và vitamin D.' },
  { id: 'sc5', categoryId: 'sua-chua-dairy', name: 'Sữa Chua Uống Vị Cam', price: 15000, image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=400', description: 'Tươi mát, sảng khoái.' },

  // Sữa Hạt Dinh Dưỡng
  { id: 'sh1', categoryId: 'sua-hat-dinh-duong', name: 'Sữa Hạnh Nhân Không Đường', price: 65000, image: 'https://images.unsplash.com/photo-1596450514735-2d002f0434b4?auto=format&fit=crop&q=80&w=400', description: 'Tốt cho tim mạch và làn da.' },
  { id: 'sh2', categoryId: 'sua-hat-dinh-duong', name: 'Sữa Óc Chó 1L', price: 75000, image: 'https://images.unsplash.com/photo-1550583724-1255818c0533?auto=format&fit=crop&q=80&w=400', description: 'Tăng cường trí nhớ và sức khỏe não bộ.' },
  { id: 'sh3', categoryId: 'sua-hat-dinh-duong', name: 'Sữa Đậu Nành Nguyên Chất', price: 25000, image: 'https://images.unsplash.com/photo-1579619173026-24751921b4d4?auto=format&fit=crop&q=80&w=400', description: 'Nguồn đạm thực vật dồi dào.' },
  { id: 'sh4', categoryId: 'sua-hat-dinh-duong', name: 'Sữa Hạt Sen 500ml', price: 35000, image: 'https://images.unsplash.com/photo-1596450514735-2d002f0434b4?auto=format&fit=crop&q=80&w=400', description: 'Giúp ngủ ngon và thư giãn.' },
  { id: 'sh5', categoryId: 'sua-hat-dinh-duong', name: 'Sữa Gạo Lứt Huyết Rồng', price: 30000, image: 'https://images.unsplash.com/photo-1596450514735-2d002f0434b4?auto=format&fit=crop&q=80&w=400', description: 'Giàu chất xơ và vitamin nhóm B.' },

  // Bơ & Kem Sữa
  { id: 'bk1', categoryId: 'bo-kem-cao-cap', name: 'Bơ Lạt Tự Nhiên 250g', price: 85000, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400', description: 'Lý tưởng cho làm bánh và nấu ăn.' },
  { id: 'bk2', categoryId: 'bo-kem-cao-cap', name: 'Kem Tươi Whipping Cream', price: 120000, image: 'https://images.unsplash.com/photo-1553902861-428a8b2ee23b?auto=format&fit=crop&q=80&w=400', description: 'Độ béo 35%, đánh bông mịn màng.' },
  { id: 'bk3', categoryId: 'bo-kem-cao-cap', name: 'Bơ Mặn Cao Cấp', price: 90000, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400', description: 'Vị mặn nhẹ, thơm mùi sữa.' },
  { id: 'bk4', categoryId: 'bo-kem-cao-cap', name: 'Kem Sữa Nấu Ăn Cooking Cream', price: 110000, image: 'https://images.unsplash.com/photo-1553902861-428a8b2ee23b?auto=format&fit=crop&q=80&w=400', description: 'Chịu nhiệt tốt, không bị tách lớp.' },
  { id: 'bk5', categoryId: 'bo-kem-cao-cap', name: 'Phô Mai Kem Cream Cheese', price: 95000, image: 'https://images.unsplash.com/photo-1485962391945-447a3a4511b2?auto=format&fit=crop&q=80&w=400', description: 'Mềm mượt, vị chua nhẹ đặc trưng.' },

  // Sữa Công Thức
  { id: 'sct1', categoryId: 'sua-cong-thuc', name: 'Sữa Bột Cho Bé 0-6 Tháng', price: 450000, image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=400', description: 'Công thức gần giống sữa mẹ nhất.' },
  { id: 'sct2', categoryId: 'sua-cong-thuc', name: 'Sữa Bột Phát Triển Chiều Cao', price: 420000, image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=400', description: 'Bổ sung Canxi và Vitamin K2.' },
  { id: 'sct3', categoryId: 'sua-cong-thuc', name: 'Sữa Bột Cho Người Cao Tuổi', price: 550000, image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=400', description: 'Hỗ trợ xương khớp và tim mạch.' },
  { id: 'sct4', categoryId: 'sua-cong-thuc', name: 'Sữa Bột Cho Bà Bầu', price: 480000, image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=400', description: 'Bổ sung Axit Folic và DHA.' },
  { id: 'sct5', categoryId: 'sua-cong-thuc', name: 'Sữa Bột Tăng Cân Cho Bé', price: 430000, image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=400', description: 'Giàu năng lượng và lợi khuẩn.' },
];
