/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Product } from './types/type';

export const FetchProductall = async (): Promise<Product[]> => {
  const data = (await fetch('/api/product')).json();

  return data;
};
