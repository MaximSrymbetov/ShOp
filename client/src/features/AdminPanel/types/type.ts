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
  user_id: number;
  status: string;
  total: string;
  delivery_status: string;
  User: User;
};
