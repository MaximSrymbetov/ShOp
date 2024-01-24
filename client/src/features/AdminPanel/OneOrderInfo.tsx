/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';

function AllOrders(): JSX.Element {
  const { idOrder } = useParams();

  const orders = useSelector((store: RootState) => store.orders.orders);
  const order = orders.find((orderOne) => orderOne.id === Number(idOrder));
  const orderId = Number(order?.id);
  return (
    <div>
      <p>{order?.status}-Статус</p>
      <p>{order?.total}-Общая сумма </p>

      <Link to={`/order/${orderId}/update`}>
        <button type="button">Изменить</button>
      </Link>
    </div>
  );
}

export default AllOrders;
