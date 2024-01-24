/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

// import ProductItem from './ProductItem';

function AllOrders(): JSX.Element {
  const orders = useSelector((store: RootState) => store.orders.orders);
  console.log(orders);

  return <div>{orders ? orders.map((el) => <p key={el.id}>{el.status}</p>) : <p>pusto</p>}</div>;
}

export default AllOrders;
