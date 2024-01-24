/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Product } from './types/type';

export const FetchProductall = async (): Promise<Product[]> => {
  const data = (await fetch('/api/product')).json();
  return data;
};

export const fetchAddProducts = async (formData: FormData): Promise<Product> => {
  const res = await fetch('/api/product/add', {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  console.log(res);

  const data: Product = await res.json();
  console.log(data);

  return data;
};