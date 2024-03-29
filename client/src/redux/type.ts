import type { User } from '../features/Auth/types/type';

export type Action =
  | { type: 'auth/signin'; payload: User }
  | { type: 'autch/userCheck'; payload: User }
  | { type: 'auth/login'; payload: User }
  | { type: 'autch/logout'; payload: { message: string } };
