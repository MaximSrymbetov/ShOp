/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import type { Order } from './types/type';

export const FetchOrderall = async (): Promise<Order[]> => {
  const { data }: { data: { message: string; orders: Order[] } } = await axios('/api/order');
  return data.orders;
};

// export const fetchDeleteProduct = async (
//   productId: ProductId,
// ): Promise<{ message: string; id: ProductId }> => {
//   const { data }: { data: { message: string; id: ProductId } } = await axios.delete(
//     `/api/products/${productId}/destroy`,
//   );
//   console.log(data);

//   return data;
// };

export const fetchUpdateOrder = async (
  order: Order,
): Promise<{ message: string; order: Order }> => {
  console.log(order, 'fetch to db');

  const { data }: { data: { message: string; order: Order } } = await axios.put(
    `/api/order/update/${order.id}`,
    order,
  );
  console.log(data, 'fetch from db');
  return data;
};
