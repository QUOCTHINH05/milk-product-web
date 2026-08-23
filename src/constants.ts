import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'toan-phat',
    name: 'Toàn Phát',
    description: 'Nhà phân phối lẻ Toàn Phát — chuyên cung cấp các sản phẩm dinh dưỡng và yến sào.',
    image: 'assets/Logo-BG.png',
    rating: 4.8
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'tp-chao-sgf',
    categoryId: 'toan-phat',
    name: 'Cháo SGF',
    price: 45000,
    image: 'assets/chaosgf/1.jpg',
    images: [
      'assets/chaosgf/1.jpg','assets/chaosgf/2.jpg','assets/chaosgf/3.jpg','assets/chaosgf/4.jpg','assets/chaosgf/5.jpg','assets/chaosgf/6.jpg','assets/chaosgf/7.jpg','assets/chaosgf/8.jpg','assets/chaosgf/9.jpg','assets/chaosgf/10.jpg','assets/chaosgf/11.jpg','assets/chaosgf/12.jpg','assets/chaosgf/13.jpg','assets/chaosgf/14.jpg','assets/chaosgf/15.jpg','assets/chaosgf/16.jpg','assets/chaosgf/17.jpg','assets/chaosgf/18.jpg','assets/chaosgf/19.jpg','assets/chaosgf/20.jpg','assets/chaosgf/21.jpg','assets/chaosgf/22.jpg','assets/chaosgf/23.jpg','assets/chaosgf/24.jpg'
    ],
    description: 'Cháo dinh dưỡng thơm ngon, dễ tiêu, phù hợp cho mọi lứa tuổi.'
  },
  {
    id: 'tp-sua-firo',
    categoryId: 'toan-phat',
    name: 'Sữa Firo',
    price: 58000,
    image: 'assets/firo/1.jpg',
    images: [
      'assets/firo/1.jpg','assets/firo/2.jpg','assets/firo/3.jpg','assets/firo/4.jpg','assets/firo/5.jpg','assets/firo/6.jpg','assets/firo/7.jpg','assets/firo/8.jpg','assets/firo/9.jpg','assets/firo/10.jpg','assets/firo/11.jpg'
    ],
    description: 'Sữa dinh dưỡng Firo, vị thơm, giàu canxi và vitamin.'
  },
  {
    id: 'tp-goldenfarm',
    categoryId: 'toan-phat',
    name: 'Sữa tươi Goldfarm',
    price: 49000,
    image: 'assets/goldenfarm/1.jpg',
    images: ['assets/goldenfarm/1.jpg','assets/goldenfarm/2.jpg','assets/goldenfarm/3.jpg','assets/goldenfarm/4.jpg'],
    description: 'Sữa tươi nguyên chất Goldfarm, nguồn dinh dưỡng tinh khiết từ trang trại.'
  },
  {
    id: 'tp-natonestkh',
    categoryId: 'toan-phat',
    name: 'Yến sào Khánh Hòa Natonest',
    price: 1200000,
    image: 'assets/natonestkh/1.jpg',
    images: ['assets/natonestkh/1.jpg','assets/natonestkh/2.jpg','assets/natonestkh/3.jpg','assets/natonestkh/4.jpg','assets/natonestkh/5.jpg','assets/natonestkh/6.jpg','assets/natonestkh/7.jpg'],
    description: 'Yến sào đặc sản Khánh Hòa, sạch, đảm bảo chất lượng dinh dưỡng cao.'
  },
  {
    id: 'tp-tranest',
    categoryId: 'toan-phat',
    name: 'Tranest',
    price: 350000,
    image: 'assets/tranest/1.jpg',
    images: ['assets/tranest/1.jpg','assets/tranest/2.jpg','assets/tranest/3.jpg','assets/tranest/4.jpg','assets/tranest/5.jpg','assets/tranest/6.jpg','assets/tranest/7.jpg','assets/tranest/8.jpg','assets/tranest/9.jpg','assets/tranest/10.jpg'],
    description: 'Sản phẩm Tranest chất lượng cao, phù hợp làm quà tặng và sử dụng hằng ngày.'
  },
  {
    id: 'tp-yen-my-khanh',
    categoryId: 'toan-phat',
    name: 'Yến sào Mỹ Khánh',
    price: 1350000,
    image: 'assets/yenmykhanh/1.jpg',
    images: ['assets/yenmykhanh/1.jpg','assets/yenmykhanh/2.jpg','assets/yenmykhanh/3.jpg','assets/yenmykhanh/4.jpg','assets/yenmykhanh/5.jpg','assets/yenmykhanh/6.jpg','assets/yenmykhanh/7.jpg','assets/yenmykhanh/8.jpg','assets/yenmykhanh/9.jpg','assets/yenmykhanh/10.jpg','assets/yenmykhanh/11.jpg','assets/yenmykhanh/12.jpg'],
    description: 'Yến sào Mỹ Khánh cao cấp, hương vị tự nhiên, giàu protein và khoáng chất.'
  },
  {
    id: 'tp-takazumi',
    categoryId: 'toan-phat',
    name: 'Tã Kazumi',
    price: 220000,
    image: 'assets/takazumi/1.jpg',
    images: ['assets/takazumi/1.jpg','assets/takazumi/2.jpg','assets/takazumi/3.jpg','assets/takazumi/4.jpg','assets/takazumi/5.jpg','assets/takazumi/6.jpg','assets/takazumi/7.jpg','assets/takazumi/8.jpg','assets/takazumi/9.jpg','assets/takazumi/10.jpg','assets/takazumi/11.jpg','assets/takazumi/12.jpg','assets/takazumi/13.jpg'],
    description: 'Tã Kazumi mềm mại, thấm hút tốt, bảo vệ làn da bé.'
  },
  {
    id: 'tp-yumisun',
    categoryId: 'toan-phat',
    name: 'Tã Yumisun',
    price: 200000,
    image: 'assets/tayumisun/1.jpg',
    images: ['assets/tayumisun/1.jpg','assets/tayumisun/2.jpg','assets/tayumisun/3.jpg','assets/tayumisun/4.jpg','assets/tayumisun/5.jpg','assets/tayumisun/6.jpg','assets/tayumisun/7.jpg','assets/tayumisun/8.jpg'],
    description: 'Tã Yumisun thiết kế ôm vừa vặn, an toàn cho bé.'
  }
];
