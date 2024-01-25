/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import type { Product, ProductId, ProductWithoutOwnerPhoto } from './types/type';


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
return data
};


export const fetchDeleteProduct = async (
  productId: ProductId,
): Promise<{ message: string; id: ProductId }> => {
  const { data }: { data: { message: string; id: ProductId } } = await axios.delete(
    `/api/product/${productId}/delete`,
  );

  return data;
};

// export const fetchUpdateProducts = async (
//   product: Product,
// ): Promise<{ message: string; product: Product }> => {
//   const { data }: { data: { message: string; product: Product } } = await axios.put(
//     `/api/product/${product.id}/update`,
//     product,
//   );
//   return data;
// };

export const fetchUpdateProducts = async ({id,name,description,price}:ProductWithoutOwnerPhoto): Promise<Product> => {
  const data:Product = await (await  fetch(`/api/product/update/${id}`,{
    method:'PUT',
    headers: { 'Content-Type': 'Application/json' },
    body:JSON.stringify({
        name,description,price
    })
})).json();
return data
};