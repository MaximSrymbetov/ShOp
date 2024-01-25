/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import type { Product, ProductId } from './types/type';

export const FetchProductall = async (): Promise<Product[]> => {
  const data = (await fetch('/api/product')).json();
  return data;
};

export const fetchAddProducts = async (formData:FormData):Promise<Product>=>{

  
  const res=(await fetch('/api/product/add',{
    method:'POST',
    body:formData
}))
if (!res.ok) {
  const { message } = await res.json();
  throw message;
}
console.log(res);

const data:Product = await res.json();
console.log(data);

return data
};


export const fetchDeleteProduct = async (
  productId: ProductId,
): Promise<{ message: string; id: ProductId }> => {
  const { data }: { data: { message: string; id: ProductId } } = await axios.delete(
    `/api/product/${productId}/delete`,
  );
console.log(data);

  return data;
};
