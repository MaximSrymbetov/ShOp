import type { Favorite } from '../../Favorite/types/type';

export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  isAdmin: boolean;
  Favorite: Favorite;
};

export type StateAuth = {
  user: User | undefined;
};

export type Authorization = {
  email: string;
  password: string;
};

export type Registration = {
  name: string;
  phone: string;
  email: string;
  password: string;
};
