import type { User } from '../../Auth/types/type';
import type { Product } from '../../Products/types/type';

export type Order = {
  id: number;
  total: string | undefined;
  status: string | undefined;
  user_id: number;
  delivery_status: string;
  User: User;
  Order_info: OrderInfo;
  Order_items: OrderItem[];
};
export type OrderWithOut = {
  id: number;
  total: string;
  status: string;
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
