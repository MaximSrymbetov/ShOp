/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import type { Order } from './types/type';

export const FetchOrderall = async (): Promise<Order[]> => {
  const {data} = (await axios('/api/order'))

  return data.orders;
};

// export const fetchAddProducts = async (product: {
//   category_id: number;
//   gender_id: number;
//   name: string;
//   description: string;
//   price: string;
// }): Promise<{ message: string; product: Product }> => {
//   const { data }: { data: { message: string; product: Product } } = await axios.post(
//     '/api/product/add',
//     product,
//   );

//   console.log(data,"!!!!!!!!!!!");
//   return data;

// };
