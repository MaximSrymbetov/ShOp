import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../redux/store';

import { updateOrder } from './orderSlice';
import { useForm } from 'react-hook-form';
import { Order } from './types/type';

function FormUpdateOrder(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  const orders = useSelector((store: RootState) => store.orders.orders);
  const dispatch = useAppDispatch();
  let order: Order | undefined;
  if (id) {
    order = orders.find((oreder) => oreder.id === +id);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { status: order?.status, total: order?.total } });

  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(updateOrder({ ...order, status, total }));s
  //   navigate(-1);
  // };
  const onSubmit = async (data: { total: string; status: string }): Promise<void> => {
    dispatch(updateOrder({ ...order, total: data.total, status: data.status })).catch((err) =>
      console.error(err),
    );
    navigate('/orderTable');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <select value={order?.status} onChange={(e) => setStatus(e.target.value)}>
        <option className="checkbox" value="created">
          Создан
        </option>
        <option className="checkbox" value="confirmed">
          Ожидает оплаты
        </option>
        <option className="checkbox" value="payed">
          Оплачен
        </option>
        <option className="checkbox" value="delivery">
          Доставка
        </option>
        <option className="checkbox" value="closed">
          Закрыт
        </option>
      </select> */}
      <input type="text" defaultValue={order.total} {...register('total')} />
      <button type="submit">Изменить</button>
    </form>
  );
}

export default FormUpdateOrder;
/* eslint-disable @typescript-eslint/no-unsafe-return */
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import type { RootState } from '../../redux/store';

// function AllOrders(): JSX.Element {
//   const {idOrder}=useParams()

//   const orders = useSelector((store: RootState) => store.orders.orders);
//   const order = orders.find((orderOne) => orderOne.id === Number(idOrder));

//   return (
//     <div>

//  <p>{order?.status}-Статус</p>
//  <p>{order?.total}-Общая сумма </p>
//  <Link to={`/order/${order.id}/update`}>
//           <button type="button">Изменить</button>
//         </Link>

//   </div>
//   )
// }

// export default AllOrders;
