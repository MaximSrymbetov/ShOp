/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// import axios from 'axios';
import type { Product } from './types/type';

export const FetchProductall = async (): Promise<Product[]> => {
  const data = (await fetch('/api/product')).json();
  return data;
};


export const fetchAddProducts = async (product: {
  category_id: number;
  gender_id: number;
  name: string;
  description: string;
  price: string;
}): Promise<{ message: string; product: Product }> => {
  const { data }: { data: { message: string; product: Product } } = await axios.post(
    '/api/product/add',
    product,
  );


  return data;
  
};
