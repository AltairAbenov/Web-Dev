export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  categoryId: number; // новое поле — привязка к категории
  likes: number;      // новое поле — счётчик лайков
}






