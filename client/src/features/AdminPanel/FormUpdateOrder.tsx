/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch, type RootState } from '../../redux/store';

import { updateOrder } from './orderSlice';

import type { Order } from './types/type';

function FormUpdateOrder(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  const orders = useSelector((store: RootState) => store.orders.orders);
  const dispatch = useAppDispatch();
  let order: Order | undefined;
  if (id) {
    order = orders.find((oreder) => oreder.id === +id);
  }

  const { register, handleSubmit } = useForm({
    defaultValues: { status: order?.status, total: order?.total },
  });

  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(updateOrder({ ...order, status, total }));s
  //   navigate(-1);
  // };
  const onSubmit = (data: { total: string | undefined; status: string | undefined }): void => {
    dispatch(updateOrder({ ...order, total: data.total, status: data.status })).catch((err) =>
      console.error(err),
    );
    navigate('/orderTable');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select defaultValue={order?.status} {...register('status')}>
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
      </select>
      <input type="text" defaultValue={order?.total} {...register('total')} />
      <button type="submit">Изменить</button>
    </form>
  );
}

export default FormUpdateOrder;
