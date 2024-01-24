import type { User } from '../../Auth/types/type';

export type Product = {
  category_id: number;
  gender_id: number;
  name: string;
  description: string;
  price: string;
};

export type Order = {
  id: number;
  total: string;
  status: string;
  user_id: number;
  delivery_status: string;
  User: User;
  Order_info: OrderInfo;
  Order_item: OrderItem;
};

export type OrderInfo = {
  id: number;
  address: string;
  phone: string;
  order_id: number;
  createdAt: Date;
};

export type OrderItem = {
  id: number;
  quantity: string;
  product_id: number;
  order_id: number;
  Product: Product;
};
